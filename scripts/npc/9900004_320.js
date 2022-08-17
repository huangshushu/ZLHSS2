importPackage(net.sf.odinms.client);
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
var 拍卖价格 = cm.GetPiot("拍卖价格","1");



          if (status == 0) {
           cm.sendGetText(""+心+" "+心+" #r"+MC+" - 拍卖容纳费用调整#k "+心+" "+心+"#e\r\n\r\n当前拍卖容纳单价；#b"+拍卖价格+"\r\n\r\b#e#r请输重置的价格数量为；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("- 确定将价格重置为 ； #r"+fee+" ?");
        
		} else if (fee < 0) {
                cm.sendOk("输入有误!");
                cm.dispose();
        
				} else {

                 if (chance <= 1) { 
					   cm.GainPiot("拍卖价格","1",-拍卖价格);
					   cm.GainPiot("拍卖价格","1",fee);
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

