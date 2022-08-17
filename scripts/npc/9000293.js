/* Care 脚本定制 游戏顾问 脚本美化 381991414 www.care-maple.com */
/* Care 脚本定制 游戏顾问 脚本美化 381991414 www.care-maple.com */
/* Care 脚本定制 游戏顾问 脚本美化 381991414 www.care-maple.com */
/* Care 脚本定制 游戏顾问 脚本美化 381991414 www.care-maple.com */
/*5122000 小熊 - 5121054 漂浮 - 5121040 苹果 - 5120161 妖魔 - 5121050 金菇 - 5121051 金菇 - 5121064 烟火 - 5121070 慈悲 - */
var BoList = Array(
    Array("BossRanmaru_HARD", "[ 困 难 ] 森 兰 丸", 5120161, "[ 困 难 ] 森兰丸"),//Event 副本名 时间 公告栏  苹果公告栏
    Array("BossMagnus_NORMAL", "[ 普 通 ] 暴君领主", 5121054, "[ 普 通 ] 暴　君"),
    Array("BossMagnus_HARD", "[ 困 难 ] 暴君领主", 5120161, "[ 困 难 ] 暴　君"),
    Array("BossRig_HARD", "[ 困 难 ] 钻机领地", 5120161, "[ 困 难 ] 钻　机"),
    Array("BeidlerPQ", "[ 困 难 ] 贝 勒 德", 5120161, "[ 困 难 ] 贝勒德"),
    Array("BossDemian_HARD", "[ 困 难 ]  戴米安 ", 5120161, "[ 困 难 ] 戴米安"),
    Array("BossBanban_CHAOS", "[ 困 难 ] 半半领地", 5120161, "[ 困 难 ] 半　半"),
    Array("BossDorothy", "[ 困 难 ] 桃 乐 丝", 5120161, "[ 困 难 ] 桃乐丝"),
    Array("BossPierre_CHAOS", "[ 困 难 ] 皮 埃 尔", 5120161, "[ 困 难 ] 皮埃尔"),
    Array("BossBelen_CHAOS", "[ 困 难 ] 贝伦领地", 5120161, "[ 困 难 ] 贝　伦"),
    Array("BossSiwu_NORMAL", "[ 普 通 ] 斯乌领地", 5120161, "[ 普 通 ] 斯　乌"),
    Array("BossSiwu_HARD", "[ 困 难 ] 斯乌领地", 5120161, "[ 困 难 ] 斯　乌"),
    Array("BossPrincessNoPQ", "[ 困 难 ] 浓姬领地", 5120161, "[ 困 难 ] 浓　姬"),
    Array("Zch", "[ 困 难 ] 龙 虎 蛇", 5120161, "[ 困 难 ] 龙虎蛇"),
    Array("BossBloody_CHAOS", "[ 困 难 ] 血腥女王", 5120161, "[ 困 难 ] 血腥王"),
    Array("Bossluxide", "[ 困 难 ] 路西德", 5120161, "[ 困 难 ] 路西德"),
    Array("UrusBOSS", "[ 困 难 ] 乌鲁斯", 5120161, "[ 困 难 ] 乌鲁斯")
);
var CareName = new Array("皮皮冒险岛", "绿色无挂服", "挑战凭实力", "异常请举报")//只能5个字符 切记;

function start() {
    var party = cm.getParty().getMembers();
    if (cm.getParty() == null) {
        cm.dispose();
        return;
    }
    if (!cm.isLeader()) {
        cm.dispose();
        return;
    }
    if (party.size() > 1) {
        cm.dispose();
        return;
    }
    for (i = 0; i < BoList.length; i++) {
        var em = cm.getEventManager(BoList[i][0]);
        if (em == null) {
        } else {
            eim = em.getInstance(BoList[i][0]);
            if (eim == null) {
            } else {
                if (cm.getName() == eim.getProperty("PlayerName")) {
                    cm.worldMessage("　　　　　　" + cm.getName() + " - for - " + BoList[i][1]);
                    if (eim.getProperty("Name") == BoList[i][3]) {
                        em.broadcastServerMsg(BoList[i][2], "恭喜　" + cm.getName() + "　玩家 单枪匹马在 " + eim.getProperty("MiA") + " 分钟 " + eim.getProperty("MiX") + " 秒 通过  " + BoList[i][1] + " 玩家破攻:" + cm.getLimitBreak(), true);
                        cm.worldMessage("〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓　〓〓 玩家 〓〓 " + format(" ", 29, cm.getName().toString()) + CareName[0] + " 〓〓 〓〓 副本 〓〓 " + format(" ", 29, BoList[i][1].toString()) + CareName[1] + " 〓〓 〓〓 破攻 〓〓 " + format(" ", 29, cm.getLimitBreak().toString()) + CareName[2] + " 〓〓 〓〓 时间 〓〓 " + format(" ", 2, eim.getProperty("MiA").toString()) + "分钟 " + format(" ", 2, eim.getProperty("MiX").toString()) + format(" ", 20, " 秒钟".toString()) + CareName[3] + " 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓 〓〓");
                        InsertEvenBo(BoList[i][1], eim.getProperty("MiA") + "分钟" + eim.getProperty("MiX") + "Ms", cm.getLimitBreak());
                        cm.dispose();
                        return false;
                    }
                }
            }
        }
    }
    cm.dispose();
}

var format = function FormatString(c, length, content) {//符号 位置 代码 - 文本类型 .toString()
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
function InsertEvenBo(carebosname, value, LimitBreak) {
    cm.sql_Insert("INSERT INTO CareBosRingk(id,accountid,characterid,carebosname,value,time,LimitBreak,name) values (?,?,?,?,?,CURRENT_TIMESTAMP(),?,?)", null, cm.getPlayer().getAccountID(), cm.getPlayer().getId(), carebosname, value, LimitBreak, cm.getPlayer().getName());
}
