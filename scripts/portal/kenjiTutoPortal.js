/* RED 1st impact
 Explorer tut
 Made by Pungin
 */
function enter(pi) {
    if (pi.getQuestStatus(57101) != 1) {
        pi.topMsg("先與武田信玄對話吧。");
    } else {
        pi.forceCompleteQuest(57101);
        pi.warp(807100012, 0);
    }
}
