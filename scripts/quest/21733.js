/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){qm.forceStartQuest();qm.dispose()}function end(a,b,c){qm.teachSkill(211E5,qm.getPlayer().getSkillLevel(211E5),20);qm.sendNextS("\u611f\u8c22\u4f60\u6551\u4e86\u6211!",3);qm.gainExp(3900);qm.forceCompleteQuest();qm.dispose()};