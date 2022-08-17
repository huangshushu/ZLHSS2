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
        cm.sendNextS("你有什么要对我说?", 3);
    else if (chat == 1)
        cm.sendNextPrevS("贵姓?", 1);
    else if (chat == 2)
        cm.sendNextPrevS("我没有之一。还是叫我 #b老兄#k.这就是老头叫我.", 3);
    else if (chat == 3)
        cm.sendNextPrevS("他是你的爷爷吗？ 你父母在哪里?", 1);
    else if (chat == 4)
        cm.sendNextPrevS("我没有任何家庭。 我只是在这里工作.\r\n#b(什么是所有的问题?)#k\r\n看，我必须回来工作，然后老人回来...", 3);
    else if (chat == 5)
        cm.sendNextPrevS("你知道名字Chromile吗？ 光之骑士?", 1);
    else if (chat == 6)
        cm.sendNextPrevS("不，从来没有听说过那个家伙...\r\n#b(为什么这个名字听起来很熟悉?)", 3);
    else if (chat == 7)
        cm.sendNextPrevS("#e你小布拉特!\r\n我告诉你移动箱子，不聊天我的客户!", 1, 0, 1106002);
    else if (chat == 8) {
        cm.sendNextPrevS("我刚刚要清理它...\r\n对不起，我得做他说的话...", 3);
        cm.forceCompleteQuest(20030);
    } else if (chat == 9) {
        cm.mihileNeinheartDisappear();
        cm.dispose();
    }

}