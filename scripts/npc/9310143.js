

/*

var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
*/
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon2/7#";
var 美化ne = "#fUI/UIWindow/Quest/icon6/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
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
        //text += "#b#v4031344##v4031344##v4031344##v3994082##v3994077##v3994062##v4031344##v4031344##v4031344##k\r\n";
        text += "         \t\t 欢迎来到装扮中心 . \r\n 大家可以在这里随意更换装扮服务一条龙，一张全明星卡就可以享受一次以下全面的服务哟！~\r\n" 
     
	    text += "#L1#"+正方箭头+"[美发师1]#l#L2#"+正方箭头+"[美发师2]#l\r\n\r\n"

            text += "#L3#"+正方箭头+"[美发师3]#L4##b"+正方箭头+"[美发师4]#l\r\n\r\n"
        
            text += "#L9#"+正方箭头+"[美发师5]#L10##b"+正方箭头+"[美发师6]#l\r\n\r\n"

            //text += "#L11#"+正方箭头+"[美发师7]#l\r\n\r\n"

            text += ""+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+"\r\n"

	    text += "#L5#"+正方箭头+"[整形师1]#l#L6#"+正方箭头+"[整形师2]\r\n\r\n#L11#"+正方箭头+"[整形师3]#L12#"+正方箭头+"[整形师4]#l\r\n\r\n"

            text += ""+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+完成红+"\r\n"

            text += "#L8##b"+正方箭头+"[改变肤色]#l\r\n\r\n"

		//text += "#L3#"+美化new+"[综合排名]#l\r\n"
		if(cm.getPlayer().getGMLevel() > 1){
			//text += "#d\r\n以下是GM特权>>>>>>>>>>正在添加\r\n"
			//text += "#L9991#满技能#l\r\n"
		}
        cm.sendSimple(text);
      }  else if (selection == 1) { //快速传送
        cm.openNpc(2012007, 11);
      } else if (selection == 2) { //药水商店
        cm.openNpc(9310032, 11);
      } else if (selection == 3) { //专职
        cm.openNpc(2010001, 11);
      }  else if (selection == 4) {//新手武器
        cm.openNpc(9201064, 11);
      }  else if (selection == 5) { //快速更换脸型No传送
        cm.openNpc(1052004, 11);
      } else if (selection == 6) { //更换脸型No
        cm.openNpc(2010002, 11);
      } else if (selection == 7) { //专职
        cm.openNpc(1052005, 11);
      }  else if (selection == 8) {//新手武器
        cm.openNpc(1012105, 11);
      }else if (selection == 9){
	cm.openNpc(9310143, 2);
      }else if (selection == 10){
	cm.openNpc(9310143, 3);
      }else if (selection == 11){
	cm.openNpc(9310143, 6);
      }else if (selection == 12){
	cm.openNpc(9310143, 5);
      }else if (selection == 13){
	cm.openNpc(9310143, 2);
      }else if (selection == 14){
	cm.openNpc(9310143, 2);

	  }
   }
}



