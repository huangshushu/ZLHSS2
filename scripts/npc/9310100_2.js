
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var item;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";


var tyfz = Array(
	Array(1042314, 1000, "未定义", "永久"), //兔熊T恤
	Array(1051137, 1000, "未定义", "永久"), //兔毛领粉红装
	Array(1052422, 1000, "未定义", "永久"), //浪漫骷髅
	Array(1052910, 1000, "未定义", "永久"), //水晶喵喵全身服
    Array(1052911, 1000, "未定义", "永久"), //水晶喵喵连衣裙
	Array(1052892, 1000, "未定义", "永久"), //呆萌兔背带裤
	Array(1052998, 1000, "未定义", "永久"), //外星人连身
	Array(1052593, 1000, "未定义", "永久"), //粉红缎带冰淇淋服
	Array(1052201, 1000, "未定义", "永久"), //闪亮水手外套
	Array(1052671, 1000, "未定义", "永久"), //特大号白衬衫
	Array(1052656, 1000, "未定义", "永久"), //白天鹅芭蕾服
    Array(1052657, 1000, "未定义", "永久"), //黑天鹅芭蕾服
	Array(1042349, 1000, "未定义", "永久"), //黑色摇滚连帽衫
	Array(1042357, 1000, "未定义", "永久"), //幽灵小白
	Array(1052731, 1000, "未定义", "永久"), //黑色可爱游泳服
	Array(1052298, 1000, "未定义", "永久"), //兔耳洛莉塔套服
    Array(1052291, 1000, "未定义", "永久"), //户外运动装
	Array(1052842, 1000, "未定义", "永久"), //萌犬套装(裙)
    Array(1052843, 1000, "未定义", "永久"), //萌犬套装(裤)
	Array(1052724, 1000, "未定义", "永久"), //小马乖乖套服
	Array(1052781, 1000, "未定义", "永久"), //红色小马憨憨背带裤
    Array(1052782, 1000, "未定义", "永久"), //蓝色小马憨憨背带裤
	Array(1052661, 1000, "未定义", "永久"), //小鸡玩偶服
    Array(1052666, 1000, "未定义", "永久"), //巧克力绵羊玩偶服
    Array(1052667, 1000, "未定义", "永久"), //小绵羊朵朵玩偶服
	Array(1052587, 1000, "未定义", "永久"), //小海豹玩偶服
    Array(1052586, 1000, "未定义", "永久"), //伶俐猫咪服装
	Array(1052919, 1000, "未定义", "永久"), //西红柿外套
	Array(1052412, 1000, "未定义", "永久"), //淘气王子
    Array(1052275, 1000, "未定义", "永久"), //皇家七七夹克
	Array(1052225, 1000, "未定义", "永久"), //暗夜娃娃服
    Array(1053006, 1000, "未定义", "永久"), //暖绒兔长裙
    Array(1052948, 1000, "未定义", "永久"), //奥尔卡的睡袍
	Array(1052916, 1000, "未定义", "永久"), //弓凛的花衣裳
    Array(1052917, 1000, "未定义", "永久"), //红月的夜行衣
    Array(1052923, 1000, "未定义", "永久"), //黑猫连帽衫
    Array(1052901, 1000, "未定义", "永久"), //时髦的领结套服
    Array(1052896, 1000, "未定义", "永久"), //可爱小绵羊服
    Array(1052595, 1000, "未定义", "永久"), //小恐龙套服
    Array(1052844, 1000, "未定义", "永久"), //微笑玉米背带裤
    Array(1052845, 1000, "未定义", "永久"), //宽松运动服
	Array(1052626, 1000, "未定义", "永久"), //海洋风条纹装
    Array(1052536, 1000, "未定义", "永久"), //水手装
    Array(1052537, 1000, "未定义", "永久"), //超级星光蜜蜂服
	Array(1052697, 1000, "未定义", "永久"), //雪之女神连身裙
    Array(1052846, 1000, "未定义", "永久"), //桃太郎的背带裤
    Array(1052762, 1000, "未定义", "永久"), //香蕉背带套装
    Array(1052727, 1000, "未定义", "永久"), //快乐连体衫
    Array(1052728, 1000, "未定义", "永久"), //快乐连衣裙
    Array(1052675, 1000, "未定义", "永久"), //万圣节幻影帽子套服
    Array(1052474, 1000, "未定义", "永久"), //阴阳师的礼服
    Array(1052419, 1000, "未定义", "永久"), //粉娃娃裙
    Array(1052248, 1000, "未定义", "永久"), //暗影双刀套服
    Array(1052216, 1000, "未定义", "永久"), //嫦娥裙
    Array(1052209, 1000, "未定义", "永久"), //皇家海军制服
	Array(1052940, 1000, "未定义", "永久"), //春日阳光套衫
    Array(1052925, 1000, "未定义", "永久"), //红粉飘飘连衣裙
    Array(1052924, 1000, "未定义", "永久"), //贵族花纹套服
    Array(1052078, 1000, "未定义", "永久"), //泡泡袍
    Array(1052067, 1000, "未定义", "永久") //木乃伊服
    );


