
var charid;
var hairnew = Array();
var facetype = Array();
var haircolor = Array();
var a = 0;
var selects;
var isSecond = false;

//每次使用的元宝数量
var nxPrice = 20;


//男发
var mhair2 = Array(
40743,
40753,
40823,
40833,
41063,
41073,
41813,
41823,
43013,
43023,
43123,
43133,
43143,
43213,
43293,
43303,
43313,
43343,
36310);
//女发
var fhair2 =Array(
41843,
41853,
41863,
41883,
41893,
41903,
41953,
41973,
44303,
44203,
44323,
44333,
44473,
44483,
44493,
44513,
44523,
44613,
44823,
38630
)
var skin = Array(1, 2, 3, 4,6,7,8, 9, 10); // 皮肤id
//男脸
var face1 = Array(
23081,
20035,
25719,
23041,
23086,
20898,
20844,
20068,
20064,
23010,
20044,
20061,
20833,
20187,
20046,
23056,
23020,
26447,
23418);
//女脸
var face2 = Array(26105,
24078,
21333,
21336,
21341,
21382,
21344,
21345,
21377,
24407,
21342,
21331,
21399,
25751,
24350,
21364,
21380,
24384,
21360,
24401,
26125);

var cashType = 1;
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (a == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (a >= 1 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            a++;
        else
            a--;
        if (a == 0) {
			var str1 = "<" + cm.getServerName() + "> 自选造型\r\n";
			str1 += "#b 每次自选需要#r "+nxPrice+" #b元宝(优先使用#v4034012#),当前元宝：#r"+cm.getHyPay(1)+"\r\n#b";
            str1 += "#L0# 自选发型。#l\r\n"
            //str1 += "#L1# 自选发色。#l\r\n"
            str1 += "#L4# 自选脸型。#l\r\n"
            //str1 += "#L2# 自选肤色。#l\r\n"
            str1 += "#L3# 返回#l\r\n"
            cm.sendSimpleS(str1, 9);
        } else if (a == 1) {
			if( cm.getHyPay(1) < nxPrice && !cm.haveItem(4034012,1)){
                cm.sendOk("你没有 "+nxPrice+" 元宝 且 没有#v4034012#,无法更改造型");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4034012,1)){
				cashType = 2;//卡
			}
            selects = selection;
            if (selection == 0) {
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair2.length; i++) {
                        hairnew.push(mhair2[i]);
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair2.length; i++) {
                        hairnew.push(fhair2[i]);
                    }
                }

                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 0, false);
            } else if (selection == 1) {
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendStyle("我可以改变你的发色,让它比现在看起来漂亮. 你为什么不试着改变它下? 我将会帮你改变你的发色,那么选择一个你想要的新发色吧!", haircolor, 0, false);
            } else if (selection == 2) {
                cm.sendStyle("用我们特殊开发的机器可查看护肤后的效果噢,想换成什么样的皮肤呢？请选择～~", skin, 0, false);
            } else if (selection == 4) {
				 if (cm.getPlayerStat("GENDER") == 0) {
                    for (var i = 0; i < face1.length; i++) {
                        facetype.push(face1[i]);
                    }
				} else {
                    for (var i = 0; i < face2.length; i++) {
                        facetype.push(face2[i]);
                    }
				 }
				cm.sendStyle("请预留“特殊栏”一格位置", facetype, 5152057, isSecond);
            } else if (selection == 3) {
				cm.dispose();
            } 
        } else if (a == 2) {
            a = -1;
            if (selects == 0) {
                if (typeof (hairnew[selection]) == "undefined") {
                    cm.sendSimpleS("你不可以换成光头喔！！请返回重新选择！#b\r\n#L0# 返回重新选择。", 9);
                } else {
					if(cashType==1){
						cm.addHyPay(nxPrice);
					}else{
						cm.gainItem(4034012,-1);
					}
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的发型吗？");
					cm.dispose();
                }
            } else if (selects == 1) {
                if (typeof (haircolor[selection]) == "undefined") {
                    cm.sendSimpleS("你不可以换成光头喔！！请返回重新选择！#b\r\n#L0# 返回重新选择。", 9);
                } else {
					if(cashType==1){
						cm.addHyPay(nxPrice);
					}else{
						cm.gainItem(4034012,-1);
					}
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的颜色吗？");
					cm.dispose();
                }
            } else if (selects == 2) {
                if (typeof (skin[selection]) == "undefined") {
                    cm.sendSimpleS("皮肤的设置好像有点问题，再看看~~#b\r\n#L0# 返回重新选择。", 9);
                } else {
					if(cashType==1){
						cm.addHyPay(nxPrice);
					}else{
						cm.gainItem(4034012,-1);
					}
                    cm.setSkin(skin[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的皮肤吗？");
					cm.dispose();
                }
            }  else if (selects == 4) {
                if (typeof (facetype[selection]) == "undefined") {
                    cm.sendSimpleS("头发选项好像有点问题，再看看~~#b\r\n#L0# 返回重新选择。", 9);
                } else {
					if(cashType==1){
						cm.addHyPay(nxPrice);
					}else{
						cm.gainItem(4034012,-1);
					}
					cm.gainItem(5152057,1);
					cm.setAvatar(5152057,facetype[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的脸型吗？");
					cm.dispose();
                }
            } 
        } 
    } //mode
}
