load("nashorn:mozilla_compat.js");
importPackage(Packages.client.MapleCharacter);
importPackage(Packages.client.inventory);

var h = -1;
var h2 = -1;
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
var status;
var avail = "";
var slot = Array();

var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var status = -1;
var selection;
var 彩虹 = "#fEffect/ItemEff/1071085/effect/walk1/2#";
var 积分 = new Array(1, 2);
var 随机积分 = 积分[Math.floor(Math.random() * 积分.length)];
var jilusl = new Array();
var jilupd = new Array();
var jilname = new Array();
var playerChannel = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else if (mode == 0) {
    status--;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    var i = 0;

    var text = "";
    var text2 = "";

    var xmcserv =
      Packages.handling.channel.ChannelServer.getAllInstances().iterator();
    while (xmcserv.hasNext()) {
      var xmfwq = xmcserv.next();
      var cserv1 = xmfwq.getPlayerStorage().getAllCharacters().iterator();
      while (cserv1.hasNext()) {
        i++;
        var mch = cserv1.next();
        //mch.getClient().getChannel();
        jsname = mch.getName();
        mapid = mch.getMapId();
        pdid = mch.getClient().getChannel();

        jilname[i] = jsname;
        jilusl[i] = mapid;
        jilupd[i] = pdid;

        text += "#b#L" + i + "#" + jsname + "";
        for (
          var j =
            16 - jsname.replaceAll("[^\\x00-\\xff]", "**").getBytes().length;
          j > 0;
          j--
        ) {
          text += " ";
        }
        var mapName = mch.getMap().getMapName();
        text += "#d" + mapName;
        for (
          var j =
            20 - mapName.replaceAll("[^\\x00-\\xff]", "**").getBytes().length;
          j > 0;
          j--
        ) {
          text += " ";
        }
        text += "所在频道：" + jilupd[i] + "#l\r\n"; //["+mapid+"]显示玩家地图代码
      }
    }

    text2 += "当前在线人数：" + i + "  点击跟踪到\r\n";
    cm.sendSimple(text2 + text);
  } else if (status == 1) {
    sele = selection;

    if (Packages.client.MapleCharacter.getCharacterByName(jsname) == null) {
      cm.sendOk("您的輸入無效,請確認輸入角色是否存在");
      cm.dispose();
    } else {
      var avail = "";
      for (var i = -1; i > -199; i--) {
        if (
          Packages.client.MapleCharacter.getCharacterByName(jsname)
            .getInventory(MapleInventoryType.EQUIPPED)
            .getItem(i) != null
        ) {
          this.jj = Packages.client.MapleCharacter.getCharacterByName(jsname)
            .getInventory(MapleInventoryType.EQUIPPED)
            .getItem(i)
            .getPosition();
          avail +=
            "#L" +
            -jj +
            "##r#t" +
            Packages.client.MapleCharacter.getCharacterByName(jsname)
              .getInventory(MapleInventoryType.EQUIPPED)
              .getItem(i)
              .getItemId() +
            "##k\r\n";
        }
        slot.push(i);
      }
      cm.sendSimple(
        "#b\r\n#L9999#传送到该玩家身边#l\r\n\r\n"+
        "----------------------------------\r\n"+
        "以下是玩家#r" +
          jsname +
          "#k身上的装备#d点击想要的查询详细信息#k\r\n" +
          avail
      );
    }
  } else if (status == 2) {
    if (selection == 9999) {
        cm.getPlayer().ForcechangeChannel(jilupd[sele]);
        cm.dispose();
      }
    status = -1;
    jj = -selection;
    a = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getStr();
    b = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getDex();
    c = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getInt();
    d = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getLuk();
    e = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getHp();
    f = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getMp();
    g = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getWatk();
    h = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getMatk();
    i = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getWdef();
    j = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getMdef();
    k = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getAcc();
    l = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getAvoid();
    m = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getSpeed();
    n = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getJump();
    o = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getUpgradeSlots();
    p = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getLevel();
    var q = Packages.client.MapleCharacter.getCharacterByName(jsname)
      .getInventory(MapleInventoryType.EQUIPPED)
      .getItem(jj)
      .getOwner();
    cm.sendSimple(
      "以下為玩家#b" +
        jsname +
        "#k裝備 :#r#t" +
        Packages.client.MapleCharacter.getCharacterByName(jsname)
          .getInventory(MapleInventoryType.EQUIPPED)
          .getItem(jj)
          .getItemId() +
        "##k的詳細素質\r\n#d力量 :#k" +
        a +
        "\r\n#d敏捷 :#k" +
        b +
        "\r\n#d智力 :#k" +
        c +
        "\r\n#d幸運 :#k" +
        d +
        "\r\n#d生命 :#k" +
        e +
        "\r\n#d魔力 :#k" +
        f +
        "\r\n#d物攻 :#k" +
        g +
        "\r\n#d魔攻 :#k" +
        h +
        "\r\n#d物防 :#k" +
        i +
        "\r\n#d魔防 :#k" +
        j +
        "\r\n#d命中 :#k" +
        k +
        "\r\n#d迴避 :#k" +
        l +
        "\r\n#d速度 :#k" +
        m +
        "\r\n#d跳躍 :#k" +
        n +
        "\r\n#d可使用卷軸 :#k" +
        o +
        "\r\n#d已使用卷軸 :#k" +
        p +
        "\r\n#d道具刻名 :#k" +
        q
    );
  } else if (status == 3) {
  }
}
