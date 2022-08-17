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
				var text = "您好，以下强化功能，每个选项每天只能使用一次\r\n#r强化装备窗口第一格装备！\r\n★增加次数不可增加在没有可升级次数的装备上\r\n\r\n";
				text += "#L0##b#e1个#v4251302#+500W金币等于+1次装备强化次数#l\r\n\r\n";
				text += "#L1##r1个#v4251302#+1500W金币等于+1次装备强化次数#l\r\n\r\n"
				text += "#L2##d1个#v4251302#+3000W金币等于+1次装备强化次数#l\r\n\r\n"
				text += "#L3##d2个#v4251302#+4000W金币等于+1次装备强化次数#l\r\n\r\n"
                cm.sendSimple(text);
            } else if (status == 1) {
					switch(selection){
						case 0://1.
						cm.openNpc(9310084,1);
						break;
						case 1://2.
						cm.openNpc(9310084,2);
						break;
						case 2://3.
						cm.openNpc(9310084,3);
						break;
						case 3://4.
						cm.openNpc(9310084,4);
						break;
				}
					
}
}
}


