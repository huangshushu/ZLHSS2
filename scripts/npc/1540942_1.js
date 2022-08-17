/*
SnailMS脚本生成器
*/
importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 技能册 = "#fSkill/112.img/info/icon#";
//火毒
var 火凤球 = "#fSkill/212.img/skill/2121003/icon#";
var 火凤球特效 = "#fSkill/1212.img/skill/12121012/effect/3#";
var 冰破魔兽 = "#fSkill/212.img/skill/2121005/icon#";
var 天降落星 = "#fSkill/212.img/skill/2121007/icon#";
var 天降落星特效1 = "#fSkill/1212.img/skill/12121015/effect/11#";
var 天降落星特效2 = "#fSkill/1212.img/skill/12121015/effect1/4#";
//冰雷
var 冰凤球 = "#fSkill/222.img/skill/2221003/icon#";
var 冰凤球特效 = "#fSkill/1212.img/skill/12121026/effect/2#";
var 火魔兽 = "#fSkill/222.img/skill/2221005/icon#";
var 落霜冰破 = "#fSkill/222.img/skill/2221007/icon#";
var 落霜冰破特效 = "#fSkill/1212.img/skill/12121029/effect/3#";
//主教
var 神圣祈祷 = "#fSkill/231.img/skill/2311003/icon#";
var 神圣祈祷特效 = "#fSkill/1212.img/skill/12121036/effect/6#";
var 圣光 = "#fSkill/231.img/skill/2311004/icon#";
var 圣光特效 = "#fSkill/1212.img/skill/12121037/effect/2#";
var 强化圣龙 = "#fSkill/232.img/skill/2321003/icon#";
var 复活术 = "#fSkill/232.img/skill/2321006/icon#";
var 圣光普照 = "#fSkill/232.img/skill/2321008/icon#";
//黑骑
var 龙咆哮 = "#fSkill/131.img/skill/1311006/icon#";
var 龙咆哮特效 = "#fSkill/1112.img/skill/11121036/effect/0#";
var 枪连击 = "#fSkill/131.img/skill/1311001/icon#";
var 枪连击特效1 = "#fSkill/1112.img/skill/11121007/effect/2#";
var 枪连击特效2 = "#fSkill/1112.img/skill/11121007/effect0/11#";
var 灵魂治愈 = "#fSkill/132.img/skill/1320008/icon#";
var 灵魂祝福 = "#fSkill/132.img/skill/1320009/icon#";
var 恶龙附身 = "#fSkill/132.img/skill/1320006/icon#";
var 黑骑士突进 = "#fSkill/132.img/skill/1321003/icon#";
var 黑骑士稳如泰山 = "#fSkill/132.img/skill/1321002/icon#";
//英雄
var 虎咆哮 = "#fSkill/111.img/skill/1111008/icon#";
var 虎咆哮特效 = "#fSkill/1112.img/skill/11121006/effect/10#";
var 轻舞飞扬 = "#fSkill/112.img/skill/1121008/icon#";
var 轻舞飞扬特效 = "#fSkill/1112.img/skill/11121008/effect/6#";
var 寒冰掌 = "#fSkill/112.img/skill/1120005/icon#";
var 英雄稳如泰山 = "#fSkill/112.img/skill/1121002/icon#";
var 英雄突进 = "#fSkill/112.img/skill/1121006/icon#";
var 葵花宝典 = "#fSkill/112.img/skill/1121010/icon#";
//圣骑
var 连环环破 = "#fSkill/122.img/skill/1221009/icon#";
var 连环环破特效 = "#fSkill/1112.img/skill/11121028/effect/3#";
var 寒冰掌 = "#fSkill/122.img/skill/1220006/icon#";
var 圣骑士稳如泰山 = "#fSkill/122.img/skill/1221002/icon#";
var 圣骑士突进 = "#fSkill/122.img/skill/1221007/icon#";
var 圣域 = "#fSkill/122.img/skill/1221011/icon#";
//var 圣灵之剑 = "#fSkill/122.img/skill/1221003/icon#";
var 圣灵之锤 = "#fSkill/122.img/skill/1221004/icon#";
var 圣灵之锤特效 = "#fSkill/1112.img/skill/11121025/effect/11#";
//神射
var 暴风箭雨 = "#fSkill/312.img/skill/3121004/icon#";
var 暴风箭雨特效 = "#fSkill/1312.img/skill/13121007/effect/2#";
var 火凤凰 = "#fSkill/312.img/skill/3121006/icon#";
var 集中精力 = "#fSkill/312.img/skill/3121008/icon#";
var 射手飞龙冲击波 = "#fSkill/312.img/skill/3121003/icon#";
var 射手飞龙冲击波特效 = "#fSkill/1312.img/skill/13121012/effect/10#";
//箭神
var 一击要害箭 = "#fSkill/322.img/skill/3221007/icon#";
var 一击要害箭特效 = "#fSkill/1312.img/skill/13121029/effect/7#";
var 冰凤凰 = "#fSkill/322.img/skill/3221005/icon#";
var 穿透箭 = "#fSkill/322.img/skill/3221001/icon#";
var 穿透箭特效 = "#fSkill/1312.img/skill/13121025/effect/11#";
var 弩手飞龙冲击波 = "#fSkill/322.img/skill/3221003/icon#";
//侠盗
var 天流血阐杀 = "#fSkill/420.img/skill/4201005/icon#";
var 天流血阐杀特效 = "#fSkill/1412.img/skill/14121014/effect/11#";
var 一出双击 = "#fSkill/422.img/skill/4221007/icon#";
var 一出双击特效 = "#fSkill/1412.img/skill/14121014/effect/11#";
var 侠盗忍者伏击 = "#fSkill/422.img/skill/4221004/icon#";
var 暗杀 = "#fSkill/422.img/skill/4221001/icon#";
var 暗杀特效1 = "#fSkill/1412.img/skill/14121019/effect/9#";
var 暗杀特效2 = "#fSkill/1412.img/skill/14121019/effect/17#";
var 暗杀特效3 = "#fSkill/1412.img/skill/14121019/effect/18#";
var 烟幕弹 = "#fSkill/422.img/skill/4221006/icon#";
//隐士
var 多重飞镖 = "#fSkill/411.img/skill/4111005/icon#";
var 多重飞镖特效 = "#fSkill/1412.img/skill/14121006/effect/2#";
var 隐士忍者伏击 = "#fSkill/412.img/skill/4121004/icon#";
var 忍者冲击 = "#fSkill/412.img/skill/4121008/icon#";
var 忍者冲击特效1 = "#fSkill/1412.img/skill/14121029/effect/2#";
var 忍者冲击特效2 = "#fSkill/1412.img/skill/14121029/effect/9#";
//船长
var 迷惑射击 = "#fSkill/520.img/skill/5201004/icon#";
var 迷惑射击特效 = "#fSkill/1512.img/skill/15121019/effect/3#";
var 武装 = "#fSkill/522.img/skill/5221006/icon#";
var 急速射 = "#fSkill/522.img/skill/5221007/icon#";
var 重量炮击 = "#fSkill/522.img/skill/5221008/icon#";
var 地毯式空袭 = "#fSkill/522.img/skill/5221003/icon#";
var 地毯式空袭特效 = "#fSkill/1512.img/skill/15121025/effect/2#";
var 心灵控制 = "#fSkill/522.img/skill/5221009/icon#";
var 金属风暴 = "#fSkill/522.img/skill/5221004/icon#";
var 金属风暴特效1 = "#fSkill/1512.img/skill/15121026/effect/0#";
var 金属风暴特效2 = "#fSkill/1512.img/skill/15121026/effect/1#";
//队长
var 碎石乱击 = "#fSkill/511.img/skill/5111006/icon#";
var 碎石乱击特效 = "#fSkill/1512.img/skill/15121010/effect/9#";
var 潜龙出渊 = "#fSkill/512.img/skill/5121001/icon#";
var 潜龙出渊特效 = "#fSkill/1512.img/skill/15121012/effect/0#";
var 超级变身 = "#fSkill/512.img/skill/5121003/icon#";
var 索命 = "#fSkill/512.img/skill/5121005/icon#";
var 金手指 = "#fSkill/512.img/skill/5121004/icon#";
var 伺机待发 = "#fSkill/512.img/skill/5121010/icon#";

