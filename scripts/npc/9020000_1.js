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
            text += "#e#d您好！您在月妙副本获得的#v1112793#，可以通过废弃副本得到的#v4002001#进一步的提升哦！\r\n\r\n#v1112907#全属性+2 攻击/魔法+2 HP+50\r\n所需材料:30张#v4002001#+1个#v1112793#.搜集完毕就可以找我进行进化了.#l\r\n\r\n"
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
			if(cm.haveItem(4002001,30) && cm.haveItem(1112793,1)){
			cm.gainItem(4002001, -30);
			cm.gainItem(1112793, -1);
			cm.gainItem(1112907,2,2,2,2,50,50,2,2,0,0,0,0,0,0);
			//cm.gainMeso(100000);
            cm.sendOk("兑换成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]用50张蓝蜗牛邮票+1个快乐戒指在[废弃组队]成功进化出[小鱼戒指]，多多带新手，攒人品哦~！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


