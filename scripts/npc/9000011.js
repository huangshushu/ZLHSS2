/*
 ZEVMS冒险岛(079)游戏服务端
 通缉令奖励 
 可以根据通缉的怪物所在的地图，分别设置
 */
function action() {
    var 地图 = cm.判断地图();
    switch (地图) {
        case 104000400:
        case 110040000:
        case 250010304:
        case 200010300:
        case 250010503:
        case 222010310:
        case 107000300:
        case 100040105:
        case 220050100:
        case 221040301:
        case 240040401:
        case 260010201:
        case 261030000:
        case 230020100:
        case 100000005:
        case 105070002:
        case 105090900:
        case 800010100:
        case 801030000:
        case 211040101:
        case 240020401:
        case 240020101:
        case 270030500:
        case 270020500:
        case 270010500:
        case 101030404:
            cm.给点券(2000);
			cm.给金币(500000);
            cm.给经验(500000);
			cm.给人气(1);
			cm.给个人每日("每日通缉");
            break;
        default:
            break;
    }
    cm.dispose();
}