var nvsfz = Array(    
	Array(1051426, 1000, "未定义", "永久"), //暗夜高校服
	Array(1051366, 1000, "未定义", "永久"), //小娃娃皮卡（女）
	Array(1051180, 1000, "未定义", "永久"), //水兵服（女）
	Array(1051385, 1000, "未定义", "永久"), //巧克力恋人
	Array(1051409, 1000, "未定义", "永久"), //闪亮艾斯女孩
	Array(1051392, 1000, "未定义", "永久"), //派对公主
	Array(1051431, 1000, "未定义", "永久"), //恋爱女孩信使
    Array(1051459, 1000, "未定义", "永久"), //农夫甜心派（女）
	Array(1051415, 1000, "未定义", "永久"), //拉拉队服
	Array(1051369, 1000, "未定义", "永久"), //女仆的骄傲
	Array(1051408, 1000, "未定义", "永久"), //蝴蝶之恋
	Array(1051405, 1000, "未定义", "永久"), //旋律少女
	Array(1051424, 1000, "未定义", "永久"), //圣诞女孩子服（女）
	Array(1051435, 1000, "未定义", "永久"), //星光长袍女孩（女）
    Array(1051426, 1000, "未定义", "永久"), //幻象贝拉（女）
    Array(1051430, 1000, "未定义", "永久"), //闪耀之星纪念套服（女）
	Array(1051440, 1000, "未定义", "永久"), //人鱼传说（女）
    Array(1051425, 1000, "未定义", "永久"), //蝴蝶结黄色连衣裙（女）
	Array(1051457, 1000, "未定义", "永久"), //海军风校服（女）
	Array(1051456, 1000, "未定义", "永久"), //爱情蓝鸟连衣裙
	Array(1041198, 1000, "未定义", "永久"), //小叶子吊带
	Array(1051453, 1000, "未定义", "永久"), //小熊连衣裙（女）
	Array(1051261, 1000, "未定义", "永久"), //童话七七
	Array(1051189, 1000, "未定义", "永久"), //怦然心动
	Array(1051359, 1000, "未定义", "永久"), //海滩美眉装
    Array(1051464, 1000, "未定义", "永久"), //天蓝微笑裙（女）
    Array(1051448, 1000, "未定义", "永久"), //莲花学院指定校服（女）
    Array(1051410, 1000, "未定义", "永久"), //森林露营服（女）
    Array(1051415, 1000, "未定义", "永久"), //拉拉队服（女）
    Array(1051389, 1000, "未定义", "永久"), //纯白婚纱（女）
    Array(1051200, 1000, "未定义", "永久"), //邦妮女孩套服（女）
    Array(1051192, 1000, "未定义", "永久") //海洋裹裹短裙（女）
    );
	
var nansfz = Array(
	Array(1050356, 1000, "未定义", "永久"), //暗夜高校服
	Array(1050152, 1000, "未定义", "永久"), //水兵套服（男）
	Array(1050299, 1000, "未定义", "永久"), //小娃娃普卡（男）
	Array(1050314, 1000, "未定义", "永久"), //巧克力恋人
	Array(1050361, 1000, "未定义", "永久"), //恋爱男孩信使
	//Array(1050340, 1000, "未定义", "永久"), //闪亮艾斯男孩
	Array(1050322, 1000, "未定义", "永久"), //派对王子
	Array(1050339, 1000, "未定义", "永久"), //蝴蝶之恋
	Array(1050360, 1000, "未定义", "永久"), //闪耀之星纪念套服
	Array(1050335, 1000, "未定义", "永久"), //旋律少年
	Array(1050386, 1000, "未定义", "永久"), //爱情蓝鸟套服
	Array(1050346, 1000, "未定义", "永久"), //拉拉队服
	Array(1050319, 1000, "未定义", "永久"), //秋游套装（男）
    Array(1050293, 1000, "未定义", "永久"), //海滩帅锅装（男）
    Array(1050210, 1000, "未定义", "永久"),//蓝色小背带服（男）
	Array(1040196, 1000, "未定义", "永久"), //小叶子背心
	Array(1050371, 1000, "未定义", "永久"), //人鱼传说（男）
	Array(1050384, 1000, "未定义", "永久"), //小蓝蓝全身服（男）
    Array(1050387, 1000, "未定义", "永久"), //海军风校服（男）
    Array(1050389, 1000, "未定义", "永久"), //农夫甜心派（男）
    Array(1050393, 1000, "未定义", "永久"), //天蓝微笑套服（男）
    Array(1050364, 1000, "未定义", "永久"), //草叶甜甜（男）
    Array(1050353, 1000, "未定义", "永久"), //法式糕点服（男）
    Array(1050341, 1000, "未定义", "永久"), //森林露营服（男）
    Array(1050338, 1000, "未定义", "永久") //冒险岛学院男泳裤（男）
    );

