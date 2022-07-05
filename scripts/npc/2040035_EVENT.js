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

/*var itemList = new Array(2040815,
 1032058,
 2040817,
 2040919,
 2040922,
 2040917,
 2040914,
 2040915,
 2040816,
 2040804,
 2040805,
 2040501,
 2040502,
 2040513,
 2040514,
 2040516,
 2040517,
 2040029,
 2040030,
 2040025,
 2040013,
 2040001,
 2040002,
 2040301,
 2040302,
 2040317,
 2040307,
 2040318,
 2040715,
 2041016,
 2041019,
 2041013,
 2041022,
 2043001,
 2043301,
 2043701,
 2043801,
 2044001,
 2044301,
 2044401,
 2044501,
 2044601,
 2044701,
 2044801,
 2044901,
 2040701,
 2040924,
 2040931,
 2040901,
 2040919,
 2040922,
 2040917,
 2040914,
 2040915,
 2040816,
 2040804,
 2040805,
 2040501,
 2040502,
 2040513,
 2040514,
 2040516,
 2040517,
 2040029,
 2040030,
 2040025,
 2040013,
 2040001,
 2040002,
 2040301,
 2040302,
 2040317,
 2040307,
 2040318,
 2040715,
 2041016,
 2041019,
 2041013,
 2041022,
 2043001,
 2043301,
 2043701,
 2043801,
 2044001,
 2044301,
 2044401,
 2044501,
 2044601,
 2044701,
 2044801,
 2044901,
 2040701,
 2040924,
 2040931,
 2040901,
 1032055,
 1032056,
 1032057,
 1032055,
 1032056,
 1032057,
 1032055,
 1032056,
 1032057,
 1032055,
 1032056,
 1032057,
 1032055,
 1032056,
 1032057,
 1102372);*/ //etc items

var itemList = new Array(1032055, 1032056, 1032057, 1032058, 1052165, 1052166, 1052167, 1002797, 1002800, 1072366, 1072368, 1072262, 1072264, 1082244, 1082245, 1102174, 1322003, //equips
        2100000, 2100017, 2100018, 2100019, 2100037, 2100038, 2100039, 2100040, 2044901, 2044902, 2044802, 2044801, 2044702, 2044701, 2044602,
        2044601, 2044501, 2044502, 2044402, 2044401, 2044302, 2044301, 2044201, 2044202, 2044102, 2044101,
        2044002, 2044001, 2043802, 2043801, 2043702, 2043701, 2043302, 2043301, 2043202, 2043201, 2043102,
        2043101, 2043002, 2043001, 2040801, 2040814, 2040815, 2040816, 2040817, 2040802, 2040915, 2040914, 2040805, 2040804, 2040532, 2040534, 2040517, 2040516,
        2040514, 2040513, 2040502, 2040501, 2040323, 2040321, 2040317, 2040316, 2040302, 2040301, //1x use items
        2000002, 2000003, 2000004, 2000005, 2000006, 2000006, 2000006, 2000006, 2000006, 2000005, 2000005,
        2000005, 2000005, 2000002, 2000002, 2000002, 2000002, 2000003, 2000003, 2000003, 2000004, 2000004,
        2000004, 2000004, 2022003, 2070004, 2070005, //multiuse items

        4020000, 4020000, 4020001, 4020001, 4020002, 4020002, 4020003, 4020003, 4020004, 4020004, 4020005,
        4020005, 4020006, 4020006, 4010000, 4010000, 4010001, 4010001, 4010002, 4010002, 4010003, 4010003,
        4010004, 4010004, 4010005, 4010005, 4010006, 4020007, 4020008, 4003000); //etc items

var randNum = Math.floor(Math.random() * (itemList.length));
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
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("请确认你的道具栏有没有满,满了领不到东西喔");
    } else if (status == 1) {
        cm.removeAll(4001022);
        cm.removeAll(4001023);
        cm.getPlayer().endPartyQuest(1202);//might be a bad implentation.. incase they dc or something
        cm.gainItem(randItem, qty);
        cm.gainItem(4031833, 4);
        cm.warp(221024500);
        cm.dispose();
    }
}
