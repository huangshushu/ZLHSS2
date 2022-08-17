/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var beauty = 0;
var tosend = 0;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var sl;
var mats;
var dds;
function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
            gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
			gsjb += "              #r欢迎来到月月冒险岛坐骑商城#k\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            //gsjb += "#L1#"+小烟花+"#b购买#v1902346##z1902346##r(#r需要点卷50000)#b全属性38#l\r\n\r\n";
			gsjb += "#L2#"+小烟花+"#b购买#v1902336##z1902336##r(#r需要积分238)#b全属性58#l\r\n\r\n";
			gsjb += "#L3#"+小烟花+"#b购买#v1902311##z1902311##r(#r需要积分288)#b全属性88#l\r\n\r\n";
			gsjb += "#L4#"+小烟花+"#b购买#v1902402##z1902402##r(#r需要积分338)#b全属性138#l\r\n\r\n";
			gsjb += "#L5#"+小烟花+"#b购买#v1902403##z1902403##r(#r需要积分388)#b全属性188#l\r\n\r\n";
			gsjb += "#L6#"+小烟花+"#b购买#v1902404##z1902404##r(#r需要积分438)#b全属性238#l\r\n\r\n";
			gsjb += "#L7#"+小烟花+"#b购买#v1902407##z1902407##r(#r需要积分488)#b全属性288#l\r\n\r\n";
			gsjb += "#L8#"+小烟花+"#b购买#v1902350##z1902350##r(#r需要积分538)#b全属性338#l\r\n\r\n";
			gsjb += "#L9#"+小烟花+"#b购买#v1902405##z1902405##r(#r需要积分588)#b全属性388#l\r\n\r\n\r\n";
			gsjb += "   "+小烟花+"#b购买#v1902401##z1902401##r(#r需要坐骑公式合成)#b全属性600#l\r\n\r\n";
			gsjb += "   "+小烟花+"#b购买#v1902411##z1902411##r(#r需要坐骑公式合成)#b全属性666#l\r\n\r\n";
			
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 1;
					cm.sendGetNumber("请输入需要购买#r#v1902346##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 2;
					cm.sendGetNumber("请输入需要购买#r#v1902336##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 3) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 3;
					cm.sendGetNumber("请输入需要购买#r#v1902311##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 4) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 4;
					cm.sendGetNumber("请输入需要购买#r#v1902402##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 5) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 5;
					cm.sendGetNumber("请输入需要购买#r#v1902403##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 6) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 6;
					cm.sendGetNumber("请输入需要购买#r#v1902404##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 7) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 7;
					cm.sendGetNumber("请输入需要购买#r#v1902407##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 8) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 8;
					cm.sendGetNumber("请输入需要购买#r#v1902350##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 9) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 9;
					cm.sendGetNumber("请输入需要购买#r#v1902405##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 10) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 10;
					cm.sendGetNumber("请输入需要购买#r#v1902401##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 11) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的积分不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 11;
					cm.sendGetNumber("请输入需要购买#r#v1902411##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }
               
															
        } else if (status == 2) {
              if (beauty == 1) {
                 if (cm.getPlayer().getCSPoints(1) > 50000) {
		            cm.gainItem(1902346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//属性坐骑
		            cm.gainItem(1912346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//属性鞍子
					cm.gainNX(-50000);
                    cm.sendOk("您成功购入#r#v1902346##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』成功购买了1个星球坐骑！"));
                } else {
                    cm.sendNext("点卷不足无法换购！");
                    cm.dispose();
                }				  
		         //if (cm.getmoneyb() >= 50000) {
		           //  cm.getmoneyb(-50000)
		             //cm.gainItem(1902346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//属性坐骑
		             //cm.gainItem(1912346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//属性鞍子
                     //cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个星球坐骑！");
                     //cm.dispose();
                    //}else{
                     //cm.sendOk("点卷不足无法换购！");
                     //cm.dispose();
                    //}
            }else if (beauty == 2) {
		         if (cm.getmoneyb() >= 238) {
		             cm.setmoneyb(-238)
				     cm.gainItem(1902336,58,58,58,58,1000,1000,58,58,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912336,58,58,58,58,1000,1000,58,58,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个太阳坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 3) {
		         if (cm.getmoneyb() >= 288) {
		             cm.setmoneyb(-288)
				     cm.gainItem(1902311,88,88,88,88,1000,1000,88,88,0,0,0,0,0,0);//属性坐骑
			         cm.gainItem(1912311,88,88,88,88,1000,1000,88,88,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个幽灵拖车坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 4) {
		         if (cm.getmoneyb() >= 338) {
		             cm.setmoneyb(-338)
				     cm.gainItem(1902402,138,138,138,138,1000,1000,138,138,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912402,138,138,138,138,1000,1000,138,138,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个飞鱼坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 5) {
		         if (cm.getmoneyb() >= 388) {
		             cm.setmoneyb(-388)
				     cm.gainItem(1902403,188,188,188,188,1000,1000,188,188,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912403,188,188,188,188,1000,1000,188,188,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个星空鲸鱼坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 6) {
		         if (cm.getmoneyb() >= 438) {
		             cm.setmoneyb(-438)
			    	 cm.gainItem(1902404,238,238,238,238,1000,1000,238,238,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912404,238,238,238,238,1000,1000,238,238,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个极光飞马坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 7) {
		         if (cm.getmoneyb() >= 488) {
		             cm.setmoneyb(-488)
				     cm.gainItem(1902407,288,288,288,288,1000,1000,288,288,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912407,288,288,288,288,1000,1000,288,288,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个音乐花朵坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 8) {
		         if (cm.getmoneyb() >= 538) {
		             cm.setmoneyb(-538)
				     cm.gainItem(1902350,338,338,338,338,1000,1000,338,338,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912350,338,338,338,338,1000,1000,338,338,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个生气云坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 9) {
		         if (cm.getmoneyb() >= 588) {
		             cm.setmoneyb(-588)
				     cm.gainItem(1902405,388,388,388,388,1000,1000,388,388,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912405,388,388,388,388,1000,1000,388,388,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个幽灵纸船坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 10) {
		         if (cm.getmoneyb() >= 1000) {
		             cm.setmoneyb(-1000)
				     cm.gainItem(1902401,298,298,298,298,1000,1000,298,298,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912401,298,298,298,298,1000,1000,298,298,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个火鸟坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }else if (beauty == 11) {
		         if (cm.getmoneyb() >= 1000) {
		             cm.setmoneyb(-1000)
				     cm.gainItem(1902411,368,368,368,368,1000,1000,368,368,0,0,0,0,0,0);//属性坐骑
				     cm.gainItem(1912411,368,368,368,368,1000,1000,368,368,0,0,0,0,0,0);//属性鞍子
                     cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个龙猫坐骑！");
                     cm.dispose();
                    }else{
                     cm.sendOk("积分不足无法换购！");
                     cm.dispose();
                    }
            }
        } else {
            cm.dispose();
        }
    }
}