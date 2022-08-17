var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("浣犲ソ锛屾垜鍊戞槸寰堜箙浠ュ墠鏇剧稉鏀厤妤撲箣璋风殑闆欒優鑳庤壘灏肩應鍜岃壘灏肩﹩鏂�?);
    } else if (status == 1) {
        qm.sendNextPrevS("鐓╀汉鐨勬墦鎷涘懠绂瘈灏卞厛鎷嬮枊鍚�!!!鍕囧＋闃匡紝浣犳兂瑕佹洿寮峰ぇ鐨勫姏閲忓�?", 4, 9330355);
    } else if (status == 2) {
        qm.sendNextPrev("鏀炬鍚�,鑹惧凹绌嗘柉.鍏夋槸涓�鍏╁�嬪媷澹槸鐒℃硶鎶垫姉榛戞殫鎯″嫝鍔涚�?..");
    } else if (status == 3) {
        qm.sendNextPrev("#i3800647#\r\n鑹惧凹绌嗘柉鎯宠閫忛亷鑷繁鐨勬柟濉婂壍閫犲皯鏁稿挤澶х殑鑿佽嫳鍕囧�?..");
    } else if (status == 4) {
        qm.sendNextPrevS("#i3800646#\r\n浣嗙浉鍙嶇殑鑹惧凹鐟兂鐘х壊鑷繁鐨勫姏閲忥紝鎻愪緵鏂瑰绲︽涔嬭胺鐨勬墍鏈夊媷澹�?.. ", 4, 9330355);
    } else if (status == 5) {
        qm.sendNextPrevS("#i3800648#鑹惧凹鐟�?..浣犻�欐ǎ鐘х壊鑷繁鐨勫姏閲�,鍗冭惉涓嶈鍝ぉ鍊掍笅浜�...", 4, 9330355);
    } else if (status == 6) {
        qm.sendNextPrev("闆栫劧鎴戝�戞兂瑕佸皪鎶楅粦鏆楁儭鍕㈠姏鐨勫績閮芥槸涓�妯ｇ�?浣嗘柟娉曟湁涓�榛炰笉鍚�?..\r\n鍕囧＋鍟�?..璜嬩綘绛夎憲...鎴戞渻鍐嶄締鎵句綘鐨�?");
    } else if (status == 7) {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
