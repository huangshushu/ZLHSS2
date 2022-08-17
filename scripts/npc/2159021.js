var IconA = "#fEffect/CharacterEff/1051296/0/0#";//蓝色的空心
var IconB = "#fEffect/CharacterEff/forceAtom/0/atom/5/endEff/0#";//钻石

var Enx = ["管理员", "GM", "技术员", "Gm", "gm", "gM"];
var Enr = /^[^@\/\'\\\"#$%&\^\*]+$/;
var status = 0;
var chrName;
var txt;
var A;
var B;
var C;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        if (!im.haveItem(4001485, 30)) {
            im.playerMessage(1, "抱歉\r\n\r\n使用此功能将扣除 [ 30 ] 元宝\r\n\r\n请确认您是否拥有元宝");
            im.dispose();
            return;
        }

        txt = IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + "\r\n";
        txt += "　　#b尊敬的 [ #r#h ##b ] 玩家,这里是更名系统\r\n";
        txt += "　　#d请选择您需更名的角色 [ #r仅限同一帐号内#d ]#k\r\n";
        txt += "　  #d更名一回将扣除您 [ #r30#d ] 元宝当手续费用#k\r\n";

        var i = 0;
        var ii = 1;
        var AllRecord = im.getConnection().prepareStatement("SELECT id,accountid,name FROM characters").executeQuery();
        while (AllRecord.next()) {
            if (AllRecord.getString("accountid") == im.getPlayer().getAccountID() && (AllRecord.getString("id") != im.getPlayer().getId())) {
                txt += "#d#L" + AllRecord.getString("id") + "# - " + ii + " - 　#r#e" + AllRecord.getString("name") + "#l#k#n\r\n";
                ii++
            }
            i++;
        }


        im.sendSimple(txt);
    } else if (status == 1) {

        var i = 0;
        A = selection;
        B = im.getConnection().prepareStatement("SELECT * FROM characters").executeQuery();
        txt = IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + " " + IconA + "\r\n";
        txt += "　　　　#b尊敬的 [ #r#h ##b ] 玩家,您好\r\n\r\n";
        while (B.next()) {
            if (B.getString("id") == A) {
                C = B.getString("name");
            }
        }

        txt += "　　 #d您是否对 [ #r" + C + "#d ] 进行更名吗？#k\r\n";
        txt += "#r \t\t　请输入您想变更的新角色名#k\r\n\r\n"
        im.sendGetText(txt);

    } else if (status == 2) {
        chrName = im.getText();

        if (Enp("" + chrName + "") > 12) {
            im.playerMessage(1, "抱歉\r\n\r\n姓名不可超过12个字符");
            im.dispose();
            return;
        }

        if (Enr.test(chrName)) {

        } else {
            im.playerMessage(1, "抱歉\r\n\r\n特殊符号不允许使用");
            im.dispose();
            return;
        }

        if (TxTDisable(chrName, Enx)) {
            im.playerMessage(1, "抱歉\r\n\r\n禁用字符请勿输入\r\n\r\n例如-管理员-等信息");
            im.dispose();
            return;
        }


        B = im.getConnection().prepareStatement("SELECT * FROM characters").executeQuery();
        while (B.next()) {
            if (B.getString("name") == chrName) {
                im.playerMessage(1, "抱歉\r\n\r\n当前角色名已重名 请变更角色名");
                im.dispose();
                return;
            }
        }

        if (chrName == "") {
            im.playerMessage(1, "抱歉\r\n\r\n新角色名不可为空 请注意书写格式");
            im.dispose();
            return;
        }

        txt = IconB + " " + IconB + " " + IconB + " " + IconB + " " + IconB + " " + IconB + " " + IconB + " " + "\r\n\r\n";
        txt += "　　　　　　#d您的新角色名 [ #r" + chrName + "#d ] \r\n\r\n";
        txt += "#b　　　　确认无误请单击提交 祝您生活充满阳光#k\r\n\r\n ";

        im.sendSimple(txt);
    } else if (status == 3) {
        S_characters_Name(A, chrName);
        im.gainItem(4001485, -30);
        im.gainItem(2432825, -1);
        im.playerMessage(1, "恭喜您\r\n\r\n角色更名成功\r\n\r\n请更换角色进行查询\r\n\r\n祝您生活充满阳光");
        im.dispose();
    }
}


function S_characters_Name(ID, Number) {
    var i = 0;
    var Times = im.getConnection().prepareStatement("SELECT * FROM characters where id = " + ID + "").executeQuery();
    var update = im.getConnection().prepareStatement("update characters set name = ? where id = " + ID);
    update.setString(1, Number);
    update.executeUpdate();
}


Enp = function (inputStar) {
    var bytesCount = 0;
    for (var i = 0; i < inputStar.length; i++) {
        var c = inputStar.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) {
            bytesCount += 1;
        }
        else {
            bytesCount += 2;
        }
    }
    return bytesCount
}

function TxTDisable(str, Enx) {
    var i = 0, key;
    while ((key = Enx[i++]) && !(str.indexOf(key) + 1)) { };
    return i <= Enx.length;
};