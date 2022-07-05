var ds = 0;

function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (!cm.haveItem(5150037)) {
            cm.sendSimple("Hello，我是戒指兑换师 \r\n" +
                    "你想花费一些GASH或枫叶点数兑换戒指吗？\r\n #r也可以到商城购买Floating Market 1688$换到你爽！ \r\n" +
                    //"#L1000##d我想使用1688CASH无限兑换戒指#k\r\n" +
                    //"#L2000##d我想使用1688枫叶点数无限兑换戒指#k\r\n" +
                    //"#L3000##d我想使用GASH单次兑换戒指#k\r\n" +
                    //"#L4000##d我想使用枫叶点数单次兑换戒指#k\r\n"
                    );
        } else {
            cm.sendSimple("Hello，我是戒指兑换师 \r\n" +
                    "你已经可以无限兑换戒指。 \r\n" +
                    "#L1##d  1. 兑换可乐名牌聊天戒指组合#k\r\n" +
                    "#L2##d  2. 兑换红底名牌聊天戒指组合#k\r\n" +
                    "#L3##d  3. 兑换白底名牌聊天戒指组合#k\r\n" +
                    "#L4##d  4. 兑换竹编名牌聊天戒指组合#k\r\n" +
                    "#L5##d  5. 兑换水墨名牌聊天戒指组合#k\r\n" +
                    "#L6##d  6. 兑换红玫瑰名牌聊天戒指组合#k\r\n" +
                    "#L7##d  7. 兑换木乃伊名牌聊天戒指组合#k\r\n" +
                    "#L8##d  8. 兑换豪华珍珠名牌聊天戒指组合#k\r\n" +
                    "#L9##d  9. 兑换喵喵名牌聊天戒指组合#k\r\n" +
                    "#L10##d  10. 兑换浪漫蕾丝名牌聊天戒指组合#k\r\n" +
                    "#L11##d  11. 兑换青苹果和爱心名牌聊天戒指组合#k\r\n" +
                    "#L12##d  12. 兑换胡子先生名牌聊天戒指组合#k\r\n" +
                    "#L13##d  13. 兑换NAVER名牌聊天戒指组合#k\r\n" +
                    "#L14##d  14. 兑换天使名牌聊天戒指组合#k\r\n" +
                    "#L15##d  15. 兑换草莓蛋糕名牌聊天戒指组合#k\r\n" +
                    "#L16##d  16. 兑换压岁钱防御名牌聊天戒指组合#k\r\n" +
                    "#L17##d  17. 兑换蛙蛙名牌聊天戒指组合#k\r\n" +
                    "#L18##d  18. 兑换粉红猪名牌聊天戒指组合#k\r\n" +
                    "#L19##d  10. 兑换蓝胡子名牌聊天戒指组合#k\r\n" +
                    "#L20##d  20. 兑换红胡子名牌聊天戒指组合#k\r\n" +
                    "#L21##d  21. 兑换西瓜名牌聊天戒指组合#k\r\n" +
                    "#L22##d  22. 兑换呱呱鸭名牌聊天戒指组合#k\r\n" +
                    "#L23##d  23. 兑换环岛旅行名牌聊天戒指组合#k\r\n" +
                    "#L24##d  24. 兑换来自星星的我名牌聊天戒指组合#k\r\n" +
                    "#L25##d  25. 兑换绿森林名牌聊天戒指组合#k\r\n" +
                    "#L26##d  26. 兑换星星名牌聊天戒指组合#k\r\n" +
                    "#L27##d  27. 兑换白色小狗名牌聊天戒指组合#k\r\n" +
                    "#L28##d  28. 兑换褐色小狗名牌聊天戒指组合#k\r\n" +
                    //"#L29##d  29. 兑换高音名牌聊天戒指组合#k\r\n" +
                    "#L30##d  30. 兑换进击的巨人名牌聊天戒指组合#k\r\n" +
                    "#L31##d  31. 兑换梦想中的雪景名牌聊天戒指组合#k\r\n" +
                    "#L32##d  32. 兑换小朋友名牌聊天戒指组合#k\r\n" +
                    "#L33##d  33. 兑换弹性富豪名牌聊天戒指组合#k\r\n" +
                    "#L34##d  34. 兑换黑绿色帽子名牌聊天戒指组合#k\r\n" +
                    "#L35##d  35. 兑换绿色帽子名牌聊天戒指组合#k\r\n" +
                    "#L36##d  36. 兑换蓝色帽子名牌聊天戒指组合#k\r\n" +
                    "#L37##d  37. 兑换晚安小怪兽名牌聊天戒指组合#k\r\n" +
                    "#L38##d  38. 兑换吃货小怪兽名牌聊天戒指组合#k\r\n" +
                    "#L39##d  39. 兑换英雄雪归岛名牌聊天戒指组合#k\r\n" +
                    "#L40##d  40. 兑换英雄戴米安名牌聊天戒指组合#k\r\n" +
                    "#L41##d  41. 兑换英雄超越石名牌聊天戒指组合#k\r\n" +
                    "#L42##d  42. 兑换英雄黑魔法师名牌聊天戒指组合#k\r\n" +
                    "#L43##d  43. 兑换红云组合包名牌聊天戒指组合#k\r\n" +
                    "#L44##d  44. 兑换圣诞名牌聊天戒指组合#k\r\n" +
                    "#L45##d  45. 兑换传说的黄金戒指#k\r\n" +
                    "#L46##d  46. 兑换大香肠名牌戒指#k\r\n" +
                    "#L47##d  47. 兑换名牌戒指 (镜音铃&连)#k\r\n" +
                    "#L48##d  48. 蓝莓聊天戒指#k\r\n" +
                    "#L49##d  49. 草莓聊天戒指#k\r\n" +
                    "#L50##d  50. 钻石聊天戒指#k\r\n" +
                    "#L51##d  51. 盛夏彩蝶聊天戒指#k\r\n" +
                    "#L52##d  52. 聊天戒指 (初音未来)#k\r\n" +
                    "#L53##d  53. 聊天戒指 (巡音流歌)#k\r\n" +
                    "#L54##d  54. 聊天戒指 (KAITO)#k\r\n" +
                    "#L55##d  55. 可爱兔聊天戒指#k\r\n" +
                    "#L56##d  56. 可爱羊聊天戒指#k\r\n" +
                    "#L57##d  57. 白雪圣诞聊天泡泡戒指#k\r\n" +
                    "#L58##d  58. 草原小羊聊天泡泡戒指#k\r\n" +
                    "#L59##d  59. 蜜蜂聊天泡泡戒指#k\r\n" +
                    "#L60##d  60. 凤梨聊天戒指#k\r\n" +
                    "#L61##d  61. 公主日记聊天泡泡戒指#k\r\n" +
                    "#L62##d  62. 兔子聊天泡泡戒指#k\r\n" +
                    "#L63##d  63. 阳光牧场聊天泡泡戒指#k\r\n" +
                    "#L64##d  64. 鲨鱼聊天泡泡戒指#k\r\n" +
                    "#L65##d  65. 猫咪线球聊天泡泡戒指#k\r\n" +
                    "#L66##d  66. 后街吉姆泡泡戒指#k\r\n"
                    );
        }


    } else if (status == 1) {

        /*if (selection == 1000) {
         if (cm.getPlayer().getCSPoints(1) < 1688) {
         cm.sendOk("#b你的Cash不够哦");
         cm.dispose();
         return;
         } else {
         cm.getPlayer().modifyCSPoints(1, -1688, true);
         cm.getPlayer().setOneTimeLog("戒指兑换");
         cm.sendOk("#b可以无限制领取戒指了。~");
         cm.dispose();
         return;
         }
         cm.dispose();
         } else if (selection == 2000) {
         if (cm.getPlayer().getCSPoints(2) < 1688) {
         cm.sendOk("#b你的Cash不够哦");
         cm.dispose();
         return;
         } else {
         cm.getPlayer().modifyCSPoints(2, -1688, true);
         cm.getPlayer().setOneTimeLog("戒指兑换");
         cm.sendOk("#b可以无限制领取戒指了。~");
         cm.dispose();
         return;
         }
         cm.dispose();
         } else */if (selection == 3000) {
            ds = 1;
            cm.sendSimple("Hello，我是戒指兑换师 \r\n" +
                    "你已经可以无限兑换戒指。 \r\n" +
                    "#L1##d  1. 兑换可乐名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L2##d  2. 兑换红底名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L3##d  3. 兑换白底名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L4##d  4. 兑换竹编名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L5##d  5. 兑换水墨名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L6##d  6. 兑换红玫瑰名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L7##d  7. 兑换木乃伊名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L8##d  8. 兑换豪华珍珠名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L9##d  9. 兑换喵喵名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L10##d  10. 兑换浪漫蕾丝名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L11##d  11. 兑换青苹果和爱心名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L12##d  12. 兑换胡子先生名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L13##d  13. 兑换NAVER名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L14##d  14. 兑换天使名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L15##d  15. 兑换草莓蛋糕名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L16##d  16. 兑换压岁钱防御名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L17##d  17. 兑换蛙蛙名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L18##d  18. 兑换粉红猪名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L19##d  10. 兑换蓝胡子名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L20##d  20. 兑换红胡子名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L21##d  21. 兑换西瓜名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L22##d  22. 兑换呱呱鸭名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L23##d  23. 兑换环岛旅行名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L24##d  24. 兑换来自星星的我名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L25##d  25. 兑换绿森林名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L26##d  26. 兑换星星名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L27##d  27. 兑换白色小狗名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L28##d  28. 兑换褐色小狗名牌聊天戒指组合(200Cash)#k\r\n" +
                    //"#L29##d  29. 兑换高音名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L30##d  30. 兑换进击的巨人名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L31##d  31. 兑换梦想中的雪景名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L32##d  32. 兑换小朋友名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L33##d  33. 兑换弹性富豪名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L34##d  34. 兑换黑绿色帽子名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L35##d  35. 兑换绿色帽子名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L36##d  36. 兑换蓝色帽子名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L37##d  37. 兑换晚安小怪兽名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L38##d  38. 兑换吃货小怪兽名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L39##d  39. 兑换英雄雪归岛名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L40##d  40. 兑换英雄戴米安名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L41##d  41. 兑换英雄超越石名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L42##d  42. 兑换英雄黑魔法师名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L43##d  43. 兑换红云组合包名牌聊天戒指组合(200Cash)#k\r\n" +
                    "#L44##d  44. 兑换圣诞名牌聊天戒指组(200Cash)合#k\r\n" +
                    "#L45##d  45. 兑换传说的黄金戒指(100Cash)#k\r\n" +
                    "#L46##d  46. 兑换大香肠名牌戒指(100Cash)#k\r\n" +
                    "#L47##d  47. 兑换名牌戒指 (镜音铃&连)(100Cash)#k\r\n" +
                    "#L48##d  48. 蓝莓聊天戒指(100Cash)#k\r\n" +
                    "#L49##d  49. 草莓聊天戒指(100Cash)#k\r\n" +
                    "#L50##d  50. 钻石聊天戒指(100Cash)#k\r\n" +
                    "#L51##d  51. 盛夏彩蝶聊天戒指(100Cash)#k\r\n" +
                    "#L52##d  52. 聊天戒指 (初音未来)(100Cash)#k\r\n" +
                    "#L53##d  53. 聊天戒指 (巡音流歌)(100Cash)#k\r\n" +
                    "#L54##d  54. 聊天戒指 (KAITO)(100Cash)#k\r\n" +
                    "#L55##d  55. 可爱兔聊天戒指(100Cash)#k\r\n" +
                    "#L56##d  56. 可爱羊聊天戒指(100Cash)#k\r\n" +
                    "#L57##d  57. 白雪圣诞聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L58##d  58. 草原小羊聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L59##d  59. 蜜蜂聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L60##d  60. 凤梨聊天戒指(100Cash)#k\r\n" +
                    "#L61##d  61. 公主日记聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L62##d  62. 兔子聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L63##d  63. 阳光牧场聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L64##d  64. 鲨鱼聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L65##d  65. 猫咪线球聊天泡泡戒指(100Cash)#k\r\n" +
                    "#L66##d  66. 后街吉姆泡泡戒指(100Cash)#k\r\n");
        } else if (selection == 4000) {
            ds = 2;
            cm.sendSimple("Hello，我是戒指兑换师 \r\n" +
                    "你已经可以无限兑换戒指。 \r\n" +
                    "#L1##d  1. 兑换可乐名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L2##d  2. 兑换红底名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L3##d  3. 兑换白底名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L4##d  4. 兑换竹编名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L5##d  5. 兑换水墨名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L6##d  6. 兑换红玫瑰名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L7##d  7. 兑换木乃伊名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L8##d  8. 兑换豪华珍珠名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L9##d  9. 兑换喵喵名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L10##d  10. 兑换浪漫蕾丝名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L11##d  11. 兑换青苹果和爱心名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L12##d  12. 兑换胡子先生名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L13##d  13. 兑换NAVER名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L14##d  14. 兑换天使名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L15##d  15. 兑换草莓蛋糕名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L16##d  16. 兑换压岁钱防御名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L17##d  17. 兑换蛙蛙名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L18##d  18. 兑换粉红猪名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L19##d  10. 兑换蓝胡子名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L20##d  20. 兑换红胡子名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L21##d  21. 兑换西瓜名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L22##d  22. 兑换呱呱鸭名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L23##d  23. 兑换环岛旅行名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L24##d  24. 兑换来自星星的我名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L25##d  25. 兑换绿森林名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L26##d  26. 兑换星星名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L27##d  27. 兑换白色小狗名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L28##d  28. 兑换褐色小狗名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    //"#L29##d  29. 兑换高音名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L30##d  30. 兑换进击的巨人名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L31##d  31. 兑换梦想中的雪景名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L32##d  32. 兑换小朋友名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L33##d  33. 兑换弹性富豪名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L34##d  34. 兑换黑绿色帽子名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L35##d  35. 兑换绿色帽子名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L36##d  36. 兑换蓝色帽子名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L37##d  37. 兑换晚安小怪兽名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L38##d  38. 兑换吃货小怪兽名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L39##d  39. 兑换英雄雪归岛名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L40##d  40. 兑换英雄戴米安名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L41##d  41. 兑换英雄超越石名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L42##d  42. 兑换英雄黑魔法师名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L43##d  43. 兑换红云组合包名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L44##d  44. 兑换圣诞名牌聊天戒指组合(200枫叶点数)#k\r\n" +
                    "#L45##d  45. 兑换传说的黄金戒指(100枫叶点数)#k\r\n" +
                    "#L46##d  46. 兑换大香肠名牌戒指(100枫叶点数)#k\r\n" +
                    "#L47##d  47. 兑换名牌戒指 (镜音铃&连)(100枫叶点数)#k\r\n" +
                    "#L48##d  48. 蓝莓聊天戒指(100枫叶点数)#k\r\n" +
                    "#L49##d  49. 草莓聊天戒指(100枫叶点数)#k\r\n" +
                    "#L50##d  50. 钻石聊天戒指(100枫叶点数)#k\r\n" +
                    "#L51##d  51. 盛夏彩蝶聊天戒指(100枫叶点数)#k\r\n" +
                    "#L52##d  52. 聊天戒指 (初音未来)(100枫叶点数)#k\r\n" +
                    "#L53##d  53. 聊天戒指 (巡音流歌)(100枫叶点数)#k\r\n" +
                    "#L54##d  54. 聊天戒指 (KAITO)(100枫叶点数)#k\r\n" +
                    "#L55##d  55. 可爱兔聊天戒指(100枫叶点数)#k\r\n" +
                    "#L56##d  56. 可爱羊聊天戒指(100枫叶点数)#k\r\n" +
                    "#L57##d  57. 白雪圣诞聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L58##d  58. 草原小羊聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L59##d  59. 蜜蜂聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L60##d  60. 凤梨聊天戒指(100枫叶点数)#k\r\n" +
                    "#L61##d  61. 公主日记聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L62##d  62. 兔子聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L63##d  63. 阳光牧场聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L64##d  64. 鲨鱼聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L65##d  65. 猫咪线球聊天泡泡戒指(100枫叶点数)#k\r\n" +
                    "#L66##d  66. 后街吉姆泡泡戒指(100枫叶点数)#k\r\n");
        } else if (selection == 1) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112118, 1);
                    cm.gainItem(1112228, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 2) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112119, 1);
                    cm.gainItem(1112229, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 3) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112120, 1);
                    cm.gainItem(1112230, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 4) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112134, 1);
                    cm.gainItem(1112237, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 5) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112135, 1);
                    cm.gainItem(1112238, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 6) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112141, 1);
                    cm.gainItem(1112252, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 7) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112142, 1);
                    cm.gainItem(1112253, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 8) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112143, 1);
                    cm.gainItem(1112254, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 9) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112144, 1);
                    cm.gainItem(1112256, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 10) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112145, 1);
                    cm.gainItem(1112257, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 11) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112146, 1);
                    cm.gainItem(1112258, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 12) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112148, 1);
                    cm.gainItem(1112259, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 13) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112149, 1);
                    cm.gainItem(1112261, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 14) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112150, 1);
                    cm.gainItem(1112262, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 15) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112151, 1);
                    cm.gainItem(1112263, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 16) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112154, 1);
                    cm.gainItem(1112266, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 17) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112155, 1);
                    cm.gainItem(1112267, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 18) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112156, 1);
                    cm.gainItem(1112268, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 19) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112157, 1);
                    cm.gainItem(1112269, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 20) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112158, 1);
                    cm.gainItem(1112270, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 21) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112160, 1);
                    cm.gainItem(1112272, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 22) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112161, 1);
                    cm.gainItem(1112273, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 23) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112162, 1);
                    cm.gainItem(1112274, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 24) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112163, 1);
                    cm.gainItem(1112275, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 25) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112165, 1);
                    cm.gainItem(1112277, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 26) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112170, 1);
                    cm.gainItem(1112282, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 27) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112171, 1);
                    cm.gainItem(1112283, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 28) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112172, 1);
                    cm.gainItem(1112284, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
            /*} else if (selection == 29) {
             if (!cm.haveItem(5150037)) {
             cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
             cm.dispose();
             return;
             } else {
             if (cm.canHoldByType(1, 3)) {
             cm.gainItem(1112176, 1);
             cm.gainItem(1112288, 1);
             cm.sendOk("领取成功!");
             cm.dispose();
             return;
             } else {
             cm.sendOk("前请确认装备栏是否有空格!");
             cm.dispose();
             return;
             }
             cm.dispose();
             return;
             }
             cm.dispose();*/
        } else if (selection == 30) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112177, 1);
                    cm.gainItem(1112289, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 31) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112178, 1);
                    cm.gainItem(1112290, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 32) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112182, 1);
                    cm.gainItem(1112295, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 33) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112184, 1);
                    cm.gainItem(1115030, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 34) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112194, 1);
                    cm.gainItem(1115007, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 35) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112195, 1);
                    cm.gainItem(1115008, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 36) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112196, 1);
                    cm.gainItem(1115009, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 37) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112197, 1);
                    cm.gainItem(1115010, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 38) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1112198, 1);
                    cm.gainItem(1115011, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 39) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1115103, 1);
                    cm.gainItem(1115016, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 40) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1115108, 1);
                    cm.gainItem(1115019, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 41) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1115109, 1);
                    cm.gainItem(1115020, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 42) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1115110, 1);
                    cm.gainItem(1115021, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 43) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1115116, 1);
                    cm.gainItem(1115027, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 44) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 3)) {
                    cm.gainItem(1115104, 1);
                    cm.gainItem(1115017, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 45) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112103, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 46) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112136, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 47) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112168, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 48) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112264, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 49) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112265, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 50) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112271, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 51) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112276, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 52) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112279, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 53) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112280, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 54) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112281, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 55) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112285, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 56) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112294, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 57) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112291, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 58) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112296, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 59) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115004, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 60) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115005, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 61) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115006, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 62) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115022, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 63) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115023, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 64) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1112025, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 65) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115026, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        } else if (selection == 66) {
            if (!cm.haveItem(5150037)) {
                cm.sendOk("#b你还没有花费1688CASH或枫叶点数无限兑换戒指");
                cm.dispose();
                return;
            } else {
                if (cm.canHoldByType(1, 2)) {
                    cm.gainItem(1115029, 1);
                    cm.sendOk("领取成功!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                return;
            }
            cm.dispose();
        }

    } else if (status == 2) {
        if (selection == 1) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112118, 1);
                cm.gainItem(1112228, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 2) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112119, 1);
                cm.gainItem(1112229, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 3) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112120, 1);
                cm.gainItem(1112230, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;

        } else if (selection == 4) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112134, 1);
                cm.gainItem(1112237, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;

        } else if (selection == 5) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112135, 1);
                cm.gainItem(1112238, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;

        } else if (selection == 6) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112141, 1);
                cm.gainItem(1112252, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 7) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112142, 1);
                cm.gainItem(1112253, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 8) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112143, 1);
                cm.gainItem(1112254, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 9) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112144, 1);
                cm.gainItem(1112256, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 10) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112145, 1);
                cm.gainItem(1112257, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 11) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112146, 1);
                cm.gainItem(1112258, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 12) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112148, 1);
                cm.gainItem(1112259, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 13) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112149, 1);
                cm.gainItem(1112261, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 14) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112150, 1);
                cm.gainItem(1112262, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 15) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112151, 1);
                cm.gainItem(1112263, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 16) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112154, 1);
                cm.gainItem(1112266, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 17) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112155, 1);
                cm.gainItem(1112267, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 18) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112156, 1);
                cm.gainItem(1112268, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 19) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112157, 1);
                cm.gainItem(1112269, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 20) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112158, 1);
                cm.gainItem(1112270, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 21) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112160, 1);
                cm.gainItem(1112272, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 22) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112161, 1);
                cm.gainItem(1112273, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 23) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112162, 1);
                cm.gainItem(1112274, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 24) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112163, 1);
                cm.gainItem(1112275, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 25) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112165, 1);
                cm.gainItem(1112277, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 26) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112170, 1);
                cm.gainItem(1112282, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 27) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112171, 1);
                cm.gainItem(1112283, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 28) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112172, 1);
                cm.gainItem(1112284, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
            /*} else if (selection == 29) {
             if (ds == 1) {
             if (cm.getPlayer().getCSPoints(1) < 200) {
             cm.sendOk("#b你的Cash不够哦");
             cm.dispose();
             return;
             }
             } else if (ds == 2){
             if (cm.getPlayer().getCSPoints(2) < 200) {
             cm.sendOk("#b你的枫叶点数不够哦");
             cm.dispose();
             return;
             }
             }
             if (cm.canHoldByType(1, 3)) {
             cm.getPlayer().modifyCSPoints(ds, -200, true);
             cm.gainItem(1112176, 1);
             cm.gainItem(1112288, 1);
             cm.sendOk("领取成功!");
             cm.dispose();
             return;
             } else {
             cm.sendOk("前请确认装备栏是否有空格!");
             cm.dispose();
             return;
             }
             cm.dispose();
             return;*/
        } else if (selection == 30) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112177, 1);
                cm.gainItem(1112289, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 31) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112178, 1);
                cm.gainItem(1112290, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 32) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112182, 1);
                cm.gainItem(1112295, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 33) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112184, 1);
                cm.gainItem(1115030, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 34) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112194, 1);
                cm.gainItem(1115007, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 35) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112195, 1);
                cm.gainItem(1115008, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 36) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112196, 1);
                cm.gainItem(1115009, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 37) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112197, 1);
                cm.gainItem(1115010, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 38) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1112198, 1);
                cm.gainItem(1115011, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 39) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1115103, 1);
                cm.gainItem(1115016, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 40) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1115108, 1);
                cm.gainItem(1115019, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 41) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1115109, 1);
                cm.gainItem(1115020, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 42) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1115110, 1);
                cm.gainItem(1115021, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 43) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1115116, 1);
                cm.gainItem(1115027, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 44) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 200) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 3)) {
                cm.getPlayer().modifyCSPoints(ds, -200, true);
                cm.gainItem(1115104, 1);
                cm.gainItem(1115017, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 45) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112103, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 46) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112136, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 47) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112168, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 48) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112264, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 49) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112265, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 50) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112271, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 51) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112276, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 52) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112279, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 53) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112280, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 54) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112281, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 55) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112285, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 56) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112294, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 57) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112291, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 58) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112296, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 59) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115004, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 60) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115005, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 61) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115006, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 62) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115022, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 63) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115023, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 64) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1112025, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 65) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115026, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        } else if (selection == 66) {
            if (ds == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100) {
                    cm.sendOk("#b你的Cash不够哦");
                    cm.dispose();
                    return;
                }
            } else if (ds == 2) {
                if (cm.getPlayer().getCSPoints(2) < 100) {
                    cm.sendOk("#b你的枫叶点数不够哦");
                    cm.dispose();
                    return;
                }
            }
            if (cm.canHoldByType(1, 2)) {
                cm.getPlayer().modifyCSPoints(ds, -100, true);
                cm.gainItem(1115029, 1);
                cm.sendOk("领取成功!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("前请确认装备栏是否有空格!");
                cm.dispose();
                return;
            }
            cm.dispose();
            return;
        }

    }
}
