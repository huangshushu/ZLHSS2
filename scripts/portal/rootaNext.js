function enter(pi) {
     if(pi.getPlayer().getMapId() == 105200100){
        pi.openNpc(1064013,2); //普通半半
     }else if(pi.getPlayer().getMapId() == 105200500){
        pi.openNpc(1064013,1); //进阶半半
     }else if(pi.getPlayer().getMapId() == 105200200){
        pi.openNpc(1064012,2); //普通皮埃尔
     }else if(pi.getPlayer().getMapId() == 105200600){
        pi.openNpc(1064012,1); //进阶皮埃尔
     }else if(pi.getPlayer().getMapId() == 105200400){
        pi.openNpc(1064015,2); //普通贝伦
     }else if(pi.getPlayer().getMapId() == 105200800){
        pi.openNpc(1064015,1); //进阶贝伦
     }else if(pi.getPlayer().getMapId() == 105200300){
        pi.openNpc(1064014,2); //普通血腥女皇
     }else if(pi.getPlayer().getMapId() == 105200700){
        pi.openNpc(1064014,1); //进阶血腥女皇
     }
}
