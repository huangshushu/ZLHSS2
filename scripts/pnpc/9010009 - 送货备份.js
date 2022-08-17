/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：送货
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

function start() {
    status = -1;
    action(1, 0, 0);
}
function 第一阶段奖励() {
	var 等级 = cm.getPlayer().getLevel();
	//cm.给豆豆(50);
    cm.给点券(20000);
	if(等级>=120){
		cm.给物品(4000463, cm.随机数(20));
	}
    cm.给经验(等级 * 100000);
	cm.setBossLog("每日送货");
}

function 第二阶段奖励() {
	var 等级 = cm.getPlayer().getLevel();
	//cm.给豆豆(50);
    cm.给点券(20000);
	if(等级>=120){
		cm.给物品(4000463, cm.随机数(20));
	}
    cm.给经验(等级 * 100000);
	cm.setBossLog("每日送货");
}

function 第三阶段奖励() {
	var 等级 = cm.getPlayer().getLevel();
	//cm.给豆豆(50);
	cm.给点券(20000);
	if(等级>=120){
		cm.给物品(4000463, cm.随机数(20));
	}
    cm.给经验(等级 * 100000);
}

function 第四阶段奖励() {
	var 等级 = cm.getPlayer().getLevel();
	//cm.给豆豆(50);
	cm.给点券(20000);
	if(等级>=120){
		cm.给物品(4000463, cm.随机数(50));
	}
    cm.给经验(等级 * 100000);
}


