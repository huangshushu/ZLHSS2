var X = [
["高科技镖(30G)", "合成高科技镖"],
["无限飞镖(40G)", "合成无限飞镖"],
["白金飞镖(50G)", "合成白金飞镖"],
];

var eff5 = "#fEffect/CharacterEff/1112901/0/0#"; //蓝色爱心
var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0){
		var txt = "\r\n";
		for(var i in X){
			if (i%2 == 0) {
				txt += "\r\n\t"
			}
			txt += "#r#L"+i+"#"+eff5+"#e"+X[i][0]+"#n#l\t\t";
		}
		cm.sendOk(txt);
	}else if (status == 1) {
		cm.dispose();
		cm.openNpc(9010009,X[selection][1]);
    }
}
