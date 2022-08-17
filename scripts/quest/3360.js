/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    qm.sendNext("来吧，快点。 如果你不聪明，拿出你的钢笔和纸!");
	    qm.dispose();
	    return;
	}

	if (status == 0) {
	    qm.sendNext("哦！最后，你也来了！我很高兴你在这里的时间。我也为你打开通道secert的万能钥匙！哈哈哈哈！是不是很神奇？说它惊人!");
	} else if (status == 1) {
	    qm.askAcceptDecline("好吧，现在，这个键是非常漫长和复杂。我需要你记住它非常好。我不会再说，所以你最好把它写下来的地方。你准备好了吗?");
	} else if (status == 2) {
	    var pass = generateString();
	    qm.sendOk("关键代码是 #b"+pass+"#k.了解？ 把钥匙放在秘密通道的门口，你将能够自由地走过通道.");
	    qm.forceStartQuest(pass);
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.dispose();
	}
    }
}

function generateString() {
    var thestring = "";
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rnum;
    for (var i = 0; i < 10; i++) {
	rnum = Math.floor(Math.random() * chars.length);
	thestring += chars.substring(rnum, rnum+1);
    }
    return thestring;
}