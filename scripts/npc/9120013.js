/* Boss Kitty
	Zipangu : Showa Town (801000000)
	
	Quiz for quest 8012 (Sakura, the Kitty, and the Orange Marble)
*/

var status = -1;
var questions = new Array("下列物品中何者不是貍猫所掉出的物品?", "你知道昭和蔬果店的老板叫什么名字吗?", "昭和电影院前的NPC是下列何者?", "古代神社理，写著『香菇（???）』(平假名)的地方有几个?", "古代神社贩售物品中，何者可提升攻击力?", "联结西门町与江户村的NPC是谁?", "下列物品中，何者不是盗贼们所掉出的道具?", "下列何者不是实际存在的物品?", "下列何者是实际存在的道具?", "下列何者不是古代神社元泰所贩售的拉面?", "昭和当鱼外面写著什么呢?", "下列武器中，何者的说明有误?");;
var answers = new Array(new Array("貍猫柴薪", "独角狮硬角", "红色砖头"), new Array("莎美", "卡美", "由美"), new Array("凉子", "明日香", "绘里香"), new Array("8个", "7个", "6个"), new Array("章鱼烧", "日式炒面", "黑轮"), new Array("麻雀", "鹈鹄鸟", "乌鸦"), new Array("五角徽章", "束腹", "镀金项炼"), new Array("冷冻金枪鱼", "清酒", "苍蝇拍"), new Array("雪狐的犬齿", "游魂的捧花", "雪狐的尾巴"), new Array("烤猪肉拉面", "盐味拉面", "香菇特制味噌拉面"), new Array("千客万来", "商卖繁盛", "买收贩售"), new Array("木精灵枪－剑士专用武器", "橡皮榔头－单手剑", "日本地图－可装备等级50级"));;
var correctAnswer = new Array(1, 2, 2, 2, 0, 1, 1, 2, 2, 2, 1, 0);
var questionNum;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getQuestStatus(8012) == 1 && !cm.haveItem(4031064)) { //quest in progress
            cm.sendYesNo("怎么了你要准备挑战我的任务了??");
        } else { //quest not started or already completed
            cm.sendOk("喵~~~");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var hasChicken = cm.haveItem(2020001, 300);

        if (!hasChicken) {
            cm.sendOk("请先交出来300个炸机！");
            cm.safeDispose();
        } else {
            cm.gainItem(2020001, -300)
            cm.sendNext("做得好！接下来我会问几点问题要是你能答对的话我就会给你奖励。你准备好了吗？");
        }
    } else if (status == 7) { //2-6 are the questions
        if (selection != correctAnswer.pop()) {
            cm.sendNext("疴...很不幸的是你答错了题目因此请再给我300个炸机重新来过吧~")
            cm.safeDispose();
        } else {
            cm.sendNext("做得不错....")
        }
    } else if (status == 8) { //gain marble
        cm.gainItem(4031064, 1);
        cm.sendOk("哇！天才神童呢看来你现在不需要我了，我们的交易到此结束。");
        cm.safeDispose();
    } else if (status >= 2 && status <= 6 && mode == 1) { //questions
        var cont = true;
        if (status > 2) {
            if (selection != correctAnswer.pop()) {
                cm.sendNext("疴...很不幸的是你答错了题目因此请再给我300个炸机重新来过吧~")
                cm.safeDispose();
                cont = false;
            }
        }

        if (cont) {
            questionNum = Math.floor(Math.random() * questions.length);
            if (questionNum != (questions.length - 1)) {
                var temp;
                temp = questions[questionNum];
                questions[questionNum] = questions[questions.length - 1];
                questions[questions.length - 1] = temp;
                temp = answers[questionNum];
                answers[questionNum] = answers[questions.length - 1];
                answers[questions.length - 1] = temp;
                temp = correctAnswer[questionNum];
                correctAnswer[questionNum] = correctAnswer[questions.length - 1];
                correctAnswer[questions.length - 1] = temp;
            }

            var question = questions.pop();
            var answer = answers.pop();
            var prompt = "第" + (status - 1) + "题: " + question;

            for (var i = 0; i < answer.length; i++) {
                prompt += "\r\n#b#L" + i + "#" + answer[i] + "#l#k"
            }

            cm.sendSimple(prompt);
        }
    }
}
