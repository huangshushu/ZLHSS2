var a = 0;
var Text = "#b#e七七限时12生肖活动  （固有时装戒指一人只能带一个） 兑换时间3.27-4.27 所有材料出处：世界所有怪小几率出  #r\r\n#L20##v3994035##v3994036##v3994037##v3994038##v3994039##v3994040##v3994041##v3994042##v3994043##v3994044##v3994045##v3994046#各需要1个#r\r\n合成 随机 全属性攻魔10-88血魔1000#v1113003#双防御300#l\r\n\r\n\r\n\r\n#L30##b#v3994035##v3994036##v3994037##v3994038##v3994039##v3994040##v3994041##v3994042##v3994043##v3994044##v3994045##v3994046#+1000万游戏币\r\n重置属性10-88#v1113003#\r\n\r\n\r\n\r\n";//#L30##b获取戒指后使用#v3994047##v3994048##v3994049#市场14洞门口强化
var db;
var time;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			        }else if (a == 0) {
							 a = 0;
cm.sendSimple(Text);		
			}else if (a == 1){
			if (selection == 1) {
                cm.sendOk("#b升级错误:#k\r\n#i1112446##t1112446#通过点卷商城或任务等其它渠道获得");
                    cm.dispose();
		}else if (selection == 51){
                //cm.sendOk("#b:#k\r\n1.制作遇见收藏活动 需要个#v4031111# 77个#v4031110# ");
                    cm.dispose();
		
		//}else if (selection == 10){   cm.getPlayer().getBossLog("戒指兑换",1) == 5&&


		}else if (selection == 20){
if ( cm.itemQuantity(3994035) >=1 && cm.getPlayer().getBossLog("戒指兑换111",1) == 0&& cm.itemQuantity(3994036) >=1&& cm.itemQuantity(3994037) >=1&& cm.itemQuantity(3994038) >=1&& cm.itemQuantity(3994039) >=1&& cm.itemQuantity(3994040) >=1&& cm.itemQuantity(3994041) >=1&& cm.itemQuantity(3994042) >=1&& cm.itemQuantity(3994043) >=1&& cm.itemQuantity(3994044) >=1&& cm.itemQuantity(3994045) >=1&& cm.itemQuantity(3994046) >=1&& cm.getMeso()>=1000000){
var r = Math.ceil(Math.random() * 70+10);
cm.gainItem(3994035,-1);
cm.gainItem(3994036,-1);
cm.gainItem(3994037,-1);
cm.gainItem(3994038,-1);
cm.gainItem(3994039,-1);
cm.gainItem(3994040,-1);
cm.gainItem(3994041,-1);
cm.gainItem(3994042,-1);
cm.gainItem(3994043,-1);
cm.gainItem(3994044,-1);
cm.gainItem(3994045,-1);
cm.gainItem(3994046,-1);

cm.getPlayer().setBossLog("戒指兑换111",1,1)
cm.gainItem(1113003,r,r,r,r,1000,1000,r,r,300,300,20,20,20,20);
cm.gainMeso(-1000000);
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "限时活动" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功兑换限时黑暗小恶魔戒指 随机10-80属性！"));


	cm.sendNext("#b兑换提示:#r\r\n戒指兑换成功，恭喜你！")
cm.dispose();
}else{
	var text = "#v3994035# * 1\r\n"
	   text += "#v3994036# * 1\r\n"
	   text += "#v3994037# * 1\r\n"
	   text += "#v3994038# * 1\r\n"
	   text += "#v3994039# * 1\r\n"
	   text += "#v3994040# * 1\r\n"
	   text += "#v3994041# * 1\r\n"
	   text += "#v3994042# * 1\r\n"
	   text += "#v3994043# * 1\r\n"
	   text += "#v3994044# * 1\r\n"
	   text += "#v3994045# * 1\r\n"
	   text += "#v3994046# * 1\r\n"
	   
	   text += "需要游戏币# * 1000万 一人只能兑换一次\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 30){
if (cm.itemQuantity(1113003) >=1 && cm.itemQuantity(3994035) >=1 && cm.itemQuantity(3994036) >=1&& cm.itemQuantity(3994037) >=1&& cm.itemQuantity(3994038) >=1&& cm.itemQuantity(3994039) >=1&& cm.itemQuantity(3994040) >=1&& cm.itemQuantity(3994041) >=1&& cm.itemQuantity(3994042) >=1&& cm.itemQuantity(3994043) >=1&& cm.itemQuantity(3994044) >=1&& cm.itemQuantity(3994045) >=1&& cm.itemQuantity(3994046) >=1&& cm.getMeso()>=10000000){
var r = Math.ceil(Math.random() * 70+10);
cm.gainItem(3994035,-1);
cm.gainItem(3994036,-1);
cm.gainItem(3994037,-1);
cm.gainItem(3994038,-1);
cm.gainItem(3994039,-1);
cm.gainItem(3994040,-1);
cm.gainItem(3994041,-1);
cm.gainItem(3994042,-1);
cm.gainItem(3994043,-1);
cm.gainItem(3994044,-1);
cm.gainItem(3994045,-1);
cm.gainItem(3994046,-1);
cm.gainItem(1113003,-1);
cm.gainItem(1113003,r,r,r,r,1000,1000,r,r,300,300,20,20,20,20);
cm.gainMeso(-10000000);
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "限时活动" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功重置限时黑暗小恶魔戒指 随机10-80属性！"));
	cm.sendNext("#b重置提示:#r\r\n，#v1113003#恭喜你！")
cm.dispose();
}else{
	var text = " 重置 活动戒指\r\n"
	text += "需要#v1113003# * 1\r\n"
	   text += "需要#v3994035# * 1\r\n"
	   text += "需要#v3994036# * 1\r\n"
	   text += "需要#v3994037# * 1\r\n"
	   text += "兑换#v3994038# * 1\r\n"
	   text += "兑换#v3994039# * 1\r\n"
	   text += "兑换#v3994040# * 1\r\n"
	   text += "兑换#v3994041# * 1\r\n"
	   text += "兑换#v3994042# * 1\r\n"
	   text += "兑换#v3994043# * 1\r\n"
	   text += "兑换#v3994044# * 1\r\n"
	   text += "兑换#v3994045# * 1\r\n"
	   text += "兑换#v3994046# * 1\r\n"
	   text += "需要游戏币 * 1000万\r\n"
	   
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 40){
cm.openNpc(2090104,100);
		}else if (selection == 50){
if (cm.itemQuantity(1112485) >=1 && cm.itemQuantity(4032398) >=15&& cm.itemQuantity(4000313) >=500 && cm.itemQuantity(4000270) >=1000 && cm.itemQuantity(4000272) >=1000 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000151) >=200 && cm.itemQuantity(4000152) >=200 && cm.itemQuantity(4000244) >=20&& cm.itemQuantity(4000245) >=20){
cm.gainItem(1112495,30,30,30,30,300,300,20,20,20,20,20,20,20,20);
cm.gainItem(1112485,-1);
cm.gainItem(4032398,-15);
cm.gainItem(4000313,-500);
cm.gainItem(4000270,-1000);
cm.gainItem(4000272,-1000);
cm.gainItem(4001084,-1);
cm.gainItem(4000175,-1);
cm.gainItem(4000151,-200);
cm.gainItem(4000152,-200);
cm.gainItem(4000244,-20);
cm.gainItem(4000245,-20);
	cm.sendNext("#b升级提示:#r\r\n老公老婆戒指LV50了，恭喜你！")
cm.dispose();
}else{
var text = "老公老婆戒指LV40 * 1\r\n"
	   text += "需要#v4032398# * 15\r\n"
	   text += "需要#v4000313# * 1000\r\n"
	   text += "需要#v4000270# * 1000\r\n"
	   text += "需要#v4000272# * 500\r\n"
	   text += "需要#v4000151# * 200\r\n"
	   text += "需要#v4000152# * 200\r\n"
	   text += "需要#v4000244# * 20\r\n"
       text += "需要#v4000245# * 20\r\n"
	   text += "需要#v4001084# * 1\r\n"
	   text += "需要#v4000175# * 1\r\n"
cm.sendOk(text)
cm.dispose();
}
            }
        } 
    } 
}