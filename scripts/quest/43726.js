/*
	鏄庢槦鏄熺悆鑷嫊閲嶈ō浠诲嫏
*/

var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}
