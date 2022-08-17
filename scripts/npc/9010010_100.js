var a = 0;
var Text = "#b#e理想卡片收集活动，卡片出处：所有卡片对应的怪物出  #r\r\n需要收集卡片前2个标签页，即红和橙2个标签页里的所有怪物卡片   \r\n#k完成后可找群主获得位移技能2选1 （二段跳）（快速移动）\r\n\r\n";//#L30##d#v2383006##v2383010# 这两张需要 #v4000291##v4000292#各500个\r\n\r\n#L10##d#v2383048##v2383049#这两张需要#v4000036##v4000286#各500个\r\n\r\n";//#L40##r收集BOSS卡第一页25个\r\n#v2388000##v2388001##v2388002##v2388003##v2388004##v2388005##v2388006##v2388007##v2388008##v2388009##v2388010##v2388011##v2388012##v2388013##v2388014##v2388015##v2388016##v2388017##v2388018##v2388019##v2388020##v2388021##v2388022##v2388023##v2388024#\r\n获得属性点50点强化星星1000个
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
		
		}else if (selection == 10){
if (cm.itemQuantity(4000036) >=500 && cm.itemQuantity(4000286) >=500 && cm.getMeso()>=1000000&& cm.getPlayer().getBossLog("120赞助礼包",1) == 0){
cm.gainItem(4000036,-500);
cm.gainItem(4000286,-500);
cm.gainItem(2383048,1);
cm.gainItem(2383049,1);
cm.getPlayer().setBossLog("110赞助礼包",1,1);

cm.gainMeso(-1000000);

	cm.sendNext("#b兑换提示:#r\r\n技能兑换蛋，恭喜你！")
cm.dispose();
}else{
	var text = "#v4000036# * 500\r\n"
	   text += "#v4000286# * 500\r\n"
	   text += "需要游戏币# * 100万\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 30){
if (cm.itemQuantity(4000291) >=500 && cm.itemQuantity(4000292) >=500&& cm.getMeso()>=1000000&& cm.getPlayer().getBossLog("130赞助礼包",1) == 0){
cm.gainItem(4000291,-500);
cm.gainItem(4000292,-500);
cm.gainItem(2383006,1);
cm.gainItem(2383010,1);
cm.getPlayer().setBossLog("130赞助礼包",1,1);

cm.gainMeso(-1000000);

	cm.sendNext("#b兑换提示:#r\r\n技能兑换蛋，恭喜你！")
cm.dispose();
}else{
	var text = "#v4000036# * 500\r\n"
	   text += "#v4000286# * 500\r\n"
	   text += "需要游戏币# * 100万\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 40){
if (cm.itemQuantity(3700061) >=1 && cm.getMeso()>=1000000 && cm.getPlayer().getBossLog("150赞助礼包",1) == 0){
cm.gainItem(3700061,-1);

cm.gainAp(50);
cm.gainItem(3992025,1000);//奖励道具ID，数量
cm.getPlayer().setBossLog("150赞助礼包",1,1);

cm.gainMeso(-1000000);

	cm.sendNext("#b兑换提示:#r\r\nBOSS卡兑换完成，恭喜你！")
cm.dispose();
}else{
	var text = "#v4000036# * 500\r\n"
	   text += "#v4000286# * 500\r\n"
	   text += "需要游戏币# * 100万\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 50){
if (cm.itemQuantity(1112475) >=1 && cm.itemQuantity(4032398) >=10  && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000054) >=100&& cm.itemQuantity(4000053) >=100&& cm.itemQuantity(4000050) >=1000 && cm.itemQuantity(4000052) >=1000 && cm.itemQuantity(4000051) >=1000 && cm.itemQuantity(4000055) >=200  && cm.itemQuantity(4000048) >=200 ){
cm.gainItem(1112485,20,20,20,20,200,200,15,15,10,10,10,10,10,10);
cm.gainItem(1112475,-1);
cm.gainItem(4032398,-10);
cm.gainItem(4000050,-1000);
cm.gainItem(4000052,-1000);
cm.gainItem(4000051,-1000);
cm.gainItem(4000055,-200);
cm.gainItem(4000048,-200);
cm.gainItem(4000053,-100);
cm.gainItem(4000054,-100);
cm.gainItem(4000175,-1);
	cm.sendNext("#b升级提示:#r\r\n老公老婆戒指LV40了，恭喜你！")
cm.dispose();
}else{
	var text = "呼叫群猪 * 1\r\n"
	   //text += "需要#v4032398# * 10\r\n"
	   //text += "需要#v4000050# * 1000\r\n"
	   //text += "需要#v4000052# * 1000\r\n"
	   //text += "需要#v4000051# * 1000\r\n"
	   //text += "需要#v4000055# * 200\r\n"
	   //text += "需要#v4000048# * 200\r\n"
	   //text += "需要#v4000053# * 100\r\n"
	   //text += "需要#v4000054# * 100\r\n"
	   //text += "需要#v4000175# * 1\r\n"
cm.sendOk(text)
cm.dispose();
}

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