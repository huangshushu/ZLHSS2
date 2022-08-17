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
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#")
    );

var Care = [75, 75, 76, 79, 80, 81, 82];
var Push;
var U;
var txt;
var Care_M = Array(
Array(1003847, 88888),
Array(1003860, 88888),
Array(1004528, 88888),
Array(1000088, 88888),
Array(1001111, 88888),
Array(1004176, 88888),
Array(1004789, 88888),
Array(1004790, 88888),
Array(1004706, 88888),
Array(1004708, 88888),
Array(1004709, 88888),
Array(1004739, 88888),
Array(1004712, 88888),
Array(1004757, 88888),
Array(1004760, 88888),
Array(1004787, 88888),
Array(1004788, 88888),
Array(1004640, 88888),
Array(1004655, 88888),
Array(1004656, 88888),
Array(1004657, 88888),
Array(1004658, 88888),
Array(1004659, 88888),
Array(1004689, 88888),
Array(1004690, 88888),
Array(1004691, 88888),
Array(1004610, 88888),
Array(1004603, 88888),
Array(1004557, 88888),
Array(1004579, 88888),
Array(1004461, 88888),
Array(1004462, 88888),
Array(1004450, 88888),
Array(1004386, 88888),
Array(1004403, 88888),
Array(1004409, 88888),
Array(1004298, 88888),
Array(1004299, 88888),
Array(1004250, 88888),
Array(1004181, 88888),
Array(1004337, 88888),
Array(1004506, 88888),
Array(1004453, 88888),
Array(1004027, 88888),
Array(1004581, 88888),
Array(1004438, 88888),
Array(1004463, 88888),
Array(1004125, 88888),
Array(1004541, 88888),
Array(1004488, 88888),
Array(1004282, 88888),
Array(1003952, 88888),
Array(1003131, 88888),
Array(1004094, 88888),
Array(1004281, 88888),
Array(1004205, 88888),
Array(1004204, 88888),
Array(1004296, 88888),
Array(1004469, 88888),
Array(1003968, 88888),
Array(1004717, 88888),
Array(1004112, 88888),
Array(1004211, 88888),
Array(1003859, 88888),
Array(1004137, 88888),
Array(1003831, 88888),
Array(1003955, 88888),
Array(1004029, 88888),
Array(1003204, 88888),
Array(1004110, 88888),
Array(1001083, 88888),
Array(1004200, 88888),
Array(1004124, 88888),
Array(1003953, 88888),
Array(1001076, 88888),
Array(1000050, 88888),
Array(1002846, 88888),
Array(1004158, 88888),
Array(1004114, 88888),
Array(1004157, 88888),
Array(1004156, 88888),
Array(1004025, 88888),
Array(1002888, 88888),
Array(1002890, 88888),
Array(1003051, 88888),
Array(1003207, 88888),
Array(1002995, 88888),
Array(1003012, 88888),
Array(1002839, 88888),
Array(1003519, 88888),
Array(1003520, 88888),
Array(1002524, 88888),
Array(1003220, 88888),
Array(1003226, 88888),
Array(1003232, 88888),
Array(1001075, 88888),
Array(1003149, 88888),
Array(1003505, 88888),
Array(1003504, 88888),
Array(1003964, 88888),
Array(1003920, 88888),
Array(1003918, 88888),
Array(1004193, 88888),
Array(1004191, 88888),
Array(1003861, 88888),
Array(1003865, 88888),
Array(1002566, 88888),
Array(1003581, 88888),
Array(1003276, 88888),
Array(1003271, 88888),
Array(1003900, 88888),
Array(1004040, 88888),
Array(1003910, 88888),
Array(1004636, 88888),
Array(1004601, 88888),
Array(1002355, 88888),
Array(1004328, 88888),
Array(1003596, 88888),
Array(1004473, 88888),
Array(1004467, 88888),
Array(1004285, 88888),
Array(1004284, 88888),
Array(1004283, 88888),
Array(1004197, 88888),
Array(1004038, 88888),
Array(1000077, 88888),
Array(1000076, 88888),
Array(1004055, 88888),
Array(1004268, 88888),
Array(1004329, 88888),
Array(1004072, 88888),
Array(1004478, 88888),
Array(1004480, 88888),
Array(1004044, 88888),
Array(1004642, 88888),
Array(1001108, 88888),
Array(1000087, 88888),
Array(1004203, 88888),
Array(1004332, 88888),
Array(1004455, 88888),
Array(1004500, 88888),
Array(1004499, 88888),
Array(1004486, 88888),
Array(1004501, 88888),
Array(1004508, 88888),
Array(1004568, 88888),
Array(1004544, 88888),
Array(1004545, 88888),
Array(1004546, 88888),
Array(1004547, 88888),
Array(1004548, 88888),
Array(1004512, 88888),
Array(1004511, 88888),
Array(1004510, 88888),
Array(1004513, 88888),
Array(1004453, 88888),
Array(1004112, 88888),
Array(1004139, 88888),
Array(1003530, 88888),
Array(1004442, 88888),
Array(1004043, 88888),
Array(1004041, 88888),
Array(1004042, 88888),
Array(1004471, 88888),
Array(1004472, 88888),
Array(1003082, 88888),
Array(1002878, 88888),
Array(1004209, 88888)
    );
