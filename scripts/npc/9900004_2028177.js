 
status = -1;
var itemList = Array(
		                  



Array(2381000, 100, 1, 1), //��ľ����Ƭ
Array(2381001, 100, 1, 1), //��
Array(2381002, 100, 1, 1), //��
Array(2381003, 100, 1, 1), //��
Array(2381004, 100, 1, 1), //��
Array(2381005, 100, 1, 1), //��
Array(2381006, 100, 1, 1), //��
Array(2381007, 100, 1, 1), //��
Array(2381008, 100, 1, 1), //��
Array(2381009, 100, 1, 1), //��
Array(2381010, 100, 1, 1), //��
Array(2381011, 100, 1, 1), //��
Array(2381012, 100, 1, 1), //��
Array(2381013, 100, 1, 1), //��
Array(2381014, 100, 1, 1), //��
Array(2381015, 100, 1, 1), //��
Array(2381016, 100, 1, 1), //��
Array(2381017, 100, 1, 1), //��
Array(2381018, 100, 1, 1), //��
Array(2381019, 100, 1, 1), //��
Array(2381020, 100, 1, 1), //��
Array(2381021, 100, 1, 1), //��
Array(2381022, 100, 1, 1), //��
Array(2381023, 100, 1, 1), //��
Array(2381024, 100, 1, 1), //��
Array(2381025, 100, 1, 1), //��
Array(2381026, 100, 1, 1), //��
Array(2381027, 100, 1, 1), //��
Array(2381028, 100, 1, 1), //��
Array(2381029, 100, 1, 1), //��
Array(2381030, 100, 1, 1), //��
Array(2381031, 100, 1, 1), //��
Array(2381032, 100, 1, 1), //��
Array(2381033, 100, 1, 1), //��
Array(2381034, 100, 1, 1), //��
Array(2381035, 100, 1, 1), //��
Array(2381036, 100, 1, 1), //��
Array(2381037, 100, 1, 1), //��
Array(2381038, 100, 1, 1), //��
Array(2381039, 100, 1, 1), //��
Array(2381040, 100, 1, 1), //��
Array(2381044, 100, 1, 1), //��
Array(2381045, 100, 1, 1), //��
Array(2381046, 100, 1, 1), //��
Array(2381047, 100, 1, 1), // ����?
Array(2381048, 100, 1, 1), //Ӣ����ĸA��Ƭ
Array(2381049, 100, 1, 1), //��
Array(2381050, 100, 1, 1), //��
Array(2381051, 100, 1, 1), //��
Array(2381052, 100, 1, 1), //��
Array(2381053, 100, 1, 1), //��
Array(2381054, 100, 1, 1), //��
Array(2381055, 100, 1, 1), //��
Array(2381056, 100, 1, 1), //��
Array(2381057, 100, 1, 1), //��
Array(2381058, 100, 1, 1), //��
Array(2381059, 100, 1, 1), //��
Array(2381060, 100, 1, 1), //��
Array(2381061, 100, 1, 1), //��
Array(2381062, 100, 1, 1), //��
Array(2381063, 100, 1, 1), //��
Array(2381064, 100, 1, 1), //��
Array(2381065, 100, 1, 1), //��
Array(2381066, 100, 1, 1), //��
Array(2381067, 100, 1, 1), //��
Array(2381068, 100, 1, 1), //��
Array(2381069, 100, 1, 1), //��
Array(2381070, 100, 1, 1), //��
Array(2381071, 100, 1, 1), //��
Array(2381072, 100, 1, 1), //��
Array(2381073, 100, 1, 1), //Ӣ����ĸZ��Ƭ
Array(2381082, 100, 1, 1), //���ĵĹ�ľ����Ƭ
Array(2381083, 100, 1, 1) // ����Ľ��?������?


		                        

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("�ټ��ð��͡�");
            im.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(2028177,1)) {
				
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("�򿪵�2ҳ��Ƭ��ɻ�����¿�Ƭ֮һ:" + str1);
				}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "��2ҳ��Ƭ��", notice);
            if (item != -1) {
                cm.gainItem(2028177, -1);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk();
            }
            cm.safeDispose();
        } else {
            cm.safeDispose();
        }
    }
}
















