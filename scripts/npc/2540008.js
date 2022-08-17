/* 
 *
 *  
 *  功能：起源之塔 第39层 NPC 问答王
 *  
 *
 */

/* global cm, java */

var status = -1;
var temp = new Array();
//存在的怪物
//
var MobName = Array("三尾狐",
        "蓝刺豚",
        "蘑菇仔",
        "红蜗牛",
        "仙人掌宝宝",
        "玩具战机",
        "猴子",
        "红色毒蛙",
        "木面怪人",
        "石面怪人",
        "青蛇",
        "刺蘑菇",
        "公沙沙兔",
        "斧木妖",
        "火焰半人马",
        "血腥哈维",
        "大海马",
        "追忆的神官",
        "忘却的祭司",
        "黄蜂将军",
        "九尾狐",
        "狼人",
        "蝙蝠怪",
        "帕兹王",
        "小石球",
        "沙鼠",
        "红花蛇",
        "苔藓木妖",
        "大幽灵",
        "黑食人花",
        "鳄鱼"
        );

//存在的NPC
var NPCName = Array("赫丽娜",
        "拉里克",
        "洛亚",
        "兴儿",
        "达尔米",
        "尤塔",
        "伊贝赫",
        "拉娜",
        "蒂娜",
        "艾宁",
        "坦坦",
        "迪亚",
        "露比",
        "萨皮",
        "佩里",
        "阿米",
        "艾宁",
        "南哈特",
        "奥兹",
        "玛兹拉",
        "雅思敏",
        "犹泰",
        "菲尔",
        "坎泰伦",
        "罗德",
        "西温",
        "稀恩",
        "杰尊",
        "佩法",
        "杰尔米",
        "奥尔卡",
        "鲁提",
        "艾利杰",
        "奇姆",
        "希勒尔",
        "布兰德",
        "伊安",
        "伯纳德",
        "文博士",
        "潘姆",
        "亚可",
        "克鲁巴",
        "弗里德",
        "金利奇",
        "扎诺",
        "阿丁",
        "艾娜",
        "黛玛院长",
        "萧公"
        );

var JobName = Array(
        "英雄",
        "圣骑士",
        "黑骑士",
        "火毒魔导师",
        "冰雷魔导师",
        "主教",
        "神射手",
        "箭神",
        "隐士",
        "侠盗",
        "暗影双刀",
        "冲锋队长",
        "船长",
        "神炮王",
        "龙的传人",
        "魂骑士",
        "炎术士",
        "风灵使者",
        "夜行者",
        "奇袭者",
        "战神",
        "龙神",
        "龙神",
        "双弩精灵",
        "幻影",
        "夜光",
        "隐月",
        "尖兵",
        "恶魔猎手",
        "恶魔复仇者",
        "唤灵斗师",
        "豹弩游侠",
        "机械师",
        "爆破手",
        "剑豪",
        "阴阳师",
        "米哈尔",
        "狂龙战士",
        "爆莉萌天使",
        "神之子",
        "林之灵",
        "超能力者"
        );

