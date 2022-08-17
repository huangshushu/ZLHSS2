var a = 0;
var Text = "#b#e#r想完成极光戒指任务吗？\r\n\r\n#L10##v1112318#鸳鸯夫妻结婚戒指1克拉 \r\n#L20##v1112319#鸳鸯夫妻结婚戒指2克拉 \r\n#L30##v1113002#鸳鸯夫妻结婚戒指3克拉 \r\n#L40##v1112404#极光戒指";
var db;
var time;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			        }else if (a == 0) {
							 a = 0;
cm.sendSimple(Text);		
			}else if (a == 1){
			if (selection == 1) {
                cm.sendOk("#b升级错误:#k\r\n#i1112446##t1112446#通过点卷商城或任务等其它渠道获得");
                    cm.dispose();
		}else if (selection == 51){
                //cm.sendOk("#b升级说明:#k\r\n1.要一步一步合成,材料说明在群文件可查阅");
                    cm.dispose();
		
		}else if (selection == 10){
if (cm.itemQuantity(4031456) >=500&& cm.itemQuantity(4001266) >=20&& cm.itemQuantity(4000053) >=50 && cm.itemQuantity(4000054) >=50 && cm.itemQuantity(4251402) >=25&& cm.itemQuantity(4011008) >=2){
cm.gainItem(4031456,-500);
cm.gainItem(4001266,-20);
cm.gainItem(4000053,-50);
cm.gainItem(4000054,-50);
cm.gainItem(4251402,-25);
cm.gainItem(4011008,-2);
cm.gainItem(1112318,1);
	cm.sendNext("#b鸳鸯夫妻戒指提示:#r\r\n成功完成鸳鸯夫妻结婚戒指1克拉，恭喜你！")
cm.dispose();
}else{
	var text = "#r制作#v1112318#鸳鸯夫妻结婚戒指1克拉 * 1\r\n\r\n"
	   
	   text += "需要#v4031456# * 500\r\n"
	   text += "需要#v4001266# * 20\r\n"
	   text += "需要#v4000053# * 50\r\n"
	   text += "需要#v4000054# * 50\r\n"
	   text += "需要#v4251402# * 25\r\n"
	   text += "需要#v4011008# * 2\r\n"
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 20){
if (cm.itemQuantity(1112318) >=1 && cm.itemQuantity(4001080) >=10&& cm.itemQuantity(4001094) >=20&& cm.itemQuantity(4002000) >=20&& cm.itemQuantity(4002001) >=20 && cm.itemQuantity(4002002) >=20 && cm.itemQuantity(4002003) >=20 && cm.itemQuantity(4011008) >=4){
cm.gainItem(1112318,-1);
cm.gainItem(4001080,-10);
cm.gainItem(4001094,-20);
cm.gainItem(4002000,-20);
cm.gainItem(4002001,-20);
cm.gainItem(4002002,-20);
cm.gainItem(4002003,-20);
cm.gainItem(4011008,-4);
cm.gainItem(1112319,1);

	cm.sendNext("#b鸳鸯夫妻戒指提示:#r\r\n成功完成鸳鸯夫妻结婚戒指2克拉，恭喜你！")
cm.dispose();
}else{
	var text = "#r制作#v1112319#鸳鸯夫妻结婚戒指2克拉 * 1\r\n"
	   
	   text += "需要#v1112318# * 1\r\n"
	   text += "需要#v4001080# * 10\r\n"
	   text += "需要#v4001094# * 20\r\n"
       text += "需要#v4002000# * 20\r\n"
	   text += "需要#v4002001# * 20\r\n"
	   text += "需要#v4002002# * 20\r\n"
	   text += "需要#v4002003# * 20\r\n"
	   text += "需要#v4011008# * 4\r\n"
	  
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 30){
if (cm.itemQuantity(1112319) >=1 && cm.itemQuantity(4021010) >=40 && cm.itemQuantity(4250802) >=50&& cm.itemQuantity(4250902) >=50&& cm.itemQuantity(4251002) >=50  && cm.itemQuantity(4251102) >=50  && cm.itemQuantity(4251202) >=30  && cm.itemQuantity(4011008) >=4){
cm.gainItem(1112319,-1);
cm.gainItem(4021010,-40);
cm.gainItem(4250802,-50);
cm.gainItem(4250902,-50);
cm.gainItem(4251002,-50);
cm.gainItem(4251102,-50);
cm.gainItem(4251202,-30);
cm.gainItem(4011008,-4);
cm.gainItem(1113002,1);
	cm.sendNext("#b鸳鸯夫妻戒指提示:#r\r\n成功完成鸳鸯夫妻结婚戒指3克拉，恭喜你！")
cm.dispose();
}else{
	var text = "#r制作#v1113002#鸳鸯夫妻结婚戒指3克拉 * 1\r\n"
	   
	   text += "需要#v1112319# * 1\r\n"
	   text += "需要#v4021010# * 40\r\n"
	   text += "需要#v4250802# * 50\r\n"
	   text += "需要#v4250902# * 50\r\n"
	   text += "需要#v4251002# * 50\r\n"
	   text += "需要#v4251102# * 50\r\n"
	   text += "需要#v4251202# * 30\r\n"
	   text += "需要#v4011008# * 4\r\n"
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 40){
if (cm.itemQuantity(1113002) >=1  && cm.itemQuantity(4000463) >=40 && cm.getMeso() >=50000000 ){
cm.gainItem(1113002,-1);
cm.gainItem(4000463,-40);
cm.gainMeso(-50000000);
cm.gainItem(1112404,1);
	cm.sendNext("#b极光戒指提示:#r\r\n成功完成极光戒指，恭喜你！")
cm.dispose();
}else{
	var text = "#r制作#v1112404#极光戒指 * 1\r\n"
	   
	   text += "需要#v1113002# * 1\r\n"
	   text += "需要#v4000463# * 40\r\n\r\n"
	   text += "需要游戏币5000万\r\n"
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 50){
if (cm.itemQuantity(1112485) >=1 && cm.itemQuantity(4000313) >=500 && cm.itemQuantity(4000270) >=500 && cm.itemQuantity(4000272) >=350 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4000175) >=10 && cm.itemQuantity(4000151) >=20 && cm.itemQuantity(4000152) >=20 && cm.itemQuantity(4002000) >=10&& cm.itemQuantity(4002001) >=10&& cm.itemQuantity(4002002) >=10&& cm.itemQuantity(4002003) >=10){
cm.gainItem(1112495,50,50,50,50,300,300,50,50,20,20,20,20,20,20);
cm.gainItem(1112485,-1);
//cm.gainItem(4032398,-10);
cm.gainItem(4000313,-500);
cm.gainItem(4000270,-500);
cm.gainItem(4000272,-350);
cm.gainItem(4001084,-1);
cm.gainItem(4000175,-10);
cm.gainItem(4000151,-20);
cm.gainItem(4000152,-20);
cm.gainItem(4002003,-10);
cm.gainItem(4002000,-10);
cm.gainItem(4002001,-10);
cm.gainItem(4002002,-10);
	cm.sendNext("#b升级提示:#r\r\n老公老婆戒指LV50了，恭喜你！")
cm.dispose();
}else{
var text = "老公老婆戒指LV40 * 1\r\n"
	   
	   text += "需要#v4000313# * 500\r\n"
	   text += "需要#v4000270# * 500\r\n"
	   text += "需要#v4000272# * 350\r\n"
	   text += "需要#v4000151# * 20\r\n"
	   text += "需要#v4000152# * 20\r\n"
	   text += "需要#v4002000# * 10\r\n"
       text += "需要#v4002001# * 10\r\n"
	   text += "需要#v4002002# * 10\r\n"
	   text += "需要#v4002003# * 10\r\n"
	   text += "需要#v4000175# * 10\r\n"
	   text += "需要#v4001084# * 1\r\n"
cm.sendOk(text)
cm.dispose();
}
            }
        } 
    } 
}