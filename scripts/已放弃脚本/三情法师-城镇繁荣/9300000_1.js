/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：收藏手册【存】
 */
importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var a;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var slot = Array();
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.对话结束();
    } else {
        if (mode == 0) {
            status == 0;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            var avail = "";
            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(4).getItem(i) != null) {
                       avail += "#L" + cm.getInventory(4).getItem(i).getItemId() + "# " + cm.显示物品(cm.getInventory(4).getItem(i).getItemId()) + " x#b #c" + cm.getInventory(4).getItem(i).getItemId() + "##k#l\r\n";
                    
                }
                slot.push(i);
            }
			if(avail==""){
				cm.说明文字("你没有其他物品可以贡献。");
                cm.对话结束();
                return;
			}
            cm.sendSimple("选择你要提交的物品吧，都可以贡献繁荣度哦:\r\n#b" + avail);
        } else if (status == 1) {
            itemss = selection;
            cm.sendGetText("请输入你要贡献的 " + cm.显示物品(itemss) + " 的数量：");
        } else {
            fee = cm.getText();
			if(fee==""){
				cm.说明文字("请输入正确的数量。");
                cm.对话结束();
                return;
			}
			if(fee<0){
				cm.说明文字("请输入正确的数量。");
                cm.对话结束();
                return;
			}
			if(fee>2000){
				cm.说明文字("一次最多只能贡献2000。");
                cm.对话结束();
                return;
			}
            if (!cm.判断物品数量(itemss, fee)) {
                cm.说明文字("你并没有这么多。");
                cm.对话结束();
                return;
            }
			cm.setBossRankCount("射手村贡献点", fee);
			cm.Gaincharactera("射手村繁荣度",1,fee);
            cm.收物品(itemss, fee);
            cm.说明文字("贡献成功。");
            cm.对话结束();
        }
    }
}