var Chair = Array(
        "柿子树鞦韆",
        "龙龙的蛋壳椅",
        "枫叶纪念凳",
        "云朵洗手间椅子",
        "闪耀星星之夜椅子",
        "奥妙的超级药水椅子",
        "热情的红色药水椅子",
        "生日派对椅",
        "埃欧雷的小音乐会",
        "希拉的梳妆椅",
        "摆钟椅子",
        "迷你神兽椅子",
        "发财椅",
        "蘑菇朋友椅子",
        "红色龙椅子",
        "蓝色龙椅子",
        "夏日喵喵椅子 ",
        "仲夏可可岛",
        "魔力品克缤",
        "热带夏日椅子",
        "千年狐椅子",
        "邪恶黑龙椅子",
        "魔法之书",
        "可爱音符椅子",
        "羊羔椅子",
        "寻找故乡的月妙椅子",
        "邪恶之毒椅子",
        "喵喵的免费拥抱",
        "邪恶羊椅子",
        "粉色手柄",
        "深夜猫头鹰",
        "皮肤皇后椅子",
        "睡觉小鸟椅子",
        "泡泡浴椅子",
        "痊愈10周椅子",
        "儿童秋千",
        "扎昆的帝王椅子",
        "拉尼娅野餐椅",
        "翻滚兔子椅子",
        "天使舞台椅",
        "魔法之书",
        "可爱音符椅子",
        "那就是我！",
        "云朵洗手间椅子",
        "万圣节南瓜椅",
        "寻找故乡的月妙椅子",
        "泡泡浴椅子",
        "儿童秋千",
        "和奥尔卡一起看棒球",
        "万圣节南瓜椅",
        "和半半在一起",
        "开心的皮埃尔",
        "可怕的女王",
        "奇石椅子",
        "噜噜啦啦印第安小孩",
        "印第安小孩的朋友",
        "印第安元老的兄弟",
        "巨大白雪人椅子",
        "巨大企鹅王椅子",
        "水晶椅",
        "兔子旋风",
        "白云漫步椅",
        "威尔士柯基犬椅子",
        "白鹳飞行员椅子"
        );

var Town = Array(
        "黄金寺庙",
        "玩具城",
        "勇士部落",
        "玛加提亚",
        "诺特勒斯",
        "阿里安特",
        "万神殿",
        "埃德尔斯坦",
        "魔法密林",
        "南港",
        "里恩",
        "天空之城",
        "金海滩",
        "百草堂",
        "林中之城",
        "神木村",
        "冰峰雪域",
        "射手村",
        "明珠港",
        "废弃都市",
        "圣地",
        "地球防御本部",
        "童话村",
        "阿尔泰营地",
        "水下世界"
        );
//类型 0 台词
var Type_0 = Array(
        Array("这是谁的台词 - \"#b我的身手已经大不如前,希望能收尽快收一名徒弟……\"#k？", "吉翁"),
        Array("这是谁的台词 - \"#b又要做作业又要学习……好忙啊……\"？", "妖精维英"),
        Array("这是谁的台词 - \"#b呃啊……?我的研究材料哪去了?\"？", "魔法师库迪"),
        Array("这是谁的台词 - \"#b海平面必须停止上升才行啊……\"#k？", "弗坦"),
        Array("这是谁的台词 - \"#b一个人玩也是很无聊的……唉~\"#k？", "桉"),
        Array("这是谁的台词 - \"#b虽然汉斯不是个坏人……\"#k？", "妖精艾温"),
        Array("这是谁的台词 - \"#b噗噗……这是什么气味?\"#k？", "艾比欧拉"),
        Array("这是谁的台词 - \"#b你在采集草药啊……\"#k？", "萨比特拉玛"),
        Array("这是谁的台词 - \"#b天气好极了,不是吗?这种天气最适合和海芘一起散步了.\"#k？", "格莱特"),
        Array("这是谁的台词 - \"#b看看我的肌肉,你难道不想变得和我一样强大吗?\"#k？", "坤"),
        Array("这是谁的台词 - \"#b如果你有恶魔文件,就把他交给我保管怎么样?\"#k？", "基尼"),
        Array("这是谁的台词 - \"#b如果你需要更坚固的防具,就进来看看啊?\"#k？", "路德司"),
        Array("这是谁的台词 - \"#b你问我能看见前方吗?为什么明知故问?\"#k？", "普诺"),
        Array("这是谁的台词 - \"#b嗯,你要不要也试试得道修炼呢?\"#k？", "诺功"),
        Array("这是谁的台词 - \"#b我是不会原谅那些偷盗的人的！\"#k？", "哈利"),
        Array("这是谁的台词 - \"#b我是个很适合穿围裙的男人！\"#k？", "伊莱克斯"),
        Array("这是谁的台词 - \"#b海盗最强!来比试一场吧!\"#k？", "瓦莱莉"),
        Array("这是谁的台词 - \"#b最近,怪物们似乎变得越来越凶恶了,真让人担心.\"#k？", "莉萨"),
        Array("这是谁的台词 - \"#b我身边的得利巴总是吵着站岗的工作让他厌烦.\"#k？", "哦尔萨恩"),
        Array("这是谁的台词 - \"#b沧海桑田,随着岁月的流逝,世界也发生了变化\"#k？", "道功"),
        Array("这是谁的台词 - \"#b工作虽然重要,不过品尝美味也是很重要的.\"#k？", "巴斑"),
        Array("这是谁的台词 - \"#b据说朋友艾温给人类造成不便.\"#k？", "妖精罗雯"),
        Array("这是谁的台词 - \"#b哼,我根本不能相信一个外人.\"#k？", "副校长卡拉扬"),
        Array("这是谁的台词 - \"#b希望有人能替我弄点吃的来.\"#k？", "朵朵"),
        Array("这是谁的台词 - \"#b我正在侍奉古代诺巴之神.\"#k？", "狼牙"),
        Array("这是谁的台词 - \"#b用来点燃炉火的燃料不足.\"#k？", "高卢"),
        Array("这是谁的台词 - \"#b身体放松才没过多久.\"#k？", "达比"),
        Array("这是谁的台词 - \"#b大家必须齐心协力.\"#k？", "拉克里斯")
        );


