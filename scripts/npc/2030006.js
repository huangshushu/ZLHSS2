var status = 0;
var qChars = new Array("Q1: 枫之谷中，从等级1到等级2需要多少经验值?#10#12#15#20#3",
    "Q1: 根据不同职业为了第1次转职所要求的能力，被不正确敍述的是哪一个?#剑士 35 力量以上#盗贼 20 幸运以上#法师 20 智力以上#弓箭手 25 敏捷以上#2",
    "Q1: 被怪物攻击时特别的异常状态没有被正确说明的是哪一个?#虚弱 - 移动速度降低#封锁 - 不能使用技能#黑暗 - 精准降低#诅咒 - 经验减少#1",
    "Q1: 下列哪一个攻击怪物说明不正确?#冰冻 - 更多伤害施予火属性怪物上#火焰 - 更多伤害施予冰属性怪物上#圣光 - 更多伤害施予黑暗怪物上#毒 - 更多伤害到BOSS上#4",
    "Q1: 根据不同职业的第1次转职必须条件,被正确敍述的是哪一个?#剑士 - 力量40以上#弓箭手 - 敏捷25以上#法师 - 智力30以上#盗贼 - 敏捷25以上#2");
var qItems = new Array("Q2: 下列怪物中，哪组怪物与打倒它所能得到的战利品是正确对应关系的?#小幽灵 - 力量母矿#蝙蝠 - 蝙蝠翅膀#绿水灵 - 弹丸#肥肥 - 红色缎带#2",
    "Q2: 下列怪物中，哪组怪物与打倒它所能得到的战利品是不正确对应关系的?#缎带肥肥 - 红色缎带#绿水灵 - 绿水灵株#嫩宝 - 嫩宝壳#食人花 - 食人花的叶子#4",
    "Q2: 枫之谷下列药品中，哪组药品与功效是正确对应关系的?#白色药水 - 恢复 250 HP#活力药水 - 恢复 400 MP#红色药水 - 恢复 100 HP#披萨饼 - 恢复 400 HP#4",
    "Q2: 枫之谷下列药品中，哪组药品与功效是不正确对应关系的?#特殊药水 - 恢复 50% HP和MP #超级药水 - 恢复 100% HP和MP#姜汁汽水 - 恢复 75% HP和MP#清晨之露 - 3000 MP恢复#4",
    "Q2: GM活动中，能得到几个水果鲜奶蛋糕?#7个#4个#5个#6个#3");
var qMobs = new Array("Q3: 绿菇菇、木妖、蓝水灵、斧木妖，哪个是等级最高的怪物?#绿菇菇#木妖#蓝水灵#斧木妖#4",
    "Q3: 枫之岛没有哪个怪物?#肥肥#嫩宝#蓝宝#菇菇宝贝#1",
    "Q3: 维多利亚岛没有哪个怪物?#石球#绿水灵#黑木妖#钢铁肥肥#1",
    "Q3: 在艾纳斯岛没有哪个怪物?#小黑狼#雪吉拉#提力#黑鳄鱼#4",
    "Q3: 会飞的怪物是什么?#巫婆#刺菇菇#狼人#企鹅#1",
    "Q3: 天空之城不会出现哪些怪物?#小黄独角狮#小紫独角狮#日光精灵#鳄鱼#4",
    "Q3: 去天空之城的船上会出现哪个怪物?#绿水灵#地域巴洛谷#肥肥#木妖#2");
var qQuests = new Array("Q4: 下列哪个任务需要杀死50只木妖#木妖好可怕#皮奥资源回收#约翰的粉红花篮#珍的第一个挑战#1",
    "Q4: 可以重复执行的任务是?#找回枫之谷古书#我好无聊#明明夫人的第一个苦恼#艾温的玻璃鞋#4",
    "Q4: 下列哪个职业不是2转中出现的职业#法师#狂战士#弩弓手#刺客#1",
    "Q4: 下列哪个任务需要收集鸡蛋?#蒐集狂麦森#奈咪的小菜料理材料#幽灵派温#艾利逊的药材#2",
    "Q4: 唤醒麦吉的旧战剑不需要的材料是什么?#古代卷轴#妖精之翼#旧战剑#火焰羽毛#2",
    "Q4: 下列要求等级最高的任务是?#阿尔卡斯特和黑暗水晶#收集毛皮衣材料#与葛雷的交易#保护奈洛#1");
