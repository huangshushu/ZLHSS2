/*
 副本　　：	优化的暴君
 原作者　：	Memory
 优化作者： Careless
 */
var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var itemList = Array(
	Array(4033924, 600), //神话耳环蓝图
	Array(2432013, 600),  //女神之泪
	Array(2432014, 100), //女神之血滴
	Array(1113077, 300),  //绝对之戒
	Array(5062010, 600),  //终极魔方
	Array(1032205, 200),  //神话耳环
	Array(2431354, 100),  //星火幸运箱子
	Array(4033356, 200),  //正义火种
	Array(3010879, 100), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(3010895, 300), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(3010896, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(3010897, 300), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。
	Array(3010898, 300), // 迷你神兽椅子, 300), // 坐在迷你神兽椅子上时，每10秒HP恢复50，MP恢复50。
	Array(3010899, 300), // 摆钟椅子, 300), // 坐在钟摆椅子上时，每10秒HP恢复50，MP恢复50。
	Array(3010900, 300), // 宝石枫叶椅子, 300), // 用宝石做成的闪亮枫叶椅子。坐下后每10秒恢复HP 40, MP 20。
	Array(3010901, 300), // 热情的红色药水椅子, 300), // 和其他药水椅子相比，可以更快地恢复HP的红色药水椅子。每10秒HP恢复110，MP恢复50。
	Array(3010902, 300), // 新鲜的蓝色药水椅子, 300), // 和其他药水椅子相比，可以更快地恢复MP的蓝色药水椅子。每10秒HP恢复100，MP恢复60。
	Array(3010903, 300), // 兔子椅子, 300), // 坐在上面，每10秒HP恢复100，MP恢复50的兔子椅子。
	Array(3010904, 300), // 椰子树沙滩椅, 300), // 放在阿里安特凉爽的椰子树下的沙滩椅。坐在上面，每10秒HP恢复40，MP恢复20。
	Array(3010905, 300), // 柿子树鞦韆, 300), // 吊挂在挂满成熟柿子的柿子树上的鞦韆。
	Array(3010906, 300), // 云朵洗手间椅子, 300), // 装修豪华的洗手间。里面一切应有尽有。每10秒HP恢复100，MP恢复50。
	Array(3010907, 300), // 公沙沙兔靠垫, 300), // 靠着可爱的公沙沙兔坐着，每10秒HP恢复60。
	Array(3010908, 300), // 海蓝天鹅绒沙发, 300), // 奢华的海蓝色天鹅绒沙发。坐在上面，每10秒HP恢复60。
	Array(3010909, 300), // 红色设计师椅子, 300), // 采用明亮红色的设计师椅子。坐在上面，每10秒HP恢复60。
	Array(3010910, 300), // 艾莉珍椅子, 300), // 可以成为可爱的少女艾莉珍的好朋友。每10秒HP恢复50，MP恢复50。
	Array(3010911, 300), // 红帽月妙抱枕椅, 300), // 坐在抱枕椅上就可以看到戴著红色帽子的可爱月妙的才艺。
	Array(3010912, 300), // 蓝帽月妙抱枕椅, 300), // 坐在抱枕椅上就可以看到戴著蓝色帽子的可爱月妙的才艺。
	Array(3010913, 300), // 扇子月妙抱枕椅, 300), // 坐在抱枕椅上就可以观赏拿著扇子走绳索的月妙的才艺。
	Array(3010914, 300), // 太平萧月妙抱枕椅, 300), // 坐在抱枕椅上就可以观赏史出浑身力量演奏的月妙。
	Array(3010915, 300), // 恶灵附身的娃娃椅子, 300), // 恶灵附身的娃娃椅子。坐在上面，每10秒HP恢复50。
	Array(3010916, 300), // 粉红沙滩遮阳伞, 300), // 让人想起凉爽的大海的粉红色沙滩遮阳伞。坐在上面，每10秒HP恢复60。
	Array(3010917, 300), // 红色龙椅, 300), // 有严肃的火龙相伴的椅子。每10秒HP恢复50，MP恢复50。
	Array(3010918, 300), // 蓝色龙椅, 300), // 有严苛的青龙相伴的椅子。每10秒HP恢复50，MP恢复50。
	Array(3010919, 300), // 精灵王座, 300), // 为精灵之王制作的椅子。每10秒HP恢复100，MP恢复50。
	Array(3010920, 300), // 水晶月亮, 300), // 怪盗幻影专用椅子，坐下去后每10秒都能恢复HP。
	Array(3010921, 300), // 彩蛋篮子, 300), // 篮子中塞满五彩缤纷的彩蛋!\n每10秒钟恢复HP40,MP40.
	Array(3010922, 300), // 悠长假期(红色), 300), // 坐在上面可享受悠闲的红色悠长假期,每10秒钟恢复MP 20.
	Array(3010923, 300), // 10周年椅子, 300), // 为纪念冒险岛10周年而制作的巨无霸椅子。每10秒钟，HP和MP各恢复50.
	Array(3010936, 100), // 青蛙跳楼机, 300), // 由中国玩家“小术”设计的可同时乘坐多人的青蛙跳楼机椅子。坐下时，每10秒中，可恢复HP，MP各500。
	Array(3010894, 200), // 一杯咖啡的悠闲, 300), // 享受一杯咖啡的浓郁的香味。坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010747, 300), // 和风纸鸢椅子, 300), // 充满和风的纸鸢椅子。坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010748, 300), // 日式拉面椅, 300), // 浓郁的日式传统拉面，香气四溢。坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010750, 300), // 焦糖月光椅子, 300), // 软软的焦糖月光，香甜可口。坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010795, 100), // 森林中休息处(椅子), 300), // 可以在宁静的森林中休息的椅子。坐上时，每10秒恢复HP、MP500。
	Array(3010794, 200), // 抖动的舌头椅子, 300), // 抖动的舌头椅子，坐在上面随时可能被丑陋的怪物吃掉哦。坐上时，每10秒恢复HP、MP500。
	Array(3010799, 300), // 坟墓幽灵椅子, 300), // 坐在椅子上，将化身为游走在坟墓中的幽灵。坐上时，每10秒恢复HP、MP500。
	Array(3010714, 300), // 堆王冠, 300), // 由5个不同颜色的王冠一层层堆积起来的椅子。坐上时，每10秒恢复HP、MP500。
	Array(3010732, 200), // 翅膀自行车椅子, 300), // 坐上时，每10秒恢复HP、MP500。
	Array(3012019, 300), // 爱琴海椅子, 300), // 由中国玩家“小术”设计的双人椅子。在浪漫的爱情海，和喜欢的人一起坐在圣爱殿堂中，感受幸福与甜蜜。两人靠近后坐下会出现爱琴海圣爱殿堂的浪漫特效。坐上时，每10秒恢复HP、MP500。
	Array(3010813, 300), // 爱情水晶球的回忆, 300), // 由中国玩家“小术”设计的椅子。装满了满满幸福甜蜜回忆的爱情水晶球。坐上时，每10秒恢复HP、MP500。
	Array(3012020, 100), // 紫藤花吊篮椅, 300), // 由中国冒险岛玩家“小术”设计的情侣椅子，两个人坐一起时产生漂亮的背景效果，每5秒恢复HP/MP 500
	Array(3010820, 100), // 迷你玩具别墅椅子, 300), // 想休息的时候，就到我的别墅来。每10秒，HP恢复500，MP恢复500。
	Array(3010806, 300), // 桃樱芳菲椅, 300), // 百花齐放，惬意悠悠。每10秒钟恢复HP50、MP50。
	Array(3010780, 300), // 旋转木马, 300), // 承载着梦想的木马，带你驶向幸福的彼岸。坐上时，每10秒恢复HP、MP100。
	Array(3010779, 300), // 金马祥云轿, 300), // 由中国玩家“小术”设计。金马祥云轿，腾云驾雾来报到。象征马年吉祥如意的椅子。坐上时，每10秒恢复HP、MP500。
	Array(3010781, 200), // 马上有你, 300), // 和好朋友小马马坐在一起。坐上时，每10秒恢复HP、MP500。
	Array(3010788, 100), // 巨无霸年夜饭, 300), // 由中国玩家“小术”设计。农历除夕，在鞭炮声中围座在一起，共同辞旧迎新一起享受美味的巨无霸团圆饭。坐上时，每秒恢复HP、MP各500。
	Array(3010783, 100), // 蓝色邦尼屋, 300), // 欢迎来到邦尼快乐的家～每10秒HP恢复50，MP恢复50。
	Array(3010797, 300), // 新娘春节椅子, 300), // 和双弩精灵新娘一起迎接春节的到来。每10秒HP恢复50，MP恢复50。
	Array(3010798, 300), // 焰火椅子, 300), // 两边有焰火绽放的高级椅子。可能稍微有点危险……每10秒HP恢复50，MP恢复50。
	Array(3010800, 300), // 小学生月妙拜年椅子, 300), // 感觉好像得给钱才行，但是不仅不扣减金币，还会每10秒HP恢复50，MP恢复50。
	Array(3010801, 300), // 学龄前月妙拜年椅子, 300), // 感觉好像得给钱才行，但是不仅不扣减金币，还会每10秒HP恢复50，MP恢复50。
	Array(3010802, 300), // 中学生月妙拜年椅子, 300), // 感觉好像得给钱才行，但是不仅不扣减金币，还会每10秒HP恢复50，MP恢复50。
	Array(3010803, 300), // 高3月妙拜年椅子, 300), // 感觉好像得给钱才行，但是不仅不扣减金币，还会每10秒HP恢复50，MP恢复50。
	Array(3010804, 300), // 军人月妙拜年椅子, 300), // 到了一定的年纪，得接受军人的拜年。每10秒HP恢复50，MP恢复50。
	Array(3010810, 300), // 火车旅行椅, 300), // 坐着火车去旅行吧！坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010811, 300), // 嫩芽椅, 300), // 可以感觉到春天绿色的气息。坐在嫩芽上，感受春天的情趣吧。每10秒HP恢复50，MP恢复50。
	Array(3010812, 300), // 旋转木马椅, 300), // 快乐的游乐园。坐在旋转木马上，度过快乐的时光。每10秒HP恢复50，MP恢复50。
	Array(3010814, 300), // 粉丝抱枕椅子, 300), // 粉丝抱枕椅子，坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010815, 300), // 单身部队海报椅, 300), // 肉麻的炫耀只会让我们变得更强。我们是无敌的单身部队！\r\n#c每10秒HP/MP恢复50
	Array(3010835, 300), // 爱情水晶球记忆椅, 300), // 沉浸在甜蜜的爱情回忆中吧。每10秒HP恢复50，MP恢复50。\n中国冒险岛玩家[小术]设计的椅子。
	Array(3010844, 300), // 麻辣教室椅子, 300), // 我就是我，谁也不能阻拦我！坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010851, 300), // 夏日沁饮椅子, 300), // 炎炎夏日，只有它才能让你清凉舒爽。坐下时，每10秒中，可恢复HP，MP各50。
	Array(3010852, 300), // 鲜花椅, 300), // 和春天盛开的美丽鲜花在一起。每10秒HP恢复50，MP恢复50。
	Array(3010854, 300), // 神秘怪物共聚一堂！, 300), // 揭开神秘面纱的怪物们和太古蘑菇一起庆祝11周年。每10秒HP恢复50，MP恢复50。
	Array(3010789, 300), // 爆竹声声, 300), // 爆竹声声迎新年！坐在上面的话，每10秒回复200点HP、200点MP
	Array(3010606, 300), // 未上色的名画椅子, 300), // 这幅空的画布，呼唤你为它涂上绚丽的色彩。坐在上面时，每10秒HP恢复10点，MP恢复10点。
	Array(3010608, 300), // 完美的名画椅子, 300), // 天啊，看看这幅杰作！这线条和这色彩，如此炫目，如此令人惊叹！坐在上面时，每10秒HP恢复50点，MP恢复50点。
	Array(1072337, 100), // 喜洋洋拖鞋, 100), // (无描述)
	Array(1112254, 100), // 豪华珍珠聊天戒指, 100), // 由中国冒险岛玩家小术设计，在海底珍珠玲珑光芒的环绕下轻松愉快的聊天吧。
	Array(1112143, 100), // 豪华珍珠名片戒指, 100), // 由中国冒险岛玩家小术设计，在海底珍珠玲珑光芒的环绕下展示自己的昵称吧。
	Array(1112118, 100), // 可乐名片戒指, 100), // 角色造型下面，以可口可乐颜色作为底色，以白色字体显示角色名称。
	Array(1112119, 50), // 可乐(Red) 名片戒指, 100), // 角色造型下面，以可口可乐颜色作为底色，以白色字体显示角色名称。
	Array(1112120, 100), // 可乐(White) 名片戒指, 100), // 角色造型下面，以可口可乐颜色作为底色，以红色字体显示角色名称。
	Array(1112228, 100), // 可乐聊天戒指, 100), // 角色对话的时候，聊天窗会变成可口可乐样子
	Array(1112229, 100), // 可乐(Red)聊天戒指, 100), // 角色对话的时候，聊天窗会变成类似可口可乐样子
	Array(1112230, 100), // 可乐(White)聊天戒指, 100), // 角色对话的时候，聊天窗会变成类似可口可乐样子
	Array(1002524, 100), // 可乐帽, 100), // (无描述)
	Array(1702533, 100), // 奶兔立拍得, 100), // 由中国玩家“小术”设计的奶兔立拍得。\n可以装备在#c所有武器#上的武器。
	Array(1702020, 100), // 棒棒糖, 100), // 可装备在#c/单手剑/单手斧/单手钝器/短杖/长杖/短刀/魔法棒/的主武器#上。
	Array(1702459, 100), // 棉花糖武器, 100), // 攻击时可以看到羊形态的棉花糖。可装备在#c所有的主武器#上。
	Array(1702302, 100), // 杯具, 100), // 可装备在#c除了/手炮/双弩枪/以外的主武器#上。
	Array(1042285, 100), // 拼色点点T恤, 100), // (无描述)
	Array(1042204, 100), // 汉堡T恤, 100), // (无描述)
	Array(1112103, 100), // 嫩黄名片戒指, 100), // 在角色的下面出来黄底黑字角色名。
	Array(1112253, 100), // 木乃伊对话框戒指, 100), // 角色对话时, 显示绷带对话框。
	Array(1112142, 100), // 木乃伊名片戒指, 100), // 在角色下面的绷带上显示角色名。
	Array(1112135, 100), // 水墨花名片戒指, 100), // 在角色脚底下，用以水墨画背景用白色的字体显示角色名字。
	Array(1112238, 100), // 水墨花聊天戒指, 100), // 角色在聊天时，会出现水墨画对话框。
	Array(1003588, 100), // 玩具粉熊帽子, 100), // (无描述)
	//130装备
	Array(1232040, 290), // 豪华阿加雷斯猩红黄道剑
	Array(1302228, 290), // 豪华阿加雷斯拳刃
	Array(1312117, 290), // 豪华阿加雷斯头盔(名字显示有问题）
	Array(1322163, 290), // 豪华阿加雷斯锤
	Array(1402152, 290), // 豪华阿加雷斯双手剑
	Array(1412105, 290), // 豪华阿加雷斯拳套（名字显示有问题)
	Array(1422108, 290), // 豪华阿加雷斯大槌
	Array(1432139, 290), // 豪华阿加雷斯之矛
	Array(1442183, 290), // 豪华阿加雷斯之矛
	Array(1332194, 290), // 豪华赫尔巴斯猎手
	Array(1362068, 290), // 豪华赫尔巴斯手杖         
	Array(1472180, 290), // 豪华赫尔巴斯手套
	Array(1212043, 290), // 豪华艾里格斯双头杖
	Array(1372140, 290), // 豪华艾里格斯短杖
	Array(1382169, 290), // 豪华艾里格斯笞鞭
	Array(1252030, 290), // 豪华艾里格斯猫梳魔法棒
	Array(1452171, 290), // 豪华伊布斯长弓
	Array(1462160, 290), // 豪华伊布斯弩
	Array(1522072, 290), // 豪华伊布斯双弩枪
	Array(1222043, 290), // 豪华维帕尔血月
	Array(1242046, 290), // 豪华维帕尔狮蝎剑
	Array(1482141, 290), // 豪华维帕尔指节手套
	Array(1492153, 290), // 豪华维帕尔之鹰
	Array(1532075, 290), // 豪华维帕尔火炮
	Array(1003589, 290), // 豪华阿加雷斯头箍
	Array(1003592, 290), // 豪华赫尔巴斯头箍
	Array(1003590, 290), // 豪华艾里格斯头箍
	Array(1003591, 290), // 豪华伊布斯头箍
	Array(1003593, 290), // 豪华维帕尔头箍
	Array(1052498, 290), // 豪华阿加雷斯锁子甲
	Array(1052501, 290), // 豪华赫尔巴斯锁子甲
	Array(1052499, 290), // 豪华艾里格斯锁子甲
	Array(1052500, 290), // 豪华伊布斯锁子甲
	Array(1052502, 290), // 豪华维帕尔锁子甲
	Array(1102445, 290), // 豪华阿加雷斯披风
	Array(1102448, 290), // 豪华赫尔巴斯披风
	Array(1102446, 290), // 豪华艾里格斯披风
	Array(1102447, 290), // 豪华伊布斯披风
	Array(1102449, 290), // 豪华维帕尔披风
	Array(1082466, 290), // 豪华阿加雷斯手套
	Array(1082469, 290), // 豪华赫尔巴斯手套
	Array(1082467, 290), // 豪华艾里格斯手套
	Array(1082468, 290), // 豪华伊布斯手套
	Array(1082470, 290), // 豪华维帕尔手套
	Array(1072703, 290), // 豪华阿加雷斯靴
	Array(1072706, 290), // 豪华赫尔巴斯靴
	Array(1072704, 290), // 豪华艾里格斯靴
	Array(1072705, 290), // 豪华伊布斯靴
	Array(1072707, 290) // 豪华维帕尔靴
);
function init() {
    em.setProperty("state", "0");
}


function setup(level, leaderid) {
    var eim = em.newInstance("Magnus");
    eim.setInstanceMap(401050001).resetPQ(level);
    eim.setInstanceMap(401051000).resetPQ(level);
    eim.setInstanceMap(401051001).resetPQ(level);
    eim.setInstanceMap(401051002).resetPQ(level);
    eim.setInstanceMap(401052002).resetPQ(level);
    eim.setInstanceMap(401052001).resetPQ(level);
    eim.setInstanceMap(401052000).resetPQ(level);
    eim.setInstanceMap(401050002).resetPQ(level);
    eim.setInstanceMap(401050100).resetPQ(level);
    eim.setInstanceMap(401050101).resetPQ(level);
    eim.setInstanceMap(401053000).resetPQ(level);
    eim.setInstanceMap(401053001).resetPQ(level);
    eim.setInstanceMap(401053002).resetPQ(level);
    eim.setInstanceMap(401060000).resetPQ(level);
    eim.setInstanceMap(401060100).resetPQ(level);
    var map = eim.setInstanceMap(401060100);
    map.resetFully();
    map.killAllMonsters(true);
    map.respawn(false);
    mobid = 9303101;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20);
    modified.setOMp(mob.getMobMaxMp() * 999);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(401060100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(599, -1386));
    //-------------------------------------------------------------//
    var map2 = eim.getMapInstance(401060000);//9800163
    for (var i = 0; i < 20; i++) {
        mobid = 9300684;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(mob.getMobMaxHp() * 3);
        modified.setOMp(mob.getMobMaxMp() * 99);
        mob.setOverrideStats(modified);
        map2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1211, -1347));
    }
    var map3 = eim.getMapInstance(401050001);//9800163
    for (var i = 0; i < 30; i++) {
        mobid = 9800163;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(mob.getMobMaxHp() * 120);
        modified.setOMp(mob.getMobMaxMp() * 99);
        mob.setOverrideStats(modified);
        map3.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-4174, 153));
    }
    eim.startEventTimer(1000 * 60 * 60);
    em.setProperty("state", "1");
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    eim.broadcastPlayerMsg(-1, "小麦格纳斯 - 想挑战我爸爸！就先战胜我  否则你们没有挑战我爸爸的机会");
    eim.broadcastPlayerMsg(-1, "小麦格纳斯 - 想挑战我爸爸！就先战胜我  否则你们没有挑战我爸爸的机会");
    eim.broadcastPlayerMsg(-1, "小麦格纳斯 - 想挑战我爸爸！就先战胜我  否则你们没有挑战我爸爸的机会");
    player.dropMessage(6, "※ 麦格纳斯 ※ 欢迎你们开始挑战 不朽君主·麦格纳斯");//5120129
    em.getMapFactory().getMap(401050001).startMapEffect("※ 不朽暴君·麦格纳斯 ※ 伟大的君主 是不惧任何的挑战 欢迎你们挑战我 不朽暴君·麦格纳斯", 5120129);
    if (eim.getMapInstance(401060000)) {
        em.getMapFactory().getMap(401050001).startMapEffect("※ 不朽暴君·麦格纳斯 ※ 伟大的君主 是不惧任何的挑战 欢迎你们挑战我 不朽暴君·麦格纳斯", 5120129);
    }
    player.changeMap(map, map.getPortal(0));
}


