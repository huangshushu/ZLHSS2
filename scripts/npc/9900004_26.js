var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ca = java.util.Calendar.getInstance();
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";//"+箭头+"
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var W = "#fUI/UIWindow.img/PartySearch/check0#";
var X = "#fUI/UIWindow.img/PartySearch/check1#";

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
	
    var MC = cm.getServerName();
	var 角色 = cm.getPlayer().id;
	if(cm.getBossRank9("必成卡",2)<0){
		var 必成卡 = 0;
	}else{
		var 必成卡 = cm.getBossRank9("必成卡",2);
	}
	
	if(cm.getBossRank9("防爆卡",2)<0){
		var 防爆卡 = 0;
	}else{
		var 防爆卡 = cm.getBossRank9("防爆卡",2);
	}
    if (status == 0) {


        var selStr = "\r\n  " + 心 + " " + 心 + "  " + 心 + "  " + 心 + "  #r#e < 个人设置 > #k#n  " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        //selStr += "\t\t\t#d金  币 : #r"+cm.判断金币()+"#k\r\n";
		//selStr += "\t\t\t#d点  券 : #r"+cm.判断点券()+"#k\r\n";
		selStr += "\t#d防爆卡 : #r"+防爆卡+"#k\r\n";
		selStr += "\t#d必成卡 : #r"+必成卡+"#k\r\n";
		selStr += "#b#L0#返回页面#l#k#n";
		//selStr += "#b#L100000#返回页面#l#k#n";
		
		if (cm.getPlayer().getGuildId() > 0) {
            if (cm.getPlayer().getGuildRank() == 1) {
                selStr += "  #L10000##d家族申请#k#n#b";
                if (cm.Getguildsl("" + cm.getPlayer().getGuildId() + "", 1) <= 0) {
                    selStr += ""+X+"#l";
                } else {
                    selStr += ""+W+"#l";
                }
            }
        }
		selStr += "\r\n";
		selStr += "#d#L100#打孔防爆";
		if (cm.Getcharacter7("" + 角色 + "", 100) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		selStr += "#d#L101#附魔防爆";
		if (cm.Getcharacter7("" + 角色 + "", 101) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
	
		selStr += "#d#L200#打孔必成";
		if (cm.Getcharacter7("" + 角色 + "", 200) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		selStr += "#d#L201#附魔必成";
		if (cm.Getcharacter7("" + 角色 + "", 201) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
	
		selStr += "#L2##d上线疲劳#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 2) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L3##d伤害显示#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 3) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L4##d经验获取#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 4) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L5##d个人信息#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 5) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L6##d升级快讯#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 6) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L7##d上线喇叭#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 7) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		
		selStr += "#L8##d爆物获取#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 8) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L14##d爆物延迟#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 14) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L10##d瞬移跟踪#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 10) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L11##d定位查找#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 11) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L12##d物品显码#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 12) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L13##d附魔显示#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 13) > 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L9##d领地显示#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 9) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }
		
		selStr += "#L15##d登陆私信#k#n#b";
        if (cm.Getcharacter7("" + 角色 + "", 1) <= 0) {
            selStr += ""+X+"#l";
        } else {
            selStr += ""+W+"#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 15:
                if (cm.Getcharacter7("" + 角色 + "", 1) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 1, -cm.Getcharacter7("" + 角色 + "", 1));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 1, -cm.Getcharacter7("" + 角色 + "", 1));
                    cm.Gaincharacter7("" + 角色 + "", 1, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			
			case 14:
                if (cm.Getcharacter7("" + 角色 + "", 14) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 14, -cm.Getcharacter7("" + 角色 + "", 14));
					cm.getPlayer().延迟爆物 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 14, -cm.Getcharacter7("" + 角色 + "", 14));
                    cm.Gaincharacter7("" + 角色 + "", 14, 1);
					cm.getPlayer().延迟爆物 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
				
			case 13:
                if (cm.Getcharacter7("" + 角色 + "", 13) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 13, -cm.Getcharacter7("" + 角色 + "", 13));
					cm.getPlayer().附魔显示 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 13, -cm.Getcharacter7("" + 角色 + "", 13));
                    cm.Gaincharacter7("" + 角色 + "", 13, 1);
					cm.getPlayer().附魔显示 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
				
			case 12:
                if (cm.Getcharacter7("" + 角色 + "", 12) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 12, -cm.Getcharacter7("" + 角色 + "", 12));
					cm.getPlayer().物显显码 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 12, -cm.Getcharacter7("" + 角色 + "", 12));
                    cm.Gaincharacter7("" + 角色 + "", 12, 1);
					cm.getPlayer().物显显码 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
				
			case 11:
                if (cm.Getcharacter7("" + 角色 + "", 11) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 11, -cm.Getcharacter7("" + 角色 + "", 11));
					cm.getPlayer().被查找 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 11, -cm.Getcharacter7("" + 角色 + "", 11));
                    cm.Gaincharacter7("" + 角色 + "", 11, 1);
					cm.getPlayer().被查找 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 10:
                if (cm.Getcharacter7("" + 角色 + "", 10) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 10, -cm.Getcharacter7("" + 角色 + "", 10));
					cm.getPlayer().被跟踪 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 10, -cm.Getcharacter7("" + 角色 + "", 10));
                    cm.Gaincharacter7("" + 角色 + "", 10, 1);
					cm.getPlayer().被跟踪 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 9:
                if (cm.Getcharacter7("" + 角色 + "", 9) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 9, -cm.Getcharacter7("" + 角色 + "", 9));
					cm.getPlayer().领地显示 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 9, -cm.Getcharacter7("" + 角色 + "", 9));
                    cm.Gaincharacter7("" + 角色 + "", 9, 1);
					cm.getPlayer().领地显示 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 8:
                if (cm.Getcharacter7("" + 角色 + "", 8) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 8, -cm.Getcharacter7("" + 角色 + "", 8));
					cm.getPlayer().爆物获取 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 8, -cm.Getcharacter7("" + 角色 + "", 8));
                    cm.Gaincharacter7("" + 角色 + "", 8, 1);
					cm.getPlayer().爆物获取 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 7:
                if (cm.Getcharacter7("" + 角色 + "", 7) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 7, -cm.Getcharacter7("" + 角色 + "", 7));
					cm.getPlayer().上线提醒 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 7, -cm.Getcharacter7("" + 角色 + "", 7));
                    cm.Gaincharacter7("" + 角色 + "", 7, 1);
					cm.getPlayer().上线提醒 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 201:
                if (cm.Getcharacter7("" + 角色 + "", 201) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 201, -cm.Getcharacter7("" + 角色 + "", 201));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 201, -cm.Getcharacter7("" + 角色 + "", 201));
                    cm.Gaincharacter7("" + 角色 + "", 201, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
            case 200:
                if (cm.Getcharacter7("" + 角色 + "", 200) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 200, -cm.Getcharacter7("" + 角色 + "", 200));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 200, -cm.Getcharacter7("" + 角色 + "", 200));
                    cm.Gaincharacter7("" + 角色 + "", 200, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 101:
                if (cm.Getcharacter7("" + 角色 + "", 101) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 101, -cm.Getcharacter7("" + 角色 + "", 101));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 101, -cm.Getcharacter7("" + 角色 + "", 101));
                    cm.Gaincharacter7("" + 角色 + "", 101, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
            case 100:
                if (cm.Getcharacter7("" + 角色 + "", 100) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 100, -cm.Getcharacter7("" + 角色 + "", 100));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 100, -cm.Getcharacter7("" + 角色 + "", 100));
                    cm.Gaincharacter7("" + 角色 + "", 100, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 1:
                if (cm.Getcharacter7("" + 角色 + "", 1) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 1, -cm.Getcharacter7("" + 角色 + "", 1));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 1, -cm.Getcharacter7("" + 角色 + "", 1));
                    cm.Gaincharacter7("" + 角色 + "", 1, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 2:
                if (cm.Getcharacter7("" + 角色 + "", 2) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 2, -cm.Getcharacter7("" + 角色 + "", 2));
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 2, -cm.Getcharacter7("" + 角色 + "", 2));
                    cm.Gaincharacter7("" + 角色 + "", 2, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 3:
                if (cm.Getcharacter7("" + 角色 + "", 3) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 3, -cm.Getcharacter7("" + 角色 + "", 3));
					cm.getPlayer().伤害显示 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 3, -cm.Getcharacter7("" + 角色 + "", 3));
                    cm.Gaincharacter7("" + 角色 + "", 3, 1);
					cm.getPlayer().伤害显示 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 4:
                if (cm.Getcharacter7("" + 角色 + "", 4) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 4, -cm.Getcharacter7("" + 角色 + "", 4));
					cm.getPlayer().经验获取 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 4, -cm.Getcharacter7("" + 角色 + "", 4));
                    cm.Gaincharacter7("" + 角色 + "", 4, 1);
					cm.getPlayer().经验获取 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 5:
                if (cm.Getcharacter7("" + 角色 + "", 5) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 5, -cm.Getcharacter7("" + 角色 + "", 5));
					cm.getPlayer().个人信息 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 5, -cm.Getcharacter7("" + 角色 + "", 5));
                    cm.Gaincharacter7("" + 角色 + "", 5, 1);
					cm.getPlayer().个人信息 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
			case 6:
                if (cm.Getcharacter7("" + 角色 + "", 6) > 0) {
                    cm.Gaincharacter7("" + 角色 + "", 6, -cm.Getcharacter7("" + 角色 + "", 6));
					cm.getPlayer().升级快讯2 = 0;
                } else {
                    cm.Gaincharacter7("" + 角色 + "", 6, -cm.Getcharacter7("" + 角色 + "", 6));
                    cm.Gaincharacter7("" + 角色 + "", 6, 1);
					cm.getPlayer().升级快讯2 = 1;
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
            case 10000:
                if (cm.Getguildsl("" + cm.getPlayer().getGuildId() + "", 1) > 0) {
                    cm.Gainguildsl("" + cm.getPlayer().getGuildId() + "", 1, -1);
                } else {
                    cm.Gainguildsl("" + cm.getPlayer().getGuildId() + "", 1, 1);
                }
				cm.dispose();
                cm.openNpc(9900004, 26);
                break;
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;


        }
    }
}