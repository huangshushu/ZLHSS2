//*  番茄市场脚本 *//
//* 作者：50009219*//

var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1112904/2/1#";//彩色五角星

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var time = new Date();
var sjr = time.getDay();
var xxtp = 0;
switch (sjr) {
    case 0:
        var xq = "星期日";
        break;
    case 1:
        var xq = "星期一";
        break;
    case 2:
        var xq = "星期二";
        break;
    case 3:
        var xq = "星期三";
        break;
    case 4:
        var xq = "星期四";
        break;
    case 5:
        var xq = "星期五";
        break;
    case 6:
        var xq = "星期六";
        break;
    default:
}
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.haveItem(2430865)) {
        var gbtp = "#r贵宾玩家#k";
    } else {
        var gbtp = "普通玩家";
    }
    if (status == 0 && mode == 0) {
        //cm.sendOk("#e#r　本商铺欢迎您的再次光临!我们竭诚为你服务!!");
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
    } else if (status == 0) {
        var selStr = "\r\n#e#b┏━━━━━━━━ 理财中心 ━━━━━━━━┓#k\r\n\r\n";
        //selStr += "\t#L0##b" + g + "在线点券#l　#L1#" + g + " 在线抵用#l　#L3#" + g + " 在线奖励#l#k\r\n\r\n";
        //selStr += "\t#L4##r" + g + "点券洗血#l　#L7#" + g + " 每日签到#l　#L8#" + g + " 认证福利#l#k\r\n\r\n";
        selStr += "\t#e#d#L66#" + c + "        [ 理财办理 ] "         + c + "#l#k\r\n\r\n\r\n";
        selStr += "\t#e#r#L1#" + c + " [ 888 ]  理财礼包每日领取 " + c + "#l#k\r\n\r\n\r\n";
 
       selStr += "#b┗━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
        cm.sendSimple(selStr);

    } else if (status == 1) {
        switch (selection) {
            case 0://售货
                cm.dispose();
                cm.openNpc(1002009, 1);
                break;
            case 1://物品查询
                cm.dispose();
		    cm.openNpc(2012014); 
                break;
            case 2://宠物系统
                cm.dispose();
                cm.openNpc(9900003, 1001);
                break;
            case 7://宠物系统
                cm.dispose();
                cm.openNpc(9310382, 77);
                break;
            case 66://宠物系统
                cm.dispose();
            cm.openNpc(9010047,"理财认证");
                break;
            case 8://宠物系统
                cm.dispose();
                cm.openNpc(9310382, 88);
                break;
            case 9://宠物系统
                cm.dispose();
                cm.openNpc(9330345);
                break;
            case 3://装备品级
                cm.dispose();
                cm.openNpc(1002009, 3);
                break;
            case 4://点卷洗血
                xxtp = 1;
                var txt = "\r\n#d┏━━━━━━━━━━━点卷洗血━━━━━━━━━━┓#k\r\n\r\n";
                txt += "　#d 尊敬的 [ #r#h ##d ] 如需洗血洗蓝请仔细阅览#k\r\n";
                txt += "　#d※血量上限 [ 500000 ] 超过血或蓝将无效提升血蓝量※#k\r\n";
                txt += "　#d※#r恶魔复仇者职业#d将50倍点卷洗血　请该职业#r玩家#d注意※\r\n\r\n";
                txt += "　#d※当前点卷数量：#r" + cm.getPlayer().getCSPoints(1) + "#d　[ 洗 #r血 蓝#d 比例 - #r1:8#d ]\r\n\r\n";
                txt += "　#r#L0#" + g + " 开始洗血 " + g + "#l\t\t\t#L1#" + g + " 开始洗蓝 " + g + "#l#k\r\n\r\n\r\n";
                txt += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
                cm.sendSimple(txt);
                break;
            case 11://积分
                cm.dispose();
                cm.openNpc(9310362,"cxzx");
                break;
            case 6://心
                cm.dispose();
                cm.openNpc(9900004, 1008);
                break;

        }
    } else if (status == 2) {
        if (xxtp == 1) {
            if (cm.getJob() == 3101 || cm.getJob() == 3120 || cm.getJob() == 3121 || cm.getJob() == 3122) {
                if (selection == 0) {
                    cm.dispose();
                    cm.openNpc(2490002, 8);
                } else if (selection == 1) {
                    cm.dispose();
                    cm.sendOkS("\r\n\r\n#r#e\t\t\t温馨提示：该职业不能洗蓝", 2);
                }
            } else {
                if (selection == 0) {
                    cm.dispose();
                    cm.openNpc(2490002, 6);
                } else if (selection == 1) {
                    cm.dispose();
                    cm.openNpc(2490002, 7);
                }
            }
        }
    }
}


Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};