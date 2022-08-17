/* 
 * 菜菜制作 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 * 自由市场累计点数 抢物品
 */
var mapid = 101050000; //进行地图
var map;
var setupTask;
var CharList = new Array();

var undefinedItem = 4000463;

var ItemList = null;

var PosList = Array(
	Array(528, 4, "自由市场1洞"),
	Array(681, 4, "自由市场2洞"),
	Array(825, 4, "自由市场3洞"),
	Array(1024, 4, "自由市场4洞"),
	Array(1195, 4, "自由市场5洞"),
	Array(1349, 4, "自由市场6洞")
);

var dropTimes = 0;

var maxDropTimes = -1;

var dropQuantity = 6;

function init() {
    eim = em.newInstance("ZiyouPaoItem");
    map = eim.getMapInstance(mapid);
    em.setProperty("state", "0");
    em.setProperty("dropstart", "false");
    dropTimes = 0;
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function startEvent() {
    ItemList = em.getObjectProperty("_itemList");
    maxDropTimes = em.getProperty("_maxDropTimes");
    dropQuantity = em.getProperty("_dropQuantity");
    em.setProperty("state", "0"); //还原
    em.setProperty("dropstart", "true");
    setupTask = em.schedule("dropAction", 1000 * 30 * 1);
    em.broadcastServerMsg("[神秘能量] 还有30秒钟就会在1线自由市场的随机地点暴出有趣的道具，你们准备好了吗？！");
    em.broadcastServerMsg(5122015, "还有30秒钟就会在1线自由市场的随机地点暴出有趣的道具，你们准备好了吗？！", true);
    if (em.getChannelServer() != null) { //防止关端的时候一大堆错
        var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
    }
    if (allPlayers != null) {
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) { //循环每一个玩家
            var player = allPlayers.next();
        }
    }
}

function dropAction() {
    if (em.getChannelServer().getChannel() == 1) { //只在第1频道进行		
        if (dropTimes < maxDropTimes) {
            dropTimes++;
            var randPos = Math.floor(Math.random() * PosList.length); //得到随机坐标
            var randItemid = Math.floor(Math.random() * ItemList.length); //得到随机道具
            var chance = Math.floor(Math.random() * 999999);
            var finalItemList = new Array();
            for (var i in ItemList) {
                if (chance < ItemList[i][1])
                    finalItemList.push(ItemList[i]);

            }
            if (finalItemList.length >= 0) {
                for (var i = 0; i < dropQuantity; i++) {
                    var finalItem = finalItemList[Math.floor(Math.random() * finalItemList.length)];
                    map.spawnAutoDrop(finalItem[0], new java.awt.Point(PosList[randPos][0] - Math.floor(dropQuantity / 2) * 24 + 24 * i, PosList[randPos][1]));
                }
            } else {
                map.spawnAutoDrop(undefinedItem, new java.awt.Point(PosList[randPos][0], PosList[randPos][1]));
            }
            em.broadcastServerMsg("[神秘能量] 在1线的" + PosList[randPos][2] + "门口好像出现了什么东西。");
            var text = "在1线的" + PosList[randPos][2] + "门口好像出现了什么东西。";
            if (dropTimes == maxDropTimes) {
                text = "最后一件神秘宝贝，" + text;
            }
            em.broadcastServerMsg(5122015, text, true);
            if (dropTimes != maxDropTimes) {
                em.broadcastServerMsg("[神秘能量] 还有30秒钟就会在1线自由市场的随机地点落下有趣的道具，你们准备好了吗？！");
                if (em.getChannelServer() != null) { //防止关端的时候一大堆错
                    var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
                }
                if (allPlayers != null) {
                    allPlayers = allPlayers.iterator();
                    while (allPlayers.hasNext()) { //循环每一个玩家
                        var player = allPlayers.next();
                    }
                }
                setupTask = em.schedule("dropAction", 1000 * 30 * 1);
            } else {
                dropTimes = 0;
                em.setProperty("dropstart", "false");
                em.broadcastServerMsg(5122015, "现在活动结束啦！快点继续收集道具进行下一次的活动吧！！", true);
                em.broadcastServerMsg("[神秘能量] 现在活动结束啦！快点继续收集道具进行下一次的活动吧！！");
            }
        } else {
            dropTimes = 0;
        }

    }
}
