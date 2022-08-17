var status = -1;
var text = "";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var ttt1 ="#fEffect/BasicEff/MainNotice/maple9th/Appear/9#";
var wi1 = "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#";
var wi2 = "#fUI/RunnerGame.img/RunnerGameUI/UI/BtClose/normal/0#";
var wi3 = "#fUI/piggyBarMinigame.img/crunch/1#";

var typed=1;
var teacher = null;
var studentName = null;
var studentId = 0;
var teacherId = 0;
var em = null;
// 出师时获得的良师值
var upgradeExp = 10;
// 徒弟解除关系扣除的良师值
var leaveTeacherPoint = 3;
// 师傅驱逐徒弟扣除的良师值
var leaveStudentPoint = 2;
// 师傅奖励定义
var teacherItemList = new Array();
// 0级，普通教师
/* //这一段被注释了，表示0级普通教师没有奖励可以领取，防止刷奖励。
teacherItemList[0] = Array(
	Array(4000463, 1),
	Array(5062002, 5)
)
*/
//为人师表
teacherItemList[1] = Array(
	Array(2431739, 1),
	Array(2049116, 1)
)
//循循善诱
teacherItemList[2] = Array(
	Array(2431739, 1),
	Array(2049116, 1),
	Array(5062010, 2)
)
//诲人不倦
teacherItemList[3] = Array(
	Array(2431739, 1),
	Array(2049116, 1),
	Array(5062010, 3),
	Array(4031505, 1)
)
//厚得树人
teacherItemList[4] = Array(
	Array(2432947, 1),
	Array(2049116, 1),
	Array(5062010, 4),
	Array(4031505, 1),
	Array(2049122, 1)
)
//桃李天下
teacherItemList[5] = Array(
	Array(4031506, 1),
	Array(5062024, 2),
	Array(5064003, 1),
	Array(2614014, 1),
	Array(2049137, 1),
	Array(2049122, 1),
	Array(2049116, 1),
	Array(2432947, 1)

)
//超出等级后会自动选择最后一项给予奖励物品
teacherItemList[6] = Array(
	Array(4000463, 1),
	Array(5062002, 15)
)
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		// em = cm.getEventManager('DoJang');
		// if (em == null)
		// {
		// 	cm.sendOk("Event Error!");
		// 	cm.dispose();
		// 	return;
		// }
		if (teacher == null) {
			teacher = getTeacherInfo(cm.getPlayer().getId());
			teacherId = cm.getPlayer().getId();
		}
		text = "\t\t\t\t"+ ttt1 +"#e#r『拜师学艺』#k#l"+ ttt1 +"\r\n\r\n";
		//text+= "在下专门负责收徒及出师仪式，无论是收徒拜师，都来找在下就对了。\r\n\r\n";
		text+="#d"+wi3+" 您的良师值 [ #r"+teacher.exp+"#d ] 点，还需 [ #r"+ ( parseInt(nextLevelExp(teacher.level)) - teacher.exp * 1 )+"#d ] 点升级\r\n";
		text +="#d"+wi3+" 教学等级 [ #r" + teacher.level + "#d ]，称谓 [ #r" + getLevelName( teacher.level ) + "#d ]\r\n";
		text+="#d"+wi3+" 您当前有 [ #r" + teacher.students.length + "#d ] 位徒弟#l\r\n";
		text+="#b#L0#"+wi2+"怎样拜师或收徒？\t#b#L8#"+wi2+"师门等级奖励表查看#l\r\n\r\n";
		text+="  #e#d我是师傅              我是徒弟#n\r\n";
		text+="#b#L2#"+wi1+" 我来带徒弟拜师#l     " + "#L3#"+wi1+" 我要进行出师仪式#l\r\n";
		text+="#L6#"+wi1+" 我想清理门户#l       " + "#L4#"+wi1+" 我想离开师门#l\r\n";
		text+="#L7#"+wi1+" 我想领取师傅奖励#l   " + "#L5#"+wi1+" 我想领取200级奖励#l";
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == 0) {
			text = head ;
			text += icon + " #d#e如何拜师？#n#k\r\n";
			text += "\t等级小于 #r150#k 级的玩家与符合收徒的玩家组队，由师傅担任队长，在我这里进行拜师仪式，徒弟只能同时拜一位玩家为师，如果自行取消师徒关系，需要 #r1#k 天后才能拜新的师傅。\r\n";
			text += icon + " #d#e如何收徒？#n#k\r\n";
			text += "\t等级大于 #r220#k 级的玩家与符合拜师的玩家组队，由师傅担任队长，在我这里进行拜师仪式，每位师傅同时最多可收取 #r5#k 名徒弟。\r\n";
			text += icon + " #d#e如何出师？#n#k\r\n";
			text += "\t玩家等级大于 #r220#k 级时，可以#b#e单人#n#k在我这里进行出师仪式。出师后，玩家将获得出师奖励。\r\n";
			text += icon + " #d#e什么是师徒奖励？#n#k\r\n";
			text += "\t当徒弟等级处于 #r200#k 级时，可由师傅担任队长，带领徒弟在我这里领取相应师徒奖励。\r\n";
			text += icon + " #d#e什么是良师值？#n#k\r\n";
			text += "\t当徒弟出师时，师傅将获得一定的良师值，良师值越高，师傅可获得的师徒奖励越多。\r\n";
			status = -1;
			cm.sendSimple(text);


		} if (selection == 8) {
			text = head ;
			//text = icon + " #d#e#n#k\r\n";
			text += icon + " #r#e[为人师表]：#n#k#v2614074#x1 #v4001715#x1 #v4031997#x10\r\n";

			text += icon + " #r#e[循循善诱]：#n#k#v2614074#x2 #v4001715#x2 #v4031997#x20\r\n";

			text += icon + " #r#e[诲人不倦]：#n#k#v2614074#x4 #v4001715#x4 #v4031997#x40\r\n";

			text += icon + " #r#e[厚得树人]：#n#k#v2614074#x6 #v4001715#x6 #v4031997#x60\r\n";

			text += icon + " #r#e[桃李天下]：#n#k#v2614074#x10 #v4001715#x10 #v4031997#x100\r\n";
			text += "\r\n";
			status = -1;
			cm.sendSimple(text);



		} else if (selection == 2) {
			//收徒
			if (cm.getLevel() < 250) {
				cm.sendOk("您的等级不足250级，无法收徒！");
				cm.dispose();
			} else if (teacher.students.length >= 5) {
				cm.sendOk("您当前已经有 #r5#k 位徒弟，无法继续收徒。");
				cm.dispose();
			} else if (cm.getParty() == null) {
				cm.sendOk("请和你的师傅或徒弟组成队伍，由师傅担任队长来与我交谈！");
				cm.dispose();
			} else if (!cm.isLeader()) {
            	cm.sendOk("请让师傅和我说话");
				cm.dispose();
			} else {
				typed = 2;
				var party = cm.getParty().getMembers();
				var it = party.iterator();
				var partySize = party.size();
				var player = null;
				
				if (partySize != 2) {
					cm.sendOk("队伍中必须只有师徒两个人，请重试。");
					cm.dispose();
					return;
				}
				
				while (it.hasNext()) {
					player = it.next();
					if (player.getId() != cm.getPlayer().getId()) {
						studentId = player.getId();
						studentName = player.getName();
						break;
					}
				}
				
				//判断徒弟等级是否满足拜师条件
				if (player.getLevel() > 150) {
					cm.sendOk("玩家 [ #b" + player.getName() + "#k ] 等级大于 #r150#k 级，无法拜师。");
					cm.dispose();
					return;
				}
				
				//判断徒弟是否已经拜过师
				if (hasTeacher(player.getId())) {
					cm.sendOk("玩家 [ #b" + player.getName() + "#k ] 已经拜过师了，无法拜您为师。");
					cm.dispose();
					return;
				}
				
				cm.sendYesNo("您是否要收取 [ #b" + player.getName() + "#k ] 为徒？");
			}
		} else if (selection == 3) {
			//出师
			var charid = cm.getPlayer().getId();
			var studentInfo = getStudentInfo(charid);
			if (studentInfo === false) {
				cm.sendOk("您还没有拜师，怎么出师呢！！");
				cm.dispose();
			} else if (cm.getPlayer().getLevel() < 250){
				cm.sendOk("你还没有达到250级，无法出师哦！");
				cm.dispose();
			} else if (studentInfo.status > 0) {
				cm.sendOk("您已经完成过出师仪式了！");
				cm.dispose();
			} else {
				typed = 3;
				cm.sendYesNo("你已经达到出师的要求，是否要举行出师仪式？");
			}
		} else if (selection == 4 || selection == 6) {
			typed = 4;
			if (selection == 4) {
				text = "解除关系后一日之内不可以拜师，是否要和师傅解除关系？\r\n";
				text += "#b#L1#" + icon + " 是的，我不想做他的徒弟了。";
			} else {
				text = "请点击查看徒弟列表来筛选需要清理出师门的徒弟，已出师的徒弟不会显示在列表中，清理徒弟将会扣除良师值，请谨慎操作。\r\n";
				text += "#b#L2#" + icon + " 查看徒弟列表";
			}
			cm.sendSimple(text);
		/* 200级奖励领取 */
		} else if (selection == 5){
			if (cm.getPQLog("师徒200级奖励", 1) > 0) {
				cm.sendOk("您已经领取过该奖励。");
				cm.dispose();
			} else {
				
				if (cm.getPlayer().getLevel() < 200) {
					cm.sendOk("等级不足 200 级，无法领取。");
					cm.dispose();
					return ;
				}
				if (!hasTeacher(cm.getPlayer().getId())) {
					cm.sendOk("您还没有拜师呢，无法领取奖励。");
					cm.dispose();
					return;
				}
				
				if (cm.canHoldSlots(5)) {
					var tips = "恭喜您，获得了以下奖励：\r\n";
					var finalItem = Array(//领取200级奖励
						Array(2049116, 5),
						Array(5511001, 10)


					);
					for(var i in finalItem) {
						var itemId = finalItem[i][0];
						var itemQuantity = finalItem[i][1];
						tips += cm.getItemName(itemId) + " [ "+ itemQuantity +" ] 个\r\n";
						cm.gainItem(itemId, itemQuantity);
					}
					cm.setPQLog("师徒200级奖励", 1);
					cm.playerMessage(1, tips);
					cm.dispose();
				} else {
					cm.sendOk("您的背包栏位不足 5 格，请先整理一下吧。");
					cm.dispose();
				}
			}
		/* 师傅日常奖励 */
		} else if (selection == 7) {
			if (cm.getPQLog("师傅日常奖励") > 0) {
				cm.sendOk("您今天已经领取过奖励了。");
				cm.dispose();
			} else {
				if (teacher.studentCount <= 3) {
					cm.sendOk("至少需要出师 3 名徒弟后才可以领取师傅每日礼物。");
				}
				if (cm.canHoldSlots(5)) {
					//师傅奖励
					var finalItem = Array();
					var level = parseInt(teacher.level);
					if (teacherItemList[level] != null) {
						finalItem = teacherItemList[level];
					} else {
						var giftLevel = teacherItemList.length - 1;
						if (giftLevel > level) {
							cm.sendOk("您当前的教学等级，无法领取礼包。");
							cm.dispose();
							return;
						} else {
							finalItem = teacherItemList[ teacherItemList.length - 1 ];
						}
					}
					var tips = "恭喜您，获得了以下奖励：\r\n";
					for(var i in finalItem) {
						var itemId = finalItem[i][0];
						var itemQuantity = finalItem[i][1];
						tips += cm.getItemName(itemId) + " [ "+ itemQuantity +" ] 个\r\n";
						cm.gainItem(itemId, itemQuantity);
					}
					cm.setPQLog("师傅日常奖励");
					cm.playerMessage(1, tips);
					cm.dispose();
				} else {
					cm.sendOk("请将背包每个栏位整理出 5 个格子。");
					cm.dispose();
				}
			}
		}
	} else if (status == 2) {
		//拜师
		if (typed == 2) {
			if (addStudent(studentId, teacherId)) {
				cm.sendOk("恭喜您，玩家 [ " + studentName + " ] 正式成为了您的徒弟！好好培养Ta吧！");
				cm.worldSpouseMessage(0x13, "[师徒系统] : 恭喜玩家 【" + studentName + "】 顺利拜入 【" + cm.getChar().getName() + "】 门下！" );
				cm.dispose();
			} else {
				cm.sendOk("遇到未知问题，请联系管理员！");
				cm.dispose();
			}
		//出师
		} else if (typed == 3) {
			studentId = cm.getPlayer().getId();
			if (updateStudentStatus(studentId, 1)) {
				
				//处理师傅良师值
				var studentInfo = getStudentInfo(studentId);
				var teacherInfo = getTeacherInfo(studentInfo.teacherid);
				var nextNeedExp = nextLevelExp(teacherInfo.level);
				var currentExp  = teacherInfo.exp + upgradeExp;
				var lastLevel = teacherInfo.level;
				
				if (currentExp >= nextNeedExp) {
					while( (currentExp - nextNeedExp) >= 0) {
						currentExp  = (currentExp - nextNeedExp);
						lastLevel++;
						//cm.getPlayer().dropMessage(-11, "While lastLevel:" + lastLevel + " currentExp :"+currentExp);
					}
				}
				
				//cm.getPlayer().dropMessage(-11, "Normal Charid: "+teacherInfo.charId+" lastLevel:" + lastLevel + " currentExp :"+currentExp);
				
				refreshTeacherLevel(teacherInfo.charId, lastLevel, currentExp);
				//徒弟出师奖励
				var studentItems = new Array(
					Array(2049116, 5),
					Array(5511001, 10)
				);
				//给予徒弟奖励
				var studentTips = "您已经成功出师，获得以下奖励：\r\n";
				for(var i in studentItems) {
					var itemId = studentItems[i][0];
					var itemQuantity = studentItems[i][1];
					studentTips += cm.getItemName(itemId) + " [ "+ itemQuantity +" ] 个\r\n";
					cm.gainItem(itemId, itemQuantity);
				}
				cm.getPlayer().dropMessage(1, studentTips);
				cm.worldSpouseMessage(0x13, "[师徒系统] : 恭喜玩家 【" + cm.getPlayer().getName() + "】 在师门中崭露头角，从师门中脱颖而出！" );
				cm.dispose();
			} else {
				cm.sendOk("出师失败！请联系管理员！");
				cm.dispose();
			}
		} else if (typed == 4) {
			//和师傅解除关系
			if (selection == 1) {
				if (!hasTeacher(cm.getPlayer().getId())) {
					cm.sendOk("你还没有师傅呢！");
					cm.dispose();
					return;
				}
				typed = 5;
				cm.sendYesNo("你真的要和你师傅解除关系吗？解除关系后一天内无法重新拜师。");
			//和徒弟解除关系
			} else if (selection == 2) {
				if (teacher.students.length <= 0) {
					cm.sendOk("你还没有徒弟呢！");
					cm.dispose();
					return;
				}
				typed = 6;
				var students = teacher.students;
				var text = "请选择需要解除关系的徒弟：\r\n";
				for(i in students) {
					studentName = students[i].name;
					studentLevel = students[i].level;
					studentId = students[i].charid;
					text += "#L" + studentId + "##d 徒弟 [ #b"+studentName+"#d ] [ #rLv. "+studentLevel+"#d ]\t\t#r解除关系#d#l\r\n";
				}
				cm.sendSimple(text);
			}
		}
	} else if (status == 3) {
		//和师傅解除关系
		if (typed == 5) {
			var studentInfo = getStudentInfo(cm.getPlayer().getId());
			
			if (studentInfo.status > 0) {
				cm.sendOk("你已经出师了，无法解除关系。");
				cm.dispose();
				return;
			}
			
			var teacherInfo = getTeacherInfo(studentInfo.teacherid);
			if (delStudent(cm.getPlayer().getId())) {
				cm.setPQLog("解除师徒关系");
				disTeacherExp(teacherInfo, leaveTeacherPoint);
				cm.sendOk("从今日起，你与你师傅缘份已尽，祝你他日可以寻得一位更好的师傅。");
				cm.dispose();
			} else {
				cm.sendOk("解除关系失败！");
				cm.dispose();
			}
		//和徒弟解除关系
		} else if (typed == 6) {
			var charId = selection;
			if (delStudent(charId)) {
				disTeacherExp(teacher, leaveStudentPoint);
				cm.sendOk("解除成功！损失 #r" + leaveStudentPoint +"#k 点#b良师值#k。");
				cm.dispose();
			} else {
				cm.sendOk("解除关系失败！");
				cm.dispose();
			}
		}
	}
}


