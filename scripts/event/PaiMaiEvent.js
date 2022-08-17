/*
 笔芯制作★风云工作室所有
 完成时间：2014年8月10日 15:31:26
 脚本功能：拍卖系统后台控制
 */





var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var setupTask;
var PaiMaiIdOnly;
var PaiMaiIdOnly1;
var itemName;


var MaxPrice = 0;
var MaxPlayer;
var MaxpId = 0;



function init() {
    scheduleNew();
}

function scheduleNew() {


    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 1;//5分钟检查一次时间
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function startEvent() {
    scheduleNew();
     if (hour == 23) {//每日23点执行刷新
    var ItemDataBase = em.getConnection().prepareStatement("SELECT * FROM PaiMaiNpc WHERE bought = 0 LIMIT 1").executeQuery(); //查询拍卖数据库
    var PaiMaiDataBase = em.getConnection().prepareStatement("SELECT * FROM paimainpcrecord").executeQuery();//得到记录数据库
    var UpDateData = em.getConnection().prepareStatement("update PaiMaiNpc set bought=? where bought=0")
    //var UpDateMax = em.getConnection().prepareStatement("update paimainpcrecord set status=? where status=0")
    var i = 0;
    while (ItemDataBase.next()) {
        PaiMaiIdOnly = ItemDataBase.getString("PaiMaiId");
        itemName = ItemDataBase.getString("itemName");
        UpDateData.setString(1, 1)
        UpDateData.executeUpdate();//更新;
        //完成兑换后，直接在NPC将这个字段改成角色ID
    }//每次拍卖都只能1个 所以PaiMaiIdOnly不设置为数组

    //var RecordMax = em.getConnection().prepareStatement("select PaiMaiId,charid,CharName,Price,Status from PaiMaiNpcRecord where Price=(select max(Price) from PaiMaiNpcRecord where status = 0 and PaiMaiId = " + PaiMaiIdOnly + ")").executeQuery(); //取最大
    var RankDataBase = em.getConnection().prepareStatement("SELECT PaiMaiId,charid,CharName,Price,Status FROM PaiMaiNpcRecord ORDER BY Price DESC LIMIT 1").executeQuery();
    var UpDateMax = em.getConnection().prepareStatement("update paimainpcrecord set status=? where status=0")
    while (RankDataBase.next()) {//获取最多角色讯息
        MaxPlayer = RankDataBase.getString("CharName");
        MaxPrice = RankDataBase.getString("Price");
        UpDateMax.setString(1, 1)
        UpDateMax.executeUpdate();//更新;
        i++;
    }
    var time = parseInt(PaiMaiIdOnly) + 1;
    if (i != 0) {
        em.broadcastServerMsg(5120025, "[拍卖系统] 第 （" + PaiMaiIdOnly + "） 期拍卖已经结束。 \r\n第 （" + time + "） 期现在开始！", true);
        em.broadcastServerMsg(4, "[拍卖小快报] 第" + PaiMaiIdOnly + "期拍卖已经结束，本期拍卖的道具为：" + itemName + "。在本期拍卖中，玩家（" + MaxPlayer + "）以全服务器最高的价格（" + MaxPrice + "）成功竞拍了本期的道具。大家一起来祝贺（他/她）吧！", false);
        em.broadcastServerMsg(6, "[拍卖小快报] 第" + PaiMaiIdOnly + "期拍卖已经结束，本期拍卖的道具为：" + itemName + "。在本期拍卖中，玩家（" + MaxPlayer + "）以全服务器最高的价格（" + MaxPrice + "）成功竞拍了本期的道具。大家一起来祝贺（他/她）吧！", false);
    }
    // - 0 正在拍卖
    // - 1 拍卖结束，清算结算
    // - CharId 角色ID归属已经拍卖成功
    }
}