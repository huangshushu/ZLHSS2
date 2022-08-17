/*
脚本制作QQ：121418194
价格合理，欢迎定制！
*/

var status = 0;
var dianquan = 1000;//1级需求点券
var point;
var dancidengji = 1;//单次最少等级

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getJob()>= 1100&&cm.getJob()< 2000&&cm.getLevel()>=120&&cm.getLevel()<130) {
            cm.sendSimple("亲爱的[#b#e#h ##n#k]\r\n\t 欢迎来到回顾冒险岛骑士团服务中心，请问有什么能帮到你的？#l\r\n#L0#我是骑士团，我要升级！");
        } else {
			cm.sendOk("当前仅支持升级到130级！或者您不是骑士团职业？");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
			cm.sendNext("当前您的等级如下："+dengji+"\r\n当前您的四维属性如下:\r\n\t力量："+liliang+"\r\n\t敏捷："+minjie+"\r\n\t运气："+yunqi+"\r\n\t智力："+zhili+"\r\n\t#r需要升级请点击下一步(将获取5点能力点以及1点技术能点#r请注意把属性点先全部加完，否则会被清零！#r)#k");
        }
    } else if (status == 2) {
		cm.sendNext("注意HP/MP将不会得到提升！");
    } else if (status == 3) {
		point = 1;
        cm.sendYesNo("你确定要提升 #r" + point + "#k 个等级吗?那将需要"+point*dianquan+"的点券!");
    } else if (status == 4) {
		var meso = cm.getPlayer().getCSPoints(1);
		if(point*dianquan > meso){
			cm.sendOk("你并没有足够的钱来消费！");
			cm.dispose();
			}
		var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
        text += "#L1#力量+5"
		text += "#L2#敏捷+5"
		text += "#L3#运气+5"
		text += "#L4#智力+5"
        cm.sendSimple("升级后，你想增加哪个能力值呢？？\r\n#b" + text);
	}else if (selection == 1){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(point*5+liliang, minjie, zhili, yunqi);
		ch.setLevel(dengji+1+point);
		////cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}else if (selection == 2){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(liliang, point*5+minjie, zhili, yunqi);
		ch.setLevel(dengji+1+point);
		//cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}else if (selection == 3){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(liliang,minjie, zhili, 5*point+yunqi);
		ch.setLevel(dengji+1+point);
		//cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}else if (selection == 4){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(liliang,minjie, 5*point+zhili, yunqi);
		ch.setLevel(dengji+1+point);
		//cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}
}
