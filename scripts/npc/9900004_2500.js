var status = -1;
var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var wtlist = new Array(
//排行榜名称 数据表(characters)字段名
	
	Array("力  量 排行榜","str"),
	Array("敏  捷 排行榜","dex"),
	Array("智  力 排行榜","int"),
	Array("运  气 排行榜","luk")
);
var seletype;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var selStr = "哇塞,你竟敢接触神秘力量,这里是排名!!!\r\n\r\n";
			for(var i = 0; i < wtlist.length; i++){
				selStr += "#L"+i+"##b"+wtlist[i][0]+"#l\t";
				if((i+1)%2 == 0){
					selStr += "\r\n\r\n";
				}
			}
        cm.sendSimple(selStr);
    } else if (status == 1) {
		if(wtlist[selection][1] <= 6){
			cm.sendOk(cm.ShowJobRank(wtlist[selection][1]));
			cm.dispose();
		} else {
			cm.showwn(wtlist[selection][1]);
			cm.dispose();
		}
	} else {
		cm.sendOk("脚本错误~!");
	}
}

