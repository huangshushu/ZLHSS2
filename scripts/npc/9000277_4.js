﻿/*
 * 菜菜制作 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 * OX问答副本  奖励NPC
 */

var status = 0;


function start() {
    cm.getNpcNotice(1540104, "[欢迎来到OX问答活动！]\r\n大家好，欢迎来到这里！\r\n#b让我们先等候3分钟来欢迎后面到来的冒险家吧！#k\r\n在这我们将回答二十道问答题，它们涉及到很多方面，但问题只有两种答案，题目出现时，选择正确答案，站在正确的位置吧！\r\n#e（站在中间的位置不算，将会被视为错误答案）\r\n#n#r 回答正确获得优胜奖5000万破攻 回答错误获得安慰奖3000万破攻 站中间不作答获得绿蜗牛壳一个。", 180);//显示180秒的活动介绍
    cm.dispose();
}