/**

 * time:2020-07-26
 * explain: MS定制，消耗指定道具升级或购买指定技能。
 * version：1.0
 * core:cm
 */


//【配置区】-----------------------------------------------------
var cf_itemId = 2290083;//消耗指定道具学习技能


var cf_skills = [
	//技能ID，技能描述，技能购买消耗，技能初始等级，技能最高等级，限定VIP等级，是否允许升级
	[14001002,"提升1级进阶忍者出击。",1,1,5,0,true],
	[1121002,"凭借着强韧的精神，受到敌人的攻击仍不会后退。。",1,30,30,5,false],
];

//-----------------------------------------------------
var status = -1;//模组状态
var chr =null;
var say = "";
var thisSel = null;
var thisLevel=0;
var count = 0;

function start(){
    chr = cm.getPlayer();
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
		say = _getTitle("修仙终极技能");
		say += "#d\t侠盗，如果你有#v"+cf_itemId+"#的话，属性修仙3次可以学习\r\n\r\n";
		say += "\t\t\t\t #L1##b学习技能#l\r\n";
		say += "\t\t\t\t #L2##b升级技能#l\r\n";
        cm.sendSimple(say);
    }else if(status == 1){
		
		if(selection == 1){
			status = 100;
			say = _getTitle("修仙终极技能");
			say += "#d目前支持学习的技能有：";
			for(var i = 0;i<cf_skills.length;i++){
				if(cf_skills[i][5] == 0 || (cf_skills[i][5]>0 && cm.getVip() >cf_skills[i][5])){
					say += "\r\n\r\n#L" + i + "##s" + cf_skills[i][0] + "# 最高等级: " + cf_skills[i][4] + "  需要#i" + cf_itemId + ":# * #r#e" + cf_skills[i][2] + "#n#k\r\n说明:" + cf_skills[i][1] + "#l";
				}
			}
			cm.sendSimple(say);
		}else if(selection == 2){
			status = 200;
			say = _getTitle("修仙终极技能");
			say += "#d目前支持升级的技能有：";
			for(var i = 0;i<cf_skills.length;i++){
				
				if(cf_skills[i][6]){
					if(cf_skills[i][5] == 0 || (cf_skills[i][5]>0 && cm.getVip() >cf_skills[i][5])){
						say += "\r\n\r\n#L" + i + "##s" + cf_skills[i][0] + "# 最高等级: " + cf_skills[i][4] + "  需要对应等级的数量#i" + cf_itemId + ":#  #r#e#n#k\r\n\r\n说明:" + cf_skills[i][1] + "#l";
					}
				}
			}
			cm.sendSimple(say);
		}else{
			cm.dispose();
		}
    }else if(status == 101){
		thisSel = cf_skills[selection];
		if(thisSel == null){
			cm.sendOk("#r#e错误的选择，请重新选择！");
			cm.dispose();
			return;
		}
		if(chr.getBossLog("study:"+thisSel[0],1) >0){
			cm.sendOk("#b#e你已经学习过该技能了，不需要重复学习！");
			cm.dispose();
			return;
		}
		if(cm.getJob() <= 421) {
			cm.sendOk("#b#e你不是侠盗，不需要学习！");
			cm.dispose();
			return;
		}
		if(cm.getJob() >= 423) {
			cm.sendOk("#b#e你不是侠盗，不需要学习！");
			cm.dispose();
			return;
		}
		if(!cm.haveItem(5064300,3)) {
			cm.sendOk("#b#e你没有飞升3次，无法学习！");
			cm.dispose();
			return;
		}
		
		if(cm.haveItem(cf_itemId, thisSel[2])){
			cm.sendYesNo("系统将把#s" + thisSel[0] + "#放在 A 键");
		} else {
			cm.sendOk("所需#i" + cf_itemId + ":#不足！");
			cm.dispose();
		}	
	}else if(status == 102){
	
		cm.gainItem(cf_itemId,-thisSel[2]);
		chr.setBossLog("study:"+thisSel[0],1,1);
		cm.teachSkill(thisSel[0],thisSel[3],thisSel[4]);
		chr.changeKeybinding(30,1,thisSel[0]);
		cm.sendOk("学习成功！\r\n请换一个频道就有技能了哦");
		cm.dispose();
	}else if(status == 201){
		thisSel = cf_skills[selection];
		if(thisSel == null){
			cm.sendOk("#r#e错误的选择，请重新选择！");
			cm.dispose();
			return;
		}
		thisLevel = chr.getBossLog("study:"+thisSel[0],2);
		if(thisLevel  == 0){
			cm.sendOk("#r#e你尚未学习该技能，请先学习!");
			cm.dispose();
			return;
		}
		
		if(thisLevel  >= 5){
			cm.sendOk("#e该技能已经被你升到最高级了，不可以继续升级了。");
			cm.dispose();
			return;
		}
		count = (thisSel[2] * thisLevel)+1;
		if(cm.haveItem(cf_itemId, count)){
			cm.sendYesNo("系统将把#s" + thisSel[0] + "#放在 A 键\r\n本次升级将消耗#v"+cf_itemId+"#x"+count);
		} else {
			say = "#r所需#i" + cf_itemId + ":#不足！";
			say += "#d当前技能等级：" +thisLevel+ "\r\n";
			say += "继续升级需要消耗#v"+cf_itemId+"#x"+count+"个\r\n";
			
			cm.sendOk(say);
			cm.dispose();
		}	
	}else if(status == 202){
		cm.gainItem(cf_itemId,-count);
		chr.setBossLog("study:"+thisSel[0],1,1);
		cm.teachSkill(thisSel[0], thisLevel+1,thisSel[4]);
		chr.changeKeybinding(30,1,thisSel[0]);
		cm.sendOk("升级成功，请更换一个频道即可看出效果。");
		cm.dispose();
	}else{
        cm.dispose();
    }
}

var ul_cloud = "#fItem/Etc/0403/04031309/info/iconRaw#";  //
function _getTitle(t){
	return " "+ul_cloud+ul_cloud+ul_cloud+"#r#e『"+ t+"』#k#n"+ul_cloud+ul_cloud+ul_cloud+"\r\n\r\n";
}