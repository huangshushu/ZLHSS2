var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var sjzs = 0;
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
			text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "            #r欢迎来到月月冒险岛布莱克缤瞳印#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "#L2#"+小烟花+"#b#v4020009##r#z4020009##b合成#v4021010##r#z4021010#（比例10：1）"+小烟花+"#l\r\n\r\n";
			text += "    #L1#"+小烟花+"#b#v1022232#布莱克缤瞳印#r（四维55，攻魔35）"+小烟花+"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1022144#*1，#v4021010#*10，#v4000124#*10，#v4011007#*2\r\n          #v4011008#*2，#v4310143#*50，金币*5000W\r\n";
            cm.sendSimple(text);
        } 
		else if (status == 1) { 
			if (selection == 1) {
				if (cm.getInventory(1).isFull()){
					cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
					cm.dispose();
				} 
				else if(cm.haveItem(1022144,1) && cm.haveItem(4021010,10) && cm.haveItem(4000124,10) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.haveItem(4310143,50)&& cm.getMeso() >= 40000000){
					cm.gainItem(1022144, -1);
					cm.gainItem(4021010, -10);
					cm.gainItem(4000124, -10);
					cm.gainItem(4011007, -2);
					cm.gainItem(4011008, -2);
					cm.gainItem(4310143, -50);
					cm.gainMeso(-50000000);
					cm.gainItem(1022232,55,55,55,55,0,0,35,35,0,0,0,0,0,0);
					cm.sendOk("#b恭喜你，成功制作了#v1022232#，快去亮出的全新眼饰吧！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "布莱克缤瞳印制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了布莱克缤瞳印，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
					cm.dispose();
				}
				else{
					cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
					cm.dispose();
				}
			}
			else if (selection == 2) {
				if (cm.haveItem(4020009) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4020009#，不能进行合成！");
                    status = -1;
                } else {
                    sjzs = 1;
					cm.sendGetNumber("#r请输入需要合成的#v4021010#的数量:\r\n#b当前拥有#v4020009#的数量为：#r#c4020009#\r\n", 1, 1, 2000);
                }
            }
		}
		else if (status == 2) {
			if (sjzs == 1) {
                if (cm.haveItem(4020009, selection*10)) {
                    cm.gainItem(4020009, -selection*10);
					cm.gainItem(4021010, selection);
                    cm.sendOk("#r你已成功使用#v4020009#*"+selection*10+"合成了#v4021010#*"+selection+"！");
                } else {
                    cm.sendNext("#r合成所需的#v4020009#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
		}
    }
}


