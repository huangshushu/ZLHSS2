var chat;

function start()
{
    chat = -1;
    action(1, 0, 0);
}

function action(action, type, selection)
{
    if (action == -1 || chat == 0 && action == 0) {
        cm.dispose();
        return;
    }
    action == 1 ? chat++ : chat--;
    startChat(type, selection);
}

function startChat(type, selection)
{
    if (cm.getMapId() == 180000001) {
        if (chat == 0)
            cm.sendYesNo("Do you want to get out?");
        else if (chat == 1) {
            cm.warp(100000000);
            cm.dispose();
        }
    } else {
        if (chat == 0)
            cm.sendSimple("Hello, I can bring you to a map where you can drop untradable items.\r\n#L0#I want to go there#l\r\n#L1#I might come back later#l");
        else if (chat == 1) {
            switch (selection) {
                case 1:
                    cm.sendOk("Okay, see you later.");
                    cm.dispose();
                    break;
                case 0:
                    cm.sendGetText("Please enter your partner's name: \r\n");
            }
        } else if (chat == 2) {
            if (cm.getPlayerCount(180000001) < 1) {
                if (cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()) != null) {
                    if (cm.getText() != cm.getPlayer().getName()) {
                        if (cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getMapId() == cm.getMapId()) {
                            cm.warp(180000001);
                            cm.warpByName(180000001, cm.getText());
                            cm.mapChangeTimer(180000001, 100000000, 120);
                        } else {
                            cm.sendOk("You must be in the same map.");
                        }
                    } else {
                        cm.sendOk("You can't enter your name.");
                    }
                } else {
                    cm.sendOk("Player isn't in the same channel, or doesn't exists.");
                }
            } else {
                cm.sendOk("I'm sorry, but someone else is using the map.");
            }
            cm.dispose();
        }
    }
}