function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "※ 麦格纳斯 ※ 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 262030000);
}

function cancelSchedule() {
}


function playerDead(eim, player) {
}




function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(262030000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 262030000);
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 401050001:
        case 401051000:
        case 401051001:
        case 401051002:
        case 401052002:
        case 401052001:
        case 401052000:
        case 401050002:
        case 401050100:
        case 401050101:
        case 401053000:
        case 401053001:
        case 401053002:
        case 401060000:
        case 401060100:
            return;
    }

    player.dropMessage(6, "※ 麦格纳斯 ※ 你们开始畏惧了吗 你们已退出了挑战");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 262030000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 262030000);
}



function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 262030000);
        if (setupTask != null)
            setupTask.cancel(true);
        eim.dispose();
    }
    return 0;
}


function monsterValue(eim, mobid) {
    return 1;
}


function monsterKilled(eim, player, cp) {
}


function allMonstersDead(eim) {
    if (em.getProperty("state").equals("1")) {
        eim.setProperty("giftcount", "0");
        roll(eim);
        eim.startEventTimer(1000 * 60 * 5);
        eim.broadcastPlayerMsg(6, "※ 麦格纳斯 ※ 10m开启宝箱 掷点时请勿进行其他操作 并且需要在10秒钟内做出需求选择 否则将会被强制下线 ！");
        var map = eim.getMapInstance(401060100);
        map.startMapEffect("※ 不朽暴君·麦格纳斯 ※ 不朽暴君·麦格纳斯 已被消灭 10m后将开启 暴君 私藏的宝箱", 5120124);
    }
}

