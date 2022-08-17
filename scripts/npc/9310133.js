var status = 0;
var totAp = 0;
var statup;
var p;
var needLevel = 250;//转身等级
var count = 1;
var 次数 =0;
var current;
var retap = 0;
var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";

var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
          
			text += "你好这里是未来新叶城，我是这里的金博士\r\n\r\n#k相信你也看到了，在不久的未来这里将成为一片废墟，但是人们还在抵抗着，与外星人的斗争。可能离战争结束已经不远了，地下资源已经被外星人钻机快控制岌岌可危的地步，你拿着这个机械装置#v4001696#去找在外星人占领本部的村庄市长并交给他！然后必须打倒钻机保护地球！\r\n\r\n提示：机械装置只能每次领取一个使用完后再来领取！\r\n\r\n"
        
            text += "#L1#好的，我接受你的邀请#l\r\n\r\n\r\n"//3
       
    
            cm.sendSimple(text);
        } else if (selection == 1) { 

    if (cm.getChar().getLevel() < 160) {
                cm.sendOk("很抱歉，您需要到160级，你的等级不够不足已接受此任务.");
                cm.dispose();
          




    

        }














else if(cm.getBossLog("jinboshi") >2)
{
            cm.sendOk("每天只能领取3次机械装置，明天再来吧！");
            cm.dispose();
}
else
{
 
           
            cm.setBossLog("jinboshi");
            cm.gainItem(4001696 ,1);
            //cm.givePartyExp(100000000);
            cm.sendOk("拿去交给村庄市长，他会安排你下一步任务！");
 cm.dispose();
}
        } 
    }
}

