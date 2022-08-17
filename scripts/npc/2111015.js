var epp = "#fEffect/ItemEff/1048000/1/3#";//大爱心
var bb = "#fEffect/ItemEff/1004139/effect/jump/0#";//结婚用
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边

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
     var selStr = "\t\t\t\r\n";
		selStr +="#e#r#e#r"+xxx+"勇敢的冒险家.我敬佩你的勇气.既然敢来到这里.怎么样?有信心挑战角斗场里的终极变态BOSS吗?对于勇于挑战的冒险家.我可不会吝啬的.终极变态BOSS不仅极品掉落率翻倍.更是会掉落可以在我这里兑换全属性装备的#v4001210#哦!当然.好东西也不是那么好拿的.首先你得有足够的实力!变态BOSS相比于困难BOSS血量更是提高了10倍!而且限时10分钟内解决他!那么.现在你做好准备了吗.请回去召集你的朋友.至少三人组队.才可以进去挑战哦."+xxx+"#l#n\r\n";
		selStr +="#e#r#e#r#L1#"+xxx+"我要开始挑战"+xxx+"#l   #L2#"+xxx+"我要回去变得更强"+xxx+"#l#n\r\n";
		selStr +="#e#r#e#r#L3#"+xxx+"我要兑换属性装备"+xxx+"#n\r\n";

		selStr += "\r\n" + epp + "" + epp + "" + epp + "" + epp + ""


        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
             cm.dispose();
            cm.openNpc(9400206,"挑战BTBOSS"); //其他商城
            break;
        case 2:
               cm.dispose();
                cm.warp(101050000);
                cm.sendOk("加油变强吧少年!!!");
                break;

        case 3:
            cm.dispose();
            cm.openNpc(9400191); //其他商城
            break;

        case 4:
            cm.dispose();
            cm.openNpc(9900003,110); //喇叭商城
            break;

        case 5:
            cm.dispose();
            cm.openNpc(1530425); //强化商城
            break;

        case 6:
            cm.dispose();
            cm.openNpc(9900003,608); //玩具商城
            break;

        case 7:
            cm.dispose();
            cm.openNpc(1530065,17); //椅子商城
            break;

        case 8:
            cm.dispose();
            cm.openNpc(1530065,18); //点装商城
            break;

        case 9:
            cm.dispose();
            cm.openNpc(1530065,19); //特殊装备
            break;

        case 10:
            cm.dispose();
            cm.openNpc(1530065,20); //140装备商城
            break;

        case 11:
            cm.dispose();
            cm.openNpc(1530065,21); //150装备商城
            break;

        case 12:
            cm.dispose();
            cm.openNpc(1530065,22); //160装备商城
            break;


        }
    }
}

