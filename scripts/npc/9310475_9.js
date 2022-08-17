/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/


var status = 0;
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("淘居", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#")
    );

var Care = [75, 75, 76, 79, 80, 81, 82];
var Push;
var U;
var txt;
var Care_M = Array(
Array(1004801, 28888),
Array(1004802, 28888),
Array(1004800, 28888),
Array(1003847, 28888),
Array(1003860, 28888),
Array(1004528, 28888),
Array(1000088, 28888),
Array(1001111, 28888),
Array(1004176, 28888),
Array(1004789, 28888),
Array(1004790, 28888),
Array(1004706, 28888),
Array(1004708, 28888),
Array(1004709, 28888),
Array(1004739, 28888),
Array(1004712, 28888),
Array(1004757, 28888),
Array(1004760, 28888),
Array(1004787, 28888),
Array(1004788, 28888),
Array(1004640, 28888),
Array(1004655, 28888),
Array(1004656, 28888),
Array(1004657, 28888),
Array(1004658, 28888),
Array(1004659, 28888),
Array(1004689, 28888),
Array(1004690, 28888),
Array(1004691, 28888),
Array(1004610, 28888),
Array(1004603, 28888),
Array(1004557, 28888),
Array(1004579, 28888),
Array(1004461, 28888),
Array(1004462, 28888),
Array(1004450, 28888),
Array(1004386, 28888),
Array(1004403, 28888),
Array(1004409, 28888),
Array(1004298, 28888),
Array(1004299, 28888),
Array(1004250, 28888),
Array(1004180, 28888),
Array(1004181, 28888),
Array(1004190, 28888),
Array(1004192, 28888),
Array(1004337, 28888),
Array(1004276, 28888),
Array(1003096, 28888),
Array(1004506, 28888),
Array(1004453, 28888),
Array(1004027, 28888),
Array(1004581, 28888),
Array(1004438, 28888),
Array(1004463, 28888),
Array(1004125, 28888),
Array(1004541, 28888),
Array(1004488, 28888),
Array(1004282, 28888),
Array(1003952, 28888),
Array(1003131, 28888),
Array(1004094, 28888),
Array(1004281, 28888),
Array(1004205, 28888),
Array(1004204, 28888),
Array(1004296, 28888),
Array(1004469, 28888),
Array(1003968, 28888),
Array(1004717, 28888),
Array(1004112, 28888),
Array(1004211, 28888),
Array(1003859, 28888),
Array(1004137, 28888),
Array(1003831, 28888),
Array(1003955, 28888),
Array(1004029, 28888),
Array(1003204, 28888),
Array(1004110, 28888),
Array(1001083, 28888),
Array(1004200, 28888),
Array(1004124, 28888),
Array(1003953, 28888),
Array(1001076, 28888),
Array(1000050, 28888),
Array(1004126, 28888),
Array(1002846, 28888),
Array(1004158, 28888),
Array(1004114, 28888),
Array(1004157, 28888),
Array(1004156, 28888),
Array(1004025, 28888),
Array(1002888, 28888),
Array(1002890, 28888),
Array(1003051, 28888),
Array(1003207, 28888),
Array(1002995, 28888),
Array(1003012, 28888),
Array(1002839, 28888),
Array(1003141, 28888),
Array(1003269, 28888),
Array(1003268, 28888),
Array(1003519, 28888),
Array(1003520, 28888),
Array(1002524, 28888),
Array(1003220, 28888),
Array(1003226, 28888),
Array(1003232, 28888),
Array(1001075, 28888),
Array(1003149, 28888),
Array(1003505, 28888),
Array(1003504, 28888),
Array(1003964, 28888),
Array(1003920, 28888),
Array(1003918, 28888),
Array(1004193, 28888),
Array(1004191, 28888),
Array(1003861, 28888),
Array(1003865, 28888),
Array(1003919, 28888),
Array(1002566, 28888),
Array(1003581, 28888),
Array(1003276, 28888),
Array(1003271, 28888),
Array(1003900, 28888),
Array(1004040, 28888),
Array(1003910, 28888),
Array(1004636, 28888),
Array(1004601, 28888),
Array(1002355, 28888),
Array(1004328, 28888),
Array(1003596, 28888),
Array(1004473, 28888),
Array(1004467, 28888),
Array(1004285, 28888),
Array(1004284, 28888),
Array(1004283, 28888),
Array(1004197, 28888),
Array(1004038, 28888),
Array(1000077, 28888),
Array(1000076, 28888),
Array(1004055, 28888),
Array(1004268, 28888),
Array(1004329, 28888),
Array(1004072, 28888),
Array(1004478, 28888),
Array(1004480, 28888),
Array(1004044, 28888),
Array(1004642, 28888),
Array(1001108, 28888),
Array(1000087, 28888),
Array(1004203, 28888),
Array(1004332, 28888),
Array(1004455, 28888),
Array(1004500, 28888),
Array(1004499, 28888),
Array(1004486, 28888),
Array(1004501, 28888),
Array(1004508, 28888),
Array(1004568, 28888),
Array(1004544, 28888),
Array(1004545, 28888),
Array(1004546, 28888),
Array(1004547, 28888),
Array(1004548, 28888),
Array(1004512, 28888),
Array(1004511, 28888),
Array(1004510, 28888),
Array(1004513, 28888),
Array(1004453, 28888),
Array(1004112, 28888),
Array(1004139, 28888),
Array(1003530, 28888),
Array(1004442, 28888),
Array(1004043, 28888),
Array(1004041, 28888),
Array(1004042, 28888),
Array(1004471, 28888),
Array(1004472, 28888),
Array(1003082, 28888),
Array(1002878, 28888),
Array(1004209, 28888)
    );
