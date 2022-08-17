
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
            text += "#e#d#b如果你想制作#v1122119#的话需要#v4000002#200个#v4000003#200个\r\n\r\n"//3
            text += "#L1##r制作西瓜项链【全属性15】#l\r\n\r\n"//3
            cm.sendSimple(text);
         } else if (selection == 1) {
                      if(!cm.canHold(1012083,1)){
			cm.sendOk("请清理你的背包，至少空出1个位置！");
            cm.dispose();
        } else if(cm.haveItem(4000002,200)&&cm.haveItem(4000003,200) ){
				cm.gainItem(4000002, -200);
				cm.gainItem(4000003, -200);
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1122119);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1122119)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(15);//力量*
				toDrop.setDex(15);//敏捷
				toDrop.setInt(15);//运气
				toDrop.setLuk(15);//智力
				toDrop.setWatk(5);//物理攻击
				toDrop.setMatk(5);//魔法攻击
				toDrop.setWdef(50);//物理防御
				toDrop.setMdef(50);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(0);//生命
				toDrop.setMp(0);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
				cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功制作了[西瓜项链] 获取途径废弃组队任务！");
				cm.dispose();
			}else{
            cm.sendOk("您的材料不足！需要\r\n#v4000002#x200#v4000003#x200");
            cm.dispose();
			}
        }
    }
}
