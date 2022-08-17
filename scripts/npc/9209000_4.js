var 蓝蜗牛 = "#fMob/9001003.img/move/0#";
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
                
   cm.sendOk("感谢使用.");
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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d召唤#r" + 蓝蜗牛 + "★飞侠教官★需要以下物品：\r\n2000点券\r\n"
	text += "\r\n#L1##d我要召唤飞侠教官";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(4001230,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if (cm.getPlayer().getCSPoints(1) >= 2000) {
                cm.gainNX(-2000);
               
cm.spawnMonster(9001003, 1);
            cm.sendOk("召唤飞侠教官成功！");
            cm.dispose();
cm.worldMessage(6,"玩家：["+cm.getName()+"]在活动地图[异次元世界]召唤了 凶猛的飞侠教官.大家小心啊！！！");
			}else{
            cm.sendOk("无法够买，点卷不足\r\n");
            cm.dispose();
			}
		}
    }
}




