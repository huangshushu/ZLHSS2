/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
	    cm.sendNextS("我一直在等着你.",1);
	else if (chat == 1)	
	    cm.sendNextPrevS("这是怎么回事？我是在非常重要的战利品相关的中间业务.",3);
	else if (chat == 2)
        cm.sendNextPrevS("该联盟已经收到了一些非常令人震惊的消息。以前未知的领域却出现了困木北部地区.",1);
	else if (chat == 3)
        cm.sendNextPrevS("出现?",3);
	else if (chat == 4)
        cm.sendNextPrevS("是的，这很奇怪。我相信，通过什么某种古老的魔法隐藏.",1);
	else if (chat == 5)
        cm.sendNextPrevS("谁给我带来这种信息的球探说他觉得很邪恶的存在那里。它可能有一些做的黑法师.",1);
	else if (chat == 6)
	    cm.sendNextPrevS("听起来我们需要得到那边马上.",3);
	else if (chat == 7)
	     cm.sendNextPrevS("我已经派出天鹅骑士。该地区的地形很复杂，大雾覆盖大部分的景观.",1);
    else if (chat == 8)  
         cm.sendNextPrevS("...我该怎么办?",3);	
	else if (chat == 9) 
	     cm.sendNextPrevS("去四处看看。一种资源管理器的损失将远远超过所有的天鹅骑士更容易接受.",1);
	else if (chat == 10) 
	     cm.sendNextPrevS("我会送你#b#e#m105010000##n#k 调查的区域。如果你发现了什么，并试图发送一个眩光或东西，如果你打算让自己杀回来了，立即报告.",1);
	else if (chat == 11) 
	     cm.sendNextPrevS("我会送你 #b#e#m105010000##n#k 与Shinsoo的力量.",1);
	else if (chat == 12) {
		cm.introEnableUI(0);
        cm.warp(105010000,3);		
        cm.dispose();
    }
}