var Care_Y = Array(
Array(1041195, 88888),
Array(1061007, 88888),
Array(1042361, 88888),
Array(1051491, 88888),
Array(1052014, 88888),
Array(1051070, 88888),
Array(1042346, 88888),
Array(5800000, 88888),
Array(5800001, 88888),
Array(5800002, 88888),
Array(1052626, 88888),
Array(1051414, 88888),
Array(1042330, 88888),
Array(1052605, 88888),
Array(1042314, 88888),
Array(1042320, 88888),
Array(1052657, 88888),
Array(1052656, 88888),
Array(1051366, 88888),
Array(1052727, 88888),
Array(1042159, 88888),
Array(1042285, 88888),
Array(1042275, 88888),
Array(1042262, 88888),
Array(1042315, 88888),
Array(1042316, 88888),
Array(1051392, 88888),
Array(1050299, 88888),
Array(1052782, 88888),
Array(1052781, 88888),
Array(1042214, 88888),
Array(1042311, 88888),
Array(1042321, 88888),
Array(1042312, 88888),
Array(1042313, 88888),
Array(1042104, 88888),
Array(1042105, 88888),
Array(1052224, 88888),
Array(1042142, 88888),
Array(1041142, 88888),
Array(1052200, 88888),
Array(1052061, 88888),
Array(1052059, 88888),
Array(1051152, 88888),
Array(1050210, 88888),
Array(1051256, 88888),
Array(1051278, 88888),
Array(1050227, 88888),
Array(1051235, 88888),
Array(1052201, 88888),
Array(1052412, 88888),
Array(1052455, 88888),
Array(1052503, 88888),
Array(1051261, 88888),
Array(1050230, 88888),
Array(1050231, 88888),
Array(1051127, 88888),
Array(1051192, 88888),
Array(1051256, 88888),
Array(1040192, 88888),
Array(1041194, 88888),
Array(1042265, 88888),
Array(1042241, 88888),
Array(1052536, 88888),
Array(1050312, 88888),
Array(1042236, 88888),
Array(1052661, 88888),
Array(1042277, 88888),
Array(1042204, 88888),
Array(1042198, 88888),
Array(1042350, 88888),
Array(1042352, 88888),
Array(1042351, 88888),
Array(1042157, 88888),
Array(1042125, 88888),
Array(1042263, 88888),
Array(1052916, 88888),
Array(1050293, 88888),
Array(1050343, 88888),
Array(1050340, 88888),
Array(1051409, 88888),
Array(1042348, 88888),
Array(1042269, 88888),
Array(1042290, 88888),
Array(1042329, 88888),
Array(1042345, 88888),
Array(1042347, 88888),
Array(1052586, 88888),
Array(1051285, 88888),
Array(1051294, 88888),
Array(1051297, 88888),
Array(1051302, 88888),
Array(1052585, 88888),
Array(1051349, 88888),
Array(1052687, 88888),
Array(1052750, 88888),
Array(1052844, 88888),
Array(1052872, 88888),
Array(1052900, 88888),
Array(1052899, 88888),
Array(1052853, 88888),
Array(1052725, 88888),
Array(1052850, 88888),
Array(1051411, 88888),
Array(1050394, 88888),
Array(1051465, 88888),
Array(1052438, 88888),
Array(1051429, 88888),
Array(1050359, 88888),
Array(1051386, 88888),
Array(1051391, 88888),
Array(1052602, 88888),
Array(1042292, 88888),
Array(1050310, 88888),
Array(1051382, 88888),
Array(1052762, 88888),
Array(1052779, 88888),
Array(1050296, 88888),
Array(1051362, 88888),
Array(1051365, 88888),
Array(1050298, 88888),
Array(1052671, 88888),
Array(1042059, 88888),
Array(1042338, 88888),
Array(1042337, 88888),
Array(1040195, 88888),
Array(1051441, 88888),
Array(1052203, 88888),
Array(1051407, 88888),
Array(1051434, 88888),
Array(1050364, 88888),
Array(1040194, 88888),
Array(1051280, 88888),
Array(1050229, 88888),
Array(1051154, 88888),
Array(1042357, 88888),
Array(1042268, 88888),
Array(1042154, 88888),
Array(1042161, 88888),
Array(1042165, 88888),
Array(1042172, 88888),
Array(1042176, 88888),
Array(1042149, 88888),
Array(1042083, 88888),
Array(1042086, 88888),
Array(1042067, 88888),
Array(1053061, 88888),
Array(1053060, 88888),
Array(1053046, 88888),
Array(1053045, 88888),
Array(1051490, 88888),
Array(1051486, 88888),
Array(1053051, 88888),
Array(1053006, 88888),
Array(1052940, 88888),
Array(1052950, 88888),
Array(1052954, 88888),
Array(1052976, 88888),
Array(1052975, 88888),
Array(1052892, 88888),
Array(1052917, 88888),
Array(1052921, 88888),
Array(1052922, 88888),
Array(1052923, 88888),
Array(1052925, 88888),
Array(1052843, 88888),
Array(1052842, 88888),
Array(1052845, 88888),
Array(1052850, 88888),
Array(1052660, 88888),
Array(1052593, 88888),
Array(1052418, 88888),
Array(1052338, 88888),
Array(1052291, 88888),
Array(1052085, 88888),
Array(1052086, 88888),
Array(1050387, 88888),
Array(1051457, 88888),
Array(1051483, 88888),
Array(1051453, 88888),
Array(1050414, 88888),
Array(1050372, 88888)
    );