var jzmp = Array(
    Array(1112135, 1000, "未定义", "永久"), //水墨花名片戒指
    Array(1112238, 1000, "未定义", "永久"), //水墨花聊天戒指
	Array(1112141, 1000, "未定义", "永久"), //红玫瑰名片戒指
	Array(1112252, 1000, "未定义", "永久"), //红玫瑰聊天戒指
	Array(1112143, 1000, "未定义", "永久"), //奢华珍珠名片戒指
	Array(1112254, 1000, "未定义", "永久"), //奢华珍珠聊天戒指
	Array(1112150, 1000, "未定义", "永久"), //天使降临名片戒指
	Array(1112262, 1000, "未定义", "永久"), //天使聊天戒指
	Array(1112183, 1000, "未定义", "永久"), //羊咩咩名片戒指
	Array(1112296, 1000, "未定义", "永久"), //羊咩咩聊天戒指
	Array(1112193, 1000, "未定义", "永久"), //公主日记名片戒指
	Array(1115006, 1000, "未定义", "永久"), //公主日记聊天戒指
	Array(1112164, 1000, "未定义", "永久"), //夏日甜心名片戒指
	Array(1112276, 1000, "未定义", "永久"), //夏日甜心聊天戒指
    Array(1112197, 1000, "未定义", "永久"), //晚安小怪兽名片戒指
    Array(1115010, 1000, "未定义", "永久"), //晚安小怪兽聊天戒指
    Array(1112198, 1000, "未定义", "永久"), //吃货小怪兽名片戒指
    Array(1115011, 1000, "未定义", "永久"), //吃货小怪兽聊天戒指
    Array(1112199, 1000, "未定义", "永久"), //雪人的红围巾名片戒指
    Array(1115015, 1000, "未定义", "永久"), //雪人的红围巾聊天戒指
    Array(1112144, 1000, "未定义", "永久"), //虎喵名片戒指
    Array(1112256, 1000, "未定义", "永久"), //虎喵聊天戒指
    Array(1112272, 1000, "未定义", "永久"), //西瓜物语聊天戒指
    Array(1112160, 1000, "未定义", "永久"), //西瓜物语名片戒指
    Array(1112267, 1000, "未定义", "永久"), //青蛙聊天戒指
    Array(1112155, 1000, "未定义", "永久"), //青蛙名片戒指
    Array(1112270, 1000, "未定义", "永久"), //我爱胡子聊天戒指(红色)
    Array(1112158, 1000, "未定义", "永久"), //我爱胡子名片戒指(红色)
    Array(1112269, 1000, "未定义", "永久"), //我爱胡子聊天戒指(蓝色)
    Array(1112157, 1000, "未定义", "永久"), //我爱胡子名片戒指(蓝色)
    Array(1112253, 1000, "未定义", "永久"), //木乃伊聊天戒指
    Array(1112142, 1000, "未定义", "永久"), //木乃伊名片戒指
    Array(1112257, 1000, "未定义", "永久"), //浪漫花边聊天戒指
    Array(1112145, 1000, "未定义", "永久"), //浪漫花边名片戒指
    Array(1112258, 1000, "未定义", "永久"), //青苹果之恋聊天戒指
    Array(1112146, 1000, "未定义", "永久"), //青苹果之恋名片戒指
    Array(1112263, 1000, "未定义", "永久"), //美味蛋糕聊天戒指
    Array(1112151, 1000, "未定义", "永久"), //美味蛋糕名片戒指
    Array(1112173, 1000, "未定义", "永久"), //奶白兔名片戒指
    Array(1112285, 1000, "未定义", "永久"), //奶白兔聊天戒指
    Array(1112174, 1000, "未定义", "永久"), //足球名片戒指
    Array(1112286, 1000, "未定义", "永久"), //足球聊天戒指
    Array(1112176, 1000, "未定义", "永久"), //旋律戒指
    Array(1112288, 1000, "未定义", "永久"), //旋律戒指
    Array(1112177, 1000, "未定义", "永久"), //进击聊天戒指
    Array(1112289, 1000, "未定义", "永久"), //进击聊天戒指
    Array(1112283, 1000, "未定义", "永久"), //GG聊天戒指
    Array(1112171, 1000, "未定义", "永久"), //GG聊天戒指
    Array(1112284, 1000, "未定义", "永久"), //GG聊天戒指
    Array(1112172, 1000, "未定义", "永久"), //GG聊天戒指
    Array(1112290, 1000, "未定义", "永久"), //MH聊天戒指
    Array(1112178, 1000, "未定义", "永久"), //MH聊天戒指
    Array(1112291, 1000, "未定义", "永久"), //XH聊天戒指
    Array(1112179, 1000, "未定义", "永久"), //XH聊天戒指
    Array(1112190, 1000, "未定义", "永久"), //AC聊天戒指
    Array(1115003, 1000, "未定义", "永久"), //AC聊天戒指
    Array(1112191, 1000, "未定义", "永久"), //MF聊天戒指
    Array(1115004, 1000, "未定义", "永久"), //MF聊天戒指
    Array(1112192, 1000, "未定义", "永久"), //BL聊天戒指
    Array(1115005, 1000, "未定义", "永久"), //BL聊天戒指
    Array(1112237, 1000, "未定义", "永久"), //小竹林聊天戒指
    Array(1112134, 1000, "未定义", "永久")//小竹林名片戒指
    );

var tjId = Array(
    Array(1004659, 1000, "未定义", "【永久】"),//
    Array(5520000, 3000, "未定义", "【永久】"),//
    Array(1012135, 6666, "未定义", "【永久】"),//
    Array(1102767, 1000, "未定义", "【永久】"),//
    //Array(1000082, 1500, "未定义", "【永久】"),//
    //Array(1000088, 1500, "未定义", "【永久】"),//
    //Array(1000086, 1500, "未定义", "【永久】"),//
    //Array(1001103, 1500, "未定义", "【永久】"),//
    //Array(1001104, 1500, "未定义", "【永久】"),//
    //Array(1001110, 1500, "未定义", "【永久】"),//
    //Array(1003860, 1500, "未定义", "【永久】"),//
	
    //Array(1004336, 2000, "未定义", "【永久】"),//
    //Array(1004337, 2000, "未定义", "【永久】"),//
    //Array(1004140, 1000, "未定义", "【永久】"),//
    //Array(1004142, 1000, "未定义", "【永久】"),//
    //Array(1004147, 1000, "未定义", "【永久】"),//
    //Array(1004148, 1000, "未定义", "【永久】"),//
   //Array(1004325, 1000, "未定义", "【永久】"),//
    //Array(1004396, 1000, "未定义", "【永久】"),//

    Array(1003597, 1500, "未定义", "【永久】"),//
    Array(1112924, 1000, "未定义", "【永久】"),//
    Array(1012176, 1000, "未定义", "【永久】"),//
    Array(1702633, 3000, "未定义", "【永久】"),//
    Array(1115105, 1500, "未定义", "【永久】"),//
    Array(1115018, 1500, "未定义", "【永久】"),//
    Array(1115111, 1500, "未定义", "【永久】"),//
    Array(1115022, 1500, "未定义", "【永久】"),//
    Array(1112180, 1500, "未定义", "【永久】"),//
    Array(1112293, 1500, "未定义", "【永久】"),//
    Array(1112141, 1500, "未定义", "【永久】"),//
    Array(1112252, 1500, "未定义", "【永久】"),//
    Array(1112143, 1500, "未定义", "【永久】"),//
    Array(1112254, 1500, "未定义", "【永久】"),//
    Array(1112154, 1500, "未定义", "【永久】"),//
    Array(1112266, 1500, "未定义", "【永久】"),//
    Array(1112162, 1500, "未定义", "【永久】"),//
    Array(1112274, 1500, "未定义", "【永久】"),//
    Array(1112190, 1500, "未定义", "【永久】"),//
    Array(1115003, 1500, "未定义", "【永久】"),//
    Array(1112193, 1500, "未定义", "【永久】"),//
    Array(1115006, 1500, "未定义", "【永久】"),//
    Array(1112194, 1500, "未定义", "【永久】"),//
    Array(1115007, 1500, "未定义", "【永久】"),//
    Array(1112196, 1500, "未定义", "【永久】"),//
    Array(1115009, 1500, "未定义", "【永久】"),//
    Array(1112195, 1500, "未定义", "【永久】"),//
    Array(1115008, 1500, "未定义", "【永久】"),//
    Array(1702669, 1000, "未定义", "【永久】"),//
    Array(1702660, 1000, "未定义", "【永久】"),//
    Array(1702640, 1000, "未定义", "【永久】"),//
    Array(1702598, 1000, "未定义", "【永久】"),//
    Array(1092108, 1000, "未定义", "【永久】"),//
    Array(1092112, 1000, "未定义", "【永久】"),//
    Array(1102747, 1000, "未定义", "【永久】"),//
    Array(1102759, 1000, "未定义", "【永久】"),//
    Array(1102778, 1000, "未定义", "【永久】"),//
    Array(1102789, 1000, "未定义", "【永久】"),//
    Array(1102800, 1000, "未定义", "【永久】"),//
    Array(1102801, 1000, "未定义", "【永久】"),//
    Array(1102855, 1000, "未定义", "【永久】"),//
    Array(1080008, 1000, "未定义", "【永久】"),//
    Array(1082685, 1000, "未定义", "【永久】"),//
    Array(1012555, 1000, "未定义", "【永久】"),//
    Array(1012556, 1000, "未定义", "【永久】"),//
    Array(1012427, 1000, "未定义", "【永久】"),//
    Array(1012428, 1000, "未定义", "【永久】"),//
    Array(1012429, 1000, "未定义", "【永久】"),//
    Array(1012430, 1000, "未定义", "【永久】"),//
    Array(1012431, 1000, "未定义", "【永久】"),//
    Array(1012432, 1000, "未定义", "【永久】"),//
    Array(1012433, 1000, "未定义", "【永久】"),//
    Array(1012434, 1000, "未定义", "【永久】"),//
    Array(1012435, 1000, "未定义", "【永久】"),//
    Array(1012436, 1000, "未定义", "【永久】"),//
    Array(1012473, 1000, "未定义", "【永久】"),//
    Array(1012485, 1000, "未定义", "【永久】"),//
    Array(1012501, 1000, "未定义", "【永久】"),//
    Array(1012502, 1000, "未定义", "【永久】"),//
    Array(1012503, 1000, "未定义", "【永久】"),//
    Array(1012506, 1000, "未定义", "【永久】"),//
    Array(1051483, 1000, "未定义", "【永久】"),//
    Array(1003279, 1000, "未定义", "【永久】"),//
    Array(1042314, 1000, "未定义", "【永久】"),//
    Array(1004757, 1000, "未定义", "【永久】"),//
    Array(1042357, 1000, "未定义", "【永久】")//

    );

