/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendNext("你好！欢迎光临射手村护肤中心。你想获得和我一样健康紧绷的皮肤吗？只要有#b万能会员卡#k的话，我就可以按照你的要求为你护理皮肤。你想尝试一下吗？");
    } else if (status == 1) {
        cm.sendStyle("用我们护肤中心开放的机械，可以查看护肤后的效果。你想要什么样的皮肤呢？请挑选一下～", 5153000, skin);
    } else if (status == 2) {
        if (cm.setAvatar(5153000, skin[selection]) == 1) {
            cm.sendOk("完成了,让朋友们赞叹你的新肤色吧!");
        } else {
            cm.sendOk("嗯……你好像没有护肤券啊。对不起，没有护肤券的话，我就不能帮你护理皮肤。");
        }
        cm.dispose();
    }
}