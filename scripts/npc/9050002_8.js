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
	text += "#d#k完成奖励: #r#v4310174#X2 + #v4000186#X3  + #v4002003#X5 + #v4001028#X5 + #v2022336#X3(五彩 必成) + #v2140002#5千万金币 +    #v4310196#X3 +   #v4000463#X5 + #v3994192#X1（可换取任意飞天猪的蛋） \r\n#k每日任务完成情况:\r\n\r\n废弃任务: #r" + cm.getPlayer().getBossLog('MRFQ') + "#k/2\r\n玩具任务:#r " + cm.getPlayer().getBossLog('MRWJ') + "#k/2\r\n天空任务:#r " + cm.getPlayer().getBossLog('MRTK') + "#k/2\r\n"
text += "#e#r(领取奖励前请清理背包,确保有足够空间!)";//	
text += "\r\n#L1##d我已经完成所有副本,领取奖励!";//
        cm.sendSimple(text);
        } else if (selection == 1) {
                if(cm.getBossLog('MRFB') > 0)
{
cm.sendOk("每个账号每天只能领取1次奖励");
cm.dispose();
}

else if(cm.getPlayer().getBossLog('MRFQ') > 1 && cm.getPlayer().getBossLog('MRWJ') > 1 && cm.getPlayer().getBossLog('MRTK') > 1){
   if(cm.canHold(4002003, 400) && cm.canHold(2022336, 200))
   {
                     cm.gainItem(4310174,3);
	             cm.gainItem(4000186,3);
                     cm.gainItem(4002003,5);
		     cm.gainItem(4001028,5);
		     cm.gainItem(2022336,3);
                     cm.gainItem(4310196,3); 
                     cm.gainItem(4000463,5);
                     cm.gainItem(3994192,1);
                     cm.gainMeso(50000000);

cm.setBossLog('MRFB');
            cm.sendOk("成功领取奖励！");
            cm.dispose();           
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]完成了每日副本，领取了奖励！");
   }
   else
   {
	     cm.sendOk("请清理背包,确保有足够空间!\r\n");
  cm.dispose(); 
	   
   }
			}


else{
            cm.sendOk("你还没有完成所有每日副本\r\n");
            cm.dispose();
			}
		}
    }
}




