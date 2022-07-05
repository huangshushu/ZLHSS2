/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){qm.removeAll(4032323);qm.gainItem(4032323,1);qm.forceStartQuest();qm.sendNextS("#p1002104#\u8bf4\u81ea\u4ece\u53d7\u5230#o9300346#\u7684\u653b\u51fb\u4e4b\u540e\uff0c\u5c31\u52a8\u5458\u4e00\u5207\u529b\u91cf\u5728\u91d1\u94f6\u5c9b\u4e0a\u627e\u5230\u4e86\u5c01\u5370\u77f3\u3002\u4ed6\u8bf4\u7559\u5728\u81ea\u5df1\u8eab\u4e0a\u592a\u5371\u9669\uff0c\u5e94\u8be5\u628a\u5b83\u4fdd\u7ba1\u5728\u5c9b\u4e0a\u3002#b#m140000000##k\u5e94\u8be5\u6bd4\u8f83\u5b89\u5168\uff0c\u5feb\u628a#b\u5c01\u5370\u77f3\u4ea4\u7ed9#p1201000#\u5427#k",3);qm.dispose()}function end(a,b,c){qm.teachSkill(21100005,qm.getPlayer().getSkillLevel(21100005),10);qm.forceCompleteQuest();qm.sendNextS("\u597d\u597d\u7684\u89e3\u8bfb#b\u8fde\u73af\u5438\u8840#k\u6280\u80fd\u5427\uff01",3);qm.dispose()};