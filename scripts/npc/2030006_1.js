var status = 0;
var qChars = new Array("Q1: 下列哪种type转过去资料会丢失??#Float To Double#Dec to Hex#Int to Char#Hex to Dec#3",
    "Q1: CDC character set contains 64 characters, To represent any possible 10 character string needs at least?#55Bits#60Bits#65Bits#70Bits#2",
    "Q1: Which of the following is an imperative programming language?#Ada#IDE#Java#NET#1",
    "Q1: (In C) int x=1; if (x=2) x=3; the value of x is ____.#1#0#2#3#4",
    "Q1: 在Java语言中 int i=100; x >> 8 那么x的值是多少??#1#0#3#3#2");
var qItems = new Array("Q2: OSI七层协定中Tcp是属于第几层?#第三层#第四层#第一层#第五层#2",
    "Q2: 在Java语言中 (for int i=0; i<=100; i++) 那么i的值是多少? #0#101#99#100#4",
    "Q2: 场效电晶体工作于饱和区，电路具有何种功能?#倍压#输出定电流#电流放大#开关控制#2",
    "Q2: 一个全波桥式整流电路输入之交流正弦波电压为16Vp-p，则输出之平均电压约为多少?#5.1V#8.2V#7.2V#9.4V#1",
    "Q2: 下列元件编号中哪个是运算放大器?#2sk30#2SC1815#ne555#uA741#4");
var qMobs = new Array("Q3: 下列何者属于非接触式IC卡?#健保卡#悠游卡#提款卡#自然人凭证卡#2",
    "Q3: 下列何者是用于一般个人电脑网路线接头之规格?#RJ44#RJ45#RJ11#RJ22#2",
    "Q3: 在Class B网段中 下列总共几ip是正确的?#65536#16777216#256#127#1",
    "Q3: 在Class C网段中 下列总共几ip是正确的?#65536#16777216#256#127#3",
    "Q3: 在Class A网段中 下列总共几ip是正确的?#65536#16777216#256#127#2",
    "Q3: 在近来最流行的RSA加密病毒，请问它是属于何种加密#非对称加密#对称加密#DEC#私人加密#1",
    "Q3: 0111正确答案为?#4#5#6#7#4");
var qQuests = new Array("Q4: 11001000011101100011 属于下列哪种?#C8763#C8673#C8637#C8736#1",
    "Q4: Google Derive是使用何种语言编写#C++#Java#PHP#Python#4",
    "Q4: 请看以下程式码求出f的答案def f(x,l=[]):\r\nfor i in range(x):\r\nl.append(i*i)\r\nprint l#3#2#23#32#1",
    "Q4: 下列何者是WWW的通讯协定?#https#http#ftp#title#2",
    "Q4: 每一部主机在Internet都有一个识别数字型代号称之为?#url#DNS#TCP#IP#4",
    "Q4: 下列何者是属于Class C的IP网址?#192.83.166.5#258.128.33.24#120.80.40.20#140.92.1.50#1");
var qTowns = new Array("Q5: 一般FAX是指?#电传视讯系统#电子游戏系统#电传会议#电传文件系统#4",
    "Q5: 分散式处理系统简称?#MNPS#BBPS#DDPS#RNPS#3",
    "Q5: 捷运上下车的顺序，资料结构观之?#串列结构#伫列结构#堆叠结构#树状结构#1",
    "Q5: 以泡沫排序搜寻某资料最多要找几次才能从1000比资料找到要的资料?#1#10#100#5#3",
    "Q5: 在Java语言中 int i=100; x >> 100 那么x的值是多少??#6#5#4#3#1",
    "Q5: 在Java语言中 int i=100; i >> 100 ^ 50 % 30 / 50 ^ 2 << 5 那么x的值是多少??#60#70#80#50#2");
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
