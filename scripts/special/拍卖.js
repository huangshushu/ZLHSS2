
var status = 0;
var a=0;
var nx=0;

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
    if (status == 0) {
		
			cm.sendGetText("你有大王授权的CDKey？.\r\n目前充值：#r"+cm.getHyPay(1)+" #k元\r\n");
		} else if (status == 1) {
			CDKey = cm.getText();
      var codeTyle = Packages.client.MapleCharacterUtil.etNXCodeType(CDKey);
			if(Packages.handling.cashshop.handler.CashShopOperation.CouponCode(CDKey,cm.getClient())){
				cm.sendYesNo("您好,欢迎使用cdkey兑换功能.\r\n.当前CDKey：#r" + CDKey + "#k\r\nCDKey类型：#r" + codeTyle + "#k\r\n请确认后使用。");
        cm.dispose();
			}else{
        cm.sendOk("无效key");
        cm.dispose();
      }




			// if (cm.GetPiot(CDKey,"100") < 1){
			// 	cm.sendOk("此CDkey不存在");
			// 	cm.dispose();
			// } else {
			// 	cm.sendYesNo("您好,欢迎使用cdkey兑换功能.\r\n.当前CDKey：#r" + CDKey + "#k\r\nCDKey余额：#r" + cm.GetPiot(CDKey,"100") + "#k\r\n请确认后使用。");
			// }
        } else if (status == 2) {
			if (cm.GetPiot(CDKey,"100") > 0) { 
				   //cm.喇叭(2, "[" + cm.getPlayer().getName() + "]使用CDKey获得了" + cm.GetPiot(CDKey,"100") + "元");
				   //cm.gainNX(+ cm.GetPiot(CDKey,"100"));
				   cm.addHyPay(cm.GetPiot(CDKey,"100"));
				   cm.GainPiot(CDKey, 100, -cm.GetPiot(CDKey,"100"));
				   cm.即时存档();
				   cm.sendOk("你已经成功消费掉您的CDKey.");
				   cm.dispose();
				} else {
				   cm.sendOk("你是怎么做到的，偷渡到这个界面？");
				   cm.dispose();
				}
      }
   }