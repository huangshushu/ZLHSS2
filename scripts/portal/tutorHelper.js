function enter(pi) {
    if (pi.getQuestStatus(20021) == 0) {
	pi.playerSummonHint(true);
	pi.summonMsg("欢迎来到圣地！我会作为你的指导！ 我会在这里回答你的问题，并指导你，直到你达到10级，并成为骑士在训练。 如果您有任何问题，请双击我!");
//	pi.forceCompleteQuest(20100);
	pi.forceCompleteQuest(20021);
    }
}