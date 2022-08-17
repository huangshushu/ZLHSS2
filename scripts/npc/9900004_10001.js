function start() { 

    cm.sendSimple("嗨, 我是#e#d万能转职NPC#n#k，请问你要转成什么职业?#n\r\n#e#d#L28#【新手】\r\n#n#d#L29#     新手系#r#l\r\n#L24#    【七七者】    #L15#【骑士团】        #L16#【战神】        \r\n\r\n#e#d#L30#【冒险家】\r\n#n#d#L31#     战士职业#r#l\r\n#L1#    【英雄】        #L2#【圣骑士】    \#L3#【黑骑士】\r\n#d#L32#     法师职业#r#l\r\n#L4#    【冰雷】        #L5#【火毒】        #L6#【主教】\r\n#d#L33#      弓手职业#r#l\r\n#L8#    【箭神】        #L7#【神射手】\r\n#d#L34#     飞侠职业#r#l\r\n#L9#    【隐士】    #L10#【侠盗】\r\n#d#L35#     海盗职业#r#l\r\n#L12#    【冲锋队长】        #L13#【船长】"); 
} 
function action(mode, type, selection) { 
 cm.dispose(); 
    if (selection == 1) { 
        cm.changeJob (112); 
      } else if (selection == 2) { 
        cm.changeJob (122); 
      } else if (selection == 3) { 
        cm.changeJob (132); 
      } else if (selection == 4) { 
        cm.changeJob (212); 
      } else if (selection == 5) { 
        cm.changeJob (222); 
      } else if (selection == 6) { 
        cm.changeJob (232); 
      } else if (selection == 7) { 
        cm.changeJob (312); 
      } else if (selection == 8) { 
        cm.changeJob (322); 
      } else if (selection == 9) { 
        cm.changeJob (412); 
      } else if (selection == 10) { 
        cm.changeJob (422); 
      } else if (selection == 11) { 
        cm.changeJob (434); 
      } else if (selection == 12) { 
        cm.changeJob (512); 
      } else if (selection == 13) { 
        cm.changeJob (522); 
      } else if (selection == 14) { 
        cm.changeJob (532); 
      } else if (selection == 15) { 
        cm.changeJob (1000); 
      } else if (selection == 16) { 
        cm.changeJob (2000); 
      } else if (selection == 17) { 
        cm.changeJob (2218); 
      } else if (selection == 18) { 
        cm.changeJob (2312); 
      } else if (selection == 19) { 
        cm.changeJob (3112); 
      } else if (selection == 20) { 
        cm.changeJob (3212); 
      } else if (selection == 21) { 
        cm.changeJob (3312); 
      } else if (selection == 22) { 
        cm.changeJob (3512); 
      } else if (selection == 23) { 
        cm.changeJob (2112); 
      } else if (selection == 24) { 
        cm.changeJob (0); 
      } else if (selection == 25) { 
        cm.changeJob (2003); 
      } else if (selection == 26) { 
        cm.changeJob (572); 
      } else if (selection == 27) { 
        cm.changeJob (910); 
     } else { 
        cm.sendOk("您还没有选择职业!"); 
        cm.dispose(); 
    } 
} 

