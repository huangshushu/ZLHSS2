var status;
var questions = new Array("小馬是一隻馬嗎??",
"你是不是笨蛋??",
"打龍王需不需要6個WZ或是愛妳主程式?",
"打皮卡啾需不需要6個WZ或是愛妳主程式?",
"小馬是讀幼稚園嗎??",
"If.....Then....是文法句構嗎？",
"No sooner.....Then.....是文法句構嗎？",
"視窗化是 Alt+Enter 嗎？",
"視窗化是 Ctrl+Enter 嗎？",
"本服IP是否為ponys.no-ip.biz?",
"小馬有女朋友嗎??",
"炎 是女生嗎?",
"本服經驗倍率是否為100倍?",
"本服最高轉生次數是否為1000轉?",
"本服最高上線人數是否為120人?",
"小馬電腦是否為雙核心?",
"現在金盃還有沒有用處?"
);
var answers = new Array(false, false, false, true, true, true, true, true, false, false, false, false, true, false, true, false, false);
var rOutput = new Array("小馬是人",
"難不成你是笨蛋?!",
"龍王62就已經內建的 不用在額外下載",
"皮卡啾62沒有 所以必須額外下載WZ",
"小馬是幼稚園唷~~~.",
"這是Visual Basic裡的語言。",
"沒錯,翻譯：一....就....。",
"應該是Alt+Enter吧。",
"應該是Alt+Enter吧。",
"本服IP是pony.no-ip.biz唷 別看錯了",
"小馬他沒有女朋友唷~~",
"炎 他是男生.",
"目前本服經驗倍率為500倍",
"曾經最高轉生數 14XX 轉",
"本服最高上限人數為120人 有圖",
"小馬電腦是四核心的唷",
"現在金杯已經沒了唷~."
);
var asked = new Array();
var currentQuestion;

function start() {
	status = -1;
	action(1, 0, -1);
}

function action(mode, type, selection) {
	if (status == 3 && mode == 1) { // continue quiz.
		status = 2;
		selection = 0;
	} else if (mode == 1 || (mode == 0 && type == 1)) // answering / accepting
		status++;
	else {
		if (type == 12 && mode == 0) // declining.
			cm.sendOk("有獎品耶...不要嗎? !");
		cm.dispose();
		return;
	}
	
	if (status == 0)
		cm.sendAcceptDecline("嘿 我是 #p"+cm.getNpc()+"#.\r\n 我是在 #b"+cm.serverName()+"私服.#k 的有獎徵答負責人.\r\n你想要參予這個活動嗎? 可以拿到獎品唷");
	else if (status == 1)
		cm.sendSimple("開始興奮了嗎 ? Pick your choice.#b\r\n#L0#開始考試! !#l\r\n#L1#怎麼玩?#l\r\n#L2#可以拿到啥?#l\r\n#L3#這些題目哪裡來?.#l");
	else if (status == 2) {
		if (selection == 0) {
			if (questions.length == asked.length) {
				cm.sendNext("你已經答對所有問題了...準備獎品中。。。");
				getPrize();
				cm.dispose();
			} else {
				currentQuestion = -1;
				while (contains(currentQuestion) || currentQuestion == -1) {
					currentQuestion = Math.floor(Math.random() * questions.length);
				}
				asked.push(currentQuestion);
				cm.sendYesNo("\t\t\t\t\t\t\t\#b是非題~問題 "+asked.length+":#k\r\n"+questions[currentQuestion]);
			}
		} else if (selection == 1) {
			cm.sendNext("只要按下 #rYes#k or #rNo#k 即可！");
			status = 0;
		} else if (selection == 2) {
			cm.sendNext("未知數...");
			status = 0;
		} else if (selection == 3) {
			cm.sendNext("來自大自然~");
			status = 0;
		}
	} else if (status == 3) {
			var answer = mode == 0 ? false : true;
			if (answers[currentQuestion] == answer) {
				cm.sendYesNo("答對了!. 你要繼續下一題嗎?");
			} else {
				cm.sendOk("\t\t\t\t\t\t\t\#r答錯囉 !#k\r\n"+rOutput[currentQuestion]);
				cm.dispose();
			}
	} else if (status == 4) {
		// create random prizes etc.
		getPrize();
		cm.sendOk("很好, 你共答對 "+asked.length+" 題問答。。");
		cm.dispose();
	}
}

