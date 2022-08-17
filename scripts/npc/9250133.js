var chat;

function start()
{
    chat = -1;
    action(1, 0, 0);
}

function action(action, type, selection)
{
    if (action == -1 || chat == 0 && action == -1) {
        cm.dispose();
        return;
    }
    action == 1 ? chat++ : chat--;
    startChat(cm.getMapId() == 689010000 ? 1 : cm.getMapId() == 689012000 ? 2 : cm.getMapId() == 689012001 ? 3 : type, selection);
}

function startChat(type, selection)
{
    if (type == 1) {
        if (chat == 0)
            cm.sendYesNo("Would you like to go out?");
        else if (chat == 1) {
            cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
            cm.getPlayer().dispelBuff(2022939);
            cm.getPlayer().dispelBuff(2022940);
            cm.dispose();
        }
    } else if (type == 2) {
        if (chat == 0)
            cm.sendSimple("I've prepared a gift box which may contain these items:\r\n#i1003439##i3010313#.\r\n#r This event will be available untill 7/24; 3 times a day, everyday,\r\nat 6:30pm, 7:30pm, and 8:30pm. Don't forget to log-in and beat up\r\nthat Pink Zakum!\r\n\r\n#L0##bWow, that was incredible! I'll just scoot along now.#k#l\r\n#L1##bI don't need this. I want to leave here.#k#l");
        else if (chat == 1) {
            switch (selection) {
                case 0:
                    cm.useItem(2022939);
                    cm.useItem(2022940);
                    cm.gainItem(2028091, 1);
                    cm.gainItem(2323001, 1);
                case 1:
                    cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
                    cm.dispose();
                    break;
            }
        }
    } else if (type == 3) {
        if (chat == 0)
            cm.sendSimple(cm.getEffect(2022939) + "I've prepared a gift box which may contain these items:\r\n#i1003439##i3010313#.\r\n#r This event will be available untill 7/24; 3 times a day, everyday,\r\nat 6:30pm, 7:30pm, and 8:30pm. Don't forget to log-in and beat up\r\nthat Pink Zakum!\r\n\r\n#L0##bWow, that was incredible! I'll just scoot along now.#k#l\r\n#L1##bI don't need this. I want to leave here.#k#l");
        else if (chat == 1)
            cm.sendOk("Are you trying to cheat me? You didn't kill zakum!");
        else if (chat == 2) {
            cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
            cm.dispose();
        }
    }
}