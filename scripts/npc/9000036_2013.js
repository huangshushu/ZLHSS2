var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n"//3
			text += "          #r��ӭ��������ð�յ��ڶ��׶��ۼ�������Ʒ����#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
	        text += "               #L1#"+С�̻�+"#r��ȡ500������"+С�̻�+"#l\r\n\r\n"
			text += "    ��ȡǰ�뽫ԭ����������ָ���ڰ��ڣ�����������#l\r\n\r\n"
			//text += "#b#v1112900##z1112900#*1����������ά100����ħ50��\r\n"
			text += "#b#v4310060##z4310060#*4\r\n"
			text += "#b#v4310143##z4310143#*60\r\n"
			text += "#b#v4005004##z4005004#*100\r\n"
			text += "#b#v4251202##z4251202#*20\r\n"
			text += "#b#v2049100##z2049100#*40\r\n"
			text += "#b#v4310108##z4310108#*10\r\n"
			text += "#b#v3992025##z3992025#*4000\r\n"
			text += "#b#v4001165##z4001165#*2000\r\n"
			text += "#b#v2450000##z2450000#*5\r\n"
			text += "#b#v2041315##z2041315#*6\r\n"
			text += "#b#v2613000##z2613000#*5\r\n"
			text += "#b#v2046913##z2046913#*4\r\n"
			text += "#b#v4001245##z4001245#*1\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 8500 && cm.getPlayer().getBossLog("500������Ʒ���2",1) == 0 ){
				cm.gainItem(4310060,4);//����ʯ
				cm.gainItem(4310143,60);//BOSS��
				cm.gainItem(4005004,100);//��ˮ��
				cm.gainItem(4251202,20);//����ˮ��
				cm.gainItem(2049100,40);//����
				cm.gainItem(4310108,10);//URʱװ��ħ��
				cm.gainItem(3992025,4000);//ʥ������
				cm.gainItem(4001165,2000);//̫����Ĵ͸�
				cm.gainItem(2450000,5);//���˵�����
				cm.gainItem(2041315,6);//������
				cm.gainItem(2613000,5);//�ǻ�
				cm.gainItem(2046913,4);//����������ѡ
				cm.gainItem(4001245,1);//��
				cm.getPlayer().setBossLog("500������Ʒ���2",1,1);
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��500���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��500���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				cm.sendOk("#r��ϲ�㣬��ȡ�ɹ��ڶ��׶�500������Ʒ������");
				cm.dispose();
			}else{
				cm.sendOk("#r�������������˺��Ѿ���ȡ���������");
				cm.dispose();
			}
		}
    }
}
