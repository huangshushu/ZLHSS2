
var charid;
var hairnew = Array();
var facetype = Array();
var haircolor = Array();
var a = 0;
var selects;
var isSecond = false;

//每次使用的元宝数量
var nxPrice = 20;


//男发
var mhair2 = Array(
					33370, //黑色不均衡发型
                    33320, //黑色豹弩男发型
                    33970, //黑色爆气勇士发型
                    30320, //黑色爆炸头
                    30260, //黑色边分1
                    33070, //黑色辫子头
                    33730, //黑色波浪马尾辫
                    33370, //黑色不均衡发型
                    36820, //黑色布雷斯发型
                    36230, //黑色层次发型
                    36910, //黑色超胆侠发型
                    36720, //黑色超级巨星发型-男神1号
                    36810, //黑色超级巨星发型-男神2号
                    30110, //黑色朝天发型
                    30880, //黑色潮流发型
                    36290, //黑色潮男短发
                    35220, //黑色潮男发型
                    33660, //黑色潮男气质短发
                    40260, //黑色潮男碎发
                    33060, //黑色城市男孩发型
                    33300, //黑色虫虫发型
                    30400, //黑色虫虫头
                    30550, //黑色传统发式
                    35720, //黑色纯真年代发型
                    33930, //黑色粗犷男人发型
                    30870, //黑色粗旷发型
                    30740, //黑色大光头
                    35550, //黑色呆萌宝宝发型
                    35460, //黑色呆萌少年发型
                    36580, //黑色蛋糕卷发型
                    33820, //黑色刀刃发型
                    35510, //黑色迪伦发型
                    36630, //黑色电蓬发型
                    30890, //黑色东方神秘发
                    40040, //黑色冬雪发型
                    36920, //黑色动漫少年发型  
					35270, //黑色都教授发型
                    33420, //黑色独角辫
                    33720, //黑色独角兽发型
                    33750, //黑色端正柔顺发型
                    36400, //黑色短卷发
                    33530, //黑色恶魔发型
                    36740, //黑色海藻头发型
                    36590, //黑色害羞宝宝头
                    30080, //黑色罕见发型
                    30520, //黑色恨特思
                    33460, //黑色后倒发型
                    33340, //黑色后翘翘发型
                    30250, //黑色花菜头
                    33940, //黑色花花少爷发型
                    30350, //黑色花刘海发型
                    33520, //黑色花样美男发型
                    30910,//黑色花样男子发型
					
                    35620, //黑色花样欧巴发型
                    35780, //黑色花样少年发型
                    33100, //黑色怀旧少爷发
                    33190, //黑色唤灵I男发型
                    36020, //黑色火魔发型
                    33990, //黑色火焰男发型
                    30360, //黑色火隐鹿丸头
                    33830, //黑色疾风发型
                    33170, //黑色佳佳发型
                    36470, //黑色尖兵男发型
                    36210, //黑色尖刺发型
                    36750, //黑色简约发型
                    30720, //黑色街头艺人发型
                    33440, //黑色街舞明星发型
                    30560, //黑色精悍短发
                    36980, //黑色精灵王子发型
                    40090, //黑色精英特工发型
                    35240, //黑色镜头感发型
                    35520, //黑色就是任性发型
                    35050, //黑色飓风发型
                    36150, //黑色撅撅发型
                    30950, //黑色俊美中发
                    36600, //黑色坎纳男孩发型
                    33950, //黑色看不见发型
                    33140, //黑色可爱啾啾头
                    36140, //黑色可爱洋葱发型
                    33610, //黑色克洛乌发型
                    35690, //黑色空气感碎发
                    30540, //黑色酷发
                    36550, //黑色狂欢朋克发型
                    33050, //黑色狂狮发型
                    30440, //黑色狂野发
                    33780, //黑色狂野精神发型
                    30270, //黑色瘌痢头
                    35600, //黑色蓝莓之恋发型
                    35110, //黑色浪客发型
                    33360, //黑色老克勒发型
                    33470, //黑色冷峻发型
                    36040, //黑色冷酷城市发型
                    36360, //黑色栗子发型
                    33710, //黑色亮泽小尾巴发型
                    30120, //黑色靓仔发型
                    36220, //黑色邻家小弟发型
                    30850, //黑色运动发型
                    36530, //黑色张扬发型
                    30230, //黑色长刺发
                    30060, //黑色长甩发型
                    36710, //黑色遮眼发型
                    33180, //黑色真相发型
                    36420, //黑色指挥家发型
                    35430, //黑色质感碎发发型
                    30170, //黑色中板寸
                    30300, //黑色中垂发
                    30340, //黑色中分披肩发
                    36250, //黑色忠厚的勇士发型
                    33120, //黑色自闭发型
                    30420, //黑色宗次郎头
                    36560, //黑色하이브리드헤어
                    30070, //黄色黄鸟发型
                    30090, //黄色喔喔鸡发型
                    30100, //蓝色菜菜发型
                    30430, //男生大光头
                    36200, //蓬松头发（黑）
                    36280, //披肩发（黑）
                    36190, //闪耀发型
                    35540, //温柔短发
                    35830, //阴阳师后扎发型(黒)
                    35820, //阴阳师长发(黒)
                    33450, //银灰精灵发型
                    33160, //银色利琳发型(男)
                    33110, //银色一辉发型
                    33040, //银色战神男发型
                    36780, //勇士部落发型
                    36170 //优雅发型
);
//女发
var fhair2 =Array(
                    37970, //奥利维亚发型
                    38310, //白色巴尼女孩发型
                    34290, //白色唤灵女发型
                    34480, //白色机械师女性发型
                    37060, //白色人鱼公主发型
                    34090, //白色战神头
                    31800, //超级明星美发型
                    37570, //初心者发型
                    31260, //黑色2046之王靖雯头
                    31700, //黑色CUTY BABY
                    34060, //黑色gaga头
                    38600, //黑色My Girl发型
                    38580, //黑色Sunshine Girl发型
                    37200, //黑色S波浪长发
                    34770, //黑色阿莉亚发型
                    34200, //黑色暗影女发型
                    38590, //黑色奥德赛发型
                    37000, //黑色奥尔卡发型
                    37850, //黑色奥利维亚发型
                    37820, //黑色奥罗拉发型
                    37030, //黑色白富美发型
                    37670, //黑色斑驳发型
                    38470, //黑色宝贝甜心发型
                    34190, //黑色豹弩I女发型
                    34300, //黑色豹弩女发型
                    37140, //黑色爆莉萌天使发型
                    31040, //黑色边分翘发
                    31300, //黑色辫辫发型
                    31030, //黑色辫子
                    38480, //黑色冰雪气质发型
                    34040, //黑色波波头
                    37410, //黑色波兰发型
                    34730, //黑色波浪蓬蓬头
                    34120, //黑色波希米亚发型
                    41410, //黑色不对称发型 
                    41360, //黑色布莱尔女士发型  
                    34750, //黑色侧扎长波浪发型
                    38050, //黑色层次感碎发
                    37710, //黑色超级巨星发型-女神1号
                    38100, //黑色超级巨星发型-女神2号
					
                    34010, //黑色空气卷发型
                    41090, //黑色空气刘海发型
                    37530, //黑色满天星发型
                    34450, //黑色猫咪发型
                    34510, //黑色美人鱼发型
                    37730, //黑色魅力短发
                    34780, //黑色魅力卷发
                    34870, //黑色萌动发型
                    37690, //黑色萌萌狐仙发型
                    37920, //黑色萌萌兔耳发型
                    38360, //黑色梦幻短发发型
                    37760, //黑色梦幻女生发型
					
                    37940, //黑色梦幻飘逸长发
                    37960, //黑色梦幻飘逸长发
                    37660, //黑色梦魔发型
                    34660, //黑色迷你兔兔发型
                    37310, //黑色棉花糖发型
                    37440, //黑色茉莉发型
                    37300, //黑色木灵发型
                    31270, //黑色妞妞头
                    37280, //黑色牛角发型
                    37910, //黑色牛角面包发型
                    31070, //黑色浓密卷发
                    37240, //黑色诺巴短发发型
                    37250, //黑色诺巴长卷发型
                    38070, //黑色女版草莓初恋发型
                    31590, //黑色女神发型
                    31840, //黑色女性爆炸发型
                    37720, //黑色帕帕亚发型
                    37630, //黑色泡泡卷发型
                    31410, //黑色配角头
                    34360, //黑色蓬松麻花辫
                    31360, //黑色蓬松马尾发型
                    31750, //黑色蓬松松卷发
                    37800, //黑色皮皮长发
                    38940, //黑色飘逸梦幻发型
                    37180, //黑色苹果啾啾发型
                    34740, //黑色骑士发型
                    31930, //黑色气质OL发型
                    38410, //黑色气质淑女发型
                    31230, //黑色俏丽麻花辫
                    38160, //黑色俏皮妞妞发型
                    38800, //黑色俏皮小呆毛发型
                    38080, //黑色俏皮小乖发型
                    38740, //黑色俏皮小妞
                    38220, //黑色翘麻花发型
                    38400, //黑色轻舞飞扬发型
                    41080, //黑色轻盈少女马尾
					
                    37130, //黑色清纯的圆鼓鼓发型
                    31130, //黑色清纯女发
                    41190, //黑色清纯束发
                    31330, //黑色清纯学生发型
                    31830, //黑色沙宣发型
                    31880, //黑色杉菜发型
                    41340, //黑色闪烁之星发型 
                    31910, //黑色上海小姐发型
                    38130, //黑色上弦月发型  
                    38350, //黑色时尚潮女发型
                    31720, //黑色时尚挑染发型
                    31350, //黑色手鞠头
                    31140, //黑色书童女
                    31110, //黑色淑女头
                    37220, //黑色双层质感长发
                    34140, //黑色双刀I女发型
                    31560, //黑色双色发
                    31850, //黑色水貂发型
                    38760, //黑色水晶女孩
                    38630, //黑色水漾女生发型
                    37290, //黑色睡意慵懒发型
                    37340, //黑色丝柔发型
                    34240, //黑色厮守发型
                    31080, //黑色四六分
					  34970, //黑色苏子叶发型
                    38650, //黑色随意马尾发型
                    31940, //黑色随意长卷发
                    37590, //黑色隼人马尾辫
                    34620, //黑色糖果蓬蓬发型
                    37100, //黑色桃乐丝发型
                    34470, //黑色淘气女孩苹果头
                    38790, //黑色淘气女生发型
                    37680, //黑色天然直发发型
                    38110, //黑色恬静女生发型
                    38700, //黑色甜美淑女发型
                    38710, //黑色甜美淑女发型
                    34800, //黑色甜蜜冰沙发型
                    31610, //黑色甜蜜蜜发型
                    31740, //黑色甜甜卷
                    31450, //黑色甜心发型
                    31340, //黑色调皮乖乖头
                    31890, //黑色调皮少女发型
                    37090, //黑色婷可贝鲁发型
                    38330, //黑色童稚发型
                    34460, //黑色秃头
                    31760, //黑色娃娃辫子
                    31250, //黑色娃娃头
                    37010, //黑色瓦莱莉发型
                    37500, //黑色维丽尔发型
                    37930, //黑色未来女战士发型
                    38060, //黑色温婉发型
                    34260, //黑色雯子花苞头
                    38040, //黑色我的公主发型
                    34080, //黑色我正烫发发型
                    34990, //黑色武道魂发型
                    34940, //黑色希纳斯发型
                    34830, //黑色希神发型
                    37830, //黑色悠悠发型
                    34540, //黑色原子发型
                    37110, //黑色圆圆贝壳发型
                    38020, //黑色月光天使发型
                    34860, //黑色月光妖精发型
                    34320, //黑色月下佳人发型
                    34110, //黑色宅女发型
                    31150, //黑色长发
                    31520, //黑色长烫发
                    31540, //黑色真发
                    31050, //黑色直发
                    31010, //黑色中分翘发
                    31470, //黑色中国女孩发型
                    34650, //黑色中华发型
                    31280, //黑色中碎发
                    31120, //黑色中学女生
                    37550, //黑色볼륨 뽕머리
                    34220, //黑色猪小七发型
                    37320, //黑色紫丁香发型
                    34130, //黑色自闭发型
                    31790, //黑色自然卷发型
                    37540, //黑色삐죽 양갈래머리
                    38670, //活力短发
                    37770, //魔法密林发型
                    37790, //诺特勒斯发型
                    38900, //女剑客短发(黒)
                    38890, //女剑客长发(黒)
                    31430, //女生大光头
                    37080, //披肩发（黑）
                    38660, //清爽发型
                    37070, //闪耀发型
                    37780, //射手村发型
                    37270, //娃娃头（黑）
                    34420, //银灰精灵发型
                    34180, //银色波浪马尾发型
                    34160, //银色利琳发型(女)
                    34050, //银色战神女发型
                    37040 //优雅发型
)
var skin = Array(1, 2, 3, 4,6,7,8, 9, 10); // 皮肤id
//男脸
var face1 = Array(
20035,
25719,
23041,
23086,
20898,
20844,
20068,
20064,
23010,
20044,
20061,
20833,
20187,
20046,
23056,
23020,
26447,
23418);
//女脸
var face2 = Array(26105,
21333,
21336,
21341,
21382,
21344,
21345,
21377,
24407,
21342,
21331,
21399,
25751,
24350,
21364,
21380,
24384,
21360,
24401,
26125);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (a == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (a >= 1 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            a++;
        else
            a--;
        if (a == 0) {

			if (cm.getChar().getAndroid() == null) {
				cm.sendOk("没有智能机器人的话，我什么都做不了。你能带着智能机器人一起来吗？");
				cm.dispose();
				return;
			} 

			var str1 = "<" + cm.getServerName() + "> 自选智能机器人造型\r\n";
			str1 += "#g#r 每次自选需要 "+nxPrice+" #g元宝,当前元宝："+cm.getHyPay(1)+"\r\n#b";
            str1 += "#L0# 自选发型。#l\r\n"
            //str1 += "#L1# 自选发色。#l\r\n"
            str1 += "#L4# 自选脸型。#l\r\n"
           // str1 += "#L2# 自选肤色。#l\r\n"
            str1 += "#L3# 返回#l\r\n"
            cm.sendSimpleS(str1, 9);
        } else if (a == 1) {
			if(cm.getHyPay(1) < nxPrice){
                cm.sendOk("你没有 "+nxPrice+" 元宝,无法更改造型");
				cm.dispose();
				return;
			}
            selects = selection;
            if (selection == 0) {
                hairnew = Array();
                if (cm.getAndroidStat("GENDER") == 0) {
                    for (var i = 0; i < mhair2.length; i++) {
                        hairnew.push(mhair2[i]);
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair2.length; i++) {
                        hairnew.push(fhair2[i]);
                    }
                }

                cm.sendAStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 0, false);
            } else if (selection == 1) {
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendAStyle("我可以改变你的发色,让它比现在看起来漂亮. 你为什么不试着改变它下? 我将会帮你改变你的发色,那么选择一个你想要的新发色吧!", haircolor, 0, false);
            } else if (selection == 2) {
                cm.sendAStyle("用我们特殊开发的机器可查看护肤后的效果噢,想换成什么样的皮肤呢？请选择～~", skin, 0, false);
            } else if (selection == 4) {
				 if (cm.getAndroidStat("GENDER") == 0) {
                    for (var i = 0; i < face1.length; i++) {
                        facetype.push(face1[i]);
                    }
				} else {
                    for (var i = 0; i < face2.length; i++) {
                        facetype.push(face2[i]);
                    }
				 }
				cm.sendAStyle("请预留“特殊栏”一格位置", facetype, 5152057, isSecond);
            } else if (selection == 3) {
				cm.dispose();
            } 
        } else if (a == 2) {
            a = -1;
            if (selects == 0) {
                if (typeof (hairnew[selection]) == "undefined") {
                    cm.sendSimpleS("你不可以换成光头喔！！请返回重新选择！#b\r\n#L0# 返回重新选择。", 9);
                } else {
					cm.addHyPay(nxPrice);
                    cm.setAvatarA(hairnew[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的发型吗？");
					cm.dispose();
                }
            } else if (selects == 1) {
                if (typeof (haircolor[selection]) == "undefined") {
                    cm.sendSimpleS("你不可以换成光头喔！！请返回重新选择！#b\r\n#L0# 返回重新选择。", 9);
                } else {
					cm.addHyPay(nxPrice);
                    cm.setAvatarA(haircolor[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的颜色吗？");
					cm.dispose();
                }
            } else if (selects == 2) {
                if (typeof (skin[selection]) == "undefined") {
                    cm.sendSimpleS("皮肤的设置好像有点问题，再看看~~#b\r\n#L0# 返回重新选择。", 9);
                } else {
					cm.addHyPay(nxPrice);
                    cm.setAvatarA(skin[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的皮肤吗？");
					cm.dispose();
                }
            }  else if (selects == 4) {
                if (typeof (facetype[selection]) == "undefined") {
                    cm.sendSimpleS("头发选项好像有点问题，再看看~~#b\r\n#L0# 返回重新选择。", 9);
                } else {
					cm.addHyPay(nxPrice);
					cm.gainItem(5152057,1);
					cm.setAvatarA(5152057,facetype[selection]);
                    cm.sendOk("哎哟~喜欢你现在新的脸型吗？");
					cm.dispose();
                }
            } 
        } 
    } //mode
}