function roll(eim) {
    MaxRandom = 0;
    var count = eim.getProperty("giftcount");
    var rewardPlayer = null;
    //第二次开始,统计上一次ROLL点玩家结果，并发放奖励。
    if ((count * 1) >= 1) {
        for (var i = 0; i < eim.getPlayerCount() ; i++) {
            var charName = eim.getPlayers().get(i).getName();
            var charId = eim.getPlayers().get(i).getId();
            //推送ROLL点信息
            for (var j = 0; j < eim.getPlayerCount() ; j++) {
                var notice = "※ 麦格纳斯 ※ 玩家 " + charName + " 掷出了 " + eim.getProperty("charid_" + charId) + "点";
                if ((eim.getProperty("charid_" + charId) * 1) == 0) {
                    notice = "※ 麦格纳斯 ※ 玩家 " + charName + " 放弃了掷点";
                }
                eim.getPlayers().get(j).dropMessage(6, notice);
            }
            //不断重置最大值
            if ((eim.getProperty("charid_" + charId) * 1) > MaxRandom) {
                MaxRandom = eim.getProperty("charid_" + charId);
                //置换玩家名称
                eim.setProperty("rewardplayer", charName);
                //置换玩家ID
                eim.setProperty("rewardplayerid", charId);
            }
        }
        for (var j = 0; j < eim.getPlayerCount() ; j++) {
            //操作NPC 发放奖励
            eim.getPlayers().get(j).openNpc(1052008, 1111);
        }
    }
    for (var j = 0; j < eim.getPlayerCount() ; j++) {
        //重置所有玩家ROLL点点数为零
        eim.setProperty("charid_" + eim.getPlayers().get(j).getId(), "0");
    }
    //次数+1
    eim.setProperty("giftcount", (count * 1 + 1));
    //重新读入次数
    count = eim.getProperty("giftcount");
    count = (count * 1);
    //退出战场
    if ((count * 1) > 10) {
        EndThisBattle(eim);
        return;
    }
    //创建几率
    var chance = Math.floor(Math.random() * 600);
    //最终物品列表
    var finalItemList = Array();
    for (var m = 0; m < itemList.length; m++) {
        if (itemList[m][1] >= chance) {
            finalItemList.push(itemList[m][0]);
        }
    }
    var currentItem = finalItemList[Math.floor(Math.random() * finalItemList.length)];
    switch (count) {
        case 8:
        case 9:
        case 10:
            currentItem = 2432013;
            break;
    }
    eim.setProperty("rewarditem", currentItem);
    //延迟10秒打开ROLL点NPC
    setupTask = em.schedule("openRollNpc", 1000 * 10 * 1, eim);
}

function openRollNpc(eim) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(1052008);
    }
    //10秒后继续ROLL点
    setupTask = em.schedule("roll", 1000 * 10 * 1, eim);
}

function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).dropMessage(1, "※ 麦格纳斯 ※ 你们消灭了伟大的不朽暴君·麦格纳斯");
    }
    //em.broadcastYellowMsg("※ 麦格纳斯 ※ 挑战结束");
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 262030000);
    if (setupTask != null)
        setupTask.cancel(true);
    eim.dispose();
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 262030000);
}


function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 262030000);
}


function onMapLoad(eim, player) {
}
function monsterDrop(eim, player, mob) { }