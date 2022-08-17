var status;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			var selStr = "#r - GM清理和满技能功能 #k\r\n#L1# 加满技能  #L0# 清理技能 ";
         //  cm.sendSimple("#r - GM清理和满技能功能 #k\r\n #L0# 清理技能 #L1# 加满技能");
			if(cm.getJob() == 4002 || cm.getJob() >= 4200 && cm.getJob() <= 4212){
		//selStr += "抱歉，您当前的职业不允许一键加满技能";
		}
        cm.sendSimple(selStr);
        } else if (status == 1) {
            cm.playerMessage("当前选择 " + selection);
            switch (selection) {
            case 0:
                cm.clearSkills();
                break;
            case 1:
                cm.clearSkills();
                cm.maxSkillsByJob();
                break;
            }
            cm.dispose();
        }
    }
}
