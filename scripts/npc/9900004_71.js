/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：反馈专区
 */
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
		var 账号 = cm.getClient().getAccountName();
		var 名字 =cm.getChar().getName();

        if (status == 0) {
            cm.sendGetText("请输入你的建议");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("确定发送以下建议吗？\r\n  #b"+fee+"");
				} else {
                   	if (chance <= 1 ) { 
						if(cm.getip()=="127.0.0.1"){
							cm.ZEVMS("服务端信息文件/服务端反馈信息/建议专区/"+year+"-"+month+"-"+day+"/单机反馈/"+MC+"/"+账号+".txt","————————————————————\r\n反馈时间:"+year+"-"+month+"-"+day+" " + hour + ":" + minute + ":" + second + "\r\n反馈区域:"+MC+"\r\nIP地址:"+cm.getip()+"\r\n反馈账号:"+账号+"\r\n反馈角色:"+名字+"\r\n反馈信息:"+fee+"\r\n————————————————————\r\n");
						}else{
							cm.ZEVMS("服务端信息文件/服务端反馈信息/建议专区/"+year+"-"+month+"-"+day+"/私服联机反馈/"+MC+"/"+账号+".txt","————————————————————\r\n反馈时间:"+year+"-"+month+"-"+day+" " + hour + ":" + minute + ":" + second + "\r\n反馈区域:"+MC+"\r\nIP地址:"+cm.getip()+"\r\n反馈账号:"+账号+"\r\n反馈角色:"+名字+"\r\n反馈信息:"+fee+"\r\n————————————————————\r\n");
						}
						cm.sendOk("发送完成。");
	                    cm.dispose();
		    } else  { 
                         cm.sendOk("未知错误，请联系ZEV;7144700");
	                     cm.dispose(); 
	                } 
            }
        }
    }