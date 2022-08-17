/*
 完成时间：2013年8月22日 12:26:36
 脚本功能：[HOTTIME]数字猜猜猜！
 */

var a = 0;
var randomNumber = Array();
var n1;
var n2;
var n3;
var itemData = Array(
        3010226, //月光仙子椅子
        2022000, //矿泉水
        1003154, //麦克斯班?雷昂头盔
        1003155, //阿尔玛班?雷昂头盔
        1102275, //狮心战斗披风
        1402113, //维克特班?雷昂长剑
        1452107, //帕克斯班?雷昂弓
        1452131, //塞林班?雷昂弓
        1362020, //诺克斯班?雷昂手杖
        1332152, //斯卡班?雷昂匕首
        1492103, //梅尔班?雷昂短枪
        1522019, //帕克斯班?雷昂双弩枪
        1532039, //梅尔班?雷昂攻城炮
        1472143, //斯卡班?雷昂斗拳
        1382126, //赫克斯班?雷昂长杖
        1462120, //塞林班?雷昂弩
        1332126, //诺克斯班?雷昂匕首
        1322136, //维克特班?雷昂战锤
        1372102, //赫克斯班?雷昂短杖
        1302149, //麦克斯班?雷昂军刀
        1442113, //麦克斯班?雷昂巨灵开山斧
        1432084, //麦克斯班?雷昂枪
        1312095, //麦克斯班?雷昂战斧
        1322139, //麦克斯班?雷昂锤
        1402131, //麦克斯班?雷昂长剑
        1432119, //麦克斯班?雷昂枪
        1242015, //科拉班?雷昂聚能锁链剑
        1212016, //赫斯班?雷昂荣耀双头杖
        1222016, //梅尔班?雷昂白色手铳
        1302128, //火柴
        1042187, // - 粉红绒绒衫
        1042174, // - 野营服
        1042149, // - 灰条纹休闲衫
        1702371, // - 舞杖
        1702382, // - 中秋柿子树枝
        1702388, // - 熊宝宝是个能手巧匠
        1072437, // - PB拖拖
        1072348, // - 大象拖
        1003268, // - 粉嫩爱心帽
        1003237, // - 狮子宝宝帽
        1003038, // - SD娃娃头
        1102488, // - 蛋糕杯气球
        1102549, // - 管家的猫咪
        1102450 // - 天使光芒之翼
        )
