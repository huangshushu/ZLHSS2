var Message = new Array(
    "You can earn Cash by killing monsters, achievements and Mu Lung Dojo.",
    "Use @help command for the list of player command you can use.",
    "MapleLeafs can be used to make Maple Items (lv35,43,64,77) or traded for Experience at Cody NPC in FreeMarket.",
    "Please do not use foul language, harass or scam other players. We would like to keep this community clean & friendly.",
    "Exclusive Warpback system for all bosses including BossPartyQuest!",
    "1 billion mesos can be traded for Golden Leaf from @npc.",
    "Vote at our website and accumulate points to get special items!",
    "Gather your friends and enjoy the fun of our Party Quests!",
    "Please report any bugs/glitches at our forum.",
    "Use @ea if you cant speak to a NPC.",
    "Go to the Universal Shop to purchase summoning rocks/magic rocks/all cure potions and elixirs, magnifying glasses.",
    "Make a party with your friends and conquer Mulung Dojo! Take down the bosses and receive points to exchange for belts.",
    "Use @check to check for points, cash, and voting points!",
    "Check out @npc to get to many town/monster maps!",
    "We have full cash shop working! Purchase cash items to create your unique character look!",
    "Click on our PlayerNPCs to view your speedrun at bosses!",
    "Peanut Machines available when you join in our events!",
    "Events like Olaola/Maple Fitness/Snowball/Coconut Harvest will be hosted by GMs.",
    "Trade rare item for cash at the rare item seller in Free Market .",
    "There will be Channel limit for certain bosses. You can only fight the bosses in the stated channel.",
    "Now, there will be a random gain of cash when you kill a monster!",
    "Friendship rings/friendship shirt/couple rings/couples shirt are working! ",
    "Gather your guildmates and try out the Guild Quest!",
    "Look for Mar the Fairy at Ellinia to evolve or revive your pet.",
    "You can purchase your respective mounts at Monster Rider Shop accessed by @npc.",
    "Please report any bugs you are facing immediately in the forums!",
    "15% and 65% scrolls can be created by Inkwell NPC.");

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 900000);
}

function cancelSchedule() {
	setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[" + em.getChannelServer().getServerName() + "Tip] " + Message[Math.floor(Math.random() * Message.length)]);
}