function contains(quest) {
    for (var i = 0; i < asked.length; i++) {
        if (asked[i] == quest)
            return true;
    }
    return false;
}

function getPrize() {
	var hasQuant = false;
	var junk = new Array(4000009, 4000006, 4000005, 4000014, 4000016, 4000023, 4000022, 4000030, 4000029, 4000036, 4000038, 4000422);
	var junkWeap = new Array(1432043, 1432000, 1432001, 1432009, 1432024, 1432042, 1432002, 1442039, 1442048, 1442007, 1442061, 1442035, 1442024, 1442025, 1382000, 1382003,
						1382018, 1382042, 1382004, 1382015, 1382012, 1382055, 1382019, 1382019, 1412001, 1412000, 1412005, 1412013, 1412018, 1412005, 1412008, 1412027, 1422000,
						1422006, 1422003, 1422004, 1422033, 1402013, 1402029, 1402007, 1402044, 1402006, 1402002, 1402010, 1402014, 1402009, 1402018, 1372005, 1372006, 1372043, 1372022, 1372001,
						1452023, 1452001, 1452032, 1472066, 1472030, 1472003, 1472000, 1462047, 1462023, 1462000, 1462034, 1462005, 1332021, 1332032, 1332007, 1332070, 1332067, 1332006,
						1312033, 1312005, 1312018, 1322051, 1322004, 1322010, 1322053
						
						);
	var useable = new Array(2022280, 2022073, 2022112, 2022089, 2010000, 2022180, 2022178, 2100002, 2102006, 2100002, 2100007);
	var goodEqWeap = new Array(1432039, 1432007, 1432040, 1432045, 1432018, 1432011, 1432030, 1442034, 1442020, 1442019, 1442045, 1442044, 1382053, 1382007, 1382034, 1382024, 1382056,
						1382008, 1382016, 1382035, 1382037, 1412018, 1412007, 1412019, 1412027, 1412008, 1412025, 1412032, 1412009, 1412010, 1412021, 1422027, 1422013, 1422022, 1422010, 
						1422029, 1422009, 1422005, 1422025, 1402037, 1402035, 1402016, 1402034, 1402004, 1402012, 1402039, 1372010, 1372016, 1372008, 1372015, 1372033, 1372025, 1452017,
						1452019, 1452020, 1452014, 1452012, 1452052, 1472028, 1472031, 1472062, 1472053, 1472033, 1462017, 1462015, 1462021, 1462013, 1332069, 1332072, 1332026, 1332051,
						1332052, 1312030, 1312015, 1312010, 1312004, 1312016, 1322045, 1322059, 1322020, 1322019, 1322029, 4001013
						);
	var Rare = new Array(1492037, 1452071, 1442078, 1472086, 1402062, 1382068);
	var rand = Math.floor(Math.random() * 100)+(asked.length*2);
	var curArray;
	if (rand < 20) {
		curArray = junk;
		hasQuant = true;
	} else if (rand >= 20 && rand <= 40) {
		curArray = junkWeap;
	} else if (rand > 40 && rand <= 60) {
		curArray = useable;
		hasQuant = true;
	} else if (rand > 60 && rand <= 80) {
		curArray = goodEqWeap;
	} else if (rand > 80 && rand <= 95) {
		curArray = goodEqWeap;
	} else {
		curArray = Rare;
	}
	cm.addRandomItem(curArray[Math.floor(Math.random() * curArray.length)]);
}