var syxh = Array(
    Array(5211047, 0, "双倍经验", 1 * 1 * 1, 1)
    );

var tscl = Array(
    Array(4000151, 1000, 100), //时间门神的轴标
    Array(4001109, 1000, 5)//强化玻璃瓶
    );

var xswp = Array(
	Array(5000103,3000,"未定义","90天"),//
	Array(5000112,3000,"未定义","90天"),//
	Array(5000113,3000,"未定义","90天"),//
	Array(5000128,3000,"未定义","90天"),//
	Array(5000137,3000,"未定义","90天"),//
	Array(5000033,66666,"未定义","90天"),//波斯猫
	Array(5000032,3000,"未定义","90天"),//波斯猫
	Array(5000035,3000,"未定义","90天"),//波斯猫
	Array(5000030,3000,"未定义","90天"),//波斯猫
	Array(5000368,3000,"未定义","90天"),//波斯猫
	Array(5000369,3000,"未定义","90天"),//波斯猫
	Array(5000370,3000,"未定义","90天"),//波斯猫
	Array(5000371,3000,"未定义","90天"),//波斯猫
	Array(5000393,3000,"未定义","90天"),//波斯猫
	Array(5000375,3000,"未定义","90天"),//波斯猫
	Array(5000376,3000,"未定义","90天"),//波斯猫
	Array(5000377,3000,"未定义","90天"),//波斯猫
	Array(5000381,3000,"未定义","90天"),//波斯猫
	Array(5000382,3000,"未定义","90天"),//波斯猫
	Array(5000383,3000,"未定义","90天"),//波斯猫
	Array(5000385,3000,"未定义","90天"),//波斯猫
	Array(5000386,3000,"未定义","90天"),//波斯猫
	Array(5000391,3000,"未定义","90天"),//波斯猫
    Array(5000077,3000,"未定义","90天"),//波斯猫
    Array(5000256,3000,"未定义","90天"),//南瓜杰克
	Array(5000264,3000,"未定义","90天"),//跳跳袋鼠
	Array(5000274,3000,"未定义","90天"),//豆豆蛇
	Array(5000285,3000,"未定义","90天"),//鱼尾狮
	Array(5000290,3000,"未定义","90天"),//天使提尔
	Array(5000094,3000,"未定义","90天"),//稀有粉雪人
	Array(5000096,3000,"未定义","90天"),//稀有白色小象
	Array(5000288,3000,"未定义","90天"),//半半
	Array(5000289,3000,"未定义","90天"),//皮埃尔
	Array(5000013,3000,"未定义","90天"),//大象
	Array(5000017,3000,"未定义","90天"),//机器人
	Array(5000022,3000,"未定义","90天"),//火鸡
	Array(5000072,3000,"未定义","90天"),//臭鼬
	Array(5000081,3000,"未定义","90天"),//飞行小鲸鱼
	Array(5000205,3000,"未定义","90天"),//猩猩崩克
	Array(5000217,3000,"未定义","90天"),//黑暗灵魂
	Array(5000227,3000,"未定义","90天"),//小鲨鱼
	Array(5000324,3000,"未定义","90天"),//火柴人宠物
	Array(5000214,3000,"未定义","90天"),//雷黄小恶魔
	Array(5000251,3000,"未定义","90天"),//蓝小熊
	Array(5000268,3000,"未定义","90天")//甜心蝴蝶
    );


