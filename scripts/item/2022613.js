var status = 0;
var z = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
        selStr += "#e#d                " + xx + "便捷背包菜单" + xx + "\r\n";
        selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
		selStr += "#r#L1#" + z + " 拍卖功能#l#L29#" + z + " 美容美发卡自选#l\r\n";
		//selStr += "#L23#" + z + " 专属商店#l   #L11#" + z + " 每日BUFF#l  \r\n";  
		//selStr += "#L0#" + z + " 每日工资#l   #L10#" + z + " 每日点卷#l\r\n";
       // selStr += "#L1000#" + z + " 副本重置#l   #L22#" + z + " 每日突破#l\r\n";
        //selStr += "#L7#" + z + " 领取三倍#l   #L8#" + z + " 领取双爆#l\r\n";
        //selStr += "#L9#" + z + " 每日道具#l   #L21#" + z + " 每日材料#l\r\n";
       // selStr += "#L10#" + z + " 每日抽奖   #L28#" + z + " 每日冬季#l\r\n";
        selStr += "\r\n" + epp + "" + epp + "" + epp + "" + epp + ""
        cm.sendOk(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1002:
                if (cm.getPQLog("tqxz", 1) == 0 && cm.getSpace(1) >= 1) {
                    var ii = cm.getItemInfo();
                    var toDrop = cm.getNewEquip(1142796); // 生成一个Equip类      
                    toDrop.setStr(150); //装备力量
                    toDrop.setDex(150); //装备敏捷
                    toDrop.setInt(150); //装备智力
                    toDrop.setLuk(150); //装备运气
                    toDrop.setMatk(150); //物理攻击
                    toDrop.setWatk(150); //魔法攻击
		            toDrop.setOwner("☆GM赠送☆"); 
                    cm.addFromDrop(toDrop);
                    cm.setPQLog("tqxz", 1);
                    cm.sendOk("恭喜您领取成功全属性150的官方男神勋章");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 成功领取了GM赠送的全属性150男神勋章一枚。");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 成功领取了GM赠送的全属性150男神勋章一枚。");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 成功领取了GM赠送的全属性150男神勋章一枚。");

                    cm.dispose();
                } else {
                    cm.sendOk("对不起。您已经领取过了");
                    cm.dispose();
                }
                break;
            case 1:
                //cm.dispose();
                cm.openNpc(9900004, "拍卖");
                //cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 使用至尊荣耀礼盒传送到专属地图啦。");
                break;
            case 0:
                if (cm.getPQLog("工资") < 1) { //工资
                    cm.gainMeso(66666666);
                    cm.setPQLog("工资");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日工资6666万金币.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日金币6666W。");
                    cm.dispose();
                } else {
                    cm.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
                    cm.dispose();
                }
                break;
            case 22:
                if (cm.getPQLog("痕迹") < 1 && cm.getSpace(3) > 2) { //突破石头
				cm.gainItem(2614005,3);
				cm.setPQLog("痕迹");
				cm.sendOk("恭喜您领取VIP服务的每日百万突破石头3个.");
				cm.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ cm.getChar().getName() +" 在至尊荣耀礼盒里领取每日百万突破石头。");
				cm.dispose();
            } else {
                cm.sendOk("您已经领取过，请明日再领。");
				cm.dispose();
            }
            break;
            case 23:
                cm.dispose();
                cm.openNpc(9310071, "zssd");
                break;
            case 12:
                if (cm.getPQLog("活力") < 1) { //活力
                    cm.gainPlayerEnergy(100);
                    cm.setPQLog("活力");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日活力100点.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日活力 100 点。");
                    cm.dispose();
                } else {
                    cm.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
                    cm.dispose();
                }
                break;
            case 01:
                if (cm.getPQLog("点卷") < 1) { //点卷
                    cm.gainNX(18888);
                    cm.setPQLog("点卷");
                    cm.sendOk("恭喜您领取点卷18888点.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里免费领取每日 18888 点卷。");
                    cm.dispose();
                } else {
                    cm.sendOk("失败：\r\n\r\n#r1). 您已经使用，请明日再试。\r\n");
                    cm.dispose();
                }
                break;
            case 2:
                if (cm.getPlayer().getCSPoints(1) > 0) { //会员等级
                    cm.dispose();
                    cm.openNpc(9900001, "nfxss");
                } else {
                    cm.sendOk("您糊弄我呢。点卷不足还点什么。最少得拥有1万点卷才可以使用。");
                    cm.dispose();
                }
                break;
            case 7:
                if (cm.getPQLog("三倍") < 1 && cm.getSpace(5) > 2) { //三倍
                    cm.gainItem(5211060, 1, 1, 1);
                    cm.setPQLog("三倍");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日三倍经验卡一张.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日三倍经验卡。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;
            case 20:
                if (cm.getPQLog("每日余币") < 1 && cm.getSpace(3) > 2) { //突破石头
                    cm.gainItem(4000463, 10);
                    cm.setPQLog("每日余币");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日余额币.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日余额币10个。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;
            case 21:
                if (cm.getPQLog("冬季") < 1 && cm.getSpace(3) > 2) { //材料
            	cm.gainItem(4310019,50);
				cm.gainItem(4034999,50);
				cm.gainItem(4001006,50);
				cm.gainItem(4310088,100);
				cm.gainItem(4310036,100);
				cm.setPQLog("冬季");
				cm.sendOk("恭喜您领取VIP服务的每日材料.");
				cm.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ cm.getChar().getName() +" 在至尊荣耀礼盒里领取每日巨额理财材料。");
				cm.dispose();
            } else {
                cm.sendOk("您已经领取过，请明日再领。");
				cm.dispose();
            }
		  break;
            case 26:
                if (cm.getPQLog("每日樱花币") < 1 && cm.getSpace(3) > 2) { //雪花币
                    cm.gainItem(4310022, 10);
                    cm.setPQLog("每日樱花币");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日樱花币10个.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日10个冬日币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;
            case 28:
                if (cm.getPQLog("抽奖卡") < 1 && cm.getSpace(3) > 2) { //冬季限量硬币
            	cm.gainItem(4310066,50);
				cm.setPQLog("抽奖卡");
				cm.sendOk("恭喜您领取VIP服务的冬季限量硬币.");
				cm.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ cm.getChar().getName() +" 在至尊荣耀礼盒里领取每日冬季限量硬币。");
				cm.dispose();
            } else {
                cm.sendOk("您已经领取过，请明日再领。");
				cm.dispose();
            }
            break;
			case 29:
                if (cm.getPQLog("抽奖卡") < 1 && cm.getSpace(3) > 2) { //美容美发自选卡两张
                    cm.gainItem(4034012, 2);
                    cm.setPQLog("抽奖卡");
                    cm.sendOk("恭喜您领取VIP服务的美容美发自选卡两张.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取美容美发自选卡两张。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;	
            case 8:
                if (cm.getPQLog("双爆") < 1 && cm.getSpace(5) > 2) { //双爆
                    cm.gainItem(5360015, 1, 1, 1);
                    cm.setPQLog("双爆");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日双倍爆率卡一张.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日双倍爆率卡。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;
            case 9:
                if (cm.getPQLog("魔方") < 1 && cm.getSpace(5) > 2) { //道具
            	cm.gainItem(5062009,30);//超级神奇魔方
		        cm.gainItem(5062010,30);//终级神奇魔方
				cm.gainItem(5062500,30);//大师附加神奇魔方
                cm.gainItem(5062024,15);//闪炫魔方
				cm.gainItem(2340000,15);//祝福卷轴
				cm.gainItem(5064000,15);//防爆卷轴
				cm.setPQLog("魔方");
				cm.sendOk("恭喜您领取理财服务的每日道具，获得各种魔方以及卷轴");
				cm.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ cm.getChar().getName() +" 在至尊荣耀礼盒里领取每日巨额理财道具。");
				cm.dispose();
            } else {
                cm.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");
				cm.dispose();
            }
            break;
            case 11:
                if (cm.getPQLog("BUFF") < 1) { //BUFF
                    cm.gainItem(2023308, 2);
                    cm.gainItem(2022529, 2);
					cm.gainItem(2450023, 2);
                    //cm.gainItem(2022531, 2);
                    cm.setPQLog("BUFF");
                    cm.sendOk("恭喜您领取至尊荣耀服务的每日BUFF6个.");
                    cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里领取每日BUFF6个。");
                    cm.dispose();
                } else {
                    cm.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2)");
                    cm.dispose();
                }
                break;
            case 10:
                if (cm.getPQLog("抽奖") < 1 && cm.getSpace(2) > 2) { //抽奖
				cm.gainItem(2430069,20);
				cm.setPQLog("抽奖");
				cm.sendOk("恭喜您领取VIP服务的每日抽奖包（祖母绿箱子）.");
				cm.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ cm.getChar().getName() +" 在至尊荣耀礼盒里领取每日抽奖包20个。");
				cm.dispose();
            } else {
                cm.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");
				cm.dispose();
            }
            break;
            case 1000:
                cm.dispose();
                cm.openNpc(9310071, "ryfbcz");
                break;
            case 4:
                if (cm.getPQLog("所有副本重置") < 1) { //副本重置
                    cm.resetEventCount("贝勒·德");
                    cm.resetEventCount("航海旅途");
                    cm.resetPQLog("贝勒德");
                    cm.resetPQLog("mrdb");
                    cm.resetPQLog("进阶扎昆");
                    cm.resetPQLog("普通扎昆");
                    cm.resetPQLog("女皇：希纳斯");
                    cm.resetPQLog("扎昆");
                    cm.resetPQLog("暗黑龙王");
                    cm.resetPQLog("进阶暗黑龙王");
                    cm.resetPQLog("狮子王:班·雷昂[简单]");
                    cm.resetPQLog("狮子王:班·雷昂[普通]");
                    cm.resetPQLog("品克缤");
                    cm.resetPQLog("混沌品克缤");
                    cm.resetPQLog("阿卡伊勒[普通]");
                    cm.resetPQLog("神话副本");
                    cm.resetPQLog("妖精女王：艾菲尼娅");
                    cm.resetPQLog("巨大蝙蝠");
                    cm.resetPQLog("巨大蝙蝠[困难]");
                    cm.resetPQLog("普通皮埃尔");
                    cm.resetPQLog("麦格纳斯");
                    cm.resetPQLog("钥匙");
                    cm.resetPQLog("古树钥匙");
                    cm.resetPQLog("进阶皮埃尔");
                    cm.resetPQLog("狮子王");
                    cm.resetPQLog("进阶贝伦");
                    cm.resetPQLog("普通贝伦");
                    cm.resetPQLog("普通血腥女皇");
                    cm.resetPQLog("进阶血腥女皇");
                    cm.resetPQLog("恶灵影子");
                    cm.resetPQLog("钻机");
                    cm.resetPQLog("强化钻机");
                    cm.resetPQLog("贝勒·德");
                    cm.resetPQLog("麦格纳斯[简单]");
                    cm.resetPQLog("麦格纳斯");
                    cm.resetPQLog("麦格纳斯[困难]");
                    cm.resetPQLog("桃乐丝");
                    cm.resetPQLog("森兰丸[困难]");
                    cm.resetPQLog("森兰丸");
                    cm.resetPQLog("浓姬");
                    cm.resetPQLog("斯乌<困难>[远征队]");
                    cm.resetPQLog("斯乌");
                    cm.resetPQLog("贝伦");
                    cm.resetPQLog("进阶贝伦");
                    cm.resetPQLog("半半");
                    cm.resetPQLog("进阶半半");
                    cm.resetPQLog("皮埃尔");
                    cm.resetPQLog("进阶皮埃尔");
                    cm.resetPQLog("腥血女王");
                    cm.resetPQLog("进阶腥血女王");
                    cm.resetPQLog("航海旅途");
                    cm.setPQLog("所有副本重置");
                    cm.sendOk("恭喜您使用至尊荣耀服务的重置了所有的副本.");
                    //cm.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀礼盒里重置了全部副本任务。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;
            case 6:
                //if (cm.getPlayer().getCSPoints(1) > 1000) { //自选发型
                //cm.gainNX(-1000);
                cm.dispose();
                cm.openNpc(2470018, 1);
                // } else {
                //    cm.sendOk("点卷不足1000，你瞧啥。");
                //	cm.dispose();
                // }
                break;
            case 25:
                //if (cm.getPlayer().getCSPoints(1) > 1000) { //自选发型
                //cm.gainNX(-1000);
                cm.dispose();
                cm.openNpc(1530635, 21);
                // } else {
                //    cm.sendOk("点卷不足1000，你瞧啥。");
                //	cm.dispose();
                // }
                break;
            case 100:
                if (cm.getPQLog("BOSS111") < 1 && cm.getSpace(3) > 2) { //三倍
                    cm.gainItem(3700182, 1, 1);
                    cm.setPQLog("BOSS111");
                    cm.sendOk("恭喜您领取开始！BOSS竞技场一张.");
                    cm.worldSpouseMessage(0x28, "『至尊荣耀』 ：玩家 " + cm.getChar().getName() + " 在至尊荣耀里领取每日BOSS凭证开始！BOSS竞技场。");
                    cm.dispose();
                } else {
                    cm.sendOk("您已经领取过，请明日再领。");
                    cm.dispose();
                }
                break;
        }
    }
}
