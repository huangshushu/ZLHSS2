/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 8) {
            qm.sendNext("噢，你还有什么问题吗？如果你要跟我对话，请重新打开界面。");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("你好, #h0#. 欢迎来到 #p1101000# 骑士。 我的名字是 #p1101002#我目前作为年轻的皇后天成。我们最好结识，因为我们会看到很多对方。哈哈!");
    } else if (status == 1) {
        qm.sendNextPrev("我敢肯定，你有很多的问题，因为一切都发生得太快了。我一个解释这一切，一，从你在哪里到你这里做.");
    } else if (status == 2) {
        qm.sendNextPrev("这个岛被称为圣地。由于魔女的魔法，这个小岛漂浮平时周围像在天空中巡逻的冒险岛世界船。眼下，但是，我们在这里已经停了的原因.");
    } else if (status == 3) {
        qm.sendNextPrev("这位年轻的魔女是枫树世界的统治者。 什么？这是你听说过她的第一次？ 是啊。嗯，她枫世界的统治者，但她不喜欢来控制它。她远道而来的手表，以确保一切都很好。好吧，至少这是她一贯的作用.");
    } else if (status == 4) {
        qm.sendNextPrev("但事实并非如此现在。我们一直在寻找遍布世界枫迹象预示黑法师的复兴。我们不能让黑法师回来恐吓枫叶世界，因为他在过去!");
    } else if (status == 5) {
        qm.sendNextPrev("不过那是很久很久以前，人们今天不要为实现黑法师有多吓人的。我们已经通过和平枫世界所有成为被宠坏了我们今天欣赏和被遗忘的混乱和可怕的枫叶世界曾经是怎么回事。如果我们不做些什么，黑法师将再次统治世界枫!");
    } else if (status == 6) {
        qm.sendNextPrev("这就是为什么年轻的魔女已经决定采取事态入她自己的手。她的勇敢形成的冒险岛爵位击败黑法师一劳永逸。你知道你需要做的，正确的呢？我敢保证你有一个想法，因为你，你自己，注册成为一个骑士.");
    } else if (status == 7) {
        qm.sendNextPrev("我们必须变得更加强壮，所以我们可以打败黑法师，如果他复活。我们的首要目标是防止他破坏枫世界，你将在发挥突出的作用.");
    } else if (status == 8) {
        qm.askAcceptDecline("这就是我的解释。 我回答了你的所有问题? \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 经验");
    } else if (status == 9) {
        if (qm.getQuestStatus(20016) == 0) {
            qm.gainExp(1000);
            qm.forceCompleteQuest();
        }
        qm.sendNext("我很高兴你清楚我们目前的情况，但你知道，在当前的水平，你甚至还没有强大到足以面对黑法师的爪牙，更不用说黑魔导士本人。甚至没有他的爪牙“的爪牙，作为一个事实问题。你将如何保护枫树世界在你目前的水平?");
    } else if (status == 10) {
        qm.sendNextPrev("虽然你已经被接纳进入爵位，你目前还不能确认为骑士。因为你甚至没有一个骑士在训练，你是不是一个正式的骑士。如果你留在你目前的水平，你会无非就是勤杂工更多 #p1101000# 骑士.");
    } else if (status == 11) {
        qm.sendNextPrev("但是，没有人开始作为一天一个强大的骑士。皇后didn''t希望别人强。她希望有人有勇气的人，她可以发展成经严格培训很强的骑士。所以，你首先应该成为一个骑士在训练。我们将谈论你的任务，当你到这一点.");
    } else if (status == 12) {
        qm.sendPrev("走左边的门到达训练森林。在那里，你会发现#p1102000#中，培训讲师，谁教你如何变得更强。我不想要找到你四处游荡漫无目的，直到你达到 10级，你听到?");
        qm.safeDispose();
    }
}

function end(mode, type, selection) {
}