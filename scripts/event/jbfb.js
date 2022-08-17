var status = 0;
function start() {
        cm.sendNext("金币副本：\r\n玩家每天只能进一次。\r\n会员每天可以进两次。（请点击下一步开启）");
}

function action(mode, type, selection) {
    if (mode == 1) {
		var em = cm.getEventManager("Goldpz");
		if (em == null) {
			cm.sendOk("请联系管理员开通此副本。");
		}else{
		    var prop = em.getProperty("started");
			if(cm.getPQLog("金币副本")<1||cm.getChar().isGM()==true){
				if (cm.getParty()==null) {
		            cm.sendOk("请先自己开个组,而且只能自己一个人.完成后再来跟我说话");
				}else if (cm.getParty().getMembers().size()>1){
					cm.sendOk("组里只能自己一个人");
				}else if(prop == null||prop =="false" ){
						em.startInstance(cm.getParty(), cm.getMap());
				        cm.setPQLog("金币副本");
						cm.worldSpouseMessage(0x2,"『金币副本』 ：玩家 "+ cm.getChar().getName() +" 进入了金币副本.");
		                cm.dispose();
				}else{
						cm.sendOk("对不起，该副本已经有人");
					}
			}else if (cm.getPQLog("金币副本")<2||cm.getChar().isGM()==true){
				if (cm.getParty()==null&&party != 1) {
		            cm.sendOk("请先自己开个组,而且只能自己一个人.完成后再来跟我说话");
				}else if (cm.getParty().getMembers().size()>1){
					cm.sendOk("组里只能自己一个人");
				}else if(prop == null||prop =="false" ){
						em.startInstance(cm.getParty(), cm.getMap());
				        cm.setPQLog("金币副本");
						cm.worldSpouseMessage(0x2,"『金币副本』 ：玩家 "+ cm.getChar().getName() +" 进入了金币副本.");
		                cm.dispose();
				}else{
						cm.sendOk("对不起，该副本已经有人");
					}
			}else{
				cm.sendOk("开启失败\r\n1.你不是会员\r\n2.初级会员每天只能进一次\r\n3.高级会员每天只能进两次")
			}
		}
		}
    cm.dispose();
}
