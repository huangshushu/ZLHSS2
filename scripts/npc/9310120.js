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
          
			text += "你好这里是未来新叶城，我是这里的秘书市长，哦，是金博士让你来的吧，我们正在秘密研究打败外星人的方法，自从外星人来到这里，这里变成了一片废墟，到处浪迹，不过人们还是非常有信心度过这次难关的！在这座城市被占领的深处，有一个巨大秘密的钻机正在向地下的深处钻去，他们可能在找某些地球上的稀有资源，但是我们绝不能让他们得逞不是吗？我现在命令你去被占领的深处看看并把最钻机的通讯数据#v4033255#拿回来研究看看他们在找地球上的什么稀有资源.\r\n完成任务获得#v2040807#x2\r\n\r\n"
        
            text += "#L1#好的，我接受你的此项任务#l\r\n\r\n\r\n"//3
       
    
            cm.sendSimple(text);
        } else if (selection == 1) { 

    if (cm.getChar().getLevel() < 140) {
                cm.sendOk("很抱歉，您需要到140级，你的等级不够不足已接受此任务.");
                cm.dispose();
          




    

 }

			 else if (cm.
haveItem
(4033255) < 1 ) { 
				cm.sendOk("你没有获得钻机的通讯数据！");
				cm.dispose();




}









else if(cm.getPlayer().getOneTimeLog('mishu') >= 1 )
{
            cm.sendOk("你不能重复此任务！");
            cm.dispose();
}
else
{
 
           
            cm.getPlayer().setOneTimeLog('mishu');
            cm.gainItem(4033255 ,-1);
            cm.gainItem(2040807 ,2);
            cm.givePartyExp(520000000);   
            cm.sendOk("你已经是我们的一员了！");
 cm.dispose();
}
        } 
    }
}

