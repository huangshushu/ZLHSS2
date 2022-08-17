/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("你好,我是#b比克·爱德华#k王子的助理，你可以在我这里看到所有的现金点发型哦！\r\n#b#L0#查看所有现金点发型#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [

				40250,36930,40020,40060,33550,
				42060,33250,35650,36490,33320,
				36700,33240,35200,33430,33970,
				35490,35130,35130,30780,33000

				];
            } else {
                hair_Colo_new = [

				38290,38580,38940,37030,38760, 
				38790,38930,41670,42070,41340,
				37460,37930,41580,41460,34210,
				41080,41160,38020,41540,34240
				];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("请慢慢选择吧~\r\n当前性别总发型数量:"+hair_Colo_new.length, hair_Colo_new, 5150052);
        }
    } else if (status == 2) {
        if (beauty == 1) {
                cm.sendOk("看好了吗！那就去找#b比克·爱德华#k王子进行美发吧！");
        }
        cm.dispose();
    }
}
