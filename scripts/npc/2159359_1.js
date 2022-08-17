/*
 *  @功能：    BOSS次数查询
 *  @作者：    dgms
 *  @时间：    2017年1月8日
 */
var ico = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var boss = Array(
Array("钻机", 1),
Array("艾菲尼娅", 3),
Array("品克缤1", 2),
Array("混沌品克缤", 2),
Array("班·雷昂", 2),
Array("狮子王:班·雷昂[普通]", 2),
Array("阿卡伊勒", 2),
Array("森兰丸", 1),
Array("森兰丸", 1),
Array("欧碧拉", 1),
Array("女皇：希纳斯1", 2),
Array("浓姬", 1),
Array("腥血女王", 2),
Array("进阶腥血女王", 1),
Array("皮埃尔", 2),
Array("进阶皮埃尔", 1),
Array("半半", 2),
Array("进阶半半", 1),
Array("贝伦", 2),
Array("进阶贝伦", 1),
Array("贝勒德", 1),
Array("乌鲁斯", 1),
Array("麦格纳斯1", 1),
Array("斯乌", 1),
Array("斯乌[远征队]", 1),
Array("桃乐丝", 1),
Array("戴米安1", 1),
Array("路西德1", 1),
Array("觉醒希拉", 1)
);

function start() {
    var text = "\t\t#fs15##d#e以下是您今日副本剩余挑战次数\r\n#fs12##b#n";
    for (var i = 0; i < boss.length; i++) {
        var element = boss[i];
        text += "\t"+ico+element[0] + "   " + "("+(element[1] - cm.getBossLog(element[0])) + "/#r" + element[1]+"#b次)";
        if (i != 0 && i % 2 != 0) {
            text += "\r\n"
        } else {
            text += "\t"
        }
    }
    cm.sendOk(text);
    cm.dispose();
}