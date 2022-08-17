var 红蓝点 = "#fEffect/CharacterEff.img/1032054/0/0#";
var 蓝星 = "#fEffect/CharacterEff.img/1052203/1/0#";
var 红星 = "#fEffect/CharacterEff.img/1052203/2/0#";
var 大蓝星 = "#fEffect/CharacterEff.img/1022223/2/0#";
var 大红星 = "#fEffect/CharacterEff.img/1022223/1/0#";
var 蓝点 = "#fEffect/CharacterEff.img/1022223/6/0#";
var 红点 = "#fEffect/CharacterEff.img/1022223/7/0#";
var 黑冠 = "#fUI/GuildMark.img/Mark/Etc/00009004/16#";
var 红冠 = "#fUI/GuildMark.img/Mark/Etc/00009023/14#";
var 金冠 = "#fUI/UIWindow.img/UserInfo/bossPetCrown#";
var 小星星 = "#fUI/UIWindow.img/UserList/Party/icon0#";
var 皇冠 = "#fUI/UIWindow.img/SkillMacro/Macroicon/4/iconMouseOver#";
var 红书 = "#fUI/UIWindow.img/MonsterBook/icon/0";
var 橙书 = "#fUI/UIWindow.img/MonsterBook/icon/1";
var 青书 = "#fUI/UIWindow.img/MonsterBook/icon/2";
var 绿书 = "#fUI/UIWindow.img/MonsterBook/icon/3";
var 淡书 = "#fUI/UIWindow.img/MonsterBook/icon/4";
var 蓝书 = "#fUI/UIWindow.img/MonsterBook/icon/5";
var 紫书 = "#fUI/UIWindow.img/MonsterBook/icon/6";
var 黑书 = "#fUI/UIWindow.img/MonsterBook/icon/7";
var 奖励 = "#fUI/UIWindow.img/Quest/reward#";
var 枫叶 = "#fUI/ITC.img/Base/Tab/Enable/0#";


importPackage(Packages.handling.word);
importPackage(Packages.client.inventory);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 木妖 = "#fUI/Basic.img/BtClaim/mouseOver/0#";
var q = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			text = "\t\t     #r#e"+ 红星 + ""+ 大红星 + ""+ 红点 + "排#d行"+ 红蓝点 + "#k榜#d单"+ 蓝点 + ""+ 大蓝星 + ""+ 蓝星 + "#k#n  \r\n\r\n";	
			text +="#L0##r"+ 金冠 + "等级排行榜"+ 金冠 + "#l\t\t";
			text +="#L1#"+ 金冠 + "财富排行榜"+ 金冠 + "#l\t\t";
			text +="#L2#"+ 金冠 + "人气排行榜"+ 金冠 + "#l\t\t";
			text +="#L3#"+ 金冠 + "家族荣誉榜"+ 金冠 + "#l\t\t";
			text +="#e#L6#"+ 黑冠 + "废弃赛季榜"+ 黑冠 + "#l\t   ";
			text +="#L7#"+ 黑冠 + "玩具赛季榜"+ 黑冠 + "#l\t\t";
			text +="#e#L8#"+ 黑冠 + "天空赛季榜"+ 黑冠 + "#l\t   ";
			text +="#L9#"+ 黑冠 + "毒物赛季榜"+ 黑冠 + "#l\t\t";
			text +="#e#L10#"+ 黑冠 + "转生排行榜"+ 黑冠 + "#l\t   ";
			//text +="#L4#"+ 黑冠 + "良师益友榜"+ 黑冠 + "#n#l\t\t";
		//	text +="#L5##r#n"+ 小星星 + "领取上榜勋章"+ 小星星 + "#l\r\n";	
            cm.sendSimple(text);
        } else if (selection == 0) {
				 cm.showlvl();
				 cm.dispose();
        } else if (selection == 1) {
		cm.showmeso();
				 cm.dispose();
        } else if (selection == 2) {
			cm.showfame();
			cm.dispose();
		}else if(selection == 3){
			cm.displayGuildRanks();
			cm.dispose();
		}else if(selection == 4){
			cm.displayGuildRanks();
			cm.dispose();
		}else if(selection == 5){
			cm.openNpc(9900004,404);
		}else if (selection == 6) {
		cm.getPlayer().showtimePLC("通关废弃");
		cm.dispose();
		}else if (selection == 7) {
		cm.getPlayer().showtimePLC("通关玩具");
		cm.dispose();
		}else if (selection == 8) {
		cm.getPlayer().showtimePLC("通关天空");
		cm.dispose();
		}else if (selection == 9) {
		cm.getPlayer().showtimePLC("通关毒物");
		cm.dispose();
		}else if (selection == 10) {
			cm.openNpc(9900004,100866);
		cm.dispose();
		}
    }
}


