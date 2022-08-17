/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险百科
 */
var a = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "┏                                                  ┓";
		selStr += "\r\n     #d我们始终在追求强大的能力，却忽略了自身的加强，不要过于沉迷力量，一个伟大的冒险家不是以力量取胜，而且用那份不屈的意志，哪怕是一次次被击倒，我们还是会站起来。#k\r\n";
        selStr += "  #L1#返回目录#l\r\n\r\n";
		selStr += "\r\n  [#e#b强    攻#k#n]:增加百分比对普通怪物的伤害。\r\n";
		selStr += "\r\n  [#e#b超 强 攻#k#n]:增加百分比对高级怪物的伤害。\r\n";
		selStr += "\r\n  [#e#b战争意志#k#n]:增加百分比对所有怪物的伤害。\r\n";
		selStr += "\r\n  [#e#b鹰    眼#k#n]:对普通怪物有机率一击必杀。\r\n";
		selStr += "\r\n  [#e#b锐    眼#k#n]:对高级怪物有机率一击必杀。\r\n";
		selStr += "\r\n  [#e#b谢    幕#k#n]:对所有怪物有机率一击必杀。\r\n";
		selStr += "\r\n  [#e#b致命打击#k#n]:攻击怪物概率让怪物血量只剩1。\r\n";
		selStr += "\r\n  [#e#b蒙    蔽#k#n]:攻击怪物一定机率怪物不会有仇恨。\r\n";
		selStr += "\r\n  [#e#b追    击#k#n]:攻击时附加固定量真实伤害。\r\n";
		selStr += "\r\n  [#e#b坚    韧#k#n]:减少百分比受到的伤害。\r\n";
		selStr += "\r\n  [#e#b坚不可摧#k#n]:减少固定量受到的伤害。\r\n";
		selStr += "\r\n  [#e#b顽    固#k#n]:受到的伤害大于你最大生命值 #b60%#k 时，\r\n\t\t\t  会减少百分比伤害。\r\n";
		selStr += "\r\n  [#e#b未卜先知#k#n]:用超级药水抵消受到的伤害。\r\n";
		selStr += "\r\n  [#e#b幸运狩猎#k#n]:增加百分比狩猎经验。\r\n";
		selStr += "\r\n  [#e#b闲来好运#k#n]:增加百分比泡点经验。\r\n";
		selStr += "\r\n  [#e#b财源滚滚#k#n]:增加百分比泡点金币。\r\n";
		selStr += "\r\n  [#e#b苦中作乐#k#n]:被诅咒增加5倍经验值。\r\n";
		selStr += "\r\n  [#e#b伺机待发#k#n]:使用BUFF技能时一定的机率重置所有已经\r\n\t\t\t  进入冷却的技能。\r\n";
		selStr += "\r\n  [#e#b茁壮生命#k#n]:升级时获得额外MaxHP成长。\r\n";
		selStr += "\r\n  [#e#b茁壮魔力#k#n]:升级时获得额外MaxMP成长。\r\n";
		selStr += "\r\n  [#e#b茁壮成长#k#n]:升级时获得额外MaxHP，MaxMP成长。\r\n";
		selStr += "\r\n  [#e#b拔苗助长#k#n]:升级时一定机率获得额外1级，不获得升\r\n\t\t\t  级属性。\r\n";
		selStr += "\r\n  [#e#b稳如泰山#k#n]:被攻击时一定机率发动 10 级稳如泰山。\r\n";
		selStr += "\r\n  [#e#b愤怒之火#k#n]:被攻击时一定机率发动 10 级愤怒之火。\r\n";
		selStr += "\r\n  [#e#b训练有方#k#n]:增加召唤兽百分比对普通怪物的伤害。\r\n";
		selStr += "\r\n  [#e#b训练有素#k#n]:增加召唤兽百分比对高级怪物的伤害。\r\n";
		selStr += "\r\n  [#e#b迅捷突袭#k#n]:召唤兽攻击时附加一定量真实伤害。\r\n";
		selStr += "\r\n  [#e#b心有灵犀#k#n]:增加召唤兽和玩家百分比对所有怪物的伤害。\r\n";
		selStr += "\r\n  [#e#b异常抗性#k#n]:增加对异常状态抗性，减少持续的异常状\r\n\t\t\t  态持续时间。\r\n";
		selStr += "\r\n  [#e#b魔法爆破#k#n]:增加固定魔法破甲。\r\n";
		selStr += "\r\n  [#e#b残暴之力#k#n]:增加固定物理破甲。\r\n";
		selStr += "\r\n  [#e#b最后的轻语#k#n]:增加百分比固定物理魔法破甲。\r\n";
		
		
		
		selStr += "\r\n\r\n\r\n\r\n┗                                                  ┛\r\n";
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9900007, 0);
                break;
            
        }
    }
}