var status = -1;

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("#b你好 #k#h  ##e  #b我是排名系统.#k\r\n#L0##r公会排名\n\#l\r\n#L1##d玩家排名#l\r\n#L3##b职业排名#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.displayGuildRanks();
            cm.dispose();
        } else if (selection == 1) {
            cm.showlvl();
            cm.dispose();
        } else if (selection == 2) {
            cm.showmeso();
            cm.dispose();
        } else if (selection == 3) {
            cm.sendSimple("#L1##d剑士#k排名\r\n#L2##d法师#k排名\r\n#L3##b弓箭手#k排名\r\n#L4##b盗贼#k排名\r\n#L5##r海盗#k排名\r\n#L6##r狂狼勇士#k排名\r\n#L7##r皇家骑士团#k排名\r\n#L8##r反抗军#k排名\r\n#L8##r龙神法师#k排名\r\n");
        }
    } else if (status == 2) {
        cm.sendNext(cm.ShowJobRank(selection));
        cm.dispose();
    } else {
        cm.dispose();
    }
}