var Care_Y = Array(
Array(1041195, 28888),
Array(1061007, 28888),
Array(1042361, 28888),
Array(1051491, 28888),
Array(1052014, 28888),
Array(1051070, 28888),
Array(1042346, 28888),
Array(5800000, 28888),
Array(5800001, 28888),
Array(5800002, 28888),
Array(1052626, 28888),
Array(1051414, 28888),
Array(1042330, 28888),
Array(1052605, 28888),
Array(1042314, 28888),
Array(1042320, 28888),
Array(1052657, 28888),
Array(1052656, 28888),
Array(1051366, 28888),
Array(1052727, 28888),
Array(1042159, 28888),
Array(1042285, 28888),
Array(1042275, 28888),
Array(1042262, 28888),
Array(1042315, 28888),
Array(1042316, 28888),
Array(1051392, 28888),
Array(1050299, 28888),
Array(1052782, 28888),
Array(1052781, 28888),
Array(1042214, 28888),
Array(1042311, 28888),
Array(1042321, 28888),
Array(1042312, 28888),
Array(1042313, 28888),
Array(1042104, 28888),
Array(1042105, 28888),
Array(1052224, 28888),
Array(1042142, 28888),
Array(1041142, 28888),
Array(1052200, 28888),
Array(1052061, 28888),
Array(1052059, 28888),
Array(1051152, 28888),
Array(1050210, 28888),
Array(1051256, 28888),
Array(1051278, 28888),
Array(1050227, 28888),
Array(1051235, 28888),
Array(1052201, 28888),
Array(1052412, 28888),
Array(1052455, 28888),
Array(1052503, 28888),
Array(1051261, 28888),
Array(1050230, 28888),
Array(1050231, 28888),
Array(1051127, 28888),
Array(1051192, 28888),
Array(1051256, 28888),
Array(1040192, 28888),
Array(1041194, 28888),
Array(1042265, 28888),
Array(1042241, 28888),
Array(1052536, 28888),
Array(1050312, 28888),
Array(1042236, 28888),
Array(1052661, 28888),
Array(1042277, 28888),
Array(1042204, 28888),
Array(1042198, 28888),
Array(1042350, 28888),
Array(1042352, 28888),
Array(1042351, 28888),
Array(1042157, 28888),
Array(1042125, 28888),
Array(1042263, 28888),
Array(1052916, 28888),
Array(1050293, 28888),
Array(1050343, 28888),
Array(1050340, 28888),
Array(1051409, 28888),
Array(1042348, 28888),
Array(1042269, 28888),
Array(1042290, 28888),
Array(1042329, 28888),
Array(1042345, 28888),
Array(1042347, 28888),
Array(1052586, 28888),
Array(1051285, 28888),
Array(1051294, 28888),
Array(1051297, 28888),
Array(1051302, 28888),
Array(1052585, 28888),
Array(1051349, 28888),
Array(1052687, 28888),
Array(1052750, 28888),
Array(1052844, 28888),
Array(1052872, 28888),
Array(1052900, 28888),
Array(1052899, 28888),
Array(1052853, 28888),
Array(1052725, 28888),
Array(1052850, 28888),
Array(1051411, 28888),
Array(1050394, 28888),
Array(1051465, 28888),
Array(1052438, 28888),
Array(1051429, 28888),
Array(1050359, 28888),
Array(1051386, 28888),
Array(1051391, 28888),
Array(1052602, 28888),
Array(1042292, 28888),
Array(1050310, 28888),
Array(1051382, 28888),
Array(1052762, 28888),
Array(1052779, 28888),
Array(1050296, 28888),
Array(1051362, 28888),
Array(1051365, 28888),
Array(1050298, 28888),
Array(1052671, 28888),
Array(1042059, 28888),
Array(1042338, 28888),
Array(1042337, 28888),
Array(1040195, 28888),
Array(1051441, 28888),
Array(1052203, 28888),
Array(1051407, 28888),
Array(1051434, 28888),
Array(1050364, 28888),
Array(1040194, 28888),
Array(1051280, 28888),
Array(1050229, 28888),
Array(1051154, 28888),
Array(1042357, 28888),
Array(1042268, 28888),
Array(1042154, 28888),
Array(1042161, 28888),
Array(1042165, 28888),
Array(1042172, 28888),
Array(1042176, 28888),
Array(1042149, 28888),
Array(1042083, 28888),
Array(1042086, 28888),
Array(1042067, 28888),
Array(1053061, 28888),
Array(1053060, 28888),
Array(1053046, 28888),
Array(1053045, 28888),
Array(1051490, 28888),
Array(1051486, 28888),
Array(1053051, 28888),
Array(1053006, 28888),
Array(1052940, 28888),
Array(1052950, 28888),
Array(1052954, 28888),
Array(1052976, 28888),
Array(1052975, 28888),
Array(1052892, 28888),
Array(1052917, 28888),
Array(1052921, 28888),
Array(1052922, 28888),
Array(1052923, 28888),
Array(1052925, 28888),
Array(1052843, 28888),
Array(1052842, 28888),
Array(1052845, 28888),
Array(1052850, 28888),
Array(1052660, 28888),
Array(1052593, 28888),
Array(1052418, 28888),
Array(1052338, 28888),
Array(1052291, 28888),
Array(1052085, 28888),
Array(1052086, 28888),
Array(1050387, 28888),
Array(1051457, 28888),
Array(1051483, 28888),
Array(1051453, 28888),
Array(1050414, 28888),
Array(1050372, 28888),
Array(1040194, 28888),
Array(1041196, 28888)
    );
