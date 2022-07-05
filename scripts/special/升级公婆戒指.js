function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
        status--;
    }
    if (status == 0) {
        var txt = "#d在我这里你可以选择你的#b<#v1112446##z1112446#>#d进行随机强化升级\r\n";
        txt += "#d每次强化会随机增加#r0-5点四维#d，#r0-5点双攻#d，#r5-15点hp/mp#d\r\n";
        txt += "#d每次强化消耗#r500点券#d，每日上限#r50次\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        var txt = "";
        for (var i = 0; i < 96; i++) {
            var eq = cm.getInventory(1).getItem(i);
            if (eq != null && eq.getItemId() == 1112446) {
                txt += "#d#L"+i+"#[ 栏位 "+i+" ]#v"+eq.getItemId()+"##z"+eq.getItemId()+"#\r\n";
            }
        }
        if (txt == "") {
            cm.sendOk("很抱歉，你没有可用于强化的#v1112446#");
            cm.dispose();
            return;
        } else {
            cm.sendSimple("#d请选择你想要强化的装备：\r\n" + txt);
        }
    } else if (status == 2) {
        if (cm.getPotion(1) < 500) {
            cm.sendOk("点券不足");
            cm.dispose();
            return;
        } else if (cm.getBosslogManager().getBossLog("强化公婆戒指", cm.getPlayer()) >= 50) {
            cm.sendOk("今日已经强化50次了，明天再来吧");
            cm.dispose();
            return;
        }
        eq = cm.getInventory(1).getItem(selection);
        eq.setStr(eq.getStr() + randomNum(0, 5));
        eq.setDex(eq.getDex() + randomNum(0, 5));
        eq.setInt(eq.getInt() + randomNum(0, 5));
        eq.setLuk(eq.getLuk() + randomNum(0, 5));
        eq.setWatk(eq.getWatk() + randomNum(0, 5));
        eq.setMatk(eq.getMatk() + randomNum(0, 5));
        eq.setHp(eq.getHp() + randomNum(5, 15));
        eq.setMp(eq.getMp() + randomNum(5, 15));
        if (eq.getStr() > 1000) {
            eq.setStr(1000);
        }
        if (eq.getDex() > 1000) {
            eq.setDex(1000);
        }
        if (eq.getInt() > 1000) {
            eq.setInt(1000);
        }
        if (eq.getLuk() > 1000) {
            eq.setLuk(1000);
        }
        if (eq.getWatk() > 500) {
            eq.setWatk(500);
        }
        if (eq.getMatk() > 500) {
            eq.setMatk(500);
        }
        if (eq.getHp() > 2000) {
            eq.setHp(2000);
        }
        if (eq.getMp() > 2000) {
            eq.setMp(2000);
        }
        
        var eq2 = eq.copy();
        cm.setLock(eq2);
        cm.gainPotion(1, -500)
        cm.getBosslogManager().setBossLog("强化公婆戒指", cm.getPlayer())
        cm.removeSlot(1, selection, 1);
        cm.addFromDrop(eq2);
        cm.sendOk("强化成功");
        cm.dispose();
    }
}

function randomNum(minNum, maxNum) {
    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
}