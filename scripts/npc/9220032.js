function start () {
    
            if (cm.getEventCount("毒雾森林") < 5) {
                cm.setEventCount("毒雾森林");
		cm.getPlayer().endPartyQuest(1206);
		cm.gainNX(2000);
		//cm.gainItem(2049600,1);//还原
		//cm.gainItem(2049323,1);//无损
		//cm.gainItem(2049116,1);//强混
		//cm.gainItem(4031997,10);//
		//cm.gainItem(2614017,1);//百万
		//cm.gainPlayerPoints(15);
		//cm.worldSpouseMessage(0x2A, "[毒物森林] : \t\t恭喜 " + cm.getChar().getName() + " 完成挑战获得了强混，无损，还原，蘑菇金币，破功和15点积分！！！");
                       
                
            } else {
                cm.worldSpouseMessage(0x2A, "[毒物森林] : \t\t恭喜 " + cm.getChar().getName() + " 通过了毒雾森林，通关超过五次没有获得任何奖励");
				//cm.worldSpouseMessage(0x2A, "[毒物森林] : \t\t恭喜 " + cm.getChar().getName() + " 使用外挂通过了毒雾森林，并没有获得任何奖励");
				//cm.worldSpouseMessage(0x2A, "[毒物森林] : \t\t恭喜 " + cm.getChar().getName() + " 使用外挂通过了毒雾森林，并没有获得任何奖励");
			
            }
			cm.warp(910800000, 0);
        }
        