var Care_K = Array(
Array(1062226, 88888),
Array(1062235, 88888),
Array(1062236, 88888),
Array(1062211, 88888),
Array(1062212, 88888),
Array(1062213, 88888),
Array(1062214, 88888),
Array(1062216, 88888),
Array(1062218, 88888),
Array(1062219, 88888),
Array(1062220, 88888),
Array(1062221, 88888),
Array(1062222, 88888),
Array(1062223, 88888),
Array(1062224, 88888),
Array(1062225, 88888),
Array(1062229, 88888),
Array(1062231, 88888),
Array(1062233, 88888),
Array(1062171, 88888),
Array(1062172, 88888),
Array(1062173, 88888),
Array(1062174, 88888),
Array(1062175, 88888),
Array(1062209, 88888),
Array(1062179, 88888),
Array(1062183, 88888),
Array(1062189, 88888),
Array(1062203, 88888),
Array(1062204, 88888),
Array(1062207, 88888),
Array(1062143, 88888),
Array(1062156, 88888),
Array(1062157, 88888),
Array(1062159, 88888),
Array(1062093, 88888),
Array(1062114, 88888),
Array(1061211, 88888),
Array(1061212, 88888),
Array(1060189, 88888),
Array(1061213, 88888),
Array(1061203, 88888),
Array(1061204, 88888),
Array(1061205, 88888),
Array(1061207, 88888),
Array(1061148, 88888),
Array(1061170, 88888),
Array(1060180, 88888),
Array(1060181, 88888),
Array(1060179, 88888),
Array(1060187, 88888),
Array(1060188, 88888),
Array(1061001, 88888),
Array(1061007, 88888)
    );
var Care_S = Array(
Array(1082592, 88888),
Array(1082555, 88888),
Array(1082692, 88888),
Array(1082571, 88888),
Array(1082504, 88888),
Array(1082685, 88888),
Array(1082672, 88888),
Array(1082618, 88888),
Array(1082620, 88888),
Array(1082631, 88888),
Array(1082565, 88888),
Array(1082588, 88888),
Array(1082520, 88888),
Array(1082527, 88888),
Array(1082533, 88888),
Array(1082548, 88888),
Array(1082495, 88888),
Array(1082502, 88888),
Array(1082505, 88888),
Array(1082431, 88888),
Array(1082224, 88888),
Array(1082225, 88888),
Array(1080008, 88888),
Array(1081014, 88888),
Array(1081015, 88888)
    );