var Care_K = Array(
Array(1062226, 28888),
Array(1062235, 28888),
Array(1062236, 28888),
Array(1062211, 28888),
Array(1062212, 28888),
Array(1062213, 28888),
Array(1062214, 28888),
Array(1062216, 28888),
Array(1062218, 28888),
Array(1062219, 28888),
Array(1062220, 28888),
Array(1062221, 28888),
Array(1062222, 28888),
Array(1062223, 28888),
Array(1062224, 28888),
Array(1062225, 28888),
Array(1062229, 28888),
Array(1062231, 28888),
Array(1062233, 28888),
Array(1062171, 28888),
Array(1062172, 28888),
Array(1062173, 28888),
Array(1062174, 28888),
Array(1062175, 28888),
Array(1062209, 28888),
Array(1062179, 28888),
Array(1062183, 28888),
Array(1062189, 28888),
Array(1062203, 28888),
Array(1062204, 28888),
Array(1062207, 28888),
Array(1062143, 28888),
Array(1062156, 28888),
Array(1062157, 28888),
Array(1062159, 28888),
Array(1062093, 28888),
Array(1062114, 28888),
Array(1061211, 28888),
Array(1061212, 28888),
Array(1060189, 28888),
Array(1061213, 28888),
Array(1061203, 28888),
Array(1061204, 28888),
Array(1061205, 28888),
Array(1061207, 28888),
Array(1061148, 28888),
Array(1061170, 28888),
Array(1060180, 28888),
Array(1060181, 28888),
Array(1060179, 28888),
Array(1060187, 28888),
Array(1060188, 28888),
Array(1061001, 28888),
Array(1061007, 28888)
    );
var Care_S = Array(
Array(1082592, 28888),
Array(1082555, 28888),
Array(1082692, 28888),
Array(1082571, 28888),
Array(1082504, 28888),
Array(1082685, 28888),
Array(1082672, 28888),
Array(1082618, 28888),
Array(1082620, 28888),
Array(1082631, 28888),
Array(1082565, 28888),
Array(1082588, 28888),
Array(1082520, 28888),
Array(1082527, 28888),
Array(1082533, 28888),
Array(1082548, 28888),
Array(1082495, 28888),
Array(1082502, 28888),
Array(1082505, 28888),
Array(1082692, 28888),
Array(1082224, 28888),
Array(1082225, 28888),
Array(1080008, 28888),
Array(1081014, 28888),
Array(1081015, 28888)
    );
