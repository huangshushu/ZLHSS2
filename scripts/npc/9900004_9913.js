

var fbmc = "[点券买币]-(买币系统)";//副本名称
var item = 4000463;
var NXcost = 1000;
var list=[1,10,50,100,200]
var cost1=0
var cost2=0

var haveitem = false
//////////////////////////////////////////////////////////
function start() {
status = 0;
action(1, 0, 0);
}

function action(mode, type, selection) {
	 if (mode == 1) {
        status++;
    } else {
        if (status >= 3) {
            cm.sendOk(" 等你想觉醒装备了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
			

			textz = "#k\t\t\t #r#v4000463#" + fbmc + "#v4000463##k#l\r\n\r\n";
			textz += "#b   请选择需要购买国庆币的数量#k#n\r\n"
			for(var i=0;i<list.length;i++){
				cost1=list[i]*NXcost
				textz += "\r\n#L"+i+"#兑换#v"+item+"#x"+list[i]+"，需要#b"+cost1+"#k#n点券#l\r\n"
			}

			 
			cm.sendSimple (textz);   
		}else if (status == 2) {
			if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
			if(selection <= 10){
				cost2=list[selection]*NXcost
				if (cm.getPlayer().getNX() >= cost2){
					cm.gainItem(item,list[selection])
					cm.gainNX(-cost2)
					cm.全服黄色喇叭("[点券买币] : 玩家 "+cm.getPlayer().getName()+" 在[咕币交易]处使用"+cost2+"点券购买了"+list[selection]+"个国庆纪念币")
					cm.sendOk("购买成功")
					cm.dispose();
					return
				}else{
					cm.sendOk("点券不足")
					cm.dispose();
					return
				}
			}
			
		}
	}
        


