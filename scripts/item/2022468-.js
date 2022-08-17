/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */
var 装备 = [
    /*************
     手套
     *************/
    //重生定边手套
    2040006,
    //重生白云手套
    2040303,
    //重生探云手套
    2040403,
    //重生抚浪手套
    2040506,
    //重生缥缈鞋
    2040603,
    //重生彩虹鞋
    2040709,
    /*************
     套服
     *************/
    //重生演武铠
    2040806,
    //重生奥神袍
    2040903,
    //重生巡礼者
    2041024,
    //重生翻云服
    //重生霸七海
    2043003,
    /*************
     帽子
     *************/
    //重生冠军盔
    2043103,
    //重生玄妙帽
    2043203,
    //重生霓翎帽
    2043303,
    //重生迷踪帽
    2043703,
    //重生海王星
    2043803,
    /*************
     武器
     *************/
    //重生破甲剑
    2044003,
    //重生断蚺斧
    2044019,
    //重生惊破天
    2044103,
    //重生狂鲨锯
    2044203,
    //重生断首刃
    2044303,
    //重生蝶翼杖
    2044403,
    //重生冰轮杖
    2044503,
    //重生玄冥剑
    2044603,
    //重生碎鼋斧
    2044703,
    //重生威震天
    2044815,
    //重生显圣枪
    2044908
];
//说明文字
var 说明文字 = "   hi #b#h ##k 请选择你要的必成卷吧，选择后是不能反悔的哦，#r进入此页面后请勿不选择#k，箱子已经被消耗。";


var sels;
var 脚本执行 = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        脚本执行++;
    } else if (mode == 0) {
        脚本执行--;
    } else {
        cm.对话结束();
        return;
    }
    if (脚本执行 == 0) {
        var 文本信息 = "";
        for (var i = 0; i < 装备.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + 装备[i] + "##z" + 装备[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
        sels = selection;
        cm.gainItem(装备[sels], 1);
        cm.gainItem(2022468, -1);
        cm.说明文字("恭喜你获得 " + cm.显示物品(装备[sels]) + "");
		//cm.输出记录("礼包兑换记录/重生套装兑换记录.txt",""+cm.时间()+" : "+cm.getChar().getName()+" 兑换了 "+cm.getItemName(装备[sels])+" \r\n");
        cm.对话结束();
    } else {
        cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + 脚本执行);
        cm.对话结束();
    }
}