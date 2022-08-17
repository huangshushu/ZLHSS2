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
            
			
			var name = dm.getOwner();
			var level = 0;
			if(name == ""){
				level = 0;
			}else if(name.length() >= 4 && name.contains("Lv.")){
				name = name.substring(3, name.length());
				level = Integer.parseInt(name);
			}else{
				cm.dispose();
				cm.sendOk("#r戒指状态异常，请联系GM\r\n");
				return;
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
				text += "#d\t\t你的戒指升至满级，无法再继续强化了#k\r\n";
				cm.sendOk(text);
				cm.dispose();
				return;
			}
			if(cm.读取储备经验() >= exp && cm.getMeso() >= meso){
				var item = dm.copy();
				level += 1;
				item.setStr(item.getStr() + str);
				item.setInt(item.getInt() + _int);
				item.setLuk(item.getLuk() + luk);
				item.setDex(item.getDex() + dex);
				item.setWatk(item.getWatk() + wat);
				item.setMatk(item.getMatk() + mat);
				item.setOwner("Lv." + level);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.getPlayer().扣除经验储备(exp);
				cm.getPlayer().gainMeso(-meso, true);
				text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
			   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
				text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
				text += "\t\t\t\t#d角色名称：#b" + cm.getName() + "#k#n\t\t\r\n  \t#d剩余金币：#b" + cm.getMeso() + "#k#n\t#d剩余储备经验：#b" + cm.读取储备经验() + "\r\n\r\n";
				text += "\t\t\t\t\t#r强化成功！#k\r\n";
				// cm.全服公告("玩家：["+cm.getName()+"]成功强化成长戒指为 Lv." + level + " ！恭喜恭喜！");
				//cm.全服道具公告("【成长戒指】", "玩家 ["+cm.getName()+"]成功强化成长戒指为 Lv." + level + " ！恭喜恭喜！", item);
			}else{
				text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
			   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
				text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
				text += "\t\t\t\t#d角色名称：#b" + cm.getName() + "#k#n\t\t\r\n  \t#d剩余金币：#b" + cm.getMeso() + "#k#n\t#d剩余储备经验：#b" + cm.读取储备经验() + "\r\n\r\n";
				// cm.getPlayer().dropMessage(6,"exp" + exp + "meso" + meso);
				text += "\t\t#r当前装备无法参与强化。或者材料不足！#k\r\n";
			}
			
			name = dm.getOwner();
			text += "\t\t\t\t";
			text += "#v1113219##d目前等级：#r" + level + "#k\r\n";
			
			
			text += "\r\n\t\t#b\t#L1#[返回]#l#k\r\n";
			

text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		    cm.sendSimple(text);
        }
		
		if(status == 1){
			if (selection == 1) {//返回上级
				cm.dispose();
				cm.openNpc(9900004, 10075);
			}
		}

    }
}



 