var Care_X = Array(
Array(1072199, 28888),
Array(1071077, 28888),
Array(1072944, 28888),
Array(1073150, 28888),
Array(1073145, 28888),
Array(1073129, 28888),
Array(1073127, 28888),
Array(1073109, 28888),
Array(1073106, 28888),
Array(1073098, 28888),
Array(1072857, 28888),
Array(1073079, 28888),
Array(1073075, 28888),
Array(1073062, 28888),
Array(1071014, 28888),
Array(1073059, 28888),
Array(1073058, 28888),
Array(1071086, 28888),
Array(1073076, 28888),
Array(1073025, 28888),
Array(1073037, 28888),
Array(1073046, 28888),
Array(1073047, 28888),
Array(1072917, 28888),
Array(1072918, 28888),
Array(1072919, 28888),
Array(1072924, 28888),
Array(1072926, 28888),
Array(1072941, 28888),
Array(1072951, 28888),
Array(1072866, 28888),
Array(1072867, 28888),
Array(1072841, 28888),
Array(1072842, 28888),
Array(1072779, 28888),
Array(1072808, 28888),
Array(1072756, 28888),
Array(1072426, 28888),
Array(1072337, 28888),
Array(1072324, 28888),
Array(1072278, 28888),
Array(1071079, 28888),
Array(1071081, 28888),
Array(1071085, 28888),
Array(1070072, 28888),
Array(1071089, 28888),
Array(1071090, 28888),
Array(1071096, 28888),
Array(1070063, 28888),
Array(1070065, 28888)
    );
var Care_SS = Array(
Array(1040001, 28888),
Array(1060001, 28888),
Array(1072010, 28888),
Array(1102671, 28888),
Array(1052709, 28888),
Array(1702490, 28888),
Array(1004095, 28888),
Array(1072911, 28888),
Array(1050319, 28888),
Array(1051390, 28888),
Array(1001097, 28888),
Array(1000074, 28888),
Array(1070059, 28888),
Array(1071076, 28888),
Array(1052986, 28888),
Array(1004595, 28888),
Array(1702349, 28888),
Array(1003458, 28888),
Array(1052774, 28888),
Array(1004202, 28888),
Array(1072945, 28888),
Array(1052773, 28888),
Array(1004201, 28888),
Array(1072944, 28888),
Array(1102690, 28888),
Array(1052875, 28888),
Array(1004162, 28888),
Array(1072930, 28888),
Array(1102673, 28888),
Array(1012462, 28888),
Array(1052726, 28888),
Array(1004113, 28888),
Array(1072920, 28888),
Array(1082493, 28888),
Array(1052550, 28888),
Array(1003776, 28888),
Array(1052948, 28888),
Array(1004540, 28888),
Array(1702594, 28888),
Array(1053041, 28888),
Array(1702684, 28888),
Array(1004758, 28888),
Array(1053042, 28888),
Array(1702685, 28888),
Array(1004759, 28888),
Array(1102766, 28888),
Array(1052852, 28888),
Array(1004336, 28888),
Array(1102926, 28888),
Array(1053040, 28888),
Array(1073144, 28888),
Array(1082511, 28888),
Array(1052594, 28888),
Array(1003802, 28888),
Array(1072791, 28888),
Array(1003803, 28888),
Array(1082519, 28888),
Array(1052595, 28888),
Array(1072803, 28888),
Array(1003044, 28888),
Array(1072417, 28888),
Array(1052218, 28888),
Array(1012051, 28888),
Array(1082657, 28888),
Array(1052942, 28888),
Array(1004530, 28888),
Array(1102615, 28888),
Array(1052655, 28888),
Array(1003950, 28888),
Array(1072856, 28888),
Array(1051163, 28888),
Array(1001048, 28888),
Array(1071021, 28888),
Array(1052661, 28888),
Array(1003965, 28888),
Array(1004964, 28888),
Array(1053183, 28888),
Array(1073223, 28888),
Array(1053184, 28888),
Array(1073222, 28888),
Array(1052873, 28888),
Array(1004394, 28888),
Array(1102781, 28888),
Array(1052874, 28888),
Array(1102785, 28888),
Array(1004396, 28888),
Array(1052876, 28888),
Array(1102780, 28888),
Array(1004393, 28888),
Array(1073027, 28888)
    );
var Care_Ql = Array(
Array(1051385, 28888),
Array(1050314, 28888),
Array(1051255, 28888),
Array(1050209, 28888),
Array(1051408, 28888),
Array(1050339, 28888),
Array(1051431, 28888),
Array(1050361, 28888),
Array(1051350, 28888),
Array(1050284, 28888),
Array(1051493, 28888),
Array(1050425, 28888),
Array(1051405, 28888),
Array(1050335, 28888),
Array(1051459, 28888),
Array(1050389, 28888),
Array(1051410, 28888),
Array(1050341, 28888),
Array(1051406, 28888),
Array(1050337, 28888)
    );
