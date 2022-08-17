function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
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
            if (cm.getPlayer().getOneTimeLog("VIP") == 0) {
                var vip = "普通玩家"
                vip1价格 = 400;
                vip2价格 = 300;
                vip3价格 = 300;
            } else if (cm.getPlayer().getOneTimeLog("VIP") == 1) {
                vip = "#r白银会员";
                vip1价格 = 0;
                vip2价格 = 100;
                vip3价格 = 300;
            //} else if (cm.getPlayer().getOneTimeLog("VIP") == 2) {
                vip = "#r黄#r金#d会#r员";
                vip1价格 = 0;
                vip2价格 = 0;
                vip3价格 = 400;
            } else if (cm.getPlayer().getOneTimeLog("VIP") == 3) {
                vip = "#r钻#d石#r会#b员"
                vip1价格 = 400;
                vip2价格 = 0;
                vip3价格 = 300;
            }
            var text = "#r你好~#b这里是"+cm.getChannelServer().getServerName()+"#r尊#d贵#r的#b#kVIP#b自助购买！\r\n\r\n";
            text += "\t\t会员等级：" + vip + " || 元宝：" + cm.getmoneyb() + "\r\n\r\n";
            //text += "#L0##b购买#r白银会员#b（" + vip1价格 + "元宝）#l\r\n\r\n"
            //text += "#L1#购买#r黄金会员#k#b（" + vip2价格 + "元）#l\r\n\r\n";
            text += "#L2#购买#r钻石会员#k#b（" + vip3价格 + "元宝）#l\r\n\r\n";
            text += "#L3#VIP#r介绍#k#b#l\r\n\r\n";
            cm.sendSimple(text)
        } else if (status == 1) {
            if (selection == 0) {//购买VIP1
			if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
			cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(2).isFull(1)){//判断第二个也就是消耗栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(3).isFull(1)){//判断第三个也就是设置栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法购买.");	
			cm.dispose();
			} else if (cm.getInventory(4).isFull(2)){//判断第四个也就是其它栏的装备栏是否有一个空格
			cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(5).isFull(2)){//判断第五个也就是现金栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证现金栏位至少有3个空格,否则无法购买.");		
			cm.dispose();
           } else if (cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getmoneyb() >= 400) {
                    cm.setmoneyb(-400);
                    cm.sendOk("恭喜你购买成功！");
                    cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,20,20,20,20,800,800,15,15,0,0,0,0,0,0);//
                    cm.laba("【VIP祝贺】" + " : " + " [" + cm.getPlayer().getName() + "]成功成为了白银会员！大家祝贺他把！",11);
                    cm.dispose();
                } else {
                    cm.sendOk("不符合这个选项");
                    cm.dispose();
                }

            } else if (selection == 1) {//购买VIP2
                if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
			cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(2).isFull(1)){//判断第二个也就是消耗栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(3).isFull(1)){//判断第三个也就是设置栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法购买.");	
			cm.dispose();
			} else if (cm.getInventory(4).isFull(2)){//判断第四个也就是其它栏的装备栏是否有一个空格
			cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(5).isFull(2)){//判断第五个也就是现金栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证现金栏位至少有3个空格,否则无法购买.");		
			cm.dispose();
           } else if (cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getmoneyb() >= 300) {//直接购买VIP2 
                    cm.setmoneyb(-300);
                    cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,20,20,20,20,800,800,15,15,0,0,0,0,0,0);//
					//cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					cm.laba("【VIP祝贺】" + " : " + " [" + cm.getPlayer().getName() + "]成功成为了黄金会员！大家祝贺他把！",11);
					 cm.sendOk("恭喜你购买成功！");
                  cm.dispose();
                } else if (cm.getPlayer().getOneTimeLog("VIP") == 1 && cm.getmoneyb() >= 400) {//VIP1升级VIP2
                    cm.setmoneyb(-400);
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					cm.laba("【VIP祝贺】" + " : " + " [" + cm.getPlayer().getName() + "]成功成为了黄金会员！大家祝贺他把！",11);
					 cm.sendOk("恭喜你购买成功！");
                    cm.dispose();

                } else {
                    cm.sendOk("不符合这个选项");
                    cm.dispose();
                }
            } else if (selection == 2) {//钻石会员
                if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
			cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(2).isFull(1)){//判断第二个也就是消耗栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(3).isFull(1)){//判断第三个也就是设置栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法购买.");	
			cm.dispose();
			} else if (cm.getInventory(4).isFull(2)){//判断第四个也就是其它栏的装备栏是否有一个空格
			cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法购买.");	
			cm.dispose();	
			} else if (cm.getInventory(5).isFull(2)){//判断第五个也就是现金栏的装备栏是否有一个空格	
			cm.sendOk("#b请保证现金栏位至少有3个空格,否则无法购买.");		
			cm.dispose();
           } else if (cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getmoneyb() >= 300) {//直接购买VIP3 
                    cm.setmoneyb(-300);
                    cm.sendOk("恭喜你购买成功！");
                    cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,20,20,20,20,800,800,15,15,0,0,0,0,0,0);//
					//cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					//cm.gainItem(1112907,60,60,60,60,3000,3000,40,40,0,0,0,0,0,0);//
		       cm.laba("【VIP祝贺】" + " : " + " [" + cm.getPlayer().getName() + "]成功成为了钻石会员！大家祝贺他把！",11);
               cm.dispose();
                } else if (cm.getPlayer().getOneTimeLog("VIP") == 1 && cm.getmoneyb() >= 300) {//VIP1升级VIP3
                    cm.setmoneyb(-300);
                    cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
		            //cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					//cm.gainItem(1112907,60,60,60,60,3000,3000,40,40,0,0,0,0,0,0);//
		            cm.sendOk("恭喜你购买成功！");
					cm.laba("【VIP祝贺】" + " : " + " [" + cm.getPlayer().getName() + "]成功成为了钻石会员！大家祝贺他把！",11);
                  cm.dispose();

                } else if (cm.getPlayer().getOneTimeLog("VIP") == 2 && cm.getmoneyb() >= 300) {//vip2升级VIP3
                    cm.setmoneyb(-300);
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,60,60,60,60,3000,3000,40,40,0,0,0,0,0,0);//
                    cm.sendOk("恭喜你购买成功！");
					cm.laba("【VIP祝贺】" + " : " + " [" + cm.getPlayer().getName() + "]成功成为了钻石会员！大家祝贺他把！",11);
                    cm.dispose();

                } else {
                    cm.sendOk("不符合这个选项");
                    cm.dispose();
                }
			}else if  (selection == 3) {//个人信息#l
			cm.sendOk("#r------------------------------------------------------#b#k#b#r#k#b#r★钻石会员（300充值比）#k#b\r\n  每天领取 500万金币 祝福混沌 10张 国庆币 20个 高等五水晶3个 高等五彩 1个 锂 1个 粥 1个 古董表 1个 圣杯10个 开奖箱子 10个 1#b");
                cm.dispose();
                }
            }
        }
    }



