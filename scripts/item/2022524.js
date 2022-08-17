 /* * * * * * * * * * * *
 * *  脚本作者：HuanMS * *
 * *  QQ：346452946  * *
 * * * * * * * * * * * */


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			需要金币 = 0;
			
			
			
			cm.sendYesNo("#r我可以帮你把技能点满!!!#k");
		} else if (status == 1) {
                if (cm.getMeso() >=需要金币){
                cm.sendOk("#r#e恭喜您点满了所有技能，从此叱咤风云！！");
				cm.teachSkill(1100000,20,20); //精准剑
				cm.teachSkill(1100002,30,30); //终极剑
				cm.teachSkill(1101004,20,20); //快速剑
				cm.teachSkill(1101006,20,20); //愤怒之火
				cm.teachSkill(1101007,30,30);
				cm.teachSkill(1000000,16,16);
				cm.teachSkill(1000001,10,10);
				cm.teachSkill(1001004,20,20);
				cm.teachSkill(1001005,20,20);

                        cm.gainMeso(-需要金币);
                        //cm.喇叭(1, "[" + cm.getPlayer().getName() + "]使用了一键满技恭喜这位豪~");
			cm.dispose();
                        }else{ 
                cm.sendOk("#b金币不足，下次收集完再来吧.");
                cm.dispose();
                                 }
			}
		}
	}
