var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var ttt ="#fUI/Basic/CheckBox/3#";//"+ttt+"//美化
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var mh1   ="#fUI/GuildMark/Mark/Animal/00002016/1#";//兔兔
var mh2   ="#fUI/GuildMark/Mark/Animal/00002016/5#";//兔兔
var mh3   ="#fUI/GuildMark/Mark/Animal/00002016/4#";//兔兔
var mh4   ="#fUI/GuildMark/Mark/Animal/00002016/9#";//兔兔
var mh5   ="#fUI/GuildMark/Mark/Animal/00002016/8#";//兔兔
var mh6   ="#fUI/GuildMark/Mark/Animal/00002016/10#";//兔兔
var mh7   ="#fUI/GuildMark/Mark/Animal/00002016/12#";//兔兔
var mh8   ="#fUI/GuildMark/Mark/Animal/00002016/15#";//兔兔
var mh9   ="#fUI/GuildMark/Mark/Animal/00002016/16#";//兔兔
var mh10   ="#fUI/GuildMark/Mark/Animal/00002016/2#";//兔兔
var mh11   ="#fUI/GuildMark/Mark/Animal/00002016/3#";//兔兔
var mh12   ="#fUI/GuildMark/Mark/Animal/00002016/14#";//兔兔
var mh13   ="#fUI/GuildMark/Mark/Animal/00002016/11#";//兔兔