var jmpf = Array(
	Array(1102809, 1000, "未定义", "永久"), //死亡华尔兹
	Array(1102385, 1000, "未定义", "永久"), //
	Array(1102386, 1000, "未定义", "永久"), //
	Array(1102453, 1000, "未定义", "永久"), //
	Array(1102487, 1000, "未定义", "永久"), //
	Array(1102811, 1000, "未定义", "永久"), //
	Array(1102812, 1000, "未定义", "永久"), //
	Array(1102325, 1000, "未定义", "永久"), //紫天使羽翼
    Array(1102389, 1000, "未定义", "永久"), //金色天使
    Array(1102390, 1000, "未定义", "永久"), //银色天使
    Array(1102310, 1000, "未定义", "永久"), //精灵披风
    Array(1102218, 1000, "未定义", "永久"), //仙女飘飘
    Array(1102356, 1000, "未定义", "永久"), //天使祖母绿
    Array(1102380, 1000, "未定义", "永久"), //我的朋友青蛙酱
    Array(1102705, 1000, "未定义", "永久"), //企鹅书包
    Array(1102684, 1000, "未定义", "永久"), //未来医生听诊器
    Array(1102668, 1000, "未定义", "永久"), //夜天使之翼
    Array(1102270, 1000, "未定义", "永久") //风和日丽
    );


var jmmz = Array(
    Array(1004592, 1000, "未定义", "永久"), //紫色时间
    Array(1004591, 1000, "未定义", "永久"), //粉色时间
	Array(1002846, 1000, "未定义", "永久"), //华尔兹贝雷帽
	Array(1004472, 1000, "未定义", "永久"), //饿狼传说
	Array(1004250, 1000, "未定义", "永久"), //
	Array(1004450, 1000, "未定义", "永久"), //
	Array(1004126, 1000, "未定义", "永久"), //彩糖熊耳帽
	Array(1003748, 1000, "未定义", "永久"), //皇家天使帽
	Array(1003597, 1000, "未定义", "永久"), //金属冠棒球帽
	Array(1003538, 1000, "未定义", "永久"), //纽扣控玩具帽
	Array(1003955, 1000, "未定义", "永久"), //浪漫玫瑰
	Array(1001098, 1000, "未定义", "永久"), //恋恋蝴蝶发卡
	Array(1003859, 1000, "未定义", "永久"), //满天星普赛克
	Array(1003220, 1000, "未定义", "永久"), //尼龙花头绳
	Array(1003951, 1000, "未定义", "永久"), //欧黛特头箍
    Array(1003952, 1000, "未定义", "永久"), //欧黛特头箍
    Array(1003920, 1000, "未定义", "永久"), //夏威夷草帽
	Array(1002225, 1000, "未定义", "永久"), //圣诞节帽
	Array(1003861, 1000, "未定义", "永久"), //怀旧小皇冠
	Array(1003639, 1000, "未定义", "永久"), //荧光发箍-粉色
    Array(1003640, 1000, "未定义", "永久"), //荧光发箍-蓝色
    Array(1003642, 1000, "未定义", "永久"), //荧光发箍-金色
    Array(1003251, 1000, "未定义", "永久"), //8周年音符黄水晶
    Array(1003252, 1000, "未定义", "永久"), //8周年音符紫水晶
	Array(1003461, 1000, "未定义", "永久"), //玫瑰秀秀
	Array(1003548, 1000, "未定义", "永久"), //魔术师黑色礼帽
    Array(1003549, 1000, "未定义", "永久"), //魔术师黑色缎带
	Array(1003763, 1000, "未定义", "永久"), //黑色之翼首领帽
    Array(1003147, 1000, "未定义", "永久"), //天蓝女仆头饰
    Array(1004589, 1000, "未定义", "永久"), //侠盗猫眼罩
    Array(1004469, 1000, "未定义", "永久"), //爱情宣言
    Array(1004463, 1000, "未定义", "永久"), //方块兔帽子
    Array(1004414, 1000, "未定义", "永久"), //热腾腾包子帽
    Array(1004403, 1000, "未定义", "永久"), //嘻哈兔子
    Array(1004298, 1000, "未定义", "永久"), //泰迪萌犬帽(白)
    Array(1004299, 1000, "未定义", "永久"), //泰迪萌犬帽(白)
    Array(1004212, 1000, "未定义", "永久"), //晶莹精致丝带
    Array(1004211, 1000, "未定义", "永久"), //哈尼绒绒耳
    Array(1004026, 1000, "未定义", "永久"), //黑猫无边帽
    Array(1004029, 1000, "未定义", "永久"), //北极熊无边帽
	Array(1004491, 1000, "未定义", "永久"), //西红柿帽子
    Array(1003829, 1000, "未定义", "永久"), //兔耳管家礼帽
    Array(1003776, 1000, "未定义", "永久"), //海豹白白帽
    Array(1003131, 1000, "未定义", "永久"), //黑色精致丝带
    Array(1003006, 1000, "未定义", "永久"), //猫猫野营帽
    Array(1002976, 1000, "未定义", "永久"), //女仆头饰
    Array(1002885, 1000, "未定义", "永久"), //心型蝴蝶结
    Array(1002721, 1000, "未定义", "永久"), //狸毛护耳
    Array(1004570, 1000, "未定义", "永久"), //黑色海魂帽
    Array(1004571, 1000, "未定义", "永久"), //海贼团贝雷帽
	Array(1003084, 1000, "未定义", "永久") //帝国皇冠
    );


