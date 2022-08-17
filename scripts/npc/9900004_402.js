


//【配置区】-----------------------------------------------------
var _eventName = "beiyong2";//事件名称(需要和事件脚本名称一致)

var rewards = [
    //奖励纬度,奖励物品ID，物品获得最小数量,物品获得最大数量，
	[1,[
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[3992025,100,500],//强化星星
		[4000463,1,2],//国庆币
		[4000463,1,2],//国庆币
		//[2430209,1,1]//红包余额
		
	]],
	[2,[
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[3992025,200,800],//强化星星
		[4000463,1,3],//国庆币
		[4000463,1,3],//国庆币
		//[2430209,1,2]//红包余额
	]],
	[3,[
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[3992025,300,1500],//强化星星
		[4000463,1,4],//国庆币
		[4000463,1,4],//国庆币
		//[2430209,1,3]//红包余额
	]],
	[4,[
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[3992025,400,2000],//强化星星
		[4000463,1,5],//国庆币
		[4000463,1,5],//国庆币
		//[2430209,1,5]//红包余额
	]],
	[5,[
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[3992025,500,3000],//强化星星
		[4000463,1,10],//国庆币
		[4000463,1,10],//国庆币
		//[2430209,1,7]//红包余额
	]],
];
//-----------------------------------------------------

var status = -1;//模组状态
var chr =null;
var say = "";
var em =null;
var tomap = 0;

function start(){
    chr = cm.getPlayer();
    if(chr.getClient().getChannel() !=1){
        cm.sendOk("抱歉，该任务仅可在1线进行！");
        cm.dispose();
        return;
    }
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
        em = cm.getEventManager(_eventName);
        if(em == null){
            cm.sendOk("配置文件不存在，请联系管理员：");
            cm.dispose();
            return;
        }
        var eventState = em.getProperty("state");

        say = "\t\t\t\t\t#e#r『狩猎首领』#k#n\r\n\r\n";
		
		if(eventState == 1){
			
			say += "#e#d"
			say += em.getProperty("mob_level")+"星首领-["+em.getProperty("mob_name")+"]\r\n";
			say += "正在“"+em.getProperty("mob_mapname")+"”大肆破坏，请勇士务必消灭他！";
			say += "\r\n\r\n";
			say += "#b#e";
			say += "#L1#前往："+em.getProperty("mob_mapname")+"#l\r\n";
			tomap = Number(em.getProperty("mob_map"));
            cm.sendSimple(say, 2);
			
		}else{
			say += "                    #L2##r领取奖励#l\r\n\r\n";
            say += "#k当前没有可以执行的狩猎怪物。如果出现怪物，我们的前线哨兵会及时发现。\r\n\r\n#b狩猎BOSS奖励说明 随机获得3种物品中的1种随机数量\r\n1星：#v3992025#100-500个，#v4000463#1-2个，#v2430209#1个\r\n2星：#v3992025#200-800个，#v4000463#1-4个，#v2430209#1-2个\r\n3星：#v3992025#300-1500个，#v4000463#1-7个，#v2430209#1-4个\r\n4星：#v3992025#400-2000个，#v4000463#1-10个，#v2430209#1-6个\r\n5星：#v3992025#500-3000个，#v4000463#1-15个，#v2430209#1-10个\r\n";
			say += "#k#e";
			say += "\r\n\r\n";
            cm.sendSimple(say,2);
            //cm.dispose();
		}
		
    }else if(status == 1){
		
        if(selection == 1){
			cm.dispose();
			cm.warp(tomap);
		}else if(selection == 2){
			if(cm.getBossLog("HunBoss")>0){				
				//chr.setBossLog("HunBoss",0,-1);
				chr.resetBossLog("HunBoss");
				var level = chr.getBossLog("HunBossLevel");
				if(level <1){level =1;}
				if(level >5){level =5;}
				var _tempRewards = rewards[level-1][1][Math.floor(Math.random()*rewards[level-1][1].length)];
				if(_tempRewards != null){
					if(_tempRewards[1] == _tempRewards[2]){
						cm.gainItem(_tempRewards[0],_tempRewards[1]);
					}else if(_tempRewards[2] >= _tempRewards[1]){
						var num =  Math.floor(Math.random()*(_tempRewards[2] - _tempRewards[1]))+1;
						num += _tempRewards[1];
						cm.gainItem(_tempRewards[0],num);
					}else{
						cm.gainItem(_tempRewards[0],_tempRewards[1]);
					}
				}
				cm.sendOk("恭喜你，完成了狩猎,获得"+level+"星奖励");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"狩猎BOSS" + " : " + cm.getPlayer().getName() +"恭喜你，完成了狩猎,获得"+level+"星奖励O(∩_∩)O~",true).getBytes());
			
			}else{
				cm.sendOk("你没有完成狩猎");
			}
			cm.dispose();
		}else{
			cm.dispose();
		}
    }else{
        cm.dispose();
    }
}