var Care_P = Array(
Array(1102786, 28888),
Array(1102572, 28888),
Array(1102624, 28888),
Array(1102939, 28888),
Array(1102938, 28888),
Array(1102937, 28888),
Array(1102902, 28888),
Array(1102901, 28888),
Array(1102900, 28888),
Array(1102920, 28888),
Array(1102910, 28888),
Array(1102908, 28888),
Array(1102903, 28888),
Array(1102876, 28888),
Array(1102874, 28888),
Array(1102831, 28888),
Array(1102836, 28888),
Array(1102841, 28888),
Array(1102385, 28888),
Array(1102386, 28888),
Array(1102629, 28888),
Array(1102487, 28888),
Array(1102630, 28888),
Array(1102511, 28888),
Array(1102844, 28888),
Array(1102854, 28888),
Array(1102855, 28888),
Array(1102858, 28888),
Array(1102859, 28888),
Array(1102860, 28888),
Array(1102861, 28888),
Array(1102865, 28888),
Array(1102869, 28888),
Array(1102870, 28888),
Array(1102779, 28888),
Array(1102807, 28888),
Array(1102809, 28888),
Array(1102811, 28888),
Array(1102812, 28888),
Array(1102813, 28888),
Array(1102815, 28888),
Array(1102819, 28888),
Array(1102820, 28888),
Array(1102822, 28888),
Array(1102273, 28888),
Array(1102907, 28888),
Array(1102589, 28888),
Array(1102588, 28888),
Array(1102643, 28888),
Array(1102644, 28888),
Array(1102548, 28888),
Array(1102547, 28888),
Array(1102546, 28888),
Array(1102700, 28888),
Array(1102668, 28888),
Array(1102699, 28888),
Array(1102698, 28888),
Array(1102755, 28888),
Array(1102757, 28888),
Array(1102759, 28888),
Array(1102766, 28888),
Array(1102778, 28888),
Array(1102789, 28888),
Array(1102706, 28888),
Array(1102749, 28888),
Array(1102748, 28888),
Array(1102669, 28888),
Array(1102675, 28888),
Array(1102676, 28888),
Array(1102690, 28888),
Array(1102695, 28888),
Array(1102631, 28888),
Array(1102659, 28888),
Array(1102564, 28888),
Array(1102577, 28888),
Array(1102582, 28888),
Array(1102491, 28888),
Array(1102389, 28888),
Array(1102215, 28888),
Array(1102224, 28888),
Array(1102229, 28888),
Array(1102232, 28888),
Array(1102143, 28888),
Array(1102150, 28888),
Array(1102632, 28888)
    )
