
importPackage(Packages.client);
importPackage(Packages.tools); 
importPackage(Packages.server);


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);


	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("好的如果要出去随时来找我.");
		cm.dispose();
	}else 
	{
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0)
	{		
		cm.sendNext(""+ cm.getChar().getName() +"你好,当前时间是#b" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒. \r\n#k#r此NPC每日20点30分~35分#k才可以洽到时候,请拿起你的鼠标疯狂点击吧~\r\n每次点击都会获得#b点卷#k,运气不错时,可以获得很多哦!\r\n给你#e#r5分钟时间#k#n,看谁点的快!\r\n\r\n" );	
	}
	else if (status == 1) {
 if (cm.getHour() < 20  || cm.getHour() > 20 ) {

cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
 } else if (cm.getMin() > 30 &&cm.getMin() <= 35) {
//cm.sendOk("已经过了哦.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
//cm.dispose();


// }else if (cm.getPlayer().getName().getVip() == 0) {
       if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =4001126;
cm.gainNX(10);
cm.broadcastServerMsg(5121005, "1",true);
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =4001126;
cm.gainNX(30);
cm.broadcastServerMsg(5121009, "活动开始啦！每日20点30~35分，可前往市场点击抢楼NPC可获得点券",true);
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =4001126;
cm.gainNX(30);
cm.broadcastServerMsg(5121009, "活动开始啦！每日20点30~35分，可前往市场点击抢楼NPC可获得点券",true);
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =4001126;
cm.gainNX(222);
cm.broadcastServerMsg(5121009, "活动开始啦！每日20点30~35分，可前往市场点击抢楼NPC可获得点券",true);
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =4001126;
cm.gainNX(58);
cm.broadcastServerMsg(5121009, "活动开始啦！每日20点30~35分，可前往市场点击抢楼NPC可获得点券",true);
cm.dispose();
}else{
var zz =4001126;
cm.gainNX(30);
cm.broadcastServerMsg(5121009, "活动开始啦！每日20点30~35分，可前往市场点击抢楼NPC可获得点券",true);
cm.dispose();}



		 }else {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
		cm.dispose();	
	}
}
}}