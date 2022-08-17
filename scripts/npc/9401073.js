var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fEffect/CharacterEff/1112960/3/0#";//"+z+"//美化
var zz = "#fUI/UIPVP.img/ChampionMark/4#";//
var kkk1 = "#fMap/MapHelper.img/weather/thankyou/7#";
var kkk2 = "#fMap/MapHelper.img/weather/starPlanet2/8#";
var kkkk = "#fUI/UIPVP.img/MiniMapIcon/star#";//小黄心
var BOSS = "#fUI/UIWindow2/MobGage/SmartMobnotice/backgrnd#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fEffect/ItemEff/1112811/0/0#";//音符
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fUI/UIPVP.img/MiniMapIcon/star#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fUI/UIPVP.img/MiniMapIcon/star#";//彩色五角星
var feng = "#v4032733#"
var sss ="#fEffect/BasicEff.img/JobChangedElf/13#";////双弩女王图标
var bobo1 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Basic/0#";//迷你笑脸
var bobo2 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Basic/1#";//迷你愁脸
var bobo3 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Basic/2#";//迷你开心
var bobo4 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/0#";//迷你生气
var bobo5 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/1#";//迷你猥琐笑
var bobo6 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/2#";//迷你闭嘴
var bobo7 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/3#";//迷你开怀大笑
var bobo8 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/4#";//迷你目瞪口呆
var bobo9 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/5#";//迷你哭泣
var bobo10 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/6#";//迷你凶恶
var bobo11 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/7#";//迷你惊吓
var kkk = "#fUI/UIWindow2.img/AttackRangking/1#";//小皇冠
var ob13 = "#fUI/UIWindow2.img/CN_Santa/backgrnd#";//长条
var F118 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/0#";//迷你女皇
var F119 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/1#";//迷你女皇
var F120 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/2#";//迷你女皇
var F121 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/3#";//迷你女皇
var F122= "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/4#";//迷你女皇
var F123 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/5#";//迷你女皇
var ob6 = "#fEffect/SetEff.img/181/effect/walk1/2#";//狗拉车
var 万能 = "#fItem/Etc/0400.img/04009388/info/iconRaw#";//迷你女皇
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
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
    } 
    else if (status == 0) { //
		var selStr = "\r\n#e#b游戏内所有更新,都会实时更新在本脚本中,永不删除!\r\n";

		selStr += "#r#L21##e5/24更新的内容#l\r\n";

		selStr += "#r#L20##e5/5更新的内容#l\r\n";

		selStr += "#r#L19##e5/4更新的内容#l\r\n";

		selStr += "#r#L18##k5/3更新的内容#l\r\n";

		selStr += "#r#L17##k5/1更新的内容#l\r\n";

		selStr += "#r#L16##k4/30更新的内容#l\r\n";

		selStr += "#r#L15##k4/29更新的内容#l\r\n";

		selStr += "#r#L14##k4/28更新的内容#l\r\n";

		selStr += "#r#L13##k4/27更新的内容#l\r\n";

		selStr += "#r#L12##k4/23更新的内容#l\r\n";

		selStr += "#r#L11##k4/22更新的内容#l\r\n";

		selStr += "#r#L10##k4/20更新的内容#l\r\n";

		selStr += "#r#L9##k4/19更新的内容#l\r\n";

		selStr += "#r#L8##k4/18更新的内容#l\r\n";

		selStr += "#r#L7##k4/15更新的内容#l\r\n";

		selStr += "#r#L6##k4/14更新的内容#l\r\n";

		selStr += "#r#L5##k4/13更新的内容#l\r\n";

		selStr += "#r#L4##k4/12更新的内容#l\r\n";

		selStr += "#r#L3##k4/11更新的内容#l\r\n";

		selStr += "#r#L2##k4/10更新的内容#l\r\n";

		selStr += "#r#L1##k4/8更新的内容#l\r\n";

		selStr += "#r#L0##k4/5更新的内容#l\r\n";

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
            cm.sendOk("#e#r推出免费盒子(拍卖-新手中心-免费盒子)\r\n以下取消的功能全部整合到了免费盒子中\r\n取消boss重置,取消一键开口袋,取消学习特殊技能,取消洗血洗蓝,取消点劵商店 三倍经验卡 ,取消点劵商店 金币商店 副手商店\r\n以上取消的功能全部整合到了免费盒子中\r\n更改拍卖-商店中心 为 货币中心\r\n更改拍卖-副手商店 为 杂货商店");
            cm.dispose();
	    break;
           case 1:
            cm.sendOk("#e#rboss血量修改\r\n黛米安-1 90WE血改为50WE血\r\n黛米安-2 100WE血改为 70WE血\r\n普通路西德第一阶段 3000WE 改为 10WE  \r\n路西德第二阶段 9000WE改为20WE 出神秘武器\r\n\r\n困难路西德第一阶段 9000WE 改为 30WE \r\n路西德第二阶段 不知道多少亿改为 60WE 出神秘武器,女武神之心\r\n困难暴君 每日次数由三次改为一次\r\n路西德普通困难 每日次数由三次改为一次\r\n\r\n取消商城星星购买\r\n更改星星强化概率 \r\n950|900|850|850|800|750|700|650|600|550|450|350|300|300|300|250|250|200|200|100|100|50|30|20|10\r\n950=95% 10=1% 以此类推\r\n以上为1-25x强化概率(本服强星不会炸装备)\r\n破功系统:21E-无限E 材料更改为1:3000\r\n更新累计充值脚本(具体查看群文件-累计充值)\r\n组队一条龙增加  冬日币X1\r\n破功转移由 30e更改为50e 蘑菇币转移取消\r\n装备潜能转移 金币转移取消 保留蘑菇币转移\r\n元宝商店  关闭理财 关闭激活技能\r\n冬日币每日组队一条龙获取1枚\r\n取消货币商店所有破功石\r\n货币商店更新修改物品/物品价格\r\n点券商店取消怪怪相关物品,添加至金币商店购买\r\n更新累计赞助每日获得免费武器破功");
            cm.dispose();
	    break;
           case 2:
            cm.sendOk("#e#r理财脚本开通(自由市场-财神爷)\r\n每日组队一条龙奖励,增加2个蘑菇币\r\n在线福利时间缩短时常 在线最高增加3个蘑菇币\r\n金币商店X卷更改为10E\r\n火焰狼一次给10个纪念币,火花给一个");
            cm.dispose();
	    break;
           case 3:
            cm.sendOk("#e#r拍卖-每日搬砖(添加刷火焰羽毛地图)\r\n取消存取款脚本,钱直接放仓库即可!\r\n排行榜取消不必要的排行\r\n修改洗血洗蓝使用金币数量统一1:1w金币\r\n在线福利300分钟 蘑菇币改为2个,每日140任务增加一个蘑菇币\r\n免费盒子,添加到新手礼包(更换道具id)\r\n椅子抽奖npc取消,添加到组队币商店-消耗-5个组队币买\r\n理财开通增加对应累计消费\r\n困难暴君血量降低4WE");
            cm.dispose();
	    break;
           case 4:
            cm.sendOk("#e#r拍卖-杂货商店更改为综合商店(增加金币/点劵/杂货/副手四种商店)\r\n拍卖-新手中心-添加去除头顶灯泡功能");
            cm.dispose();
	    break;
           case 5:
            cm.sendOk("#e#r更改组队副本离开后传送到副本以外的地图!\r\n修复由拍卖场/破功脚本引出的一些问题\r\n杂货商店添加海盗子弹");
            cm.dispose();
	    break;
           case 6:
            cm.sendOk("#e#r金币商店怪怪卡 星星 价格下调\r\n一条龙领取时添加醒目提示!\r\n点券商店下架20%混沌卷");
            cm.dispose();
	    break;
           case 7:
            cm.sendOk("#e#r组队一条龙御龙魔副本改为完成五次即可\r\n点券商店添加神奇铁砧");
            cm.dispose();
	    break;
           case 8:
            cm.sendOk("#e#r火焰狼给改为只有一线可进\r\n火焰羽毛由2%爆率更改为10%爆率\r\n破功币两个地图爆率改为10%原5%~6%");
            cm.dispose();
	    break;
           case 9:
            cm.sendOk("#e#r一条龙废弃副本改为5次即可\r\n回收脚本已开(射手村-星缘NPC)\r\n回收脚本140-150分解增加小暴君收回");
            cm.dispose();
	    break;
           case 10:
            cm.sendOk("#e#r威尔BOSS增加1000W破功石(100%掉落)\r\n路西德由于操作失误血量是原本的10/1,现恢复正常!\r\n普通狮子王出碎布必出1个\r\n秘法升级药水取消使用限制");
            cm.dispose();
	    break;
           case 11:
            cm.sendOk("#e#r取消破功地图,取消破功传送\r\n添加新版破功地图,由自由市场(魔法师进入)\r\n自由市场增加王美女NPC(娱乐脚本)\r\n拍卖增加跑跑乐问题(脚本尽情期待)\r\n测试拍卖(已开)\r\n拍卖不可上架火花物品,之前的可以上架\r\n修复火花显示问题");
            cm.dispose();
	    break;
           case 12:
            cm.sendOk("#e#r拍卖-跑跑乐(测试阶段有问题反馈)\r\n娱乐副本内坐骑活动已开启\r\n破功地图爆率统一提高15%原10%\r\n破功地图时间由原来的五分钟改为10分钟传出地图");
            cm.dispose();
	    break;
           case 13:
            cm.sendOk("#e#r优化跑旗活动,待更新OX问答题库\r\n最高阶翅膀可以替换为透明翅膀(去除沙雕头显)");
            cm.dispose();
	    break;
           case 14:
            cm.sendOk("#e#r更改破功脚本刷怪npc\r\n寄售脚本严重问题现已关闭(自行取出物品)\r\n希纳斯更新掉落各种玩具物品温度计等\r\n黑龙五条线都能打了");
            cm.dispose();
	    break;
           case 15:
            cm.sendOk("#e#r优化组队一条龙\r\n王美女只能一线点开");
            cm.dispose();
	    break;
           case 16:
            cm.sendOk("#e#r骑宠活动添加大量新骑宠\r\n");
            cm.dispose();
	    break;
           case 17:
            cm.sendOk("#e#r航海已开(目前只有一线自由有NPC-黑魔法师左边那个)\r\n51活动抽奖与分解(目前只有一线自由有自由二层最右边两个NPC)\r\n无限火力正在制作当中\r\n装备进阶新增三种部位强化!");
            cm.dispose();
	    break;
           case 18:
            cm.sendOk("#e#r无限火力测试版(奖励还没写,将采用灵活奖励模式)\r\n查看拍卖-无限火力\r\n名片聊天戒指终于可以放肆带了\r\n查看拍卖-装备进阶-名聊戒指\r\n稀有时装更新大量名片聊天戒指");
            cm.dispose();
	    break;
           case 19:
            cm.sendOk("#e#r取消51礼包\r\n取消抽奖\r\n取消51回收\r\n点券商店增加喇叭购买");
            cm.dispose();
	    break;
           case 20:
            cm.sendOk("#e#r纪念币商店添加传说币兑换\r\n无限火力商店添加兑换20X卷\r\n坐骑活动添加少量坐骑\r\n万花币抽奖去除无效皮肤,添加少量皮肤");
            cm.dispose();
	    break;
           case 21:
            cm.sendOk("#e#r进阶系统更新戒指强化/神秘防具强化!\r\n新增副本Alma阿勒玛\r\nAlma副本出神秘防具强化物品/神秘力量强化物品/传说幸运箱/随机出一\r\n戒指强化-爱心材料已经添加到每日搬砖传送内\r\nBOSS传送新增Alma,至暗魔晶,敦凯尔\r\n至暗魔晶,敦凯尔出自选创世以及创世解封盒子 ");
            cm.dispose();
	    break;

         }
    }
}