//怪物 - 不存在冒险岛的
var Type_1 = Array(
        "贝尔库里斯",
        "暗黑破坏神",
        "依幕尔克",
        "卡莉雪",
        "老大哥",
        "班·贝侬",
        "胡克",
        "波提切利",
        "比尔泽布",
        "黑暗塞特斯",
        "重型悍马",
        "藏红花",
        "乌鸦",
        "搭乘型石人",
        "柔软精",
        "狼牙",
        "索拉立昂",
        "红辣椒",
        "伯图斯",
        "亚古兽",
        "迪路兽"
        );

var Type_2 = Array(
        Array("黄金寺庙", Array("诺娅", "汤大妈")),
        Array("玩具城", Array("哈尔里", "舍琵")),
        Array("勇士部落", Array("格里巴", "武术教练")),
        Array("玛加提亚", Array("韩", "人造人 A", "胡恩族长", "琵丽雅")),
        Array("诺特勒斯", Array("武器商人摩根", "咖喱", "顿特勒斯")),
        Array("阿里安特", Array("拉尔拉", "阿尔丁", "巴一岚", "雅思敏")),
        Array("万神殿", Array("卡琳", "塞琳")),
        Array("埃德尔斯坦", Array("阿贝尔特", "安苏尼", "切奇", "韩利泰")),
        Array("魔法密林", Array("妖精玛丽")),
        Array("废都地铁", Array("冬青")),
        Array("里恩", Array("普斯拉")),
        Array("天空之城", Array("波达", "莉萨", "珂丽尔")),
        Array("金海滩", Array("梅森", "多普")),
        Array("百草堂", Array("鹤", "小防防")),
        Array("林中之城", Array("克利斯拉玛")),
        Array("神木村", Array("村长塔塔慢", "马蒂", "龙伯")),
        Array("冰峰雪域", Array("杰德", "斯卡德", "阿尔卡斯特")),
        Array("射手村", Array("皮亚", "长老斯坦", "斯卡斯")),
        Array("明珠港", Array("金利奇", "特奥", "简")),
        Array("废弃都市", Array("休咪", "内拉", "伊卡路斯")),
        Array("圣地", Array("南哈特", "希纳斯", "胡克")),
        Array("地球防御本部", Array("金博士", "波特博士")),
        Array("童话村", Array("墨铁", "石铁", "七诚")),
        Array("阿尔泰营地", Array("玛伦", "杜鲁", "萝夏", "友里索")),
        Array("水下世界", Array("坎特", "妙斯", "佳佳", "海豚"))
        );

