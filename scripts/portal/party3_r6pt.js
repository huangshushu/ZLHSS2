function enter(pi) {
 try {
    var em = pi.getEventManager("OrbisPQ");
    if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1")) {
	pi.instantMapWarp(pi.getMapId(),(pi.getPortal().getName().startsWith("rp01") ? 6 : pi.getPortal().getName().startsWith("rp02") ? 7 : pi.getPortal().getName().startsWith("rp03") ? 8 : pi.getPortal().getName().startsWith("rp04") ? 9 : pi.getPortal().getName().startsWith("rp05") ? 10 : pi.getPortal().getName().startsWith("rp06") ? 11 : pi.getPortal().getName().startsWith("rp07") ? 12 : pi.getPortal().getName().startsWith("rp08") ? 13 : pi.getPortal().getName().startsWith("rp09") ? 14 : pi.getPortal().getName().startsWith("rp10") ? 15 : pi.getPortal().getName().startsWith("rp11") ? 16 : pi.getPortal().getName().startsWith("rp12") ? 17 : pi.getPortal().getName().startsWith("rp13") ? 18 : pi.getPortal().getName().startsWith("rp14") ? 19 : pi.getPortal().getName().startsWith("rp15") ? 20 : pi.getPortal().getName().startsWith("rp16") ? 21 : 22));
	pi.playerMessage(-1, "Correct combination!");
    } else {
	pi.instantMapWarp(pi.getMapId(), (pi.getPortal().getName().startsWith("rp01") ? 22 : pi.getPortal().getName().startsWith("rp02") ? 22 : pi.getPortal().getName().startsWith("rp03") ? 22 : pi.getPortal().getName().startsWith("rp04") ? 22 : pi.getPortal().getName().startsWith("rp05") ? 9 : pi.getPortal().getName().startsWith("rp06") ? 9 : pi.getPortal().getName().startsWith("rp07") ? 9 : pi.getPortal().getName().startsWith("rp08") ? 9 : pi.getPortal().getName().startsWith("rp09") ? 13 : pi.getPortal().getName().startsWith("rp10") ? 13 : pi.getPortal().getName().startsWith("rp11") ? 13 : pi.getPortal().getName().startsWith("rp12") ? 13 : pi.getPortal().getName().startsWith("rp13") ? 17 : pi.getPortal().getName().startsWith("rp14") ? 17 : pi.getPortal().getName().startsWith("rp15") ? 17 : pi.getPortal().getName().startsWith("rp16") ? 17 : 22));
	pi.playerMessage(-1, "Incorrect combination.");
    }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "Error: " + e);
 }
}