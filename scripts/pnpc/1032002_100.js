/*
 ZEVMS冒险岛(079)游戏服务端脚本
 */
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;
    action(1, 0, 0)
}
function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

	var 综合 = 百分比计算();
    if (status <= 0) {
        var selStr = "   Hi~#b#h #，#k这里是统计哪类出现的概率占所有附魔的占比，只有出现过的附魔才会被统计，如果有必成的话是不会计算在内的。\r\n";
		if(cm.GetPiot("fm",1)>0){
			selStr += "  [强    攻]:#B"+cm.GetPiot("fm",1)/综合*100+"#  "+(cm.GetPiot("fm",1)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",2)>0){
			selStr += "  [超 强 攻]:#B"+cm.GetPiot("fm",2)/综合*100+"#  "+(cm.GetPiot("fm",2)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",3)>0){
			selStr += "  [战争意志]:#B"+cm.GetPiot("fm",3)/综合*100+"#  "+(cm.GetPiot("fm",3)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",4)>0){
			selStr += "  [鹰    眼]:#B"+cm.GetPiot("fm",4)/综合*100+"#  "+(cm.GetPiot("fm",4)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",5)>0){
			selStr += "  [锐    眼]:#B"+cm.GetPiot("fm",5)/综合*100+"#  "+(cm.GetPiot("fm",5)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",6)>0){
			selStr += "  [谢    幕]:#B"+cm.GetPiot("fm",6)/综合*100+"#  "+(cm.GetPiot("fm",6)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",7)>0){
			selStr += "  [兵不血刃]:#B"+cm.GetPiot("fm",7)/综合*100+"#  "+(cm.GetPiot("fm",7)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",8)>0){
			selStr += "  [致命打击]:#B"+cm.GetPiot("fm",8)/综合*100+"#  "+(cm.GetPiot("fm",8)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",9)>0){
			selStr += "  [蒙    蔽]:#B"+cm.GetPiot("fm",9)/综合*100+"#  "+(cm.GetPiot("fm",9)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",10)>0){
			selStr += "  [追    击]:#B"+cm.GetPiot("fm",10)/综合*100+"#  "+(cm.GetPiot("fm",10)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",11)>0){
			selStr += "  [魔法爆破]:#B"+cm.GetPiot("fm",11)/综合*100+"#  "+(cm.GetPiot("fm",11)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",12)>0){
			selStr += "  [残暴之力]:#B"+cm.GetPiot("fm",12)/综合*100+"#  "+(cm.GetPiot("fm",12)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",13)>0){
			selStr += "  [最后轻语]:#B"+cm.GetPiot("fm",13)/综合*100+"#  "+(cm.GetPiot("fm",13)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",21)>0){
			selStr += "  [坚    韧]:#B"+cm.GetPiot("fm",21)/综合*100+"#  "+(cm.GetPiot("fm",21)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",22)>0){
			selStr += "  [坚不可摧]:#B"+cm.GetPiot("fm",22)/综合*100+"#  "+(cm.GetPiot("fm",22)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",23)>0){
			selStr += "  [顽    固]:#B"+cm.GetPiot("fm",23)/综合*100+"#  "+(cm.GetPiot("fm",23)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",24)>0){
			selStr += "  [未卜先知]:#B"+cm.GetPiot("fm",24)/综合*100+"#  "+(cm.GetPiot("fm",24)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",31)>0){
			selStr += "  [幸运狩猎]:#B"+cm.GetPiot("fm",31)/综合*100+"#  "+(cm.GetPiot("fm",31)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",32)>0){
			selStr += "  [苦中作乐]:#B"+cm.GetPiot("fm",32)/综合*100+"#  "+(cm.GetPiot("fm",32)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",33)>0){
			selStr += "  [闲来好运]:#B"+cm.GetPiot("fm",33)/综合*100+"#  "+(cm.GetPiot("fm",33)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",34)>0){
			selStr += "  [财源滚滚]:#B"+cm.GetPiot("fm",34)/综合*100+"#  "+(cm.GetPiot("fm",34)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",100)>0){
			selStr += "  [异常抗性]:#B"+cm.GetPiot("fm",100)/综合*100+"#  "+(cm.GetPiot("fm",100)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",101)>0){
			selStr += "  [异常免疫]:#B"+cm.GetPiot("fm",101)/综合*100+"#  "+(cm.GetPiot("fm",101)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",200)>0){
			selStr += "  [伺机待发]:#B"+cm.GetPiot("fm",200)/综合*100+"#  "+(cm.GetPiot("fm",200)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",300)>0){
			selStr += "  [茁壮生命]:#B"+cm.GetPiot("fm",300)/综合*100+"#  "+(cm.GetPiot("fm",300)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",301)>0){
			selStr += "  [茁壮魔力]:#B"+cm.GetPiot("fm",301)/综合*100+"#  "+(cm.GetPiot("fm",301)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",302)>0){
			selStr += "  [茁壮生成]:#B"+cm.GetPiot("fm",302)/综合*100+"#  "+(cm.GetPiot("fm",302)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",303)>0){
			selStr += "  [拔苗助长]:#B"+cm.GetPiot("fm",303)/综合*100+"#  "+(cm.GetPiot("fm",303)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",400)>0){
			selStr += "  [稳如泰山]:#B"+cm.GetPiot("fm",400)/综合*100+"#  "+(cm.GetPiot("fm",400)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",401)>0){
			selStr += "  [愤怒之火]:#B"+cm.GetPiot("fm",401)/综合*100+"#  "+(cm.GetPiot("fm",401)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",500)>0){
			selStr += "  [训练有方]:#B"+cm.GetPiot("fm",500)/综合*100+"#  "+(cm.GetPiot("fm",500)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",501)>0){
			selStr += "  [训练有素]:#B"+cm.GetPiot("fm",501)/综合*100+"#  "+(cm.GetPiot("fm",501)/综合*100).toFixed(2)+"%\r\n";
		}
		if(cm.GetPiot("fm",502)>0){
			selStr += "  [心有灵犀]:#B"+cm.GetPiot("fm",502)/综合*100+"#  "+(cm.GetPiot("fm",502)/综合*100).toFixed(2)+"%\r\n";
		}
	 
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			default:
                cm.dispose();
				cm.openNpc(1032002,0);
                break;
        }
    }
}

function 百分比计算() {
	var result = 0;
	if(cm.GetPiot("fm",1)>0){
		result+=cm.GetPiot("fm",1);
	}
	if(cm.GetPiot("fm",2)>0){
		result+=cm.GetPiot("fm",2);
	}
	if(cm.GetPiot("fm",3)>0){
		result+=cm.GetPiot("fm",3);
	}
	if(cm.GetPiot("fm",4)>0){
		result+=cm.GetPiot("fm",4);
	}
	if(cm.GetPiot("fm",5)>0){
		result+=cm.GetPiot("fm",5);
	}
	if(cm.GetPiot("fm",6)>0){
		result+=cm.GetPiot("fm",6);
	}
	if(cm.GetPiot("fm",7)>0){
		result+=cm.GetPiot("fm",7);
	}
	if(cm.GetPiot("fm",8)>0){
		result+=cm.GetPiot("fm",8);
	}
	if(cm.GetPiot("fm",9)>0){
		result+=cm.GetPiot("fm",9);
	}
	if(cm.GetPiot("fm",10)>0){
		result+=cm.GetPiot("fm",10);
	}
	if(cm.GetPiot("fm",11)>0){
		result+=cm.GetPiot("fm",11);
	}
	if(cm.GetPiot("fm",12)>0){
		result+=cm.GetPiot("fm",12);
	}
	if(cm.GetPiot("fm",13)>0){
		result+=cm.GetPiot("fm",13);
	}
	if(cm.GetPiot("fm",21)>0){
		result+=cm.GetPiot("fm",21);
	}
	if(cm.GetPiot("fm",22)>0){
		result+=cm.GetPiot("fm",22);
	}
	if(cm.GetPiot("fm",23)>0){
		result+=cm.GetPiot("fm",23);
	}
	if(cm.GetPiot("fm",24)>0){
		result+=cm.GetPiot("fm",24);
	}
	if(cm.GetPiot("fm",31)>0){
		result+=cm.GetPiot("fm",31);
	}
	if(cm.GetPiot("fm",32)>0){
		result+=cm.GetPiot("fm",32);
	}
	if(cm.GetPiot("fm",33)>0){
		result+=cm.GetPiot("fm",33);
	}
	if(cm.GetPiot("fm",100)>0){
		result+=cm.GetPiot("fm",100);
	}
	if(cm.GetPiot("fm",101)>0){
		result+=cm.GetPiot("fm",101);
	}
	if(cm.GetPiot("fm",200)>0){
		result+=cm.GetPiot("fm",200);
	}
	if(cm.GetPiot("fm",300)>0){
		result+=cm.GetPiot("fm",300);
	}
	if(cm.GetPiot("fm",301)>0){
		result+=cm.GetPiot("fm",301);
	}
	if(cm.GetPiot("fm",302)>0){
		result+=cm.GetPiot("fm",302);
	}
	if(cm.GetPiot("fm",303)>0){
		result+=cm.GetPiot("fm",303);
	}
	if(cm.GetPiot("fm",400)>0){
		result+=cm.GetPiot("fm",400);
	}
	if(cm.GetPiot("fm",401)>0){
		result+=cm.GetPiot("fm",401);
	}
	if(cm.GetPiot("fm",500)>0){
		result+=cm.GetPiot("fm",500);
	}
	if(cm.GetPiot("fm",501)>0){
		result+=cm.GetPiot("fm",501);
	}
	if(cm.GetPiot("fm",502)>0){
		result+=cm.GetPiot("fm",502);
	}
	
	return result;
}