var status = 0;

var fourAttributeRule = [
  //四维 每1点获得1分
  [1, 1], //战士
  [1, 1], //法师
  [1, 1], //弓箭手
  [1, 1], //飞侠
  [1, 1], //海盗
  [1, 1], //战神
];

var aggressivityRule = [
  //双攻 每1点获得2分
  [1, 2], //战士
  [1, 2], //法师
  [1, 2], //弓箭手
  [1, 2], //飞侠
  [1, 2], //海盗
  [1, 2], //战神
];

//装备检测位置
var checkList = [
  //位置名称 位置编号
  ["骑宠时装", -118],
  ["骑宠", -18],
  ["鞍子时装", -119],
  ["鞍子", -19],
  ["鞋子时装", -107],
  ["鞋子", -7],
  ["手套时装", -108],
  ["手套", -8],
  ["裤子时装", -106],
  ["裤子", -6],
  ["腰带", -29],
  ["上衣时装", -105],
  ["上衣", -5],
  ["披风时装", -109],
  ["披风", -9],
  ["勋章", -26],
  ["帽子时装", -101],
  ["帽子", -1],
  ["前额时装", -102],
  ["前额", -2],
  ["眼饰时装", -103],
  ["眼饰", -3],
  ["吊坠", -17],
  ["武器时装", -111],
  ["武器", -11],
  ["副手时装", -110],
  ["副手", -10],
  ["耳环时装", -104],
  ["耳环", -4],
  ["戒指", -13],
  ["戒指", -15],
  ["戒指", -12],
  ["戒指", -16],
  ["戒指", -27],
  ["戒指", -28],
  ["戒指时装", -113],
  ["戒指时装", -115],
  ["戒指时装", -112],
  ["戒指时装", -116],
  ["戒指时装", -127],
  ["戒指时装", -128],
  ["宠物时装", -114],
  ["宠物时装", -121],
  ["宠物时装", -123],
  ["宠物时装", -122],
  ["宠物时装", -124],
  ["宠物时装", -125],
];

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
    var totalScore = 0; //总分
    var job = cm.getPlayer().getJob();
    var inx = -1;
    if (parseInt(job / 100) == 20 || parseInt(job / 100) == 21) {
      inx = 5;
    } else if (parseInt(job / 100) > 0) {
      switch (parseInt(job / 100) % 10) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          inx = (parseInt(job / 100) % 10) - 1;
          break;
      }
    }
    if (inx < 0) {
      cm.getPlayer().dropMessage(
        5,
        "你的职业不参与战斗力信息统计，请联系管理员，职业id[" + job + "]"
      );
      cm.dispose();
      return;
    }

    for (var i in checkList) {
      var obj = cm.getInventory(-1).getItem(checkList[i][1]); //装备obj
      var scoreList = new Array();
      if (obj != null) {
        var Score = 0;
        if (true) {
          //四维
          var str_ = obj.getStr();
          var dex_ = obj.getDex();
          var int_ = obj.getInt();
          var luk_ = obj.getLuk();
          var avg = Math.floor(str_ + dex_ + int_ + luk_);
          var fourAttributeScore =
            Math.floor(avg / fourAttributeRule[inx][0]) *
            fourAttributeRule[inx][1];
          Score += fourAttributeScore;
          scoreList.push(fourAttributeScore);
        } else {
          scoreList.push(0);
        }
        if (true) {
          //双攻
          var watk_ = obj.getWatk();
          var matk_ = obj.getMatk();
          var avg = Math.floor(watk_ + matk_);
          var aggressivityScore =
            Math.floor(avg / aggressivityRule[inx][0]) *
            aggressivityRule[inx][1];
          Score += aggressivityScore;
          scoreList.push(aggressivityScore);
        } else {
          scoreList.push(0);
        }

        totalScore += Score; //累计总分
      }
    }
    //人物属性
    var str_ = cm.getPlayer().getStr();
    var dex_ = cm.getPlayer().getDex();
    var int_ = cm.getPlayer().getInt();
    var luk_ = cm.getPlayer().getLuk();
    var avg = Math.floor(str_ + dex_ + int_ + luk_);
    var fourAttributeScore =
      Math.floor(avg / fourAttributeRule[inx][0]) * fourAttributeRule[inx][1];
    totalScore += fourAttributeScore;
    scoreList.push(fourAttributeScore);

    var characterId = cm.getPlayer().getId();
    var selectSql =
      "select t.* from equip_score t where character_id=" + characterId;
    var list = cm.sql_Select(selectSql);
    if (list.size() == 0) {
      var mainIsertSql =
        "insert into equip_score(character_id,total_score,job,name) values (?, ?, ?, ?)";
      cm.sql_Update(
        mainIsertSql,
        cm.getPlayer().getId(),
        totalScore,
        cm.getPlayer().getJob(),
        cm.getPlayer().getName()
      );
    } else {
      var hisScore = list[0].get("total_score");
      if (hisScore != totalScore) {
        //update
        var mainUpdateSql =
          "update equip_score set total_score=" + totalScore + " ";
        mainUpdateSql += " where character_id=" + characterId;
        cm.sql_Update(mainUpdateSql);
      }
    }
    cm.getPlayer().dropMessage(
      5,
      "您的战斗力信息已更新，您目前的战斗力为[" + totalScore + "]"
    );
    cm.dispose();
  }
}
