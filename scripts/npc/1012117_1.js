/* ==================
 脚本类型: NPC	    
 脚本版权：枫之谷团队
 联系扣扣：297870163    609654666
 =====================
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
	cm.sendSimple("嗨，我是爱德华如果你有 #b#t5150040##k, 我就可以施展我的技术为了打造属于您的发型。 \r\n#L0#使用: #i5150040##t5150040#随机换理发#l\r\n\r\n#b");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [35280,36490,35220,36790,36740,36810,35050,36890,36910,33000,35000,35010,35020,35030,35040,35050,35060,35070,35080,35090,35100,35110,35120,35130,35150,35160,35170,35180,35190,35210,35230,35240,35250,35260,35270,35290,35300,35330,35340,35350,35360,35430,35440,35460,35470,35510,35550,35560,35600,35630,35640,35650,35660,35680,35690,35710,35720,35750,35760,35770,35780,36690,36710,36720,36730,36740,36750,36760,36770,36780,36790,36800,36810,36820,36830,36840,36850,36860,36880,36890,36900,36910,36920,36930,36940,36950,36980,36990,33810,33980,33670,33580,33320,36000,36010,36020,36030,36040,36050,36070,36080,36090,36110,36120,36130,36140,36150,36170,36180,36190,36210,36220,36230,36240,36280,36300,36310,36330,36440,36450,36470,36510,36520,36560,36580,36590,36680,36700,33150];
	    } else {
		hair_Colo_new = [31560,31230,36980,34450,34970,34890,34860,34810,34770,34750,34670,34600,33140,34160,34300,34310,34260,34240,34210,38290,38160,38100,38020,38010,38120,34060,34870,34800,34760,34330,34840,34850,34830,34110,34510,34250,34270,38900,38910,38930,38940,38890,38880,38860,38850,38840,38810,38800,38700,38710,38730,38740,38390,38760,38770,38790,38600,38610,38620,38630,38640,38650,38660,38670,38680,38690,38500,38520,38530,38540,38560,38570,38580,38400,38410,38420,38430,38450,38460,38470,38480,38490,38300,38320,38330,38340,38350,38360,38370,38380,38220,38240,38250,38260,38270,38280,38110,38130,38150,38000,38030,38040,38050,38060,38070,38080,38090,37900,37910,37920,37930];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("确定要使用 #b#t5150040##k 随机剪发了？？");
		}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
		cm.sendOk("对你的新发型满意吗?");
	    } else {
		cm.sendOk("貌似没有#b#t5150040##k。");
	    }
	} 
	cm.safeDispose();
    }
	
}
