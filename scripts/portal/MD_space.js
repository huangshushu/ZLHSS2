


/*

	腔绢 柯扼牢 家胶 胶农赋飘 涝聪促.

	器呕捞 乐绰 甘 : 第撇赴 矫埃狼 辨 1

	器呕 汲疙 : 固聪带傈 涝厘


*/

var map = 220070001;
var exit = 220070000;

function enter(pi) {
    if (pi.getPlayer().getMapId() == map) {
        var eim = pi.getEventInstance();
        if (eim == null) {
            pi.warp(exit);
            return true;
        }
        eim.removePlayer(pi.getPlayer());
        pi.warp(exit);
        pi.getPlayer().message(5, "固聪带傈 牢胶畔胶俊辑 硼厘沁嚼聪促.");
        return true;
    } else {
        var em = pi.getEventManager("MiniDungeon");
        if (em == null) {
            pi.getPlayer().message(5, "固聪带傈 胶农赋飘俊 坷幅啊 惯积沁嚼聪促. GM俊霸 巩狼秦 林技夸.");
            return false;
        }
        if (pi.getPlayer().getParty() != null) {
            if (!pi.allMembersHere()) {
                pi.getPlayer().message(5, "颇萍盔捞 葛滴 葛咯乐绢具 涝厘且 荐 乐嚼聪促.");
                return false;
            }
            if (!pi.isLeader()) {
                pi.getPlayer().message(5, "颇萍厘捞 涝厘且 荐 乐嚼聪促.");
                return false;
            }
            em.setProperty("Leader_"+pi.getPlayer().getParty().getLeader().getId()+"_Exit", pi.getPlayer().getMapId()+"");
            em.setProperty("Leader_"+pi.getPlayer().getParty().getLeader().getId()+"_Map", map+"");
            em.startInstance(pi.getParty(), pi.getPlayer().getMap());
            pi.getPlayer().message(5, "固聪带傈 牢胶畔胶俊 涝厘登菌嚼聪促.");
            var eim = pi.getPlayer().getEventInstance();
            eim.startEventTimer(7200000);
            return true;
        } else {
            em.setProperty("Leader_"+pi.getPlayer().getId()+"_Exit", pi.getPlayer().getMapId()+"");
            em.setProperty("Leader_"+pi.getPlayer().getId()+"_Map", map+"");
            em.startInstance(pi.getPlayer());
            pi.getPlayer().message(5, "固聪带傈 牢胶畔胶俊 涝厘登菌嚼聪促.");
            var eim = pi.getPlayer().getEventInstance();
            eim.startEventTimer(7200000);
            return true;
        }
    }
            
        
}