function disTeacherExp(teacherInfo, discount) {
	//cm.playerMessage(-11, "Do discount" + teacherInfo.exp);
	//扣除师傅良师值
	var finalLevel = 0;
	var finalExp = 0;
	if (teacherInfo.exp >= discount) {
		finalLevel = teacherInfo.level;
		finalExp = teacherInfo.exp - discount;
	} else {
		if (teacherInfo.level == 0) {
			finalLevel = 0;
			finalExp = 0;	
		} else {
			finalLevel = teacherInfo.level;
			do {
				finalLevel = finalLevel - 1;
				var preLevelExp = nextLevelExp(finalLevel);
				finalExp = parseInt(preLevelExp) + parseInt(teacherInfo.exp);
				//cm.playerMessage(-11, "FinalExp :" + finalExp + " FinalLevel:" + finalLevel);
				if (finalExp - discount >= 0) {
					finalExp -= discount;
					break;
				}
				if (finalLevel == 0) {
					finalExp = 0;
					break;
				}
			}while(true);
		}
	}
	refreshTeacherLevel(teacherInfo.charId, finalLevel, finalExp);
}

function refreshTeacherLevel(charId, level, exp) {
	//cm.playerMessage(-11, "Doo refresh charid " + charId + " : level : "+ level + " : exp :" + exp);
	cm.sql_Update("UPDATE memory_mentorships_teachers SET exp = ?, level = ? WHERE charid = ?", exp, level, charId);
	return true;
}


