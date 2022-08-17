var a = 0;
var Text = "#b#e卡片收集活动 卡片出处：世界所有怪.BOSS出卡  #r\r\n#L20##v2380000##v2380001##v2380002##v2380003##v2380004#等等各要1张 总共190张卡片 卡片前3页 红.橙.浅绿 \r\n#k完成 获得位移技能2选1 #s4111006# 或 #s2201002#\r\n\r\n\r\n#L50##e#d5000点卷购买第1页随机卡片箱子#v2028176#x10\r\n\r\n#L60##e#d5000点卷购买第2页随机卡片箱子#v2028177#x10\r\n\r\n#L70##e#d5000点卷购买第3页随机卡片箱子#v2028178#x10\r\n\r\n";//#L30##d#v2383006##v2383010# 这两张需要 #v4000291##v4000292#各500个\r\n\r\n#L10##d#v2383048##v2383049#这两张需要#v4000036##v4000286#各500个#L40##r收集BOSS卡第一页25个\r\n#v2388000##v2388001##v2388002##v2388003##v2388004##v2388005##v2388006##v2388007##v2388008##v2388009##v2388010##v2388011##v2388012##v2388013##v2388014##v2388015##v2388016##v2388017##v2388018##v2388019##v2388020##v2388021##v2388022##v2388023##v2388024#\r\n获得属性点50点强化星星1000个
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

		}else if (selection == 20){
cm.openNpc(9900004,1201113);
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
	var text = "呼叫群猪 * 1\r\n"
	   text += "呼叫群猪 * 1\r\n"
	   text += "需要游戏币# * 以上材料\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 50){
			
if (cm.getPlayer().getCSPoints(1) >= 5000) {
               cm.gainNX(-5000);
               cm.gainItem(2028176, 10);
			cm.dispose();
		}else {
			
			cm.sendOk("点券不足！");
			cm.dispose();
		}

		}else if (selection == 60){
if (cm.getPlayer().getCSPoints(1) >= 5000) {
               cm.gainNX(-5000);
               cm.gainItem(2028177, 10);
			cm.dispose();
		}else {
			
			cm.sendOk("点券不足！");
			cm.dispose();
		}
				}else if (selection == 70){
if (cm.getPlayer().getCSPoints(1) >= 5000) {
               cm.gainNX(-5000);
               cm.gainItem(2028178, 10);
			cm.dispose();
		}else {
			
			cm.sendOk("点券不足！");
			cm.dispose();
		}
            }
        } 
    } 
}