var qTowns = new Array("Q5: 在维多利亚岛没有的村落是?#弓箭手村#勇士之村#堕落城市#枫叶村#4",
    "Q5: 下列哪一个地区是属于艾纳斯岛?#玩具城#奇幻村#冰原雪域#昭和村#3",
    "Q5: 在艾纳斯岛的冰原雪域看不见的NPC是谁?#管家艾玛#高登#史匹奈尔#枫之谷GM#1",
    "Q5: 在维多利亚的弓箭手村看不见的NPC是谁?#长老斯坦#迷迷夫人#马赛尔#丽娜#3",
    "Q5: 从枫之谷一开始，遇到的第一个NPC是谁?#皮奥#娜塔莎#江西男#希娜#4",
    "Q5: 弓箭手村的玛亚请求我们拿什么物品给她，来治好她的病?#奇怪的药#奇怪的水#奇怪的你#奇怪的药#1");
var correctAnswer = 0;

function start() {
    if (cm.haveItem(4031058, 1)) {
        cm.sendOk("#h #,你已经有了 #t4031058# 不要让废我时间.");
        cm.dispose();
    }
    if (!(cm.haveItem(4031058, 1))) {
        cm.sendNext("欢迎光临 #h #, 我是 #p2030006#.\r\n看来你已经走了很远到达了这个阶段.");
    }
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("下次再见.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1)
            cm.sendNextPrev("#h #, 如果你给我 #b黑暗水晶#k 我将会让你试著回答5个问题,若您5个问题都答对您将得到 #v4031058# #b智慧项炼#k.");
        else if (status == 2) {
            if (!cm.haveItem(4005004)) {
                cm.sendOk("#h #, 你没有 #b黑暗水晶#k");
                cm.dispose();
            } else {
                cm.gainItem(4005004, -1);
                cm.sendSimple("测验开始 #b接受挑战吧!#k.\r\n\r\n" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)]));
                status = 2;
            }
        } else if (status == 3) {
            if (selection == correctAnswer)
                cm.sendOk("#h # 你答对了.\n准备答下一题??");
            else {
                cm.sendOk("你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!");
                cm.dispose();
            }
        } else if (status == 4)
            cm.sendSimple("测验开始 #b接受挑战吧!#k.\r\n\r\n" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)]));
        else if (status == 5) {
            if (selection == correctAnswer)
                cm.sendOk("#h # 你答对了.\n准备答下一题??");
            else {
                cm.sendOk("你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendSimple("测验开始 #b接受挑战吧!#k.\r\n\r\n" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)]));
            status = 6;
        } else if (status == 7) {
            if (selection == correctAnswer)
                cm.sendOk("#h # 你答对了.\n准备答下一题??");
            else {
                cm.sendOk("你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!");
                cm.dispose();
            }
        } else if (status == 8)
            cm.sendSimple("测验开始 #b接受挑战吧!#k.\r\n\r\n" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)]));
        else if (status == 9) {
            if (selection == correctAnswer) {
                cm.sendOk("#h # 你答对了.\n准备答下一题??");
                status = 9;
            } else {
                cm.sendOk("你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!");
                cm.dispose();
            }
        } else if (status == 10) {
            cm.sendSimple("最后一个问题.\r\n测验开始 #b接受挑战吧!#k.\r\n\r\n" + getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)]));
            status = 10;
        } else if (status == 11) {
            if (selection == correctAnswer) {
                cm.gainItem(4031058, 1);
                cm.warp(211000001, 0);
                cm.sendOk("恭喜 #h #, 你太强大了.\r\n拿著这个 #v4031058# 去找你的转职教官吧!.");
                cm.dispose();
            } else {
                cm.sendOk("太可惜了,差一题就可以通关了!! 多多加油><.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!");
                cm.dispose();
            }
        }
    }
}

function getQuestion(qSet) {
    var q = qSet.split("#");
    var qLine = q[0] + "\r\n\r\n#L0#" + q[1] + "#l\r\n#L1#" + q[2] + "#l\r\n#L2#" + q[3] + "#l\r\n#L3#" + q[4] + "#l";
    correctAnswer = parseInt(q[5], 10);
    correctAnswer--;
    return qLine;
}
