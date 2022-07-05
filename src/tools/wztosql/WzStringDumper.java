/*   1:    */ package tools.wztosql;
/*   2:    */
/*   3:    */ import java.io.File;
/*   4:    */ import java.io.FileNotFoundException;
/*   5:    */ import java.io.FileOutputStream;
/*   6:    */ import java.io.IOException;
/*   8:    */ import java.io.PrintWriter;
/*   9:    */ import provider.MapleData;
/*  10:    */ import provider.MapleDataProvider;
/*  11:    */ import provider.MapleDataProviderFactory;
/*  12:    */
/*  13:    */ public class WzStringDumper /*  14:    */ {
    /*  15:    */ public static void main(String[] args)
            /*  16:    */ throws FileNotFoundException, IOException /*  17:    */ {
        /*  19: 23 */ MapleDataProvider stringProvider = MapleDataProviderFactory.getDataProvider("string.wz");
        /*  20:    */
        /*  21: 25 */ MapleData cash = stringProvider.getData("Cash.img");
        /*  22: 26 */ MapleData consume = stringProvider.getData("Consume.img");
        /*  23: 27 */ MapleData eqp = stringProvider.getData("Eqp.img").getChildByPath("Eqp");
        /*  24: 28 */ MapleData etc = stringProvider.getData("Etc.img").getChildByPath("Etc");
        /*  25: 29 */ MapleData ins = stringProvider.getData("Ins.img");
        /*  26: 30 */ MapleData pet = stringProvider.getData("Pet.img");
        /*  27: 31 */ MapleData map = stringProvider.getData("Map.img");
        /*  28: 32 */ MapleData mob = stringProvider.getData("Mob.img");
        /*  29: 33 */ MapleData skill = stringProvider.getData("Skill.img");
        /*  30: 34 */ MapleData npc = stringProvider.getData("Npc.img");
        /*  31:    */
        /*  32: 36 */ String output = args[0];
        /*  33:    */
        /*  34: 38 */ File outputDir = new File(output);
        /*  35: 39 */ File cashTxt = new File(output + "\\Cash.txt");
        /*  36: 40 */ File useTxt = new File(output + "\\Use.txt");
        /*  37: 41 */ File eqpDir = new File(output + "\\Equip");
        /*  38: 42 */ File etcTxt = new File(output + "\\Etc.txt");
        /*  39: 43 */ File insTxt = new File(output + "\\Setup.txt");
        /*  40: 44 */ File petTxt = new File(output + "\\Pet.txt");
        /*  41: 45 */ File mapTxt = new File(output + "\\Map.txt");
        /*  42: 46 */ File mobTxt = new File(output + "\\Mob.txt");
        /*  43: 47 */ File skillTxt = new File(output + "\\Skill.txt");
        /*  44: 48 */ File npcTxt = new File(output + "\\NPC.txt");
        /*  45: 49 */ outputDir.mkdir();
        /*  46: 50 */ cashTxt.createNewFile();
        /*  47: 51 */ useTxt.createNewFile();
        /*  48: 52 */ eqpDir.mkdir();
        /*  49: 53 */ etcTxt.createNewFile();
        /*  50: 54 */ insTxt.createNewFile();
        /*  51: 55 */ petTxt.createNewFile();
        /*  52: 56 */ mapTxt.createNewFile();
        /*  53: 57 */ mobTxt.createNewFile();
        /*  54: 58 */ skillTxt.createNewFile();
        /*  55: 59 */ npcTxt.createNewFile();
        /*  56:    */
        /*  57: 61 */ System.out.println("提取 Cash.img 数据...");
        /*  58: 62 */ PrintWriter writer = new PrintWriter(new FileOutputStream(cashTxt));
        /*  59: 63 */ for (MapleData child : cash.getChildren()) /*  60:    */ {
            /*  61: 64 */ MapleData nameData = child.getChildByPath("name");
            /*  62: 65 */ MapleData descData = child.getChildByPath("desc");
            /*  63: 66 */ String name = "";
            /*  64: 67 */ String desc = "(无描述)";
            /*  65: 68 */ if (nameData != null) {
                /*  66: 69 */ name = (String) nameData.getData();
                /*  67:    */            }
            /*  68: 71 */ if (descData != null) {
                /*  69: 72 */ desc = (String) descData.getData();
                /*  70:    */            }
            /*  71: 74 */ writer.println(child.getName() + " - " + name + " - " + desc);
            /*  72:    */        }
        /*  73: 76 */ writer.flush();
        /*  74: 77 */ writer.close();
        /*  75: 78 */ System.out.println("Cash.img 提取完成.");
        /*  76:    */
        /*  77: 80 */ System.out.println("提取 Consume.img 数据...");
        /*  78: 81 */ writer = new PrintWriter(new FileOutputStream(useTxt));
        /*  79: 82 */ for (MapleData child : consume.getChildren()) /*  80:    */ {
            /*  81: 83 */ MapleData nameData = child.getChildByPath("name");
            /*  82: 84 */ MapleData descData = child.getChildByPath("desc");
            /*  83: 85 */ String name = "";
            /*  84: 86 */ String desc = "(无描述)";
            /*  85: 87 */ if (nameData != null) {
                /*  86: 88 */ name = (String) nameData.getData();
                /*  87:    */            }
            /*  88: 90 */ if (descData != null) {
                /*  89: 91 */ desc = (String) descData.getData();
                /*  90:    */            }
            /*  91: 93 */ writer.println(child.getName() + " - " + name + " - " + desc);
            /*  92:    */        }
        /*  93: 95 */ writer.flush();
        /*  94: 96 */ writer.close();
        /*  95: 97 */ System.out.println("Consume.img 提取完成.");
        /*  96:    */
        /*  97: 99 */ System.out.println("提取 Eqp.img 数据...");
        /*  98:100 */ for (MapleData child : eqp.getChildren()) /*  99:    */ {
            /* 100:101 */ System.out.println("提取 " + child.getName() + " 数据...");
            /* 101:102 */ File eqpFile = new File(output + "\\Equip\\" + child.getName() + ".txt");
            /* 102:103 */ eqpFile.createNewFile();
            /* 103:104 */ PrintWriter eqpWriter = new PrintWriter(new FileOutputStream(eqpFile));
            /* 104:105 */ for (MapleData child2 : child.getChildren()) /* 105:    */ {
                /* 106:106 */ MapleData nameData = child2.getChildByPath("name");
                /* 107:107 */ MapleData descData = child2.getChildByPath("desc");
                /* 108:108 */ String name = "";
                /* 109:109 */ String desc = "(无描述)";
                /* 110:110 */ if (nameData != null) {
                    /* 111:111 */ name = (String) nameData.getData();
                    /* 112:    */                }
                /* 113:113 */ if (descData != null) {
                    /* 114:114 */ desc = (String) descData.getData();
                    /* 115:    */                }
                /* 116:116 */ eqpWriter.println(child2.getName() + " - " + name + " - " + desc);
                /* 117:    */            }
            /* 118:118 */ eqpWriter.flush();
            /* 119:119 */ eqpWriter.close();
            /* 120:120 */ System.out.println(child.getName() + " 提取完成.");
            /* 121:    */        }
        /* 122:122 */ System.out.println("Eqp.img 提取完成.");
        /* 123:    */
        /* 124:124 */ System.out.println("提取 Etc.img 数据...");
        /* 125:125 */ writer = new PrintWriter(new FileOutputStream(etcTxt));
        /* 126:126 */ for (MapleData child : etc.getChildren()) /* 127:    */ {
            /* 128:127 */ MapleData nameData = child.getChildByPath("name");
            /* 129:128 */ MapleData descData = child.getChildByPath("desc");
            /* 130:129 */ String name = "";
            /* 131:130 */ String desc = "(无描述)";
            /* 132:131 */ if (nameData != null) {
                /* 133:132 */ name = (String) nameData.getData();
                /* 134:    */            }
            /* 135:134 */ if (descData != null) {
                /* 136:135 */ desc = (String) descData.getData();
                /* 137:    */            }
            /* 138:137 */ writer.println(child.getName() + " - " + name + " - " + desc);
            /* 139:    */        }
        /* 140:139 */ writer.flush();
        /* 141:140 */ writer.close();
        /* 142:141 */ System.out.println("Etc.img 提取完成.");
        /* 143:    */
        /* 144:143 */ System.out.println("提取 Ins.img 数据...");
        /* 145:144 */ writer = new PrintWriter(new FileOutputStream(insTxt));
        /* 146:145 */ for (MapleData child : ins.getChildren()) /* 147:    */ {
            /* 148:146 */ MapleData nameData = child.getChildByPath("name");
            /* 149:147 */ MapleData descData = child.getChildByPath("desc");
            /* 150:148 */ String name = "";
            /* 151:149 */ String desc = "(无描述)";
            /* 152:150 */ if (nameData != null) {
                /* 153:151 */ name = (String) nameData.getData();
                /* 154:    */            }
            /* 155:153 */ if (descData != null) {
                /* 156:154 */ desc = (String) descData.getData();
                /* 157:    */            }
            /* 158:156 */ writer.println(child.getName() + " - " + name + " - " + desc);
            /* 159:    */        }
        /* 160:158 */ writer.flush();
        /* 161:159 */ writer.close();
        /* 162:160 */ System.out.println("Ins.img 提取完成.");
        /* 163:    */
        /* 164:162 */ System.out.println("提取 Pet.img 数据...");
        /* 165:163 */ writer = new PrintWriter(new FileOutputStream(petTxt));
        /* 166:164 */ for (MapleData child : pet.getChildren()) /* 167:    */ {
            /* 168:165 */ MapleData nameData = child.getChildByPath("name");
            /* 169:166 */ MapleData descData = child.getChildByPath("desc");
            /* 170:167 */ String name = "";
            /* 171:168 */ String desc = "(无描述)";
            /* 172:169 */ if (nameData != null) {
                /* 173:170 */ name = (String) nameData.getData();
                /* 174:    */            }
            /* 175:172 */ if (descData != null) {
                /* 176:173 */ desc = (String) descData.getData();
                /* 177:    */            }
            /* 178:175 */ writer.println(child.getName() + " - " + name + " - " + desc);
            /* 179:    */        }
        /* 180:177 */ writer.flush();
        /* 181:178 */ writer.close();
        /* 182:179 */ System.out.println("Pet.img 提取完成.");
        /* 183:    */
        /* 184:181 */ System.out.println("提取 Map.img 数据...");
        /* 185:182 */ writer = new PrintWriter(new FileOutputStream(mapTxt));
        /* 186:183 */ for (MapleData child : map.getChildren()) /* 187:    */ {
            /* 188:184 */ writer.println(child.getName());
            /* 189:185 */ writer.println();
            /* 190:186 */ for (MapleData child2 : child.getChildren()) /* 191:    */ {
                /* 192:187 */ MapleData streetData = child2.getChildByPath("streetName");
                /* 193:188 */ MapleData mapData = child2.getChildByPath("mapName");
                /* 194:189 */ String streetName = "(无数据名)";
                /* 195:190 */ String mapName = "(无地图名)";
                /* 196:191 */ if (streetData != null) {
                    /* 197:192 */ streetName = (String) streetData.getData();
                    /* 198:    */                }
                /* 199:194 */ if (mapData != null) {
                    /* 200:195 */ mapName = (String) mapData.getData();
                    /* 201:    */                }
                /* 202:197 */ writer.println(child2.getName() + " - " + streetName + " - " + mapName);
                /* 203:    */            }
            /* 204:199 */ writer.println();
            /* 205:    */        }
        /* 206:201 */ writer.flush();
        /* 207:202 */ writer.close();
        /* 208:203 */ System.out.println("Map.img 提取完成.");
        /* 209:    */
        /* 210:205 */ System.out.println("提取 Mob.img 数据...");
        /* 211:206 */ writer = new PrintWriter(new FileOutputStream(mobTxt));
        /* 212:207 */ for (MapleData child : mob.getChildren()) /* 213:    */ {
            /* 214:208 */ MapleData nameData = child.getChildByPath("name");
            /* 215:209 */ String name = "";
            /* 216:210 */ if (nameData != null) {
                /* 217:211 */ name = (String) nameData.getData();
                /* 218:    */            }
            /* 219:213 */ writer.println(child.getName() + " - " + name);
            /* 220:    */        }
        /* 221:215 */ writer.flush();
        /* 222:216 */ writer.close();
        /* 223:217 */ System.out.println("Mob.img 提取完成.");
        /* 224:    */
        /* 225:219 */ System.out.println("提取 Skill.img 数据...");
        /* 226:220 */ writer = new PrintWriter(new FileOutputStream(skillTxt));
        /* 227:221 */ for (MapleData child : skill.getChildren()) /* 228:    */ {
            /* 229:222 */ MapleData nameData = child.getChildByPath("name");
            /* 230:223 */ MapleData descData = child.getChildByPath("desc");
            /* 231:224 */ MapleData bookData = child.getChildByPath("bookName");
            /* 232:225 */ String name = "";
            /* 233:226 */ String desc = "";
            /* 234:227 */ if (nameData != null) {
                /* 235:228 */ name = (String) nameData.getData();
                /* 236:    */            }
            /* 237:230 */ if (descData != null) {
                /* 238:231 */ desc = (String) descData.getData();
                /* 239:    */            }
            /* 240:233 */ if (bookData == null) {
                /* 241:236 */ writer.println(child.getName() + " - " + name + " - " + desc);
                /* 242:    */            }
            /* 243:    */        }
        /* 244:239 */ writer.flush();
        /* 245:240 */ writer.close();
        /* 246:241 */ System.out.println("Skill.img 提取完成.");
        /* 247:    */
        /* 248:243 */ System.out.println("提取 Npc.img 数据...");
        /* 249:244 */ writer = new PrintWriter(new FileOutputStream(npcTxt));
        /* 250:245 */ for (MapleData child : npc.getChildren()) /* 251:    */ {
            /* 252:246 */ MapleData nameData = child.getChildByPath("name");
            /* 253:247 */ String name = "";
            /* 254:248 */ if (nameData != null) {
                /* 255:249 */ name = (String) nameData.getData();
                /* 256:    */            }
            /* 257:251 */ writer.println(child.getName() + " - " + name);
            /* 258:    */        }
        /* 259:253 */ writer.flush();
        /* 260:254 */ writer.close();
        /* 261:255 */ System.out.println("Npc.img 提取完成.");
        /* 262:    */    }
    /* 263:    */ }
