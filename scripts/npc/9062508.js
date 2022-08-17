/*
SnailMS脚本生成器
*/

var 技能火焰 = "#fSkill/1210.img/skill/12101006/effect/7#";


var minLevel = 120;//骑士团最低等级
var ap = 30;//每个Link号增加的ap值
var count;
var oldChrId = 0;
var oldAp = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		count = cm.查询骑士团职业数量(minLevel);
		oldChrId = cm.查询link授予角色(cm.getC().getAccID());
		var text = "\t\t\t\t\t  #dLink系统#k\r\n";
		text += "  " + 技能火焰 + "\t\t" + 技能火焰 + "\r\n";
		text += "你当前拥有 #r" + minLevel + " #k级以上骑士团角色的数量为 #r" + count + "#k 个\r\n";
		text += "可获得共计 #b" + count * ap + " #k点AP值\r\n";
		if(oldChrId != 0){
			oldAp = cm.查询linkAP(cm.getC().getAccID());
			text += "已Link至角色 #b" + cm.getCharacterNameById(oldChrId) + "#k 共计 #b" + oldAp + "#k 点AP值#k\r\n";
		}
		text += "\t#L1##d[我要获得能力点]#l\t#L2#[我要收回能力点]#l\r\n\r\n";
		text += "#r注意：Link获得的能力点不能加到HP和MP上面，不然洗不回来！切记！！\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		
		if(selection == 1){
			if(oldChrId == 0){
				if(count == 0){
					cm.sendOk("你没有可用的ap值啊！");
					cm.dispose();
					return;
				}else if(cm.给予Link(cm.getC().getAccID(), cm.getPlayer().getId(), count * ap)){
					cm.给能力点(count * ap);
					cm.sendOk("恭喜你，获得了 #b" + count * ap + "#k 能力点~\r\n");
				}else{
					cm.sendOk("因不明原因，给予Link失败。");
				}
				cm.dispose();
				return;
			}else{
				cm.sendOk("你已经给角色 #r" + cm.getCharacterNameById(oldChrId) + "#k 传授了Link了!请先登录该角色收回Link。\r\n");
				cm.dispose();
				return;
			}
			
		}else if (selection == 2) {
			if(cm.getPlayer().getId() != oldChrId){
				cm.sendOk("抱歉，只有被传授了Link的角色才可以收回!");
				cm.dispose();
				return;
			}else if(oldAp == 0){
				cm.sendOk("你目前没有被传授Link的角色啊!直接点击#b[我要获得能力点]#k就可以了。");
				cm.dispose();
				return;
			}
			var remainAP = cm.getPlayer().getRemainingAp();
			var takeAp = cm.重置Link(cm.getC().getAccID());
			if(takeAp > 0){
				if(remainAP >= takeAp){
					cm.收能力点(takeAp);
					cm.sendOk("已成功回收共计 #r" + oldAp + "#k 点AP值\r\n");
					cm.dispose();
					return;
				}else{
					cm.收能力点(remainAP);
					takeAp -= remainAP;
					var str = cm.getPlayer().getStat().getStr();
					if(str - 4 >= takeAp){
						cm.getPlayer().getStat().setStr(str - takeAp);
						cm.刷新();
						cm.sendOk("已成功回收共计 #r" + oldAp + " #k点AP值，不够的部分通过扣除已加能力值来补齐。\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setStr(4);
						takeAp -= (str - 4);
					}
					
					var dex = cm.getPlayer().getStat().getDex();
					if(dex - 4 >= takeAp){
						cm.getPlayer().getStat().setDex(dex - takeAp);
						cm.刷新();
						cm.sendOk("已成功回收共计 #r" + oldAp + " #k点AP值，不够的部分通过扣除已加能力值来补齐。\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setDex(4);
						takeAp -= (dex - 4);
					}
					
					var _int = cm.getPlayer().getStat().getInt();
					if(_int - 4 >= takeAp){
						cm.getPlayer().getStat().setInt(_int - takeAp);
						cm.刷新();
						cm.sendOk("已成功回收共计 #r" + oldAp + " #k点AP值，不够的部分通过扣除已加能力值来补齐。\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setInt(4);
						takeAp -= (_int - 4);
					}
					
					var luk = cm.getPlayer().getStat().getLuk();
					if(luk - 4 >= takeAp){
						cm.getPlayer().getStat().setLuk(luk - takeAp);
						cm.刷新();
						cm.sendOk("已成功回收共计 #r" + oldAp + " #k点AP值，不够的部分通过扣除已加能力值来补齐。\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setLuk(4);
						takeAp -= (luk - 4);
					}
					
					var HpMpApUsed = cm.getPlayer().getHpMpApUsed();
					if(HpMpApUsed >= takeAp){
						cm.getPlayer().setHpMpApUsed(HpMpApUsed - takeAp);
						cm.刷新();
						cm.sendOk("已成功回收共计 #r" + oldAp + " #k点AP值，不够的部分通过扣除已加能力值来补齐。\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().setHpMpApUsed(0);
						takeAp -= HpMpApUsed;
					}
					
					if(takeAp > 0){
						cm.sendOk("错误，仍有 #r" + takeAp + " #k点AP值未收回，已提交GM备案，请联系GM处理。\r\n");
						cm.dispose();
						return;
					}
					
				}
			}else{
				cm.sendOk("错误，查询记录你已传授的能力点为 #r0#k\r\n");
				cm.dispose();
				return;
			}
			
		} 
		return;
		
	} else {
		cm.safeDispose();
		return;
	}
}

