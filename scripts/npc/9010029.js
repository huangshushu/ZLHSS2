var news = [
[ //Game
["MapleCrescent Game Update 4", "May 22th, 2013", "\t\t1. When you're stuck, you may put \'disconnect\' in your login\r\n\t\tpassword to disconnect all of your characters.\r\n\t\t2. @CashDrop command to drop cash items.\r\n\t\t3. @CallGM command to ask GMs for help."],
["MapleCrescent Game Update 3", "May 21th, 2013", "\t\t1. Cygnus Knights job advancements have been fixed.\r\n\t\t2. Added new player and gm commands.\r\n\t\t3. Added more options to Cash/Vote/Event points NPC."],
["MapleCrescent Game Update 2", "May 18th, 2013", "\t\t1. Evan tutorial has been fixed a little bit more.\r\n\t\t2. Added new player and gm commands.\r\n\t\t3. Fixed a few skills."],
["MapleCrescent Game Update 1", "May 17th, 2013", "\t- Added #i1002419##z1002419# to the Reward UI on character creation.\r\n\t- The Mark of the Beta will have the following stats:\r\n\t\t1. All Stats +50\r\n\t\t2. Attack & Magic +30\r\n\t\t3. Speed +40\r\n\t\t4. Jump +20\r\n\t\t5. Potential Line 1: 12% Total Damage\r\n\t\t6. Potential Line 2: 20% All Stats\r\n\t\t7. Potential Line 3: 40% Boss Damage\r\n\t- Phantom tutorial has been fixed to work better."],
["Rewards #fEffect/BasicEff.img/MainNotice/userReward/Default/0#", "May 11th, 2013", "\tThe Reward UI is now fixed and working.\r\n\tRewards will be obtained on character creation, and level up."]
],
[ //Forums
["MapleCrescent Forums Update 3", "May 22th, 2013", "\t\t1. There are new Forum Rules, read them carefully."],
["MapleCrescent Forums Update 2", "May 21th, 2013", "\t\t1. Changed usergroups colours.\r\n\t\t2. Post picture limit has been changed from 4 to 20."],
["MapleCrescent Forums Update 1", "May 18th, 2013", "\t\t1. Changed theme color.\r\n\t\t2. Added like system."]
]
];
var search = true;
var sel;

function start() {
    cm.sendSimple("Hello! Would you like to hear about the new Events, and Updates?\r\n#L0#View Game Updates#l\r\n#L1#View Forums Updates#l"/* + "\r\n#L2#Search for news#l"*/);
}

function action(mode, type, selection) {
    //cm.test(search);
    if (mode != 1) {
        cm.dispose();
        return;
    }
    sel = selection;
    var selStr = "";
    if (sel == 2) {
        if (search) {
            cm.sendGetText("Enter a part of an update highlights:");
            search = false;
        } else {
            var found = searchHighlights(cm.getText());
            for (var k = 0; k < news.length; k++) {
                for (var j in found) {
                    selStr += "(" + news[k][j][1] + ")\r\n";
                    selStr += "#eUpdate Highlights: #b" + news[k][j][0] + "#k#n\r\n" + news[k][j][2] + "\r\n\r\n";
                }
            }
        }
    } else {
        search = false;
        for (var m = 0; m < news.length; m++) {
            for (var i = 0; i < news[m].length; i++) {
                if (i < 5 && m == sel) { //5 updates at a time
                    selStr += "(" + news[m][i][1] + ")\r\n";
                    selStr += "#eLast Update Highlights: #b" + news[m][i][0] + "#k#n\r\n" + news[m][i][2] + "\r\n\r\n";
                }
            }
        }
    }
    if (!search) {
        cm.sendOk(selStr);
        cm.dispose();
    }
}

function searchHighlights(highlight) {
    //cm.test(highlight);
    var result = new Array();
    for (var n = 0; n < news.length; n++) {
        for (var i = 0; i < news[n].length; i++) {
            if (news[n][i][0].contains(highlight)) {
                result.push(i);
            }
        }
    }
    //cm.test(result);
    return result;
}