//战神
var 巨熊咆哮 = "#fSkill/2112.img/skill/21120005/icon#";
var 巨熊咆哮特效 = "#fSkill/1512.img/skill/15121040/effect/13#";
var 冰雪矛 = "#fSkill/2111.img/skill/21111005/icon#";
var 冰雪矛特效 = "#fSkill/1512.img/skill/15121039/effect/9#";
var 全力挥击 = "#fSkill/2111.img/skill/21110002/icon#";
var 战神之舞 = "#fSkill/2112.img/skill/21120002/icon#";
var 三重重击 = "#fSkill/2110.img/skill/21100001/icon#";
var 三重重击特效 = "#fSkill/1512.img/skill/15121042/effect1/4#";


虎咆哮特效 = "#fString/SnailMS.img/新技能展示/虎咆啸#";
轻舞飞扬特效 = "#fString/SnailMS.img/新技能展示/轻舞飞扬#";
连环环破特效 = "#fString/SnailMS.img/新技能展示/连环环破#";
圣灵之锤特效 = "#fString/SnailMS.img/新技能展示/圣灵之锤#";
龙咆哮特效 = "#fString/SnailMS.img/新技能展示/龙咆哮#";
枪连击特效1 = "#fString/SnailMS.img/新技能展示/枪连击#";
火凤球特效 = "#fString/SnailMS.img/新技能展示/火凤球#";
天降落星特效1 = "#fString/SnailMS.img/新技能展示/天降落星#";
冰凤球特效 = "#fString/SnailMS.img/新技能展示/冰凤球#";
落霜冰破特效 = "#fString/SnailMS.img/新技能展示/落霜冰破#";
神圣祈祷特效 = "#fString/SnailMS.img/新技能展示/神圣祈祷#";
圣光特效 = "#fString/SnailMS.img/新技能展示/圣光#";
暴风箭雨特效 = "#fString/SnailMS.img/新技能展示/暴风箭雨#";
射手飞龙冲击波特效 = "#fString/SnailMS.img/新技能展示/飞龙冲击波#";
一击要害箭特效 = "#fString/SnailMS.img/新技能展示/一击要害箭#";
穿透箭特效 = "#fString/SnailMS.img/新技能展示/穿透箭#";
多重飞镖特效 = "#fString/SnailMS.img/新技能展示/多重飞镖#";
忍者冲击特效1 = "#fString/SnailMS.img/新技能展示/忍者冲击#";
天流血阐杀特效 = "#fString/SnailMS.img/新技能展示/天流血阐杀#";
暗杀特效1 = "#fString/SnailMS.img/新技能展示/暗杀#";
碎石乱击特效 = "#fString/SnailMS.img/新技能展示/碎石乱击#";
潜龙出渊特效 = "#fString/SnailMS.img/新技能展示/潜龙出渊#";
迷惑射击特效 = "#fString/SnailMS.img/新技能展示/迷惑射击#";
金属风暴特效1 = "#fString/SnailMS.img/新技能展示/金属风暴#";
三重重击特效 = "#fString/SnailMS.img/新技能展示/三重重击#";
冰雪矛特效 = "#fString/SnailMS.img/新技能展示/冰雪矛#";
落霜冰破特效 = "#fString/SnailMS.img/新技能展示/落霜冰破#";
一出双击特效 = "#fString/SnailMS.img/新技能展示/一出双击#";
巨熊咆哮特效 = "#fString/SnailMS.img/新技能展示/巨熊咆哮#";
地毯式空袭特效 = "#fString/SnailMS.img/新技能展示/地毯式空袭#";

