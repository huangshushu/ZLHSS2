/*
环任务之开锁小游戏

作者：输了爱
日期：2011年1月22日

*/


var passwords = new Array(4);
var str;
var selectn1;
var selectn2;
var selectn3;
var selectn4;
var selectlog;
var postrue = 0;
var seltrue = 0;
var stars = "";
var unlock =10;
var unlocklog = new Array("");
var str_unlocklog = "";

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1){
	  cm.dispose();
	}else{
	  if(mode == 1)
		a++;
	  else
		a = -1;
	if (a == -1){
      cm.dispose();
	  
    }else if (a == 0){
      cm.sendYesNo("\t\t\t\t\t- 开锁小游戏 -\r\n\r\n　　密码锁由四个不重复的数字组成，在对话框内依次选择正确的数字，密码锁就会被打开，密码锁的密码是由0~9所组成，并且四个数字之间不会重复。\r\n\r\n#r#e任务简介：#n#k\r\n　　开始游戏后NPC随机生成密码，玩家会获得9次猜对这组密码的机会，玩家按照提示依次选择4个数字，组成四位数的密码，确认之后会得到提示：\r\n\r\n#r★#k表示有多少个答案，数字正确且位置正确\r\n#r☆#k表示有多少个答案，数字正确但位置不正确\r\n\r\n#r#e注意事项：#n\r\n　如关闭了NPC对话，那么再次点击NPC开始游戏密码会改变。");
     
      for (var i = 0; i<4; i++) 
      {
        passwords[i] = Math.floor(Math.random()*10);
        for (var j = 0; j < i; j++) {
          if (passwords[j] == passwords[i]) {
            i--;
            break;
          }
        }
      }
	  }else if (a == 1){
		  var fa = "";
		  
      str = fa+"请选择第一位数字\r\n\r\n";
      postrue = seltrue = 0;
      for (var i = 0; i < 10; i++) {
        str += "#L" + i + "#" + i;
      }
      str += "#l\r\n\r\n\r\n已选择的数字：\r\n#n剩余次数：#r" + unlock + "#k\r\n记录：\r\n";
      cm.sendSimple(str + str_unlocklog);
	  }else if (a == 2){
      str = "请选择第二位数字\r\n\r\n";
      selectn1 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n已选择的数字：#r" + selectn1;
      selectlog += "\r\n#k剩余次数：#r" + unlock + "#k\r\n记录：\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 3){
      str = "请选择第三位数字\r\n\r\n";
      selectn2 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1 && i != selectn2)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n已选择的数字：#r" + selectn1 + " " + selectn2;
      selectlog += "\r\n#k剩余次数：#r" + unlock + "#k\r\n记录：\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 4){
      str = "请选择第四位数字\r\n\r\n";
      selectn3 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1 && i != selectn2 && i != selectn3)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n已选择的数字：#r" + selectn1 + " " + selectn2 + " " + selectn3;
      selectlog += "\r\n#k剩余次数：#r" + unlock + "#k\r\n记录：\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 5){
      selectn4 = selection;
      selectlog = "\t\t\t\t确定以这组数字开锁么? #r\r\n\r\n\t\t\t\t\t   " + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4;
      selectlog += "\r\n#k剩余次数：#r" + unlock + "#k\r\n记录：\r\n";
      cm.sendYesNo(selectlog + str_unlocklog);
    }else if (a == 6){
      for (var i=0; i<4; i++){
        if (passwords[i] == selectn1) {
          if (i == 0)
            postrue += 1;
          else
            seltrue += 1;
        } else if (passwords[i] == selectn2) {
          if (i == 1)
            postrue += 1;
          else
            seltrue += 1;
        } else if (passwords[i] == selectn3) {
          if (i == 2)
            postrue += 1;
          else
            seltrue += 1;
        } else if (passwords[i] == selectn4) {
          if (i == 3)
            postrue += 1;
          else
            seltrue += 1;
        }     
      }
      
      unlocklog.push("" + selectn1 + selectn2 + selectn3 + selectn4 + "　#r" + postrue + "★  " + seltrue + "☆#k\r\n");
      str_unlocklog = "";
      for (var i = 0; i < unlocklog.length; i++)
        str_unlocklog += unlocklog[i];
      if (postrue == 4) {
        cm.sendNext("恭喜你,开锁成功!奖励你#r500W点卷#k\r\n\r\n您的记录：\r\n" + str_unlocklog);
		cm.worldSpouseMessage(0x27, "『解锁游戏』" + " : " + "[" + cm.getChar().getName() + "]成功解锁，获得了500万点卷");
        cm.gainNX(1, 5000000);
      } else {
        unlock -= 1;
        if (unlock > 0)
          a = 0;
        cm.sendNext("真遗憾,开锁失败!");
      }
    }else if (a == 7){
      if (postrue != 4) {
        cm.sendOk("您的开锁机会已经用完了~\r\n\r\n正确密码为：" + passwords + "\r\n您的记录：\r\n" + str_unlocklog);
        cm.dispose();
      } else {
        cm.sendOk("欢迎您再来挑战~");
        cm.dispose();
      }
	  }//status
	}
}