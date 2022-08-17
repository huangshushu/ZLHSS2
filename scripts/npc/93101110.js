importPackage(net.sf.cherry.client);

var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("天气很好哦~~如果你改变想法记的随时来找我。祝你好运！");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("嗨，我是 #b管理员#k 我可以帮助你快速转职哦~~！");
        } else if (status == 1) {
            if(cm.getJob() >= 2000){
                cm.sendNext("哇~~战神战起来！新职业哦~我很高兴为你服务哦！！！");
                status = 163;
                return;
            } else if (cm.getLevel() < 30) {
                cm.sendNext("怎么样？冒险还算顺利吧。有努力就有回报。当然这一切都不是容易的。当你到达 #r[30级]#k 的时候就可以进行#b[第二次转职]#k到时别忘记来找我哦！");
                status = 98;
            } else if (cm.getLevel() < 70) {
                cm.sendNext("怎么样？冒险还算顺利吧。有努力就有回报。当然这一切都不是容易的。当你到达 #r[70级]#k 的时候就可以进行#b[第三次转职]#k到时别忘记来找我哦！");
                status = 98;
            } else if (cm.getLevel() < 120) {
                cm.sendNext("怎么样？冒险还算顺利吧。有努力就有回报。当然这一切都不是容易的。当你到达 #r[120级]#k 的时候就可以进行#b[第四次转职]#k到时别忘记来找我哦！");
                status = 98;
            } else if (cm.getLevel() < 255) {
                cm.sendNext("了不起，你已经完成了所有的转职！\r\n");
                status = 98;
                cm.dispose();
            } else {
                cm.dispose();
            }
        } else if (status == 164) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.sendYesNo("战神战起来！\r\n看起来你还是一个战童,您确定要进行第一次转职吗？");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30) {
                cm.sendYesNo("战神战起来！您真的确定要进行第二次转职了吗？");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                cm.sendYesNo("战神战起来！您真的确定要进行第三次转职了吗？");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120) {
                cm.sendYesNo("战神战起来！您真的确定要进行第四次转职了吗？");
            } else if(cm.getJob() == 2112 && cm.getLevel() >120) {
                cm.sendOk("你已经完成了所有的转职工作。继续加油吧！！");
            } else {
                cm.sendOk("按照您目前的条件，我还不能为您服务哦！加油吧！");
                cm.dispose();
            }
        } else if (status == 165) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.changeJob(2100);
                //cm.gainItem(1142129,1);
                //cm.gainItem(1442077,1);
                //cm.gainItem(2000022,50);
                //cm.gainItem(2000023,50);
            cm.teachSkill(21000000,0,10);//矛连击强化
            cm.teachSkill(21000002,0,20);//双重重击
            cm.teachSkill(21001001,0,15);//战斗步伐
            cm.teachSkill(21001003,0,20);//快速矛
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
                cm.dispose();
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30){
                cm.changeJob(2110);
                //cm.gainItem(1142130,1);
                //cm.gainItem(1442078,1);
                cm.teachSkill(21100000,0,20);
                cm.teachSkill(21100002,0,20);
                cm.teachSkill(21100004,0,20);
                cm.teachSkill(21100005,0,20);
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
cm.喇叭(3, "恭喜[" + cm.getPlayer().getName() + "]成功2转，哈哈，我要起飞了！");
                cm.dispose();
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                //cm.gainItem(1142131,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(2111);
                cm.teachSkill(21110002,0,20);
cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功完成3转，你已经是一名名副其实的大腿了！");
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
                cm.dispose();
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120){
                //cm.gainItem(1142132,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(2112);
                cm.teachSkill(21121000,0,10);
                cm.teachSkill(21120004,0,10);
                cm.teachSkill(21120005,0,10);
                cm.teachSkill(21120006,0,10);
                cm.teachSkill(21120007,0,10);
cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功完成四转，你已经快接近于无敌了！");
cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功完成四转，为什么你那么强？");
cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功完成四转，可否让我抱一下你的大腿！！");
                cm.sendOk("转职成功！希望您以后的冒险之路顺利！");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }  

    }
}
