﻿/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("这是为了欢迎新加入的骑士团员而举行的欢迎会。嗯，在哪儿呢？我想介绍个人给你认识。修炼教官奇库在哪儿呢？这里人太多，不太容易找到……");
	} else if (status == 1) {
      qm.sendNext("请看画面左上方。点击小地图UI右侧的NPC按钮，会显示该地图上的NPC名字。请点击其中的奇库。那样的话，小地图上就会用箭头显示奇库的位置。请你找到奇库，去和他打个招呼。");
	} else if (status == 2) {
	  qm.forceStartQuest();
	  qm.dispose();
	}
}
function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("I wish they'd start sending over some decent sized fighters, but I guess you'll work.");
		qm.dispose();
	}
  }
}
