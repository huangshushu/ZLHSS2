var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
		//cm.setmoneyb(9999999)
        var selStr = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
		selStr += "          #r��ӭ��������ð�յ��ۼ�������Ʒ����#k\r\n";
		selStr += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
        selStr += "    #b\t�ۼƶ�ȣ�#r"+cm.getzb()+"             #b�������֣�#r"+cm.getmoneyb()+"#k\r\n\r\n";
        selStr += "   #r#L0#"+С�̻�+"100������"+С�̻�+"#l       #r#L1#"+С�̻�+"200������"+С�̻�+"#l\r\n\r\n";
		selStr += "   #r#L2#"+С�̻�+"500������"+С�̻�+"#l       #r#L3#"+С�̻�+"1000������"+С�̻�+"#l\r\n\r\n";
		selStr += "   #r#L4#"+С�̻�+"2000������"+С�̻�+"#l      #r#L5#"+С�̻�+"4000������"+С�̻�+"#l\r\n\r\n";
		selStr += "   #r#L6#"+С�̻�+"5000������"+С�̻�+"#l      #r#L7#"+С�̻�+"7000������"+С�̻�+"#l\r\n\r\n";
		selStr += "   #r#L8#"+С�̻�+"8000������"+С�̻�+"#l";     //#r#L9#"+С�̻�+"15000������"+С�̻�+"#l\r\n\r\n
		//selStr += "   #r#L10#"+С�̻�+"20000������"+С�̻�+"#l     //#r#L11#"+С�̻�+"25000������"+С�̻�+"#l\r\n\r\n";
		//selStr += "   #r#L12#"+С�̻�+"30000������"+С�̻�+"#l\r\n\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9000036,1011);
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9000036,1012);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000036,1013);
            break;
		case 3:
            cm.dispose();
            cm.openNpc(9000036,1014);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9000036,1015);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9000036,1016);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9000036,1017);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9000036,1018);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9000036,1019);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9000036,110);
            break;
		case 10:
            cm.dispose();
            cm.openNpc(9000036,111);
			break;
		}
    }
}
