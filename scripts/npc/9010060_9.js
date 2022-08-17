var status = 0;
var typede = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (cm.getVipLevel() == 0) {
            var vip0 = "" + (1440 - cm.getVipExp()) + "";//vip升级经验
            var vip01 = "1440";//vip升级需要的经验
            var vip02 = "" + cm.getVipLevel() + 1 + "";
        }
        if (cm.getVipLevel() == 1) {
            var vip0 = "" + (1440 - cm.getVipExp()) + "";//vip升级经验
            var vip01 = "1440";//vip升级需要的经验
            var vip02 = "" + (cm.getVipLevel() + 1) + "";
        }
        if (cm.getVipLevel() == 2) {
            var vip0 = ""+ (4320 - cm.getVipExp()) +"" ;//vip升级经验
            var vip01 = "4320";//vip升级需要的经验
            var vip02 = "" + (cm.getVipLevel() + 1) + "";
        }
        
        if (cm.getVipLevel() == 3) {
            var vip0 = "" + (10080 - cm.getVipExp()) + "";//vip升级经验
            var vip01 = "10080";//vip升级需要的经验
            var vip02 = "" + (cm.getVipLevel() + 1) + "";
        }
        
        if (cm.getVipLevel() == 4) {
            var vip0 = "" + (21600 - cm.getVipExp()) + "";//vip升级经验
            var vip01 = "21600";//vip升级需要的经验
            var vip02 = "" + (cm.getVipLevel() + 1) + "";
        }
        
        if (cm.getVipLevel() == 5) {
            var vip0 = "" + (36000 - cm.getVipExp()) + "";//vip升级经验
            var vip01 = "36000";//vip升级需要的经验
            var vip02 = "" + (cm.getVipLevel() + 1) + "";
        }
        
        if (cm.getVipLevel() == 6) {
            var vip0 = "" + (57600 - cm.getVipExp()) + "";//vip升级经验
            var vip01 = "57600";//vip升级需要的经验
            var vip02 = "" + (cm.getVipLevel() + 1) + "";
        }

        if (cm.getVipLevel() == 7) {
            var vip0 = "最高等级";//vip升级经验
            var vip01 = "最高等级";//vip升级需要的经验
            var vip02 = "最高等级";
        }




        if (status == 0) {
            var vipjy = cm.getVipExp();
            var zyms = "";
            zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k";
            zyms += "您的超级VIP信息如下：\r\n";
            zyms += "VIP等级: #r" + cm.getVipLevel() + "               #kVIP名称: #b" + cm.getPlayer().getVipName() + "#k\r\n";
            zyms += "VIP到期时间: #r" + cm.getVipTimeShow() + "#k\r\n";
            zyms += "#kVIP经验: #r" + cm.getVipExp() + "/" + vip01 + "#k           \r\n升级VIP：#r" + vip02 + "     #k还需经验：#r" + vip0 + "#b#n\r\n";
            zyms += "                    #L1##b查看规则#l \r\n\r\n";
            zyms += "           #L2##b开通VIP#l  #fMob/0130101.img/move/0##L3##rVIP续费#k#l\r\n";
            zyms += "    #L4##rVIP等级送礼#l               #L5##rVIP每日福利#l\r\n";

            cm.sendSimple(zyms);









        } else if (selection == 1) {
            var zyms = "";
            zyms += "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#kVIP规则如下:\r\nVIP等级分7个阶段,每个阶段的福利都不同(等级越高福利越好)。\r\n开通VIP后游戏在线每5分钟VIP经验增加1,达到要求VIP等级自动升级。\r\n#r注意:#kVIP过期后每天会自动扣除经验点数200,VIP等级也会降低。\r\nVIP福利详解:\r\nVIP1、基础爆率x1.3 上线炫酷广播 专属每日福利\r\n";
            zyms += "VIP2、基础爆率x1.4 上线炫酷广播 专属每日福利\r\n";
            zyms += "VIP3、基础爆率x1.5 上线炫酷广播 专属每日福利\r\n";
            zyms += "VIP4、基础爆率x1.6 上线炫酷广播 专属每日福利\r\n";
            zyms += "VIP5、基础爆率x1.7 上线炫酷广播 专属每日福利\r\n";
            zyms += "VIP6、基础爆率x1.8 上线炫酷广播 专属每日福利\r\n";
            zyms += "VIP7、基础爆率x2.0 上线炫酷广播 专属每日福利\r\n";
            zyms += "购买VIP时间为30天,续费时间为30天。续费时间可以和基础时间叠加,完美实现提前续费。\r\n";
            cm.sendOk(zyms);
            cm.dispose();

        } else if (selection == 2) {
            if (cm.getVipLevel() > 0) {
                cm.sendOk("您已经开通了超级VIP,无法重复开通。\r\n\r\n如果您的超级VIP过期请使用VIP续费进行再次开通。");
            } else if (cm.getJQ() >= 500) {
                cm.addJQ(-500);
                cm.setVip(30);
                cm.sendOk("超级VIP开通成功。\r\n\r\n您的VIP到期时间: #r" + cm.getVipTimeShow() + "#k");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 开通了超级VIP，有了他(她)的赞助追忆MS会为大家带来更加完美的游戏体验。");
            } else {
                cm.sendOk("开通失败,开通超级VIP需要#b500金卷#k。\r\n\r\n账户金卷: #r" + cm.getJQ() + "");
            }
            cm.dispose();

        } else if (selection == 3) {
            if (cm.getVipLevel() == 0) {
                cm.sendOk("您没有开通VIP,请先开通VIP在续费。\r\n\r\n如果您VIP到期没时间续费,可以提前续费VIP。VIP时间会叠加！");
            } else if (cm.getJQ() >= 500) {
                cm.addJQ(-500);
                cm.addVip(30);
                cm.sendOk("续费VIP成功,您的VIP时间增加了30天。\r\n\r\nVIP到期时间: #r" + cm.getVipTimeShow() + "#k");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 续费了超级VIP，有了他(她)的赞助追忆MS会为大家带来更加完美的游戏体验。");
            } else {
                cm.sendOk("续费失败,续费超级VIP需要#b500金卷#k。\r\n\r\n账户金卷: #r" + cm.getJQ() + "");
            }
            cm.dispose();

        } else if (selection == 4) {
            cm.dispose();
            cm.openNpc(9010002);
        
        } else if (selection == 5) {
            cm.dispose();
            cm.openNpc(9010002,1);
           





        }

    }
}

