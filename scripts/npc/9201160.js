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
    startChat(type, selection);
}

function startChat(type, selection)
{
    if (chat == 0)
        cm.sendNext("This is OS4... I repeat, this is OS4... Do you copy? I wonder if\r\nthis walkie-talkie works. I dropped it in the toilet two hours ago\r\nand it's... Oh, am I on? Hey! Adventurer! Have you ever battled\r\nboss monsters? We've been working on an experimental Zakum\r\nclone. Thanks to the amazing technology of OS4, you can make\r\nZakum your punching bag as many times as you want!");
    else if (chat == 1)
        cm.sendNextPrev("If you're willing to help, I can use our mega-secret teleporterator\r\nto warp you straight to the OS4 labs. I'll even give you a Hyper\r\nTeleport Rock that'll let you go anywhere you want!");
    else if (chat == 2)
        cm.sendYesNo("You think you could spare yourself for some real live combat\r\ntesting?");
    else if (chat == 3) {
        cm.useItem(2022939);
        cm.useItem(2022940);
        cm.saveReturnLocation("PINK_ZAKUM");
        cm.warp(689010000);
        cm.getPlayer().dropMessage(-1, "You will be moved to OS4 Lab shortly, Please get ready.");
        cm.getPlayer().dropMessage(5, "Work together and defeat Pink Zakum!");
        cm.dispose();
    }
}