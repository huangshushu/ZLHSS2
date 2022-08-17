/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：每日任务
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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

    if (cm.getBossLog("paoshang") >= 10) {
        var 每日收集 = 10;
    } else {
        var 每日收集 = cm.getBossLog("paoshang");
    }//10

    if (cm.getBossLog("钓鱼") >= 10) {
        var 每日钓鱼 = 10;
    } else {
        var 每日钓鱼 = cm.getBossLog("钓鱼");
    }//10

    if (cm.查询今日在线时间() >= 300) {
        var 每日在线 = 300;
    } else {
        var 每日在线 = cm.查询今日在线时间();
    }//10

    if (cm.getBossLog("武陵塔奖励领取") >= 1) {
        var 每日武陵 = 1;
    } else {
        var 每日武陵 = cm.getBossLog("武陵塔奖励领取");
    }//5

    if (每日副本() >= 5) {
        var 每日副本2 = 5;
    } else {
        var 每日副本2 = 每日副本();
    }//5

    if (cm.getBossLog("日常商城购买") >= 1) {
        var 商城购物 = 1;
    } else {
        var 商城购物 = cm.getBossLog("日常商城购买");
    }//1

    if (cm.getBossLog("每日送货") >= 2) {
        var 每日送货 = 2;
    } else {
        var 每日送货 = cm.getBossLog("每日送货");
    }//2

    if (cm.getBossLog("每日答题") >= 5) {
        var 每日答题 = 5;
    } else {
        var 每日答题 = cm.getBossLog("每日答题");
    }//5

    if (cm.getBossLog("每日附魔") >= 2) {
        var 每日附魔 = 2;
    } else {
        var 每日附魔 = cm.getBossLog("每日附魔");
    }//2

    if (cm.getBossLog("每日打孔") >= 1) {
        var 每日打孔 = 1;
    } else {
        var 每日打孔 = cm.getBossLog("每日打孔");
    }//1

    if (cm.getBossLog("每日分解") >= 1) {
        var 每日分解 = 1;
    } else {
        var 每日分解 = cm.getBossLog("每日分解");
    }//1
    if (cm.getBossLog("查看百科") >= 1) {
        var 查看百科 = 1;
    } else {
        var 查看百科 = cm.getBossLog("查看百科");
    }//1
    if (cm.getBossLog("每日通缉") >= 2) {
        var 每日通缉 = 2;
    } else {
        var 每日通缉 = cm.getBossLog("每日通缉");
    }//1

    if (cm.getBossLog("击杀高级怪物") >= 2) {
        var 击杀高级怪物 = 2;
    } else {
        var 击杀高级怪物 = cm.getBossLog("击杀高级怪物");
    }//2
    if (cm.getBossLog("使用红包") >= 1) {
        var 使用红包 = 1;
    } else {
        var 使用红包 = cm.getBossLog("使用红包");
    }
    if (cm.getBossLog("欢乐豆豆") >= 5) {
        var 欢乐豆豆 = 5;
    } else {
        var 欢乐豆豆 = cm.getBossLog("欢乐豆豆");
    }
    if (cm.getBossLog("挖矿") >= 4) {
        var 每日挖矿 = 4;
    } else {
        var 每日挖矿 = cm.getBossLog("挖矿");
    }

    //10+10+10+5+5+1+2+5+2+1+1=
    var 每日活跃 = 每日挖矿 + 欢乐豆豆 + 使用红包 + 每日送货 * 5 + 商城购物 + 每日副本2 + 每日武陵 * 5 + (每日在线 / 30) + 每日钓鱼 + 每日收集 + 每日答题 + 每日打孔 + 每日分解 + 每日附魔 + 查看百科 + 每日通缉 + 击杀高级怪物;
    if (status == 0) {
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 每日任务 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        selStr += "\t\t\t   \t#d活跃度:( 75 / #b" + 每日活跃.toFixed(0 ) + "#k )#n\r\n";
		selStr += "\t\t#L0##b返回#l\r\n";
        if (cm.getBossLog("活跃度1") <= 0) {
            selStr += "\t\t#L1##b领取 #r10#b 活跃度奖励 #r200W#b 金币#l\r\n";
        }else{
			selStr += "\r\n\t\t   #b领取 #r10#b 活跃度奖励 #r200W#b 金币#k[#d完成#k]\r\n";
		}
		
        if (cm.getBossLog("活跃度2") <= 0) {
            selStr += "\t\t#L2##b领取 #r20#b 活跃度奖励 #r5W#b 点券#l\r\n";
        }else{
			selStr += "\t\t   #b领取 #r20#b 活跃度奖励 #r5W#b 点券#k[#d完成#k]\r\n";
		}
		
        if (cm.getBossLog("活跃度3") <= 0) {
            selStr += "\t\t#L3##b领取 #r30#b 活跃度奖励 #r3 #bAP#l\r\n";
        }else{
			selStr += "\t\t   #b领取 #r30#b 活跃度奖励 #r3 #bAP#k[#d完成#k]\r\n";
		}
		
        if (cm.getBossLog("活跃度4") <= 0) {
            selStr += "\t\t#L4##b领取 #r40#b 活跃度奖励 #r10 #b#z4000463##l\r\n";
        }else{
			selStr += "\t\t   #b领取 #r40#b 活跃度奖励 #r10 #b#z4000463##k[#d完成#k]\r\n";
		}
		
        if (cm.getBossLog("活跃度5") <= 0) {
            selStr += "\t\t#L5##b领取 #r50#b 活跃度奖励 #r20 #b#z4000463##l\r\n";
        }else{
			selStr += "\t\t   #b领取 #r50#b 活跃度奖励 #r20 #b#z4000463##k[#d完成#k]\r\n";
		}
		
        if (cm.getBossLog("活跃度6") <= 0) {
            selStr += "\t\t#L6##b领取 #r65#b 活跃度奖励 #r防暴卡 #bx 1#l\r\n";
        }else{
			selStr += "\t\t   #b领取 #r65#b 活跃度奖励 #r防暴卡 #bx 1#k[#d完成#k]\r\n";
		}
		
        cm.说明文字(selStr);
    } else if (status == 1) {

            switch (selection) {
                case 6:
                    if (每日活跃 > 64) {
                        cm.setBossRankCount9("防爆卡", 1);
                        cm.setBossLog("活跃度6");
                    } else {
                        cm.说明文字("活跃度不够。");
                    }
                    cm.对话结束();
                    break;
                case 5:
                    if (每日活跃 >= 50) {
                        cm.给物品(4000463, 20);
                        cm.setBossLog("活跃度5");
                    } else {
                        cm.说明文字("活跃度不够。");
                    }
                    cm.对话结束();
                    break;
                case 4:
                    if (每日活跃 >= 40) {
                        cm.给物品(4000463, 10);
                        cm.setBossLog("活跃度4");
                    } else {
                        cm.说明文字("活跃度不够。");
                    }
                    cm.对话结束();
                    break;
                case 3:
                    if (每日活跃 >= 30) {
                        cm.给能力点(3);
                        cm.setBossLog("活跃度3");
                    } else {
                        cm.说明文字("活跃度不够。");
                    }
                    cm.对话结束();
                    break;
                case 2:
                    if (每日活跃 >= 20) {
                        cm.给点券(5 * 10000);
                        cm.setBossLog("活跃度2");
                    } else {
                        cm.说明文字("活跃度不够。");
                    }
                    cm.对话结束();
                    break;
                case 1:
                    if (每日活跃 >= 10) {
                        cm.给金币(20 * 100000);
                        cm.setBossLog("活跃度1");
                    } else {
                        cm.说明文字("活跃度不够。");
                    }
                    cm.对话结束();
                    break;
                default:
                    cm.对话结束();
					cm.打开NPC(9330042,0);
                    break;
                }
        
    }
}

function 每日副本() {
    var result = 0;
    result += cm.getBossLog("废弃都市");
    result += cm.getBossLog("毒雾森林");
    result += cm.getBossLog("月妙");
    result += cm.getBossLog("玩具塔");
    result += cm.getBossLog("女神塔");
    result += cm.getBossLog("海盗船");
    return result;
}