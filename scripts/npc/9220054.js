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
          
			text += "你好我是阿曼达，把这个交给索尼娅吧，证明我还活着！请叫他不要担心我！\r\n\r\n"

text += "阿曼达叫我把这个#v4033493#交给索尼娅让我传话给她。\r\n\r\n"
        
            text += "#L1#好的，我一定做到！#l\r\n\r\n\r\n"//3
       
    
            cm.sendSimple(text);
        } else if (selection == 1) { 

    if (cm.getChar().getLevel() < 120) {
                cm.sendOk("很抱歉，您需要到120级，你的等级不够不足已接受此任务.");
                cm.dispose();
          




    

        }













else if(cm.getPlayer().getOneTimeLog('amanda') >= 1)
{
            cm.sendOk("谢谢你，你已经做的足够多了！");
            cm.dispose();
}
else
{
 
           
            cm.getPlayer().setOneTimeLog('amanda');
            cm.gainItem(4033493 ,1);


            cm.givePartyExp(6000000);
            cm.sendOk("你真的到了，这是你应该得到的！");
 cm.dispose();
}
        } 
    }
}

