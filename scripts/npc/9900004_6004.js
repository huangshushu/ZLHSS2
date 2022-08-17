


//【配置区】-----------------------------------------------------

var taskItems = [
	//任务周期,物品ID，物品数量
	[1,4000019,200],//周1材料
	[2,4000023,200],//周2材料
	[3,4000183,200],//周3材料
	[4,4000164,200],//周4材料
	[5,4000072,200],//周5材料
	[6,4000012,200],//周6材料
	[7,4000111,200]
];

var rewards = [
	//物品ID，物品数量
	[3992025,288],
	[2049100,1],
	[4032398,1],
	[4001266,2],
];
//-----------------------------------------------------

var status = -1;//模组状态
var chr =null;
var say = "";
var weekIndex = -1;
function start(){
	if (cm.getBossLog("每日任务_每周") > 0) {
		cm.sendOk("每日任务已完成，无法再次领取");
		cm.dispose();
		return;
	}
	weekIndex = new Date().getDay();
	if(weekIndex>0){weekIndex-=1;}else{weekIndex =6;}
    chr = cm.getPlayer();
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
		say = _getTitle("每日任务");
		
		say += "请将今天的随机签到道具 ";
		say += "#v"+taskItems[weekIndex][1]+"# * "+taskItems[weekIndex][2]+" 带给我~\r\n";
		say += "奖励";
		for(var i = 0;i<rewards.length;i++){
			say += "#v"+rewards[i][0]+"#x"+rewards[i][1];
		}
		say += ",以及对应等级的经验值奖励\r\n\r\n";
		say += "#b#L0#提交任务#l";
		cm.sendSimple(say);
    }else if(status == 1){
        if (selection == 0) {
			if (!cm.haveItem(taskItems[weekIndex][1],taskItems[weekIndex][2])) {
				cm.sendNext("#e#r怎么回事?你好像准备的并不充分。请再次确认今天需要的签到道具");
				status = -1;
			} else {
				for(var i = 0;i<rewards.length;i++){
					cm.gainItem(rewards[i][0],rewards[i][1]);
				}
				cm.gainExp(20000)
				cm.gainExpR(cm.getLevel()*cm.getLevel()*20);
				cm.gainItem(taskItems[weekIndex][1],-taskItems[weekIndex][2]);
				cm.setBossLog("每日任务_每周");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了冒险岛 每日签到任务！");
				cm.dispose();
			}
		}else{
			cm.dispose();
		}
    }else{
        cm.dispose();
    }
}

var ul_cloud = "#fItem/Etc/0403/04031309/info/iconRaw#";  //
function _getTitle(t){
	return " "+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"#r#e『"+ t+"』#k#n"+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"\r\n\r\n";
}