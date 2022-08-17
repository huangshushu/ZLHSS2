importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);
// importClass(java.lang.String);
importClass(Packages.database.DBConPool);
importPackage(java.util.regex);
importClass(Packages.tools.处理字符串);

var status = -1;

var 出师等级 = 70;
var 徒弟数量上限 = 100;
var 师傅称号 = Array("为人师表", "循循善诱", "乐在其中", "家喻户晓", "桃李天下", "流芳百世", "永垂不朽");
var 师傅成就每级徒弟数量 = 10;
var 师傅成就赞助 = 300;
var 师傅成就点券 = 30000;
var 师傅成就道具 = Array(4310250, 10);
var 师傅成就AP值 = 10;
var mark = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
			var 师傅姓名 = 获得师傅姓名(cm.getPlayer().getId());
			var 出师 = 是否出师(cm.getPlayer().getId());
		    var text = "\t\t\t#e欢迎来到#r" + cm.开服名称() + "师徒系统#k#n\r\n";
			if(!师傅姓名.isEmpty()){
				if(出师){
					text += "\t\t你的师傅： #b" + 师傅姓名 + "#k\t\t#g已出师#k\r\n";
				}else{
					text += "\t\t你的师傅： #b" + 师傅姓名 + "#k\t\t#r未出师#k\r\n";
				}
				
			}
			if(cm.getOneTimeLog("师傅") > 0){
				var mount = 获得出师徒弟数量(cm.getPlayer().getId());
				var level = parseInt(mount / 师傅成就每级徒弟数量);
				//cm.getPlayer().dropMessage("mount:" + mount);//测试
				//cm.getPlayer().dropMessage("level:" + level);//测试
				if(level > 0 && level < 师傅称号.length){
					text += "\t\t\t\t带徒成就： #b" + 师傅称号[level - 1] + "#k\r\n";
				}else if(level >= 师傅称号.length){
					text += "\t\t\t\t带徒成就： #b" + 师傅称号[师傅称号.length - 1] + "#k\r\n";
				}
			}
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
			text += "你需要建立师门吗？#r(收徒后不可驱逐出门，请谨慎收徒)#k\r\n";
			text += "#L1#我要建立师门#l			#L6##b师徒系统说明#k\r\n";
			text += "#L2##r带徒入门#k(PS：#d师徒需组队#k)#l	\r\n";
            text += "#L3##r带徒出师#k(PS：#d师徒需组队#k)#l\r\n";
			text += "#L4##r徒弟列表#k(PS：#d只有建立师门才能查看#k)#l\r\n";
			text += "#L8##r拔苗助长#k(PS：#d帮助徒弟快速升级#k)#l\r\n";
			text += "#L5##r桃李满天下#k(PS：#d领取带徒成就#k)#l\r\n"
			// text += "#L11##r成长奖励#k(PS：#d徒弟成长过程中各阶段的奖励#k)#l\r\n";
            // text += "#L7#★徒弟拜师后点我#r(加入后不可退出，请谨慎拜师)#l\r\n";
			text += "#L9##r逐出师门#k#l\r\n";
			text += "#L10##r叛离师门#k#l\r\n";
			
			if(cm.getPlayer().getGMLevel() >= 100){
				text += "\r\n#L12##b出师兑换码（GM专属）#k#l\r\n";
			}
			
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 1){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 55){
				cm.sendOk("你的等级不够55级");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getOneTimeLog("师傅") < 1){
				cm.getPlayer().setOneTimeLog("师傅");
				//cm.师门出师();
				cm.sendOk("你成功建立了师门，赶紧去收徒吧！");
				cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "]成功建立了师门，要找师傅的赶紧了！");
				cm.dispose();
			} else {
				cm.sendOk("你已经建立过师门了！去收徒吧！");
				cm.dispose();
			}
		} else if (selection == 5){
			var mount = 获得出师徒弟数量(cm.getPlayer().getId());
			var level = parseInt(mount / 师傅成就每级徒弟数量);
			for(var i = 1; i <= level; i++){
				//cm.getPlayer().dropMessage("出师成就:" + cm.getOneTimeLog("出师成就" + i));//测试
				if(cm.getOneTimeLog("出师成就" + i) < 1){
					if(i > 师傅称号.length){
						cm.sendOk("你已经领取了最高成就了，无法再继续领取了！");
						cm.dispose();
						return;
					}
					cm.setOneTimeLog("出师成就" + i);
					cm.增加赞助余额(师傅成就赞助);
					cm.getPlayer().dropMessage(5, "您获得了 " + 师傅成就赞助 + " 累计赞助");
					cm.给点券(师傅成就点券);
					cm.gainItem(师傅成就道具[0], 师傅成就道具[1]);
					cm.给能力点(师傅成就AP值);
					cm.getPlayer().dropMessage(5, "您获得了 " + 师傅成就AP值 + " 点AP值。");
					cm.sendOk("恭喜你成功领取#b " + 师傅称号[i - 1] + " #k成就奖励。");
					cm.dispose();
					return;
				}
			}
			if(level <= 0){
				var message = "你连1级成就都没有，领啥奖励，赶紧带徒去吧。\r\n";
				message += "\r\n#rps：每收#b" + 师傅成就每级徒弟数量 + "#r个徒弟，就可以获得#b累计赞助x" + 师傅成就赞助 + "#r、#b点券x" + 师傅成就点券 + "#r、#bAP属性值x" + 师傅成就AP值 + "#r、#b#v" + 师傅成就道具[0] + "#x" + 师傅成就道具[1] + "#r，以及#b对应称号#r。\r\n";
				cm.sendOk(message);
				cm.dispose();
				return;
			}else{
				var message ="你已经领过#b " + 师傅称号[level - 1] + " #k成就奖励了。\r\n";
				if(level < 师傅称号.length){
					message += "#d下一级称号:#b" + 师傅称号[level - 1] + "\r\n";
				}else{
					message += "#d下一级称号:#b" + 师傅称号[师傅称号.length - 1] + "\r\n";
				}
				var upNeed = mount % 师傅成就每级徒弟数量;
				message += "#d还需出师徒弟数量:#b" + upNeed + "\r\n";
				cm.sendOk(message);
				cm.dispose();
				return;
			}
			
			/* switch(level){
				case 1:
					if(cm.getOneTimeLog("出师成就" + level) > 0){
						cm.sendOk("你已经领过#b " + 师傅称号[level - 1] + " #k成就奖励了。");
						cm.dispose();
						return;
					}else{
						cm.setOneTimeLog("出师成就" + level);
						cm.增加赞助余额(师傅成就赞助);
						cm.给点券(师傅成就点券);
						cm.gainItem(师傅成就道具[0], 师傅成就道具[1]);
						cm.sendOk("恭喜你成功领取#b " + 师傅称号[level - 1] + " #k成就奖励。");
						cm.dispose();
						return;
					}
			} */
        } else if (selection == 2){
			if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
				cm.sendOk("徒弟或者师傅不在这个地图啊？");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getOneTimeLog("师傅") < 1) {
                cm.sendNext("请让师傅找我对话。");
                cm.dispose();
                return;
			} else if (cm.getBossLog("收徒") > 5) {
							cm.sendNext("每个角色每天只能收5名徒弟，明天再来哦！");
							cm.dispose();
							return;
			}else if (cm.获得总徒弟数量() >= 徒弟数量上限) {
				cm.sendNext("你收过的徒弟总数超过#r" + 徒弟数量上限 + "#k位,是时候把机会让给年轻人了");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带1个徒弟入门（请2人组队）");
				cm.dispose();
				return;
			} else if (cm.获得总徒弟数量() >= 徒弟数量上限){
				cm.sendOk("你的师门已经有#r" + 徒弟数量上限 + "#k个徒弟了");
				cm.dispose();
				return;
			} 
			var next = true;
			var mapId = cm.getPlayer().getMapId();
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var student;
			while(it.hasNext()){
				var cPlayer = it.next();
				var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());//徒弟
				if(victim.getId() != cm.getPlayer().getId()){
					student = victim;
					break;
				}
			}
			if(student == null){
				cm.sendNext("找不到徒弟，请确保徒弟和你组队且在一张地图。");
                cm.dispose();
                return;
			}else if(student.getBossLog(师傅) > 0){
				cm.sendNext("你这个徒弟已经自立师门了，还收个锤子，让他自生自灭吧。");
                cm.dispose();
                return;
			}
			
			var TDid = student.getId();
			var a1_1 = cm.getOneTimeLog(TDid);//自己的收徒记录ID
			var shoutu = student.getOneTimeLog(TDid);
			var chushi = student.getOneTimeLog("出师");
			var id = cm.getPlayer().getId();
			var tcsm = student.getOneTimeLog("退出师门");
			var jrsm = student.getOneTimeLog(TDid);
			if (student.getLevel() > 50){
				cm.sendOk("徒弟等级是否已经大于50级了？(需要徒弟向师傅发起组队！)");
				cm.dispose();
				return;
			} else {
					// cm.getPlayer().setOneTimeLog("收徒");
					if(!cm.收徒(student.getId())){
						cm.sendOk("你已经收过这个徒弟了或者该徒弟已有师门");
						cm.dispose();
						return;
					}
                                        // cm.getPlayer().setOneTimeLog("daitu");
                                        // cm.setBossLog('shoutu');
					// cm.givePartyBossLog("收徒");
					cm.setOneTimeLog(TDid);
					cm.sendOk("你成功收了"+student.getName()+"为徒弟！");
					 
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]收了["+victim.getName()+"]为徒弟，请徒弟进行确认！",true).getBytes());

				//cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "] 收了 ["+victim.getName()+"]为徒弟，请徒弟进行确认！");

 cm.全服黄色喇叭("【师徒系统】 : 玩家 "+cm.getPlayer().getName()+"  收了 ["+student.getName()+"] 为徒弟！")
 
					cm.dispose();
					return;
					}
			
		} else if (selection == 3){
			if (cm.getParty() == null) {
				cm.sendNext("组队后在来找我");
				cm.dispose();
				return;
			}else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带1个徒弟出师（请2人组队）");
				cm.dispose();
				return;
			} else if (cm.allMembersHere() == false){
				cm.sendOk("徒弟或者师傅不在这个地图啊？");
				cm.dispose();
				return;
			}
			var text = "请输入你的出师兑换码（#r可联系管理员领取#k）：\r\n"
			cm.sendGetText(text);
			mark = 3;
		} else if (selection == 4){
			// var sss = 迁移徒弟列表(cm.getPlayer().getId());
			// if(cm.getPlayer().isGM()){
				// 迁移所有角色();
			// }
			
			var message = 读取徒弟列表();
			cm.sendOk(message);
			cm.dispose();
				//cm.openNpc(9900004,153);
	

			} else if (selection == 5){
			var id = cm.getPlayer().getId();
			var tcsm = cm.getOneTimeLog("退出师门");
			var jrsm = cm.getOneTimeLog(id);
			if (jrsm == 0){;
				cm.sendOk("退出师门失败！\r\n你没并没有加入过师门!（注：师傅不可以取消师门）");
				cm.dispose();
			} else if (jrsm - tcsm == 0){
				cm.sendOk("你已经没有师门可以退出了 ，不必再次退出！");
				cm.dispose();
			} else {
				cm.setOneTimeLog("退出师门");
				cm.sendOk("退出师门成功!");
				cm.dispose();
			}
		} else if (selection == 6){
			cm.sendOk("师门系统介绍：\r\n徒弟等级：必须小于#r50#k级\r\n师父等级：必须大于#r55#k级\r\n\r\n徒弟达到#r" + 出师等级 + "#k级即可出师\r\n\r\n徒弟获得:20000点券#v2340000# x2 #v2049100# x1\r\n\r\n\r\n师傅获得：6000点券 #v2340000# x4 #v2049100# x2");
			cm.dispose();
		} else if (selection == 7){
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var cPlayer = it.next();
			var 师傅 = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var id = 师傅.getId();
			if (cm.getPlayer().getLevel() > 80){
				cm.sendOk("师傅不需要确认！");
				cm.dispose();
				return;
			} else if (cm.getBossLog("收徒") >= 1 && cm.getPlayer().getOneTimeLog(id) == 0){
				cm.getPlayer().setOneTimeLog(id);
				cm.sendOk("师徒关系确认成功！");
				  cm.全服黄色喇叭("『师徒系统』" + " : " + "[" + cm.getChar().getName() + "]师徒关系确认成功!");
			      
				cm.dispose();
			} else {
				cm.sendOk("你已经确认过了。或者\r\n");
				cm.dispose();
			}
			} else if (selection == 9){//逐出师门
				cm.openNpc(9900004,10007);
				cm.safeDispose();
			
		} else if (selection == 8){
				cm.openNpc(9900004,10009);
				cm.safeDispose();
		} else if (selection == 10){//叛离师门
			cm.openNpc(9900004,10008);
			cm.safeDispose();
			
		} else if (selection == 11){//阶段奖励
			cm.openNpc(9900004,10089);
			cm.safeDispose();
		} else if (selection == 12){//出师兑换码
			cm.openNpc(9900004,10093);
			cm.safeDispose();
		}
		
		
    }else if(status == 2){
		switch(mark){
			case 3:
				var code = cm.getText();
				
				if (cm.getParty() == null) {
					cm.sendNext("组队后在来找我");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
					cm.sendOk("你还没建立师门呢");
					cm.dispose();
					return;
				} else if (cm.getPlayer().getParty().getMembers().size() > 2){
					cm.sendOk("每次只能带1个徒弟出师（请2人组队）");
					cm.dispose();
					return;
				} else if (cm.allMembersHere() == false){
					cm.sendOk("徒弟或者师傅不在这个地图啊？");
					cm.dispose();
					return;
				} else if(!Packages.snail.RedeemCodeUtils.checkCode("出师", code)){
					cm.sendOk("兑换码无效，请确认。\r\n");
					cm.dispose();
					return;
				}
				
				var next = true;
				var gender = cm.getPlayer().getGender();
				var mapId = cm.getPlayer().getMapId();
				var party = cm.getPlayer().getParty().getMembers();
				var it = party.iterator();
				var student;
				while(it.hasNext()){
					var cPlayer = it.next();
					var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());//徒弟
					if(victim.getId() != cm.getPlayer().getId()){
						student = victim;
						break;
					}
				}

				var TDid = student.getId();
				
				var 徒弟们id = cm.获得所有徒弟id();
				var 是否徒弟 = false;
				if(徒弟们id.isEmpty()){
					cm.sendOk("你没有徒弟啊！");
					cm.dispose();
					return;
				}
				for(var i = 0; i < 徒弟们id.size(); i++){
					if(student.getId() == 徒弟们id.get(i)){
						是否徒弟 = true;
						break;
					}
				}
				
				
				if (student.getLevel() < 出师等级){
					cm.sendOk("你的徒弟等级不够#r" + 出师等级 + "#k级，不能出师！");
					cm.dispose();
				} else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
					cm.sendOk("你还没建立师门呢");
					cm.dispose();
					return;
				} else if (!是否徒弟){
					cm.sendOk("你确定这是你徒弟吗？？？");
					cm.dispose();
					return;
				} else if (是否出师(student.getId())){
					cm.sendOk("这个徒弟已经出师了！");
					cm.dispose();
					return;
				} else {
					// cm.getPlayer().setOneTimeLog("出师");
					
					if(!cm.出师(student.getId())){
						cm.sendOk("出师失败，请确认你是否有该徒弟或者该徒弟是否已出师？？？");
						cm.dispose();
						return;
					}
					Packages.snail.RedeemCodeUtils.useCode("出师", code);
					student.setOneTimeLog("出师");
					// cm.getPlayer().setOneTimeLog(-TDid);			
					cm.gainItem(2049100,2);//师傅获得
					cm.gainNX(+6000);//师傅获得
					cm.gainItem(2340000,4);//师傅获得
					student.modifyCSPoints(1, 20000, true);//徒弟获得
					// student.gainItem(2340000,1);
					cm.gainItem(2340000, 2, false, 0, -1, "", student.getClient());//徒弟获得
					// student.gainItem(2049100,1);
					cm.gainItem(2049100, 1, false, 0, -1, "", student.getClient());//徒弟获得
					cm.sendOk("你带徒"+student.getName()+"出师成功!\r\n徒弟获得:20000点券#v2340000# x2 #v2049100# x1 师傅获得：6000点券 #v2340000# x4 #v2049100# x2");
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]玩家成功带徒出师["+student.getName()+"]获得重磅礼包！",true).getBytes());
					cm.全服喇叭(6,"【师徒系统】 : 玩家 "+cm.getPlayer().getName()+"  玩家成功带徒出师 ["+student.getName()+"] 获得重磅礼包！")
	 
					cm.dispose();
				}
				break;
		}
	}
	
}

