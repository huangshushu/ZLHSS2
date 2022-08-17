﻿﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNextSNew("對立體機動裝置給你簡單說明。請你好好聽。\r\n首先裝備剛發給的立體機動裝置，就可以使用立體機動技能和攻擊技能。", 0x21, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("按住立體機動技能時，錨頭會開始運作. 錨頭到了想要的方向時，放開技能鍵會發射錨頭後進行移動。", 0x21, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("移動中也可以使用攻擊和錨頭技能的關係，連續使用技能可以不斷的連續移動. 尤其在樹和樹之間的移動時,利用方向鍵和錨頭移動技能，可以簡單的往上移動。", 0x21, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("攻擊技能是在錨頭移動中或停下來時可以使用. 巨人的弱點是後頸部的關係，請用錨頭邊移動邊瞄準使用攻擊技能。", 0x21, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("說了這麼多，乾脆去使用看看如何? 參加在訓練兵團準備的多種訓練來學習錨頭技能和攻擊技能的使用方法吧。", 0x21, 1);
    } else if (status == 5) {
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
