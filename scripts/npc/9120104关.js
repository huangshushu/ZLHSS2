/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var status = 0;
var qChars = new Array ("Q1: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#1",
    "Q1: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#2",
    "Q1: ²Â²Â²Â²Â²Â²Â²Â²ÂX.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#3",
	"Q1: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#4");
var qItems = new Array(("Q2: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#1",
    "Q2: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#2",
	"Q2: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#3",
	"Q2: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#4");
var qMobs = new Array("Q4: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#1",
    "Q3: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#2",
	"Q3: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#3",
	"Q3: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#4");
var qQuests = new Array("Q4: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#1",
    "Q4: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#2",
	"Q4: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#3",
	"Q4: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#4");
var qTowns = new Array("Q5: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#1",
    "Q5: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#2",
	"Q5: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#3",
	"Q5: ²Â²Â²Â²Â²Â²Â²Â²Â.#1²Â²Â²Â²Â#2²Â²Â²Â²Â#3²Â²Â²Â²Â#4²Â²Â²Â²Â#4");
var correctAnswer = 0;

function start() {
	if (cm.haveItem(4110010, 1)) {
		cm.sendOk("#h #,ÄãÒÑ¾­ÓÐÁË #t4110010# ²»ÒªÈÃ·ÏÎÒÊ±¼ä.");
		cm.dispose();
	}
    if (!(cm.haveItem(4110010, 1))) {
        cm.sendNext("»¶Ó­¹âÁÙ #h #, ÎÒÊÇ #p2030006#.\r\n¿´À´ÄãÒÑ¾­×ßÁËºÜÔ¶µ½´ïÁËÕâ¸ö½×¶Î.");
    }
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("ÏÂ´ÎÔÙ¼û.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1)
            cm.sendNextPrev("#h #, Èç¹ûÄã¸øÎÒ #bºÚ°µË®¾§#k ÎÒ½«»áÈÃÄãÊÔ×Å»Ø´ð5¸öÎÊÌâ,ÈôÄú5¸öÎÊÌâ¶¼´ð¶ÔÄú½«µÃµ½ #v4110010# #b¶¹¶¹Æ±#k.");
        else if (status == 2) {
            if (!cm.haveItem(4005004)) {
                cm.sendOk("#h #, ÄãÃ»ÓÐ #bºÚ°µË®¾§#k");
                cm.dispose();
            } else {
                cm.gainItem(4005004, -1);
                cm.sendSimple("²âÑé¿ªÊ¼ #b½ÓÊÜÌôÕ½°É!#k.\r\n\r\n" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)]));
                status = 2;
            }
        } else if (status == 3) {
            if (selection == correctAnswer)
                cm.sendOk("#h # Äã´ð¶ÔÁË.\n×¼±¸´ðÏÂÒ»Ìâ??");
            else {
                cm.sendOk("Äã´ð´íÁËµÄ´ð°¸!.\r\nºÜ±§Ç¸Äã±ØÐëÔÚ¸øÎÒÒ»¸ö #bºÚ°µË®¾§#k ²Å¿ÉÒÔÔÙÌôÕ½!");
                cm.dispose();
            }
        } else if (status == 4)
            cm.sendSimple("²âÑé¿ªÊ¼ #b½ÓÊÜÌôÕ½°É!#k.\r\n\r\n" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)]));
        else if (status == 5) {
            if (selection == correctAnswer)
                cm.sendOk("#h # Äã´ð¶ÔÁË.\n×¼±¸´ðÏÂÒ»Ìâ??");
            else {
                cm.sendOk("Äã´ð´íÁËµÄ´ð°¸!.\r\nºÜ±§Ç¸Äã±ØÐëÔÚ¸øÎÒÒ»¸ö #bºÚ°µË®¾§#k ²Å¿ÉÒÔÔÙÌôÕ½!");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendSimple("²âÑé¿ªÊ¼ #b½ÓÊÜÌôÕ½°É!#k.\r\n\r\n" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)]));
            status = 6;
        } else if (status == 7) {
            if (selection == correctAnswer)
                cm.sendOk("#h # Äã´ð¶ÔÁË.\n×¼±¸´ðÏÂÒ»Ìâ??");
            else {
                cm.sendOk("Äã´ð´íÁËµÄ´ð°¸!.\r\nºÜ±§Ç¸Äã±ØÐëÔÚ¸øÎÒÒ»¸ö #bºÚ°µË®¾§#k ²Å¿ÉÒÔÔÙÌôÕ½!");
                cm.dispose();
            }
        } else if (status == 8)
            cm.sendSimple("²âÑé¿ªÊ¼ #b½ÓÊÜÌôÕ½°É!#k.\r\n\r\n" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)]));
        else if (status == 9) {
            if (selection == correctAnswer) {
                cm.sendOk("#h # Äã´ð¶ÔÁË.\n×¼±¸´ðÏÂÒ»Ìâ??");
                status = 9;
            } else {
                cm.sendOk("Äã´ð´íÁËµÄ´ð°¸!.\r\nºÜ±§Ç¸Äã±ØÐëÔÚ¸øÎÒÒ»¸ö #bºÚ°µË®¾§#k ²Å¿ÉÒÔÔÙÌôÕ½!");
                cm.dispose();
            }
        } else if (status == 10) {
            cm.sendSimple("×îºóÒ»¸öÎÊÌâ.\r\n²âÑé¿ªÊ¼ #b½ÓÊÜÌôÕ½°É!#k.\r\n\r\n" + getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)]));
            status = 10;
        } else if (status == 11) {
            if (selection == correctAnswer) {
                cm.gainItem(4110010, 1);
                cm.sendOk("¹§Ï² #h #, ¿ì.\r\nÄÃ×ÅÕâ¸ö #v4110010# È¥¶¹¶¹»ú³é½±°É!.");
                cm.dispose();
            } else {
                cm.sendOk("Ì«¿ÉÏ§ÁË,²îÒ»Ìâ¾Í¿ÉÒÔÍ¨¹ØÁË!! ¶à¶à¼ÓÓÍ><.\r\nºÜ±§Ç¸Äã±ØÐëÔÚ¸øÎÒÒ»¸ö #bºÚ°µË®¾§#k ²Å¿ÉÒÔÔÙÌôÕ½!");
                cm.dispose();
            }
        }
    }
}
function getQuestion(qSet){
    var q = qSet.split("#");
    var qLine = q[0] + "\r\n\r\n#L0#" + q[1] + "#l\r\n#L1#" + q[2] + "#l\r\n#L2#" + q[3] + "#l\r\n#L3#" + q[4] + "#l";
    correctAnswer = parseInt(q[5],10);
    correctAnswer--;
    return qLine;
}