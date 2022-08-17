
var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //淘居带
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var IconA = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var status = 0;
var typed=0;
var rmb = 0;
var fbjz = 1112748;//风暴戒指
var yj = java.lang.Math.floor(Math.random() * 1+4);
var ej = java.lang.Math.floor(Math.random() * 3+5);
var sj = java.lang.Math.floor(Math.random() * 5+10);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
         var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
        selStr += "#e#d                  " + xx + "成长系统" + xx + "\r\n";
		selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
        selStr += "#e#d亲爱的 [#r#h ##d] 很高兴认识你哦，我们可以成为好朋友吗\r\n";
        selStr += "#e#r每项新手任务只能完成一次\r\n";
        //selStr += "\r\n#r 特别提醒：埃苏武器必须装备在身上并且破功达到6千万！\r\n#n#k";
            var x = 0;
        selStr += "    #L1#"+xx+"初始的邂逅#l #L2#"+xx+"旅途的见闻#l\r\n\r\n";
        selStr += "    #L3#"+xx+"力量的获取#l #L4#"+xx+"成长的代价#l\r\n\r\n";
        selStr += "          #L5#"+xx+"终点亦是起点#l\r\n";
		//selStr += "#L4#"+xx+"#e#r本次比赛积分排名#b#l   #e#r#L7#"+xx+"每月钓鱼大赛奖励#l\r\n";
		selStr +="\r\n";
        selStr +="\r\n";;
		selStr += "\r\n" + epp + "" + epp + "" + epp + "" + epp + ""
        cm.sendSimple(selStr);
		} else if (status == 1) {
			            if (selection == 1) {
				typed=1;
				 cm.sendYesNo("亲爱的[#r#h ##d]我是月光冒险岛原住民，欢迎你来到我们的大陆，由于五转技能的开放以前陪我玩的小伙伴都不知道去哪里了，你可以陪我玩吗，我会把我珍藏多年的物品送给你哦！\r\n\r\n- #e#d管理提示：#n#b点是接受任务。点否返回上一页.#k");
			            } else if (selection == 2) {
				typed=2;
				cm.sendYesNo("哇,亲爱的[#r#h ##d]看来我可以跟你去更危险的地方了，记得要保护我哦，当然为了我们的安全保证，我们的装备还要继续提升一下#k\r\n\r\n- #e#d管理提示：#n#b点是查看任务。点否返回上一页.#k");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("现在我们的装备起来了，但是你的武器攻击好像稍微有点不够，你去市场9洞旁边的安琪利卡石像处为武器破攻一次#k\r\n\r\n- #e#d管理提示：#n#b点是查看任务。点否返回上一页.#k");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("- #e#r亲爱的[#r#h ##d]装备什么的我们现在都有了，应该学着强化装备了，装备每强化一次都能大量提升本身的能力值哦，要加油哦#k\r\n\r\n- #e#d管理提示：#n#b点是查看任务。点否返回上一页.#k");	
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("- #e#r亲爱的[#r#h ##d]是该说离别的时候了，你有强大的天赋，要有自己的世界，我不想影响你的前途，在离别的时候我希望你能帮我完成最后一个愿望#k\r\n\r\n- #e#d管理提示：#n#b点是查看任务。点否返回上一页.#k");
				} else if (selection == 6) {
				typed=6;
				cm.sendOk("- #e#d新手神器戒指简介：\r\n1.)新手神器初始戒指在船长黑波迪处获得#v1112676#，爆率很高\r\n2.)本戒指乃是服务器核心装备，升级到三阶段之后每天可获取免费门票，不定时开放戒指商店，需要本戒指才能够买哦#k");
						            cm.dispose();
			}
		} else if (status == 2) {
			if(typed==1){
                //字母突破 cm.haveItem(hdid) || cm.getPlayer().getMedalText().indexOf("埃苏莱布斯亡命剑")!=-11
                if (cm.haveItem(4000000, 20) && cm.haveItem(4000016, 20) && cm.getSpace(1) >= 2 && cm.getLevel() >= 80 && cm.getPQLog("初始的邂逅" , 1) == 0) {
                        //cm.removeSlot(-1,-11,1);//这个是把身上的武器删除了
                        cm.gainItem(4000000, -20);//蓝蜗牛壳
                        cm.gainItem(4000016, -20);//红蜗牛壳
                        cm.gainItem(1022149, 1);//风暴项链
                        cm.gainItem(1032148, 1);
                        cm.gainItem(1122200, 1);
                        cm.gainItem(4000016, 1);
                        cm.gainItem(1132161, 1);
                        cm.gainItem(1152099, 1);//风暴肩章
                        cm.gainItem(5062002, 20);//高级神奇魔方
                        cm.gainItem(5062009, 20);//超级神奇模仿
						cm.gainItem(5062500, 20);//大师附加神奇魔方
                        //cm.gainItem(4000016, 1);
					    var ii = cm.getItemInfo();
			            var toDrop = cm.getNewEquip(1142733); // 生成一个Equip类 耳环                 
                        toDrop.setStr(5); //装备力量
			            toDrop.setDex(5); //装备敏捷
			            toDrop.setInt(5); //装备智力
			            toDrop.setLuk(5); //装备运气
			            toDrop.setMatk(5); //物理攻击
			            toDrop.setWatk(5); //魔法攻击 
                        toDrop.setOwner("初始的邂逅");//签名
                        toDrop.setBossDamage(1);//Boss攻击百分比%
                        toDrop.setIgnorePDR(1);//无视怪物防御
                        toDrop.setTotalDamage(1);//总伤害
						cm.addFromDrop(toDrop);
				        cm.setPQLog("初始的邂逅" , 1);
                        cm.dispose();
				  		//cm.setEventCount("十字军戒指进化", 1);
                        cm.sendOk("#b哇，你真厉害，这么快就回来了，看在你这么努力的份上，我把南哈特的勋章偷偷送给你了，不要告诉别人哦#b.");
			            //cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 将戒指升级到第一形态银十字戒指", 5121027);
                        cm.worldSpouseMessage(0x20, "[命运的羁绊] 恭喜玩家 " + cm.getChar().getName() + "完成新手任务初始的邂逅，获得南哈特的友谊勋章。");
                    } else {
			            cm.sendOk("#d以前我在#k#r明珠港#k#d玩的时候老是被恶心的蜗牛欺负，你可以帮我教训它们一下吗？顺便把它们的壳带回来，我可以给你做成特色装备哦,\r\n需要#t4000000#：\t\t " + cm.itemQuantity(4000000) + " / 20 个\r\n需要#t4000016#：\t\t " + cm.itemQuantity(4000016) + " / 20 个\r\n快去快回哦，我等着你回来一起玩呢#k，\r\n#r忘记告诉你了哦你要先让自己变强才能去哦，等级必须要80级！！！#k");
			            cm.dispose();
				}   
			} else if(typed==2){
                if ( cm.getPQLog("初始的邂逅" , 1) >= 0 && cm.getPQLog("船长黑迪波") >= 1 && cm.getPQLog("旅途的见闻" , 1) == 0) {//船长黑迪波
                        //cm.removeSlot(-1,-11,1);//这个是把身上的武器删除了
                        //cm.gainItem(1142733, -1);//风暴项链
                        cm.gainItem(1122254, 1);//毒蛇吊坠
                        cm.gainItem(4033924, 1);//神化耳环蓝图
                        cm.gainItem(1072672, 1);//风暴鞋子
                        cm.gainItem(1082438, 1);//风暴手套
                        cm.gainItem(1112748, 1);//风暴戒指
                        cm.gainItem(5062002, 30);//高级神奇魔方
                        cm.gainItem(5062009, 30);//超级神奇模仿
						cm.gainItem(5062500, 30);//大师附加神奇魔方
                      //  cm.gainItem(1112748, 1);//风暴戒指
					    var ii = cm.getItemInfo();
			            var toDrop = cm.getNewEquip(1142734); // 生成一个Equip类 耳环
                        toDrop.setStr(10); //装备力量
			            toDrop.setDex(10); //装备敏捷
			            toDrop.setInt(10); //装备智力
			            toDrop.setLuk(10); //装备运气
			            toDrop.setMatk(10); //物理攻击
			            toDrop.setWatk(10); //魔法攻击
                        toDrop.setOwner("旅途的见闻");//签名
                        toDrop.setBossDamage(2);//Boss攻击百分比%
                        toDrop.setIgnorePDR(2);//无视怪物防御
                        toDrop.setTotalDamage(2);//总伤害
						cm.addFromDrop(toDrop);
				        cm.setPQLog("旅途的见闻" , 1);
                        cm.dispose();
                        cm.sendOk("#b嘿嘿，村里的人都很感激我们哦。小奥兹还拜托我把这个勋章给你哦，拿好，\r\n恭喜您完成旅途的见闻，获得任务奖励。#b.");
			            //cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 将戒指升级到第二形态金十字戒指", 5121027);
                        cm.worldSpouseMessage(0x20, "[命运的羁绊] 恭喜玩家 " + cm.getChar().getName() + "完成新手任务初始的邂逅，获得奥兹的友谊勋章。");
                } else {
                    cm.sendOk("#b听说章鱼船长黑迪波最近老是欺负村里人，我们一起去打到他吧，村里的人肯定会给我们很多好东西的\r\n#k#r请消灭副本中心船长黑迪波一次 "+cm.getPQLog("船长黑迪波")+" / 1 次\r\n必须要完成初始的邂逅 1 次 #k");
                    cm.dispose();
                }
			} else if(typed==3){
                if ( cm.getPQLog("旅途的见闻" , 1) >= 0 && cm.getPQLog("力量破攻") >= 1 && cm.getSpace(2) >= 5 && cm.getPQLog("力量的获取" , 1) == 0) {
                   
                       // cm.gainItem(1112678, -1);
                        cm.gainItem(1162025, 1);//粉色圣杯
                        cm.gainItem(1132272, 1);//黄金四叶草腰带
                        cm.gainItem(1052467, 1);//风暴连帽长袍
                        cm.gainItem(1102467, 1);//风暴披风
                        cm.gainItem(1003561, 1);//风暴羽毛帽子
                        cm.gainItem(2046855, 2);//剧烈的风暴饰品幸运卷轴
                        cm.gainItem(2046854, 2);//剧烈的风暴饰品敏捷卷轴
                        cm.gainItem(2046853, 2);//剧烈的风暴饰品智力卷轴
                        cm.gainItem(2046852, 2);//剧烈的风暴饰品力量卷轴
                        cm.gainItem(2028175, 5);//宿命正义卷轴箱4001839
                        cm.gainItem(4001839, 100);//星星
                        cm.gainItem(5062002, 50);//高级神奇魔方
                        cm.gainItem(5062009, 50);//超级神奇模仿
						cm.gainItem(5062500, 50);//大师附加神奇魔方
					    var ii = cm.getItemInfo();
			            var toDrop = cm.getNewEquip(1142735); // 生成一个Equip类 耳环                  
                        toDrop.setStr(15); //装备力量
			            toDrop.setDex(15); //装备敏捷
			            toDrop.setInt(15); //装备智力
			            toDrop.setLuk(15); //装备运气
			            toDrop.setMatk(15); //物理攻击
			            toDrop.setWatk(15); //魔法攻击 
                        toDrop.setOwner("力量的获取");//签名
                        toDrop.setBossDamage(3);//Boss攻击百分比%
                        toDrop.setIgnorePDR(3);//无视怪物防御
                        toDrop.setTotalDamage(3);//总伤害
						cm.addFromDrop(toDrop);
				        cm.setPQLog("力量的获取" , 1);
                        cm.dispose();
						//cm.setEventCount("十字军戒指进化", 1);
                        cm.sendOk("#b武器破攻是游戏必不可少的环节哦，只有强大的力量才能在冒险岛的世界里很好的生存下去哦！\r\n恭喜您完成力量的获取任务获得大量奖励#b.");
			            //cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 将戒指升级到最高级形态白金十字戒指", 5121053);
                        cm.worldSpouseMessage(0x20, "[命运的羁绊] 恭喜玩家 " + cm.getChar().getName() + " 完成力量的获取任务，获得大量奖励！");
                } else {
                    cm.sendOk("#b去安琪莉卡石像处为武器破攻一次，只有强大的力量才能打倒小怪兽哦\r\n当前破攻次数"+cm.getPQLog("力量破攻")+" / 1 次\r\n必须完成旅途的见闻1 次\r\n消耗栏背包必须留有五个空位#k");
                    cm.dispose();
                }
			} else if(typed==4){
                if (cm.getEquipBySlot(1).getItemId() == fbjz && cm.getEquipBySlot(1).getEnhance() > 2 && cm.getPQLog("力量的获取" , 1) >= 0 && cm.getPQLog("成长的代价" , 1) == 0) {
					cm.gainItem(2048700, 5);//火焰110级
					cm.gainItem(1122000, 1);//黑龙项链
				    cm.changePotential(1, 1, 40656, false);
				    cm.changePotential(1, 2, 40656, false);
				    cm.changePotential(1, 3, 40656, false);
				    cm.changePotential(1, 4, 40601, false);
				    cm.changePotential(1, 5, 30291, false);
				    cm.changePotential(1, 6, 40650, false);
					cm.gainItem(1032136, 1);//地狱火焰
					cm.gainItem(1112556, 1);//疾风戒指Ⅲ1112537
					cm.gainItem(1112537, 1);//防御戒指Ⅱ1113191
					cm.gainItem(1113191, 1);//白色天堂戒指（淘居）
					cm.gainItem(1022231, 1);//炫蓝脸饰
                        cm.gainItem(5062002, 80);//高级神奇魔方
                        cm.gainItem(5062009, 80);//超级神奇模仿
						cm.gainItem(5062500, 80);//大师附加神奇魔方
					    var ii = cm.getItemInfo();
			            var toDrop = cm.getNewEquip(1142736); // 生成一个Equip类 耳环                  
                        toDrop.setStr(20); //装备力量
			            toDrop.setDex(20); //装备敏捷
			            toDrop.setInt(20); //装备智力
			            toDrop.setLuk(20); //装备运气
			            toDrop.setMatk(20); //物理攻击
			            toDrop.setWatk(20); //魔法攻击 
                        toDrop.setOwner("成长的代价");//签名
                        toDrop.setBossDamage(4);//Boss攻击百分比%
                        toDrop.setIgnorePDR(4);//无视怪物防御
                        toDrop.setTotalDamage(4);//总伤害
						cm.addFromDrop(toDrop);
				        cm.setPQLog("成长的代价" , 1);
                        cm.dispose();
			//cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 领取新手戒指", 5121053);
			cm.worldSpouseMessage(0x20, "『命运的羁绊』 : 恭喜玩家 " + cm.getChar().getName() + " 恭喜玩家完成成长的代价任务，获得大量奖励");
			cm.dispose();
                } else {
			cm.sendOk("#d#e将风暴戒指强化到三星，在来跟我对话哦\r\n强化流程：点开背包用我送你的剧烈风暴饰品卷为装备砸卷，只有0强化次数的装备才能升级星星哦，升级星星请点击背包右下角红色锤子标志，将砸好卷的装备拖入强化方框内即可升级星星！\r\n请将风暴戒指强化到3星放在背包第一格内，即可完成任务#k");
			cm.dispose();
				}
			} else if(typed==5){
                if (cm.getPQLog("进阶血腥女王") >= 1 && cm.getPQLog("成长的代价" , 1) >= 0 && cm.getPQLog("终点亦是起点" , 1) == 0 && cm.haveItem(3991054, 50)) {
			cm.gainItem(1114300,1);
			cm.gainItem(3991054,-50);
			cm.gainItem(2643128,1);
			cm.gainItem(2643129,1);
			//cm.gainItem(1522094,1);
			var ii = cm.getItemInfo();			
			var toDrop = cm.getNewEquip(1142073); // 生成一个Equip类              
                        toDrop.setStr(20); //装备力量
			            toDrop.setDex(20); //装备敏捷
			            toDrop.setInt(20); //装备智力
			            toDrop.setLuk(20); //装备运气
			            toDrop.setMatk(20); //物理攻击
			            toDrop.setWatk(20); //魔法攻击 
			            toDrop.setEnhance(25);//强化等级
			            toDrop.setOwner("终点亦是起点");
                        toDrop.setBossDamage(4);//Boss攻击百分比%
                        toDrop.setIgnorePDR(4);//无视怪物防御
                        toDrop.setTotalDamage(4);//总伤害
				        cm.setPQLog("终点亦是起点" , 1);
            cm.addFromDrop(toDrop);
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 完成所有成长任务，希望未来你能越来越强大", 5121053);
			cm.sendOk("离别总是伤感的，我没有能力让你变的更强，希望你未来能成为伟大的战士，我在修真祝福着你，这些东西送给你，希望在未来的路上对你有用.");
			cm.worldSpouseMessage(0x20, "『命运的羁绊』 : 恭喜 " + cm.getChar().getName() + " 完成所有成长任务，离别总是伤感的，我的朋友，就让我在这里祝福你，希望未来的道路你能越来越强大！");
			cm.dispose();
                } else {
			cm.sendOk("#d#e请为我收集需要#t3991054#：\t\t " + cm.itemQuantity(3991054) + " / 50 个\r\n消灭进阶的血腥女王"+cm.getPQLog("进阶血腥女王")+" / 1 次，\r\n这可能对你来说有点难，但是风险和机遇是并存的。加油吧，我的朋友，我在这里等着你归来#k");
			cm.dispose();
				}
           }
      }
   }
 }