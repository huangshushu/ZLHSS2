importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("咳咳。。");
            cm.dispose();
            return;
        }	
        if (mode == 1)
            status++;
        else
            status--;
		var MC = cm.getServerName();
        var MZ =cm.getChar().getName();
		var pmsl = cm.getBossRank("拍卖数量",2);
		var pmjg = cm.GetPiot("拍卖价格","1");
          if (status == 0) {
            cm.sendGetText("\r\n当前价格；#r"+pmjg+"#k 点券/格\r\n\r\n请输入你需要增加的拍卖容纳数量；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("- 确定要增加的拍卖数量是； #r"+fee+" #k?\r\n你需要支付 #r"+fee*pmjg+"#k 点券。");
		} else if (fee < 0) {
                cm.sendOk("输入有误。");
                cm.dispose();
	    } else if (cm.getPlayer().getCSPoints(1) < fee*pmjg) {
                cm.sendOk("点券不足!");
                cm.dispose();
        
				} else {

                 if (chance <= 1) { 
				 
					   cm.setBossRankCount("拍卖数量",fee);
	                   cm.dispose();
					  
                       cm.openNpc(9900004,9900005);	
	                } 
	                else  { 
                         cm.sendOk("未知错误，请联系ZEV;7144700");
	                     cm.dispose(); 
	                } 

            }
        }
    }
