/*     */ package tools.wztosql;
/*     */
/*     */ import java.io.FileNotFoundException;
/*     */ import java.io.FileOutputStream;
/*     */ import java.io.IOException;
/*     */ import java.rmi.NotBoundException;
/*     */ import java.util.ArrayList;
/*     */ import java.util.HashMap;
/*     */ import java.util.List;
/*     */ import java.util.Map;
/*     */ import javax.management.InstanceAlreadyExistsException;
/*     */ import javax.management.MBeanRegistrationException;
/*     */ import javax.management.MalformedObjectNameException;
/*     */ import javax.management.NotCompliantMBeanException;
/*     */ import provider.MapleData;
/*     */ import provider.MapleDataProvider;
/*     */ import provider.MapleDataProviderFactory;
/*     */ import provider.MapleDataTool;
/*     */ import tools.Pair;
/*     */ import tools.StringUtil;
/*     */
/*     */ public class MonsterDropCreator /*     */ {
    /*     */ private static final int COMMON_ETC_RATE = 600000;
    /*     */    private static final int SUPER_BOSS_ITEM_RATE = 300000;
    /*     */    private static final int POTION_RATE = 20000;
    /*     */    private static final int ARROWS_RATE = 25000;
    /*  35 */    private static int lastmonstercardid = 2388070;
    /*  36 */    private static boolean addFlagData = false;
    /*  37 */    protected static String monsterQueryData = "drop_data";
    /*  38 */    protected static List<Pair<Integer, String>> itemNameCache = new ArrayList();
    /*  39 */    protected static List<Pair<Integer, MobInfo>> mobCache = new ArrayList();
    /*  40 */    protected static Map<Integer, Boolean> bossCache = new HashMap();
    /*     */
    /*     */ public static void main(String[] args) throws FileNotFoundException, IOException, NotBoundException, InstanceAlreadyExistsException, MBeanRegistrationException, NotCompliantMBeanException, MalformedObjectNameException {
        /*  43 */ MapleData data = MapleDataProviderFactory.getDataProvider("String.wz").getData("MonsterBook.img");
        /*     */
        /*  45 */ System.out.println("准备提取数据!");
        /*  46 */ System.out.println("按任意键继续...");
        /*     */
        /*  49 */ long currtime = System.currentTimeMillis();
        /*  50 */    // addFlagData = Boolean.parseBoolean(args[0]);
/*     */ addFlagData = false;
        /*  52 */ System.out.println("载入: 物品名称.");
        /*  53 */ getAllItems();
        /*  54 */ System.out.println("载入: 怪物数据.");
        /*  55 */ getAllMobs();
        /*     */
        /*  58 */ StringBuilder sb = new StringBuilder();
        /*  59 */ FileOutputStream out = new FileOutputStream("mobDrop.sql", true);
        /*     */
        /*  62 */ for (Map.Entry e : getDropsNotInMonsterBook().entrySet()) {
            /*  63 */ boolean first = true;
            /*     */
            /*  65 */ sb.append("INSERT INTO ").append(monsterQueryData).append(" VALUES ");
            /*  66 */ for (Integer monsterdrop : (List<Integer>) e.getValue()) {
                /*  67 */ int itemid = monsterdrop.intValue();
                /*  68 */ int monsterId = ((Integer) e.getKey()).intValue();
                /*  69 */ int rate = getChance(itemid, monsterId, bossCache.containsKey(Integer.valueOf(monsterId)));
                /*     */
                /*  71 */ if (rate <= 100000) {
                    /*  72 */ switch (monsterId) {
                        /*     */ case 9400121:
                            /*  74 */ rate *= 5;
                            /*  75 */ break;
                        /*     */ case 9400112:
                        /*     */ case 9400113:
                        /*     */ case 9400300:
                            /*  79 */ rate *= 10;
                        /*     */                    }
                    /*     */                }
                /*     */
                /*  83 */ for (int i = 0; i < multipleDropsIncrement(itemid, monsterId); i++) {
                    /*  84 */ if (first) {
                        /*  85 */ sb.append("(DEFAULT, ");
                        /*  86 */ first = false;
                        /*     */                    } else {
                        /*  88 */ sb.append(", (DEFAULT, ");
                        /*     */                    }
                    /*  90 */ sb.append(monsterId).append(", ");
                    /*  91 */ if (addFlagData) {
                        /*  92 */ sb.append("'', ");
                        /*     */                    }
                    /*  94 */ sb.append(itemid).append(", ");
                    /*  95 */ sb.append("1, 1,");
                    /*  96 */ sb.append("0, ");
                    /*  97 */ int num = IncrementRate(itemid, i);
                    /*  98 */ sb.append(num == -1 ? rate : num);
                    /*  99 */ sb.append(")");
                    /* 100 */ first = false;
                    /*     */                }
                /* 102 */ sb.append("\n");
                /* 103 */ sb.append("-- Name : ");
                /* 104 */ retriveNLogItemName(sb, itemid);
                /* 105 */ sb.append("\n");
                /*     */            }
            /* 107 */ sb.append(";");
            /* 108 */ sb.append("\n");
            /*     */
            /* 110 */ out.write(sb.toString().getBytes());
            /* 111 */ sb.delete(0, 2147483647);
            /*     */        }
        /*     */
        /* 115 */ System.out.println("载入: Drops from String.wz/MonsterBook.img.");
        /* 116 */ for (MapleData dataz : data.getChildren()) {
            /* 117 */ int monsterId = Integer.parseInt(dataz.getName());
            /* 118 */ int idtoLog = monsterId;
            /* 119 */ boolean first = true;
            /*     */
            /* 121 */ if (monsterId == 9400408) {
                /* 122 */ idtoLog = 9400409;
                /*     */            }
            /* 124 */ if (dataz.getChildByPath("reward").getChildren().size() > 0) {
                /* 125 */ sb.append("INSERT INTO ").append(monsterQueryData).append(" VALUES ");
                /* 126 */ for (MapleData drop : dataz.getChildByPath("reward")) {
                    /* 127 */ int itemid = MapleDataTool.getInt(drop);
                    /* 128 */ int rate = getChance(itemid, idtoLog, bossCache.containsKey(Integer.valueOf(idtoLog)));
                    /*     */
                    /* 130 */ for (Pair Pair : mobCache) {
                        /* 131 */ if (((Integer) Pair.getLeft()).intValue() == monsterId) {
                            /* 132 */ if ((((MobInfo) Pair.getRight()).getBoss() <= 0)
                                    || /* 133 */ (rate > 100000)) {
                                break;
                            }
                            /* 134 */ if (((MobInfo) Pair.getRight()).rateItemDropLevel() == 2) {
                                /* 135 */ rate *= 10;
                                break;
                                /* 136 */                            }
                            if (((MobInfo) Pair.getRight()).rateItemDropLevel() == 3) {
                                /* 137 */ switch (monsterId) {
                                    /*     */ case 8810018:
                                        /* 139 */ rate *= 48;
                                    /*     */ case 8800002:
                                        /* 141 */ rate *= 45;
                                        /* 142 */ break;
                                    /*     */ default:
                                        /* 144 */ rate *= 30;
                                        /* 145 */ break;
                                    /*     */                                }
                                /*     */                            }
                            /* 148 */ switch (monsterId) {
                                /*     */ case 8860010:
                                /*     */ case 9400265:
                                /*     */ case 9400270:
                                /*     */ case 9400273:
                                    /* 153 */ rate *= 10;
                                    /* 154 */ break;
                                /*     */ case 9400294:
                                    /* 156 */ rate *= 24;
                                    /* 157 */ break;
                                /*     */ case 9420522:
                                    /* 159 */ rate *= 29;
                                    /* 160 */ break;
                                /*     */ case 9400409:
                                    /* 162 */ rate *= 35;
                                    /* 163 */ break;
                                /*     */ case 9400287:
                                    /* 165 */ rate *= 60;
                                    /* 166 */ break;
                                /*     */ default:
                                    /* 168 */ rate *= 10;
                                    /* 169 */ break;
                                /*     */                            }
                            /*     */
                            /*     */                        }
                        /*     */
                        /*     */                    }
                    /*     */
                    /* 177 */ for (int i = 0; i < multipleDropsIncrement(itemid, idtoLog); i++) {
                        /* 178 */ if (first) {
                            /* 179 */ sb.append("(DEFAULT, ");
                            /* 180 */ first = false;
                            /*     */                        } else {
                            /* 182 */ sb.append(", (DEFAULT, ");
                            /*     */                        }
                        /* 184 */ sb.append(idtoLog).append(", ");
                        /* 185 */ if (addFlagData) {
                            /* 186 */ sb.append("'', ");
                            /*     */                        }
                        /* 188 */ sb.append(itemid).append(", ");
                        /* 189 */ sb.append("1, 1,");
                        /* 190 */ sb.append("0, ");
                        /* 191 */ int num = IncrementRate(itemid, i);
                        /* 192 */ sb.append(num == -1 ? rate : num);
                        /* 193 */ sb.append(")");
                        /* 194 */ first = false;
                        /*     */                    }
                    /* 196 */ sb.append("\n");
                    /* 197 */ sb.append("-- Name : ");
                    /* 198 */ retriveNLogItemName(sb, itemid);
                    /* 199 */ sb.append("\n");
                    /*     */                }
                /* 201 */ sb.append(";");
                /*     */            }
            /* 203 */ sb.append("\n");
            /*     */
            /* 205 */ out.write(sb.toString().getBytes());
            /* 206 */ sb.delete(0, 2147483647);
            /*     */        }
        /*     */
        /* 209 */ System.out.println("载入: 怪物书数据.");
        /* 210 */ StringBuilder SQL = new StringBuilder();
        /* 211 */ StringBuilder bookName = new StringBuilder();
        /* 212 */ for (Pair Pair : itemNameCache) {
            /* 213 */ if ((((Integer) Pair.getLeft()).intValue() >= 2380000) && (((Integer) Pair.getLeft()).intValue() <= lastmonstercardid)) {
                /* 214 */ bookName.append((String) Pair.getRight());
                /*     */
                /* 216 */ if (bookName.toString().contains(" Card")) {
                    /* 217 */ bookName.delete(bookName.length() - 5, bookName.length());
                    /*     */                }
                /* 219 */ for (Pair Pair_ : mobCache) {
                    /* 220 */ if (((MobInfo) Pair_.getRight()).getName().equalsIgnoreCase(bookName.toString())) {
                        /* 221 */ int rate = 1000;
                        /* 222 */ if (((MobInfo) Pair_.getRight()).getBoss() > 0) {
                            /* 223 */ rate *= 25;
                            /*     */                        }
                        /* 225 */ SQL.append("INSERT INTO ").append(monsterQueryData).append(" VALUES ");
                        /* 226 */ SQL.append("(DEFAULT, ");
                        /* 227 */ SQL.append(Pair_.getLeft()).append(", ");
                        /* 228 */ if (addFlagData) {
                            /* 229 */ sb.append("'', ");
                            /*     */                        }
                        /* 231 */ SQL.append(Pair.getLeft()).append(", ");
                        /* 232 */ SQL.append("1, 1,");
                        /* 233 */ SQL.append("0, ");
                        /* 234 */ SQL.append(rate);
                        /* 235 */ SQL.append(");\n");
                        /* 236 */ SQL.append("-- 物品名 : ").append((String) Pair.getRight()).append("\n");
                        /* 237 */ break;
                        /*     */                    }
                    /*     */                }
                /* 240 */ bookName.delete(0, 2147483647);
                /*     */            }
            /*     */        }
        /* 243 */ System.out.println("载入: 怪物卡数据.");
        /* 244 */ SQL.append("\n");
        /* 245 */ int i = 1;
        /* 246 */ int lastmonsterbookid = 0;
        /* 247 */ for (Pair Pair : itemNameCache) /* 248 */ {
            if ((((Integer) Pair.getLeft()).intValue() >= 2380000) && (((Integer) Pair.getLeft()).intValue() <= lastmonstercardid)) {
                /* 249 */ bookName.append((String) Pair.getRight());
                /*     */
                /* 251 */ if (bookName.toString().contains(" Card")) {
                    /* 252 */ bookName.delete(bookName.length() - 5, bookName.length());
                    /*     */                }
                /* 254 */ if (((Integer) Pair.getLeft()).intValue() != lastmonsterbookid) /*     */ {
                    /* 257 */ for (Pair Pair_ : mobCache) {
                        /* 258 */ if (((MobInfo) Pair_.getRight()).getName().equalsIgnoreCase(bookName.toString())) {
                            /* 259 */ SQL.append("INSERT INTO ").append("monstercarddata").append(" VALUES (");
                            /* 260 */ SQL.append(i).append(", ");
                            /* 261 */ SQL.append(Pair.getLeft());
                            /* 262 */ SQL.append(", ");
                            /* 263 */ SQL.append(Pair_.getLeft()).append(");\n");
                            /* 264 */ lastmonsterbookid = ((Integer) Pair.getLeft()).intValue();
                            /* 265 */ i++;
                            /* 266 */ break;
                            /*     */                        }
                        /*     */                    }
                    /* 269 */ bookName.delete(0, 2147483647);
                    /*     */                }
                /*     */            }
        }
        /* 272 */ out.write(SQL.toString().getBytes());
        /* 273 */ out.close();
        /* 274 */ long time = System.currentTimeMillis() - currtime;
        /* 275 */ time /= 1000L;
        /*     */
        /* 277 */ System.out.println(new StringBuilder().append("Time taken : ").append(time).toString());
        /*     */    }
    /*     */
    /*     */ private static void retriveNLogItemName(StringBuilder sb, int id) {
        /* 281 */ for (Pair Pair : itemNameCache) {
            /* 282 */ if (((Integer) Pair.getLeft()).intValue() == id) {
                /* 283 */ sb.append((String) Pair.getRight());
                /* 284 */ return;
                /*     */            }
            /*     */        }
        /* 287 */ sb.append("MISSING STRING, ID : ");
        /* 288 */ sb.append(id);
        /*     */    }
    /*     */
    /*     */ private static int IncrementRate(int itemid, int times) {
        /* 292 */ if (times == 0) {
            /* 293 */ if ((itemid == 1002357) || (itemid == 1002926) || (itemid == 1002927)) /* 294 */ {
                return 999999;
            }
            /* 295 */ if (itemid == 1122000) /* 296 */ {
                return 999999;
            }
            /* 297 */ if (itemid == 1002972) /* 298 */ {
                return 999999;
            }
            /*     */        } /* 300 */ else if (times == 1) {
            /* 301 */ if ((itemid == 1002357) || (itemid == 1002926) || (itemid == 1002927)) /* 302 */ {
                return 999999;
            }
            /* 303 */ if (itemid == 1122000) /* 304 */ {
                return 999999;
            }
            /* 305 */ if (itemid == 1002972) /* 306 */ {
                return 300000;
            }
            /*     */        } /* 308 */ else if (times == 2) {
            /* 309 */ if ((itemid == 1002357) || (itemid == 1002926) || (itemid == 1002927)) /* 310 */ {
                return 300000;
            }
            /* 311 */ if (itemid == 1122000) /* 312 */ {
                return 300000;
            }
            /*     */        } /* 314 */ else if (times == 3) {
            /* 315 */ if ((itemid == 1002357) || (itemid == 1002926) || (itemid == 1002927)) /* 316 */ {
                return 300000;
            }
            /*     */        } /* 318 */ else if ((times == 4) && ( /* 319 */(itemid == 1002357) || (itemid == 1002926) || (itemid == 1002927))) {
            /* 320 */ return 300000;
            /*     */        }
        /*     */
        /* 323 */ return -1;
        /*     */    }
    /*     */
    /*     */ private static int multipleDropsIncrement(int itemid, int mobid) {
        /* 327 */ switch (itemid) /*     */ {
            /*     */ case 1002357:
            /*     */ case 1002390:
            /*     */ case 1002430:
            /*     */ case 1002926:
            /*     */ case 1002927:
                /* 335 */ return 5;
            /*     */ case 1122000:
                /* 337 */ return 4;
            /*     */ case 4021010:
                /* 339 */ return 7;
            /*     */ case 1002972:
                /* 341 */ return 2;
            /*     */ case 4000172:
                /* 343 */ if (mobid == 7220001) {
                    /* 344 */ return 8;
                    /*     */                }
                /* 346 */ return 1;
            /*     */ case 4000000:
            /*     */ case 4000003:
            /*     */ case 4000005:
            /*     */ case 4000016:
            /*     */ case 4000018:
            /*     */ case 4000019:
            /*     */ case 4000021:
            /*     */ case 4000026:
            /*     */ case 4000029:
            /*     */ case 4000031:
            /*     */ case 4000032:
            /*     */ case 4000033:
            /*     */ case 4000043:
            /*     */ case 4000044:
            /*     */ case 4000073:
            /*     */ case 4000074:
            /*     */ case 4000113:
            /*     */ case 4000114:
            /*     */ case 4000115:
            /*     */ case 4000117:
            /*     */ case 4000118:
            /*     */ case 4000119:
            /*     */ case 4000166:
            /*     */ case 4000167:
            /*     */ case 4000195:
            /*     */ case 4000268:
            /*     */ case 4000269:
            /*     */ case 4000270:
            /*     */ case 4000283:
            /*     */ case 4000284:
            /*     */ case 4000285:
            /*     */ case 4000289:
            /*     */ case 4000298:
            /*     */ case 4000329:
            /*     */ case 4000330:
            /*     */ case 4000331:
            /*     */ case 4000356:
            /*     */ case 4000364:
            /*     */ case 4000365:
                /* 387 */ if ((mobid == 2220000) || (mobid == 3220000) || (mobid == 3220001) || (mobid == 4220000) || (mobid == 5220000) || (mobid == 5220002) || (mobid == 5220003) || (mobid == 6220000) || (mobid == 4000119) || (mobid == 7220000) || (mobid == 7220002) || (mobid == 8220000) || (mobid == 8220002) || (mobid == 8220003)) {
                    /* 388 */ return 3;
                    /*     */                }
                /* 390 */ return 1;
            /*     */        }
        /* 392 */ return 1;
        /*     */    }
    /*     */
    /*     */ private static int getChance(int id, int mobid, boolean boss) /*     */ {
        /* 402 */ switch (id / 10000) {
            /*     */ case 100:
                /* 404 */ switch (id) {
                    /*     */ case 1002357:
                    /*     */ case 1002390:
                    /*     */ case 1002430:
                    /*     */ case 1002905:
                    /*     */ case 1002906:
                    /*     */ case 1002926:
                    /*     */ case 1002927:
                    /*     */ case 1002972:
                        /* 413 */ return 300000;
                    /*     */                }
                /* 415 */ return 900;
            /*     */ case 103:
                /* 417 */ switch (id) {
                    /*     */ case 1032062:
                        /* 419 */ return 100;
                    /*     */                }
                /* 421 */ return 1000;
            /*     */ case 105:
            /*     */ case 109:
                /* 424 */ switch (id) {
                    /*     */ case 1092049:
                        /* 426 */ return 100;
                    /*     */                }
                /* 428 */ return 700;
            /*     */ case 104:
            /*     */ case 106:
            /*     */ case 107:
                /* 432 */ switch (id) {
                    /*     */ case 1072369:
                        /* 434 */ return 300000;
                    /*     */                }
                /* 436 */ return 800;
            /*     */ case 108:
            /*     */ case 110:
                /* 439 */ return 1000;
            /*     */ case 112:
                /* 441 */ switch (id) {
                    /*     */ case 1122000:
                        /* 443 */ return 300000;
                    /*     */ case 1122011:
                    /*     */ case 1122012:
                        /* 446 */ return 800000;
                    /*     */                }
            /*     */ case 130:
            /*     */ case 131:
            /*     */ case 132:
            /*     */ case 137:
                /* 452 */ switch (id) {
                    /*     */ case 1372049:
                        /* 454 */ return 999999;
                    /*     */                }
                /* 456 */ return 700;
            /*     */ case 138:
            /*     */ case 140:
            /*     */ case 141:
            /*     */ case 142:
            /*     */ case 144:
                /* 462 */ return 700;
            /*     */ case 133:
            /*     */ case 143:
            /*     */ case 145:
            /*     */ case 146:
            /*     */ case 147:
            /*     */ case 148:
            /*     */ case 149:
                /* 470 */ return 500;
            /*     */ case 204:
                /* 472 */ switch (id) {
                    /*     */ case 2049000:
                        /* 474 */ return 150;
                    /*     */                }
                /* 476 */ return 300;
            /*     */ case 205:
                /* 478 */ return 50000;
            /*     */ case 206:
                /* 480 */ return 30000;
            /*     */ case 228:
                /* 482 */ return 30000;
            /*     */ case 229:
                /* 484 */ switch (id) {
                    /*     */ case 2290096:
                        /* 486 */ return 800000;
                    /*     */ case 2290125:
                        /* 488 */ return 100000;
                    /*     */                }
                /* 490 */ return 500;
            /*     */ case 233:
                /* 492 */ switch (id) {
                    /*     */ case 2330007:
                        /* 494 */ return 50;
                    /*     */                }
                /* 496 */ return 500;
            /*     */ case 400:
                /* 498 */ switch (id) {
                    /*     */ case 4000021:
                        /* 500 */ return 50000;
                    /*     */ case 4001094:
                        /* 502 */ return 999999;
                    /*     */ case 4001000:
                        /* 504 */ return 5000;
                    /*     */ case 4000157:
                        /* 506 */ return 100000;
                    /*     */ case 4001023:
                    /*     */ case 4001024:
                        /* 509 */ return 999999;
                    /*     */ case 4000244:
                    /*     */ case 4000245:
                        /* 512 */ return 2000;
                    /*     */ case 4001005:
                        /* 514 */ return 5000;
                    /*     */ case 4001006:
                        /* 516 */ return 10000;
                    /*     */ case 4000017:
                    /*     */ case 4000082:
                        /* 519 */ return 40000;
                    /*     */ case 4000446:
                    /*     */ case 4000451:
                    /*     */ case 4000456:
                        /* 523 */ return 10000;
                    /*     */ case 4000459:
                        /* 525 */ return 20000;
                    /*     */ case 4000030:
                        /* 527 */ return 60000;
                    /*     */ case 4000339:
                        /* 529 */ return 70000;
                    /*     */ case 4000313:
                    /*     */ case 4007000:
                    /*     */ case 4007001:
                    /*     */ case 4007002:
                    /*     */ case 4007003:
                    /*     */ case 4007004:
                    /*     */ case 4007005:
                    /*     */ case 4007006:
                    /*     */ case 4007007:
                    /*     */ case 4031456:
                        /* 540 */ return 100000;
                    /*     */ case 4001126:
                        /* 542 */ return 500000;
                    /*     */                }
                /* 544 */ switch (id / 1000) {
                    /*     */ case 4000:
                    /*     */ case 4001:
                        /* 547 */ return 600000;
                    /*     */ case 4003:
                        /* 549 */ return 200000;
                    /*     */ case 4004:
                    /*     */ case 4006:
                        /* 552 */ return 10000;
                    /*     */ case 4005:
                        /* 554 */ return 1000;
                    /*     */ case 4002:
                    /*     */                }
            case 401:
            /*     */ case 402:
                /* 558 */ switch (id) {
                    /*     */ case 4020009:
                        /* 560 */ return 5000;
                    /*     */ case 4021010:
                        /* 562 */ return 300000;
                    /*     */                }
                /* 564 */ return 9000;
            /*     */ case 403:
                /* 566 */ switch (id) {
                    /*     */ case 4032024:
                        /* 568 */ return 50000;
                    /*     */ case 4032181:
                        /* 570 */ return boss ? 999999 : 300000;
                    /*     */ case 4032025:
                    /*     */ case 4032155:
                    /*     */ case 4032156:
                    /*     */ case 4032159:
                    /*     */ case 4032161:
                    /*     */ case 4032163:
                        /* 577 */ return 600000;
                    /*     */ case 4032166:
                    /*     */ case 4032167:
                    /*     */ case 4032168:
                        /* 581 */ return 10000;
                    /*     */ case 4032151:
                    /*     */ case 4032158:
                    /*     */ case 4032164:
                    /*     */ case 4032180:
                        /* 586 */ return 2000;
                    /*     */ case 4032152:
                    /*     */ case 4032153:
                    /*     */ case 4032154:
                        /* 590 */ return 4000;
                    /*     */                }
                /* 592 */ return 300;
            /*     */ case 413:
                /* 594 */ return 6000;
            /*     */ case 416:
                /* 596 */ return 6000;
            /*     */        }
        /* 598 */ switch (id / 1000000) {
            /*     */ case 1:
                /* 600 */ return 999999;
            /*     */ case 2:
                /* 602 */ switch (id) {
                    /*     */ case 2000004:
                    /*     */ case 2000005:
                        /* 605 */ return boss ? 999999 : 20000;
                    /*     */ case 2000006:
                        /* 608 */ return mobid == 9420540 ? 50000 : boss ? 999999 : 20000;
                    /*     */ case 2022345:
                        /* 610 */ return boss ? 999999 : 3000;
                    /*     */ case 2012002:
                        /* 612 */ return 6000;
                    /*     */ case 2020013:
                    /*     */ case 2020015:
                        /* 615 */ return boss ? 999999 : 20000;
                    /*     */ case 2060000:
                    /*     */ case 2060001:
                    /*     */ case 2061000:
                    /*     */ case 2061001:
                        /* 620 */ return 25000;
                    /*     */ case 2070000:
                    /*     */ case 2070001:
                    /*     */ case 2070002:
                    /*     */ case 2070003:
                    /*     */ case 2070004:
                    /*     */ case 2070008:
                    /*     */ case 2070009:
                    /*     */ case 2070010:
                        /* 629 */ return 500;
                    /*     */ case 2070005:
                        /* 631 */ return 400;
                    /*     */ case 2070006:
                    /*     */ case 2070007:
                        /* 634 */ return 200;
                    /*     */ case 2070012:
                    /*     */ case 2070013:
                        /* 638 */ return 1500;
                    /*     */ case 2070019:
                        /* 640 */ return 100;
                    /*     */ case 2210006:
                        /* 642 */ return 999999;
                    /*     */                }
                /* 644 */ return 20000;
            /*     */ case 3:
                /* 647 */ switch (id) {
                    /*     */ case 3010007:
                    /*     */ case 3010008:
                        /* 650 */ return 500;
                    /*     */                }
                /* 652 */ return 2000;
            /*     */        }
        /* 654 */ System.out.println(new StringBuilder().append("未处理的数据, ID : ").append(id).toString());
        /* 655 */ return 999999;
        /*     */    }
    /*     */
    /*     */ private static Map<Integer, List<Integer>> getDropsNotInMonsterBook() {
        /* 659 */ Map drops = new HashMap();
        /*     */
        /* 661 */ List IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 664 */ IndiviualMonsterDrop.add(Integer.valueOf(4000139));
        /* 665 */ IndiviualMonsterDrop.add(Integer.valueOf(2002011));
        /* 666 */ IndiviualMonsterDrop.add(Integer.valueOf(2002011));
        /* 667 */ IndiviualMonsterDrop.add(Integer.valueOf(2002011));
        /* 668 */ IndiviualMonsterDrop.add(Integer.valueOf(2000004));
        /* 669 */ IndiviualMonsterDrop.add(Integer.valueOf(2000004));
        /*     */
        /* 671 */ drops.put(Integer.valueOf(9400112), IndiviualMonsterDrop);
        /*     */
        /* 673 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 676 */ IndiviualMonsterDrop.add(Integer.valueOf(4000140));
        /* 677 */ IndiviualMonsterDrop.add(Integer.valueOf(2022027));
        /* 678 */ IndiviualMonsterDrop.add(Integer.valueOf(2022027));
        /* 679 */ IndiviualMonsterDrop.add(Integer.valueOf(2000004));
        /* 680 */ IndiviualMonsterDrop.add(Integer.valueOf(2000004));
        /* 681 */ IndiviualMonsterDrop.add(Integer.valueOf(2002008));
        /* 682 */ IndiviualMonsterDrop.add(Integer.valueOf(2002008));
        /*     */
        /* 684 */ drops.put(Integer.valueOf(9400113), IndiviualMonsterDrop);
        /*     */
        /* 686 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 689 */ IndiviualMonsterDrop.add(Integer.valueOf(4000141));
        /* 690 */ IndiviualMonsterDrop.add(Integer.valueOf(2000004));
        /* 691 */ IndiviualMonsterDrop.add(Integer.valueOf(2040813));
        /* 692 */ IndiviualMonsterDrop.add(Integer.valueOf(2041030));
        /* 693 */ IndiviualMonsterDrop.add(Integer.valueOf(2041040));
        /* 694 */ IndiviualMonsterDrop.add(Integer.valueOf(1072238));
        /* 695 */ IndiviualMonsterDrop.add(Integer.valueOf(1032026));
        /* 696 */ IndiviualMonsterDrop.add(Integer.valueOf(1372011));
        /*     */
        /* 698 */ drops.put(Integer.valueOf(9400300), IndiviualMonsterDrop);
        /*     */
        /* 700 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 703 */ IndiviualMonsterDrop.add(Integer.valueOf(4000225));
        /* 704 */ IndiviualMonsterDrop.add(Integer.valueOf(2000006));
        /* 705 */ IndiviualMonsterDrop.add(Integer.valueOf(2000004));
        /* 706 */ IndiviualMonsterDrop.add(Integer.valueOf(2070013));
        /* 707 */ IndiviualMonsterDrop.add(Integer.valueOf(2002005));
        /* 708 */ IndiviualMonsterDrop.add(Integer.valueOf(2022018));
        /* 709 */ IndiviualMonsterDrop.add(Integer.valueOf(2040306));
        /* 710 */ IndiviualMonsterDrop.add(Integer.valueOf(2043704));
        /* 711 */ IndiviualMonsterDrop.add(Integer.valueOf(2044605));
        /* 712 */ IndiviualMonsterDrop.add(Integer.valueOf(2041034));
        /* 713 */ IndiviualMonsterDrop.add(Integer.valueOf(1032019));
        /* 714 */ IndiviualMonsterDrop.add(Integer.valueOf(1102013));
        /* 715 */ IndiviualMonsterDrop.add(Integer.valueOf(1322026));
        /* 716 */ IndiviualMonsterDrop.add(Integer.valueOf(1092015));
        /* 717 */ IndiviualMonsterDrop.add(Integer.valueOf(1382016));
        /* 718 */ IndiviualMonsterDrop.add(Integer.valueOf(1002276));
        /* 719 */ IndiviualMonsterDrop.add(Integer.valueOf(1002403));
        /* 720 */ IndiviualMonsterDrop.add(Integer.valueOf(1472027));
        /*     */
        /* 722 */ drops.put(Integer.valueOf(9400013), IndiviualMonsterDrop);
        /*     */
        /* 724 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 727 */ IndiviualMonsterDrop.add(Integer.valueOf(1372049));
        /*     */
        /* 729 */ drops.put(Integer.valueOf(8800002), IndiviualMonsterDrop);
        /*     */
        /* 731 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 734 */ IndiviualMonsterDrop.add(Integer.valueOf(4001094));
        /* 735 */ IndiviualMonsterDrop.add(Integer.valueOf(2290125));
        /*     */
        /* 737 */ drops.put(Integer.valueOf(8810018), IndiviualMonsterDrop);
        /*     */
        /* 739 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 742 */ IndiviualMonsterDrop.add(Integer.valueOf(4000138));
        /* 743 */ IndiviualMonsterDrop.add(Integer.valueOf(4010006));
        /* 744 */ IndiviualMonsterDrop.add(Integer.valueOf(2000006));
        /* 745 */ IndiviualMonsterDrop.add(Integer.valueOf(2000011));
        /* 746 */ IndiviualMonsterDrop.add(Integer.valueOf(2020016));
        /* 747 */ IndiviualMonsterDrop.add(Integer.valueOf(2022024));
        /* 748 */ IndiviualMonsterDrop.add(Integer.valueOf(2022026));
        /* 749 */ IndiviualMonsterDrop.add(Integer.valueOf(2043705));
        /* 750 */ IndiviualMonsterDrop.add(Integer.valueOf(2040716));
        /* 751 */ IndiviualMonsterDrop.add(Integer.valueOf(2040908));
        /* 752 */ IndiviualMonsterDrop.add(Integer.valueOf(2040510));
        /* 753 */ IndiviualMonsterDrop.add(Integer.valueOf(1072239));
        /* 754 */ IndiviualMonsterDrop.add(Integer.valueOf(1422013));
        /* 755 */ IndiviualMonsterDrop.add(Integer.valueOf(1402016));
        /* 756 */ IndiviualMonsterDrop.add(Integer.valueOf(1442020));
        /* 757 */ IndiviualMonsterDrop.add(Integer.valueOf(1432011));
        /* 758 */ IndiviualMonsterDrop.add(Integer.valueOf(1332022));
        /* 759 */ IndiviualMonsterDrop.add(Integer.valueOf(1312015));
        /* 760 */ IndiviualMonsterDrop.add(Integer.valueOf(1382010));
        /* 761 */ IndiviualMonsterDrop.add(Integer.valueOf(1372009));
        /* 762 */ IndiviualMonsterDrop.add(Integer.valueOf(1082085));
        /* 763 */ IndiviualMonsterDrop.add(Integer.valueOf(1332022));
        /* 764 */ IndiviualMonsterDrop.add(Integer.valueOf(1472033));
        /*     */
        /* 766 */ drops.put(Integer.valueOf(9400121), IndiviualMonsterDrop);
        /*     */
        /* 768 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 771 */ IndiviualMonsterDrop.add(Integer.valueOf(4032024));
        /* 772 */ IndiviualMonsterDrop.add(Integer.valueOf(4032025));
        /* 773 */ IndiviualMonsterDrop.add(Integer.valueOf(4020006));
        /* 774 */ IndiviualMonsterDrop.add(Integer.valueOf(4020008));
        /* 775 */ IndiviualMonsterDrop.add(Integer.valueOf(4010001));
        /* 776 */ IndiviualMonsterDrop.add(Integer.valueOf(4004001));
        /* 777 */ IndiviualMonsterDrop.add(Integer.valueOf(2070006));
        /* 778 */ IndiviualMonsterDrop.add(Integer.valueOf(2044404));
        /* 779 */ IndiviualMonsterDrop.add(Integer.valueOf(2044702));
        /* 780 */ IndiviualMonsterDrop.add(Integer.valueOf(2044305));
        /* 781 */ IndiviualMonsterDrop.add(Integer.valueOf(1102029));
        /* 782 */ IndiviualMonsterDrop.add(Integer.valueOf(1032023));
        /* 783 */ IndiviualMonsterDrop.add(Integer.valueOf(1402004));
        /* 784 */ IndiviualMonsterDrop.add(Integer.valueOf(1072210));
        /* 785 */ IndiviualMonsterDrop.add(Integer.valueOf(1040104));
        /* 786 */ IndiviualMonsterDrop.add(Integer.valueOf(1060092));
        /* 787 */ IndiviualMonsterDrop.add(Integer.valueOf(1082129));
        /* 788 */ IndiviualMonsterDrop.add(Integer.valueOf(1442008));
        /* 789 */ IndiviualMonsterDrop.add(Integer.valueOf(1072178));
        /* 790 */ IndiviualMonsterDrop.add(Integer.valueOf(1050092));
        /* 791 */ IndiviualMonsterDrop.add(Integer.valueOf(1002271));
        /* 792 */ IndiviualMonsterDrop.add(Integer.valueOf(1051053));
        /* 793 */ IndiviualMonsterDrop.add(Integer.valueOf(1382008));
        /* 794 */ IndiviualMonsterDrop.add(Integer.valueOf(1002275));
        /* 795 */ IndiviualMonsterDrop.add(Integer.valueOf(1051082));
        /* 796 */ IndiviualMonsterDrop.add(Integer.valueOf(1050064));
        /* 797 */ IndiviualMonsterDrop.add(Integer.valueOf(1472028));
        /* 798 */ IndiviualMonsterDrop.add(Integer.valueOf(1072193));
        /* 799 */ IndiviualMonsterDrop.add(Integer.valueOf(1072172));
        /* 800 */ IndiviualMonsterDrop.add(Integer.valueOf(1002285));
        /*     */
        /* 802 */ drops.put(Integer.valueOf(9400545), IndiviualMonsterDrop);
        /*     */
        /* 804 */ IndiviualMonsterDrop = new ArrayList();
        /*     */
        /* 806 */ return drops;
        /*     */    }
    /*     */
    /*     */ private static void getAllItems() {
        /* 810 */ MapleDataProvider data = MapleDataProviderFactory.getDataProvider("String.wz");
        /*     */
        /* 812 */ List itemPairs = new ArrayList();
        /*     */
        /* 815 */ MapleData itemsData = data.getData("Cash.img");
        /* 816 */ for (MapleData itemFolder : itemsData.getChildren()) {
            /* 817 */ int itemId = Integer.parseInt(itemFolder.getName());
            /* 818 */ String itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
            /* 819 */ itemPairs.add(new Pair(Integer.valueOf(itemId), itemName));
            /*     */        }
        /*     */
        /* 822 */ itemsData = data.getData("Consume.img");
        /* 823 */ for (MapleData itemFolder : itemsData.getChildren()) {
            /* 824 */ int itemId = Integer.parseInt(itemFolder.getName());
            /* 825 */ String itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
            /* 826 */ itemPairs.add(new Pair(Integer.valueOf(itemId), itemName));
            /*     */        }
        /*     */
        /* 829 */ itemsData = data.getData("Eqp.img").getChildByPath("Eqp");
        /* 830 */ for (MapleData eqpType : itemsData.getChildren()) {
            /* 831 */ for (MapleData itemFolder : eqpType.getChildren()) {
                /* 832 */ int itemId = Integer.parseInt(itemFolder.getName());
                /* 833 */ String itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
                /* 834 */ itemPairs.add(new Pair(Integer.valueOf(itemId), itemName));
                /*     */            }
            /*     */        }
        /*     */
        /* 838 */ itemsData = data.getData("Etc.img").getChildByPath("Etc");
        /* 839 */ for (MapleData itemFolder : itemsData.getChildren()) {
            /* 840 */ int itemId = Integer.parseInt(itemFolder.getName());
            /* 841 */ String itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
            /* 842 */ itemPairs.add(new Pair(Integer.valueOf(itemId), itemName));
            /*     */        }
        /*     */
        /* 845 */ itemsData = data.getData("Ins.img");
        /* 846 */ for (MapleData itemFolder : itemsData.getChildren()) {
            /* 847 */ int itemId = Integer.parseInt(itemFolder.getName());
            /* 848 */ String itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
            /* 849 */ itemPairs.add(new Pair(Integer.valueOf(itemId), itemName));
            /*     */        }
        /*     */
        /* 852 */ itemsData = data.getData("Pet.img");
        /* 853 */ for (MapleData itemFolder : itemsData.getChildren()) {
            /* 854 */ int itemId = Integer.parseInt(itemFolder.getName());
            /* 855 */ String itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
            /* 856 */ itemPairs.add(new Pair(Integer.valueOf(itemId), itemName));
            /*     */        }
        /* 858 */ itemNameCache.addAll(itemPairs);
        /*     */    }
    /*     */
    /*     */ public static void getAllMobs() {
        /* 862 */ List itemPairs = new ArrayList();
        /* 863 */ MapleDataProvider data = MapleDataProviderFactory.getDataProvider("String.wz");
        /* 864 */ MapleDataProvider mobData = MapleDataProviderFactory.getDataProvider("Mob.wz");
        /* 865 */ MapleData mob = data.getData("Mob.img");
        /*     */
        /* 870 */ for (MapleData itemFolder : mob.getChildren()) {
            /* 871 */ int id = Integer.parseInt(itemFolder.getName());
            /*     */ try /*     */ {
                /* 874 */ MapleData monsterData = mobData.getData(StringUtil.getLeftPaddedStr(new StringBuilder().append(Integer.toString(id)).append(".img").toString(), '0', 11));
                /* 875 */ int boss = id == 8810018 ? 1 : MapleDataTool.getIntConvert("boss", monsterData.getChildByPath("info"), 0);
                /*     */
                /* 877 */ if (boss > 0) {
                    /* 878 */ bossCache.put(Integer.valueOf(id), Boolean.valueOf(true));
                    /*     */                }
                /*     */
                /* 881 */ MobInfo mobInfo = new MobInfo(boss, MapleDataTool.getIntConvert("rareItemDropLevel", monsterData.getChildByPath("info"), 0), MapleDataTool.getString("name", itemFolder, "NO-NAME"));
                /*     */
                /* 886 */ itemPairs.add(new Pair(Integer.valueOf(id), mobInfo));
                /*     */            } catch (Exception fe) {
                /*     */            }
            /*     */        }
        /* 890 */ mobCache.addAll(itemPairs);
        /*     */    }
    /*     */ public static class MobInfo {
        /*     */ public int boss;
        /*     */        public int rareItemDropLevel;
        /*     */        public String name;
        /*     */
        /*     */ public MobInfo(int boss, int rareItemDropLevel, String name) {
            /* 900 */ this.boss = boss;
            /* 901 */ this.rareItemDropLevel = rareItemDropLevel;
            /* 902 */ this.name = name;
            /*     */        }
        /*     */
        /*     */ public int getBoss() {
            /* 906 */ return this.boss;
            /*     */        }
        /*     */
        /*     */ public int rateItemDropLevel() {
            /* 910 */ return this.rareItemDropLevel;
            /*     */        }
        /*     */
        /*     */ public String getName() {
            /* 914 */ return this.name;
            /*     */        }
        /*     */    }
    /*     */ }