var jmsp = Array(
	Array(1092040, 1000, "未定义", "永久"), //
	Array(1112001, 1000, "未定义", "永久"), //
	Array(1112924, 1000, "未定义", "永久"), //
	Array(1112925, 1000, "未定义", "永久"), //
	Array(1112926, 1000, "未定义", "永久"), //
	Array(1012526, 1000, "未定义", "永久"), //
	Array(1012083, 1000, "未定义", "永久"), //
	Array(1012208, 1000, "未定义", "永久"), //害羞了 
    Array(1012131, 1000, "未定义", "永久"), //好白的牙
    Array(1012176, 1000, "未定义", "永久"), //娃娃脸
	Array(1012044, 1000, "未定义", "永久"), //
	Array(1012489, 1000, "未定义", "永久"), //
	Array(1012055, 1000, "未定义", "永久"), //
	Array(1012501, 1000, "未定义", "永久"), //不许咬羊
    Array(1022184, 1000, "未定义", "永久"), //烈焰之瞳(蓝)
    Array(1022183, 1000, "未定义", "永久"), //烈焰之瞳(红) 
    Array(1012412, 1000, "未定义", "永久"), //血泪 
	Array(1022248, 1000, "未定义", "永久"), //菠萝派对
	Array(1022044, 1000, "未定义", "永久"), //
	Array(1022244, 1000, "未定义", "永久"), //
	Array(1022241, 1000, "未定义", "永久"), //
	Array(1022043, 1000, "未定义", "永久"), //绷带
    Array(1022059, 1000, "未定义", "永久"), //经典黑色墨镜
    Array(1022063, 1000, "未定义", "永久"), //无框小圆眼镜
	Array(1032255, 1000, "未定义", "永久"), //白日梦耳机
	Array(1032038, 1000, "未定义", "永久"), //
	Array(1032233, 1000, "未定义", "永久"), //
	Array(1032063, 1000, "未定义", "永久"), //
    Array(1032034, 1000, "未定义", "永久"), //七七耳环
    Array(1032094, 1000, "未定义", "永久"), //胡萝卜耳环
    Array(1032088, 1000, "未定义", "永久") //体力猎犬耳环
    );

var cwjn = Array(
	Array(5170000, 600, "未定义", "永久"), //
	Array(5180000, 1000, "未定义", "永久"), //
	Array(5380000, 1500, "未定义", "永久"), //
	Array(5190000, 1000, "未定义", "永久"), //
	Array(5190001, 1000, "未定义", "永久"), //
	Array(5190002, 1000, "未定义", "永久"), //
	Array(5190003, 1000, "未定义", "永久"), //
	Array(5190006, 1000, "未定义", "永久"), //
    Array(5191000, 1000, "未定义", "永久"), //
    Array(5191001, 1000, "未定义", "永久"), //
	Array(5191002, 1000, "未定义", "永久"), //
	Array(5191003, 1000, "未定义", "永久")
    );
	
var txwq = Array(
    Array(1702350, 1000, "未定义", "永久"), //巧克力蛋糕魔法棒
    Array(1702466, 1000, "未定义", "永久"), //薄荷巧克力蛋糕棒
    Array(1702468, 1000, "未定义", "永久"), //松脆巧克力干酪棒
	Array(1004250, 1000, "未定义", "永久"), //星星糖果雪糕
	Array(1702417, 1000, "未定义", "永久"), //苍恋玫瑰阳伞
    Array(1702342, 1000, "未定义", "永久"), //奥尔卡的兔娃娃
    Array(1702352, 1000, "未定义", "永久"), //奶茶搅拌勺
    Array(1702357, 1000, "未定义", "永久"), //坠星魔术空间
    Array(1702367, 1000, "未定义", "永久"), //玫瑰苏菲亚
    Array(1702368, 1000, "未定义", "永久"), //黑暗蝴蝶魔棒
    Array(1702371, 1000, "未定义", "永久"), //舞杖
    Array(1702372, 1000, "未定义", "永久"), //圣杯武器
    Array(1702375, 1000, "未定义", "永久"), //亚特兰蒂斯
    Array(1702390, 1000, "未定义", "永久"), //喵喵雨伞
    Array(1702400, 1000, "未定义", "永久"), //斯乌的兔子玩偶
    Array(1702401, 1000, "未定义", "永久"), //兔子萝卜武器
    Array(1702402, 1000, "未定义", "永久"), //高尔夫球棒
    Array(1702403, 1000, "未定义", "永久"), //侦探的巨型放大镜
    Array(1702415, 1000, "未定义", "永久"), //睡梦绵羊枕头
    Array(1702422, 1000, "未定义", "永久"), //冒险明星麦克风
    Array(1702423, 1000, "未定义", "永久"), //鬼火
    Array(1702426, 1000, "未定义", "永久"), //暴风领主
    Array(1702442, 1000, "未定义", "永久"), //棒球棒
    Array(1702444, 1000, "未定义", "永久"), //费尔玛塔
    Array(1702446, 1000, "未定义", "永久"), //和海懒一起
    Array(1702456, 1000, "未定义", "永久"), //精灵皮克
    Array(1702457, 1000, "未定义", "永久"), //冬天里的雪糕
    Array(1702459, 1000, "未定义", "永久"), //棉花糖武器
    Array(1702460, 1000, "未定义", "永久"), //星星武器
    Array(1702463, 1000, "未定义", "永久"), //幻夜祭华
    Array(1702464, 1000, "未定义", "永久"), //闪耀的伙伴们
    Array(1702473, 1000, "未定义", "永久"), //岩炎执行者
    Array(1702480, 1000, "未定义", "永久"), //月亮女神
    Array(1702485, 1000, "未定义", "永久"), //大包小包
    Array(1702486, 1000, "未定义", "永久"), //茶花纷飞
    Array(1702487, 1000, "未定义", "永久"), //花红
    Array(1702521, 1000, "未定义", "永久"), //青炎
    Array(1702488, 1000, "未定义", "永久"), //邦尼的胡萝卜
    Array(1702501, 1000, "未定义", "永久"), //玫瑰花舞
    Array(1702503, 1000, "未定义", "永久"), //巴尼兔的七七泡沫
    Array(1702504, 1000, "未定义", "永久"), //冰封之心
    Array(1702505, 1000, "未定义", "永久"), //粉七七熊的竹节
    Array(1702593, 1000, "未定义", "永久"), //清冷天空竹子
    Array(1702509, 1000, "未定义", "永久"), //彩棒糖
    Array(1702510, 1000, "未定义", "永久"), //兔兔熊手电筒
    Array(1702512, 1000, "未定义", "永久"), //主人公权杖
    Array(1702528, 1000, "未定义", "永久"), //木琴旋律
    Array(1702530, 1000, "未定义", "永久"), //莎啦啦糖果
    Array(1702533, 1000, "未定义", "永久"), //奶兔立拍得
    Array(1702534, 1000, "未定义", "永久"), //七七奶嘴
    Array(1702538, 1000, "未定义", "永久"), //露珠武器
    Array(1702544, 1000, "未定义", "永久"), //啦啦啦~甩葱
    Array(1702549, 1000, "未定义", "永久"), //炫彩星星棒
    Array(1702550, 1000, "未定义", "永久"), //桃太郎武器
    Array(1702556, 1000, "未定义", "永久"), //刀
    Array(1702557, 1000, "未定义", "永久"), //清扫掸子
    Array(1702559, 1000, "未定义", "永久"), //泰迪小伙伴（白）
    Array(1702561, 1000, "未定义", "永久"), //叉子上的蛋糕
    Array(1702562, 1000, "未定义", "永久"), //圣诞老人
    Array(1702565, 1000, "未定义", "永久"), //死亡之刃
    Array(1702570, 1000, "未定义", "永久"), //绿野仙兔
    Array(1702571, 1000, "未定义", "永久"), //功夫小熊
    Array(1702576, 1000, "未定义", "永久"), //吭吭哐哐！
    Array(1702577, 1000, "未定义", "永久"), //金鱼泡泡兜
    Array(1702579, 1000, "未定义", "永久"), //水晶喵喵武器
    Array(1702581, 1000, "未定义", "永久"), //三色蛋糕串串
    Array(1702583, 1000, "未定义", "永久"), //喵咪薯片桶
    Array(1702584, 1000, "未定义", "永久"), //可爱小狗
    Array(1702586, 1000, "未定义", "永久"), //梦想蒲公英
    Array(1702594, 1000, "未定义", "永久"), //奥尔卡瞌睡
    Array(1702595, 1000, "未定义", "永久"), //薄荷喵下午茶
    Array(1702597, 1000, "未定义", "永久"), //七七贝壳武器
    Array(1702598, 1000, "未定义", "永久"), //枫叶武器
    Array(1702607, 1000, "未定义", "永久"), //拔丝萝卜
    Array(1702608, 1000, "未定义", "永久"), //海军条纹雨伞
    Array(1702617, 1000, "未定义", "永久"), //七七莲花武器
    Array(1702620, 1000, "未定义", "永久"), //神秘骰子
    Array(1702626, 1000, "未定义", "永久"), //海洋封提包
    Array(1702627, 1000, "未定义", "永久"), //樱花之刃
    Array(1702637, 1000, "未定义", "永久"), //音乐律动武器箱
    Array(1702669, 1000, "未定义", "永久"), //公主日记武器
    Array(1702675, 1000, "未定义", "永久"), //绒绒雪妖精
    Array(1702334, 1000, "未定义", "永久"), //水晶七七曲
    Array(1702347, 1000, "未定义", "永久"), //怪盗幻影权杖 
    Array(1702397, 1000, "未定义", "永久")//溢彩银河
    );

