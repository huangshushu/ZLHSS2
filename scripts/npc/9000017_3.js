
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var MaplePacketCreator = Java.type('tools.MaplePacketCreator');

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d#b如果你想制作[最强项链]的话需要\r\n#v4001226#x5#v4001227#x5#v4001228#x5#v4001229#x5#v4001230#x5 \r\n #v4001126#x9999 金币5000W\r\n搜集好道具我就可以为您制作了.#l\r\n物品来源请点拍卖特色副本，挑战绯红五大BOSS\r\n\r\n"//3
            text += "#L1##r制作最强项链【全属性120 HP MP 2000】#l\r\n\r\n"//3
            cm.sendSimple(text);
         } else if (selection == 1) {
                      if(!cm.canHold(1012083,1)){
			cm.sendOk("请清理你的背包，至少空出1个位置！");
            cm.dispose();
        } else if(cm.haveItem(4001226,5)&& cm.haveItem(4001227,5)&& cm.haveItem(4001228,5)&& cm.haveItem(4001229,5)&& cm.haveItem(4001230,5)&& cm.haveItem(4001126,9999)&&  cm.getMeso()>=50000000 ){
				cm.gainMeso(-50000000);
                                cm.gainItem(4001226,-5);
                                cm.gainItem(4001227,-5);
                                cm.gainItem(4001228,-5);
                                cm.gainItem(4001229,-5);
                                cm.gainItem(4001230,-5);
				cm.gainItem(4001126, -9999);
			var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1122076);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1122076)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(120);//力量*
				toDrop.setDex(120);//敏捷
				toDrop.setInt(120);//运气
				toDrop.setLuk(120);//智力
				toDrop.setWatk(50);//物理攻击
				toDrop.setMatk(50);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(2000);//生命
				toDrop.setMp(2000);//魔法
				toDrop.setOwner("");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『神装制作』" + " : " + "[" + cm.getChar().getName() + "]制作了本服最强项链，让我们一起恭喜他/她！"));
           cm.dispose();
			}else{
            cm.sendOk("您的材料不足！请检查背包！");
            cm.dispose();
			}
		}
    }
}