var Care_X = Array(
Array(1072199, 88888),
Array(1071077, 88888),
Array(1072944, 88888),
Array(1073150, 88888),
Array(1073145, 88888),
Array(1073129, 88888),
Array(1073127, 88888),
Array(1073109, 88888),
Array(1073106, 88888),
Array(1073098, 88888),
Array(1072857, 88888),
Array(1073079, 88888),
Array(1073075, 88888),
Array(1073062, 88888),
Array(1071014, 88888),
Array(1073059, 88888),
Array(1073058, 88888),
Array(1071086, 88888),
Array(1073076, 88888),
Array(1073025, 88888),
Array(1073037, 88888),
Array(1073046, 88888),
Array(1073047, 88888),
Array(1072917, 88888),
Array(1072918, 88888),
Array(1072919, 88888),
Array(1072924, 88888),
Array(1072926, 88888),
Array(1072941, 88888),
Array(1072951, 88888),
Array(1072866, 88888),
Array(1072867, 88888),
Array(1072841, 88888),
Array(1072842, 88888),
Array(1072779, 88888),
Array(1072426, 88888),
Array(1072337, 88888),
Array(1072324, 88888),
Array(1072278, 88888),
Array(1071079, 88888),
Array(1071081, 88888),
Array(1071085, 88888),
Array(1070072, 88888),
Array(1071089, 88888),
Array(1071090, 88888),
Array(1071096, 88888),
Array(1070063, 88888),
Array(1070065, 88888)
    );
var Care_SS = Array(
Array(1053099, 88888),
Array(1004853, 88888),
Array(1052709, 88888),
Array(1702490, 88888),
Array(1004095, 88888),
Array(1072911, 88888),
Array(1050319, 88888),
Array(1051390, 88888),
Array(1001097, 88888),
Array(1000074, 88888),
Array(1070059, 88888),
Array(1071076, 88888),
Array(1052986, 88888),
Array(1004595, 88888),
Array(1702349, 88888),
Array(1003458, 88888),
Array(1052774, 88888),
Array(1004202, 88888),
Array(1072945, 88888),
Array(1052773, 88888),
Array(1004201, 88888),
Array(1072944, 88888),
Array(1102690, 88888),
Array(1052875, 88888),
Array(1004162, 88888),
Array(1072930, 88888),
Array(1102673, 88888),
Array(1012462, 88888),
Array(1052726, 88888),
Array(1004113, 88888),
Array(1072920, 88888),
Array(1082493, 88888),
Array(1052550, 88888),
Array(1003776, 88888),
Array(1052948, 88888),
Array(1004540, 88888),
Array(1702594, 88888),
Array(1053041, 88888),
Array(1702684, 88888),
Array(1004758, 88888),
Array(1053042, 88888),
Array(1702685, 88888),
Array(1004759, 88888),
Array(1102766, 88888),
Array(1052852, 88888),
Array(1004336, 88888),
Array(1102926, 88888),
Array(1053040, 88888),
Array(1073144, 88888),
Array(1082511, 88888),
Array(1052594, 88888),
Array(1003802, 88888),
Array(1072791, 88888),
Array(1003803, 88888),
Array(1082519, 88888),
Array(1052595, 88888),
Array(1072803, 88888),
Array(1003044, 88888),
Array(1072417, 88888),
Array(1052218, 88888),
Array(1012051, 88888),
Array(1082657, 88888),
Array(1052942, 88888),
Array(1004530, 88888),
Array(1102615, 88888),
Array(1052655, 88888),
Array(1003950, 88888),
Array(1072856, 88888),
Array(1051163, 88888),
Array(1001048, 88888),
Array(1071021, 88888),
Array(1052661, 88888),
Array(1003965, 88888),
Array(1004964, 88888),
Array(1053183, 88888),
Array(1073223, 88888),
Array(1053184, 88888),
Array(1073222, 88888),
Array(1052873, 88888),
Array(1004394, 88888),
Array(1102781, 88888),
Array(1052874, 88888),
Array(1102785, 88888),
Array(1004396, 88888),
Array(1052876, 88888),
Array(1102780, 88888),
Array(1004393, 88888),
Array(1073027, 88888)
    );
