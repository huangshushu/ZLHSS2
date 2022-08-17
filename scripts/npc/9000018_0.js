
var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "我是装备出租商，您来找我有什么事吗？\r\n";

		textz += "#r#L1##v5220007##z5220007#   -  枫叶装备系列\r\n\r\n";

//		textz += "#r#L2##v5220007##z5220007#   -  38级大姐大枫叶装备\r\n\r\n";

//		textz += "#r#L3##v5220007##z5220007#   -  59级大姐大枫叶装备\r\n\r\n\r\n";

		cm.sendSimple (textz);  


	}else if (status == 1) {

	if (selection == 0){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r1亿#k金币#k");
      			cm.dispose();
			}
   }else if  (selection == 1) {
	   cm.openNpc(9310071, 1);
    }else if  (selection == 2) {
	   cm.openNpc(9310071, 2);
    }else if  (selection == 3) {
	   cm.openNpc(9310071, 3);
}
}
}
}