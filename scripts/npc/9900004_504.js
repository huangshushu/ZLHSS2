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
   cm.sendSimple("      #e您好！我是#r觉醒商人#k\r\n\r\n  #d您目前拥有的金币:#r" + cm.getMeso() + "  \r\n#r #L6##r出处：#v4440000# #v4441000##v4442000##v4443000#\r\n\r\n#r#L7#神级扎头觉醒 <全属60> #v1003112#\r\n#L3#神级项环觉醒《全属50》  #v1122076# #l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e觉醒商人是对玩家所拥有的#r特定装备#k进行觉醒交换，玩家在拥有#r对应装备#k的前提下，通过收集#r觉醒材料#k，即可兑换觉醒装备，属性威力大幅度提升！");
            cm.dispose();
    }else if  (selection == 1) {
           cm.sendOk("#e他在神木村，首先你得有暗黑龙王杀手勋章才行！\r\n#bPS：勋章在百草堂换");
		       cm.dispose();
    }else if  (selection == 4) {
           cm.sendOk("#e他在玩具城#k");
		       cm.dispose();
       } else if (selection == 6) {//
            cm.openNpc(9900004,1834);
		   
    }else if  (selection == 2) {
           cm.sendOk("#e他在泰国，爬到屋顶修东西！");
		       cm.dispose(); 
       } else if (selection == 7) {//
            cm.openNpc(2100008,0);
       } else if (selection == 3) {//
            cm.openNpc(9900004,2108);
    }else if  (selection == 8) {
           cm.sendOk("#e他在林中之城，首先你得有贵族披风这个装备才行！\r\n#bPS：贵族披风在昭和村换");
		       cm.dispose();
    }else if  (selection == 9) {
          cm.sendOk("#e他在艾琳森林，首先你得有三国腰带这个装备才行！\r\n#bPS：腰带在妖精学院副校长那里换");
		       cm.dispose(); 
    }else if  (selection == 3) {
           cm.sendOk("#e他在破坏的射手村，首先你得有黑龙项环这个装备才行！\r\n#bPS：黑龙项环在黄昏勇士部落换");
		       cm.dispose();
    }else if  (selection == 10) {
           cm.sendOk("#e飞侠的码头，知道在哪吧");
		       cm.dispose();


}
}
}
}

