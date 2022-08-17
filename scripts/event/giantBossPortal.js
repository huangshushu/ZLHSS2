function enter(pi) {
    //pi.openNpc(9390124,"giantBoss");
    pi.playPortalSE();
    try {
        var mapid = pi.getMapId();
        var em = pi.getEventManager("BeidlerPQ");
        if (em != null && !pi.getMap().getAllMonster().isEmpty() && pi.getPortalName().startsWith("in") && mapid != 863010100 && mapid != 863010500) {
            pi.playerMessage(5, "传送口未激活. 请先消灭所有怪物.");
            return;
        }
        if (mapid == 863010100) {
            if (pi.getPortal().getId() == 8) {
                pi.playerMessage(-1, "通往贝勒德的路→贝勒德右腿下层");
                pi.warpS(863010200, 1);
            } else if (pi.getPortal().getId() == 7) {
                pi.playerMessage(-1, "通往贝勒德的路→贝勒德东部悬崖下方");
                pi.warpS(863010400, 2);//OK
            } else if (pi.getPortal().getId() == 6) {
                pi.playerMessage(-1, "通往贝勒德的路→贝勒德西部悬崖下方");
                pi.warpS(863010300, 2);//OK
            } else if (pi.getPortal().getId() == 9) {
                pi.playerMessage(-1, "通往贝勒德的路→贝勒德左腿下层");
                pi.warpS(863010220, 1);//OK
            }
        } else if (mapid == 863010300) {
            pi.playerMessage(-1, "贝勒德西部悬崖下方");
            if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德西部悬崖下方→通往贝勒德的路");
                pi.warpS(863010100, 6);//OK
            } else if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德西部悬崖下方→贝勒德西部悬崖上方");
                pi.warpS(863010310, 1); //OK
            }
        } else if (mapid == 863010310) {
            pi.playerMessage(-1, "贝勒德西部悬崖上方");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德西部悬崖上方→贝勒德西部悬崖下方");
                pi.warpS(863010300, 1);//OK
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德西部悬崖上方→贝勒德的右手上臂");
                pi.warpS(863010320, 2);//OK
            }
        } else if (mapid == 863010420) {
            pi.playerMessage(-1, "贝勒德的左手上臂");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德的左手上臂→贝勒德东部悬崖上方");
                pi.warpS(863010410, 2);//OK
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德的左手上臂→贝勒德的心脏");
                pi.warpS(863010500, 5);//OK 
            } else if (pi.getPortal().getId() == 3) {
                pi.playerMessage(-1, "贝勒德的左手上臂→贝勒德的左手肩膀");
                pi.warpS(863010430, 1); //OK
            }
        } else if (mapid == 863010430) {
            pi.playerMessage(-1, "贝勒德的左手肩膀");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德的左手肩膀→贝勒德的左手上臂");
                pi.warpS(863010420, 3);//OK
            } else if (pi.getPortal().getId() == 3) {
                pi.playerMessage(-1, "贝勒德的左手肩膀→贝勒德的心脏");
                pi.warpS(863010500, 6);//OK
            }
        } else if (mapid == 863010330) {
            pi.playerMessage(-1, "贝勒德的右手肩膀");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德的右手肩膀→贝勒德的右手上臂");
                pi.warpS(863010320, 3);//OK
            } else if (pi.getPortal().getId() == 3) {
                pi.playerMessage(-1, "贝勒德的右手肩膀→贝勒德的心脏");
                pi.warpS(863010500, 4);//OK
            }
        } else if (mapid == 863010500) {
            pi.playerMessage(-1, "贝勒德的心脏");
            if (pi.getPortal().getId() == 5) {
                pi.playerMessage(-1, "贝勒德的心脏→ 贝勒德的左手上臂");
                pi.warpS(863010420, 2);//OK//OK 
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德的心脏→贝勒德的肚脐");
                pi.warpS(863010240, 3);//OK
            } else if (pi.getPortal().getId() == 3) {
                pi.playerMessage(-1, "贝勒德的心脏→贝勒德的头");
                pi.warpS(863010600, 2);//OK
            } else if (pi.getPortal().getId() == 6) {
                pi.playerMessage(-1, "贝勒德的心脏→贝勒德的右手肩膀");
                pi.warpS(863010430, 3);//OK 
            } else if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德的心脏→贝勒德右腿上层");
                pi.warpS(863010320, 1);//OK 
            } else if (pi.getPortal().getId() == 4) {
                pi.playerMessage(-1, "贝勒德的心脏→贝勒德的右手上臂");
                pi.warpS(863010330, 3);//OK
            }
        } else if (mapid == 863010240) {
            pi.playerMessage(-1, "贝勒德的肚脐");
            if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德的肚脐→贝勒德右腿上层");
                pi.warpS(863010210, 2);//OK
            } else if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德的肚脐→贝勒德左腿上层");
                pi.warpS(863010230, 2);//OK
            } else if (pi.getPortal().getId() == 3) {
                pi.playerMessage(-1, "贝勒德的肚脐→贝勒德的心脏");
                pi.warpS(863010500, 2); //OK
            }
        } else if (mapid == 863010210) {
            pi.playerMessage(-1, "贝勒德右腿上层");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德右腿上层→贝勒德右腿下层");
                pi.warpS(863010200, 2);//OK
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德右腿上层→贝勒德的肚脐");
                pi.warpS(863010240, 2);//OK
            }
        } else if (mapid == 863010200) {
            pi.playerMessage(-1, "贝勒德右腿下层");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德右腿下层→通往贝勒德的路");
                pi.warpS(863010100, 8);
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德右腿下层→贝勒德右腿上层");
                pi.warpS(863010210, 1);//OK
            }
        } else if (mapid == 863010400) {
            pi.playerMessage(-1, "贝勒德东部悬崖下方");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德东部悬崖下方→贝勒德东部悬崖上方");
                pi.warpS(863010410, 1);//OK
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德东部悬崖下方→通往贝勒德的路");
                pi.warpS(863010100, 7);
            }
        } else if (mapid == 863010410) {
            pi.playerMessage(-1, "贝勒德东部悬崖上方");
            if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德东部悬崖上方→贝勒德的左手上臂");
                pi.warpS(863010420, 1);//OK
            } else if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德东部悬崖上方→贝勒德东部悬崖下方");
                pi.warpS(863010400, 1);//OK
            }
        } else if (mapid == 863010320) {
            pi.playerMessage(-1, "贝勒德的右手上臂");
            if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德的右手上臂→贝勒德西部悬崖上方");
                pi.warpS(863010310, 2);//OK
            } else if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德的右手上臂→贝勒德的心脏");
                pi.warpS(863010500, 1);//OK
            } else if (pi.getPortal().getId() == 3) {
                pi.playerMessage(-1, "贝勒德的右手上臂→贝勒德的右手肩膀");
                pi.warpS(863010330, 1);//OK
            }
        } else if (mapid == 863010230) {
            pi.playerMessage(-1, "贝勒德左腿上层");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德左腿上层→贝勒德左腿下层");
                pi.warpS(863010220, 2);//OK
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德左腿上层→贝勒德的肚脐");
                pi.warpS(863010240, 1);//OK
            }
        } else if (mapid == 863010220) {
            pi.playerMessage(-1, "贝勒德左腿下层");
            if (pi.getPortal().getId() == 1) {
                pi.playerMessage(-1, "贝勒德左腿下层→通往贝勒德的路");
                pi.warpS(863010100, 9);//OK
            } else if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德左腿下层→贝勒德左腿上层");
                pi.warpS(863010230, 1);//OK
            }
        } else if (mapid == 863010600) {
            pi.playerMessage(-1, "贝勒德的头");
            if (pi.getPortal().getId() == 2) {
                pi.playerMessage(-1, "贝勒德的头→贝勒德的心脏");
                pi.warpS(863010500, 3);//OK
            }
        }
        pi.playerMessage(-1, "Portal Name : " + pi.getPortalName() + " ID : " + pi.getPortal().getId());

    } catch (e) {
        pi.getPlayer().dropMessage(5, "Portal Name : " + pi.getPortalName() + " ID : " + pi.getPortal().getId() + "Error: " + e);
    }
}
