var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var add = "#fEffect/CharacterEff/1022223/4/0#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var add = "#fEffect/CharacterEff/1112905/0/1#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
//var add = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 花 = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var s = "#fUI/StatusBar/BtClaim/normal/0#";
var h = "#fUI/CashShop/CSEffect/effect/1#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";


function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(2311003) == false){
			cm.teachSkill(2311003,30,30);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
   text += "             "+音符+"#e#r奇幻冒险岛#k#n"+音符+       "\r\n"
//   text += "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " [个人信息] " + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " \r\n";
   text += "" + 红色箭头 + "在线:" + cm.getGamePoints() + " " + 红色箭头 + "点卷:" + cm.getPlayer().getCSPoints(1) + " " + 红色箭头 + "充值:" + cm.getmoneyb() + " " + 红色箭头 + "积分:" + cm.getzb() + "#k#n\r\n"
    
   text += "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " #L100##r[自由市场]#l " + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " \r\n";
 
   text +="#L1##k"+正方箭头+"快速传送#l#L2##k" +正方箭头+"快捷商店#l#L3##r" +正方箭头+"在线奖励#l#L4##r"+正方箭头+"充值赞助#l\r\n"//3

   text +="#L13##k"+正方箭头+"潜能强化#l#L14##k"+正方箭头+"#r每日任务#K#l#L7##k" +正方箭头+"副本兑换#l#L8##r" +正方箭头+"会员福利#l\r\n"

   text +="#L17##k"+正方箭头+"平民搬砖#l#L10##k" +正方箭头+"点卷中介#l#L11##k" +正方箭头+"点卷商城#l#L12##r" +正方箭头+"新手专区#l\r\n"

   text +="#L5##k"+正方箭头+"快速转职#l#L26##k" +正方箭头+"爆率查询#l#L23##k" +正方箭头+"明星理发#l#L21##r"+正方箭头+"排行榜单#l\r\n\r\n"

   text += "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " #L101##r[随身仓库]#l " + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " \r\n";

   text +="#L9##r"+正方箭头+"一键满技#l#L18##r" +正方箭头+"师徒系统#l#L19##r" +正方箭头+"结婚系统#l#L20##k" +正方箭头+"必成商店#l\r\n"
 
   text +="#L16##k" +正方箭头+"经验兑换#l#L22##k" +正方箭头+"枫叶换点#l#L15##k" +正方箭头+"#r血衣制作#K#l#L24##k" +正方箭头+"清理背包#l\n\r\r\n"

   text +="#L25##k"+正方箭头+"摄影地图#l#L33##r" +正方箭头+"点歌系统#l#L30##r" +正方箭头+"重新转职#l#L32##r" +正方箭头+"招募组队#l\r\n\r\n"
 
   text += "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " [管理模式] " + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + "" + 爱心 + " \r\n";
 
if (cm.getPlayer().isGM()) {

   text += "#L1004#"+正方箭头+"要刷点卷#l#L1005#"+正方箭头+"要刷金币#l#L27##k" +正方箭头+"刷新地图#l#L28##k" +正方箭头+"刷新状态#l\r\n"
   text += "#L29##k"+正方箭头+"掉线重返#l#L50##k"+正方箭头+"活动BOSS#l#L51##k"+正方箭头+"怪物攻城#l\r\n"


  }
		    cm.sendSimple(text);
        } else if (selection == 2000) {//活动传送
	var job = cm.getJob();
				var job1 = Math.floor(job/10);
				var job2 = Math.floor(job/100);
				var i = 0;
				while ( i <=12 ){
					var skill4转1 = job*10000+i;
					var skill4转2 = job*10000+1000+i;
					var skill3转1 = job1*100000+10000+i;
					var skill3转2 = job1*100000+10000+1000+i;
					var skill2转1 = job1*100000+i;
					var skill2转2 = job1*100000+1000+i;
					var skill1转1 = job2*1000000+i;
					var skill1转2 = job2*1000000+1000+i;

					cm.teachSkill(skill4转1,30,30);
					cm.teachSkill(skill4转2,30,30);

					cm.teachSkill(skill3转1,30,30);
					cm.teachSkill(skill3转2,30,30);
					cm.teachSkill(skill2转1,30,30);
					cm.teachSkill(skill2转2,30,30);
					cm.teachSkill(skill1转1,20,20);
					cm.teachSkill(skill1转2,20,20);
					i++;
            				cm.sendOk("技能已满、祝您测试愉快!");
            				cm.dispose();
				}

        } else if (selection == 1) {//活动传送
            cm.teachSkill(14101006,0,0);
            cm.openNpc(9900004, 1);
  } else if (selection == 2) {//快捷商店2
            cm.openShop(1);
            cm.dispose();
//        } else if (selection == 2) {//快捷商店105
//            cm.openShop(105);
//			cm.dispose();

        } else if (selection == 3) { //在线奖励
            cm.openNpc(9900004, 13);


        } else if (selection == 4) {//必成商店
		    cm.dispose();
            cm.openNpc(9310043, 0);
        } else if (selection == 5) {//快速转职
            cm.openNpc(9900004, 2);
        } else if (selection == 6) {//装备兑换
            cm.openNpc(9100200, 0);
        } else if (selection == 7) {//副本兑换
            cm.openNpc(9310084, 0);
        } else if (selection == 8) {//VIP卡福利
            cm.openNpc(9900004, 666);

        } else if (selection == 9) {//一键满技
	var job = cm.getJob();
				var job1 = Math.floor(job/10);
				var job2 = Math.floor(job/100);
				var i = 0;
				while ( i <=12 ){
					var skill4转1 = job*10000+i;
					var skill4转2 = job*10000+1000+i;
					var skill3转1 = job1*100000+10000+i;
					var skill3转2 = job1*100000+10000+1000+i;
					var skill2转1 = job1*100000+i;
					var skill2转2 = job1*100000+1000+i;
					var skill1转1 = job2*1000000+i;
					var skill1转2 = job2*1000000+1000+i;

					cm.teachSkill(skill4转1,30,30);
					cm.teachSkill(skill4转2,30,30);

					cm.teachSkill(skill3转1,30,30);
					cm.teachSkill(skill3转2,30,30);
					cm.teachSkill(skill2转1,30,30);
					cm.teachSkill(skill2转2,30,30);
					cm.teachSkill(skill1转1,20,20);
					cm.teachSkill(skill1转2,20,20);
					i++;
            				cm.sendOk("技能已满、祝您测试愉快!");
            				cm.dispose();};

        } else if (selection == 10) {//点卷中介
            cm.openNpc(9900004, 900);
        } else if (selection == 11) {//点卷商城
            cm.openNpc(9310085, 0);
        } else if (selection == 12) {//新手专区
            //cm.openNpc(9900004, 799);
            cm.openNpc(9120017, 0);

        } else if (selection == 13) {//潜能强化
            cm.openNpc(1200004, 0);
        } else if (selection == 14) {//每日任务
            cm.openNpc(9050002, 0);
        } else if (selection == 15) {//血衣制作  
            cm.openNpc(1002006, 0);
        } else if (selection == 16) {//矿石回收
            cm.openNpc(9900004, 400);

        } else if (selection == 17) {//平民搬砖
            cm.openNpc(9050003, 0);
        } else if (selection == 18) {//师徒系统
            cm.openNpc(9900004, 1992);
        } else if (selection == 19) {//结婚系统
            cm.openNpc(9900004, 9);
        } else if (selection == 20) {//充值奖励
            cm.dispose();
			cm.openNpc(9310059);	


        } else if (selection == 21) {//排行榜单
            cm.openNpc(9040004, 0);
        } else if (selection == 22) {//枫叶换点
            cm.openNpc(9900004, 81);
        } else if (selection == 23) {//明星理发
            cm.openNpc(9900004, 77);
        } else if (selection == 24) {//清理背包
            cm.openNpc(9900004, 444);	
        } else if (selection == 25) {//摄影地图
            cm.warp(970000000, 0);
            cm.dispose();	
        } else if (selection == 26) {//爆率查询
            cm.openNpc(2000, 0);
        } else if (selection == 27) {//刷新地图
            cm.刷新地图();
            cm.dispose();
        } else if (selection == 28) {//刷新状态
            cm.刷新状态();
            cm.dispose();
        } else if (selection == 29) {//掉线重返
            cm.openNpc(9900004,16);
        } else if (selection == 32) {//组队广播
            cm.openNpc(9000037,10);
        } else if (selection == 33) {//点歌系统
            cm.openNpc(9900003,1);
        } else if (selection == 30) {//重新转职
            cm.openNpc(9900004,10222);
        } else if (selection == 50) {//活动BOSS
            cm.openNpc(9010000,50);
        } else if (selection == 51) {//怪物攻城
            cm.openNpc(9010000,51);
        } else if (selection == 100) {//自由市场
            cm.warp(910000000, 0);
            cm.dispose();
        } else if (selection == 101) {//随身仓库
            cm.openNpc(9100004, 0);

        } else if (selection == 0) {//
            cm.openNpc(9310002, 0);
     } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 1002) {//
           cm.gainItem(1072153,300,300,300,300,300,300,80,80,100,100,10,10,10,10);
        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);

        } else if (selection == 291) {//
            cm.gainItem(1072153,300,300,300,300,300,300,80,80,100,100,10,10,10,10);

        } else if (selection == 1004) {//刷点卷
            cm.gainNX(10000000);
            cm.dispose();
        } else if (selection == 1005) {//刷金币
            cm.gainMeso(+1000000000);
            cm.dispose();


cm.setBossLog('MRYM') ; 
 cm.setBossLog('MRFQ');
 cm.setBossLog('MRWJ');
 cm.setBossLog('MRTK');
            cm.dispose();
        } else if (selection == 999) {//
		if(cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016活动");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
            cm.dispose();
		}
		}
    }
}