//不存在的    职    业
var Type_3 = Array(
        "美工设计师",
        "死灵法师",
        "幻影大师",
        "舞蹈大师",
        "重炮拳手",
        "恶魔猎人",
        "寻宝猎人",
        "猎龙人",
        "野蛮人",
        "德鲁伊"
        );


//不存在的椅子
var Type_4 = Array(
        "莱比的柿子树椅子	",
        "玛莫斯椅子",
        "钻石浴缸",
        "钱囤子",
        "轮椅",
        "初恋的纯情椅子",
        "3月兔椅子",
        "回归我心椅子",
        "情人之诅咒椅",
        "晚年兵长之椅"
        );

//不存在的城市
var Type_5 = Array(
        "沉睡之幻影林地",
        "阿库亚阿库亚",
        "康宁都市",
        "天鹅村庄",
        "板桥",
        "澳大利亚",
        "洛杉矶",
        "悉尼",
        "堪培拉",
        "布拉格"
        );

//不存在的制作材料
var QNA2 = Array(
        "好用的模具",
        "白毛翁种子",
        "氪石原石",
        "毒霉素",
        "镍",
        "风信子果汁",
        "麦格纳斯的汗水",
        "扎昆之泪",
        "真爱巧克力",
        "蝴蝶精之砂"
        );



