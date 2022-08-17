var status = -1;
function start() {
    if((cm.getPlayer().getLevel() < 19 || cm.getPlayer().getLevel() > 255) && !cm.getPlayer().isGM()){
        cm.sendNext("你如果要参加竞技场，你的等级必须在20级~29级。");
        cm.dispose();
        return;
    }
    action(1,0,0);
}

function action(mode, type, selection){
    status++;
    if (status == 4){
        cm.saveLocation("ARIANT");
        cm.dispose();
    }
    if(mode != 1){
        if(mode == 0 && type == 0)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0)//
        cm.sendNext("你好，我是这里的勘探团长。前几天我们在山顶上了一个神秘洞穴。正当我们要进去看看到底放生了什么...");
    else if (status == 1)
        cm.sendNextPrev("但是奇怪的事情发生了，在这山中神秘的地谷中发出一些震荡，导致我们的勘探止步，因此好多人回到了营地，很少有人敢去那里查看到底发生了什么情况。~~");
    else if (status == 2)
        cm.sendSimple("但是凡事总有例外不是吗，有一位探险家冒着危险去查看到底怎么一回事，虽然他不是我们勘探队的成员的，但是这阻止不了他的探险热情。。");
    else if (status == 3)
        cm.sendNext("他好像叫吉米对吧..上次在山下我们会过面，你去调查一下群虫栖息地3，可能吉米也在哪儿，如果你想揭开这山中的秘密震荡到底是怎么回事，得去找到他，他可能知道这震荡的真相!!");
}