function 是否出师(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		result = rs.getInt("graduate");
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function 离开师门(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		var ps0 = con.prepareStatement("Delete FROM 徒弟列表 WHERE student_id = ?");
		ps0.setInt(1, chrid);
		ps0.executeUpdate();
		result = 1;
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function 获得徒弟列表(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("name");
	}
	return name;
}

function 获得出师徒弟数量(chrid){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT count(*) FROM 徒弟列表 WHERE chrid = ? and graduate = 1");
	//cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");//测试
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	var i = 0;
	if(rs.next()){
		i = rs.getInt(1);
	}
	return i;
}

function 获得师傅姓名(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("chrname");
	}
	return name;
}


function 迁移徒弟列表(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var log = "";
	var graduates_id = new ArrayList();
	var students_id = new ArrayList();
	var students_name = new ArrayList();
	var chrname = "";
	var str = "";

	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		chrname = rs.getString("name");
	}else{
		return "";
	}
	ps.close();
	rs.close();
	
	var ps0 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps0.setInt(1, chrid);
	var rs0 = ps0.executeQuery();
	var is_teacher = false;
	while(rs0.next()){
		if(rs0.getString("log").equals("师傅")){
			is_teacher = true;
			break;
		}
	}
	if(!is_teacher){
		cm.getPlayer().dropMessage("角色 " + chrid + " 不是师傅");
		return "该角色不是师傅";
	}
	
	var ps1 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps1.setInt(1, chrid);
	var rs1 = ps1.executeQuery();
	while(rs1.next()){
		log = rs1.getString("log");
		if(Pattern.compile("^-?[1-9]\\d*$").matcher(log).find()){
			if(Integer.parseInt(log) > 0){
				var ps2 = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
				ps2.setInt(1, Integer.parseInt(log));
				var rs2 = ps2.executeQuery();
				while(rs2.next()){
					if(rs2.getInt("id") == null){
						break;
					}
					students_id.add(rs2.getInt("id"));
					students_name.add(rs2.getString("name"));
				}
				ps2.close();
				rs2.close();
			}else{
				graduates_id.add(-Integer.parseInt(log));
				str += graduates_id.get(0);
			}
			
		}
	}
	ps1.close();
	rs1.close();
	
	if(!students_id.isEmpty()){
		var ps3 = con.prepareStatement("Delete FROM 徒弟列表 WHERE chrid = ?");
		ps3.setInt(1, chrid);
		ps3.executeUpdate();
		ps3.close();
		
		for(var i = 0; i < students_id.size(); i++){
			var ps4 = con.prepareStatement("INSERT INTO 徒弟列表 (chrid, chrname, student_id, student_name, graduate) VALUES (?, ?, ?, ?, ?)");
			// ps4.setInt(1, i + 1);
			// ps4.setInt(1, chrid);
			// ps4.setString(2, 处理字符串.removeSpecialCharacters2(chrname));
			// ps4.setInt(3, students_id.get(i));
			// ps4.setString(4, 处理字符串.removeSpecialCharacters2(students_name.get(i)));
			
			ps4.setInt(1, chrid);
			ps4.setString(2, chrname);
			ps4.setInt(3, students_id.get(i));
			ps4.setString(4, students_name.get(i));

			if(is_contain(graduates_id, students_id.get(i))){
				ps4.setInt(5, 1);
			}else{
				ps4.setInt(5, 0);
			}
			ps4.executeUpdate();
			ps4.close();
		}
	}
	
	
	
	return str;
}