var Care_W = Array(
Array(1702529, 99999),
Array(1702680, 99999),
Array(1702718, 99999),
Array(1702565, 99999),
Array(1702712, 28888),
Array(1702581, 28888),
Array(1702577, 28888),
Array(1702504, 28888),
Array(1702699, 28888),
Array(1702698, 28888),
Array(1702697, 28888),
Array(1702605, 28888),
Array(1702604, 28888),
Array(1702679, 28888),
Array(1702678, 28888),
Array(1702677, 28888),
Array(1702676, 28888),
Array(1702668, 28888),
Array(1702667, 28888),
Array(1702666, 28888),
Array(1702665, 28888),
Array(1702659, 28888),
Array(1702658, 28888),
Array(1702657, 28888),
Array(1702656, 28888),
Array(1702655, 28888),
Array(1702637, 28888),
Array(1702640, 28888),
Array(1702660, 28888),
Array(1702669, 28888),
Array(1702675, 28888),
Array(1702681, 28888),
Array(1702682, 28888),
Array(1702686, 28888),
Array(1702692, 28888),
Array(1702693, 28888),
Array(1702607, 28888),
Array(1702611, 28888),
Array(1702612, 28888),
Array(1702512, 28888),
Array(1702614, 28888),
Array(1702616, 28888),
Array(1702617, 28888),
Array(1702625, 28888),
Array(1702626, 28888),
Array(1702628, 28888),
Array(1702629, 28888),
Array(1702630, 28888),
Array(1702631, 28888),
Array(1702634, 28888),
Array(1702633, 28888),
Array(1702636, 28888),
Array(1702304, 28888),
Array(1702566, 28888),
Array(1702567, 28888),
Array(1702570, 28888),
Array(1702571, 28888),
Array(1702576, 28888),
Array(1702583, 28888),
Array(1702584, 28888),
Array(1702586, 28888),
Array(1702588, 28888),
Array(1702589, 28888),
Array(1702591, 28888),
Array(1702593, 28888),
Array(1702594, 28888),
Array(1702595, 28888),
Array(1702597, 28888),
Array(1702598, 28888),
Array(1702520, 28888),
Array(1702523, 28888),
Array(1702527, 28888),
Array(1702530, 28888),
Array(1702533, 28888),
Array(1702534, 28888),
Array(1702538, 28888),
Array(1702540, 28888),
Array(1702541, 28888),
Array(1702548, 28888),
Array(1702549, 28888),
Array(1702550, 28888),
Array(1702551, 28888),
Array(1702553, 28888),
Array(1702554, 28888),
Array(1702559, 28888),
Array(1702560, 28888),
Array(1702694, 28888),
Array(1702444, 28888),
Array(1702453, 28888),
Array(1702459, 28888),
Array(1702457, 28888),
Array(1702477, 28888),
Array(1702480, 28888),
Array(1702486, 28888),
Array(1702488, 28888),
Array(1702489, 28888),
Array(1702491, 28888),
Array(1702501, 28888),
Array(1702508, 28888),
Array(1702377, 28888),
Array(1702365, 28888),
Array(1702451, 28888),
Array(1702455, 28888),
Array(1702459, 28888),
Array(1702469, 28888),
Array(1702401, 28888),
Array(1702710, 28888),
Array(1702357, 28888),
Array(1702367, 28888),
Array(1702371, 28888),
Array(1702372, 28888),
Array(1702400, 28888),
Array(1702334, 28888),
Array(1702341, 28888),
Array(1702295, 28888),
Array(1702758, 28888),
Array(1702556, 28888),
Array(1702627, 28888),
Array(1702764, 28888),
Array(1702684, 28888),
Array(1702685, 28888)
    );
var Care_J = Array(
Array(1112135, 50000),
Array(1112238, 50000),
Array(1112144, 50000),
Array(1112145, 50000),
Array(1112154, 50000),
Array(1112156, 50000),
Array(1112161, 50000),
Array(1112170, 50000),
Array(1112176, 50000),
Array(1112191, 50000),
Array(1112248, 50000),
Array(1112249, 50000),
Array(1112250, 50000),
Array(1112272, 50000),
Array(1112277, 50000),
Array(1112292, 50000),
Array(1115004, 50000),
Array(1112163, 50000),
Array(1112275, 50000),
Array(1115116, 50000),
Array(1115027, 50000),
Array(1115034, 50000),
Array(1115123, 50000),
Array(1115028, 50000),
Array(1112141, 50000),
Array(1112252, 50000),
Array(1112953, 50000),
Array(1112954, 50000),
Array(1112290, 120000),
Array(1115016, 120000),
Array(1115021, 120000),
Array(1115019, 120000),
Array(1115020, 120000),
//Array(1112115, 120000),
Array(1112916, 120000),
Array(1112162, 120000),
Array(1112274, 120000),
Array(1112179, 120000),
Array(1112291, 120000),
Array(1112947, 120000),
Array(1112959, 120000),
Array(1112196, 120000),
Array(1112197, 120000),
Array(1112198, 120000),
Array(1115010, 120000),
Array(1115011, 120000),
Array(1115112, 120000),
Array(1115023, 120000),
Array(1115111, 120000),
Array(1115022, 120000),
Array(1115024, 120000),
Array(1115113, 120000),
Array(1115115, 120000),
Array(1115026, 120000),
Array(1115119, 120000),
Array(1115120, 120000),
Array(1115030, 120000),
Array(1115031, 120000),
Array(1115029, 120000),
Array(1115118, 120000),
Array(1115032, 120000),
Array(1115121, 120000),
Array(1112964, 120000),
Array(1115117, 120000),
Array(1112965, 120000),
Array(1115038, 120000),
Array(1115127, 120000),
Array(1115039, 120000),
Array(1115128, 120000),
Array(1115033, 120000),
Array(1115035, 120000),
Array(1115122, 120000),
Array(1115124, 120000),
//Array(1112966, 120000),
Array(1115129, 120000),
Array(1115040, 120000),
Array(1112968, 120000),
Array(1113027, 120000),
Array(1112916, 120000)
    );
