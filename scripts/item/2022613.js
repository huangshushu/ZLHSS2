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
        im.dispose();
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
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1002:
                if (im.getPQLog("tqxz", 1) == 0 && im.getSpace(1) >= 1) {
                    var ii = im.getItemInfo();
                    var toDrop = im.getNewEquip(1142796); // 生成一个Equip类      
                    toDrop.setStr(150); //装备力量
                    toDrop.setDex(150); //装备敏捷
                    toDrop.setInt(150); //装备智力
                    toDrop.setLuk(150); //装备运气
                    toDrop.setMatk(150); //物理攻击
                    toDrop.setWatk(150); //魔法攻击
		    toDrop.setOwner("☆GM赠送☆"); 
                    im.addFromDrop(toDrop);
                    im.setPQLog("tqxz", 1);
                    im.sendOk("恭喜您领取成功全属性150的官方男神勋章");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 成功领取了GM赠送的全属性150男神勋章一枚。");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 成功领取了GM赠送的全属性150男神勋章一枚。");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 成功领取了GM赠送的全属性150男神勋章一枚。");

                    im.dispose();
                } else {
                    im.sendOk("对不起。您已经领取过了");
                    im.dispose();
                }
                break;
            case 1:
                im.openNpc(9900004, "拍卖");
				im.dispose();
                //im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 使用至尊荣耀礼盒传送到专属地图啦。");
                break;
            case 0:
                if (im.getPQLog("工资") < 1) { //工资
                    im.gainMeso(66666666);
                    im.setPQLog("工资");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日工资6666万金币.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日金币6666W。");
                    im.dispose();
                } else {
                    im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
                    im.dispose();
                }
                break;
            case 22:
                if (im.getPQLog("痕迹") < 1 && im.getSpace(3) > 2) { //突破石头
				im.gainItem(2614005,3);
				im.setPQLog("痕迹");
				im.sendOk("恭喜您领取VIP服务的每日百万突破石头3个.");
				im.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ im.getChar().getName() +" 在至尊荣耀礼盒里领取每日百万突破石头。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
            case 23:
                im.dispose();
                im.openNpc(9310071, "zssd");
                break;
            case 12:
                if (im.getPQLog("活力") < 1) { //活力
                    im.gainPlayerEnergy(100);
                    im.setPQLog("活力");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日活力100点.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日活力 100 点。");
                    im.dispose();
                } else {
                    im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
                    im.dispose();
                }
                break;
            case 01:
                if (im.getPQLog("点卷") < 1) { //点卷
                    im.gainNX(18888);
                    im.setPQLog("点卷");
                    im.sendOk("恭喜您领取点卷18888点.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里免费领取每日 18888 点卷。");
                    im.dispose();
                } else {
                    im.sendOk("失败：\r\n\r\n#r1). 您已经使用，请明日再试。\r\n");
                    im.dispose();
                }
                break;
            case 2:
                if (im.getPlayer().getCSPoints(1) > 0) { //会员等级
                    im.dispose();
                    im.openNpc(9900001, "nfxss");
                } else {
                    im.sendOk("您糊弄我呢。点卷不足还点什么。最少得拥有1万点卷才可以使用。");
                    im.dispose();
                }
                break;
            case 7:
                if (im.getPQLog("三倍") < 1 && im.getSpace(5) > 2) { //三倍
                    im.gainItem(5211060, 1, 1, 1);
                    im.setPQLog("三倍");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日三倍经验卡一张.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日三倍经验卡。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;
            case 20:
                if (im.getPQLog("每日余币") < 1 && im.getSpace(3) > 2) { //突破石头
                    im.gainItem(4000463, 10);
                    im.setPQLog("每日余币");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日余额币.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日余额币10个。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;
            case 21:
                if (im.getPQLog("冬季") < 1 && im.getSpace(3) > 2) { //材料
            	im.gainItem(4310019,50);
				im.gainItem(4034999,50);
				im.gainItem(4001006,50);
				im.gainItem(4310088,100);
				im.gainItem(4310036,100);
				im.setPQLog("冬季");
				im.sendOk("恭喜您领取VIP服务的每日材料.");
				im.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ im.getChar().getName() +" 在至尊荣耀礼盒里领取每日巨额理财材料。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
		  break;
            case 26:
                if (im.getPQLog("每日樱花币") < 1 && im.getSpace(3) > 2) { //雪花币
                    im.gainItem(4310022, 10);
                    im.setPQLog("每日樱花币");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日樱花币10个.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日10个冬日币。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;
            case 28:
                if (im.getPQLog("抽奖卡") < 1 && im.getSpace(3) > 2) { //冬季限量硬币
            	im.gainItem(4310066,50);
				im.setPQLog("抽奖卡");
				im.sendOk("恭喜您领取VIP服务的冬季限量硬币.");
				im.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ im.getChar().getName() +" 在至尊荣耀礼盒里领取每日冬季限量硬币。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
			case 29:
                if (im.getPQLog("抽奖卡") < 1 && im.getSpace(3) > 2) { //美容美发自选卡两张
                    im.gainItem(4034012, 2);
                    im.setPQLog("抽奖卡");
                    im.sendOk("恭喜您领取VIP服务的美容美发自选卡两张.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取美容美发自选卡两张。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;	
            case 8:
                if (im.getPQLog("双爆") < 1 && im.getSpace(5) > 2) { //双爆
                    im.gainItem(5360015, 1, 1, 1);
                    im.setPQLog("双爆");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日双倍爆率卡一张.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日双倍爆率卡。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;
            case 9:
                if (im.getPQLog("魔方") < 1 && im.getSpace(5) > 2) { //道具
            	im.gainItem(5062009,30);//超级神奇魔方
		        im.gainItem(5062010,30);//终级神奇魔方
				im.gainItem(5062500,30);//大师附加神奇魔方
                im.gainItem(5062024,15);//闪炫魔方
				im.gainItem(2340000,15);//祝福卷轴
				im.gainItem(5064000,15);//防爆卷轴
				im.setPQLog("魔方");
				im.sendOk("恭喜您领取理财服务的每日道具，获得各种魔方以及卷轴");
				im.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ im.getChar().getName() +" 在至尊荣耀礼盒里领取每日巨额理财道具。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
            case 11:
                if (im.getPQLog("BUFF") < 1) { //BUFF
                    im.gainItem(2023308, 2);
                    im.gainItem(2022529, 2);
					im.gainItem(2450023, 2);
                    //im.gainItem(2022531, 2);
                    im.setPQLog("BUFF");
                    im.sendOk("恭喜您领取至尊荣耀服务的每日BUFF6个.");
                    im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里领取每日BUFF6个。");
                    im.dispose();
                } else {
                    im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2)");
                    im.dispose();
                }
                break;
            case 10:
                if (im.getPQLog("抽奖") < 1 && im.getSpace(2) > 2) { //抽奖
				im.gainItem(2430069,20);
				im.setPQLog("抽奖");
				im.sendOk("恭喜您领取VIP服务的每日抽奖包（祖母绿箱子）.");
				im.worldSpouseMessage(0x0A,"『至尊荣耀』 ：玩家 "+ im.getChar().getName() +" 在至尊荣耀礼盒里领取每日抽奖包20个。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
            case 1000:
                im.dispose();
                im.openNpc(9310071, "ryfbcz");
                break;
            case 4:
                if (im.getPQLog("所有副本重置") < 1) { //副本重置
                    im.resetEventCount("贝勒·德");
                    im.resetEventCount("航海旅途");
                    im.resetPQLog("贝勒德");
                    im.resetPQLog("mrdb");
                    im.resetPQLog("进阶扎昆");
                    im.resetPQLog("普通扎昆");
                    im.resetPQLog("女皇：希纳斯");
                    im.resetPQLog("扎昆");
                    im.resetPQLog("暗黑龙王");
                    im.resetPQLog("进阶暗黑龙王");
                    im.resetPQLog("狮子王:班·雷昂[简单]");
                    im.resetPQLog("狮子王:班·雷昂[普通]");
                    im.resetPQLog("品克缤");
                    im.resetPQLog("混沌品克缤");
                    im.resetPQLog("阿卡伊勒[普通]");
                    im.resetPQLog("神话副本");
                    im.resetPQLog("妖精女王：艾菲尼娅");
                    im.resetPQLog("巨大蝙蝠");
                    im.resetPQLog("巨大蝙蝠[困难]");
                    im.resetPQLog("普通皮埃尔");
                    im.resetPQLog("麦格纳斯");
                    im.resetPQLog("钥匙");
                    im.resetPQLog("古树钥匙");
                    im.resetPQLog("进阶皮埃尔");
                    im.resetPQLog("狮子王");
                    im.resetPQLog("进阶贝伦");
                    im.resetPQLog("普通贝伦");
                    im.resetPQLog("普通血腥女皇");
                    im.resetPQLog("进阶血腥女皇");
                    im.resetPQLog("恶灵影子");
                    im.resetPQLog("钻机");
                    im.resetPQLog("强化钻机");
                    im.resetPQLog("贝勒·德");
                    im.resetPQLog("麦格纳斯[简单]");
                    im.resetPQLog("麦格纳斯");
                    im.resetPQLog("麦格纳斯[困难]");
                    im.resetPQLog("桃乐丝");
                    im.resetPQLog("森兰丸[困难]");
                    im.resetPQLog("森兰丸");
                    im.resetPQLog("浓姬");
                    im.resetPQLog("斯乌<困难>[远征队]");
                    im.resetPQLog("斯乌");
                    im.resetPQLog("贝伦");
                    im.resetPQLog("进阶贝伦");
                    im.resetPQLog("半半");
                    im.resetPQLog("进阶半半");
                    im.resetPQLog("皮埃尔");
                    im.resetPQLog("进阶皮埃尔");
                    im.resetPQLog("腥血女王");
                    im.resetPQLog("进阶腥血女王");
                    im.resetPQLog("航海旅途");
                    im.setPQLog("所有副本重置");
                    im.sendOk("恭喜您使用至尊荣耀服务的重置了所有的副本.");
                    //im.worldSpouseMessage(0x0A, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀礼盒里重置了全部副本任务。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;
            case 6:
                //if (im.getPlayer().getCSPoints(1) > 1000) { //自选发型
                //im.gainNX(-1000);
                im.dispose();
                im.openNpc(2470018, 1);
                // } else {
                //    im.sendOk("点卷不足1000，你瞧啥。");
                //	im.dispose();
                // }
                break;
            case 25:
                //if (im.getPlayer().getCSPoints(1) > 1000) { //自选发型
                //im.gainNX(-1000);
                im.dispose();
                im.openNpc(1530635, 21);
                // } else {
                //    im.sendOk("点卷不足1000，你瞧啥。");
                //	im.dispose();
                // }
                break;
            case 100:
                if (im.getPQLog("BOSS111") < 1 && im.getSpace(3) > 2) { //三倍
                    im.gainItem(3700182, 1, 1);
                    im.setPQLog("BOSS111");
                    im.sendOk("恭喜您领取开始！BOSS竞技场一张.");
                    im.worldSpouseMessage(0x28, "『至尊荣耀』 ：玩家 " + im.getChar().getName() + " 在至尊荣耀里领取每日BOSS凭证开始！BOSS竞技场。");
                    im.dispose();
                } else {
                    im.sendOk("您已经领取过，请明日再领。");
                    im.dispose();
                }
                break;
        }
    }
}
