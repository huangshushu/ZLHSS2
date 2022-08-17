var chat;

function start() {
    chat = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == 0) //Previous/No/Delience
        chat--;
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == -1 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    startChat();
}

function startChat() {
    if (chat == 0)
        cm.sendNext("Where is this? Maple Island? But something feels wrong....");
    else
        cm.dispose();
}