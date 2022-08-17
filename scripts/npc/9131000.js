var status = -1;

function start() {
    switch (cm.getMapId()) {
        case 807100003:
            action(1, 0, 0);
            break;
        default:
            cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (cm.getMapId()) {
        case 807100003:
            if (status == 0) {
                cm.sendSangokuTalk("喔啦啦，呼呼… 去抓老虎的路上遇到了鹿，看打扮不像是織田信長所屬的武裝，怎麼會來到本能寺呀？", 9131000, false, true);
            } else if (status == 1) {
                cm.sendNextPrevS("(與溫柔的外貌或者語氣不同感覺一股殺氣… 是織田信長所屬的將帥嗎？)", 3);
            } else if (status == 2) {
                cm.sendNextPrevS("我是松山家族的山崎伴信的大兒子劍斗！ 我來是為了主家和一個家族報仇找回公主殿下 ！", 3);
            } else if (status == 3) {
                cm.sendSangokuTalk("松山，松山… 好陌生的名字，當然若是不存在的名字記它又有什麼意義。", 9131000, true, true);
            } else if (status == 4) {
                cm.sendNextPrevS("看你那傲慢且旁若無人的態度，不用知道名字也能肯定是魔王的手下，那麼我和切開雲霧之劍也不用在猶豫啦。", 3);
            } else if (status == 5) {
                cm.sendNextPrevS("現在也不晚，想報上名字盡管報，這將是你在這個世界的最後的聲音。", 3);
            } else if (status == 6) {
                cm.sendSangokuTalk("是喔，沒必要知道名字啦。", 9131007, true, true);
            } else if (status == 7) {
                cm.spawnNPCRequestController(9131007, 135, 30);
                cm.setNPCSpecialAction(9131007, "summon");
                cm.sendNextPrevS("信玄！", 3);
            } else if (status == 8) {
                cm.sendSangokuTalk("看你就知道這次混戰從哪裡開始的，難道不是嗎？四天王，明智光秀！", 9131007, true, true);
            } else if (status == 9) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 10) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3", 0, 0, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 11) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/4", 0, 0, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 12) {
                cm.sendSangokuTalk("喔啦啦，呼呼… 果然武田信玄名不虛傳呀，第一眼就知道我的真實身分，連我要謀反的事情也知道了。 ", 9131000, false, true);
            } else if (status == 13) {
                cm.sendSangokuTalk("第一次親自見你，但是根據我聽到的傳聞你不是那種可以在別人手下很長時間的人，怎麼樣，若是把劍對準原來的主人，那麼考慮一下要不要聯手啊？", 9131007, true, true);
            } else if (status == 14) {
                cm.sendNextPrevS("信玄，就是那傢伙把松山燒了！怎麼可以跟大仇人聯手！ 明智光秀覺悟吧！", 3);
            } else if (status == 15) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/5", 0, 0, -120, 0, 0);
                cm.getDirectionInfo(1, 1000);
            } else if (status == 16) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/6", 0, -100, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 17) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/7", 0, -100, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 18) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/8", 0, 0, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 19) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/9", 0, -100, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 20) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/10", 0, 0, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 21) {
                cm.getDirectionInfo(3, 1);
                cm.getDirectionInfo(1, 1300);
            } else if (status == 22) {
                cm.getDirectionInfo(3, 0);
                cm.getDirectionInfo(1, 1300);
                cm.getDirectionInfo(0, 1033, 0);
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/11", 0, -100, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 23) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/12", 0, -100, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 24) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/13", 0, 150, -120, 0, 0);
                cm.getDirectionInfo(1, 2000);
            } else if (status == 25) {
                cm.setNPCSpecialAction(9131007, "attack");
                cm.getDirectionInfo(1, 300);
            } else if (status == 26) {
                cm.getDirectionInfo("Effect/DirectionJP3.img/effect/kenjiTuto/shingenAttack/0", 0, 0, 0, 0, 0);
                cm.getDirectionInfo(1, 400);
            } else {
                cm.EnableUI(0);
		cm.removeNPCRequestController(9131007);
                cm.dispose();
                cm.warp(807100004, 0);
            }
            break;
    }
}