var gfs = Array(
    Array(1003393, 3000, "未定义", "永久"), //帝国伯爵冠
    Array(1102381, 3000, "未定义", "永久"), //皇家公爵翅膀
    Array(1032233, 3000, "未定义", "永久"), //粉色桃心耳环
    Array(1002839, 3000, "未定义", "永久"), //南瓜棒球帽
    Array(1112928, 3000, "未定义", "永久"), //粉色流星戒指90天
    Array(1112924, 3000, "未定义", "永久"), //黄色流星戒指90天
    Array(1112930, 3000, "未定义", "永久"), //西红柿效果-90天
    Array(1112916, 3000, "未定义", "永久"), //寂寞单身戒指
    Array(5010069, 3000, "未定义", "永久"), //死神之翼
    Array(1042271, 3000, "未定义", "永久"), //外星人拼色T恤
    Array(1042321, 3000, "未定义", "永久"), //心花怒放T恤
    Array(1042260, 3000, "未定义", "永久"), //点点星光羊毛上衣
    Array(1050284, 3000, "未定义", "永久"), //派对公子服(男)
    Array(1050302, 3000, "未定义", "永久"), //执事之品格(男)
    Array(1000052, 3000, "未定义", "永久"), //公主冠（男）
    Array(1052731, 3000, "未定义", "永久"), //黑色可爱游泳服
    Array(1052634, 3000, "未定义", "永久"), //简洁白衬衫
    Array(1052209, 3000, "未定义", "永久"), //皇家海军制服
    Array(1050152, 3000, "未定义", "永久"), //水兵服男
    Array(1052201, 3000, "未定义", "永久"), //闪亮水手外套
    Array(1004108, 3000, "未定义", "永久"), //幻夜蝶华礼帽
    Array(1003247, 3000, "未定义", "永久"), //杂技团老板帽
    Array(1003272, 3000, "未定义", "永久"), //格莱特帽
    Array(1003276, 3000, "未定义", "永久"), //蓝心透明帽子
    Array(1003271, 3000, "未定义", "永久"), //红心透明帽子
    Array(1003918, 3000, "未定义", "永久"), //翅膀帽
    Array(1004029, 3000, "未定义", "永久"), //小白熊便帽
    Array(1004026, 3000, "未定义", "永久"), //小黑猫便帽
    Array(1004028, 3000, "未定义", "永久"), //小花猫便帽
    Array(1004027, 3000, "未定义", "永久"), //白猫无边帽 
    Array(1003955, 3000, "未定义", "永久"), //浪漫玫瑰
    Array(1004094, 3000, "未定义", "永久"), //白巧克力兔子发箍
    Array(1004193, 3000, "未定义", "永久"), //护目镜帽子
    Array(1003892, 3000, "未定义", "永久"), //树叶钻石
    Array(1002846, 3000, "未定义", "永久"), //蓝天贝雷帽
    Array(1002995, 3000, "未定义", "永久"), //皇家海军帽
    Array(1003748, 3000, "未定义", "永久"), //皇家天使帽
    Array(1702168, 3000, "未定义", "永久"), //闪亮圣诞树
    Array(1702278, 3000, "未定义", "永久"), //枫之武器
    Array(1702211, 3000, "未定义", "永久"), //亮丽雪片
    Array(1702289, 3000, "未定义", "永久"), //皇家海军旗帜
    Array(1702287, 3000, "未定义", "永久"), //唤灵斗师长杖
    Array(1702277, 3000, "未定义", "永久"), //密码签字笔
    Array(1702309, 3000, "未定义", "永久"), //多味棒棒糖
    Array(1702155, 3000, "未定义", "永久"), //绚丽七七
    Array(1102605, 3000, "未定义", "永久"), //暗炎赎罪者
    Array(1102671, 3000, "未定义", "永久"), //肃清者的荆翼
    Array(1102564, 3000, "未定义", "永久"), //天衣无缝
    Array(1102267, 3000, "未定义", "永久")//我的朋友九尾狐尾巴

    );


