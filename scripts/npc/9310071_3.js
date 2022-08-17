
var status = 0;
var fee;//自己下多少金币选择
var chance = Math.floor(Math.random()*4+1);
var mingzi = "金币博彩系统";
var zuidi = "30万";//最低金币
var zuidijinbi =300000;//最低金币
var zuigao = "60W";//最高金币
var zuigaojinbi = 600000;//最高金币
var beibaojb = "12亿";//背包不能超过金币
var beibaojinbi = 1500000000;//背包不能超过金币

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("欢迎下次光临,再见!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("\t\t#e欢迎来到#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "#n#k\r\n\r\n下注要求:最低" + zuidi + "金币-------最高" + zuigao + "金币\r\n背包金币:不得超过" + beibaojb + "");
        } else if (status == 1) {
            cm.sendGetText("你想下注多少金额呢?如果赢了的话可以获得3倍的收益,呵呵,话不多说啦!快输入你想要博彩的金额吧!输了别哭喔!");
        } else if (status == 2) {
			
            fee = cm.getText();
            cm.sendYesNo("你确定要下注 #r" + fee + "#k 金币吗?请先检查你有没有那么多钱哦!");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("哦呵，不好意思你没那么多钱了，去赚点钱再来吧，这可不是免费的,快去当掉一些东西再来吧!");
                cm.dispose();
			} else if (cm.getMeso() < zuidijinbi) {
                cm.sendOk("对不起,您背包不足#r" + zuidi + "金币#k,所以不能参于此次下注");
                cm.dispose();
            } else if (cm.getMeso() > beibaojinbi) {
                cm.sendOk("对不起,您背包超过了#r" + beibaojb + "金币#k,所以不能参于此次下注!");
                cm.dispose();
            } else if (cm.getText() < zuidijinbi) {
                cm.sendOk("对不起,最低下注:#r" + zuidi + "金币#k,所以不能参于此次下注!");
                cm.dispose();
            } else if (cm.getText() > zuigaojinbi) {
                cm.sendOk("对不起,最高下注:#r" + zuigao + "金币#k,所以不能参于此次下注!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛"); 
                        //cm.laba(cm.getPlayer().getName() + "『赌场公告』" + " : " + "在赌场输了，大家安慰一下吧",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛"); 
                        //cm.laba(cm.getPlayer().getName() + "『赌场公告』" + " : " + "在赌场输了，大家安慰一下吧",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛"); 
                        //cm.laba(cm.getPlayer().getName() + "『赌场公告』" + " : " + "在赌场输了，大家安慰一下吧",9);
	                    cm.dispose(); 
	                } 
                else if (chance >= 4) {
					cm.gainMeso(-fee); 
                    cm.gainMeso(fee * 3);                   
                    cm.sendNext("#r哈哈，恭喜你#k! 你赢了! 获得3倍的金币赔偿");
                    cm.laba(cm.getPlayer().getName() + "『赌场公告』" + " : " + "在赌场赢得3倍的金币，大家一起祝贺他吧",9);
                    cm.dispose();
                }
            }
        }
    }
}
