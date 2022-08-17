var status = 0;
var z = "#fEffect/ItemEff/1112811/0/0#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
            var selStr = "#r这里是测试段数的稻草人实验场！这里召唤各种各样属性的稻草人用于测试\r\n" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z;
            selStr += "\r\n#d尊敬的[#r #h # #d]玩家※请选择您需要召唤的测试稻草人※\r\n"
            selStr += "#d#L0#高防御力/属性减半\r\n#d#L1#中防御力/属性减半#d\r\n#L2#低防御力/属性减半#d\r\n#L3#高防御力/属性不减半\r\n";
            selStr += "#r#L4#低防御力/属性不减半\r\n"
			cm.sendSimple(selStr);
    } else if (status == 1) {
        if (cm.getJob() !=0) {
            switch (selection) {
                case 0:
                    if (cm.getPQLog("高防御力/属性减半") <1000 ) {
                        
						cm.spawnMobStats(9305650,1,1000000000000,1);
                        cm.sendOk("#r 次元破裂了，高防御力/属性减半出现了！", 1033210);
						cm.setPQLog("高防御力/属性减半：红");
                        cm.dispose();
                    } else {
                        cm.sendOk("#d#e 次元矩阵没有任何反应，请检查你是否今天已经从次元矩阵中召唤过一次高防御力/属性减半了，或者没有足够的BEYOND币。");
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.getPQLog("中防御力/属性减半") <1000 ) {
                        
		                cm.spawnMobStats(9305651,1,1000000000000,1);
                        cm.sendOk("#r 次元破裂了，中防御力/属性减半出现了！", 1033210);
						cm.setPQLog("中防御力/属性减半");
                        cm.dispose();
                    } else {
                        cm.sendOk("#d#e 次元矩阵没有任何反应，请检查你是否今天已经从次元矩阵中召唤过一次中防御力/属性减半了，或者你没有足够的BEYOND币。");
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.getPQLog("低防御力/属性减半") <1000 ) {
                        
		                cm.spawnMobStats(9305652,1,1000000000000,1);
                        cm.sendOk("#r 次元破裂了，低防御力/属性减半出现了！", 1033210);
						cm.setPQLog("低防御力/属性减半");
                        cm.dispose();
                    } else {
                        cm.sendOk("#d#e 次元矩阵没有任何反应，请检查你是否今天已经从次元矩阵中召唤过一次低防御力/属性减半了，或者你没有足够的BEYOND币。");
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.getPQLog("高防御力/属性不减半") <1000) {
                        
		                cm.spawnMobStats(9305653,1,1000000000000,1);
                        cm.sendOk("#r 次元破裂了，高防御力/属性不减半出现了！", 1033210);
						cm.setPQLog("高防御力/属性不减半");
                        cm.dispose();
                    } else {
                        cm.sendOk("#d#e 次元矩阵没有任何反应，请检查你是否今天已经从次元矩阵中召唤过一次高防御力/属性不减半了，或者你没有足够的BEYOND币。");
                        cm.dispose();
                    }
                    break;
				case 4:
                    if (cm.getPQLog("低防御力/属性不减半") <1000) {
                        
		                cm.spawnMobStats(9305655,1,1000000000000,1);
                        cm.sendOk("#r 心跳箱子发出紫色的光来，低防御力/属性不减半已经开启！", 1033210);
						cm.setPQLog("低防御力/属性不减半");
                        cm.dispose();
                    } else {
                        cm.sendOk("#d#e 心跳箱子没有任何反应，请检查你是否今天已经从心跳箱子召唤过一次低防御力/属性不减半了，或者你没有足够的BEYOND币。");
                        cm.dispose();
                    }
                    break;	
                
            }
        }else{
			cm.sendOk("警告:你开外挂？新手还想打怪？");
			cm.dispose();
		}
        
    }
}