var stxz = Array(
    Array(1082581, 1000, "未定义", "永久"), //巧克力发带装饰
	Array(1080008, 1000, "未定义", "永久"), //
	Array(1081014, 1000, "未定义", "永久"), //
	Array(1082685, 1000, "未定义", "永久"), //
	Array(1082249, 1000, "未定义", "永久"), //
    Array(1082503, 1000, "未定义", "永久"), //圣洁天使手镯
    Array(1082548, 1000, "未定义", "永久"), //星星手镯
	Array(1082312, 1000, "未定义", "永久"), //七七护腕
	Array(1082493, 1000, "未定义", "永久"), //海豹白白手套
	Array(1072437, 1000, "未定义", "永久"), //PB拖拖
	Array(1072843, 1000, "未定义", "永久"), //
	Array(1071078, 1000, "未定义", "永久"), //
	Array(1072337, 1000, "未定义", "永久"), //
	Array(1072910, 1000, "未定义", "永久"), //
	Array(1072893, 1000, "未定义", "永久"), //
	Array(1072867, 1000, "未定义", "永久"), //
    Array(1072749, 1000, "未定义", "永久"), //泡泡巧克力鞋子
    Array(1072931, 1000, "未定义", "永久"), //爱丽丝鞋子
    Array(1072901, 1000, "未定义", "永久"), //五彩珠鞋
    Array(1072917, 1000, "未定义", "永久"), //小马乖乖鞋
    Array(1072852, 1000, "未定义", "永久"), //超级巨星鞋子
    Array(1072388, 1000, "未定义", "永久"), //女仆礼鞋 
    Array(1071026, 1000, "未定义", "永久"), //巨星潮流靴
    Array(1072407, 1000, "未定义", "永久") //HELLO喵喵拖

    );


var status = 0;
var xx = -1;
var jiage = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b好的,下次再见.");
        cm.dispose();
    } else {

        if (mode == 0) {
            cm.sendOk("#b好的,下次再见.");
            cm.dispose();
            return;
        }

        if (mode == 1) {
            status++;
        } else {
            status--;
        }

         if (status == 0) {

            if (selection == 0) {

                var add = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";

                add += "              #r欢迎来到月月冒险岛宠物商城#k\r\n";
				
				add += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";

                add += "      #L5#"+小烟花+"#r宠物商店"+小烟花+"#l     #L2#"+小烟花+"#b宠物技能"+小烟花+"#l";

                cm.sendSimple(add);

            }

        } else if (status == 1) {

            if (selection == 2) {

                var add = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";

                add += "              #r欢迎来到月月冒险岛宠物技能#k\r\n";
				
				add += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";

                for (var i = 0; i < cwjn.length; i++) {

                    add += "    #r#L" + i + "##v" + cwjn[i][0] + "##z" + cwjn[i][0] + "##l#d\r\n\r\n";

                    add += "                                需要点卷:#r " + cwjn[i][1] + "\r\n";

                }

                cm.sendSimple(add);

                xx = 2

            } else if (selection == 5) {
				
                var add = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";

                add += "              #r欢迎来到月月冒险岛宠物商店#k\r\n";
				
				add += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";

                for (var i = 0; i < xswp.length; i++) {

                    add += "    #r#L" + i + "##v" + xswp[i][0] + "##z" + xswp[i][0] + "##l#d\r\n\r\n";

                    add += "                                需要点卷:#r " + xswp[i][1] + "\r\n";

                }

                cm.sendSimple(add);

                xx = 5
			}
			
        } else if (status == 2) {

            if (xx == 2) {

                var add = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";

                add += "              #r欢迎来到月月冒险岛宠物技能#k\r\n";
				
				add += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";

                add += "       #r#v" + cwjn[selection][0] + "# #z" + cwjn[selection][0] + "#\r\n";

                add += "                                #b需要点卷:#r " + cwjn[selection][1] + "\r\n";

                add += "               #L2#"+小烟花+"确认立即购买"+小烟花+"#l\r\n";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 5) {

                var add = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";

                add += "              #r欢迎来到月月冒险岛宠物商城#k\r\n";
				
				add += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";

                add += "       #r#v" + xswp[selection][0] + "# #z" + xswp[selection][0] + "#\r\n";

                add += "                                #b需要点卷:#r" + xswp[selection][1] + "\r\n";

                add += "               #L5#"+小烟花+"确认立即购买"+小烟花+"#l\r\n";

                cm.sendSimple(add);

                jiage = selection;

            }

        } else if (status == 3) {

			if (selection == 2) {
                if (cm.getPlayer().getCSPoints(1) >= cwjn[jiage][1]) {
					item = cm.gainGachaponItem(cwjn[jiage][0], 1, "宠物商城", 1);
					if (item != -1) {
						cm.sendOk("你获得了#b#v" + item + "##t" + item + "##k！");
						cm.getPlayer().modifyCSPoints(1, -cwjn[jiage][1]);
					} else {
						cm.sendOk("#r请确认你的背包是否有足够的空间！");
					}
                    cm.dispose();
                } else {
                    cm.sendOk("#r你没有足够的点卷，无法购买！");
                    cm.dispose();
                }

            } else if (selection == 5) {
                if (cm.getPlayer().getCSPoints(1) >= xswp[jiage][1]) {
                    cm.sendOk("#r恭喜你，购买成功，请查看背包！");
                    cm.getPlayer().modifyCSPoints(1, -xswp[jiage][1]);
					cm.gainPet(xswp[jiage][0],xswp[jiage][2],1,100,100,90);
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#r你没有足够的点卷，无法购买！");
                    cm.dispose();
                }
			}
        }
	}
}