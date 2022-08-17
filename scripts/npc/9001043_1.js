var IconB = "#fUI/UIMiniGame/mapleOneCard/MyCharacterSlot/shining/8#";//闪耀的星星
var IconB = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var IconC = "#fEffect/SetItemInfoEff/425/stand2/4#";//阳光海滩
var IconD = "#fEffect/SetItemInfoEff/1/11#";//战斗标识
var IconE = "#fEffect/SetItemInfoEff/297/4#";//雪花标示
var IconF = "#fEffect/SetEff/0/effect/1#";//双龙标示

var waitMapA = 101050000;      // 等待地图 阿里安特
var changeJobMap = 50000;    //   新手地图

var status;
var txt;

var ItemList = Array(
    Array(1672000, 1),
    Array(1662008, 1),
    Array(5530008, 100),
    Array(3010036, 1),
    Array(3010025, 1),
    Array(3010203, 1),
    Array(3010086, 1),
    Array(2431855, 1),
    Array(1182023, 1), 
    Array(1003552, 1),
	Array(2500000, 1),
	Array(2501000, 1),
    Array(1102441, 1),
    Array(1132154, 1),
    Array(1152089, 1),
    Array(1082433, 1),
    Array(1052461, 1),
    Array(1072666, 1),
    Array(1042314, 1),
    Array(1062110, 1),
    Array(1032255, 1),
    Array(1002186, 1),
    Array(1072153, 1),
    Array(1702512, 1),
    Array(5150040, 30),
    Array(5152053, 30),
    Array(5151036, 1),
    Array(2430011, 1),
	Array(1012553, 1),
	Array(2430154, 1),
    Array(5153015, 1)


);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            txt = "\t\t\t\t " + IconF + "\r\n";
            txt += "#d 　　   尊敬的 [ #r#h ##d ] 欢迎加入#e#b月光冒险岛#n#k\r\n";
            txt += " #b    花少许的时间了解下 #r梦幻冒险岛#b 有哪些特色吧#k\r\n\r\n";
            txt += " 　#d经验倍率 [ #r30#d ]　金币倍率 [ #r3#d ]　掉宝倍率 [ #r10#d ]#k\r\n\r\n";
            txt += " #b- 游戏说明#k\r\n";
            txt += " #d月光冒险岛严禁RMB线下交易，管控金币市场不让道具贬值#k\r\n";
            txt += " #b全线上调装备，抽奖爆率，让玩家更好的体验冒险岛乐趣#k\r\n";
            //txt += " #b新手就送时限道具#i1142802#【200全属性】时装翅膀#k\r\n";
            txt += " #d全仿官方副本流程，各种最新BOSS等你来梦幻体验#k\r\n";
            txt += " #b梦幻承诺绝对公平公正 杜绝快餐服 共创冒险新时代#k\r\n\r\n";
            txt += " #b- 功能说明#k\r\n";
            txt += " #r快捷功能 [ @拍卖 ] 拍卖行 [ @Fm ] 回自由 [ @ea ] 解卡#k\r\n";
            txt += " #r商城拍卖相结合 - 方便 笔记本 及 台式机 尺寸小的玩家#k\r\n";
            txt += " #b- 新手道具#k\r\n";
            txt += " ---------------------------------------------------#k\r\n";
            for (var i = 0; i < ItemList.length; i++) {
                txt += "#i" + ItemList[i] + "#  ";
                if (i != 0 && (i + 1) % 7 == 0) {
                    txt += "\r\n";
                }
            }
            txt += " ---------------------------------------------------#k\r\n";
            txt += " \r\n";
            txt += " #b- 副本介绍#k\r\n";
            txt += " #d不定期的制作 #r新副本#d 且 #r组织娱乐性活动#d 家住驻地等#k\r\n";
            txt += " #r　　更多精彩信息 敬请期待 畅享梦幻天堂 不容错过#k\r\n";
            cm.setBossLogAcc("xxx");
            cm.sendSimpleS(txt, 3);
        } else if (status == 1) {
            if (cm.getBossLog("新手道具礼包", -1) < 1) {

                if (cm.getPlayerStat("GENDER") == 0) {
                    for (var i = 0; i < ItemList.length; i++) {
                        cm.gainItem(ItemList[i][0], ItemList[i][1]);
                    }
                    //cm.gainItem(2432557, 1);
                    cm.setBossLog("新手道具礼包", -1);
                    if (cm.getJobId() == 4002) {
                        cm.getPlayer().startMapTimeLimitTask(1, cm.getMap(changeJobMap));
                    } else {
                        cm.getPlayer().startMapTimeLimitTask(1, cm.getMap(changeJobMap));
                    }
                    cm.playerMessage(1, "恭喜你领到了新手礼包道具\r\n\r\n本服经验30倍 金币/爆率5倍\r\n\r\n祝您梦幻冒险旅途愉快");
                } else {
                    for (var i = 0; i < ItemList.length; i++) {
                        cm.gainItem(ItemList[i][0], ItemList[i][1]);
                    }
                    //cm.gainItem(2432559, 1);
                    cm.setBossLog("新手道具礼包", -1);
                    if (cm.getJobId() == 4002) {
                        cm.getPlayer().startMapTimeLimitTask(1, cm.getMap(changeJobMap));
                    } else {
                        cm.warp(waitMapA);
                        cm.getPlayer().startMapTimeLimitTask(1, cm.getMap(changeJobMap));
                    }
                    cm.playerMessage(1, "恭喜你领到了新手礼包道具\r\n\r\n本服经验30倍 金币/爆率5倍\r\n\r\n祝您梦幻冒险旅途愉快");
                }
				cm.getPlayer().gainHonor(10000);
                cm.gainItemPeriod(5211060, 1, 2 * 60 * 60 * 1000);// 三倍经验
                /*cm.gainItemPeriod(5360015, 1, 2 * 60 * 60 * 1000);// 双爆
				cm.gainPet(5000016, "云豹", 1, 0, 100, 90 ,true);
                cm.gainNX(2, 5000);
                cm.gainMeso(500000);
                cm.gainItem(1050177,1);
                cm.gainItem(2431935,15);
                cm.gainItem(2432644,15);
                cm.gainItem(1702585,1);*/
                //cm.gainItem(2000005, 300);// 超级药水
                //cm.gainItem(2431092, 1);
                //cm.gainItem(2430505, 1);
                //-----------------------//
                var ii = cm.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1190400)).copy(); // 生成一个Equip类
                toDrop.setStr(15); //装备力量
                toDrop.setDex(15); //装备敏捷
                toDrop.setInt(15); //装备智力
                toDrop.setLuk(15); //装备运气
                toDrop.setAcc(15); //命中率
                toDrop.setMatk(5); //魔法攻击
                toDrop.setWatk(5); //攻击攻击 
                toDrop.setWdef(20);//物理防御
                toDrop.setMdef(20);//魔攻防御
                toDrop.setAvoid(20);//回避率
                toDrop.setHands(8);//手技
                toDrop.setSpeed(8);//移动速度
                toDrop.setJump(8);//跳跃
                toDrop.setEnhance(30); //星级
                cm.addFromDrop(cm.getC(), toDrop, true);
                var ii = cm.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // 生成一个Equip类
                toDrop.setStr(100); //装备力量
                toDrop.setDex(100); //装备敏捷
                toDrop.setInt(100); //装备智力
                toDrop.setLuk(100); //装备运气
                toDrop.setMatk(100); //魔法攻击
                toDrop.setWatk(100); //攻击攻击 
                cm.addFromDrop(cm.getC(), toDrop, true);
                /*var ii = cm.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1112918)).copy(); // 生成一个Equip类
                var timeStamp = java.lang.System.currentTimeMillis();
                var expirationDate = timeStamp + (7) * 24 * 60 * 60 * 1000;
                toDrop.setExpiration(expirationDate);
                toDrop.setStr(5); //装备力量
                toDrop.setDex(5); //装备敏捷
                toDrop.setInt(5); //装备智力
                toDrop.setLuk(5); //装备运气
                toDrop.setAcc(5); //命中率
                toDrop.setMatk(5); //魔法攻击
                toDrop.setWatk(5); //攻击攻击 
                toDrop.setWdef(5);//物理防御
                toDrop.setMdef(5);//魔攻防御
                toDrop.setAvoid(5);//回避率
                toDrop.setHands(8);//手技
                toDrop.setSpeed(8);//移动速度
                toDrop.setJump(8);//跳跃
               // toDrop.setEnhance(0); //星级
                cm.addFromDrop(cm.getC(), toDrop, true);
                ii = cm.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1112141)).copy(); // 生成一个Equip类
                var timeStamp = java.lang.System.currentTimeMillis();
                var expirationDate = timeStamp + (7) * 24 * 60 * 60 * 1000;

                ii = cm.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1112252)).copy(); // 生成一个Equip类
                var timeStamp = java.lang.System.currentTimeMillis();
                var expirationDate = timeStamp + (7) * 24 * 60 * 60 * 1000;
                ii = cm.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1112918)).copy(); // 生成一个Equip类
                var timeStamp = java.lang.System.currentTimeMillis();
                var expirationDate = timeStamp + (7) * 24 * 60 * 60 * 1000;*/
            } else {
                if (cm.getJobId() == 4002) {
                    cm.getPlayer().startMapTimeLimitTask(1, cm.getMap(changeJobMap));
                } else {
                    cm.warp(waitMapA);
                    cm.getPlayer().startMapTimeLimitTask(1, cm.getMap(changeJobMap));
                }
                cm.playerMessage(1, "恭喜搭乘豪华座驾 - 前往怪兽新手大陆\r\n\r\n请观察搭乘时间 时间结束开始您的大冒险\r\n\r\n祝您梦幻冒险旅途愉快");
            }
            cm.worldSpouseMessage(0x15, "【新人公告】：[ " + cm.getChar().getName() + " ] 玩家 从冒险汪洋中登陆到了月光冒险岛 - 让我们一起探寻这未知的冒险领域吧");
            cm.dispose();


        }
    }
}