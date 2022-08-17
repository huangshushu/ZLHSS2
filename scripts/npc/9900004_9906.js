/*
 国庆币交易导航
 */

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";

 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想觉醒装备了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		
		
        var selStr = "             #v4000463#这里是货币交易中心#v4000463#"
			selStr += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+""
			//selStr += "\r\n#L0#"+音符+"装备回收"+音符+"#l";
			selStr += "#L1#"+音符+"点卷买币"+音符+"#l";
			selStr += "#L15#"+音符+"赞助买金"+音符+"#l";
			selStr += "#L16#"+音符+"币换点卷"+音符+"#l\r\n\r\n";
			selStr += "#L0#"+音符+"金币买币"+音符+"#l";
			selStr += "#L10#"+音符+"情人币兑换"+音符+"#l";
			//selStr += "#L2#法弗武器#v1432167##l";
			//selStr += "\r\n#L3#法弗防具#v1003797##l";
			//selStr += "#L4#暴君饰品#v1102481##l";
			//selStr += "#L5#点装觉醒#v1102510##l";
			
			//selStr += "\r\n\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"

			//selStr += "#L11#超级混沌#v2049100##l";
			//selStr += "#L12#超级还原#v2270004##l";
			//selStr += "#L13#无限金锤#v5570000##l";
			//selStr += "\r\n#L14#自助强化#v2040709##l";
			
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			cm.dispose();
            cm.openNpc(9900004, 9923);
            return;	
		};
		if(selection == 1){
			cm.dispose();
            cm.openNpc(9900004, 9913);
            return;
		};
		if(selection == 10){
			cm.dispose();
            cm.openNpc(9900004, 9924);
            return;
		};
		if(selection == 15){
			cm.dispose();
            cm.openNpc(9900004, 9920);
            return;
		};
		if(selection == 16){
			cm.dispose();
            cm.openNpc(9900004, 9922);
            return;
		};
		if(selection == 2){
			cm.dispose();
            cm.openNpc(9900004, 9896);
            return;
		};
		if(selection == 3){
			cm.dispose();
            cm.openNpc(9900004, 9897);
            return;
		};
		if(selection == 4){
			cm.dispose();
            cm.openNpc(9900004, 9992);
            return;
		};
		if(selection == 11){
			cm.dispose();
            cm.openNpc(9900004, 9899);
            return;
		};
		if(selection == 12){
			cm.dispose();
            cm.openNpc(9900004, 9900);
            return;
		};
		if(selection == 13){
			cm.dispose();
            cm.openNpc(9900004, 9902);
            return;
		};
		if(selection == 14){
			cm.dispose();
            cm.openNpc(9900004, 9903);
            return;
		};
		if(selection == 5){
			cm.dispose();
            cm.openNpc(9900004, 9901);
            return;
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}