function 迁移所有角色(){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters");
	var rs = ps.executeQuery();
	var i = 0;
	while(rs.next()){
		var chridi = rs.getInt("id");
		cm.getPlayer().dropMessage("迁移中，第 " + i + " 个，chrid： " + chridi);
		迁移徒弟列表(chridi);
		i = i + 1;
		
	}
	cm.getPlayer().dropMessage("迁移成功");
}


function 读取徒弟列表(){
	var con = DBConPool.getConnection();
	var ps;
	var message = "#d你的徒弟列表如下：\r\n";
	message += "\t   序号\t\t姓名\t\t  等级\t   是否出师\r\n";
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE chrid = ?");
	//cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");//测试
	ps.setInt(1, cm.getPlayer().getId());
	var rs = ps.executeQuery();
	var i = 1;
	while(rs.next()){
		var ps0 = con.prepareStatement("SELECT * FROM Characters WHERE id = ?");
		ps0.setInt(1, rs.getInt("student_id"));
		var rs0 = ps0.executeQuery();
		var level = 0;
		if(rs0.next()){
			level = rs0.getInt("level");
		}
		
		message += "\t\t" + i + "\t\t#b" + 处理字符串.formatString(15, " ", rs.getString("student_name")) + 处理字符串.formatString(3, " ", level + "");
		if(rs.getInt("graduate") > 0){
			message += "\t\t#g已出师#d\r\n";
		}else{
			message += "\t\t#r未出师#d\r\n";
		}
		i++;
	}
	return message;
}

