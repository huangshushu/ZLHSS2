


var item = 1022144
var namelist = ["微笑"]
var itemCount = 1
var log = "补领201910312"
var give = false
//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
	for(var i = 0; i < namelist.length;i++){
				if(cm.getPlayer().getName()==namelist[i]){
					give = true
				}
			}
			//cm.gainItem(1432036,-1)
			if(give == false){
				cm.sendOk("你没有可以补领的道具");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog(log) >= 1){
				cm.sendOk("你已经领取过了");
				cm.dispose();
				return;
			}
			//cm.gainItem(item,itemCount);
			
			//cm.给属性装备(1112675, 0, 0, 25, 25, 25, 25, 0, 0, 25, 25,0, 0, 0, 0, 0, 0, 0);
			cm.给属性装备(1102556, 0, 0, 50, 50, 50, 50, 0, 0, 30, 30,0, 0, 0, 0, 0, 0, 0);
			cm.全服黄色喇叭("[道具补发] : ["+cm.getPlayer().getName()+"]领取补发道具成功")
			cm.getPlayer().setOneTimeLog(log);
			cm.dispose();
			return;
	
	}else if (status == 1) {
			

		
    }
      }
        }