function getStudentInfo(charid) {
	var ret = cm.sql_Select("SELECT * FROM memory_mentorships_students WHERE charid = ?", charid);
	var data = {};
    if (ret.length > 0) {
		data.charid = ret.get(0).get("charid");
		data.teacherid = ret.get(0).get("teacherid");
		data.status = ret.get(0).get("status");
	} else {
		return false;
	}
	return data;
}


function updateStudentStatus(charId, status) {
	return cm.sql_Update("UPDATE memory_mentorships_students SET status = ? WHERE charid = ?", status, charId);
}

function delStudent(charId) {
	return cm.sql_Update("DELETE FROM memory_mentorships_students WHERE charid = ?", charId);
}

function addStudent(charId, teacherId) {
	return cm.sql_Insert("INSERT INTO memory_mentorships_students VALUES(?, ?, 0, CURRENT_TIMESTAMP)", charId, teacherId);
}

function nextLevelExp(level) {
	var levelExp = Array(
		10, 500, 1000, 2000, 3000, 5000, 70, 100
	);
	if (levelExp[level] != null) {
		return levelExp[level];
	} else {
		var base = 10 * ( level + 1 ) * ( level + 1 ) - Math.pow(level, 2);
		return base;
	}
}


function getTeacherInfo(charId) {
	var ret = cm.sql_Select("SELECT * FROM memory_mentorships_teachers WHERE charid = ?", charId)
	var data = {};
	if (ret.length > 0) {
		data.charId = ret.get(0).get('charid');
		data.exp = ret.get(0).get('exp');
		data.level = ret.get(0).get('level');
		//读取没有出师的徒弟列表
		var studentRet = cm.sql_Select("SELECT s.*, c.name, c.level FROM memory_mentorships_students s LEFT JOIN characters c ON s.charid = c.id WHERE status = 0 AND s.teacherid = ? ORDER BY s.status ASC", charId)
		data.students = new Array();
		if (studentRet.length > 0) {
			for (var i in studentRet) {
				var data = studentRet[i]
				var student = {}
				student.charid = data.get('charid');
				student.name = data.get('name');
				student.level = data.get('level');
				student.status = data.get('status');
				data.students.push(student);
			}
		}
	} else {
		data.charId = charId;
		data.exp = 0;
		data.level = 0;
		data.students = [];
		var flag = cm.sql_Insert("INSERT INTO memory_mentorships_teachers VALUES(?,0,0)", charId)
		if (!flag) {
			throw new Exception('Create Teacher Failed!');
		}
	}
	return data;
}
function hasTeacher(charId) {
	var ret = cm.sql_Select("SELECT count(1) AS num FROM memory_mentorships_students WHERE charid = ?", charId);
	var num = 0;
	if (ret.length > 0) {
		num = ret.get(0).get('num');
	}
	return num > 0 ;
}

function getLevelName(level) {
	var names = Array(
		'普通教师',
		'为人师表',
		'循循善诱',
		'诲人不倦',
		'厚得树人',
		'桃李天下'
	);
	if (level >= names.length) {
		level = names.length - 1;
	}
	return names[level];
}