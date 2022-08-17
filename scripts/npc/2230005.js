/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/


var status = 0;
var Icon = Array(
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#")
);
var txt;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    }
    else if (status == 0) {
        var result = cm.sql_Select("SELECT str+dex+luk+`int` as maxCare,str,dex,luk,`int`,name from characters ORDER BY maxCare DESC limit 10;");
        txt = "\t\t　　　　　 #e#r能力值排名中心#k#n\r\n\r\n";
        txt += Icon[0][1];
        for (var i = 0; i <= 97; i++) {
            txt += Icon[1][1];
        };
        txt += Icon[2][1] + "\r\n\r\n";
        txt += "#d#n\r\n   排名　玩家名称  　 力量　　敏捷　　运气　　智力\r\n#k";
        for (var i in result) {
            var signle = result[i]
            var name = signle.get("name");
            if (i == 0) {
                txt += "#r";
            } else if (i == 1) {
                txt += "#g";
            } else if (i == 2) {
                txt += "#b";
            }
            txt += "\t " + i + "\t ";
            // 填充名字空格
            txt += name
            var newlength = name.replaceAll("[^\\x00-\\xff]", "**").getBytes().length
            for (var j = 14 - newlength; j > 0; j--) {
                txt += " ";
            }
            txt += signle.get("str");

            for (var j = 12 - newlength; j > 0; j--) {
                txt += " ";
            }
            txt += signle.get("dex");

            for (var j = 13 - newlength; j > 0; j--) {
                txt += " ";
            }
            txt += signle.get("luk");

            for (var j = 13 - newlength; j > 0; j--) {
                txt += " ";
            }
            txt += signle.get("int");
            txt += "#k";

            txt += "\r\n";
        }
        txt += "\r\n" + Icon[0][1];
        for (var i = 0; i <= 97; i++) {
            txt += Icon[1][1];
        };
        txt += Icon[2][1] + "\r\n";
        cm.sendOkS(txt, 2);
        cm.dispose();
    }
}