function action(mode, type, selection) {

    if (status == 0 && mode == 0) {
        cm.对话结束();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	//配合源码设置的提醒，每日12点准备开始该活动。
    if (hour < 0) {
        cm.说明文字("活动开放时间为 #r12:00#k 之后。");
        cm.对话结束();
        return;
    }
    var 送货 = cm.判断每日值("送货");
    if (status == 0) {
        var 文本 = "\r\n";
        switch (cm.判断地图()) {
            //明珠港第一阶段开始
            case 104000000:
                if (送货 == 0) {
                    文本 += "	Hi~#b#h ##k我需要你帮我把货物送到射手村，到射手村后再交给我吧。\r\n\r\n";
                    文本 += "#L1##b开始送货到射手村#l";
                } else if (送货 == 1) {
                    文本 += "送货要送得脚踏实地的哦，去射手村吧。";
                } else {
                    文本 += "你要寄顺丰吗？";
                }
                break;
                //射手村完成第一阶段
            case 100000000:
                文本 += "	Hi~#b#h ##k你有把货物送过来吗？\r\n\r\n";
                if (cm.判断第一阶段是否完成() == 9 && 送货 == 1) {
                    文本 += "	#L2##b领取第一阶段送货奖励#l";
                } else if (cm.判断第一阶段是否完成() == 9 && 送货 == 2) {
                    文本 += "	#L10##b开始送货到魔法密林#l";
                } else if (cm.判断第一阶段是否完成() != 9) {
                    文本 += "	你必须要一路走过来才行啊，你要脚踏实地才行。\r\n\r\n";
                } else if (送货 == 3) {
                    文本 += "	把货物送到#b魔法密林#k吧。\r\n\r\n";
                }

                break;
                //魔法森林完成第二阶段
            case 101000000:
                文本 += "	Hi~#b#h ##k你有把货物送过来吗？\r\n\r\n";
                if (cm.判断第二阶段是否完成() == 7 && 送货 == 3) {
                    文本 += "	#L12##b领取第二阶段送货奖励#l";
                } else if (cm.判断第二阶段是否完成() == 7 && 送货 == 4) {
                    文本 += "	#L20##b开始送货到勇士部落#l";
                } else if (cm.判断第二阶段是否完成() != 7) {
                    文本 += "	你必须要一路走过来才行啊，你要脚踏实地才行。\r\n\r\n";
                } else if (送货 == 5) {
                    文本 += "	把货物送到#b勇士部落#k吧。\r\n\r\n";
                }
                break;
                //勇士部落完成第三阶段
            case 102000000:
                文本 += "	Hi~#b#h ##k你有把货物送过来吗？\r\n\r\n";
                if (cm.判断第三阶段是否完成() == 10 && 送货 == 5) {
                    文本 += "	#L22##b领取第三阶段送货奖励#l";
                } else if (cm.判断第三阶段是否完成() == 10 && 送货 == 6) {
                    文本 += "	#L30##b开始送货到废弃都市#l";
                } else if (cm.判断第三阶段是否完成() != 10) {
                    文本 += "	你必须要一路走过来才行啊，你要脚踏实地才行。\r\n\r\n";
                } else if (送货 == 7) {
                    文本 += "	把货物送到#b废弃都市#k吧。\r\n\r\n";
                }
                break;
                break;
                //废弃都市完成第四阶段
            case 103000000:
                文本 += "	Hi~#b#h ##k你有把货物送过来吗？\r\n\r\n";
                if (cm.判断第四阶段是否完成() == 6 && 送货 == 7) {
                    文本 += "	#L32##b领取第最终阶段送货奖励#l";
                } else if (cm.判断第四阶段是否完成() == 6) {
                    文本 += "	你今天已经送完了货哦，明天再来吧。\r\n\r\n";
                } else if (cm.判断第四阶段是否完成() != 6) {
                    文本 += "	你必须要一路走过来才行啊，你要脚踏实地才行。\r\n\r\n";
                }
                break;
            default:
                break;
        }
        cm.是否说明文字(文本);
    } else if (status == 1) {
        switch (selection) {
            case 2:
                第一阶段奖励();
                完成之后();
                break;
            case 12:
                第二阶段奖励();
                完成之后();
                break;
            case 22:

                第三阶段奖励();
                完成之后();
                break;
            case 32:
                第四阶段奖励();
                完成之后();
                break;
                //第一阶段开始
            case 1:
                if (送货 <= 0) {
                    cm.增加每日值("送货");
                    cm.说明文字("请把把货物送到#b射手村#k给我吧。");
                } else {
                    cm.说明文字("请把把货物送到#b射手村#k给我吧，你还没开始出发吗？");
                }
                cm.对话结束();
                break;
                //第二阶段开始
            case 10:
                if (送货 == 2) {
                    cm.增加每日值("送货");
                    cm.说明文字("请把把货物送到#b魔法密林#k给我吧。");
                } else {
                    cm.说明文字("请把把货物送到#b魔法密林#k给我吧，你还没开始出发吗？");
                }
                cm.对话结束();
                break;
                //第三阶段开始
            case 20:
                if (送货 == 4) {
                    cm.增加每日值("送货");
                    cm.说明文字("请把把货物送到#b勇士部落#k给我吧。");
                } else {
                    cm.说明文字("请把把货物送到#b勇士部落#k给我吧，你还没开始出发吗？");
                }
                cm.对话结束();
                break;
                //第四阶段开始
            case 30:
                if (送货 == 6) {
                    cm.增加每日值("送货");
                    cm.说明文字("请把把货物送到#b废弃都市#k给我吧。");
                } else {
                    cm.说明文字("请把把货物送到#b废弃都市#k给我吧，你还没开始出发吗？");
                }
                cm.对话结束();
                break;
            default:
				cm.对话结束();
                break;
        }
    }
}

function 完成之后() {
    switch (cm.判断地图()) {
        case 100000000:
            cm.说明文字("     恭喜你领取了#r明珠港 → 射手村#k 奖励，你可以开始第二阶段送货哦。");
            break;
        case 101000000:
            cm.说明文字("     恭喜你领取了#r射手村 → 魔法密林#k 奖励，你可以开始第三阶段送货哦。");
            break;
        case 102000000:
            cm.说明文字("     恭喜你领取了#r魔法密林 → 勇士部落#k 奖励，你可以开始第四阶段送货哦。");
            break;
        case 103000000:
            cm.说明文字("     恭喜你领取了#r勇士部落 → 废弃都市#k 奖励，你可以开始第四阶段送货哦。");
            break;
        default:
            break;
    }
    cm.增加每日值("送货");
	cm.对话结束();
}