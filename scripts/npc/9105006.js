/* ==================
 脚本类型:  NPC	    
 脚本作者：梁先生     
 =====================
 */
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(38930,38680,38500,38020,36980,36950,36930,36910,36900,36250,36240,35830,35280,35210,33970,33430,35000,33160,35000,35090,35220,38360,35060,35100,35150,35200,35260,35270,35340,35350,35290,35300,35420,35450,35310,35330,35360,35430,35440,35460,35470,35510,35550,35560,35600,35660,36690,36710,36750,36760,36810,36820,36920,36340,36030,33810,33980,33670,33580,33320,36000,36420,36460,36470,36480,36510,36520,36530,36560,36580,36590,36640,36680,36700,33550,33820,33380,33930,32120,33150,33310,33600,33640,36310,33750,33250,33350,33440,35050,35170,35180,33290,33040,36300,33780,33700,33390,33260,33340,33240,33120,33000,35070,36290,33750,36310,36220,36180,36330,36120,36540,36770,33800,33740,33690,33630,33180,34440,33280,33300,33220,36360,33830,36010,36020,35020,32470,35130,35160,36550,36380,32440);
var fhair = Array(38150,38803,37510,37500,37750,37630,37120,37210,37280,37520,37980,37860,37820,37670,37640,37300,37260,37140,37030,34670,38030,38050,38060,38220,38240,38320,37310,35080,35110,34980,35190,35210,38380,38390,38470,38480,38500,38310,38270,38130,38400,38410,38420,38430,38450,38530,38540,38600,38610,38440,38460,38490,38520,38560,38570,38580,38590,38620,36640,38650,38680,38690,38700,38770,31610,31560,31230,37640,37690,36980,38070,37990,37960,37930,37920,34450,37950,37810,37190,37060,37000,34970,34890,34860,34810,34770,34750,34670,34600,33970,34450,33140,37440,37450,37490,37560,34160,34300,34260,34240,34210,38290,38160,38100,38020,38010,38120,37330,37340,34060,37710,34870,34800,34760,37700,37320,34330,34840,34850,34830,34110,34510,34250,34270,37400,37370,37380,37350,37530);
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) 
            //cm.sendSimple("您好，我是这间美发店的老板. 如果你有 #b#t5150038##k 请允许我把你的头发护理,请选择一个你想要的.\r\n\#L1#使用 #v5150038#换发型#l\r\n");
		    cm.sendSimple("您好，我是这间美发店的老板. 如果你有 #b#t5150038##k 或者有 #b#t5150038##k 请允许我把你的头发护理。请选择一个你想要的.\r\n\#b#L3#1张#v5150038#：3800点卷#l#b#L4#10张#v5150038#：35000点卷#l\r\n#b#L5#1张#v5150001#：980点卷#l#L6#10张#v5150001#：9500点卷#l\r\n#L7#1张#v5151001#：980点卷#l#L8#10张#v5151001#：9500点卷#l\r\n#L10#1张#v5152001#：980点卷#l#L11#10张#v5152001#：9500点卷#l");
        else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
            } else if (selection == 1) {
                beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for(var i = 0; i < mhair.length; i++)
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair()% 10));
                if (cm.getPlayer().getGender() == 1)
                    for(var i = 0; i < fhair.length; i++)
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("选择一个想要的.", 5150038, hairnew);
            } else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair()/10)*10;
                for(var i = 0; i < 8; i++)
                    haircolor.push(current + i);
                cm.sendStyle("选择一个想要的", 5150038, haircolor);
            } else if (selection == 3) {
			if(cm.getPlayer().getCSPoints(1) >= 3800){
				//cm.gainD(-3800);
				cm.getPlayer().modifyCSPoints(2, -3800, true);
				cm.gainItem(5150038, 1);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1张超级明星美发卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5150038#！");
				cm.dispose();
			}
        }else if(selection == 4){
			if(cm.getPlayer().getCSPoints(1) >= 35000){
				//cm.gainD(-35000);
				cm.getPlayer().modifyCSPoints(2, -35000, true);
				cm.gainItem(5150038, 10);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了10张超级明星美发卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5150038#！");
				cm.dispose();
			}
        }else if(selection == 5){
			if(cm.getPlayer().getCSPoints(1) >= 980){
				//cm.gainD(-980);
				cm.getPlayer().modifyCSPoints(2, -900, true);
				cm.gainItem(5150001, 1);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1张射手村高级会员美发卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5150001#！");
				cm.dispose();
			}

			}else if(selection == 6){
			if(cm.getPlayer().getCSPoints(1) >= 9500){
				//cm.gainD(-9500);
				cm.getPlayer().modifyCSPoints(2, -9500, true);
				cm.gainItem(5150001, 10);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了10张射手村高级会员美发卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5150001#！");
				cm.dispose();
			}

			}else if(selection == 7){
			if(cm.getPlayer().getCSPoints(1) >= 980){
				cm.getPlayer().modifyCSPoints(2, -980, true);
				//cm.gainD(-980);
				cm.gainItem(5151001, 1);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1张射手村染色高级会员卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5150001#！");
				cm.dispose();
			}

			}else if(selection == 8){
			if(cm.getPlayer().getCSPoints(1) >= 9500){
				//cm.gainD(-9500);
				cm.getPlayer().modifyCSPoints(2, -9500, true);
				cm.gainItem(5151001, 10);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了10张射手村染色高级会员卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5150001#！");
				cm.dispose();
			}

			}else if(selection == 10){
			if(cm.getPlayer().getCSPoints(1) >= 980){
				//cm.gainD(-980);
				cm.getPlayer().modifyCSPoints(2, -980, true);
				cm.gainItem(5152001, 1);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1张射手村整形高级会员卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5152001#！");
				cm.dispose();
			}

			}else if(selection == 11){
			if(cm.getPlayer().getCSPoints(1) >= 9500){
				//cm.gainD(-9500);
				cm.getPlayer().modifyCSPoints(2, -9500, true);
				cm.gainItem(5152001, 10);
				cm.sendOk("购买成功！");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了10张射手村整形高级会员卡！");
				cm.dispose();
			}else{
				cm.sendOk("点卷不足!无法兑换#v5152001#！");
				cm.dispose();
			}

			}else if(selection == 9){
                cm.dispose();
                //cm.打开NPC(9105006, 1);
			}

			
        
        } else if (status == 2){
            cm.dispose();
            if (beauty == 1){
	     if (cm.haveItem(5150038)) {
                    cm.gainItem(5150038, -1);
                   cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
                } else
                    cm.sendOk("必须要有超级明星美发卡，我才能为你理发..");
            }
            if (beauty == 2){
               if (cm.haveItem(5150038)) {
                   cm.gainItem(5150038, -1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
                } else
                    cm.sendOk("必须要有超级明星美发卡，我才能为你理发..");
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= hairprice) {
                    cm.gainMeso(-hairprice);
                    cm.gainItem(5150038, 1);
                    cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
                } else if (selection == 1 && cm.getMeso() >= haircolorprice) {
                    cm.gainMeso(-haircolorprice);
                    cm.gainItem(5150038, 1);
                    cm.sendOk("好了,让朋友们赞叹你的新发型吧33!");
                } else
                    cm.sendOk("必须要有超级明星美发卡，我才能为你理发!");
            }
        }
    }}