var aaa = "#fMob/7130200.img/move/0#";
var bbb = "#fMob/7130102.img/move/0#";
var ccc = "#fMob/7130300.img/move/0#";
var ddd = "#fMob/7130501.img/move/0#";
var eee = "#fMob/8140000.img/move/0#";
var fff = "#fMob/8140001.img/move/0#";
var ggg = "#fMob/8140002.img/move/0#";
var hhh = "#fMob/8140101.img/move/0#";
var iii = "#fMob/8140111.img/move/0#";
var jjj = "#fMob/8190004.img/move/0#";
var miaoshu = "#fUI/UIWindow/Quest/summary#"
var xuanshang = "#d#e悬赏#k#n";
var richang = "#r#e日常#k#n";
var zhuxianrenwu = "#b#e主线#k#n";
var zhixianrenwu = "#g#e支线#k#n";
var dengji = 0;
var jingyan = dengji*500;
var dianjuansuiji = Math.floor(Math.random()*500+1);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day1 = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var date = new Date();
var day = date.getDay();
var itemchance = Math.floor(Math.random()*1240+1);

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
        if (status == 0) { //text += "\t\t\t#e#d当前在线时间："+cm.getGamePoints()+"分钟！

	if (cm.getBossLog("meirihuoyue") >= 100){
		var wancheng = "#r已完成#k";
                 }else{
		var wancheng = "#b未完成#k";
                    }
	if (cm.getBossLog("paoshangrenwu") >= 1){
		var wancheng1 = "#r已完成#k";
                 }else{
		var wancheng1 = "#b未完成#k";
                    }
	if (cm.getBossLog("guaiwujishaling") >= 5){
		var wancheng2 = "#r已完成#k";
                 }else{
		var wancheng2 = "#b未完成#k";
                    }
	if (cm.getBossLog("zhuibutaofan") >= 1){
		var wancheng3 = "#r已完成#k";
                 }else{
		var wancheng3 = "#b未完成#k";
                    }
	if (cm.getBossLog("jinyarenwu") >= 1){
		var wancheng4 = "#r已完成#k";
                 }else{
		var wancheng4 = "#b未完成#k";
                    }
	if (cm.getBossLog("fengyemujuan") >= 1){
		var wancheng5 = "#r已完成#k";
                 }else{
		var wancheng5 = "#b未完成#k";
                    }
	if (cm.getBossLog("shijiandpian") >= 1){
		var wancheng6 = "#r已完成#k";
                 }else{
		var wancheng6 = "#b未完成#k";
                    }
	if (cm.getBossLog("fubenkuangmo") >= 1){
		var wancheng7 = "#r已完成#k";
                 }else{
		var wancheng7 = "#b未完成#k";
                    }
	if (cm.getBossLog("taiyanghua") >= 1){
		var wancheng8 = "#r已完成#k";
                 }else{
		var wancheng8 = "#b未完成#k";
                    }
	if (day == 0){
		var zjjindu = "#L10#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 1){
		var zjjindu = "#L11#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 2){
		var zjjindu = "#L12#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 3){
		var zjjindu = "#L13#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 4){
		var zjjindu = "#L14#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 5){
		var zjjindu = "#L15#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 6){
		var zjjindu = "#L16#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
                    }
	if (day == 0){
		var zjjindu = "#L10#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 1){
		var zjjindu = "#L11#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 2){
		var zjjindu = "#L12#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 3){
		var zjjindu = "#L13#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 4){
		var zjjindu = "#L14#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 5){
		var zjjindu = "#L15#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
	} else if (day == 6){
		var zjjindu = "#L16#[" + xuanshang + "]#e捕捉逃犯#n#k『" + wancheng3 + "』#l";
                    
                    }
				            if (cm.getLevel() < 10 ) {  
            cm.sendOk("本功能限制等级10级。您的能力不足以启用我.");
					cm.dispose();
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"//\t\t\t

           text += "\t\t\t#e#d当前在线时间："+cm.getGamePoints()+"分钟！#k#n\r\n"
   


           text += "#L4##e怪物追缉  可获取:  #v1432011#  #v1022047#  #v1472053#  #v2290017##n#k#l\r\n"


		    cm.sendSimple(text);
        } else if (selection == 1) {//每日活跃任务
            cm.openNpc(9310059, 0);
        } else if (selection == 2) {//跑商任务
            cm.openNpc(9900007, 2);
        } else if (selection == 3) { //收集材料
            cm.openNpc(9900007, 3);
        } else if (selection == 7) { //收集材料
            cm.openNpc(9900007, 333);
        } else if (selection == 4) {//怪物追缉令
            if(cm.getLevel() < 70 ) {
              cm.sendOk("#b本任务要#r70#b级以上的玩家才能进行..");
              cm.dispose();
          } else if (cm.getBossLog("guaiwujishaling") == 1){
          cm.sendOk("#r#e你已经完成了今天的任务");
          cm.dispose();
	} else if (day == 0){
          if(cm.haveItem(4000053,10)) {
             cm.gainItem(4000053,-10);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000053#[#r"+cm.itemQuantity(4000053)+"#k/#b10#k个]\r\n"+aaa+"");
	cm.dispose();}
	} else if (day == 1){
          if(cm.haveItem(4000049,30)) {
             cm.gainItem(4000049,-30);
          cm.setBossLog("guaiwujishaling");  
             cm.gainItem(2022670,1);
         cm.gainExp(cm.getLevel()*5000);
        
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r恭喜您额外获得：#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");

        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");
  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000049#[#r"+cm.itemQuantity(4000049)+"#k/#b30#k个]\r\n"+bbb+"");
	cm.dispose();}
	} else if (day == 2){
          if(cm.haveItem(4000148,30)) {
             cm.gainItem(4000148,-30);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
         cm.gainExp(cm.getLevel()*5000);
 
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r恭喜您额外获得：#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000148#[#r"+cm.itemQuantity(4000148)+"#k/#b30#k个]\r\n"+ccc+"");
	cm.dispose();}
	} else if (day == 3){
          if(cm.haveItem(4000229,20)) {
             cm.gainItem(4000229,-20);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
           cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r恭喜您额外获得：#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000229#[#r"+cm.itemQuantity(4000229)+"#k/#b20#k个]\r\n"+ddd+"");
	cm.dispose();}
	} else if (day == 4){
           if(cm.haveItem(4000054,10)) {
             cm.gainItem(4000054,-10);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
       
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r恭喜您额外获得：#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000054#[#r"+cm.itemQuantity(4000054)+"#k/#b10#k个]\r\n"+eee+"");
	cm.dispose();}
	} else if (day == 5){
          if(cm.haveItem(4000238,30)) {
             cm.gainItem(4000238,-30);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
       
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r恭喜您额外获得：#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000238#[#r"+cm.itemQuantity(4000238)+"#k/#b30#k个]\r\n"+fff+"");
	cm.dispose();}
	} else if (day == 6){
          if(cm.haveItem(4000239,30)) {
             cm.gainItem(4000239,-30);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
      
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r恭喜您额外获得：#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.喇叭(3,"恭喜[" + cm.getPlayer().getName() +"]完成追缉令,获得黑龙箱子" + jingyan + "经验," + jinbi + "金币," + dianjuansuiji + "点卷");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e今日追缉怪物#n#k:请带回#v4000239#[#r"+cm.itemQuantity(4000239)+"#k/#b30#k个]\r\n"+ggg+"");
	cm.dispose();}
        }else{

        cm.sendOk("今天无任何任务");
	cm.dispose();}
        } else if (selection == 5) {//捕捉逃犯
            cm.openNpc(9900007, 5);
        } else if (selection == 6) {//转职
            cm.openNpc(9900004, 2);
        } else if (selection == 7) {//点卷商城
            cm.openNpc(9310071, 0);
        } else if (selection == 8) {//兑换系统
            cm.openNpc(9900004, 8);
        } else if (selection == 9) {//任务系统
            cm.openNpc(9900004, 9);
        } else if (selection == 10) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b天空之城公园#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b天空之城公园#k了.快去将他带回来问罪");
	cm.dispose();}
        } else if (selection == 11) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji1") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b魔法密林码头#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji1');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji1") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b魔法密林码头#k了.快去将他带回来问罪");
	cm.dispose();}
        } else if (selection == 12) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji2") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b林中之城附近的黑森林通道#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji2');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji2") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b林中之城附近的黑森林通道#k了.快去将他带回来问罪");
	cm.dispose();}

        } else if (selection == 13) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji3") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b黄金海岸#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji3');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji3") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b黄金海岸#k了.快去将他带回来问罪");
	cm.dispose();}
        } else if (selection == 14) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji4") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b上海豫园#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji4');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji4") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b上海豫园#k了.快去将他带回来问罪");
	cm.dispose();}
        } else if (selection == 15) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji5") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b新加坡码头#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji5');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji5") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b新加坡码头#k了.快去将他带回来问罪");
	cm.dispose();}
        } else if (selection == 16) {//捕捉逃犯
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b本任务要70级以上才能挑战.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji6") == 0){
cm.sendOk("[#r罪恶的逃犯#k]潜逃到#b新加坡机场#k了.快去将他带回来问罪");
cm.setBossLog('lienzhuiji6');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji6") >= 2){
cm.sendOk("做的不错，继续努力");
cm.dispose();
        }else{
cm.sendOk("你已经接了此任务了,[#r罪恶的逃犯#k]潜逃到#b新加坡机场#k了.快去将他带回来问罪");
	cm.dispose();}
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


