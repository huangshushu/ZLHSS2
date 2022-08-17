var status;

var typed;
var inventoryType;
var deleteSlot;
var deleteQuantity;
var text="";

var start;
var itemlist = Array(
    1712004, //羁绊阿尔卡娜
    1712004 //羁绊之翼
);


var daojulist = Array(
    1712000,  //A级力量宝石
    1712001,  //A级运气宝石
    1712002,  //A级智慧宝石
    1712003,  //A级敏捷宝石
    1712004  //神圣拯救者之石
    
);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
	cm.dispose();
	return;
    } else if (mode == 1){
	status++;
    } else {
	status--;
    }

    switch (status) {

        case 0:
            text = "#b埃尔露娜的新力量!不同型号的神秘徽章赋予不同的力量！\r\n在获得初始神秘徽章阿尔卡娜之后可以用各色神秘徽章对阿尔卡娜进行升级!每个神秘徽章对应一次升级次数！\r\n【最高升级次数为30次,有失败概率,失败则升级宝石消失！】\r\n\r\n";//\r\n30次的羁绊之翼将完全展开：#i" +1712004+ ":##b（完整形态）
            text+="#L1##r 1. 15个【#i" +1712000+ ":# #z" +1712000+ "#】兑换#i" +1712004+ ":#(初始)#l\r\n";
            text+="#L2# 2. 强化【#i" +1712004+ ":# #z" +1712004+ "#】#l\r\n";
            cm.sendSimple(text);
            break;

        case 1: 

            if(selection ==1){

                if(cm.haveItem(1712000,15)){
                    cm.gainItem(1712000,-15);
                    cm.gainItem(1712004,1);
                    cm.sendOk("恭喜你成功兑换了1个【#i" +1712004+ ":# #z" +1712004+ "#】");
                    cm.dispose();
                }else{
                     text="15个#v"+1712000+"##z"+1712000+"##l\r\n";
                    cm.sendOk("你调皮咯，你没有"+text);
                    cm.dispose();
                }


            }else if(selection ==2){
                text = "你想使用什么神秘徽章对“阿尔卡娜”徽章升级呢?\r\n";
                text+="#L1# 1. 使用【#i" +1712000+ ":# #z" +1712000+ "#】（全属性加30/神秘力量提升3）#l\r\n";
                text+="#L2# 2. 使用【#i" +1712001+ ":# #z" +1712001+ "#】（全属性加50/神秘力量提升5）#l\r\n";
                text+="#L3# 3. 使用【#i" +1712002+ ":# #z" +1712002+ "#】（全属性加60/神秘力量提升6）#l\r\n";
                text+="#L4# 4. 使用【#i" +1712003+ ":# #z" +1712003+ "#】（全属性加60/攻击魔法+2/神秘力量提升10）#l\r\n";
                //text+="#L5# 5. 使用【#i" +1712004+ ":# #z" +1712004+ "#】（攻魔加1）#l";
                cm.sendSimple(text);
	        }
            break;
        case 2: //

            typed =selection;
            if(cm.haveItem(daojulist[typed-1],1)){
                inventoryType = 1;
                var index_a = 0;
                var list = cm.getInventory(inventoryType).list();
                itemList = list.iterator();
                text = "\t\t#e- 请选择要提升的阿尔卡娜！ -#n\r\n\r\n#b";
                var indexof = 1;
                var newItemList = Array();
                while (itemList.hasNext()) {
                    var item = itemList.next();
                    var reqLevel = cm.getReqLevel(item.getItemId());
                    for(var i = 0;i<itemlist.length;i++){
                        if(1712004==item.getItemId() && item.getEnhance()<30){ 
                        newItemList[item.getPosition()]=item.getItemId();
                        continue;
                        }
                    }
                }
                for(var key in newItemList) {
                    text += "#L" + key + "##v" + newItemList[key] + "#";
                    index_a++;
                    if (indexof > 1 && indexof % 5 == 0) {
                        text += "\r\n";
                    }
                    indexof++;
                }
                if (index_a <= 0) {
                    cm.sendSimple("您没有可以提升的阿尔卡娜！");
                    status = -1;
                    return;
                }
                cm.sendSimple(text);
            }else{
                text="1个#v"+daojulist[typed-1]+"##z"+daojulist[typed-1]+"##l\r\n";
                cm.sendOk("你又调皮咯，你没有"+text);
                cm.dispose();
            }
            break;
        case 3:
            var item = cm.getInventory(inventoryType).getItem(selection);
            deleteSlot = selection;
            // deleteQuantity = item.getQuantity();
            // itemq = getType(item.getItemId());
            if (cm.getSpace(4)<2) {
                cm.sendOk("其他栏格子不足，请整理后提升。");
                cm.dispose();
                return ;
            }
            text = "#e确定要提升#r"+item.getEnhance()+"星#v" + item.getItemId() + "##z" + item.getItemId() + "##k吗？\r\n当前武器状态:\r\n#k";
            text +="强化星级："+item.getEnhance()+"\r\n";
            text +="力量："+item.getStr()+"\r\n";
            text +="敏捷："+item.getDex()+"\r\n";
            text +="智力："+item.getInt()+"\r\n";
            text +="运气："+item.getLuk()+"\r\n";
            // text +="HP："+item.getHp()+"\r\n";
            // text +="MP："+item.getMp()+"\r\n";
            text +="物理攻击："+item.getWatk()+"\r\n";
            text +="魔法攻击："+item.getMatk()+"\r\n";
                start = item.getEnhance();
            // text +="物理防御："+item.getWdef()+"\r\n";
            // text +="魔法防御："+item.getMdef()+"\r\n";
            // text +="魔法防御："+item.getAcc()+"\r\n";
            // text +="避免:"+item.getAvoid()+"\r\n";
            // text +="手技："+item.getHands()+"\r\n";
            // text +="移动速度："+item.getSpeed()+"\r\n";
            // text +="跳跃力："+item.getJump()+"\r\n";
            // text +="升级次数："+item.getUpgradeSlots()+"\r\n";
            // text +="等级："+item.getLevel()+"\r\n";
            // text +="魔法防御："+item.getSealed()+"\r\n";
             text +="BOSS伤害："+item.getBossDamage()+"\r\n";
            // text +="破功值："+item.getLimitBreak()+"\r\n";
             text +="无视防御："+item.getIgnorePDR()+"\r\n";
            // text +="总伤："+item.getTotalDamage()+"\r\n";
            cm.sendNextPrev(text);

           

            break;
        case 4:
            if(deleteSlot == 128){
				cm.sendOk("请挪动你的武器,武器不能放置在最后一格。");
				cm.dispose();
				return;
			}
            if (cm.getSpace(4)<2) {
                cm.sendOk("其他栏格子不足，请整理后提升。");
                cm.dispose();
                return ;
            }

           
                var item = cm.getInventory(1).getItem(deleteSlot);

                var toDrop = cm.getNewEquip(item.getItemId());
                if(start<29){
                    toDrop = cm.getNewEquip(item.getItemId());
                }else{
                    toDrop = cm.getNewEquip(1712004);
                }
               //ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类                    
				// var toDrop =  cm.getInventory(1).getItem(item.getItemId());
				
				// 设置属性
				toDrop.setState(item.getState(false), false);
				toDrop.setPotential(item.getPotential(1, true), 1, true);
				toDrop.setPotential(item.getPotential(2, true), 2, true);
				toDrop.setPotential(item.getPotential(3, true), 3, true);
				toDrop.setPotential(item.getPotential(1, false), 1, false);
				toDrop.setPotential(item.getPotential(2, false), 2, false);
				toDrop.setPotential(item.getPotential(3, false), 3, false);
				toDrop.setLimitBreak(item.getLimitBreak());


                if(typed == 1){

                    toDrop.setStr(item.getStr()+30); //武器力量
                    toDrop.setDex(item.getDex()+30); //武器敏捷
                    toDrop.setInt(item.getInt()+30); //武器智力
                    toDrop.setLuk(item.getLuk()+30); //武器运气
                    toDrop.setArc(item.getArc()+3); //神秘力量
                    toDrop.setMatk(item.getMatk()); //物理攻击
                    toDrop.setWatk(item.getWatk()); //魔法攻击 
                }else if(typed ==2){
                    toDrop.setStr(item.getStr()+50); //武器力量
                    toDrop.setDex(item.getDex()+50); //武器敏捷
                    toDrop.setInt(item.getInt()+50); //武器智力
                    toDrop.setLuk(item.getLuk()+50); //武器运气
                    toDrop.setArc(item.getArc()+5); //神秘力量
                    toDrop.setMatk(item.getMatk()); //物理攻击
                    toDrop.setWatk(item.getWatk()); //魔法攻击 

                }else if(typed ==3){
                    toDrop.setStr(item.getStr()+60); //武器力量
                    toDrop.setDex(item.getDex()+60); //武器敏捷
                    toDrop.setInt(item.getInt()+60); //武器智力
                    toDrop.setLuk(item.getLuk()+60); //武器运气
                    toDrop.setArc(item.getArc()+6); //神秘力量
                    toDrop.setMatk(item.getMatk()); //物理攻击
                    toDrop.setWatk(item.getWatk()); //魔法攻击 
                    
                }else if(typed ==4){
                    toDrop.setStr(item.getStr()+60); //武器力量
                    toDrop.setDex(item.getDex()+60); //武器敏捷
                    toDrop.setInt(item.getInt()+60); //武器智力
                    toDrop.setLuk(item.getLuk()+60); //武器运气
                    toDrop.setArc(item.getArc()+10); //神秘力量
                    toDrop.setMatk(item.getMatk()+2); //物理攻击
                    toDrop.setWatk(item.getWatk()+2); //魔法攻击 
                    
                }else if(typed ==5){
                    toDrop.setStr(item.getStr()); //武器力量
                    toDrop.setDex(item.getDex()); //武器敏捷
                    toDrop.setInt(item.getInt()); //武器智力
                    toDrop.setLuk(item.getLuk()); //武器运气
                    toDrop.setMatk(item.getMatk()+1); //物理攻击
                    toDrop.setWatk(item.getWatk()+1); //魔法攻击 
                   
             
                }
                if (cm.getMeso() < 50000000) {
                    cm.playerMessage(1, "抱歉 失败了\r\n\r\n你当前没有 5000万金币！");
                    cm.dispose();
                    return;
                }
                if (Care_NumBoth(1, 100) > 20) {
                    cm.playerMessage(1, "强化 失败了\r\n\r\n成功的概率为：10%\r\n\r\n减少了 5000万金币");
                    cm.gainItem(daojulist[typed-1],-1);
                    cm.gainMeso(-50000000);
                    cm.dispose();
                    return;
                }
				toDrop.setHp(item.getHp()); 
				toDrop.setHp(item.getMp()); 
                // toDrop.setMatk(item.getMatk()); //
                // toDrop.setMdef(item.getMdef()); //魔法攻击 
                toDrop.setWdef(item.getWdef()); //物理攻击
                toDrop.setMdef(item.getMdef()); //魔法攻击 
				toDrop.setAcc(item.getAcc());
				toDrop.setAvoid(item.getAvoid());
				toDrop.setHands(item.getHands());//手技
				toDrop.setSpeed(item.getSpeed());//移动速度：
				toDrop.setJump(item.getJump());//跳跃力：	
				toDrop.setUpgradeSlots(item.getUpgradeSlots());//跳跃力： 
				toDrop.setBossDamage(item.getBossDamage());//BOSS伤害：
				toDrop.setLimitBreak(item.getLimitBreak());//破功值：
				toDrop.setEnhance(item.getEnhance()+1);//强化星级：
				toDrop.setIgnorePDR(item.getIgnorePDR());//无视防御：	
				toDrop.setTotalDamage(item.getTotalDamage());//无视防御：	
				
                
                cm.removeSlot(inventoryType, deleteSlot, 1);

				cm.addFromDrop(toDrop); 

                cm.gainItem(daojulist[typed-1],-1);


                cm.sendOk("因为神秘力量的汇聚，阿尔卡娜提升了力量！");
				cm.dispose();


            break;

    }
}
function Care_NumBoth(Min, Max) {//Min 最小值 Max最大值
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}