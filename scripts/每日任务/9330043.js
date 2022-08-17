var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 任务简介 = "#fUI/UIWindow/Quest/summary#";
var 任务奖励 = "#fUI/UIWindow/Quest/reward#";
var 奖励 = "#fUI/CashShop.img/CSDiscount/bonus#";
var 放弃 = "#fUI/UIWindow/Quest/BtGiveup/mouseOver/0#";
var 接受 = "#fUI/UIWindow/Quest/BtOK/mouseOver/0#";
var 时钟 = "#fUI/UIWindow/Quest/TimeQuest/AlarmClock/default/3/3#";
var 金币 = "#fUI/UIWindow.img/QuestIcon/7/0#";
var 获取道具 = "#fUI/UIWindow.img/QuestIcon/4/0#";
var 几率获得 = "#fUI/UIWindow/Quest/prob#";

var 无条件获得 = "#fUI/UIWindow/Quest/basic#";
var 任务描述 = "#fUI/UIWindow/Quest/summary#"


var date = new Date();
var day = date.getDay();

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.playerMessage(1,"欢迎下次光临");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.playerMessage(1,"欢迎下次光临");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
if (cm.getPlayer().get怪物ID() == 0 && cm.getPlayer().get怪物数量() == 0) {
 
var 状态 = "#r未接取任务#k";
 
var 状态1 = "#L0##b我要接取任务#l";
 

} else if (cm.getPlayer().get怪物ID() > 0 && cm.getPlayer().get怪物数量() == 0) {
    
var 状态 = "#r任务已完成#k";
 
var 状态1 = "#L2#" + 完成 + "#l";
 

}else{
  
var 状态 = "快去消灭#r" + cm.getPlayer().get怪物数量() + "只#o" + cm.getPlayer().get怪物ID() + "##k";

var 状态1 = "#L1#" + 正在进行中 + "#l";
 
}

cm.sendSimple ("#r" + 任务简介 + "#k\r\n欢迎参加每小时定时消灭野外怪物任务。\r\n任务状态："+状态+"\r\n "+状态1+"\r\n #L3##b我要重置任务\r\n\r\n\r\n#l     " + 奖励 + "\r\n    " + 金币 + " 50000000\r\n\r\n");      

	} else if (status == 1) {

        if (selection == 0) {
if (cm.getLevel() < 30 ) {                   
cm.playerMessage(1,"本活动需要30级以上参加");

cm.dispose();
    
 } else {
                    
cm.openNpc(9900004, 15);                  
}
    

} else if (selection == 1) {
cm.sendOk("" + 任务描述 + "\r\n需要消灭的怪物为#b#o" + cm.getPlayer().get怪物ID() + "##k数量为#r" + cm.getPlayer().get怪物数量() + "#k只。");
cm.dispose();
      
} else if (selection == 2) {             
 cm.openNpc(9900004, 16); 

} else if (selection == 3) {               
if (cm.getPlayer().get怪物ID() > 0 && cm.getPlayer().get怪物数量() > 0) {
                    
 if(cm.getPlayer().getBeans()>= 100){          
cm.playerMessage(1,"放弃成功消耗豆豆100");

cm.gainBeans(-100);                     
cm.getPlayer().取消怪物ID();                    
cm.getPlayer().取消怪物数量();                        
cm.dispose();
                    
}else{
                         
cm.playerMessage(1,"豆豆不足无法放弃");
                         
cm.dispose();
                    
}
               
}else{
                     
cm.playerMessage(1,"你没有接受任务");
                   
cm.dispose();
               
}
    

               
         }					
       }
     }
   }

