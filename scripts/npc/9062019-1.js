/*
 脚本功能：拍卖脚本V2版
 */
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var ax = "#fEffect/CharacterEff/1112903/0/1#";  //红色爱心
var epp = "#fEffect/SetItemInfoEff/298/8#";  //蓝色四叶草
var qhtb ="#f\Effect/SetItemInfoEff/1/17#";
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //养老院带
var xg = "#fEffect/CharacterEff/1102355/3/0#"; 
var a = 0;
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
    if (status == 0) {
var selStr = "" + qhtb + "\t  " + qhtb + "#l\r\n\r\n";
selStr = "#r"+eff+""+xg+"强化中心"+xg+""+eff+ "#l\r\n";
selStr +="#l#n\r\n\r\n";
selStr +="#l#n\r\n\r\n";
		selStr +="#e#d#L6#"+xxx+"埃苏觉醒"+xxx+"#l  #L88#"+xxx+"最高觉醒"+xxx+"#l  #L9#"+xxx+"神秘觉醒"+xxx+"#l\r\n\r\n";
		//selStr +="\t\t\t   #e#r#L888#"+xxx+"每日破攻"+xxx+"#l\r\n.";
selStr +="\r\n";
selStr +="\r\n";;
	


        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 88:
            cm.dispose();
            cm.openNpc(1500031,"bljx"); //魔方商城
            break;
      
        case 5:
            cm.dispose();
            cm.openNpc(1500031,"swqh"); //魔方商城
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1500031,"pjqh");  //卷轴商城
            break;

        case 3:
            cm.dispose();
            cm.openNpc(1500031,"szjx"); //其他商城
            break;

        case 4:
            cm.dispose();
            cm.openNpc(1500031,"wqpg"); //喇叭商城
            break;

        case 1:
            cm.dispose();
            cm.openNpc(1500031,5); //强化商城
            break;
			case 6:
            cm.dispose();
            cm.openNpc(1033103,"asjx"); //强化商城
            break;
			case 7:
            cm.dispose();
            cm.openNpc(1500031,"gjqh"); //强化商城
            break;
			case 8:
            cm.dispose();
            cm.openNpc(1500031,"ttqh"); //强化商城
            break;
			case 9:
            cm.dispose();
            cm.openNpc(1500031,"smjx"); //强化商城
            break;
			case 10:
            cm.dispose();
            cm.openNpc(1500031,"jnhx"); //强化商城
            break;
			case 11:
            cm.dispose();
            cm.openNpc(9400002); //强化商城
            break;
			case 12:
            cm.dispose();
            cm.openNpc(9400002,"manaojiezhi"); //强化商城
            break;




        }
    }
}

