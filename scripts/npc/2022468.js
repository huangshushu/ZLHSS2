var status = 0;
var 道具 = 4000463;
var 金币 = 500000000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("好的, 请告诉我你确定需要 #b飞升#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("如果等到达到“200级”就可以在我这里进行飞升哦需要 国庆币50个  金币2E~  飞升获得 属性点100点 神圣飞升耳环全属性20 攻魔20"); 
        }else if (status == 1) {
        if(cm.getChar().getLevel() <= 199){
        cm.sendOk("很抱歉，您需要200级，才可以投胎转世.");
        cm.dispose();
       }else if (cm.haveItem(道具, 50) == false){ 
        cm.sendOk("你没有带来#b#v"+道具+"##k "); 
        cm.dispose(); 
        }else if (cm.getMeso() <= 金币) {
        cm.sendOk("你没有"+金币+"金币,我不能帮你的忙哦."); 
        cm.dispose();
        }else{
        cm.sendOk("#b您做得非常好#k, 你现在确定要#e飞升#n.吗？");
        }
        }else if (status == 2) {
        cm.getChar().setLevel(101);
		cm.getPlayer().fakeRelog();
        cm.gainMeso(-200000000);//扣除金币
        cm.gainItem(4000463,-50); //扣除道具
		cm.gainSp(100)
		cm.gainItem(1032095,20,20,20,20,0,0,20,20,20,0,0,0,0,0);
        cm.sendNext("飞升成功。");
        cm.dispose();
        }            
    }
 }
 
