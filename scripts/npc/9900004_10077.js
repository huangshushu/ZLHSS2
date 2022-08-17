/* global cm */
//var 爱心 = "#fEffect/CharacterEff/1003276/0/0#";
importPackage(java.lang);
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";



function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			
			var dm = cm.getInventory(1).getItem(1);
			var dmID = 0;
			if(dm == null){
				cm.sendOk("把#v1113219#放在第一格!");
				cm.dispose();
				return;
			}else{
				dmID = dm.getItemId();
			}
			if(dmID != 1113219){
				cm.sendOk("把#v1113219#放在第一格!");
				cm.dispose();
				return;
			}
			
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "\t\t\t\t#d角色名称：#b" + cm.getName() + "#k#n\t\t\r\n  \t#d剩余金币：#b" + cm.getMeso() + "#k#n\t#d剩余储备经验：#b" + cm.读取储备经验() + "\r\n\r\n";
			
			var name = dm.getOwner();
			var level = 0;
			text += "\t\t\t\t";
			if(name == ""){
				text += "#v1113219##d目前等级：#r" + level + "#k\r\n";
			}else if(name.length() >= 4 && name.contains("Lv.")){
				name = name.substring(3, name.length());
				level = Integer.parseInt(name);
				text += "#v1113219##d目前等级：#r" + level + "#k\r\n";
			}else{
				text += "#r戒指状态异常，请联系GM\r\n";
			}
			
			var exp = 10000000;
			var meso = 5000000;
			for(var i = 0; i < level; i++){
				if(i + 1 == 9 || i + 1 == 19 || i + 1 == 29 || i + 1 == 39){
					exp += exp * 0.2;
					meso += meso * 0.2;
				}else if(i + 1 == 49){
					exp += exp * 0.5;
					meso += meso * 0.5;
				}else{
					exp += exp * 0.1;
					meso += meso * 0.1;
				}
			}
			if(level > 29){
				meso /= 2;
			}
			
			var str = 0;
			var dex = 0;
			var _int = 0;
			var luk = 0;
			var wat = 0;
			var mat = 0;
			if(level <= 29){
				str = 1;
				dex = 1;
				_int = 1;
				luk = 1;
				wat = 0;
				mat = 0;
			}else if(level > 29 && level <= 39){
				str = 1;
				dex = 1;
				_int = 1;
				luk = 1;
				wat = 1;
				mat = 1;
			}else if(level > 39 && level <= 48){
				str = 1;
				dex = 1;
				_int = 1;
				luk = 1;
				wat = 2;
				mat = 2;
			}else{
				str = 1;
				dex = 1;
				_int = 1;
				luk = 1;
				wat = 3;
				mat = 3;
			}
			meso /= 2;//金币减半
			if(level >= 50){
				text += "#d\t\t恭喜你已将戒指升至满级，可以进阶了#k\r\n";
			}else{
				text += "#d  [需消耗] \t储备经验：#r" + Long.valueOf(exp) + "#d\t金币：#r" + Long.valueOf(meso) + "#k\r\n";
				text += "#d [获得] 力量+#b" + str + " #k敏捷+#b" + dex + " #k智力+#b" + _int + " #k运气+#b" + luk + " #k攻击力+#b" + wat + " #k魔法力+#b" + mat;
			}
			
			text += "\r\n\t\t#b#L1#[强化]#l\t\t\t#L2#[返回]#l\r\n";
			

			text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n";
		    cm.sendSimple(text);
        }
		
		if(status == 1){
			if (selection == 1) {//开启强化
				cm.dispose();
				cm.openNpc(9900004, 10078);
			} else if (selection == 2) {//返回上级
				cm.dispose();
				cm.openNpc(9900004, 10075);
			}
		}
		return;
    }
}



 