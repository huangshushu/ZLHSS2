var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendNext("我想你是边缘人所以才不需要好友对吧??\r\n开玩笑假如你真的需要可以来找我的唷!");
	    cm.dispose();
	    return;
	} else if (status >= 1) {
	    cm.sendNext("我不认为你没有朋友，你只是不想花25万枫币来扩充自己的好友栏!");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("我希望我能尽可能昨天...嗯，你好！难道你不希望延长你的好友列表？你看起来像有人谁就会有一大堆的朋友......好了，你有什么感想？随著一些钱，我可以做到这一点你。但要记住，它仅适用于一个字符的时间，所以不会影响您的任何其他字符在您的帐户。你想扩展您的好友列表？");
    } else if (status == 1) {
	cm.sendYesNo("好吧，良好的通话！这并不是说贵实际。 #b250,000 枫币，我会添加5个插槽到你的好友列表#k中。不，我不会单独出售。一旦你购买它，这将是永久你的好友列表上。所以，如果你是那些需要更多的空间有一个，那么你还不如去做。你怎么看？你会花25万枫币吗？");
    } else if (status == 2) {
	var capacity = cm.getBuddyCapacity();
	if (capacity >= 100 || cm.getMeso() < 250000) {
	    cm.sendNext("嘿 你确定你有 #b250,000 枫币#k? 如果足够确认是不是你的好友栏已经 #b100#k 格了..");
	} else {
	    var newcapacity = capacity + 5;
	    cm.gainMeso(-250000);
	    cm.updateBuddyCapacity(newcapacity);
	    cm.sendOk("好了已经多增加5个好友栏了..如果你还需要可以再来找我..当然他并不是免费的!");
	}
	cm.dispose();
    }
}