var i = 0;
var 技能列表 = Array(		
		Array("英雄", "虎咆哮", 虎咆哮, 虎咆哮特效), 	
		Array("英雄", "轻舞飞扬", 轻舞飞扬, 轻舞飞扬特效),
		Array("圣骑士", "连环环破", 连环环破, 连环环破特效), 
		Array("圣骑士", "圣灵之锤", 圣灵之锤, 圣灵之锤特效),
		Array("黑骑士", "龙咆哮", 龙咆哮, 龙咆哮特效), 
		Array("黑骑士", "枪连击", 枪连击, 枪连击特效1, 枪连击特效2),
		Array("火毒魔导师", "火凤球", 火凤球, 火凤球特效), 
		Array("火毒魔导师", "天降落星", 天降落星, 天降落星特效1, 天降落星特效2),
		Array("冰雷魔导师", "冰凤球", 冰凤球, 冰凤球特效), 
		Array("冰雷魔导师", "落霜冰破", 落霜冰破, 落霜冰破特效),
		Array("主教", "神圣祈祷", 神圣祈祷, 神圣祈祷特效), 
		Array("主教", "圣光", 圣光, 圣光特效),
		Array("神射手", "暴风箭雨", 暴风箭雨, 暴风箭雨特效), 
		Array("神射手", "飞龙冲击波", 射手飞龙冲击波, 射手飞龙冲击波特效),
		Array("箭神", "一击要害箭", 一击要害箭, 一击要害箭特效), 
		Array("箭神", "穿透箭", 穿透箭, 穿透箭特效),
		Array("隐士", "多重飞镖", 多重飞镖, 多重飞镖特效), 
		Array("隐士", "忍者冲击", 忍者冲击, 忍者冲击特效1, 忍者冲击特效2),
		Array("侠盗", "一出双击", 一出双击, 一出双击特效), 
		Array("侠盗", "暗杀", 暗杀, 暗杀特效1, 暗杀特效2, 暗杀特效3),
		Array("冲锋队长", "碎石乱击", 碎石乱击, 碎石乱击特效, 碎石乱击特效, 碎石乱击特效), 
		Array("冲锋队长", "潜龙出渊", 潜龙出渊, 潜龙出渊特效),
		Array("船长", "地毯式空袭", 地毯式空袭, 地毯式空袭特效), 
		Array("船长", "金属风暴", 金属风暴, 金属风暴特效1, 金属风暴特效2),
		Array("战神", "三重重击", 三重重击, 三重重击特效), 
		Array("战神", "巨熊咆哮", 巨熊咆哮, 巨熊咆哮特效)

		);
		
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	
	

	
	
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var text = "因为艾尔达的差异，我所在的世界#r几乎所有的技能#k都与另一个世界有所不同，这里就分别对各个职业的一些#r主要技能#k进行展示。这只是#r冰山一角#k。\r\n\r\n";
		text += "\t\t#L1#" + 正方箭头 + "#d明白了，废话真多，快点开始吧。#l\r\n\r\n";
		text += "\t\t#L2#" + 正方箭头 + "#d我要返回。#l\r\n\r\n";
		cm.sendNext(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			status++;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.openNpc(1540942);
			cm.safeDispose();
			return;
		}
		
	}

	if(status > 1){
		if(selection == 3){
			cm.openNpc(1540942);
			cm.safeDispose();
			return;
		}else{
			if(i >= 10000){
				cm.openNpc(1540942);
				cm.safeDispose();
				return;
			}else if (i >= 技能列表.length){
				cm.sendNext("演示结束，接下来你该做出选择了！");
				i = 10000;
			}else{
				var text = "\t\t#d职业：#b" + 技能列表[i][0] + "#d\t\t技能名:#b"  + 技能列表[i][1] + 技能列表[i][2] + "" + "\r\n\r\n";
				
				if(false){
					text += "" + 技能列表[i][3] + 技能列表[i][4] + "\r\n\r\n";
				}else{
					text += "" + 技能列表[i][3]  + "\r\n\r\n";
				}
				text += "\t\t\t\t#L1#" + 正方箭头 + "#d下一项。#l\r\n\r\n";
				text += "\t\t\t\t#L3#" + 正方箭头 + "#d我要返回。#l\r\n";
				i++;
				cm.sendSimple(text);
			}
			
		}
	}
}

