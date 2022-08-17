var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
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
			text += "            "+爱心+" #e每日任务列表【未更新完善】#n "+爱心+"\r\n"
	
				
		
			if(cm.getBossLog('PlayQuest40') == 0){
					if (cm.haveItem(4001010,1)){
					text += "  #L4#"+爱心+"#e每日殴打蓝蘑菇王    (金币100W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L4#"+爱心+"#e每日殴打蓝蘑菇王    (金币100W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest40') == 1){
					text += "  #L4#"+爱心+"#e每日殴打蓝蘑菇王    (金币100W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest41') == 0){
					if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
					text += "  #L6#"+爱心+"#e每日殴打神殿三Boss  (金币400W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L6#"+爱心+"#e每日殴打神殿三Boss  (金币400W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest41') == 1){
					text += "  #L6#"+爱心+"#e每日殴打神殿三Boss  (金币300W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest42') == 0){
					if (cm.haveItem(4000235,1)){
					text += "  #L7#"+爱心+"#e每日殴打喷火龙    (随机金币点券)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L7#"+爱心+"#e每日殴打喷火龙    (随机金币点券)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest42') == 1){
					text += "  #L7#"+爱心+"#e每日殴打喷火龙    (随机金币点券)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest43') == 0){
					if (cm.haveItem(4000243,1)){
					text += "  #L8#"+爱心+"#e每日殴打天鹰    (随机金币点券)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L8#"+爱心+"#e每日殴打天鹰    (随机金币点券)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest43') == 1){
					text += "  #L8#"+爱心+"#e每日殴打天鹰    (随机金币点券)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest44') == 0){
					if (cm.haveItem(4000175,1)){
					text += "  #L9#"+爱心+"#e每日殴打鱼王        (金币300W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L9#"+爱心+"#e每日殴打鱼王        (金币300W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest44') == 1){
					text += "  #L9#"+爱心+"#e每日殴打鱼王        (金币300W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest45') == 0){
					if (cm.haveItem(4000094,3)){
					text += "  #L10#"+爱心+"#e每日殴打老板        (金币300W)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L10#"+爱心+"#e每日殴打老板        (金币300W)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest45') == 1){
					text += "  #L10#"+爱心+"#e每日殴打老板        (金币300W)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest46') == 0){
					if (cm.haveItem(4001111,1)){
					text += "  #L11#"+爱心+"#e每日殴打女老板   (混沌卷轴 x3)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L11#"+爱心+"#e每日殴打女老板   (混沌卷轴 x3)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest46') == 1){
					text += "  #L11#"+爱心+"#e每日殴打女老板   (混沌卷轴 x3)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			if(cm.getBossLog('PlayQuest47') == 0){
					if (cm.haveItem(4001083,1)){
					text += "  #L12#"+爱心+"#e每日殴打扎昆     (祝福卷轴 x3)(#r可完成#k)#n"+感叹号+"#l\r\n"//3
					}else{
					text += "  #L12#"+爱心+"#e每日殴打扎昆     (祝福卷轴 x3)(#b可开始#k)#n"+爱心+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('PlayQuest47') == 1){
					text += "  #L12#"+爱心+"#e每日殴打扎昆     (祝福卷轴 x3)(#r"+完成+"#k)#n"+爱心+"#l\r\n"//3

			}
			
            cm.sendSimple(text);
        } else if (selection == 1) {
		if (cm.getLevel()>= 150){
              cm.warp(220000006);
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，需要达到150级才能做此任务");
			   cm.dispose();
		   }
        } else if (selection == 2) {
		 if (cm.getBossLog('每日蘑菇王') >= 1) {
            cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000040,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000040, -1);
				cm.gainMeso(+500000); //加减金币	
				//cm.gainMeso(+2049100); //加减金币	
				cm.喇叭(1,"玩家："+cm.getName()+" 完成每日殴打蘑菇王！奖励金币50W！");
                cm.sendOk("兑换成功！");
            cm.setBossLog('每日蘑菇王');
                cm.dispose();
		}else{
                cm.sendOk("60级以后才可以做本次任务！");
                cm.dispose();
		 }
            }else{
                cm.sendOk("收集#v4000040# 1个交给我！");
                cm.dispose();
            }
		 }
        } else if (selection == 3) {
		 if (cm.getBossLog('每日僵尸蘑菇王') >= 1) {
            cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000176,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000176, -1);
				cm.gainMeso(+500000); //加减金币
				//cm.gainMeso(+2049100); //加减金币	
				cm.喇叭(1,"玩家："+cm.getName()+" 完成每日殴打僵尸蘑菇王！奖励金币50W！");
                cm.sendOk("兑换成功！");
            cm.setBossLog('每日僵尸蘑菇王');
                cm.dispose();
		}else{
                cm.sendOk("60级以后才可以做本次任务！");
                cm.dispose();
		 }
            }else{
                cm.sendOk("收集#v4000176# 1个交给我！");
                cm.dispose();
            }
		 }
        } else if (selection == 4) {
					if (cm.getBossLog('PlayQuest40') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
        }else{
			if (cm.haveItem(4001039,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4001039, -1);
				cm.gainMeso(+1000000); //加减金币
		                                                                        cm.setBossLog('PlayQuest40');
				//cm.gainMeso(+2049100); //加减金币	
                cm.sendOk("兑换成功！");
                cm.dispose();
		}else{
                cm.sendOk("60级以后才可以做本次任务！");
                cm.dispose();
		 }
            }else{
                cm.sendOk("收集#v4001010# 1个交给我！");
                cm.dispose();
            }
		 }

        } else if (selection == 5) {
		if (cm.getLevel()>= 150){
              cm.warp(100000202);
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，需要达到150级才能做此任务");
			   cm.dispose();
		   }

        } else if (selection == 6) {
					if (cm.getBossLog('PlayQuest41') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000460, -1);
											cm.gainItem(4000461, -1);
											cm.gainItem(4000462, -1);
											cm.gainMeso(+4000000); //加减金币
										//cm.gainMeso(+2049100); //加减金币	
											cm.sendOk("兑换成功！");
		                                                                        cm.setBossLog('PlayQuest41');
											cm.dispose();
									}else{
											cm.sendOk("120级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000460##v4000461##v4000462# 各1个交给我！");
								cm.dispose();
							}
					}
        } else if (selection == 7) {
					if (cm.getBossLog('PlayQuest42') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000235,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000235, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //随机数
											if (rand==0){
											cm.gainMeso(+2000000); //加减金币
											rand="金币200W！";
												}else{
											cm.gainNX(1000);	//加减点券
											rand="点券1000点！"
												var bf="";
											}
										//cm.gainMeso(+2049100); //加减金币	
											cm.sendOk("兑换成功！");
		                                                                        cm.setBossLog('PlayQuest42');
											cm.dispose();
									}else{
											cm.sendOk("120级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000235# 1个交给我！");
								cm.dispose();
							}
					}
        } else if (selection == 8) {
					if (cm.getBossLog('PlayQuest43') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000243,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000243, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //随机数
											if (rand==0){
											cm.gainMeso(+2000000); //加减金币
											rand="金币200W！";
												}else{
											cm.gainNX(1000);	//加减点券
											rand="点券1000点！"
												var bf="";
											}
										//cm.gainMeso(+2049100); //加减金币	
											cm.sendOk("兑换成功！");
											cm.setBossLog('PlayQuest43');
											cm.dispose();
									}else{
											cm.sendOk("120级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000243# 1个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 9) {

					if (cm.getBossLog('PlayQuest44') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000175,1)){
									if (cm.getLevel() > 129){
											cm.gainItem(4000175, -1);
											cm.gainMeso(+3000000); //加减金币
										//cm.gainMeso(+2049100); //加减金币	
											cm.sendOk("兑换成功！");
		                                                                        cm.setBossLog('PlayQuest44');
											cm.dispose();
									}else{
											cm.sendOk("130级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000175# 1个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 10) {

					if (cm.getBossLog('PlayQuest45') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000094,3)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000094, -3);
										cm.gainMeso(+3000000); //加减金币
										//cm.gainMeso(+2049100); //加减金币	
											cm.sendOk("兑换成功！");
		                                                                        cm.setBossLog('PlayQuest45');
											cm.dispose();
									}else{
											cm.sendOk("150级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000094# 3个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 11) {

					if (cm.getBossLog('PlayQuest46') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4000138,1)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000138, -1);
											cm.gainItem(2049100, 3);
											cm.sendOk("兑换成功！");
		                                                                        cm.setBossLog('PlayQuest46');
											cm.dispose();
									}else{
											cm.sendOk("150级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4000138# 1个交给我！");
								cm.dispose();
							}
					}
		} else if (selection == 12) {
					if (cm.getBossLog('PlayQuest47') >= 1) {
						cm.sendOk("每天只能兑换1次哦，请明天再来找我吧！");
						cm.dispose();
					}else{
							if (cm.haveItem(4001083,1)){
									if (cm.getLevel() > 159){
											cm.gainItem(4001083, -1);
											cm.gainItem(2340000, 3);
											cm.sendOk("兑换成功！");
		                                                                        cm.setBossLog('PlayQuest47');
											cm.dispose();
									}else{
											cm.sendOk("160级以后才可以做本次任务！");
											cm.dispose();
									}
							}else{
								cm.sendOk("收集#v4001083# 1个交给我！");
								cm.dispose();
							}
					}
		} 
    }
}






