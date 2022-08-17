var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;

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
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			if (cm.getInventory(1).getItem(1) == null)  {
		cm.sendOk("请将所需增幅的“#b点装戒指#k”放在“#r装备栏 - 第一格#k”。");
		cm.dispose();
			}else{
			text = "我可以帮你把“#b点装戒指#k”附加[#b全属性100#k]，但是需要“#r#v4033838##z4033838# x 5#k”，有没有兴趣？\r\n\r\n\t注：#r#z4033838##k 可通过 #b每日 220 级任务#k 获得此道具#r#e(本脚本只是给想要带名片聊天戒指的人使用)。";
            cm.sendYesNo(text);
			}
        } else if (a == 1) {
			var 属性 = cm.getInventory(1).getItem(1).getStr();
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			if (cm.haveItem(4033838, 5) == false) {
				cm.sendOk("道具不足，无法进行增幅。");
				cm.dispose();
				return; 
			}
			if (parseInt(ItemID / 10000) != 111) {
				cm.sendOk("请保证“#b装备栏 - 第一格#k”的装备为“#r戒指#k”");
				cm.dispose();
				return; 
			}
			if (cm.canHold(ItemID,1) == false) {
				cm.sendOk("请保证有足够的背包空间。");
				cm.dispose();
				return; 
			}
			if (cm.isCash(ItemID) == false) {
				cm.sendOk("只能给“#b点装戒指#k”进行属性附加哦~");
				cm.dispose();
				return; 
			}
			if (属性 > 99) {
				cm.sendOk("这个戒指已经增幅过了，无需再次增幅。");
				cm.dispose();
            } else {
				cm.gainItem(4033838, -5);
				var ii = cm.getItemInfo();
			            var toDrop = cm.getNewEquip(ItemID); // 生成一个Equip类 耳环                 
                                    toDrop.setStr(100); //装备力量
			            toDrop.setDex(100); //装备敏捷
			            toDrop.setInt(100); //装备智力
			            toDrop.setLuk(100); //装备运气
			            toDrop.setMatk(100); //物理攻击
			            toDrop.setWatk(100); //魔法攻击 
			            cm.addFromDrop(toDrop);		
				    cm.gainItem(ItemID,-1);
				    cm.sendOk("增幅成功~");
				    cm.dispose();
			}						

				}
           }
		}