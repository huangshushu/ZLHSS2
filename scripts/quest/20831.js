/* Cygnus revamp
 Noblesse tutorial
 Kizan
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.sendYesNo("飲料的口味還可以嗎？不知道合不合你的胃口。是我們貴族非常喜歡的果汁呢。..那麼要再開始訓練了嗎？這次是複習！剛才學過的東西應該沒有忘記吧？打敗3隻..#o9300730#並蒐集3個#t4000489#。");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.TutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/cygnusTutorial/4");
        qm.spawnMonster(9300730, 3);
        qm.gainItem(4000489, 3);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
