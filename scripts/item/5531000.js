
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1"; // 物品ID,数量
var x2;
var x3;
var maxenter = [3, 1];
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#"; //红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#"; //红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#"; //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#"; //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#"; //
var 菊花 = "#fUI/PredictHarmony/card/19#"; //卡片效果菊花
var 笑 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#"; //笑脸
var 金枫叶 = "#fMap/MapHelper/weather/maple/2#";
var 红枫叶 = "#fMap/MapHelper/weather/maple/1#";
var 巫女 = "#fMap/MapHelper/weather/witch/0#"; //巫女
var 气球 = "#fMap/MapHelper/weather/balloon/4#"; //气球
var 射箭 = "#fMap/MapHelper/weather/LoveEffect2/4/0#"; //射箭
var 玫瑰 = "#fMap/MapHelper/weather/rose/0#"; //玫瑰花
var 烟花 = "#fMap/MapHelper/weather/squib/squib1/3#"; //烟花
var 彩虹 ="#fEffect/ItemEff/1071085/effect/walk1/2#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#"; //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#"; //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#"; //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#"; //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#"; //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#"; //
var tz = "#fEffect/CharacterEff/1082565/4/0#"; //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#"; //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //蓝兔子
var 邪恶小兔 = ""; //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#"; //邪恶小兔 【大】
var 花草 = "#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 = "#fEffect/SetEff/208/effect/walk2/3#";
var 小花 = "#fMap/MapHelper/weather/birthday/2#";
var 桃花 = "#fMap/MapHelper/weather/rose/4#";
var 银杏叶 = "#fMap/MapHelper/weather/maple/3#";
var 小烟花 = "#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 = "#fMap/MapHelper/weather/witch/3#";
var PQname = ["BossMagnus_EASY",  "BossMagnus_HARD"];
//记录次数名称
var PQLog = ["麦格纳斯[普通]  挑战等级:230", "麦格纳斯[困难]  挑战等级:240"];
//开始的地图
var startmap = 401060000;
//等级限制
var minLevel = [230, 240];
var maxLevel = [300, 300];
//次数限制
var maxenter = [3, 1];

var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs;


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
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
			//  text += "#e#r" + 星星 + "这里是扎昆的祭台" + 星星 + ".\r\n"//3     
				text += "#e#r#L1#  开启分身\r\n"
				text += "#e#r#L2#  取消分身\r\n"

		 
		 
              cm.sendSimple(text);
}
else if (selection == 1) {
    cm.克隆();
    cm.dispose();
} else if (selection == 2) {//枫叶合成
cm.取消克隆()
    cm.dispose();
}else if (selection == 2) {
    cm.warpParty(401060300);//群体传送
    cm.dispose();     
}else if (selection == 1) {	
    
				  if (cm.getPlayerCount(401060300) > 999) {
	            cm.sendOk("已经有人挑战麦格纳斯你无法进入!");		
			}
			 else if (cm.判断每日值("麦格纳斯") >= 5)//召唤20次
   {
    cm.sendOk("检测：队伍中有人没有次数或者门票!");
   }
else if(cm.getMonsterCount(401060300) > 999)
   {
	cm.sendOk("里面已经有人在挑战了");
      cm.dispose();
   }              //5
           else if(cm.getPlayer().haveItem(4110001, 1) ){//判断火焰
		   cm.判断每日值("麦格纳斯") <= 5
		    {
 //   cm.sendOk("你好,队伍中有人没有次数或者门票!");
   }
		   cm.gainItem(4110001, -1);
		    cm.warpParty(401060300);
		   cm.清除当前地图怪物(); 
		   		   cm.spawnMobOnMap(8880000,1,2236,-1347,401060300);
				   cm.给团队每日("麦格纳斯");
		   Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『系统公告』" + " : " + "[" + cm.getChar().getName() + "]开始挑战麦格纳斯，大家一起为他(她)鼓掌!"));			cm.dispose();
		   
		  	}else{
                        cm.sendOk("队伍中有人没有次数或者门票");
                        cm.dispose();
	 }
	 
      }

   }
}