function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }

    var em = cm.getEventManager("LobbyQuest");
    var eim = cm.getEventInstance();
    if (em != null && eim != null) {
        switch (status) {
            case 0:
                var str = "#e问题：#n";
                var type = Math.floor(Math.random() * 6);//取类型
                var sIdx = Math.floor(Math.random() * 4);
                sort();
                switch (type) {
                    case 0://类型 0 台词
                        var qIndex = Math.floor(Math.random() * Type_0.length);
                        var text = Type_0[qIndex][0];
                        var ans = Type_0[qIndex][1];
                        initRand(NPCName);
                        str += text + "\r\n\r\n#b";
                        for (var i = 0; i < 4; i++) {
                            if (i == sIdx) {
                                str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                            } else {
                                str += "#L" + (i + 100) + "#" + (i + 1) + ". " + NPCName[getRand(i)] + "#l\r\n";
                            }
                        }
                        break;
                    case 1://不存在冒险岛的怪物
                        str += "以下怪物，未曾在冒险岛中出现过的是？\r\n\r\n#b";
                        var qIndex = Math.floor(Math.random() * Type_1.length);
                        var ans = Type_1[qIndex];
                        initRand(MobName);
                        for (var i = 0; i < 4; i++) {
                            if (i == sIdx) {
                                str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                            } else {
                                str += "#L" + (i + 100) + "#" + (i + 1) + ". " + MobName[getRand(i)] + "#l\r\n";
                            }
                        }
                        break;
                    case 2://不存在冒险岛的NPC
                        initRand(Type_2);
                        var qIndex = getRand(0);
                        var town = Type_2[qIndex][0];//城镇
                        var list = Type_2[qIndex][1];
                        var ans = list[ Math.floor(Math.random() * list.length)];
                        str += "以下NPC中，在" + town + "中出现过的是？\r\n\r\n#b";
                        var tKey;

                        for (var i = 0; i < 4; i++) {
                            if (i == sIdx) {
                                str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                            } else {
                                var tID = getRand(i + 5);
                                if (tID != qIndex) {
                                    var tList = Type_2[tID][1];
                                    str += "#L" + (i + 100) + "#" + (i + 1) + ". " + tList[Math.floor(Math.random() * tList.length)] + "#l\r\n";
                                }
                            }
                        }
                        break;
                    case 3://不存在的职业
                        str += "以下职业中，不存在冒险岛中的是？\r\n\r\n#b";
                        var qIndex = Math.floor(Math.random() * Type_3.length);
                        var ans = Type_3[qIndex];
                        initRand(JobName);
                        for (var i = 0; i < 4; i++) {
                            if (i == sIdx) {
                                str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                            } else {
                                str += "#L" + (i + 100) + "#" + (i + 1) + ". " + JobName[getRand(i)] + "#l\r\n";
                            }
                        }
                        break;
                    case 4://不存在的椅子
                        str += "以下椅子中，未曾在冒险岛中出现过的是？\r\n\r\n#b";
                        var qIndex = Math.floor(Math.random() * Type_4.length);
                        var ans = Type_4[qIndex];
                        initRand(Chair);
                        for (var i = 0; i < 4; i++) {
                            if (i == sIdx) {
                                str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                            } else {
                                str += "#L" + (i + 100) + "#" + (i + 1) + ". " + Chair[getRand(i)] + "#l\r\n";
                            }
                        }
                        break;
                    case 5://不存在的城市
                        str += "以下城镇中，未曾在冒险岛中出现过的是？\r\n\r\n#b";
                        var qIndex = Math.floor(Math.random() * Type_5.length);
                        var ans = Type_5[qIndex];
                        initRand(Town);
                        for (var i = 0; i < 4; i++) {
                            if (i == sIdx) {
                                str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                            } else {
                                str += "#L" + (i + 100) + "#" + (i + 1) + ". " + Town[getRand(i)] + "#l\r\n";
                            }
                        }
                        break;
                }
                if (!"clear".equals(eim.getProperty("stage39"))) {
                    cm.askMenuNoESC(str);
                } else {
                    cm.sendNextNoESC("你已经通过了我的考验！可以进入下一个阶段了！");
                }
                break;
            case 1:
                if (selection >= 100) {
                    //回答错误 记录回答错误次数
                    var value = parseInt(eim.getProperty("stage39_killed")) + 1;
                    eim.setProperty("stage39_killed", String(value));
                    if (value >= 2) {
                        eim.setProperty("stage39_killed", String(0));
                        eim.setProperty("stage39_Value", String(0));
                    }
                    cm.sendNextNoESC("真可惜，你回答错了！这是你第" + value + "次错误！如果回答错误两次就需要重新挑战！");
                } else if (selection >= 0) {
                    //回答正确
                    var value = parseInt(eim.getProperty("stage39_Value")) + 1;
                    eim.setProperty("stage39_Value", String(value));
                    if (value >= 10 && !"clear".equals(eim.getProperty("stage39"))) {
                        var stage = parseInt(eim.getProperty("stage"));
                        eim.setProperty("stage" + stage, "clear");
                        cm.broadcastScreenEffect("event/clear");
                        eim.broadcastWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                        cm.sendNextNoESC("你已经通过了我的考验！可以进入下一个阶段了！");
                    } else {
                        cm.sendNextNoESC("回答正确！你还需要回答" + (10 - value) + "个问题！");
                    }

                } else {
                    cm.dispose();
                }
                break;
            default:
                cm.dispose();
                break;
        }
    } else {
        cm.dispose();
    }
}

function sort() {
    MobName.sort(function () {
        return 0.5 - Math.random();
    });
    NPCName.sort(function () {
        return 0.5 - Math.random();
    });
    JobName.sort(function () {
        return 0.5 - Math.random();
    });
    Chair.sort(function () {
        return 0.5 - Math.random();
    });
    Town.sort(function () {
        return 0.5 - Math.random();
    });

    Type_0.sort(function () {
        return 0.5 - Math.random();
    });

    Type_1.sort(function () {
        return 0.5 - Math.random();
    });

    Type_2.sort(function () {
        return 0.5 - Math.random();
    });

    Type_3.sort(function () {
        return 0.5 - Math.random();
    });

    Type_4.sort(function () {
        return 0.5 - Math.random();
    });

    Type_5.sort(function () {
        return 0.5 - Math.random();
    });
}

function initRand(arr) {
    temp = new Array();
    for (var i = 0; i < arr.length; i++) {
        temp[i] = i;
    }
    temp.sort(function () {
        return 0.5 - Math.random();
    });
}

function getRand(index) {
    return temp[index];
}