var Care_Ql = Array(
Array(1051385, 88888),
Array(1050314, 88888),
Array(1051255, 88888),
Array(1050209, 88888),
Array(1051408, 88888),
Array(1050339, 88888),
Array(1051431, 88888),
Array(1050361, 88888),
Array(1051350, 88888),
Array(1050284, 88888),
Array(1051493, 88888),
Array(1050425, 88888),
Array(1051405, 88888),
Array(1050335, 88888),
Array(1051459, 88888),
Array(1050389, 88888),
Array(1051410, 88888),
Array(1050341, 88888),
Array(1051406, 88888),
Array(1050337, 88888)
    );
var Care_P = Array(
Array(1102786, 88888),
Array(1102572, 88888),
Array(1102624, 88888),
Array(1102939, 88888),
Array(1102938, 88888),
Array(1102937, 88888),
Array(1102902, 88888),
Array(1102901, 88888),
Array(1102900, 88888),
Array(1102920, 88888),
Array(1102910, 88888),
Array(1102908, 88888),
Array(1102903, 88888),
Array(1102876, 88888),
Array(1102874, 88888),
Array(1102831, 88888),
Array(1102836, 88888),
Array(1102841, 88888),
Array(1102385, 88888),
Array(1102386, 88888),
Array(1102629, 88888),
Array(1102487, 88888),
Array(1102630, 88888),
Array(1102511, 88888),
Array(1102858, 88888),
Array(1102860, 88888),
Array(1102861, 88888),
Array(1102865, 88888),
Array(1102869, 88888),
Array(1102870, 88888),
Array(1102809, 88888),
Array(1102811, 88888),
Array(1102812, 88888),
Array(1102813, 88888),
Array(1102815, 88888),
Array(1102819, 88888),
Array(1102820, 88888),
Array(1102822, 88888),
Array(1102273, 88888),
Array(1102907, 88888),
Array(1102589, 88888),
Array(1102588, 88888),
Array(1102643, 88888),
Array(1102644, 88888),
Array(1102548, 88888),
Array(1102547, 88888),
Array(1102546, 88888),
Array(1102700, 88888),
Array(1102668, 88888),
Array(1102699, 88888),
Array(1102698, 88888),
Array(1102755, 88888),
Array(1102757, 88888),
Array(1102759, 88888),
Array(1102766, 88888),
Array(1102778, 88888),
Array(1102789, 88888),
Array(1102706, 88888),
Array(1102749, 88888),
Array(1102748, 88888),
Array(1102669, 88888),
Array(1102675, 88888),
Array(1102676, 88888),
Array(1102690, 88888),
Array(1102695, 88888),
Array(1102631, 88888),
Array(1102659, 88888),
Array(1102564, 88888),
Array(1102577, 88888),
Array(1102582, 88888),
Array(1102491, 88888),
Array(1102389, 88888),
Array(1102215, 88888),
Array(1102224, 88888),
Array(1102229, 88888),
Array(1102232, 88888),
Array(1102143, 88888),
Array(1102150, 88888),
Array(1102632, 88888)
    )
