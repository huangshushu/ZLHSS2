//礼包
function start() {
    if (im.getSpace(2)>=5) {
       im.gainItem(箱子代码,-1);
       im.gainItem(物品道具,数量);
       im.gainNX(1, 80000);//  1是点卷  后面是数量
       im.gainNX(2, 80000);//  2是抵用  后面是数量      
       //var toDrop = im.getNewEquip(1142358); // 生成一个Equip类                    
       //toDrop.setStr(99); //装备力量
       //toDrop.setDex(99); //装备敏捷
       //toDrop.setInt(99); //装备智力
       //toDrop.setLuk(99); //装备运气
       //toDrop.setMatk(50); //物理攻击
       //toDrop.setWatk(50); //魔法攻击 
       //toDrop.setHp(999);
       //toDrop.setAcc(15); 
       //toDrop.setExpiration(expirationDate);
       toDrop.setOwner("每日福利");
       //im.addFromDrop(toDrop);
       im.sendOk("恭喜您获得 #r管理员送出的每日福利#k 。");
           im.dispose(); 
       im.worldSpouseMessage(0x0A,""+ im.getChar().getName() +" ：我从伴侣冒险岛每日福利礼包中获得了奖励~~!!!");
       //im.dispose();
} else {
     im.sendOk("请保留其他栏有5个格子以上");
    }
    im.dispose();
}