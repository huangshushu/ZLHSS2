var status = 0;
var typed=0;
var selStr;
var xold;
var xnew;
var itemtype=0;
var onesel=0;

var items1=new Array("1402220","1422158","1342090","1452226","1482189","1322223","1312173","1332247","1382231","1232084","1522113","1442242","1222084","1212089","1372195","1492199","1432187","1472235","1362109","1462213","1412152","1532118","1242090");
var items2=new Array("1072870","1003976","1052669","1082556","1022211","1132247","1122269","1032224","1152160","1012438","1102623");
var items3=new Array("1112663","1113075","1032223","1122267","1132246","1122143","1122144","1122145","1122146","1122147","1012174");
var items4=new Array("1202023","1202027","1202031","1202035");



function start() {
	cm.sendNext("#b#e图腾合成系统，#r每日合成力量：敏捷：智力：运气：物攻：魔攻#g+4到8点#r举例说明一下：\r\n#n--------------------------------------------------#k\r\n如果你有#b两个普通的真.乔图腾#k，那么交给我后，我将给你一把名字为：[#r ① #k]的真.乔图腾，攻击肯定要#b比普通的高#k哟\r\n--------------------------------------------------\r\n如果你有两把名字为：[ #r①#k ]的真.乔图腾，可以继续找我合成名字为：[ #r②#k ]的真.乔图腾.\r\n--------------------------------------------------\r\n#k你大概明白合成的方法了吧？\r\n  #e#b只支持：#v1202023##v1202027##v1202031##v1202035#\r\n 不明白也没关系，点击下一步我们正式的合成一把看，#r注意，这个只能合成天然的装备，加过属性的装备合成的话属性会丢失，所以请注意!!!",0);
	}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.dispose();
        } else
            status++;
        if (status == 1){
			cm.sendSimple("目前只开放了图腾合成：\r\n#r注意，这个只能合成天然的装备，加过属性(包括加过潜能)的装备不可以合成，合成的话后果自负，所以请注意!!!\r\n#b\r\n#L0#>>>>普通装备合成①星装备#l\r\n#L1#>>>>①星装备合成②星装备#l\r\n#L2#>>>>②星装备合成③星装备#l\r\n#L3#>>>>③星装备合成④星装备#l\r\n#L4#>>>>④星装备合成⑤星装备#l\r\n#L5#>>>>⑤星装备合成⑥星装备#l\r\n#L6#>>>>⑥星装备合成⑦星装备#l\r\n#L7#>>>>⑦星装备合成⑧星装备#l\r\n#L8#>>>>⑧星装备合成终极#l",0);
			
		}else if (status == 2){
			if(selection==0){
				xold=".";
				xnew="①";
			}else if(selection==1){
				xold="①";
				xnew="②";
			}else if(selection==2){
				xold="②";
				xnew="③";
			}else if(selection==3){
				xold="③";
				xnew="④";
			}else if(selection==4){
				xold="④";
				xnew="⑤";
			}else if(selection==5){
				xold="⑤";
				xnew="⑥";
			}else if(selection==6){
				xold="⑥";
				xnew="⑦";
			}else if(selection==7){
				xold="⑦";
				xnew="⑧";
			}else if(selection==8){
				xold="⑧";
				xnew="[终极神器]";
			}
			cm.sendSimple("请选择你要合成的类别:\r\n#r注意，这个只能合成天然的装备，加过属性的装备合成的话属性会丢失，所以请注意!!!\r\n#b\r\n#e#L4#图腾合成#l",0);
		}else if (status == 3){
			selStr = " 请选择你要合成的武器.每合成一次随机加10至30攻击.\r\n";
			itemtype=selection;
			if(selection==1){
				for (var i = 0; i < items1.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items1[i]+"##b]"+xnew+" 需要2把 #d#z"+items1[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			if(selection==2){
				for (var i = 0; i < items2.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items2[i]+"##b]"+xnew+" 需要2把 #d#z"+items2[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			if(selection==3){
				for (var i = 0; i < items3.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items3[i]+"##b]"+xnew+" 需要2把 #d#z"+items3[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			if(selection==4){
				for (var i = 0; i < items4.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items4[i]+"##b]"+xnew+" 需要2把 #d#z"+items4[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			cm.sendSimple(selStr, 0);
		}else if (status == 4){
			if(itemtype==1){
				onesel=items1[selection];//选择的物品ID
			}
			if(itemtype==2){
				onesel=items2[selection];//选择的物品ID
			}
			if(itemtype==3){
				onesel=items3[selection];//选择的物品ID
			}
			if(itemtype==4){
				onesel=items4[selection];//选择的物品ID
			}
			var inv = cm.getInventory(1);
			var it;
			var itemids;
			var checkitem=0;
			var itemsrc=0;
			var itemsrc2=0;
			for (var i = 0; i <= 96; i++) {
				it = inv.getItem(i);
				if (it != null) {
					itemids = it.getItemId();
					if(itemids==onesel){//检查是否等于这个物品
						if(xold.equals(".")==true){
							if(it.getOwner().length()>0){
							}else{
								checkitem+=1;
								if(checkitem==1){
									itemsrc=i;
								}
								if(checkitem==2){
									itemsrc2=i;
									break;//跳出FOR
								}
							}
						}else if(it.getOwner().length()>0){//检查是否有加个星的
							if(it.getOwner().substring(0, 1).equals(xold)==true){//检查是否符号加星的条件
								checkitem+=1;
								if(checkitem==1){
									itemsrc=i;
								}
								if(checkitem==2){
									itemsrc2=i;
									break;//跳出FOR
								}
							}
						}
					}
				}
			}
			if(checkitem==2){//检测到物品，开始合成程序，
				//var is = cm.getItemInfo();
				//var itemddd = is.randomizeStats(is.getEquipById(1202023)).copy();

				var itemd = cm.getInventory(1).getItem(itemsrc).copy(); //取得物品编号数量
				itemd.setOwner(xnew); //物品名称
				var hwchancess = Math.floor(Math.random()*4+4); //获得随机值
				
					itemd.setMatk(itemd.getMatk()+hwchancess);
					itemd.setWatk(itemd.getWatk()+hwchancess);
					itemd.setStr(itemd.getStr()+hwchancess);
					itemd.setDex(itemd.getDex()+hwchancess);
					itemd.setInt(itemd.getInt()+hwchancess);
					itemd.setLuk(itemd.getLuk()+hwchancess);

				
				cm.worldMessage("【"+ cm.getChar().getName() +"】通过市场NPC[图腾合成]合成系统合成成功~大家恭喜它~"); //公告
				cm.removeSlot(1, itemsrc, 1) //删除物品
				cm.removeSlot(1, itemsrc2, 1) //删除物品
				//cm.sendOk("#v"+onesel+"#"); //测试公告板显示内容
                cm.addFromDrop(cm.getC(), itemd, false);
				cm.worldSpouseMessage(0xA, "[图腾合成] 玩家 "+ cm.getChar().getName() +" 合成了 "+xnew+"星 ["+cm.getItemName(itemd.getItemId())+"] ！");
				cm.worldSpouseMessage(0xA, "[图腾合成] 玩家 "+ cm.getChar().getName() +" 合成了 "+xnew+"星 ["+cm.getItemName(itemd.getItemId())+"] ！");
				cm.sendOk("恭喜，合成成功.\r\n扣除两个#r"+xold+"#v"+onesel+"##k.在给你一个新的#r"+xnew+"#v"+onesel+"#.",0);
			}else{
				cm.sendOk("对不起，你没有两个"+xold+"#v"+onesel+"#.所以合成"+xnew+"#v"+onesel+"#失败.",0);
			}
			cm.dispose();
			return;
		}//end stats
    }
}