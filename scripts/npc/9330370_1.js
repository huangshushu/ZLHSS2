var status;
var text;
var taskid = 140001;
var package1 = 2431091; //基础超值礼包礼物箱
var package2 = 2431092; //特殊超值礼包礼物箱
var waitMap = 310030210; // 等待地图
var changeJobMap = 913051200;   // 转职地图
var payurl = "http://api.colyms.com/index.php/external/api/payh5?server=a540892717";

var package1_list = new Array(
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100)
						);
var package2_list = new Array(
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100)
						);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
        	cm.dispose();
        	return;
        }

        if (cm.getBossLog("新手向导") > 0) {
        	cm.dispose();
        	return;
        }

        if (status == 0 && cm.getBossLog("新手踩蜗牛副本") > 0) {
        	status = 1;
        }

        if (status == 0) {
			var rank = cm.getRanking("踩蜗牛副本").iterator();
			text = "\t\t\t\t- 踩蜗牛副本排行榜 -\r\n\r\n";
			text += "名次\t玩家名\t\t分数\r\n";
			var i = 1;
			while(rank.hasNext()) {
				var cid = rank.next();
				var light = cid.name == cm.getPlayer().getName();
				text += (light ? "#g" : "") + i + "\t" + cid.name + "\t\t" + cid.value + (light ? "#k" : "")+"\r\n";
				i++;
			}
			//cm.setBossLog("新手踩蜗牛副本", true);
			cm.sendNextS(text, 1);
        } else if (status == 1) {
        	//text = "恭喜你已经初步成为我们的一员，接下来送你#b#z" + package1 + "##k，祝你游戏愉快！另外仅需充值一元即可获得#r#z" + package2 + "##k。\r\n\r\n#b";
        	text = "恭喜你已经初步成为我们的一员，接下来 #e#r你敢赞助10块钱吗？敢充我就敢送宇宙级大礼包【价值100元会员卡一张】！！！#k#n\r\n\r\n";
        	for (var i = 0; i < 10; i++) {
        		if (i != 9) {
        			text += "#L" + i + "##r#e接受挑战充值10块钱【网站直冲即可】【豪礼相送】！#l#n\r\n";
        		} else {
        			text += "#L" + i + "##b不接受挑战【先点NPC造型然后点背包箱子】#l\r\n";
        		}
        	}
        	cm.sendSimpleS(text, 1);
        } else if (status == 2) {
    		//cm.gainItem(package1, 1);
    		//cm.gainItem(package2, 1);
        	//cm.setBossLog("新手向导", true);
        	if (selection != 9) {
        		cm.openWeb(payurl);
        		cm.sendNextS("正在跳转充值页面，充值完毕后点击下一步……", 1);
        	} else {
        		cm.sendYesNo("那么是否准备前往转职地图呢？");
        	}
        } else if (status == 3) {
        	cm.warp(waitMap);
			cm.getPlayer().startMapTimeLimitTask(10, cm.getMap(changeJobMap));
        	cm.dispose();
        	if (cm.getHyPay(1) > 8) {
        		cm.getHyPay(-8);
        		cm.setBossLog("首充8元礼包", true);
				//cm.gainItem(package1, 1);
				cm.gainItem(package2, 1);
	            cm.worldBrodcastEffect(5121037, "[系统公告] : 玩家[" + cm.getName() + "]来到了月光冒险岛，大家欢迎~");
	            cm.worldSpouseMessage(0x25,"[系统公告] : 玩家[" + cm.getName() + "]领取了10元首充礼包~");
        		cm.sendOk("感谢您的慷慨解囊，可以打开背包使用礼包了！现在正在前往转职地图。");
        	} else {
        		//cm.sendOk("礼包已发送，请在背包里查收！现在正在前往转职地图。");
				cm.sendOk("领取首冲礼包失败！现在正在前往转职地图。");
        	}
        }
    }
}