function ArrayList(arr) {
    this._elementData = arr || [];
}
 
var arrayListPrototype = {
 
    '_arrayPrototype': Array.prototype,
 
    '_getData': function () {
        return this._elementData;
    },
 
    'size': function () {
        return this._getData().length;
    },
 
    'isEmpty': function () {
        return this.size() === 0;
    },
 
    'contains': function (obj) {
		var i, data = this._getData(), length = data.length;
		for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return true;
            }
        }
        return false;
    },
 
    'indexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'lastIndexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = length - 1; i > -1; i--) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'get': function (index) {
        return this._getData()[index];
    },
 
    'set': function (index, element) {
        this._getData()[index] = element;
    },
 
    'add': function (index, element) {
        if (element) {
            this.set(index, element);
        } else {
            return this._getData().push(index);
        }
    },
 
    'remove': function (index) {
        var oldValue = this._getData()[index];
        this._getData()[index] = null;
        return oldValue;
    },
 
    'clear': function () {
        this._getData().length = 0;
    },
 
    'addAll': function (index, array) {
        if (array) {
            this._getData().splice(index, 0, array);
        } else {
            this._arrayPrototype.push.apply(this._getData(), index);
        }
    }
 
};
 
ArrayList.prototype = arrayListPrototype;

function is_contain(datas, data){
	for(var i = 0; i < datas.size(); i++){
		if(data == datas.get(i)){
			return true;
		}
	}
	return false;
}
