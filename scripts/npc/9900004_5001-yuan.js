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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  冒险岛新人礼包 #k	#n\r\n"
           text += "#b\t#v1142099# * 《 15天梦之勋章！ 攻击力 +#r35 #b左右 》#l\r\n"//3
            text += "#b\t#v1142101# * 《 全属性20 攻击力 +#r15#b》#l\r\n"//3
           // text += "#b\t#v1142003# * 《 全属性100 》#l\r\n"//3
            text += "#b\t#v2022465# * 《 随机经验金币技能点 》 x #r30#l\r\n"//3
           // text += "#b\t#v2022468#[自选必成卷] *1#l\r\n"//3
            text += "#b\t#v1932243#[随机皇家坐骑] *1#l\r\n"//3
            text += "#b\t#v2012000##z2012000# *20#l\r\n"//3
            text += "#b\t#v2000019##z2000019# *400#l\r\n"//3
            text += "#b\t#v2340000##z2340000# *5#l\r\n"//3
           text += "#b\t盛大点券 #r 300000点卷#l\r\n"//3
           text += "#b\t\额外赠送金币#r 2000000  #l\r\n\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.getBossLog("新人礼包") == 0) {
				//cm.gainItem(2022552, -1);
				//cm.gainItem(2022468, 1);
                               cm.给经验(20000);

				cm.gainItem(2022678, 1);
				cm.gainItem(2012000, 20);
				cm.gainItem(2022465, 30);
                                cm.gainItem(2000019, 400);
				cm.gainItem(2340000, 5);
				cm.gainMeso(3000000);

				//cm.gainNX(20000);
                
//cm.给属性装备(1142099, 100, 1, 20, 20, 20, 20, 500, 500, 35, 35,0, 0, 0, 0, 40, 40, 380);
cm.给属性装备(1142101, 1, 1, 20, 20, 20, 20, 500, 500, 15, 15,0, 0, 0, 0, 40, 40, 0);
		//cm.gainItem(1113070,20,20,20,20,200,200,20,20,0,0,0,0,0,0);//勋章
		//cm.gainItem(1142003,70,70,70,70,0,0,70,70,0,0,0,0,0,0);//勋章
		//cm.gainItem(1032223,1);//贝勒
		//cm.gainItem(1122267,1);//贝勒
		//cm.gainItem(1132246,1);//贝勒
		//cm.gainItem(1113075,1);//贝勒
		//cm.gainItem(4000313,1000);//黄金枫叶
            cm.sendOk("购买成功！");
            cm.setBossLog("新人礼包");
 
		//	cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1000元赞助礼包");
cm.全服黄色喇叭("[新人礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了新人大礼包。")
 
            cm.dispose();
			}else{
            cm.sendOk("#e#b一个人只能领取一次\r\n ");
            cm.dispose();
			}
		}
    }
}