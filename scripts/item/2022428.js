/*
  随机防具类必成卷箱子
*/

var status = 0;
var itemid = [
		1102271,
		1702089,
		1702228,
		1702299
	];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
       var itemi = im.取数组随机数(itemid);
	   im.getItemMegaphone("防具必成卷轴箱"," 被玩家 "+im.getPlayer().getName()+" 幸运抽中。" , itemi ,1)
	   im.used();
       im.dispose();
    }
}