var Care_SP = Array(
Array(1032145, 28888),
Array(1032255, 28888),
Array(1032233, 28888),
Array(1022044, 28888),
Array(1022177, 28888),
Array(1022230, 28888),
Array(1022229, 28888),
Array(1012134, 28888),
Array(1012131, 28888),
Array(1012208, 28888),
Array(1012179, 28888),
Array(1012412, 28888),
Array(1012384, 28888),
Array(1012082, 28888),
Array(1012374, 28888),
Array(1012489, 28888),
Array(1012472, 28888),
Array(1012468, 28888),
Array(1012527, 28888),
Array(1012525, 28888),
Array(1012521, 28888),
Array(1012522, 28888),
Array(1012523, 28888),
Array(1012003, 28888),
Array(1012511, 28888),
Array(1012517, 28888),
Array(1012518, 28888),
Array(1012503, 28888),
Array(1012502, 28888),
Array(1012501, 28888),
Array(1012572, 28888),
Array(1022109, 28888),
Array(1012564, 28888),
Array(5010110, 28888),
Array(1012573, 28888),
Array(1022244, 28888),
Array(1022062, 28888),
Array(1022061, 28888),
Array(1022259, 28888),
Array(1022263, 28888),
Array(1022026, 28888),
Array(1022025, 28888),
Array(1022027, 28888),
Array(1022024, 28888),
Array(1022023, 28888),
Array(1022176, 28888),
Array(1012475, 28888),
Array(1012461, 28888),
Array(1012025, 28888),
Array(1012462, 28888),
Array(1003760, 28888),
Array(1032234, 28888),
Array(1032034, 28888),
Array(1012569, 28888),
Array(1012553, 28888)
    );
