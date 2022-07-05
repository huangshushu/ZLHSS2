var status = 0;
var mapList = [
    701000000,
    540000000,
    800000000,
    500000000,
    702000000,
    550000000
];
var back = false;
var map = 100000000;
var cost = 3000;
function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            if (!checkContain(mapList, cm.getMapId())) {
                if (cm.getJob() == 0 && cm.getJob() == 1000 && cm.getJob() == 2000) {
                    cm.sendNext("如果对疲倦的生活厌烦了，何不去旅行呢？不仅可以感受别的文化,还能学到很多知识！向您推荐由我们枫之谷旅行社准备的#b世界旅行#k!担心会有很大烂够吗？请不必担心，我们的\r\n#b枫之谷世界旅行#k! 只需 #b300 枫币#k就可以。");
                    cost = 300;
                } else {
                    cm.sendNext("如果对疲倦的生活厌烦了，何不去旅行呢？不仅可以感受别的文化,还能学到很多知识！向您推荐由我们枫之谷旅行社准备的#b世界旅行#k!担心会有很大烂够吗？请不必担心，我们的\r\n#b枫之谷世界旅行#k! 只需 #b3000 枫币#k就可以。");
                    cost = 3000;
                }
			} else {
            	back = true;
                map = cm.getSavedLocation("WORLDTOUR");
                cm.sendSimple("怎么样的旅游你享受了吗？ \r\n #L1#我旅行完了,我要回去#m"+map+"##l");
			}
		} else if (status == 1) {
        	if (back) {
                cm.warp(map == -1 ? 100000000 : map);
                cm.clearSavedLocation("WORLDTOUR");
                cm.dispose();
			} else {
        		var txt = "你想要去哪里旅行呢？\r\n";
        		for (var i in mapList) {
        			txt += "#b#L"+i+"##m"+mapList[i]+"# "+cost+"金币#l\r\n";
				}
        		cm.sendNext(txt);
			}
		} else if (status == 2) {
        	if (!back) {
                cm.sendNext("你想要去这个地方旅行? #b#m"+mapList[selection]+"##k? 我将带你去只需要 #b3,000 枫币#k. 你现在愿意去?");
                map = mapList[selection];
			}
		} else if (status == 3) {
        	if (!back) {
                cm.gainMeso(-cost);
                cm.saveLocation("WORLDTOUR");
                cm.warp(map, 0);
                cm.dispose();
			} else {
        		cm.dispose();
			}
		}
    }
}

function checkContain(list, x) {
	for (var i in list) {
		if (list[i] == x) {
			return true;
		}
	}
	return false;
}