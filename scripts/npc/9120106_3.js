/*合成NPC 作者:bay 廖*/
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

            cm.sendOk("欢迎光临！");
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="    合成之前,请先检查 包包 每一个栏目 是否有两个空位以上? 再进行合成, 否则合成后不见,别哭哦!\r\n";
            text += "#L1##d四维 +4  HP/MP +10  双防 +20 命中/回避 +2 #v1032080##k#l\r\n";
            text += "#L2##d四维 +8  HP/MP +20  双防 +30 命中/回避 +3 #v1032081##k#l\r\n";
            text += "#L3##d四维 +12 HP/MP +40  双防 +50 命中/回避 +5 #v1032082##k#l\r\n";
            text += "#L4##d四维 +16 HP/MP +50  双防 +50 命中/回避 +5 #v1032083##k#l\r\n";
            //text += "#L5##d四维 +10 HP/MP + 80 双防 +60 命中 +8 #v1032084##k#l\r\n";
            //text += "#L6##d四维 +15 HP/MP+ 150 双防 +90 命中 +12#v1032142##k#l\r\n";
			//text += "#L7##d四维/攻/魔 +25 HP/MP+ 150 双防+150 命中 +25#v1032191##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4000313, 50) && cm.haveItem(4031560, 5) && cm.haveItem(4031561, 5) && cm.haveItem(4002000, 10) && cm.haveItem(4002001, 10) && cm.haveItem(4002002, 5) && cm.haveItem(4031456, 20) && cm.haveItem(2210006, 1) && cm.getMeso() >=100000) {
                cm.gainItem(4000313,-50);//金枫叶
				//cm.gainItem(4031560,-5);//达克鲁
                //cm.gainItem(4031561,-5);//弓手邮票
				cm.gainItem(4002000,-20);//绿蜗牛
				cm.gainItem(4002001,-20);//蓝蜗牛
				cm.gainItem(4002002,-10);//木妖
				cm.gainItem(4031456,-20);//枫叶珠
				cm.gainItem(2210006,-1);//白色精华
                cm.gainMeso(-100000);
				cm.gainItem(1032080,4,4,4,4,10,10,0,0,20,20,2,2,0,0);
                cm.sendOk("合成#v1032080#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*50个  #v4031560#*5个  #v4031561#*5个  #v4002000#*10个  #v4002001#*10个  #v4002002#*5个 #v4031456#*20个 #v2210006#*1个 20万金币");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(4000313, 100) && cm.haveItem(4031560, 10) && cm.haveItem(1032080, 1) && cm.haveItem(4031561, 10) && cm.haveItem(4002000, 20) && cm.haveItem(4002001, 20) && cm.haveItem(4002002, 10) && cm.haveItem(4031456, 40) && cm.haveItem(4001000, 1) && cm.getMeso() >=200000) {
                cm.gainItem(4000313,-100);//金枫叶
				cm.gainItem(1032080,-1);//1daibusuzhike
				cm.gainItem(4031560,-10);//达克鲁
                cm.gainItem(4031561,-10);//弓手邮票
				cm.gainItem(4002000,-20);//绿蜗牛
				cm.gainItem(4002001,-20);//蓝蜗牛
				cm.gainItem(4002002,-10);//木妖
				cm.gainItem(4031456,-40);//枫叶珠
				cm.gainItem(4001000,-1);//玻璃鞋
                cm.gainMeso(-200000);
				cm.gainItem(1032081,2,2,2,2,20,20,2,2,30,30,3,3,0,0);
                cm.sendOk("合成#v1032081#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*100个 #v1032080#*1个  #v4031560#*10个  #v4031561#*10个  #v4002000#*20个  #v4002001#*20个 #v4002002#*10个 #v4031456#*40个 #v4001000#*1个 20万金币");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(4000313, 200) && cm.haveItem(1032081, 1) && cm.haveItem(4031560, 15) && cm.haveItem(4031561, 15) && cm.haveItem(4002000, 25) && cm.haveItem(4002001, 25) && cm.haveItem(4002002, 15) && cm.haveItem(4031456, 50) && cm.haveItem(4000384, 1) && cm.getMeso() >=400000) {
                cm.gainItem(4000313,-200);//金枫叶
				cm.gainItem(1032081,-1);//2daibusuzhike
				cm.gainItem(4031560,-15);//达克鲁
                cm.gainItem(4031561,-15);//弓手邮票
				cm.gainItem(4002000,-25);//绿蜗牛
				cm.gainItem(4002001,-25);//蓝蜗牛
				cm.gainItem(4002002,-15);//木妖
				cm.gainItem(4031456,-50);//枫叶珠
				cm.gainItem(4000384,-1);//heise jinghua
                cm.gainMeso(-400000);
				cm.gainItem(1032082,3,3,3,3,40,40,3,3,50,50,5,5,0,0);
                cm.sendOk("合成#v1032082#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*200个  #v1032081#*1个  #v4031560#*15个  #v4031561#*15个  #v4002000#*25个  #v4002001#*25个 #v4002002#*15个 #v4031456#*50个  #v4000384#*1个 40万金币");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4000313, 300) && cm.haveItem(1032082, 1) && cm.haveItem(4031560, 20) && cm.haveItem(4031561, 20) && cm.haveItem(4002000, 30) && cm.haveItem(4002001, 30) && cm.haveItem(4002002, 20) && cm.haveItem(4031456, 60) && cm.haveItem(4031942, 1) && cm.getMeso() >=800000) {
                cm.gainItem(4000313,-300);//金枫叶
				cm.gainItem(1032082,-1);//busuzhike
				cm.gainItem(4031560,-20);//达克鲁
                cm.gainItem(4031561,-20);//弓手邮票
				cm.gainItem(4002000,-30);//绿蜗牛
				cm.gainItem(4002001,-30);//蓝蜗牛
				cm.gainItem(4002002,-20);//木妖
				cm.gainItem(4031456,-60);//枫叶珠
				cm.gainItem(4031942,-1);//扳手
                cm.gainMeso(-800000);
				cm.gainItem(1032083,4,4,4,4,50,50,4,4,50,50,5,5,0,0);
                cm.sendOk("合成#v1032083#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*300个  #v1032082#*1个  #v4031560#*20个  #v4031561#*20个  #v4002000#*30个  #v4002001#*30个 #v4002002#*20个 #v4031456#*60个  #v4031942#*1个 80万金币");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(4000313, 400) && cm.haveItem(1032083, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031561, 30) && cm.haveItem(4002000, 40) && cm.haveItem(4002001, 40) && cm.haveItem(4002002, 30) && cm.haveItem(4031456, 80) && cm.haveItem(4000244, 10) && cm.getMeso() >=2000000) {
                cm.gainItem(4000313,-400);//金枫叶
				cm.gainItem(1032083,-1);//busuzhike
				cm.gainItem(4031560,-30);//达克鲁
                cm.gainItem(4031561,-30);//弓手邮票
				cm.gainItem(4002000,-40);//绿蜗牛
				cm.gainItem(4002001,-40);//蓝蜗牛
				cm.gainItem(4002002,-30);//木妖
				cm.gainItem(4031456,-80);//枫叶珠
				cm.gainItem(4000244,-10);//linghun
                cm.gainMeso(-2000000);
				cm.gainItem(1032084,10,10,10,10,80,80,10,10,60,60,8,8,0,0);
                cm.sendOk("合成#v1032084#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*400个  #v1032083#*1个  #v4031560#*30个  #v4031561#*30个  #v4002000#*40个  #v4002001#*40个 #v4002002#*30个 #v4031456#*80个  #v4000244#*10个 200万金币");
                cm.dispose();
            }
        } else if (selection == 6) {
           if (cm.haveItem(4000313, 400) && cm.haveItem(1032084, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031561, 30) && cm.haveItem(4002000, 40) && cm.haveItem(4002001, 40) && cm.haveItem(4002002, 30) && cm.haveItem(4031456, 80) && cm.haveItem(4000244, 10) && cm.haveItem(4310143, 8) && cm.getMeso() >=2000000) {
                cm.gainItem(4000313,-400);//金枫叶
				cm.gainItem(1032084,-1);//busuzhike
				cm.gainItem(4031560,-30);//达克鲁
                cm.gainItem(4031561,-30);//弓手邮票
				cm.gainItem(4002000,-40);//绿蜗牛
				cm.gainItem(4002001,-40);//蓝蜗牛
				cm.gainItem(4002002,-30);//木妖
				cm.gainItem(4031456,-80);//枫叶珠
				cm.gainItem(4000245,-10);//linghun
				cm.gainItem(4310143,-8);
                cm.gainMeso(-2000000);
				cm.gainItem(1032142,15,15,15,15,150,150,15,15,90,90,12,12,0,0);
                cm.sendOk("合成#v1032142#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*400个  #v1032084#*1个  #v4031560#*30个  #v4031561#*30个  #v4002000#*40个  #v4002001#*40个 #v4002002#*30个 #v4031456#*80个  #v4000245#*10个 #v4310143#*8个 200万金币");
                cm.dispose();
            }
		} else if (selection == 7) {
           if (cm.haveItem(4000313, 800) && cm.haveItem(1032142, 1) && cm.haveItem(4031560, 60) && cm.haveItem(4031561, 60) && cm.haveItem(4002000, 80) && cm.haveItem(4002001, 80) && cm.haveItem(4002002, 60) && cm.haveItem(4031456, 160) && cm.haveItem(4021010, 5) && cm.haveItem(4000463, 10) && cm.getMeso() >=20000000) {
                cm.gainItem(4000313,-800);//金枫叶
				cm.gainItem(1032142,-1);//busuzhike
				cm.gainItem(4031560,-60);//达克鲁
                cm.gainItem(4031561,-60);//弓手邮票
				cm.gainItem(4002000,-80);//绿蜗牛
				cm.gainItem(4002001,-80);//蓝蜗牛
				cm.gainItem(4002002,-60);//木妖
				cm.gainItem(4031456,-160);//枫叶珠
				cm.gainItem(4021010,-5);//linghun
				cm.gainItem(4000463,-10);
                cm.gainMeso(-20000000);
				cm.gainItem(1032191,25,25,25,25,150,150,25,25,150,150,25,25,0,0);
                cm.sendOk("合成#v1032191#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*800个  #v1032142#*1个  #v4031560#*60个  #v4031561#*60个  #v4002000#*80个 #v4002001#*80个 #v4002002#*60个 #v4031456#*160个  #v4021010#*5个 #v4000463#*10个 2000万金币");
                cm.dispose();
            }
			}
		}
    }