function start() {
    status = -1;
    action(1, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose()
    } else {
        if (mode == 1) status++;
        else {
            cm.dispose();
            return;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            txt = "\t\t　#b " + Icon[73][1] + " #r#e  时装中心  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";

            txt += "#b#L0#" + Icon[15][1] + " 帽子#l　#L1#" + Icon[15][1] + " 衣服#l　#L2#" + Icon[15][1] + " 裤裙#l　#L3#" + Icon[15][1] + " 鞋子#l\r\n\r\n";
            txt += "#b#L4#" + Icon[15][1] + " 武器#l　#L5#" + Icon[15][1] + " 戒指#l　#L6#" + Icon[15][1] + " 披风#l　#L7#" + Icon[15][1] + " 手套#l\r\n\r\n";
            txt += "　 #r#L8#" + Icon[11][1] + " 情侣搭配#l　#r#L10#"  + " 时装饰品#l  #L9# 时装搭配 " + Icon[11][1] + "#l\r\n\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1];
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            txt = "\r\n#d ┏━━━━━━━━━━#b售货━时装#d━━━━━━━━━┓#k\r\n\r\n";
            txt += "\t\t\t\t" + Icon[83][1] + "\r\n\r\n";
            txt += "　　" + Icon[11][1] + "#d 当前拥有的点　卷：#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n";
            txt += "　　" + Icon[11][1] + "#d 当前拥有的抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n\r\n";
            txt += "　　" + Icon[11][1] + "#r 管理员提示：请选择你需购买的道具#k\r\n\r\n";
            txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
            switch (selection) {
                case 0:
                    Push = 0;
                    for (var i = 0; i < Care_M.length; i++) {
                        txt += "#L" + i + "##i" + Care_M[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 1:
                    Push = 1;
                    for (var i = 0; i < Care_Y.length; i++) {
                        txt += "#L" + i + "##i" + Care_Y[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 2:
                    Push = 2;
                    for (var i = 0; i < Care_K.length; i++) {
                        txt += "#L" + i + "##i" + Care_K[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 3:
                    Push = 3;
                    for (var i = 0; i < Care_X.length; i++) {
                        txt += "#L" + i + "##i" + Care_X[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 4:
                    Push = 4;
                    for (var i = 0; i < Care_W.length; i++) {
                        txt += "#L" + i + "##i" + Care_W[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 5:
                    Push = 5;
                    for (var i = 0; i < Care_J.length; i++) {
                        txt += "#L" + i + "##i" + Care_J[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 6:
                    Push = 6;
                    for (var i = 0; i < Care_P.length; i++) {
                        txt += "#L" + i + "##i" + Care_P[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 7:
                    Push = 7;
                    for (var i = 0; i < Care_S.length; i++) {
                        txt += "#L" + i + "##i" + Care_S[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 8:
                    Push = 8;
                    for (var i = 0; i < Care_Ql.length; i++) {
                        txt += "#L" + i + "##i" + Care_Ql[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 9:
                    Push = 9;
                    for (var i = 0; i < Care_SS.length; i++) {
                        txt += "#L" + i + "##i" + Care_SS[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
                case 10:
                    Push = 10;
                    for (var i = 0; i < Care_SP.length; i++) {
                        txt += "#L" + i + "##i" + Care_SP[i] + "#  ";
                        if (i != 0 && (i + 1) % 5 == 0) {
                            txt += "\r\n";
                        }
                    }
                    break;
            }
            cm.sendSimpleS(txt, 2);
        } else if (status == 2) {
            U = selection;
            switch (Push) {
                case 0:
                    cm.sendNext("#b你想花 [#r" + Care_M[selection][1] + "#b ] 来购买 #i" + Care_M[selection][0] + "# 吗?#k");
                    break;

                case 1:
                    cm.sendNext("#b你想花 [#r" + Care_Y[selection][1] + "#b ] 来购买 #i" + Care_Y[selection][0] + "# 吗?#k");
                    break;

                case 2:
                    cm.sendNext("#b你想花 [#r" + Care_K[selection][1] + "#b ] 来购买 #i" + Care_K[selection][0] + "# 吗?#k");
                    break;

                case 3:
                    cm.sendNext("#b你想花 [#r" + Care_X[selection][1] + "#b ] 来购买 #i" + Care_X[selection][0] + "# 吗?#k");
                    break;

                case 4:
                    cm.sendNext("#b你想花 [#r" + Care_W[selection][1] + "#b ] 来购买 #i" + Care_W[selection][0] + "# 吗?#k");
                    break;

                case 5:
                    cm.sendNext("#b你想花 [#r" + Care_J[selection][1] + "#b ] 来购买 #i" + Care_J[selection][0] + "# 吗?#k");
                    break;

                case 6:
                    cm.sendNext("#b你想花 [#r" + Care_P[selection][1] + "#b ] 来购买 #i" + Care_P[selection][0] + "# 吗?#k");
                    break;

                case 7:
                    cm.sendNext("#b你想花 [#r" + Care_S[selection][1] + "#b ] 来购买 #i" + Care_S[selection][0] + "# 吗?#k");
                    break;

                case 8:
                    cm.sendNext("#b你想花 [#r" + Care_Ql[selection][1] + "#b ] 来购买 #i" + Care_Ql[selection][0] + "# 吗?#k");
                    break;

                case 9:
                    cm.sendNext("#b你想花 [#r" + Care_SS[selection][1] + "#b ] 来购买 #i" + Care_SS[selection][0] + "# 吗?#k");
                    break;
	            case 10:
                    cm.sendNext("#b你想花 [#r" + Care_SP[selection][1] + "#b ] 来购买 #i" + Care_SP[selection][0] + "# 吗?#k");
                    break;
            }
        } else if (status == 3) {
            switch (Push) {
                case 0:
                    if (cm.getPlayer().getCSPoints(1) < Care_M[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_M[U][0], 1);
                    cm.gainNX(1, -Care_M[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 1:
                    if (cm.getPlayer().getCSPoints(1) < Care_Y[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_Y[U][0], 1);
                    cm.gainNX(1, -Care_Y[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 2:
                    if (cm.getPlayer().getCSPoints(1) < Care_K[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_K[U][0], 1);
                    cm.gainNX(1, -Care_K[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 3:
                    if (cm.getPlayer().getCSPoints(1) < Care_X[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_X[U][0], 1);
                    cm.gainNX(1, -Care_X[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;
                case 4:
                    if (cm.getPlayer().getCSPoints(1) < Care_W[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_W[U][0], 1);
                    cm.gainNX(1, -Care_W[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 5:
                    if (cm.getPlayer().getCSPoints(1) < Care_J[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_J[U][0], 1);
                    cm.gainNX(1, -Care_J[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 6:
                    if (cm.getPlayer().getCSPoints(1) < Care_P[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_P[U][0], 1);
                    cm.gainNX(1, -Care_P[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 7:
                    if (cm.getPlayer().getCSPoints(1) < Care_S[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_S[U][0], 1);
                    cm.gainNX(1, -Care_S[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 8:
                    if (cm.getPlayer().getCSPoints(1) < Care_Ql[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_Ql[U][0], 1);
                    cm.gainNX(1, -Care_Ql[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                case 9:
                    if (cm.getPlayer().getCSPoints(1) < Care_SS[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_SS[U][0], 1);
                    cm.gainNX(1, -Care_SS[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;

                 case 10:
                    if (cm.getPlayer().getCSPoints(1) < Care_SP[U][1]) {
                        cm.playerMessage(1, "抱歉 点卷没有那么多");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(Care_SP[U][0], 1);
                    cm.gainNX(1, -Care_SP[U][1]);
                    cm.playerMessage(1, "购买成功");
                    break;
            }
            cm.dispose();
        }
    }
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}

