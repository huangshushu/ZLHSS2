1var 红心= "#fEffect/CharacterEff/1082588/0/0#"; 
var 爱心 = "#fEffect/CharacterEff/1050334/0/1#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

           text += "\t\t\t\t " + 花草 + " " + 花草 + "#r天使冒险岛" + 花草1 + "" + 花草 + "我们最初的梦" + 花草1 + "\t\t\t\t\t#k#l#l\r\n"//3
            text += " \t   #d" + 小黄星 + "赞助积分：#r"+cm.getzb()+"#k#n#d\t\t" + 小黄星 + "点卷余额：#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d\r\n"	
           text += "     #L0##r我要回自由市场#l#l#l   #L21##r我要日常怼boss#k#l#l  #L21222##r满技能#k#l#l \r\n"//3
            text += "#L1#" + 红心 + "#b万能传送#L2##b特色副本#L3##b每日奖励#L4##b快捷商店" + 爱心 + "#l\r\n"//3
            text += "#L5#" + 红心 + "#b整容会所#l#l#L6##b点装商城#l#l#L9##b皇家骑宠#l#L8##b在线奖励" + 爱心 + "#l\r\n"//3
            text += "#L7#" + 红心 + "#r装备强化#l#L10##r无尽抽奖#l#L11##r兑换系统#l#L12##r装备制作" + 爱心 + "#l\r\n"//3
            text += "#L13#" + 红心 + "#r新人礼包#l#l#L14##r赞助礼包#l#L15##r快捷转职#l#L16##r女神福利" + 爱心 + "#l\r\n"//3
            text += "#L23#" + 红心 + "#b排行榜单#l#L18##b澳门风云#l#l#L17##b日常任务#l#L24##b属性名片" + 爱心 + "#l"//3
		    cm.sendSimple(text);
        } else if (selection == 0) {//血衣
cm.removeAll(3991026);
cm.removeAll(3991027);
cm.removeAll(3991028);
            cm.warp(910000000);
            cm.dispose();
        } else if (selection == 1) {//万能传送
            cm.openNpc(9900004, 1);
        } else if (selection == 2) {//特色副本
            cm.openNpc(9900004, 69);
        } else if (selection == 3) {//每日奖励
            cm.openNpc(9900004, 88);
        } else if (selection == 4) {//快捷商店
            cm.openNpc(9250010, 0);
			        } else if (selection == 21222) {//快捷商店
            cm.openNpc(9900004, 21222);
        } else if (selection == 5) {//整容会所
            cm.openNpc(9900004, 3);
        } else if (selection == 6) {//点卷商城
            cm.openNpc(9900004, 13);        
        } else if (selection == 7) {//装备强化
            cm.openNpc(9900004, 6);
        } else if (selection == 8) {//在线奖励
            cm.openNpc(9900004, 9);
	} else if (selection == 9) {//皇家坐骑
             cm.dispose();
            cm.openNpc(9050002);
        } else if (selection == 10) {//抽奖
            cm.openNpc(9900004, 8);
        } else if (selection == 11) {//兑换系统
            cm.openNpc(9310071, 10);
        } else if (selection == 12) {//兑换系统
            cm.openNpc(9330078, 0);
        } else if (selection == 13) {//新人礼包
            cm.openNpc(9900004, 99);
        } else if (selection == 14) {//赞助礼包
            cm.openNpc(9900004, 68);
	} else if (selection == 15) {//快捷转职
            cm.openNpc(9900004, 2);
        } else if (selection == 16) {//认证福利
            cm.openNpc(9900004, 45);
        } else if (selection == 17) {//删除
            cm.openNpc(9900004, 1774);
        } else if (selection == 18) {//赌博
            cm.openNpc(9900004, 160);
        } else if (selection == 19) {//
            cm.openNpc(2000, 0);
     } else if (selection == 20) {//
            cm.openNpc(9900004, 2133);
     } else if (selection == 21) {//
            cm.openNpc(9900004, 2323);
     } else if (selection == 22) {//
            cm.warp(970000002);
            cm.dispose();
     } else if (selection == 23) {//
            cm.openNpc(9040004,0);
     } else if (selection == 24) {//
            cm.openNpc(9310101,0);
     } else if (selection == 25) {//
            cm.openNpc(9900004,1000);
     } else if (selection == 26) {//
            cm.openNpc(9900004,1001);


        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);
        } else if (selection == 1006) {//
            cm.dispose();
          cm.openNpc(9900004, 1340);
        } else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
          cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
              cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
            cm.dispose();
        } else if (selection == 999) {//
		if(cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016活动");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
            cm.dispose();
		}
		}
    }
}


