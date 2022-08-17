// 座椅制造 //
/* 脚本定制 技术支持 381991414 */
/* 脚本定制 技术支持 381991414 */
/* 脚本定制 技术支持 381991414 */
/* 脚本定制 技术支持 381991414 */

var IconA = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//
var IconB = "#fUI/GuildMark/BackGround/00001003/5#";//信封图标[红]
var IconD = "#fUI/GuildMark/BackGround/00001003/12#";//信封图标[蓝]
var IconC = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件

//------------------------------------------------------------//
var status = 0;
var Prop = null;
//---------座椅------------//
var weaponList = Array(
			3010651,
            3010652,
            3010653,
            3010654,
            3010655,
            3010656,
            3010658,
            3015689,
            3015646,
            3015227,
            3015599,
            3010621,
            3015112,
            3015111,
            3015235,
            3015236,
            3010842,
            3016100,
            3016101,
            3010820,
            3010894,
            3010750,
            3010747,
            3010936,
            3010923,
            3010748

);
//-----------需材料------------//
var Needprops = new Array(
    Array(1, 4000133, 1888, 5, 13, 5, 13),//绿帽海贼的发动机  //-所需 -已有 -信息 -还差
    Array(1, 4000188, 1888, 17, 13, 17, 13),　  //鸭蛋
    Array(1, 4000187, 1888, 17, 13, 17, 13),　 //鸡爪
    Array(1, 4021015, 600, 9, 14, 9, 13),　 //高级物品结晶
    Array(1, 4310088, 2000, 16, 13, 16, 13), //RED币
    Array(1, 4001137, 30, 13, 15, 13, 13),  //优秀印章
    Array(1, 4310030, 80, 13, 15, 13, 13)　//运动会币
    );
//----------------------------//
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var selStr = IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
            selStr += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
            selStr += "#r\t　管理员提示：#b请选择制作座椅的类型 - 模型#k#n\r\n";
            for (var key in weaponList) {
                var item = weaponList[key];
                selStr += "#d#L" + key + "#" + IconD + " [ 查 - 该类型信息 ]　　#r#z" + item + "#\r\n";
            }
            cm.sendSimpleS(selStr, 2);
        } else if (status == 1) {
            Prop = selection;
            var txt = IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n\r\n";
            txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
            txt += "#r\t管理员提示：当前选择 [ #b#z" + weaponList[Prop] + "##r ] -#k#n\r\n";
            txt += "#d#n\r\n　　材料　　　　　　　　所需　　　　　　　已有\r\n\r\n";
            for (var i = 0; i < Needprops.length; i++) {
                // 材料名
                txt += "   #d#z" + Needprops[i][1] + "#";
                //--------------------所需---------------------//
                // 对其格式
                for (var j = Needprops[i][3]; j > 0; j--) {
                    txt += " ";
                }
                // 所需数量
                txt += "#r" + Needprops[i][2] + "#b";

                // 对其格式
                if (Needprops[i][2] - 5 < 0) {
                    txt += " ";
                }
                //----------------------已有---------------------//
                for (var j = Needprops[i][4]; j > 0; j--) {
                    txt += " ";
                }
                // 共有数量
                txt += cm.itemQuantity(Needprops[i][1]);

                // 对其格式
                if (Needprops[i][2] - 5 < 0) {
                    txt += " ";
                }
                txt += "#k\r\n";
            }
            txt += "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
            cm.sendYesNoS(txt, 2);
        } else if (status == 2) {
            var txt = IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n\r\n";
            if (cm.haveItem(4000133, 1888) && cm.haveItem(4000188, 1888) && cm.haveItem(4000187, 1888) && cm.haveItem(4021015, 600) && cm.haveItem(4310088, 2000) && cm.haveItem(4001137, 30) && cm.haveItem(4310030, 80)) {
                txt += "\r\n\t\t\t\t\t　" + IconC + "\r\n\r\n";
                txt += "\t\t\t\t\t\t#i" + weaponList[Prop] + "#\r\n";
                txt += "\t\t　#d当前完成制作的道具 [ #r#z" + weaponList[Prop] + "# #d]#k\r\n\r\n\r\n";
                txt += "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "#k\r\n";
                for (var i = 0; i < Needprops.length; i++) {
                    cm.gainItem(Needprops[i][1], -Needprops[i][2]);
                }
                cm.gainItem(weaponList[Prop], 1);
                cm.dispose();
                cm.sendOkS(txt, 2);
                return;
            } else {
                txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
                txt += "#r\t管理员提示：当前选择 [ #b#z" + weaponList[Prop] + "##r ] -#k#n\r\n";
                txt += "#d#n\r\n　　材料　　　　　　　　信息　　　　　　　记录\r\n\r\n";
                for (var i = 0; i < Needprops.length; i++) {
                    // 材料名
                    txt += "   #d#z" + Needprops[i][1] + "#";
                    //--------------------信息---------------------//
                    // 对其格式
                    for (var j = Needprops[i][5]; j > 0; j--) {
                        txt += " ";
                    }
                    // 共有数量
                    if ((cm.itemQuantity(Needprops[i][1]) - Needprops[i][2]) >= 0) {
                        txt += "#b达标#r";
                    } else {
                        txt += "#r欠缺#b";
                    }

                    // 对其格式
                    if (Needprops[i][2] - 5 < 0) {
                        txt += " ";
                    }
                    //----------------------还差---------------------//
                    for (var j = Needprops[i][6]; j > 0; j--) {
                        txt += " ";
                    }
                    // 还差数量
                    if ((cm.itemQuantity(Needprops[i][1]) - Needprops[i][2]) >= 0) {
                        txt += cm.itemQuantity(Needprops[i][1]);
                    } else {
                        txt += Needprops[i][2] - cm.itemQuantity(Needprops[i][1]);
                    }


                    // 对其格式
                    if (Needprops[i][2] - 5 < 0) {
                        txt += " ";
                    }
                    txt += "#k\r\n";
                }
            }
            txt += "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "#k\r\n";
            cm.sendOkS(txt, 2);
            cm.dispose();
        }
    }
}