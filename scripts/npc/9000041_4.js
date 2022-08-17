importPackage(net.sf.sunms.tools);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server)
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);

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
			text += "\t\t\t  #e欢迎来到#b回顾冒险岛回顾冒险岛 #k!#n\r\n"//L10=暂未开放 L6=活动
			text += "#r换取对应礼包！★请留足背包空间★东西可能较多#n\r\n"//#L1##b#v4310086# 首充礼包#l       
            text += " #L7##r#v4310086# 充值礼包领取#l\r\n\r\n"//3  #L6##b#v4000017##v3991031##v3991040##v3991040##v3991037##l
            text += "#L2##b#v3990000# 管理工资领取#l       #L5##b#v3991012# 萌妹礼包领取#l\r\n\r\n"//
            //text += "#L8##b 赞助勋章升级（请先卸下原始勋章）#l\r\n"// 	   		\r\n\r\n#L9##b 补偿礼包#l
            //text += "#L11# 粉丝大礼包1（绿色数字1）#l\r\n#L12# 粉丝大礼包2（绿色数字2）#l\r\n#L13# 粉丝大礼包3（绿色数字3）#l\r\n#L14# 骨灰级粉丝大礼包（绿色数字4）#l"//3 
            text += "\r\n\r\n"
			cm.sendSimple(text);
        } else if (selection == 1) { //400礼包
			cm.sendNext("#e#r注意：只能领取一次！\r\n#k再次领取将会清空你的所有礼包数据，您的勋章属性将会被重置！");
		} else if (selection == 10) {
			cm.sendOk("暂未开放.");
            cm.dispose();
			return;
		} else if (selection == 11){
			if (cm.haveItem(3990010, 1)) {
			    cm.gainItem(3990010, -1);
				cm.gainItem(2370000,7);//
				cm.gainItem(2340000,3);//奖章
				cm.gainItem(2049000,20);//奖章
				cm.gainItem(5131000,3);//奖章
				cm.gainItem(5200000,3);
				cm.sendOk("领取成功！");
				cm.worldMessage(6,"【礼包】["+cm.getName()+"]粉丝大礼包1领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
		} else if (selection == 12){
			if (cm.haveItem(3990011, 1)) {
			    cm.gainItem(3990011, -1);
				cm.gainItem(2370000,3);//
				cm.gainItem(2049100,3);//奖章
				cm.gainItem(2049000,30);//奖章
				cm.gainItem(5131000,2);//奖章
				cm.gainItem(5200001,2);
				cm.sendOk("领取成功！");
				cm.worldMessage(6,"【礼包】["+cm.getName()+"]粉丝大礼包2领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
		} else if (selection == 13){
			if (cm.haveItem(3990012, 1)) {
			    cm.gainItem(3990012, -1);
				cm.gainItem(2370000,5);//
				cm.gainItem(4310049,100);//奖章
				cm.gainItem(2049000,10);//奖章
				cm.gainItem(5131000,5);//奖章
				cm.gainItem(5200002,3);
				cm.sendOk("领取成功！");
				cm.worldMessage(6,"【礼包】["+cm.getName()+"]粉丝大礼包3领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
		} else if (selection == 14){
			if (cm.haveItem(3990013, 1)) {
			    cm.gainItem(3990013, -1);
				cm.gainItem(2049100,10);//
				//cm.gainItem(2049000,20);//奖章
				cm.gainItem(5131000,3);//奖章
				cm.gainItem(5200000,3);
				cm.gainItem(5200001,3);
				cm.gainItem(5200002,3);
				cm.gainItem(4005004,10);
				cm.gainItem(3992025,3);
				cm.sendOk("领取成功！");
				cm.worldMessage(6,"【礼包】["+cm.getName()+"]骨灰级粉丝大礼包领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
		} else if (selection == 8) {//勋章属性修复
			if(cm.haveItem(1142347, 1)&&cm.getPlayer().getId()==236){//  
			cm.gainItem(1142347, -1);
			//cm.setBossLog("bclb1");
			cm.gainItem(1142348,26,26,26,26,400,400,13,13,13,13,8,8,8,16);//跳，速
			cm.sendOk("领取成功.");
			cm.worldMessage(6,"【勋章】["+cm.getName()+"]赞助勋章款式升级成功！");
            cm.dispose();
			}else {
			cm.sendOk("你没有权限进行此操作，请联系管理员！");
			cm.dispose();
			} 
			return;
		} else if (cm.getInventory(4).isFull(8)||cm.getInventory(2).isFull(3)||cm.getInventory(1).isFull(2)){
            cm.sendOk("#b请保证2格装备栏，3格消耗栏，8格其他栏的空间！否则无法领取.");
            cm.dispose();
			return;
        } else if (selection == 2) { //管理工资
				if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
            cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
            cm.dispose();
			return;
			}
		if (cm.haveItem(3990000, 1)) {//1档
			    cm.gainItem(3990000, -1);
				cm.gainItem(1122017,1,7);//7天项链
				cm.gainItem(5211060,1,3);//3天 3倍
				cm.gainNX(8000);//点券
				cm.gainItem(2049100,5);//混沌
				cm.gainItem(2340000,5);//祝福
				cm.gainItem(1142548,50,50,50,50,1000,1000,20,20,0,0,10,10,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
				cm.sendOk("工资领取成功！");
				cm.worldMessage(6,"【工资】["+cm.getName()+"]主播及管理1类工资领取成功！");
				cm.dispose();
			}else if (cm.haveItem(3990001, 1)) {//2档
			    cm.gainItem(3990001, -1);
				cm.gainItem(1122017,1,7);//7天项链
				cm.gainItem(5211060,1,1);//1天 3倍
				cm.gainNX(6000);//点券
				cm.gainItem(2049100,3);//混沌
				cm.gainItem(2340000,3);//祝福
				cm.sendOk("工资领取成功！");
				cm.worldMessage(6,"【工资】["+cm.getName()+"]主播及管理2类工资领取成功！");
				cm.dispose();
			}else if (cm.haveItem(3990002, 1)) {//3档
			    cm.gainItem(3990002, -1);
				cm.gainItem(1122017,1,3);//7天项链
				cm.gainNX(3000);//点券
				cm.worldMessage(6,"【工资】["+cm.getName()+"]主播及管理3类工资领取成功！");
				cm.dispose();
			}else if (cm.haveItem(3990003, 1)) {//4档
			    cm.gainItem(3990003, -1);
				cm.gainNX(2000);//点券
				cm.sendOk("工资领取成功！");
				cm.worldMessage(6,"【工资】["+cm.getName()+"]主播及管理4类工资领取成功！");
				cm.dispose();
			}else if (cm.haveItem(3990004, 1)) {//5档
			    cm.gainItem(3990004, -1);
				cm.gainNX(1000);//点券
				cm.sendOk("工资领取成功！");
				cm.worldMessage(6,"【工资】["+cm.getName()+"]主播及管理5类工资领取成功！");
				cm.dispose();
			}else if (cm.haveItem(3990005, 1)) {//6档
			    cm.gainItem(3990005, -1);
				cm.gainItem(1142547,40,40,40,40,2000,2000,20,20,0,0,10,10,20,20);
				cm.sendOk("工资领取成功！");
				//cm.worldMessage(6,"【工资】["+cm.getName()+"]主播及管理5类工资领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
        } else if (selection == 3) { //男主播  作废
		if (cm.haveItem(3990001, 1)) {
			    cm.gainItem(3990001, -1);
				cm.gainItem(1142534,15,15,15,15,1000,1000,10,10,0,0,10,10,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
				//cm.gainItem(4310150,1);//红武币
				//cm.gainItem(1122017,1,5);
				cm.gainItem(4000463,10);//GQB
				//cm.setmoneyb(50);
				//cm.gainItem(4002001,20);//奖章
				//cm.gainItem(4002002,20);//奖章
				//cm.gainItem(4002003,20);//奖章
				//cm.gainItem(4310059,20);//必成兑换
				cm.sendOk("工资领取成功！");
				cm.worldMessage(6,"【工资】["+cm.getName()+"]金牌男主播工资领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
        } else if (selection == 4) {//女主播  作废
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
            cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
            cm.dispose();
			return;
			}
			if (cm.haveItem(3990002, 1)) {
			    cm.gainItem(3990002, -1);
				cm.gainItem(1142535,15,15,15,15,1000,1000,10,10,0,0,10,10,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
				//cm.gainItem(4310150,1);//红武币
				//cm.gainItem(1122017,1,3);
				cm.gainItem(4000463,5);//GQB
				//cm.setmoneyb(50);
				//cm.gainItem(4002001,20);//奖章
				//cm.gainItem(4002002,20);//奖章
				//cm.gainItem(4002003,20);//奖章
				//cm.gainItem(4310059,20);//必成兑换
				cm.sendOk("工资领取成功！");
				cm.worldMessage(6,"【工资】["+cm.getName()+"]金牌女主播工资领取成功！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
		} else if (selection == 6) {//活动
		var sj=Math.floor(Math.random()*4);//0/1/2/3/4
		if(sj==2){
			if(cm.getPlayer().getLevel() >= 30 && cm.getBossLog("lqcg")==0&&cm.getBossLog("bclb")<=0){//判断次数   && 
			/*var ii = MapleItemInformationProvider.getInstance();
			var type = ii.getInventoryType(5211060);
			var toDrop = ii.randomizeStats(ii.getEquipById(5211060)).copy();
			var temptime = cm.setzbsj(2*60*60*1000); 
			toDrop.setExpiration(temptime);
			MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,false);
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); 
			toDrop.setFlag(1);//上锁
				cm.gainItem(2049100,1,1);
				cm.gainItem(1082149,1,3);
				cm.gainItem(1002939,1,3);
				//cm.gainItem(5150038,1,1);//4.30关*/
				cm.gainItem(2049100,5);
				cm.setBossLog("bclb");
				cm.setBossLog('lqcg');
				cm.sendOk("领取成功！");
				//cm.setBossLog("bclb3");
				cm.worldMessage(6,"【补偿】["+cm.getName()+"]获得5个混沌卷轴！感谢您的支持！");
				cm.dispose();
			}else{
				cm.sendOk("只能领取一次，或者你还未到30级！");
				cm.dispose();
			}
		}else{
			cm.setBossLog("bclb");
			cm.sendOk("很遗憾，没有中奖，请参与下一轮");
			cm.dispose();
		}
		} else if (selection == 5) {//妹子包
				if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
				cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
				cm.dispose();
				return;
				}
			if (cm.haveItem(3991012, 1)) {
			    cm.gainItem(3991012, -1);
				cm.gainItem(1142703,10,10,10,10,1000,1000,5,5,0,0,20,20,10,10);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
				cm.gainItem(5150038,1);//
				cm.gainItem(5153000,1);//
				cm.gainItem(5152001,1);//
				cm.gainItem(5151001,1);//
				cm.gainItem(1003439,1);//fensezhatou
				//cm.gainItem(4002001,20);//奖章
				//cm.gainItem(4002002,20);//奖章
				//cm.gainItem(4002003,20);//奖章
				//cm.gainItem(4310059,20);//必成兑换
				cm.sendOk("礼包领取成功！");
				cm.worldMessage(6,"【礼包领取】["+cm.getName()+"]萌妹认证礼包领取成功！谢谢你对★某某★的支持！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！");
				cm.dispose();
			}
		} else if (selection == 9) {//补偿
				if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
				cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
				cm.dispose();
				return;
				}
			if (cm.getBossLog("bclb")==0&&cm.getLevel()>=50) {
				var id = cm.getPlayer().getId();
				var sj=Math.floor(Math.random()*4) + 1;//0/1/2/3/4
				cm.setBossLog("bclb");
				cm.gainDY(sj*400);
				cm.gainNX(sj*200);
				cm.gainMeso(500000);
				cm.sendOk("礼包领取成功！");
				cm.worldMessage(6,"【补偿礼包】["+cm.getName()+"]领取了补偿礼包，感谢支持！！");
				cm.dispose();
			}else {	
				cm.sendOk("你无法领取！或者已经领过了！ 有其他问题请联系GM！");
				cm.dispose();
			}
		} else if (selection == 11) {//
			if(cm.getLevel()<120&&cm.haveItem(4002001,30)&&cm.haveItem(4002000,30)&&cm.haveItem(4002002,30)&&cm.haveItem(4000313,200)&&cm.haveItem(4001126,2000)&&cm.haveItem(4032398,20)&&cm.haveItem(2049100,3)&&cm.haveItem(2340000,3)&&cm.haveItem(5041000,50)&&cm.getPlayer().getMeso() >= 1500000&&cm.getPlayer().getDY() >= 10000&&cm.getPlayer().getNX() >= 10000){
			    cm.gainItem(4310060, 1);
				//cm.gainItem(5590001,1,14);//
				cm.gainItem(4002001,-30);//
				cm.gainItem(4002000,-30);//
				cm.gainItem(4002002,-30);
				cm.gainItem(4000313,-200);//
				cm.gainItem(4001126,-2000);
				cm.gainItem(4032398,-20);//
				cm.gainItem(2049100,-3);//hundun
				cm.gainItem(2340000,-3);//zhufu
				cm.gainItem(5041000,-50);
				cm.gainDY(-10000);
				cm.gainNX(-10000);
				cm.gainMeso(-1500000);
				cm.sendOk("礼包回退成功");
				cm.worldMessage(6,"【礼包】["+cm.getName()+"]世纪合服礼包2回退成功！");
				cm.dispose();
			}else{
				cm.sendOk("物品不足，无法回退");
				cm.dispose();
			}
        } else if (selection == 7) { //礼包
		if (cm.getcz()>=40000&&cm.getOneTimeLog("400礼包识别")==0) {
			    cm.gaincz(-40000);
				cm.gainItem(4310086,3);
				//cm.gainItem(4001266,5);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,5);//木妖
				//cm.gainItem(4031561,2);
				cm.gainItem(4310059,25);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,25);//混沌
				cm.setOneTimeLog("400礼包识别");
				//cm.gainItem(2370000,5);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！谢谢你对★某某★的支持！");
				cm.dispose();
			/*} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142347, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142347, -1);
				//cm.gainItem(1142346, -1);
				cm.gainItem(5041000,20);
				cm.gainMeso(1);
				cm.gainItem(1142348,60,60,60,60,1500,1500,30,30,0,0,60,60,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142348, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142348, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142349,80,80,80,80,2000,2000,40,40,0,0,80,80,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142349, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142349, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142135,100,100,100,100,2500,2500,50,50,0,0,100,100,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【级赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142135, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142135, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142136,120,120,120,120,3000,3000,60,60,0,0,120,120,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,10);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142136, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142136, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142216,140,140,140,140,3500,3500,70,70,0,0,140,140,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();

			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142216, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142216, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142189,160,160,160,160,4000,4000,80,80,0,0,160,160,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142189, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142189, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142371,180,180,180,180,4000,4000,90,90,0,0,180,180,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();

			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142371, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142371, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142321,200,200,200,200,4000,4000,100,100,0,0,200,200,20,20);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			    //cm.gainItem(4031558,10);//邮票
				//cm.gainItem(4031559,10);//邮票
				cm.gainItem(4001266,20);//奖章
				//cm.gainItem(4002000,20);//蜗牛
				//cm.gainItem(4002001,20);//兰蜗牛
				//cm.gainItem(4002002,20);//木妖
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//绿水灵
				cm.gainItem(2340000,20);//祝福
			    cm.gainItem(2049100,20);//混沌
				cm.gainItem(2370000,20);
				cm.sendOk("兑换充值礼包成功！");
				cm.worldMessage(6,"【赞助礼包】["+cm.getName()+"]领取成功！勋章属性得到提升！谢谢你对★某某★的支持！");
				cm.dispose();*/
			}else{
				cm.sendOk("您未达到领取标准！");
				cm.dispose();
			}
		}else if(status==2){
			if (cm.getcz()>=1000&&!cm.haveItem(1142346)&&!cm.haveItem(1142347)&&!cm.haveItem(1142348)&&!cm.haveItem(1142349)&&!cm.haveItem(1142135)&&!cm.haveItem(1142136)&&!cm.haveItem(1142216)&&!cm.haveItem(1142189)&&!cm.haveItem(1142371)&&!cm.haveItem(1142321)) {
				//cm.gainItem(4001266,10);//奖章
				//cm.gainItem(4002002,10);//木妖
				//cm.gaincz(-100);
				//cm.gainItem(4310059,1);//bi cheng bi
				//cm.gainItem(2340000,1);//祝福
			    //cm.gainItem(2049100,1);//混沌
				//cm.gainItem(2370000,1);
				cm.gainItem(1142346,10,10,10,10,0,0,5,5,5,5,0,0,0,0);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
				//cm.setOneTimeLog("首冲升级补偿");
				cm.sendOk("首充勋章礼包成功！");
				cm.worldMessage(6,"【礼包领取】["+cm.getName()+"]首充勋章领取成功！谢谢你对★某某★的支持！");
				cm.dispose();
			}else{
				cm.sendOk("你无法领取！（充值10元即可领取四维+10的勋章）");
				cm.dispose();
			}
		}
    }
}
