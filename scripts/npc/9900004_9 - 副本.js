/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：骑宠背包
 */

var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var sl0items = null;
var character_auctionItems = null;
var select_type_sell_auctionItems = null;
var auctionPoint = null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var MC = cm.getServerName();
    var 骑宠开关 = cm.GetPiot("骑宠开关", "1");
    if (status == 0) {
        character_auctionItems = cm.auction_findByCharacterId();
        auctionPoint = cm.auction_getAuctionPoint();


        var
        selStr = "骑宠背包\r\n";

        selStr += "\t\t\t\t#L71447500#" + 箭头 + " #b返回#l\r\n";
		selStr += "\t\t\t\t#L71447501#" + 箭头 + " #b学习技能#l\r\n";
        if (cm.getPlayer().getMountId() > 0) {
            selStr += "\r\n#r 目前你的骑宠是 : #i" + cm.getPlayer().getMountId() + "##t" + cm.getPlayer().getMountId() + "#\r\n";
        } else {
            selStr += "\r\n#r 目前你的骑宠是 : 【飞碟】"+cm.getPlayer().getMountId()+"\r\n";

        }
        if (cm.getPlayer().getGMLevel() == 6) {
            if (cm.GetPiot("骑宠开关", "1") <= 0) {
                selStr += "\r\n\t\t\t#L500#" + 箭头 + " #b骑宠背包#g[开启中]#r[GM]#k#l";
            }
            if (cm.GetPiot("骑宠开关", "1") >= 1) {
                selStr += "\r\n\t\t\t#L501#" + 箭头 + " #b骑宠背包#r[关闭中]#r[GM]#k#l";
            }
        }
        if (cm.GetPiot("骑宠开关", "1") <= 0) {
            selStr += "\r\n______________________________________________________\r\n";
            if (cm.getPlayer().getMountId() > 0) {
                selStr += "\t\t\t\t#L0#恢复飞碟#l\r\n";
            }
            if (cm.getBossRank("1932029", 2) > 0) {
                selStr += "\t\t\t\t#L1##v1932029##b#t1932029##l\r\n";
            }

            if (cm.getBossRank("1932034", 2) > 0) {
                selStr += "\t\t\t\t#L2##v1932034##b#t1932034##l\r\n";
            }

            if (cm.getBossRank("1932035", 2) > 0) {
                selStr += "\t\t\t\t#L3##v1932035##b#t1932035##l\r\n";
            }

            if (cm.getBossRank("1932038", 2) > 0) {
                selStr += "\t\t\t\t#L4##v1932038##b#t1932038##l\r\n";
            }

            if (cm.getBossRank("1932044", 2) > 0) {
                selStr += "\t\t\t\t#L5##v1932044##b#t1932044##l\r\n";
            }

            if (cm.getBossRank("1932047", 2) > 0) {
                selStr += "\t\t\t\t#L6##v1932047##b#t1932047##l\r\n";
            }

            if (cm.getBossRank("1932048", 2) > 0) {
                selStr += "\t\t\t\t#L7##v1932048##b#t1932048##l\r\n";
            }

            if (cm.getBossRank("1932049", 2) > 0) {
                selStr += "\t\t\t\t#L8##v1932049##b#t1932049##l\r\n";
            }

            if (cm.getBossRank("1932050", 2) > 0) {
                selStr += "\t\t\t\t#L9##v1932050##b#t1932050##l\r\n";
            }

            if (cm.getBossRank("1932052", 2) > 0) {
                selStr += "\t\t\t\t#L10##v1932052##b#t1932052##l\r\n";
            }

            if (cm.getBossRank("1932053", 2) > 0) {
                selStr += "\t\t\t\t#L11##v1932053##b#t1932053##l\r\n";
            }

            if (cm.getBossRank("1932057", 2) > 0) {
                selStr += "\t\t\t\t#L12##v1932057##b#t1932057##l\r\n";
            }

            if (cm.getBossRank("1932071", 2) > 0) {
                selStr += "\t\t\t\t#L13##v1932071##b#t1932071##l\r\n";
            }

            if (cm.getBossRank("1932072", 2) > 0) {
                selStr += "\t\t\t\t#L14##v1932072##b#t1932072##l\r\n";
            }

            if (cm.getBossRank("1932078", 2) > 0) {
                selStr += "\t\t\t\t#L15##v1932078##b#t1932078##l\r\n";
            }
            if (cm.getBossRank("1932080", 2) > 0) {
                selStr += "\t\t\t\t#L16##v1932080##b#t1932080##l\r\n";
            }
            if (cm.getBossRank("1932081", 2) > 0) {
                selStr += "\t\t\t\t#L17##v1932081##b#t1932081##l\r\n";
            }

            if (cm.getBossRank("1932084", 2) > 0) {
                selStr += "\t\t\t\t#L18##v1932084##b#t1932084##l\r\n";
            }

            if (cm.getBossRank("1932086", 2) > 0) {
                selStr += "\t\t\t\t#L19##v1932086##b#t1932086##l\r\n";
            }
            if (cm.getBossRank("1932087", 2) > 0) {
                selStr += "\t\t\t\t#L20##v1932087##b#t1932087##l\r\n";
            }

            if (cm.getBossRank("1932089", 2) > 0) {
                selStr += "\t\t\t\t#L21##v1932089##b#t1932089##l\r\n";
            }

            if (cm.getBossRank("1932091", 2) > 0) {
                selStr += "\t\t\t\t#L22##v1932091##b#t1932091##l\r\n";
            }


            if (cm.getBossRank("1932092", 2) > 0) {
                selStr += "\t\t\t\t#L23##v1932092##b#t1932092##l\r\n";
            }

            if (cm.getBossRank("1932098", 2) > 0) {
                selStr += "\t\t\t\t#L24##v1932098##b#t1932098##l\r\n";
            }

            if (cm.getBossRank("1932100", 2) > 0) {
                selStr += "\t\t\t\t#L25##v1932100##b#t1932100##l\r\n";
            }

            if (cm.getBossRank("1932105", 2) > 0) {
                selStr += "\t\t\t\t#L26##v1932105##b#t1932105##l\r\n";
            }

            if (cm.getBossRank("1932106", 2) > 0) {
                selStr += "\t\t\t\t#L27##v1932106##b#t1932106##l\r\n";
            }

            if (cm.getBossRank("1932107", 2) > 0) {
                selStr += "\t\t\t\t#L28##v1932107##b#t1932107##l\r\n";
            }

            if (cm.getBossRank("1932108", 2) > 0) {
                selStr += "\t\t\t\t#L29##v1932108##b#t1932108##l\r\n";
            }

            if (cm.getBossRank("1932109", 2) > 0) {
                selStr += "\t\t\t\t#L30##v1932109##b#t1932109##l\r\n";
            }


            if (cm.getBossRank("1932110", 2) > 0) {
                selStr += "\t\t\t\t#L31##v1932110##b#t1932110##l\r\n";
            }

            if (cm.getBossRank("1932112", 2) > 0) {
                selStr += "\t\t\t\t#L32##v1932112##b#t1932112##l\r\n";
            }

            if (cm.getBossRank("1932113", 2) > 0) {
                selStr += "\t\t\t\t#L33##v1932113##b#t1932113##l\r\n";
            }
            if (cm.getBossRank("1932114", 2) > 0) {
                selStr += "\t\t\t\t#L34##v1932114##b#t1932114##l\r\n";
            }

            if (cm.getBossRank("1932115", 2) > 0) {
                selStr += "\t\t\t\t#L35##v1932115##b#t1932115##l\r\n";
            }
            if (cm.getBossRank("1932116", 2) > 0) {
                selStr += "\t\t\t\t#L36##v1932116##b#t1932116##l\r\n";
            }

            if (cm.getBossRank("1932117", 2) > 0) {
                selStr += "\t\t\t\t#L37##v1932117##b#t1932117##l\r\n";
            }

            if (cm.getBossRank("1932119", 2) > 0) {
                selStr += "\t\t\t\t#L38##v1932119##b#t1932119##l\r\n";
            }

            if (cm.getBossRank("1932121", 2) > 0) {
                selStr += "\t\t\t\t#L39##v1932121##b#t1932121##l\r\n";
            }

            if (cm.getBossRank("1932122", 2) > 0) {
                selStr += "\t\t\t\t#L40##v1932122##b#t1932122##l\r\n";
            }
            if (cm.getBossRank("1932123", 2) > 0) {
                selStr += "\t\t\t\t#L41##v1932123##b#t1932123##l\r\n";
            }
            if (cm.getBossRank("1932124", 2) > 0) {
                selStr += "\t\t\t\t#L42##v1932124##b#t1932124##l\r\n";
            }
            if (cm.getBossRank("1932127", 2) > 0) {
                selStr += "\t\t\t\t#L43##v1932127##b#t1932127##l\r\n";
            }
            if (cm.getBossRank("1932128", 2) > 0) {
                selStr += "\t\t\t\t#L44##v1932128##b#t1932128##l\r\n";
            }
            if (cm.getBossRank("1932140", 2) > 0) {
                selStr += "\t\t\t\t#L45##v1932140##b#t1932140##l\r\n";
            }
            if (cm.getBossRank("1932142", 2) > 0) {
                selStr += "\t\t\t\t#L46##v1932142##b#t1932142##l\r\n";
            }
            if (cm.getBossRank("1932143", 2) > 0) {
                selStr += "\t\t\t\t#L47##v1932143##b#t1932143##l\r\n";
            }
            if (cm.getBossRank("1932144", 2) > 0) {
                selStr += "\t\t\t\t#L48##v1932144##b#t1932144##l\r\n";
            }
            if (cm.getBossRank("1932148", 2) > 0) {
                selStr += "\t\t\t\t#L49##v1932148##b#t1932148##l\r\n";
            }
            if (cm.getBossRank("1932150", 2) > 0) {
                selStr += "\t\t\t\t#L50##v1932150##b#t1932150##l\r\n";
            }
            if (cm.getBossRank("1932151", 2) > 0) {
                selStr += "\t\t\t\t#L51##v1932151##b#t1932151##l\r\n";
            }
            if (cm.getBossRank("1932152", 2) > 0) {
                selStr += "\t\t\t\t#L52##v1932152##b#t1932152##l\r\n";
            }
            if (cm.getBossRank("1932153", 2) > 0) {
                selStr += "\t\t\t\t#L53##v1932153##b#t1932153##l\r\n";
            }
            if (cm.getBossRank("1932154", 2) > 0) {
                selStr += "\t\t\t\t#L54##v1932154##b#t1932154##l\r\n";
            }
            if (cm.getBossRank("1932156", 2) > 0) {
                selStr += "\t\t\t\t#L55##v1932156##b#t1932156##l\r\n";
            }
            if (cm.getBossRank("1932157", 2) > 0) {
                selStr += "\t\t\t\t#L56##v1932157##b#t1932157##l\r\n";
            }
            if (cm.getBossRank("1932158", 2) > 0) {
                selStr += "\t\t\t\t#L57##v1932158##b#t1932158##l\r\n";
            }

            if (cm.getBossRank("1932159", 2) > 0) {
                selStr += "\t\t\t\t#L58##v1932159##b#t1932159##l\r\n";
            }

            if (cm.getBossRank("1932161", 2) > 0) {
                selStr += "\t\t\t\t#L59##v1932161##b#t1932161##l\r\n";
            }

            if (cm.getBossRank("1932162", 2) > 0) {
                selStr += "\t\t\t\t#L60##v1932162##b#t1932162##l\r\n";
            }

            if (cm.getBossRank("1932163", 2) > 0) {
                selStr += "\t\t\t\t#L61##v1932163##b#t1932163##l\r\n";
            }

            if (cm.getBossRank("1932164", 2) > 0) {
                selStr += "\t\t\t\t#L62##v1932164##b#t1932164##l\r\n";
            }

            if (cm.getBossRank("1932165", 2) > 0) {
                selStr += "\t\t\t\t#L63##v1932165##b#t1932165##l\r\n";
            }

            if (cm.getBossRank("1932167", 2) > 0) {
                selStr += "\t\t\t\t#L64##v1932167##b#t1932167##l\r\n";
            }
            if (cm.getBossRank("1932170", 2) > 0) {
                selStr += "\t\t\t\t#L65##v1932170##b#t1932170##l\r\n";
            }
            if (cm.getBossRank("1932171", 2) > 0) {
                selStr += "\t\t\t\t#L66##v1932171##b#t1932171##l\r\n";
            }

            if (cm.getBossRank("1932173", 2) > 0) {
                selStr += "\t\t\t\t#L67##v1932173##b#t1932173##l\r\n";
            }
            if (cm.getBossRank("1932178", 2) > 0) {
                selStr += "\t\t\t\t#L68##v1932178##b#t1932178##l\r\n";
            }
            if (cm.getBossRank("1932191", 2) > 0) {
                selStr += "\t\t\t\t#L69##v1932191##b#t1932191##l\r\n";
            }
            if (cm.getBossRank("1932192", 2) > 0) {
                selStr += "\t\t\t\t#L70##v1932192##b#t1932192##l\r\n";
            }

            if (cm.getBossRank("1932193", 2) > 0) {
                selStr += "\t\t\t\t#L71##v1932193##b#t1932193##l\r\n";
            }
            if (cm.getBossRank("1932187", 2) > 0) {
                selStr += "\t\t\t\t#L72##v1932187##b#t1932187##l\r\n";
            }

            if (cm.getBossRank("1932188", 2) > 0) {
                selStr += "\t\t\t\t#L73##v1932188##b#t1932188##l\r\n";
            }

            if (cm.getBossRank("1932188", 2) > 0) {
                selStr += "\t\t\t\t#L74##v1932188##b#t1932188##l\r\n";
            }
            if (cm.getBossRank("1932188", 2) > 0) {
                selStr += "\t\t\t\t#L75##v1932188##b#t1932188##l\r\n";
            }
            if (cm.getBossRank("1932189", 2) > 0) {
                selStr += "\t\t\t\t#L76##v1932189##b#t1932189##l\r\n";
            }

            if (cm.getBossRank("1932190", 2) > 0) {
                selStr += "\t\t\t\t#L77##v1932190##b#t1932190##l\r\n";
            }

            if (cm.getBossRank("1932195", 2) > 0) {
                selStr += "\t\t\t\t#L78##v1932195##b#t1932195##l\r\n";
            }

            if (cm.getBossRank("1932198", 2) > 0) {
                selStr += "\t\t\t\t#L79##v1932198##b#t1932198##l\r\n";
            }


            if (cm.getBossRank("1932199", 2) > 0) {
                selStr += "\t\t\t\t#L80##v1932199##b#t1932199##l\r\n";
            }
            if (cm.getBossRank("1932200", 2) > 0) {
                selStr += "\t\t\t\t#L81##v1932200##b#t1932200##l\r\n";
            }
            if (cm.getBossRank("1932202", 2) > 0) {
                selStr += "\t\t\t\t#L82##v1932202##b#t1932202##l\r\n";
            }

            if (cm.getBossRank("1932204", 2) > 0) {
                selStr += "\t\t\t\t#L83##v1932204##b#t1932204##l\r\n";
            }

            if (cm.getBossRank("1932205", 2) > 0) {
                selStr += "\t\t\t\t#L84##v1932205##b#t1932205##l\r\n";
            }

            if (cm.getBossRank("1932207", 2) > 0) {
                selStr += "\t\t\t\t#L85##v1932207##b#t1932207##l\r\n";
            }

            if (cm.getBossRank("1932212", 2) > 0) {
                selStr += "\t\t\t\t#L86##v1932212##b#t1932212##l\r\n";
            }

            if (cm.getBossRank("1932213", 2) > 0) {
                selStr += "\t\t\t\t#L87##v1932213##b#t1932213##l\r\n";
            }
            if (cm.getBossRank("1932214", 2) > 0) {
                selStr += "\t\t\t\t#L88##v1932214##b#t1932214##l\r\n";
            }

            if (cm.getBossRank("1932215", 2) > 0) {
                selStr += "\t\t\t\t#L89##v1932215##b#t1932215##l\r\n";
            }
            if (cm.getBossRank("1932216", 2) > 0) {
                selStr += "\t\t\t\t#L90##v1932216##b#t1932216##l\r\n";
            }

            if (cm.getBossRank("1932217", 2) > 0) {
                selStr += "\t\t\t\t#L91##v1932217##b#t1932217##l\r\n";
            }
            if (cm.getBossRank("1932223", 2) > 0) {
                selStr += "\t\t\t\t#L92##v1932223##b#t1932223##l\r\n";
            }
            if (cm.getBossRank("1932224", 2) > 0) {
                selStr += "\t\t\t\t#L93##v1932224##b#t1932224##l\r\n";
            }

            if (cm.getBossRank("1932230", 2) > 0) {
                selStr += "\t\t\t\t#L94##v1932230##b#t1932230##l\r\n";
            }

            if (cm.getBossRank("1932232", 2) > 0) {
                selStr += "\t\t\t\t#L95##v1932232##b#t1932232##l\r\n";
            }

            if (cm.getBossRank("1932234", 2) > 0) {
                selStr += "\t\t\t\t#L96##v1932234##b#t1932234##l\r\n";
            }

            if (cm.getBossRank("1932235", 2) > 0) {
                selStr += "\t\t\t\t#L97##v1932235##b#t1932235##l\r\n";
            }

            if (cm.getBossRank("1932236", 2) > 0) {
                selStr += "\t\t\t\t#L98##v1932236##b#t1932236##l\r\n";
            }
            if (cm.getBossRank("1932237", 2) > 0) {
                selStr += "\t\t\t\t#L99##v1932237##b#t1932237##l\r\n";
            }
            if (cm.getBossRank("1932238", 2) > 0) {
                selStr += "\t\t\t\t#L100##v1932238##b#t1932238##l\r\n";
            }
            if (cm.getBossRank("1932239", 2) > 0) {
                selStr += "\t\t\t\t#L101##v1932239##b#t1932239##l\r\n";
            }
            if (cm.getBossRank("1932240", 2) > 0) {
                selStr += "\t\t\t\t#L102##v1932240##b#t1932240##l\r\n";
            }
            if (cm.getBossRank("1932241", 2) > 0) {
                selStr += "\t\t\t\t#L103##v1932241##b#t1932241##l\r\n";
            }
            if (cm.getBossRank("1932242", 2) > 0) {
                selStr += "\t\t\t\t#L104##v1932242##b#t1932242##l\r\n";
            }
            if (cm.getBossRank("1932243", 2) > 0) {
                selStr += "\t\t\t\t#L105##v1932243##b#t1932243##l\r\n";
            }
            if (cm.getBossRank("1932246", 2) > 0) {
                selStr += "\t\t\t\t#L106##v1932246##b#t1932246##l\r\n";
            }
            if (cm.getBossRank("1932247", 2) > 0) {
                selStr += "\t\t\t\t#L107##v1932247##b#t1932247##l\r\n";
            }
            if (cm.getBossRank("1932248", 2) > 0) {
                selStr += "\t\t\t\t#L108##v1932248##b#t1932248##l\r\n";
            }
            if (cm.getBossRank("1932251", 2) > 0) {
                selStr += "\t\t\t\t#L109##v1932251##b#t1932251##l\r\n";
            }

            if (cm.getBossRank("1932252", 2) > 0) {
                selStr += "\t\t\t\t#L110##v1932252##b#t1932252##l\r\n";
            }
            if (cm.getBossRank("1932254", 2) > 0) {
                selStr += "\t\t\t\t#L111##v1932254##b#t1932254##l\r\n";
            }
            if (cm.getBossRank("1932255", 2) > 0) {
                selStr += "\t\t\t\t#L112##v1932255##b#t1932255##l\r\n";
            }


            if (cm.getBossRank("1932256", 2) > 0) {
                selStr += "\t\t\t\t#L113##v1932256##b#t1932256##l\r\n";
            }
            if (cm.getBossRank("1932258", 2) > 0) {
                selStr += "\t\t\t\t#L114##v1932258##b#t1932258##l\r\n";
            }

            if (cm.getBossRank("1932259", 2) > 0) {
                selStr += "\t\t\t\t#L115##v1932259##b#t1932259##l\r\n";
            }

            if (cm.getBossRank("1932260", 2) > 0) {
                selStr += "\t\t\t\t#L116##v1932260##b#t1932260##l\r\n";
            }
            if (cm.getBossRank("1932261", 2) > 0) {
                selStr += "\t\t\t\t#L117##v1932261##b#t1932261##l\r\n";
            }
            if (cm.getBossRank("1932263", 2) > 0) {
                selStr += "\t\t\t\t#L118##v1932263##b#t1932263##l\r\n";
            }
            if (cm.getBossRank("1932264", 2) > 0) {
                selStr += "\t\t\t\t#L119##v1932264##b#t1932264##l\r\n";
            }
            if (cm.getBossRank("1932265", 2) > 0) {
                selStr += "\t\t\t\t#L120##v1932265##b#t1932265##l\r\n";
            }
            if (cm.getBossRank("1932272", 2) > 0) {
                selStr += "\t\t\t\t#L121##v1932272##b#t1932272##l\r\n";
            }
            if (cm.getBossRank("1932273", 2) > 0) {
                selStr += "\t\t\t\t#L122##v1932273##b#t1932273##l\r\n";
            }
            if (cm.getBossRank("1932274", 2) > 0) {
                selStr += "\t\t\t\t#L123##v1932274##b#t1932274##l\r\n";
            }
            if (cm.getBossRank("1932277", 2) > 0) {
                selStr += "\t\t\t\t#L124##v1932277##b#t1932277##l\r\n";
            }
            if (cm.getBossRank("1932279", 2) > 0) {
                selStr += "\t\t\t\t#L125##v1932279##b#t1932279##l\r\n";
            }
            if (cm.getBossRank("1932280", 2) > 0) {
                selStr += "\t\t\t\t#L126##v1932280##b#t1932280##l\r\n";
            }
            if (cm.getBossRank("1932281", 2) > 0) {
                selStr += "\t\t\t\t#L127##v1932281##b#t1932281##l\r\n";
            }
            if (cm.getBossRank("1932282", 2) > 0) {
                selStr += "\t\t\t\t#L128##v1932282##b#t1932282##l\r\n";
            }
            if (cm.getBossRank("1932286", 2) > 0) {
                selStr += "\t\t\t\t#L129##v1932286##b#t1932286##l\r\n";
            }
            if (cm.getBossRank("1932287", 2) > 0) {
                selStr += "\t\t\t\t#L130##v1932287##b#t1932287##l\r\n";
            }
            if (cm.getBossRank("1932288", 2) > 0) {
                selStr += "\t\t\t\t#L131##v1932288##b#t1932288##l\r\n";
            }
            if (cm.getBossRank("1932290", 2) > 0) {
                selStr += "\t\t\t\t#L132##v1932290##b#t1932290##l\r\n";
            }
            if (cm.getBossRank("1932293", 2) > 0) {
                selStr += "\t\t\t\t#L133##v1932293##b#t1932293##l\r\n";
            }
            if (cm.getBossRank("1932292", 2) > 0) {
                selStr += "\t\t\t\t#L134##v1932292##b#t1932292##l\r\n";
            }
            if (cm.getBossRank("1932297", 2) > 0) {
                selStr += "\t\t\t\t#L135##v1932297##b#t1932297##l\r\n";
            }
            if (cm.getBossRank("1932302", 2) > 0) {
                selStr += "\t\t\t\t#L136##v1932302##b#t1932302##l\r\n";
            }
            if (cm.getBossRank("1932303", 2) > 0) {
                selStr += "\t\t\t\t#L137##v1932303##b#t1932303##l\r\n";
            }
            if (cm.getBossRank("1932304", 2) > 0) {
                selStr += "\t\t\t\t#L138##v1932304##b#t1932304##l\r\n";
            }
            if (cm.getBossRank("1932308", 2) > 0) {
                selStr += "\t\t\t\t#L139##v1932308##b#t1932308##l\r\n";
            }
            if (cm.getBossRank("1932313", 2) > 0) {
                selStr += "\t\t\t\t#L140##v1932313##b#t1932313##l\r\n";
            }
            if (cm.getBossRank("1932314", 2) > 0) {
                selStr += "\t\t\t\t#L141##v1932314##b#t1932314##l\r\n";
            }
            if (cm.getBossRank("1932315", 2) > 0) {
                selStr += "\t\t\t\t#L141##v1932315##b#t1932315##l\r\n";
            }
            if (cm.getBossRank("1932316", 2) > 0) {
                selStr += "\t\t\t\t#L142##v1932316##b#t1932316##l\r\n";
            }
            if (cm.getBossRank("1932317", 2) > 0) {
                selStr += "\t\t\t\t#L143##v1932317##b#t1932317##l\r\n";
            }
            if (cm.getBossRank("1932318", 2) > 0) {
                selStr += "\t\t\t\t#L144##v1932318##b#t1932318##l\r\n";
            }
            if (cm.getBossRank("1932319", 2) > 0) {
                selStr += "\t\t\t\t#L145##v1932319##b#t1932319##l\r\n";
            }
            if (cm.getBossRank("1932322", 2) > 0) {
                selStr += "\t\t\t\t#L146##v1932322##b#t1932322##l\r\n";
            }
            if (cm.getBossRank("1932323", 2) > 0) {
                selStr += "\t\t\t\t#L147##v1932323##b#t1932323##l\r\n";
            }
            if (cm.getBossRank("1932327", 2) > 0) {
                selStr += "\t\t\t\t#L148##v1932327##b#t1932327##l\r\n";
            }

            if (cm.getBossRank("1932329", 2) > 0) {
                selStr += "\t\t\t\t#L149##v1932329##b#t1932329##l\r\n";
            }
            if (cm.getBossRank("1932330", 2) > 0) {
                selStr += "\t\t\t\t#L150##v1932330##b#t1932330##l\r\n";
            }
            if (cm.getBossRank("1932334", 2) > 0) {
                selStr += "\t\t\t\t#L151##v1932334##b#t1932334##l\r\n";
            }
            if (cm.getBossRank("1932335", 2) > 0) {
                selStr += "\t\t\t\t#L152##v1932335##b#t1932335##l\r\n";
            }
            if (cm.getBossRank("1932336", 2) > 0) {
                selStr += "\t\t\t\t#L153##v1932336##b#t1932336##l\r\n";
            }
            if (cm.getBossRank("1932337", 2) > 0) {
                selStr += "\t\t\t\t#L154##v1932337##b#t1932337##l\r\n";
            }
            if (cm.getBossRank("1932338", 2) > 0) {
                selStr += "\t\t\t\t#L155##v1932338##b#t1932338##l\r\n";
            }
            if (cm.getBossRank("1932341", 2) > 0) {
                selStr += "\t\t\t\t#L156##v1932341##b#t1932341##l\r\n";
            }
            if (cm.getBossRank("1932342", 2) > 0) {
                selStr += "\t\t\t\t#L157##v1932342##b#t1932342##l\r\n";
            }

            if (cm.getBossRank("1932350", 2) > 0) {
                selStr += "\t\t\t\t#L158##v1932350##b#t1932350##l\r\n";
            }
            if (cm.getBossRank("1932351", 2) > 0) {
                selStr += "\t\t\t\t#L159##v1932351##b#t1932351##l\r\n";
            }
            if (cm.getBossRank("1932352", 2) > 0) {
                selStr += "\t\t\t\t#L160##v1932352##b#t1932352##l\r\n";
            }
            if (cm.getBossRank("1932353", 2) > 0) {
                selStr += "\t\t\t\t#L161##v1932353##b#t1932353##l\r\n";
            }
            if (cm.getBossRank("1932355", 2) > 0) {
                selStr += "\t\t\t\t#L162##v1932355##b#t1932355##l\r\n";
            }
            if (cm.getBossRank("1932366", 2) > 0) {
                selStr += "\t\t\t\t#L163##v1932366##b#t1932366##l\r\n";
            }
        } else {
            selStr += "\r\n\r\n  " + 维护图 + "";
        }


        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 163:
                cm.getPlayer().setMountId(1932366);
                cm.sendOk("切换骑宠成功。#v1932366#");
                cm.dispose();
                break;
            case 162:
                cm.getPlayer().setMountId(1932355);
                cm.sendOk("切换骑宠成功。#v1932355#");
                cm.dispose();
                break;
            case 161:
                cm.getPlayer().setMountId(1932353);
                cm.sendOk("切换骑宠成功。#v1932353#");
                cm.dispose();
                break;
            case 160:
                cm.getPlayer().setMountId(1932352);
                cm.sendOk("切换骑宠成功。#v1932352#");
                cm.dispose();
                break;

            case 159:
                cm.getPlayer().setMountId(1932351);
                cm.sendOk("切换骑宠成功。#v1932351#");
                cm.dispose();
                break;
            case 158:
                cm.getPlayer().setMountId(1932350);
                cm.sendOk("切换骑宠成功。#v1932350#");
                cm.dispose();
                break;
            case 157:
                cm.getPlayer().setMountId(1932342);
                cm.sendOk("切换骑宠成功。#v1932342#");
                cm.dispose();
                break;
            case 156:
                cm.getPlayer().setMountId(1932341);
                cm.sendOk("切换骑宠成功。#v1932341#");
                cm.dispose();
                break;
            case 155:
                cm.getPlayer().setMountId(1932338);
                cm.sendOk("切换骑宠成功。#v1932338#");
                cm.dispose();
                break;
            case 154:
                cm.getPlayer().setMountId(1932337);
                cm.sendOk("切换骑宠成功。#v1932337#");
                cm.dispose();
                break;
            case 153:
                cm.getPlayer().setMountId(1932336);
                cm.sendOk("切换骑宠成功。#v1932336#");
                cm.dispose();
                break;
            case 152:
                cm.getPlayer().setMountId(1932335);
                cm.sendOk("切换骑宠成功。#v1932335#");
                cm.dispose();
                break;
            case 151:
                cm.getPlayer().setMountId(1932334);
                cm.sendOk("切换骑宠成功。#v1932334#");
                cm.dispose();
                break;

            case 150:
                cm.getPlayer().setMountId(1932330);
                cm.sendOk("切换骑宠成功。#v1932330#");
                cm.dispose();
                break;
            case 149:
                cm.getPlayer().setMountId(1932329);
                cm.sendOk("切换骑宠成功。#v1932329#");
                cm.dispose();
                break;
            case 148:
                cm.getPlayer().setMountId(1932327);
                cm.sendOk("切换骑宠成功。#v1932327#");
                cm.dispose();
                break;
            case 147:
                cm.getPlayer().setMountId(1932323);
                cm.sendOk("切换骑宠成功。#v1932323#");
                cm.dispose();
                break;
            case 146:
                cm.getPlayer().setMountId(1932322);
                cm.sendOk("切换骑宠成功。#v1932322#");
                cm.dispose();
                break;
            case 145:
                cm.getPlayer().setMountId(1932319);
                cm.sendOk("切换骑宠成功。#v1932319#");
                cm.dispose();
                break;
            case 144:
                cm.getPlayer().setMountId(1932318);
                cm.sendOk("切换骑宠成功。#v1932318#");
                cm.dispose();
                break;
            case 143:
                cm.getPlayer().setMountId(1932317);
                cm.sendOk("切换骑宠成功。#v1932317#");
                cm.dispose();
                break;
            case 142:
                cm.getPlayer().setMountId(1932316);
                cm.sendOk("切换骑宠成功。#v1932316#");
                cm.dispose();
                break;
            case 141:
                cm.getPlayer().setMountId(1932315);
                cm.sendOk("切换骑宠成功。#v1932315#");
                cm.dispose();
                break;
            case 140:
                cm.getPlayer().setMountId(1932313);
                cm.sendOk("切换骑宠成功。#v1932313#");
                cm.dispose();
                break;
            case 139:
                cm.getPlayer().setMountId(1932308);
                cm.sendOk("切换骑宠成功。#v1932308#");
                cm.dispose();
                break;
            case 138:
                cm.getPlayer().setMountId(1932304);
                cm.sendOk("切换骑宠成功。#v1932304#");
                cm.dispose();
                break;
            case 137:
                cm.getPlayer().setMountId(1932303);
                cm.sendOk("切换骑宠成功。#v1932303#");
                cm.dispose();
                break;
            case 136:
                cm.getPlayer().setMountId(1932302);
                cm.sendOk("切换骑宠成功。#v1932302#");
                cm.dispose();
                break;
            case 135:
                cm.getPlayer().setMountId(1932297);
                cm.sendOk("切换骑宠成功。#v1932297#");
                cm.dispose();
                break;
            case 134:
                cm.getPlayer().setMountId(1932292);
                cm.sendOk("切换骑宠成功。#v1932292#");
                cm.dispose();
                break;
            case 133:
                cm.getPlayer().setMountId(1932293);
                cm.sendOk("切换骑宠成功。#v1932293#");
                cm.dispose();
                break;
            case 132:
                cm.getPlayer().setMountId(1932290);
                cm.sendOk("切换骑宠成功。#v1932290#");
                cm.dispose();
                break;
            case 131:
                cm.getPlayer().setMountId(1932288);
                cm.sendOk("切换骑宠成功。#v1932288#");
                cm.dispose();
                break;

            case 130:
                cm.getPlayer().setMountId(1932287);
                cm.sendOk("切换骑宠成功。#v1932287#");
                cm.dispose();
                break;
            case 129:
                cm.getPlayer().setMountId(1932286);
                cm.sendOk("切换骑宠成功。#v1932286#");
                cm.dispose();
                break;
            case 128:
                cm.getPlayer().setMountId(1932282);
                cm.sendOk("切换骑宠成功。#v1932282#");
                cm.dispose();
                break;
            case 127:
                cm.getPlayer().setMountId(1932281);
                cm.sendOk("切换骑宠成功。#v1932281#");
                cm.dispose();
                break;
            case 126:
                cm.getPlayer().setMountId(1932280);
                cm.sendOk("切换骑宠成功。#v1932280#");
                cm.dispose();
                break;
            case 125:
                cm.getPlayer().setMountId(1932279);
                cm.sendOk("切换骑宠成功。#v1932279#");
                cm.dispose();
                break;
            case 124:
                cm.getPlayer().setMountId(1932277);
                cm.sendOk("切换骑宠成功。#v1932277#");
                cm.dispose();
                break;
            case 123:
                cm.getPlayer().setMountId(1932274);
                cm.sendOk("切换骑宠成功。#v1932274#");
                cm.dispose();
                break;
            case 122:
                cm.getPlayer().setMountId(1932273);
                cm.sendOk("切换骑宠成功。#v1932273#");
                cm.dispose();
                break;
            case 121:
                cm.getPlayer().setMountId(1932272);
                cm.sendOk("切换骑宠成功。#v1932272#");
                cm.dispose();
                break;
            case 120:
                cm.getPlayer().setMountId(1932265);
                cm.sendOk("切换骑宠成功。#v1932265#");
                cm.dispose();
                break;
            case 119:
                cm.getPlayer().setMountId(1932264);
                cm.sendOk("切换骑宠成功。#v1932264#");
                cm.dispose();
                break;
            case 118:
                cm.getPlayer().setMountId(1932263);
                cm.sendOk("切换骑宠成功。#v1932263#");
                cm.dispose();
                break;
            case 117:
                cm.getPlayer().setMountId(1932261);
                cm.sendOk("切换骑宠成功。#v1932261#");
                cm.dispose();
                break;
            case 116:
                cm.getPlayer().setMountId(1932260);
                cm.sendOk("切换骑宠成功。#v1932260#");
                cm.dispose();
                break;
            case 115:
                cm.getPlayer().setMountId(1932259);
                cm.sendOk("切换骑宠成功。#v1932259#");
                cm.dispose();
                break;
            case 114:
                cm.getPlayer().setMountId(1932258);
                cm.sendOk("切换骑宠成功。#v1932258#");
                cm.dispose();
                break;

            case 113:
                cm.getPlayer().setMountId(1932256);
                cm.sendOk("切换骑宠成功。#v1932256#");
                cm.dispose();
                break;
            case 112:
                cm.getPlayer().setMountId(1932255);
                cm.sendOk("切换骑宠成功。#v1932255#");
                cm.dispose();
                break;
            case 111:
                cm.getPlayer().setMountId(1932254);
                cm.sendOk("切换骑宠成功。#v1932254#");
                cm.dispose();
                break;
            case 110:
                cm.getPlayer().setMountId(1932252);
                cm.sendOk("切换骑宠成功。#v1932252#");
                cm.dispose();
                break;
            case 109:
                cm.getPlayer().setMountId(1932251);
                cm.sendOk("切换骑宠成功。#v1932251#");
                cm.dispose();
                break;
            case 108:
                cm.getPlayer().setMountId(1932248);
                cm.sendOk("切换骑宠成功。#v1932248#");
                cm.dispose();
                break;
            case 107:
                cm.getPlayer().setMountId(1932247);
                cm.sendOk("切换骑宠成功。#v1932247#");
                cm.dispose();
                break;
            case 106:
                cm.getPlayer().setMountId(1932246);
                cm.sendOk("切换骑宠成功。#v1932246#");
                cm.dispose();
                break;
            case 105:
                cm.getPlayer().setMountId(1932243);
                cm.sendOk("切换骑宠成功。#v1932243#");
                cm.dispose();
                break;
            case 104:
                cm.getPlayer().setMountId(1932242);
                cm.sendOk("切换骑宠成功。#v1932242#");
                cm.dispose();
                break;
            case 103:
                cm.getPlayer().setMountId(1932241);
                cm.sendOk("切换骑宠成功。#v1932241#");
                cm.dispose();
                break;
            case 102:
                cm.getPlayer().setMountId(1932240);
                cm.sendOk("切换骑宠成功。#v1932240#");
                cm.dispose();
                break;
            case 101:
                cm.getPlayer().setMountId(1932239);
                cm.sendOk("切换骑宠成功。#v1932239#");
                cm.dispose();
                break;
            case 100:
                cm.getPlayer().setMountId(1932238);
                cm.sendOk("切换骑宠成功。#v1932238#");
                cm.dispose();
                break;

            case 99:
                cm.getPlayer().setMountId(1932237);
                cm.sendOk("切换骑宠成功。#v1932237#");
                cm.dispose();
                break;
            case 98:
                cm.getPlayer().setMountId(1932236);
                cm.sendOk("切换骑宠成功。#v1932236#");
                cm.dispose();
                break;

            case 97:
                cm.getPlayer().setMountId(1932235);
                cm.sendOk("切换骑宠成功。#v1932235#");
                cm.dispose();
                break;

            case 96:
                cm.getPlayer().setMountId(1932234);
                cm.sendOk("切换骑宠成功。#v1932234#");
                cm.dispose();
                break;

            case 95:
                cm.getPlayer().setMountId(1932232);
                cm.sendOk("切换骑宠成功。#v1932232#");
                cm.dispose();
                break;


            case 94:
                cm.getPlayer().setMountId(1932230);
                cm.sendOk("切换骑宠成功。#v1932230#");
                cm.dispose();
                break;


            case 93:
                cm.getPlayer().setMountId(1932224);
                cm.sendOk("切换骑宠成功。#v1932224#");
                cm.dispose();
                break;

            case 92:
                cm.getPlayer().setMountId(1932223);
                cm.sendOk("切换骑宠成功。#v1932223#");
                cm.dispose();
                break;


            case 91:
                cm.getPlayer().setMountId(1932217);
                cm.sendOk("切换骑宠成功。#v1932217#");
                cm.dispose();
                break;



            case 90:
                cm.getPlayer().setMountId(1932216);
                cm.sendOk("切换骑宠成功。#v1932216#");
                cm.dispose();
                break;
            case 89:
                cm.getPlayer().setMountId(1932215);
                cm.sendOk("切换骑宠成功。#v1932215#");
                cm.dispose();
                break;


            case 88:
                cm.getPlayer().setMountId(1932214);
                cm.sendOk("切换骑宠成功。#v1932214#");
                cm.dispose();
                break;


            case 87:
                cm.getPlayer().setMountId(1932213);
                cm.sendOk("切换骑宠成功。#v1932213#");
                cm.dispose();
                break;


            case 86:
                cm.getPlayer().setMountId(1932212);
                cm.sendOk("切换骑宠成功。#v1932212#");
                cm.dispose();
                break;

            case 85:
                cm.getPlayer().setMountId(1932207);
                cm.sendOk("切换骑宠成功。#v1932207#");
                cm.dispose();
                break;
            case 84:
                cm.getPlayer().setMountId(1932205);
                cm.sendOk("切换骑宠成功。#v1932205#");
                cm.dispose();
                break;

            case 83:
                cm.getPlayer().setMountId(1932204);
                cm.sendOk("切换骑宠成功。#v1932204#");
                cm.dispose();
                break;

            case 82:
                cm.getPlayer().setMountId(1932202);
                cm.sendOk("切换骑宠成功。#v1932202#");
                cm.dispose();
                break;

            case 81:
                cm.getPlayer().setMountId(1932200);
                cm.sendOk("切换骑宠成功。#v1932200#");
                cm.dispose();
                break;

            case 80:
                cm.getPlayer().setMountId(1932199);
                cm.sendOk("切换骑宠成功。#v1932199#");
                cm.dispose();
                break;
            case 79:
                cm.getPlayer().setMountId(1932198);
                cm.sendOk("切换骑宠成功。#v1932198#");
                cm.dispose();
                break;

            case 78:
                cm.getPlayer().setMountId(1932195);
                cm.sendOk("切换骑宠成功。#v1932195#");
                cm.dispose();
                break;

            case 77:
                cm.getPlayer().setMountId(1932190);
                cm.sendOk("切换骑宠成功。#v1932190#");
                cm.dispose();
                break;
            case 76:
                cm.getPlayer().setMountId(1932189);
                cm.sendOk("切换骑宠成功。#v1932189#");
                cm.dispose();
                break;
            case 75:
                cm.getPlayer().setMountId(1932188);
                cm.sendOk("切换骑宠成功。#v1932188#");
                cm.dispose();
                break;

            case 74:
                cm.getPlayer().setMountId(1932188);
                cm.sendOk("切换骑宠成功。#v1932188#");
                cm.dispose();
                break;

            case 73:
                cm.getPlayer().setMountId(1932188);
                cm.sendOk("切换骑宠成功。#v1932188#");
                cm.dispose();
                break;

            case 72:
                cm.getPlayer().setMountId(1932187);
                cm.sendOk("切换骑宠成功。#v1932187#");
                cm.dispose();
                break;
            case 71:
                cm.getPlayer().setMountId(1932193);
                cm.sendOk("切换骑宠成功。#v1932193#");
                cm.dispose();
                break;
            case 70:
                cm.getPlayer().setMountId(1932192);
                cm.sendOk("切换骑宠成功。#v1932192#");
                cm.dispose();
                break;
            case 69:
                cm.getPlayer().setMountId(1932191);
                cm.sendOk("切换骑宠成功。#v1932191#");
                cm.dispose();
                break;
            case 68:
                cm.getPlayer().setMountId(1932178);
                cm.sendOk("切换骑宠成功。#v1932178#");
                cm.dispose();
                break;

            case 67:
                cm.getPlayer().setMountId(1932173);
                cm.sendOk("切换骑宠成功。#v1932173#");
                cm.dispose();
                break;

            case 66:
                cm.getPlayer().setMountId(1932171);
                cm.sendOk("切换骑宠成功。#v1932171#");
                cm.dispose();
                break;


            case 65:
                cm.getPlayer().setMountId(1932170);
                cm.sendOk("切换骑宠成功。#v1932170#");
                cm.dispose();
                break;

            case 64:
                cm.getPlayer().setMountId(1932167);
                cm.sendOk("切换骑宠成功。#v1932167#");
                cm.dispose();
                break;

            case 63:
                cm.getPlayer().setMountId(1932165);
                cm.sendOk("切换骑宠成功。#v1932165#");
                cm.dispose();
                break;

            case 62:
                cm.getPlayer().setMountId(1932164);
                cm.sendOk("切换骑宠成功。#v1932164#");
                cm.dispose();
                break;

            case 61:
                cm.getPlayer().setMountId(1932163);
                cm.sendOk("切换骑宠成功。#v1932163#");
                cm.dispose();
                break;

            case 60:
                cm.getPlayer().setMountId(1932162);
                cm.sendOk("切换骑宠成功。#v1932162#");
                cm.dispose();
                break;


            case 59:
                cm.getPlayer().setMountId(1932161);
                cm.sendOk("切换骑宠成功。#v1932161#");
                cm.dispose();
                break;

            case 58:
                cm.getPlayer().setMountId(1932159);
                cm.sendOk("切换骑宠成功。#v1932159#");
                cm.dispose();
                break;

            case 57:
                cm.getPlayer().setMountId(1932158);
                cm.sendOk("切换骑宠成功。#v1932158#");
                cm.dispose();
                break;

            case 56:
                cm.getPlayer().setMountId(1932157);
                cm.sendOk("切换骑宠成功。#v1932157#");
                cm.dispose();
                break;

            case 55:
                cm.getPlayer().setMountId(1932156);
                cm.sendOk("切换骑宠成功。#v1932156#");
                cm.dispose();
                break;
            case 54:
                cm.getPlayer().setMountId(1932154);
                cm.sendOk("切换骑宠成功。#v1932154#");
                cm.dispose();
                break;


            case 53:
                cm.getPlayer().setMountId(1932153);
                cm.sendOk("切换骑宠成功。#v1932153#");
                cm.dispose();
                break;


            case 52:
                cm.getPlayer().setMountId(1932152);
                cm.sendOk("切换骑宠成功。#v1932152#");
                cm.dispose();
                break;


            case 51:
                cm.getPlayer().setMountId(1932151);
                cm.sendOk("切换骑宠成功。#v1932151#");
                cm.dispose();
                break;
            case 50:
                cm.getPlayer().setMountId(1932150);
                cm.sendOk("切换骑宠成功。#v1932150#");
                cm.dispose();
                break;

            case 49:
                cm.getPlayer().setMountId(1932148);
                cm.sendOk("切换骑宠成功。#v1932148#");
                cm.dispose();
                break;

            case 48:
                cm.getPlayer().setMountId(1932144);
                cm.sendOk("切换骑宠成功。#v1932144#");
                cm.dispose();
                break;

            case 47:
                cm.getPlayer().setMountId(1932143);
                cm.sendOk("切换骑宠成功。#v1932143#");
                cm.dispose();
                break;
            case 46:
                cm.getPlayer().setMountId(1932142);
                cm.sendOk("切换骑宠成功。#v1932142#");
                cm.dispose();
                break;

            case 45:
                cm.getPlayer().setMountId(1932140);
                cm.sendOk("切换骑宠成功。#v1932140#");
                cm.dispose();
                break;
            case 44:
                cm.getPlayer().setMountId(1932128);
                cm.sendOk("切换骑宠成功。#v1932128#");
                cm.dispose();
                break;
            case 43:
                cm.getPlayer().setMountId(1932127);
                cm.sendOk("切换骑宠成功。#v1932127#");
                cm.dispose();
                break;
            case 42:
                cm.getPlayer().setMountId(1932124);
                cm.sendOk("切换骑宠成功。#v1932124#");
                cm.dispose();
                break;

            case 41:
                cm.getPlayer().setMountId(1932123);
                cm.sendOk("切换骑宠成功。#v1932123#");
                cm.dispose();
                break;
            case 40:
                cm.getPlayer().setMountId(1932122);
                cm.sendOk("切换骑宠成功。#v1932122#");
                cm.dispose();
                break;


            case 39:
                cm.getPlayer().setMountId(1932121);
                cm.sendOk("切换骑宠成功。#v1932121#");
                cm.dispose();
                break;

            case 38:
                cm.getPlayer().setMountId(1932119);
                cm.sendOk("切换骑宠成功。#v1932119#");
                cm.dispose();
                break;
            case 37:
                cm.getPlayer().setMountId(1932117);
                cm.sendOk("切换骑宠成功。#v1932117#");
                cm.dispose();
                break;

            case 36:
                cm.getPlayer().setMountId(1932116);
                cm.sendOk("切换骑宠成功。#v1932116#");
                cm.dispose();
                break;
            case 35:
                cm.getPlayer().setMountId(1932115);
                cm.sendOk("切换骑宠成功。#v1932115#");
                cm.dispose();
                break;

            case 34:
                cm.getPlayer().setMountId(1932114);
                cm.sendOk("切换骑宠成功。#v1932114#");
                cm.dispose();
                break;
            case 33:
                cm.getPlayer().setMountId(1932113);
                cm.sendOk("切换骑宠成功。#v1932113#");
                cm.dispose();
                break;

            case 32:
                cm.getPlayer().setMountId(1932112);
                cm.sendOk("切换骑宠成功。#v1932112#");
                cm.dispose();
                break;

            case 31:
                cm.getPlayer().setMountId(1932110);
                cm.sendOk("切换骑宠成功。#v1932110#");
                cm.dispose();
                break;


            case 30:
                cm.getPlayer().setMountId(1932109);
                cm.sendOk("切换骑宠成功。#v1932109#");
                cm.dispose();
                break;

            case 29:
                cm.getPlayer().setMountId(1932108);
                cm.sendOk("切换骑宠成功。#v1932108#");
                cm.dispose();
                break;

            case 28:
                cm.getPlayer().setMountId(1932107);
                cm.sendOk("切换骑宠成功。#v1932107#");
                cm.dispose();
                break;
            case 27:
                cm.getPlayer().setMountId(1932106);
                cm.sendOk("切换骑宠成功。#v1932106#");
                cm.dispose();
                break;

            case 26:
                cm.getPlayer().setMountId(1932105);
                cm.sendOk("切换骑宠成功。#v1932105#");
                cm.dispose();
                break;


            case 25:
                cm.getPlayer().setMountId(1932100);
                cm.sendOk("切换骑宠成功。#v1932100#");
                cm.dispose();
                break;


            case 24:
                cm.getPlayer().setMountId(1932098);
                cm.sendOk("切换骑宠成功。#v1932098#");
                cm.dispose();
                break;

            case 23:
                cm.getPlayer().setMountId(1932092);
                cm.sendOk("切换骑宠成功。#v1932092#");
                cm.dispose();
                break;


            case 22:
                cm.getPlayer().setMountId(1932091);
                cm.sendOk("切换骑宠成功。#v1932091#");
                cm.dispose();
                break;


            case 21:
                cm.getPlayer().setMountId(1932089);
                cm.sendOk("切换骑宠成功。#v1932089#");
                cm.dispose();
                break;
            case 20:
                cm.getPlayer().setMountId(1932087);
                cm.sendOk("切换骑宠成功。#v1932087#");
                cm.dispose();
                break;
            case 19:
                cm.getPlayer().setMountId(1932086);
                cm.sendOk("切换骑宠成功。#v1932086#");
                cm.dispose();
                break;

            case 18:
                cm.getPlayer().setMountId(1932084);
                cm.sendOk("切换骑宠成功。#v1932084#");
                cm.dispose();
                break;


            case 17:
                cm.getPlayer().setMountId(1932081);
                cm.sendOk("切换骑宠成功。#v1932081#");
                cm.dispose();
                break;


            case 16:
                cm.getPlayer().setMountId(1932080);
                cm.sendOk("切换骑宠成功。#v1932080#");
                cm.dispose();
                break;

            case 15:
                cm.getPlayer().setMountId(1932078);
                cm.sendOk("切换骑宠成功。#v1932078#");
                cm.dispose();
                break;

            case 14:
                cm.getPlayer().setMountId(1932072);
                cm.sendOk("切换骑宠成功。#v1932072#");
                cm.dispose();
                break;


            case 13:
                cm.getPlayer().setMountId(1932071);
                cm.sendOk("切换骑宠成功。#v1932071#");
                cm.dispose();
                break;


            case 12:
                cm.getPlayer().setMountId(1932057);
                cm.sendOk("切换骑宠成功。#v1932057#");
                cm.dispose();
                break;

            case 11:
                cm.getPlayer().setMountId(1932053);
                cm.sendOk("切换骑宠成功。#v1932053#");
                cm.dispose();
                break;

            case 10:
                cm.getPlayer().setMountId(1932052);
                cm.sendOk("切换骑宠成功。#v1932052#");
                cm.dispose();
                break;

            case 9:
                cm.getPlayer().setMountId(1932050);
                cm.sendOk("切换骑宠成功。#v1932050#");
                cm.dispose();
                break;

            case 8:
                cm.getPlayer().setMountId(1932049);
                cm.sendOk("切换骑宠成功。#v1932049#");
                cm.dispose();
                break;

            case 7:
                cm.getPlayer().setMountId(1932048);
                cm.sendOk("切换骑宠成功。#v1932048#");
                cm.dispose();
                break;

            case 6:
                cm.getPlayer().setMountId(1932047);
                cm.sendOk("切换骑宠成功。#v1932047#");
                cm.dispose();
                break;
            case 5:
                cm.getPlayer().setMountId(1932044);
                cm.sendOk("切换骑宠成功。#v1932044#");
                cm.dispose();
                break;
            case 4:
                cm.getPlayer().setMountId(1932038);
                cm.sendOk("切换骑宠成功。#v1932038#");
                cm.dispose();
                break;
            case 3:
                cm.getPlayer().setMountId(1932035);
                cm.sendOk("切换骑宠成功。#v1932035#");
                cm.dispose();
                break;
            case 2:
                cm.getPlayer().setMountId(1932034);
                cm.sendOk("切换骑宠成功。#v1932034#");
                cm.dispose();
                break;
            case 1:
                cm.getPlayer().setMountId(1932029);
                cm.sendOk("切换骑宠成功。#v1932029#");
                cm.dispose();
                break;
            case 0:
                cm.getPlayer().setMountId(0);
                cm.sendOk("切换骑宠成功。");
                cm.dispose();
                break;
            case 71447500:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;
		    case 71447501:
                cm.dispose();
                cm.openNpc(9900004,91);
                break;
            case 500:
                cm.GainPiot("骑宠开关", "1", -骑宠开关);
                cm.GainPiot("骑宠开关", "1", 1);
                cm.dispose();
                cm.openNpc(9900004, 10);
                break;
            case 501:
                cm.GainPiot("骑宠开关", "1", -骑宠开关);
                cm.dispose();
                cm.openNpc(9900004, 10);
                break
        }
    }
}