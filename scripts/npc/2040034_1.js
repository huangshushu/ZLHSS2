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
            text += "#e#d您好！您在天空副本获得的#v1113164#，可以通过玩具副本得到#v4002003#进一步的提升哦！\r\n\r\n#v1113165#全属性+5 攻击/魔法+5 HP+120\r\n所需材料:30张#v4002003#+1个#v1113164#.搜集完毕就可以找我进行进化了.#l\r\n\r\n"
            text += "#L1##r开始进化#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
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
			}else {*/
			if(cm.haveItem(4002003,30) && cm.haveItem(1113164,1)){
			cm.gainItem(4002003, -30);
			cm.gainItem(1113164, -1);
			cm.gainItem(1113165,5,5,5,5,120,120,5,5,0,0,0,0,0,0);
			//cm.gainMeso(100000);
            cm.sendOk("兑换成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]用30张绿水灵邮票+1个新手赏金猎人戒指在[玩具组队]成功进化出[赏金猎人戒指]，");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