var Care_W = Array(
Array(1702581, 88888),
Array(1702504, 88888),
Array(1702699, 88888),
Array(1702698, 88888),
Array(1702605, 88888),
Array(1702604, 88888),
Array(1702679, 88888),
Array(1702678, 88888),
Array(1702677, 88888),
Array(1702676, 88888),
Array(1702668, 88888),
Array(1702667, 88888),
Array(1702666, 88888),
Array(1702665, 88888),
Array(1702659, 88888),
Array(1702658, 88888),
Array(1702657, 88888),
Array(1702656, 88888),
Array(1702655, 88888),
Array(1702637, 88888),
Array(1702640, 88888),
Array(1702660, 88888),
Array(1702669, 88888),
Array(1702675, 88888),
Array(1702681, 88888),
Array(1702682, 88888),
Array(1702686, 88888),
Array(1702692, 88888),
Array(1702693, 88888),
Array(1702607, 88888),
Array(1702611, 88888),
Array(1702612, 88888),
Array(1702512, 88888),
Array(1702614, 88888),
Array(1702616, 88888),
Array(1702617, 88888),
Array(1702625, 88888),
Array(1702626, 88888),
Array(1702628, 88888),
Array(1702629, 88888),
Array(1702630, 88888),
Array(1702631, 88888),
Array(1702634, 88888),
Array(1702633, 88888),
Array(1702636, 88888),
Array(1702304, 88888),
Array(1702566, 88888),
Array(1702567, 88888),
Array(1702570, 88888),
Array(1702571, 88888),
Array(1702576, 88888),
Array(1702583, 88888),
Array(1702584, 88888),
Array(1702586, 88888),
Array(1702588, 88888),
Array(1702589, 88888),
Array(1702591, 88888),
Array(1702593, 88888),
Array(1702594, 88888),
Array(1702595, 88888),
Array(1702597, 88888),
Array(1702598, 88888),
Array(1702520, 88888),
Array(1702523, 88888),
Array(1702527, 88888),
Array(1702530, 88888),
Array(1702533, 88888),
Array(1702538, 88888),
Array(1702549, 88888),
Array(1702550, 88888),
Array(1702553, 88888),
Array(1702554, 88888),
Array(1702559, 88888),
Array(1702560, 88888),
Array(1702694, 88888),
Array(1702444, 88888),
Array(1702453, 88888),
Array(1702477, 88888),
Array(1702480, 88888),
Array(1702486, 88888),
Array(1702488, 88888),
Array(1702489, 88888),
Array(1702491, 88888),
Array(1702501, 88888),
Array(1702508, 88888),
Array(1702451, 88888),
Array(1702455, 88888),
Array(1702469, 88888),
Array(1702401, 88888),
Array(1702357, 88888),
Array(1702367, 88888),
Array(1702371, 88888),
Array(1702372, 88888),
Array(1702400, 88888),
Array(1702334, 88888),
Array(1702295, 88888),
Array(1702758, 88888),
Array(1702556, 88888),
Array(1702627, 88888),
Array(1702764, 88888),
Array(1702684, 88888),
Array(1702685, 88888)
    );
var Care_J = Array(
Array(1112144, 150000),
Array(1112145, 150000),
Array(1112154, 150000),
Array(1112156, 150000),
Array(1112161, 150000),
Array(1112170, 150000),
Array(1112176, 150000),
Array(1112191, 150000),
Array(1112248, 150000),
Array(1112249, 150000),
Array(1112250, 150000),
Array(1112272, 150000),
Array(1112277, 150000),
Array(1112292, 150000),
Array(1115004, 150000),
Array(1112163, 150000),
Array(1112275, 150000),
Array(1115116, 150000),
Array(1115027, 150000),
Array(1115034, 150000),
Array(1115123, 150000),
Array(1115028, 150000),
Array(1112141, 150000),
Array(1112252, 150000),
Array(1112953, 150000),
Array(1112954, 150000),
Array(1112290, 300000),
Array(1115016, 300000),
Array(1115021, 300000),
Array(1115019, 300000),
Array(1115020, 300000),
Array(1112115, 300000),
Array(1112274, 300000),
Array(1112179, 300000),
Array(1112291, 300000),
Array(1112197, 300000),
Array(1112198, 300000),
Array(1115010, 300000),
Array(1115011, 300000),
Array(1115112, 300000),
Array(1115023, 300000),
Array(1115111, 300000),
Array(1115022, 300000),
Array(1115024, 300000),
Array(1115113, 300000),
Array(1115115, 300000),
Array(1115026, 300000),
Array(1115119, 300000),
Array(1115120, 300000),
Array(1115030, 300000),
Array(1115031, 300000),
Array(1115029, 300000),
Array(1115118, 300000),
Array(1115032, 300000),
Array(1115121, 300000),
Array(1112964, 300000),
Array(1115117, 300000),
Array(1112965, 300000),
Array(1115038, 300000),
Array(1115127, 300000),
Array(1115039, 300000),
Array(1115128, 300000),
Array(1115033, 300000),
Array(1115035, 300000),
Array(1115122, 300000),
Array(1115124, 300000),
Array(1112966, 300000),
Array(1115129, 300000),
Array(1115040, 300000),
Array(1112968, 300000),
Array(1113027, 300000),
Array(1112916, 300000)
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
            txt += "\t\t　#r#L8#" + Icon[11][1] + " 情侣搭配#l　#L9# 时装搭配 " + Icon[11][1] + "#l\r\n\r\n";
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