var pass = true;
var correct = 0
var NumberPosition = Array();


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            cm.dispose();
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            for (var i = 1; i < 5; i++) {
                if (cm.getSpace(i) < 5) {
                    pass = false;
                }
            }
            if (cm.getBossLog('数字猜猜猜') >= 5) {
                cm.sendOk("对不起，数字猜猜猜活动一天只能进行五次。")
                cm.dispose();
            } else {
                cm.sendSimple("万众期待的HOTTIME时间又到了！亲爱的冒险家，请问你要做什么呢？\r\n#b#L0# 我要玩数字猜猜猜活动！\r\n#L1# 介绍一下此活动。")
            }
        } else if (a == 1) {
            if (selection == 0) {//我要玩数字猜猜猜活动！
                if (pass) {
                    cm.sendNextS("系统将随机产生10个数字，请您做好准备记录下这10个数字。\r\n#r -- 点击下一步开始产生。\r\n #r-- 如果切断对话，参加活动所需的物品不归还。", 3)
                } else {
                    cm.sendOk("请让你的所有背包栏空出5个格子。")
                    cm.dispose();
                }
            } else if (selection == 1) {//介绍一下此活动。
                a = -1;
                cm.sendNext("#e数字猜猜猜活动游戏规则：#n#d\r\n\r\n1）系统会随机给出10个数字，并且公示。\r\n2）这10个数字将被打乱，且隐藏。\r\n3）玩家会被随机提问第N个数字是什么\r\n如果回答正确即可得到奖励！\r\n4）玩家一共有3次提问的机会。#e\r\n\r\n5）奖池中有随机5个道具 \r\n - 回答正确1次，随机从里面得到1个道具。\r\n - 回答正确2次，随机从里面得到3个道具。\r\n - 回答正确3次，奖池内所有道具都带走！#n\r\n\r\n 参加活动的时候切记您的所有背包空格都有5格以上的空间。")
            }//selection
        } else if (a == 2) {
            var temp;
            var i = 0;
            while (i < 10) {
                temp = Math.floor(Math.random() * 40);
                if (checkid(temp)) {
                    randomNumber.push(temp)//随机0~39
                    i++;
                }
            }
            var text = "这10个随机数字依次为：\r\n #r- 请拿起您的笔记下这随机的数字！\r\n\r\n#d";
            for (var i = 0; i < randomNumber.length; i++) {
                text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + "\r\n"
            }
            cm.sendNextS(text, 3);
        } else if (a == 3) {
            cm.sendNextS("正在打乱这10个数字，请点击下一步……。", 3)
        } else if (a == 4) {
            randomNumber.sort(function() {
                return 0.5 - Math.random()
            })//随机打乱
            var temp = Math.floor(Math.random() * 10) + 1;
            var i = 0;
            while (i < 3) {
                temp = Math.floor(Math.random() * 10) + 1;
                //cm.sendY(temp)
                if (checkNumberPosition(temp)) {
                    NumberPosition.push(temp)//随机1~10
                    i++;
                }
            }//随机位数的数字猜
            cm.sendGetNumber("现在请您输入第" + NumberPosition[0] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999)
        } else if (a == 5) {
            n1 = selection; //记录玩家第一次输入
            cm.sendGetNumber("现在请您输入第" + NumberPosition[1] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999)
        } else if (a == 6) {
            n2 = selection;
            cm.sendGetNumber("现在请您输入第" + NumberPosition[2] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999)
        } else if (a == 7) {
            n3 = selection;
            cm.sendNextS("你所输入的数字为：\r\n\r\n 第" + NumberPosition[0] + "个数字 -- " + n1 + "\r\n 第" + NumberPosition[1] + "个数字 -- " + n2 + "\r\n 第" + NumberPosition[2] + "个数字 -- " + n3 + ".", 3)
        } else if (a == 8) {
            var text = "现在我来公布结果：\r\n 经过打乱后的10个数字为：\r\n\r\n#b";
            for (var i = 0; i < randomNumber.length; i++) {
                if (i == (NumberPosition[0] - 1)) {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + " #r( 您的答案为：" + n1 + ")#b\r\n"
                } else if (i == (NumberPosition[1] - 1)) {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + " #r( 您的答案为：" + n2 + ")#b\r\n"
                } else if (i == (NumberPosition[2] - 1)) {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + " #r( 您的答案为：" + n3 + ")#b\r\n"
                } else {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + "\r\n"
                }
            }
            cm.sendNextS(text, 3);
        } else if (a == 9) {//判断是否答对部分
            if (randomNumber[NumberPosition[0]-1] == n1) {
                correct += 1;
            }
            if (randomNumber[NumberPosition[1]-1] == n2) {
                correct += 1;
            }
            if (randomNumber[NumberPosition[2]-1] == n3) {
                correct += 1;
            }
            var text = "系统判断您一共答对了" + correct + "次。\r\n\r\n现在奖池里面有下列的道具(随机5个)：\r\n\r\n#b"

            itemData.sort(function() {
                return 0.5 - Math.random()
            })//随机打乱道具池
            for (var i = 0; i < 5; i++) {//拿前5个
                text += "#i" + itemData[i] + "#   #z" + itemData[i] + "#\r\n\r\n"
            }
            cm.sendNextS(text + "#d\r\n\r\n - 回答正确1次，随机从里面得到1个道具。\r\n - 回答正确2次，随机从里面得到3个道具。\r\n - 回答正确3次，奖池内所有道具都带走！", 3)
        } else if (a == 10) {
            if (correct == 0) {//没回答正确
                cm.sendOk("对不起，你没有回答正确。\r\n领取物品的必要条件是必须至少回答一个正确。")
                cm.dispose();
            } else if (correct == 3) {//全部回答正确
                var text = "恭喜你！回答3个全部正确！你将获取奖池内的所有物品！\r\n\r\n#b"
                for (var i = 0; i < 5; i++) {//拿前5个
                    text += "#i" + itemData[i] + "#   #z" + itemData[i] + "#\r\n\r\n"
                }
                cm.sendNextS(text + "#d\r\n\r\n请妥善保管哦！", 3);
            } else if (correct == 1) {//正确1个
                cm.gainItem(itemData[0], 1)
                cm.sendOk("赠送成功！ 喜欢奖池里面的道具吗？")
                cm.dispose();
            } else if (correct == 2) {//2个正确
                var text = "恭喜你！回答正确" + correct + "次，按照规则，你将获取奖池内的：\r\n\r\n#b"
                for (var i = 0; i < 3; i++) {
                    text += "#i" + itemData[i] + "#   #z" + itemData[i] + "#\r\n\r\n"
                }
                a = 11;
                cm.sendNextS(text + "#d\r\n\r\n请妥善保管哦！", 3);
            } else {
                cm.sendOk("错误！请和管理员联系。\r\n错误代码：" + correct)
            }
            cm.setBossLog('数字猜猜猜')
        } else if (a == 11) {//全部正确
            for (var i = 0; i < 5; i++) {//拿前5个
                cm.gainItem(itemData[i], 1);
            }
            cm.sendOk("赠送成功！ 喜欢奖池里面的道具吗？")
            cm.dispose();
        } else if (a == 12) {//2题
            for (var i = 0; i < 3; i++) {
                cm.gainItem(itemData[i], 1);
            }
            cm.sendOk("赠送成功！ 喜欢奖池里面的道具吗？")
            cm.dispose();
        }//a
    }//mode
}//f


function checkid(number) {//检查是否重复
    var i = 0;
    while (randomNumber.length >= i) {
        if (randomNumber[i] == number) {
            return false;
        }
        i++;
    }
    return true;
}

function checkNumberPosition(number) {//检查是否重复
    var i = 0;
    while (NumberPosition.length >= i) {
        if (NumberPosition[i] == number) {
            return false;
        }
        i++;
    }
    return true;
}