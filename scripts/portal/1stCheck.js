/*
 * 腔绢柯扼牢 家胶 胶农赋飘 涝聪促.
 * 
 * 器呕困摹 : 
 * 器呕汲疙 : 
 * 
 * 力累 : 林农喉发
 * 
 */

function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
	pi.getPlayer().message("'蜡府' 俊霸 刚历 富阑 吧绢林技夸.");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}
