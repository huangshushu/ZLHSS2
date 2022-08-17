/**

 * time:2020-04-12
 * explain:赏金任务
 * version：1.0
 * core:em
 * remarks:
 */


//【配置区】-----------------------------------------------------
var _eventName = "feihong";//事件名称(需要和事件脚本名称一致)
var rewards = [
    //奖励物品ID，物品获得最小数量,物品获得最大数量，
    [3992025,100,3000],//强化星星
	[3992025,100,3000],//强化星星
	[3992025,100,2000],//强化星星
	[3992025,100,2000],//强化星星
	[3992025,100,1000],//强化星星
	[3992025,100,1000],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,300],//强化星星
	[3992025,100,400],//强化星星
	[3992025,100,300],//强化星星
	[3992025,100,400],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,300],//强化星星
	[3992025,100,300],//强化星星
	[3992025,100,300],//强化星星
	[3992025,100,300],//强化星星
    [4000463,1,10],//国庆币
	[4000463,1,5],//国庆币
	[4000463,1,5],//国庆币
	[4000463,1,3],//国庆币
	[4310143,1,20],//BOSS币
	[4310143,1,10],//BOSS币
	[4310057,1,20],//跑商币
	[4310057,1,10],//跑商币
	[3992025,100,300],//强化星星
	[3992025,100,300],//强化星星
	[3992025,100,400],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[4011008,1,1],//锂
	[4011007,1,1],//月石
	[2613000,1,2],//星火
	[2613000,1,1],//星火
	[2046913,1,1],//宿命
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,500],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[3992025,100,200],//强化星星
	[4001165,1,200],//阳光
	[4001165,1,100],//阳光
	[4001165,1,50],//阳光
	[4001165,1,50],//阳光
	[2450000,1,1],//狩猎
]

//-----------------------------------------------------

var status = -1;//模组状态
var chr =null;
var say = "";
var em =null;
var needItemId = 0;
var needItemNum = 0;

function start(){
    chr = cm.getPlayer();
	
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
        em = cm.getEventManager(_eventName);
        if(em == null){
            cm.sendOk("赏金任务配置文件不存在，请联系管理员：");
            cm.dispose();
            return;
        }
        var eventState = em.getProperty("state");

        say = "\t\t\t\t\t#e#r赏金任务#k\r\n";
        say += "#dHi！勇敢的冒险家，不知道你是否听过#b赏金猎人#d？\r\n";
        say += "领取#b赏金公会每小时#d发布的任务，就可以获得丰厚的奖励哦。\r\n";
        say += "赏金公会只有在每天的#r8时~24时整点#d会发布任务\r\n";
        say += "每个任务只能由一个赏金猎人完成！\r\n\r\n";
        if(eventState == 0){
            say += "任务状态：#k[未发布]#d\r\n\r\n";
            say += "#k赏金任务发布后会有喇叭提示，请不要着急！\r\n \r\n";
            cm.sendOk(say);
            cm.dispose();
        }else if(eventState == 1){
            needItemId = parseInt(em.getProperty("itemId"));
            needItemNum = parseInt(em.getProperty("itemNum"));
            say += "任务状态：#k[未提交]#d\r\n";
            say += "任务需求：#v"+needItemId+"# #b"+needItemNum+"#d个\r\n";
            say += "#L1##b我要提交赏金任务#l";
            cm.sendSimple(say, 2);
        }else if(eventState == 2){
            say += "任务状态：#k[已提交]#d\r\n\r\n";
            say += "#k该任务已经被其他的赏金猎人抢先完成了，请耐心等待下次任务吧！\r\n \r\n";
            cm.sendOk(say);
            cm.dispose();
        }
    }else if(status == 1){
        /**
         * 
         * 这里要做奖励背包空间验证！！！先留着
         * 
         */
        if (cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
            cm.sendOk("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r1#k 个空位。");
            cm.dispose();
            return;
        }

        if(!cm.haveItem(needItemId,needItemNum)){
            cm.sendOk("你貌似没有足够的物品提交赏金任务，快去确认一下吧。");
            cm.dispose();
        }else{
			if(cm.getBossLog("每日赏金完成")>=5){
				cm.sendOk("你今日已经完成了5次赏金任务了，明日再来吧！");
				cm.dispose();
				return;
			}
			
			
            em = cm.getEventManager(_eventName);
            if(em != null){
                if(em.getProperty("state") ==1){
                    em.setProperty("state","2");
                    cm.gainItem(needItemId,-needItemNum);
                    cm.setBossLog("每日赏金完成");
                    cm.sendOk("恭喜你，完成了赏金任务！");
                    var _tempRewards = rewards[Math.floor(Math.random()*rewards.length)];
                    if(_tempRewards[1] == _tempRewards[2]){
                        cm.gainItem(_tempRewards[0],_tempRewards[1]);
                    }else if(_tempRewards[2] >= _tempRewards[1]){
                        var num =  Math.floor(Math.random()*(_tempRewards[2] - _tempRewards[1]))+1;
                        num += _tempRewards[1];
                        cm.gainItem(_tempRewards[0],num);
                    }else{
                        cm.gainItem(_tempRewards[0],_tempRewards[1]);
                    }

                    cm.dispose();
                }else{
                    if(em.getProperty("state") ==2){
                        cm.sendOk("已经有其他人完成了赏金任务，请耐心等待下次任务吧！");
                        cm.dispose();
                    }else{
                        cm.sendOk("赏金公会貌似还没有发布新任务哟！");
                        cm.dispose();
                    }
                }
            }else{
                cm.sendOk("赏金任务配置文件不存在，请联系管理员：");
                cm.dispose();
                return;
            }
        }
    }else{
        cm.dispose();
    }
}