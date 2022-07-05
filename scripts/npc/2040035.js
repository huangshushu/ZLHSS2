/*
 * This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
-- Odin JavaScript --------------------------------------------------------------------------
    Arturo - Award NPC For Ludibrium PQ
-- By --------------------------------------------------------------------------------------------
    xQuasar
-- Version Info -------------------------------------------------------------------------------
    1.0 - First Version by xQuasar
---------------------------------------------------------------------------------------------------
**/

var status;

var itemList = new Array(1332056,1382039,1312032,1372034,1322054,1472055,1462040,1332055,1402039,1412027,1442051,1432040,1422029,1492022,1302064,1452045,1482022,1302024,1302084,1302087,1322024,1322006,1322023,1332053,1442039,1322012,1302071, //equips
                         2100000,2100017,2100018,2100019,2100037,2100038,2100039,2100040,
                         2044901,2044902,2044802,2044801,2044702,2044701,2044602,
                         2044601,2044501,2044502,2044402,2044401,2044302,2044301,2044201,2044202,2044102,2044101,
                         2044002,2044001,2043802,2043801,2043702,2043701,2043302,2043301,2043202,2043201,2043102,
                         2043101,2043002,2043001,2040801,2040816,2040817,2040802,2040915,2040914,2040805,2040804,2040532,2040534,2040517,2040516,
                         2040514,2040513,2040502,2040501,2040323,2040321,2040317,2040316,2040302,2040301, //1x use items
                         2000002,2000003,2000004,2000005,2000006,2000006,2000006,2000006,2000006,2000005,2000005,
                         2000005,2000005,2000002,2000002,2000002,2000002,2000003,2000003,2000003,2000004,2000004,
                         2000004,2000004,2022003,2070004,2070005,//multiuse items
                         
4020000,4020000,4020001,4020001,4020002,4020002,4020003,4020003,4020004,4020004,4020005,
                         4020005,4020006,4020006,4010000,4010000,4010001,4010001,4010002,4010002,4010003,4010003,
                         4010004,4010004,4010005,4010005,4010006,4020007,4020008,4003000); //etc items

var randNum = Math.floor(Math.random()*(itemList.length));
var randItem = itemList[randNum];
var qty;

switch (randItem) {
    case 4020000:
    case 4020001:
    case 4020002:
    case 4020003:
    case 4020004:
    case 4020005:
    case 4020006:
    case 4010000:
    case 4010001:
    case 4010002:
    case 4010003:
    case 4010004:
    case 4010005:
        qty = 16;
        break;
    case 4010006:
    case 4020007:
    case 4020008:
        qty = 8;
        break;
    case 4003000:
        qty = 30;
        break;
    case 2000002:
    case 2000006:
        qty = 100;
        break;
    case 2000003:
        qty = 200;
        break;
    case 2000004:
        qty = 50;
        break;
    case 2000005:
    case 2022003:
        qty = 10;
        break;
    default:
        qty = 1;
}

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (mode == 1)
        status ++;
    else
        status --;
    if (status == 0) {
        cm.sendNext("请确认你的背包有没有满。");
    } else if (status == 1) {
        cm.removeAll(4001022);
        cm.removeAll(4001023);
        cm.getPlayer().endPartyQuest(1202);//might be a bad implentation.. incase they dc or something
        //cm.gainItem(randItem, qty);
        cm.setBossLog('每日玩具城副本次数');
        var a = cm.getBossLogC("每日玩具城副本次数");
        if (cm.getPlayer().getLevel() <= 120){//玩具带副本奖励
            cm.playerMessage(5, "恭喜你完成玩具副本！");
            cm.gainExp(90000);
            if (a <= 1) {
                cm.gainExp(90000);
            }
        } else {
            //cm.setBossRankCount("越级副本出席", 4);
            cm.givePartyLevelItems(1, 49, 1, 4001229, 2);
            // if (a <= 1) {
            //     cm.givePartyLevelItems(1, 49, 1, 4000313, 4);//4个金叶子
            // }
            cm.setBossRankCount("越级玩具城副本总次数");
        }
        cm.playerMessage(5, "恭喜您获得1点玩具城副本通关点数！");
        cm.setBossRankPoints("玩具城副本总点数", 1);
        cm.setBossRankCount("玩具城副本通关次数");
        cm.setBossRankCount("玩具城副本总次数");
        cm.setBossRankCount("所有副本总次数");
        cm.setBossLog("完成10次玩具组队", 12, 1);
        cm.worldMessage(2, "[副本-玩具] : 恭喜 " + cm.getPlayer().getName() + " 完成玩具副本。");
        //cm.warp(221024500);
        map = cm.getSavedLocation("DUTY_JOIN");
        cm.warp(map == -1 ? 910000000 : map);
        cm.clearSavedLocation("DUTY_JOIN");
        cm.dispose();
    }
}
