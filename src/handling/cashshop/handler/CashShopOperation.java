package handling.cashshop.handler;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.MapleClient;
import client.inventory.IItem;
import client.inventory.MapleInventoryIdentifier;
import client.inventory.MapleInventoryType;
import client.inventory.MapleRing;
import constants.GameConstants;
import constants.ServerConfig;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.CharacterTransfer;
import handling.world.World;
import server.AutobanManager;
import server.CashItemFactory;
import server.CashItemInfo;
import server.MTSStorage;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.LittleEndianAccessor;
import tools.packet.MTSCSPacket;

public class CashShopOperation {

    public static void LeaveCashShop(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        if (chr == null) {
            return;
        }
        int channel = c.getChannel();
        ChannelServer toch = ChannelServer.getInstance(channel);
        if (toch == null) {
            FileoutputUtil.logToFile("logs/Data/离开商城.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + c.getAccountName()
                            + " 帐号ID " + c.getAccID() + " 角色名 " + chr.getName() + " 角色ID " + chr.getId());
            c.getSession().close();
            return;
        }

        // CashShopServer.getPlayerStorageMTS().deregisterPlayer(chr);
        CashShopServer.getPlayerStorage().deregisterPlayer(chr);
        c.updateLoginState(MapleClient.LOGIN_SERVER_TRANSITION, c.getSessionIPAddress());
        try {
            World.channelChangeData(new CharacterTransfer(chr), chr.getId(), c.getChannel());
            c.sendPacket(MaplePacketCreator.getChannelChange(c,
                    Integer.parseInt(ChannelServer.getInstance(c.getChannel()).getSocket().split(":")[1])));
        } finally {
            // c.disconnect(true, true);
            chr.saveToDB(false, true);
            c.setPlayer(null);
            c.setReceiving(false);
            // c.getSession().close();
        }
    }

    public static void EnterCashShop(final int playerid, final MapleClient client) {
        CharacterTransfer transfer = CashShopServer.getPlayerStorage().getPendingCharacter(playerid);
        boolean mts = false;
        if (transfer == null) {
            transfer = CashShopServer.getPlayerStorageMTS().getPendingCharacter(playerid);
            mts = true;
            if (transfer == null) {
                // client.disconnect(false, false);
                client.getSession().close();
                return;
            }
        }

        MapleCharacter chr = MapleCharacter.ReconstructChr(transfer, client, false);
        client.setPlayer(chr);
        client.setAccID(chr.getAccountID());
        client.setSecondPassword(chr.getAccountSecondPassword());

        if (!client.CheckIPAddress()) { // Remote hack
            // client.disconnect(false, true);
            client.getSession().close();
            return;
        }

        final int state = client.getLoginState();
        boolean allowLogin = false;
        if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL) {
            if (!World.isCharacterListConnected(client.loadCharacterNames(client.getWorld()))) {
                allowLogin = true;
            }
        }
        if (!allowLogin) {
            client.setPlayer(null);
            client.getSession().close();
            return;
        }

        if (!LoginServer.CanLoginKey(client.getPlayer().getLoginKey(), client.getPlayer().getAccountID())
                || (LoginServer.getLoginKey(client.getPlayer().getAccountID()) == null
                        && !client.getPlayer().getLoginKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端登录KEY异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + client.getAccountName()
                    + " 客户端key：" + LoginServer.getLoginKey(client.getPlayer().getAccountID()) + " 伺服端key："
                    + client.getPlayer().getLoginKey() + " 进入商城1");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }
        if (!LoginServer.CanServerKey(client.getPlayer().getServerKey(), client.getPlayer().getAccountID())
                || (LoginServer.getServerKey(client.getPlayer().getAccountID()) == null
                        && !client.getPlayer().getServerKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端频道KEY异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + client.getAccountName()
                    + " 客户端key：" + LoginServer.getServerKey(client.getPlayer().getAccountID()) + " 伺服端key："
                    + client.getPlayer().getServerKey() + " 进入商城2");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }
        if (!LoginServer.CanClientKey(client.getPlayer().getClientKey(), client.getPlayer().getAccountID())
                || (LoginServer.getClientKey(client.getPlayer().getAccountID()) == null
                        && !client.getPlayer().getClientKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端进入KEY异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + client.getAccountName()
                    + " 客户端key：" + LoginServer.getClientKey(client.getPlayer().getAccountID()) + " 伺服端key："
                    + client.getPlayer().getClientKey() + " 进入商城3");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }

        client.updateLoginState(MapleClient.LOGIN_CS_LOGGEDIN, client.getSessionIPAddress());
        if (mts) {
            CashShopServer.getPlayerStorageMTS().registerPlayer(chr);
            client.sendPacket(MTSCSPacket.startMTS(chr, client));

            MTSOperation.MTSUpdate(MTSStorage.getInstance().getCart(client.getPlayer().getId()), client);
        } else {
            CashShopServer.getPlayerStorage().registerPlayer(chr);
            client.sendPacket(MTSCSPacket.warpCS(client));
            sendCashShopUpdate(client);
        }
        if (client.getPlayer().getCharacterNameById2(playerid) == null) {
            FileoutputUtil.logToFile("logs/Data/角色不存在.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + client.getAccountName() + "进入商城");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录不存在角色 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }

        if (!LoginServer.CanLoginKey(client.getPlayer().getLoginKey(), client.getPlayer().getAccountID())
                || (LoginServer.getLoginKey(client.getPlayer().getAccountID()) == null
                        && !client.getPlayer().getLoginKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端登录KEY异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + client.getAccountName()
                    + " 客户端key：" + LoginServer.getLoginKey(client.getPlayer().getAccountID()) + " 伺服端key："
                    + client.getPlayer().getLoginKey() + " 进入商城1");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }
        if (!LoginServer.CanServerKey(client.getPlayer().getServerKey(), client.getPlayer().getAccountID())
                || (LoginServer.getServerKey(client.getPlayer().getAccountID()) == null
                        && !client.getPlayer().getServerKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端频道KEY异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + client.getAccountName()
                    + " 客户端key：" + LoginServer.getServerKey(client.getPlayer().getAccountID()) + " 伺服端key："
                    + client.getPlayer().getServerKey() + " 进入商城2");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }
        if (!LoginServer.CanClientKey(client.getPlayer().getClientKey(), client.getPlayer().getAccountID())
                || (LoginServer.getClientKey(client.getPlayer().getAccountID()) == null
                        && !client.getPlayer().getClientKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端进入KEY异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + client.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + client.getAccountName()
                    + " 客户端key：" + LoginServer.getClientKey(client.getPlayer().getAccountID()) + " 伺服端key："
                    + client.getPlayer().getClientKey() + " 进入商城3");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + client.getAccountName()));
            client.getSession().close();
            return;
        }
    }

    public static void sendCashShopUpdate(final MapleClient c) {
        c.sendPacket(MTSCSPacket.showCashShopAcc(c));
        c.sendPacket(MTSCSPacket.showGifts(c));
        RefreshCashShop(c);
        c.sendPacket(MTSCSPacket.sendShowWishList(c.getPlayer()));
    }

    public static void CouponCode(final String code, final MapleClient c) {
        boolean validcode = false;
        int type = -1, item = -1, size = -1, time = -1;

        validcode = MapleCharacterUtil.getNXCodeValid(code.toUpperCase(), validcode);

        if (validcode) {
            type = MapleCharacterUtil.getNXCodeType(code);
            item = MapleCharacterUtil.getNXCodeItem(code);
            size = MapleCharacterUtil.getNXCodeSize(code);
            time = MapleCharacterUtil.getNXCodeTime(code);
            if (type <= 4) {
                try {
                    MapleCharacterUtil.setNXCodeUsed(c.getPlayer().getName(), code);
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            /*
             * 类型说明！
             * 基本上，这使得优惠券代码做不同的东西！
             *
             * Type 1: GASH点数
             * Type 2: 枫叶点数
             * Type 3: 物品x数量(默认1个)
             * Type 4: 枫币
             */
            int maplePoints = 0, mesos = 0, as = 0;
            String cc = "", tt = "";
            switch (type) {
                case 1:
                    c.getPlayer().modifyCSPoints(1, item, false);
                    maplePoints = item;
                    cc = "GASH";
                    break;
                case 2:
                    c.getPlayer().modifyCSPoints(2, item, false);
                    maplePoints = item;
                    cc = "枫叶点数";
                    break;
                case 3:
                    MapleInventoryManipulator.addById(c, item, (short) size, "优待卷礼品.", null, time);
                    as = 1;
                    break;
                case 4:
                    c.getPlayer().gainMeso(item, false);
                    mesos = item;
                    cc = "枫币";
                    break;
            }
            if (time == -1) {
                tt = "永久";
                as = 2;
            }
            switch (as) {
                case 1:
                    // c.sendPacket(MTSCSPacket.showCouponRedeemedItem(itemz, mesos, maplePoints,
                    // c));
                    c.getPlayer().dropMessage(1, "已成功使用优待卷获得" + MapleItemInformationProvider.getInstance().getName(item)
                            + time + "天 x" + size + "。");
                    break;
                case 2:
                    c.getPlayer().dropMessage(1, "已成功使用优待卷获得" + MapleItemInformationProvider.getInstance().getName(item)
                            + "永久 x" + size + "。");
                    break;
                default:
                    c.getPlayer().dropMessage(1, "已成功使用优待卷获得" + item + cc);
                    break;
            }
        } else {
            c.sendPacket(MTSCSPacket.sendCSFail(validcode ? 0xA5 : 0xA7)); // A1, 9F
        }
        RefreshCashShop(c);
    }

    public static final void BuyCashItem(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {

        final int action = slea.readByte();

        switch (action) {
            case 30:
            case 3: { // Buy Item
                final int useNX = slea.readByte() + 1;
                final int snCS = slea.readInt();
                CashItemInfo cItem = CashItemFactory.getInstance().getItem(snCS);
                List<CashItemInfo> ccc = null;
                if (action == 30 && cItem != null) {
                    ccc = CashItemFactory.getInstance().getPackageItems(cItem.getId());
                }
                boolean canBuy = true;
                int errorCode = 0;

                if (cItem == null || (action == 30 && (ccc == null || ccc != null && ccc.isEmpty())) || useNX < 1
                        || useNX > 2) {
                    canBuy = false;
                } else if (!cItem.onSale()) {
                    canBuy = false;
                    errorCode = 225;
                } else if (chr.getCSPoints(useNX) < cItem.getPrice()) {
                    if (useNX == 1) {
                        errorCode = 168;
                    } else {
                        errorCode = 225;
                    }
                    canBuy = false;
                } else if (!cItem.genderEquals(c.getPlayer().getGender())) {
                    canBuy = false;
                    errorCode = 186;
                } else if (c.getPlayer().getCashInventory().getItemsSize() >= 100) {
                    canBuy = false;
                    errorCode = 175;
                }
                if (canBuy && cItem != null) {
                    for (int i : GameConstants.cashBlock) {
                        if (cItem.getId() == i) {
                            c.getPlayer().dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                            RefreshCashShop(c);
                            return;
                        }
                    }

                    if (action == 3) { // 购买单个道具
                        chr.modifyCSPoints(useNX, -cItem.getPrice(), false);
                        IItem itemz = chr.getCashInventory().toItem(cItem, chr);
                        if (itemz != null && itemz.getUniqueId() > 0 && itemz.getItemId() == cItem.getId()
                                && itemz.getQuantity() == cItem.getCount()) {
                            chr.getCashInventory().addToInventory(itemz);
                            c.sendPacket(MTSCSPacket.showBoughtCashItem(itemz, cItem.getSN(), c.getAccID()));
                            if (ServerConfig.LOG_CSBUY) {
                                FileoutputUtil.logToFile("logs/Data/商城购买.txt",
                                        "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                                + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                                + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了"
                                                + (useNX == 1 ? "点券" : "枫叶点数") + cItem.getPrice() + "点 来购买"
                                                + cItem.getId() + "x" + cItem.getCount());
                            }
                        } else {
                            c.sendPacket(MTSCSPacket.sendCSFail(errorCode));
                        }
                    } else { // 套装
                        Map<Integer, IItem> ccz = new HashMap<>();
                        for (CashItemInfo i : ccc) {
                            for (int iz : GameConstants.cashBlock) {
                                if (i.getId() == iz) {
                                    continue;
                                }
                            }
                            IItem itemz = chr.getCashInventory().toItem(i, chr,
                                    MapleInventoryManipulator.getUniqueId(i.getId(), null), "");
                            if (itemz == null || itemz.getUniqueId() <= 0 || itemz.getItemId() != i.getId()) {
                                continue;
                            }
                            ccz.put(i.getSN(), itemz);
                            c.getPlayer().getCashInventory().addToInventory(itemz);
                        }
                        if (ServerConfig.LOG_CSBUY) {
                            FileoutputUtil.logToFile("logs/Data/商城购买.txt",
                                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                            + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了"
                                            + (useNX == 1 ? "点券" : "枫叶点数") + cItem.getPrice() + "点 来购买套装"
                                            + cItem.getId() + "x" + cItem.getCount());
                        }
                        chr.modifyCSPoints(useNX, -cItem.getPrice(), false);
                        c.sendPacket(MTSCSPacket.showBoughtCashPackage(ccz, c.getAccID()));
                    }

                } else {
                    c.sendPacket(MTSCSPacket.sendCSFail(errorCode));
                }

                RefreshCashShop(c);
                break;
            }
            case 4: { // gift
                // final String secondPassword = slea.readMapleAsciiString();
                final int sn = slea.readInt();
                final int toCharge = slea.readByte() + 1;
                final String characterName = slea.readMapleAsciiString();
                final String message = slea.readMapleAsciiString();

                boolean canBuy = true;
                int errorCode = 0;
                CashItemInfo cItem = CashItemFactory.getInstance().getItem(sn);

                Pair<Integer, Pair<Integer, Integer>> info = MapleCharacterUtil.getInfoByName(characterName,
                        c.getPlayer().getWorld());

                if (cItem == null) {
                    canBuy = false;
                } else if (!cItem.onSale()) {
                    canBuy = false;
                    errorCode = 225;
                } else if (chr.getCSPoints(toCharge) < cItem.getPrice()) {
                    errorCode = 168;
                    canBuy = false;
                    // } else if (!c.getCheckSecondPassword(secondPassword)) {
                    // canBuy = false;
                    // errorCode = 197;
                } else if (message.getBytes().length < 1 || message.getBytes().length > 32) {
                    canBuy = false;
                    errorCode = 225;
                } else if (info == null) {
                    canBuy = false;
                    errorCode = 172;
                } else if (info.getRight().getLeft() == c.getAccID() || info.getLeft() == c.getPlayer().getId()) {
                    canBuy = false;
                    errorCode = 171;
                } else if (!cItem.genderEquals(info.getRight().getRight())) {
                    canBuy = false;
                    errorCode = 176;
                }
                if (canBuy && info != null && cItem != null) {
                    for (int i : GameConstants.cashBlock) {
                        if (cItem.getId() == i) {
                            c.getPlayer().dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                            return;
                        }
                    }
                    c.getPlayer().getCashInventory().gift(info.getLeft(), c.getPlayer().getName(), message,
                            cItem.getSN(), MapleInventoryIdentifier.getInstance());
                    c.getPlayer().modifyCSPoints(1, -cItem.getPrice(), false);
                    if (ServerConfig.LOG_CSBUY) {
                        FileoutputUtil.logToFile("logs/Data/商城送礼.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                                + " 玩家: " + c.getPlayer().getName() + " 使用了点券" + cItem.getPrice() + "点 赠送了"
                                + cItem.getId() + "x" + cItem.getCount() + " 给" + characterName);
                    }
                    c.sendPacket(MTSCSPacket.sendGift(characterName, cItem, cItem.getPrice() / 2, false));
                    chr.sendNote(characterName, chr.getName() + " 送了你礼物! 赶快去商城确认看看.", (byte) 0); // fame or not
                    MapleCharacter receiver = c.getChannelServer().getPlayerStorage().getCharacterByName(characterName);
                    if (receiver != null) {
                        receiver.showNote();
                    }
                    // c.sendPacket(MTSCSPacket.sendGift(cItem.getPrice(), cItem.getId(),
                    // cItem.getCount(), characterName), f);
                } else {
                    c.sendPacket(MTSCSPacket.sendCSFail(errorCode));
                }
                RefreshCashShop(c);
                break;
            }

            case 5: { // Wish List
                boolean wishlistboolean = true;
                if (!wishlistboolean) {
                    RefreshCashShop(c);
                    return;
                }
                chr.clearWishlist();
                if (slea.available() < 40) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0));
                    RefreshCashShop(c);
                    return;
                }
                int[] wishlist = new int[10];
                for (int i = 0; i < 10; i++) {
                    wishlist[i] = slea.readInt();
                }
                chr.setWishlist(wishlist);
                c.sendPacket(MTSCSPacket.setWishList(chr));
                RefreshCashShop(c);
                break;
            }
            ////////////////////
            case 6: {

                final int useNX = slea.readByte() + 1;
                final boolean coupon = slea.readByte() > 0;
                if (coupon) {
                    final MapleInventoryType type = getInventoryType(slea.readInt());
                    if (chr.getCSPoints(useNX) >= (ServerConfig.DISCOUNTED ? 540 : 600)
                            && chr.getInventory(type).getSlotLimit() < 89) {
                        chr.modifyCSPoints(useNX, (ServerConfig.DISCOUNTED ? -540 : -600), false);
                        chr.getInventory(type).addSlot((byte) 8);
                        chr.dropMessage(1, "栏位已经扩充到 " + chr.getInventory(type).getSlotLimit());
                        if (ServerConfig.LOG_CSBUY) {
                            FileoutputUtil.logToFile("logs/Data/商城扩充.txt",
                                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                            + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了"
                                            + (useNX == 1 ? "点券" : "枫叶点数") + "100点 来购买扩充栏位" + type.name() + "8格 目前共有"
                                            + chr.getInventory(type).getSlotLimit() + "格");
                        }
                    } else {
                        c.sendPacket(MTSCSPacket.sendCSFail(0xA4));
                    }
                } else {
                    final MapleInventoryType type = MapleInventoryType.getByType(slea.readByte());

                    if (chr.getCSPoints(useNX) >= (ServerConfig.DISCOUNTED ? 540 : 600)
                            && chr.getInventory(type).getSlotLimit() < 93) {
                        chr.modifyCSPoints(useNX, (ServerConfig.DISCOUNTED ? -540 : -600), false);
                        chr.getInventory(type).addSlot((byte) 4);
                        chr.dropMessage(1, "栏位已经扩充到 " + chr.getInventory(type).getSlotLimit());
                        if (ServerConfig.LOG_CSBUY) {
                            FileoutputUtil.logToFile("logs/Data/商城扩充.txt",
                                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                            + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了"
                                            + (useNX == 1 ? "点券" : "枫叶点数") + "100点 来购买扩充栏位" + type.name() + "4格 目前共有"
                                            + chr.getInventory(type).getSlotLimit() + "格");
                        }
                    } else {
                        c.sendPacket(MTSCSPacket.sendCSFail(0xA4));
                    }
                }
                RefreshCashShop(c);
                break;
            }
            case 7: {
                final int useNX = slea.readByte() + 1;
                if (chr.getCSPoints(useNX) >= (ServerConfig.DISCOUNTED ? 540 : 600)
                        && chr.getStorage().getSlots() < 45) {
                    chr.modifyCSPoints(useNX, (ServerConfig.DISCOUNTED ? -540 : -600), false);
                    chr.getStorage().increaseSlots((byte) 4);
                    chr.getStorage().saveToDB();
                    if (ServerConfig.LOG_CSBUY) {
                        FileoutputUtil.logToFile("logs/Data/商城扩充.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                                + " 玩家: " + c.getPlayer().getName() + " 使用了" + (useNX == 1 ? "点券" : "枫叶点数")
                                + "100点 来购买扩充栏位仓库4格 目前共有" + chr.getStorage().getSlots() + "格");
                    }
                    // c.sendPacket(MTSCSPacket.increasedStorageSlots(chr.getStorage().getSlots()));
                } else {
                    c.sendPacket(MTSCSPacket.sendCSFail(0xA4));
                }
                RefreshCashShop(c);
                break;
            }

            case 8: {
                final int useNX = slea.readByte() + 1;
                // slea.readByte();
                CashItemInfo item = CashItemFactory.getInstance().getItem(slea.readInt());
                int slots = c.getCharacterSlots();

                if (item == null || c.getPlayer().getCSPoints(1) < item.getPrice() || slots > 15) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0));
                    RefreshCashShop(c);
                    return;
                }
                c.getPlayer().modifyCSPoints(useNX, -item.getPrice(), false);
                if (c.gainCharacterSlot()) {
                    // c.sendPacket(MTSCSPacket.increasedStorageSlots(slots + 1));
                    chr.dropMessage(1, "角色栏位已经扩充到 " + c.getCharacterSlots());
                    if (ServerConfig.LOG_CSBUY) {
                        FileoutputUtil.logToFile("logs/Data/商城扩充.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                                + " 玩家: " + c.getPlayer().getName() + " 使用了" + (useNX == 1 ? "点券" : "枫叶点数")
                                + item.getPrice() + "点 来购买扩充角色栏位 目前共有" + c.getCharacterSlots() + "格");
                    }
                } else {
                    c.sendPacket(MTSCSPacket.sendCSFail(0));
                }
                RefreshCashShop(c);
                break;
            }

            case 13: {// 商城拿出
                IItem item = c.getPlayer().getCashInventory().findByCashId((int) slea.readLong());
                if (item != null && item.getQuantity() > 0 && MapleInventoryManipulator.checkSpace(c, item.getItemId(),
                        item.getQuantity(), item.getOwner())) {
                    IItem item_ = item.copy();
                    short pos = MapleInventoryManipulator.addbyItem(c, item_, true);
                    if (pos >= 0) {
                        if (item_.getPet() != null) {
                            item_.getPet().setInventoryPosition(pos);
                            c.getPlayer().addPet(item_.getPet());
                        }
                        c.getPlayer().getCashInventory().removeFromInventory(item);
                        c.sendPacket(MTSCSPacket.confirmFromCSInventory(item_, pos));
                        FileoutputUtil.logToFile("logs/Data/商城拿出.txt",
                                "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                        + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                        + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 从商城拿出 "
                                        + item_.getItemId() + "x" + item_.getQuantity());
                    } else {
                        c.sendPacket(MTSCSPacket.sendCSFail(0xB1));
                    }
                } else {
                    c.sendPacket(MTSCSPacket.sendCSFail(0xB1));
                }
                RefreshCashShop(c);
                break;
            }

            case 14: {// 商城存入
                int uniqueid = (int) slea.readLong();
                MapleInventoryType type = MapleInventoryType.getByType(slea.readByte());
                IItem item = c.getPlayer().getInventory(type).findByUniqueId(uniqueid);
                if (item.getItemId() == 5150043 || item.getItemId() == 5150037) {
                    RefreshCashShop(c);
                    return;
                }

                if (item != null && item.getQuantity() > 0 && item.getUniqueId() > 0
                        && c.getPlayer().getCashInventory().getItemsSize() < 100) {
                    IItem item_ = item.copy();
                    c.getPlayer().getInventory(type).removeItem(item.getPosition(), item.getQuantity(), false);
                    int sn = CashItemFactory.getInstance().getItemSN(item_.getItemId());
                    if (item_.getPet() != null) {
                        c.getPlayer().removePet(item_.getPet());
                    }
                    item_.setPosition((byte) 0);
                    // item_.setGMLog("购物商城购买 时间: " + FileoutputUtil.CurrentReadable_Time());
                    c.getPlayer().getCashInventory().addToInventory(item_);
                    c.sendPacket(MTSCSPacket.confirmToCSInventory(item, c.getAccID(), sn));
                    FileoutputUtil.logToFile("logs/Data/商城存入.txt",
                            "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                    + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                    + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 从商城存入 "
                                    + item_.getItemId() + "x" + item_.getQuantity());
                } else {
                    c.sendPacket(MTSCSPacket.sendCSFail(0xB1));
                }
                RefreshCashShop(c);
                break;
            }

            case 26: { // 换购
                int toCharge = 2;// 抵用卷
                long uniqueId = (int) slea.readLong();
                IItem item = c.getPlayer().getCashInventory().findByCashId((int) uniqueId);

                if (item == null) {
                    RefreshCashShop(c);
                    return;
                }
                int sn = CashItemFactory.getInstance().getSnByItemItd2(item.getItemId());
                CashItemInfo cItem = CashItemFactory.getInstance().getItem(sn);

                if (!MapleItemInformationProvider.getInstance().isCash(item.getItemId())) {
                    AutobanManager.getInstance().autoban(chr.getClient(), "商城非法换购道具.");
                    return;
                }
                int Money = cItem.getPrice() / 10 * 3;
                c.getPlayer().getCashInventory().removeFromInventory(item);
                chr.modifyCSPoints(toCharge, Money, false);
                chr.dropMessage(1, "成功换购抵用券" + Money + "点。");
                if (ServerConfig.LOG_CSBUY) {
                    FileoutputUtil.logToFile("logs/Data/商城换购.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 玩家: " + c.getPlayer().getName() + " 使用了 " + item.getItemId() + " 换购获得抵用卷 " + Money);
                }
                RefreshCashShop(c);
                break;
            }

            case 31: { // Package gift
                final String secondPassword = slea.readMapleAsciiString();
                final int sn = slea.readInt();
                final String characterName = slea.readMapleAsciiString();
                final String message = slea.readMapleAsciiString();

                CashItemInfo cItem = CashItemFactory.getInstance().getItem(sn);
                IItem item = chr.getCashInventory().toItem(cItem);

                Pair<Integer, Pair<Integer, Integer>> info = MapleCharacterUtil.getInfoByName(characterName,
                        c.getPlayer().getWorld());
                if (c.getSecondPassword() != null) {
                    if (secondPassword == null) { // 确认是否外挂
                        c.getPlayer().dropMessage(1, "请输入密码。");
                        RefreshCashShop(c);
                        return;
                    } else if (!c.getCheckSecondPassword(secondPassword)) { // 第二密码错误
                        c.getPlayer().dropMessage(1, "密码错误。");
                        RefreshCashShop(c);
                        return;
                    }
                    if (info == null || info.getLeft().intValue() <= 0
                            || info.getLeft().intValue() == c.getPlayer().getId()
                            || info.getRight().getLeft() == c.getAccID()) {
                        c.sendPacket(MTSCSPacket.sendCSFail(0xA2)); // 9E v75
                        RefreshCashShop(c);
                        return;
                    } else if (!cItem.genderEquals(info.getRight().getRight())) {
                        c.sendPacket(MTSCSPacket.sendCSFail(0xA3));
                        RefreshCashShop(c);
                        return;
                    } else {
                        for (int i : GameConstants.cashBlock) {
                            if (cItem.getId() == i) {
                                c.getPlayer().dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                                RefreshCashShop(c);
                                return;
                            }
                        }

                        c.getPlayer().getCashInventory().gift(info.getLeft(), c.getPlayer().getName(), message,
                                cItem.getSN(), MapleInventoryIdentifier.getInstance());
                        c.getPlayer().modifyCSPoints(1, -cItem.getPrice(), false);
                        c.sendPacket(MTSCSPacket.sendGift(characterName, cItem, cItem.getPrice() / 2, false));
                        chr.sendNote(characterName, chr.getName() + " 送了你礼物! 赶快去商城确认看看.", (byte) 0); // fame or not
                        MapleCharacter receiver = c.getChannelServer().getPlayerStorage()
                                .getCharacterByName(characterName);
                        if (receiver != null) {
                            receiver.showNote();
                        }
                    }
                }
                RefreshCashShop(c);
                break;
            }
            case 32: { // 1 meso
                final CashItemInfo item = CashItemFactory.getInstance().getItem(slea.readInt());
                if (item == null || !MapleItemInformationProvider.getInstance().isQuestItem(item.getId())) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0));
                    RefreshCashShop(c);
                    return;
                } else if (c.getPlayer().getMeso() < item.getPrice()) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0xB8));
                    RefreshCashShop(c);
                    return;
                } else if (c.getPlayer().getInventory(GameConstants.getInventoryType(item.getId()))
                        .getNextFreeSlot() < 0) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0xB1));
                    RefreshCashShop(c);
                    return;
                }
                for (int iz : GameConstants.cashBlock) {
                    if (item.getId() == iz) {
                        c.getPlayer().dropMessage(1, GameConstants.getCashBlockedMsg(item.getId()));
                        RefreshCashShop(c);
                        return;
                    }
                }
                byte pos = MapleInventoryManipulator.addId(c, item.getId(), (short) item.getCount(), null);
                if (pos < 0) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0xB1));
                    RefreshCashShop(c);
                    return;
                }
                chr.gainMeso(-item.getPrice(), false);
                c.sendPacket(
                        MTSCSPacket.showBoughtCSQuestItem(item.getPrice(), (short) item.getCount(), pos, item.getId()));
                RefreshCashShop(c);
                break;
            }

            case 29: // crush ring
            case 36: { // friendRing
                /*
                 * E6 00
                 * 23
                 * 08 00 5D 31 31 31 31 31 31 31
                 * EB E8 3E 01
                 * 09 00 71 77 65 71 77 65 71 65 71
                 * 04 00 58 44 44 0A
                 */
                // final String secondPassword = slea.readMapleAsciiString();
                final int sn = slea.readInt();
                final String partnerName = slea.readMapleAsciiString();
                final String message = slea.readMapleAsciiString();
                final CashItemInfo cItem = CashItemFactory.getInstance().getItem(sn);
                Pair<Integer, Pair<Integer, Integer>> info = MapleCharacterUtil.getInfoByName(partnerName,
                        c.getPlayer().getWorld());

                boolean canBuy = true;
                int errorCode = 0;

                if (cItem == null) {
                    canBuy = false;
                } else if (!cItem.onSale()) {
                    canBuy = false;
                    errorCode = 225;
                } else if (chr.getCSPoints(1) < cItem.getPrice()) {
                    errorCode = 168;
                    canBuy = false;
                    // } else if (!c.getCheckSecondPassword(secondPassword)) {
                    // canBuy = false;
                    // errorCode = 197;
                } else if (message.getBytes().length < 1 || message.getBytes().length > 74) {
                    canBuy = false;
                    errorCode = 225;
                } else if (info == null) {
                    canBuy = false;
                    errorCode = 172;
                } else if (info.getRight().getLeft() == c.getAccID() || info.getLeft() == c.getPlayer().getId()) {
                    canBuy = false;
                    errorCode = 171;
                } else if (!cItem.genderEquals(info.getRight().getRight())) {
                    canBuy = false;
                    errorCode = 176;
                } else if (!GameConstants.isEffectRing(cItem.getId())) {
                    canBuy = false;
                    errorCode = 0;
                    // } else if (/*info.getRight().getRight() == c.getPlayer().getGender() &&*/
                    // action == 29) {
                    // canBuy = false;
                    // errorCode = 191;
                }
                if (canBuy && info != null && cItem != null) {
                    for (int i : GameConstants.cashBlock) { // just incase hacker
                        if (cItem.getId() == i) {
                            c.getPlayer().dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                            RefreshCashShop(c);
                            return;
                        }
                    }
                    int err = MapleRing.createRing(cItem.getId(), c.getPlayer(), partnerName, message, info.getLeft(),
                            cItem.getSN());
                    if (err != 1) {
                        c.sendPacket(MTSCSPacket.sendCSFail(0)); // 9E v75
                        RefreshCashShop(c);
                        return;
                    }

                    c.getPlayer().modifyCSPoints(1, -cItem.getPrice(), false);
                    chr.sendNote(partnerName, chr.getName() + " 送了你礼物! 赶快去商城确认看看.", (byte) 0); // fame or not
                    MapleCharacter receiver = c.getChannelServer().getPlayerStorage().getCharacterByName(partnerName);
                    if (receiver != null) {
                        receiver.showNote();
                    }
                    if (ServerConfig.LOG_CSBUY) {
                        FileoutputUtil.logToFile("logs/Data/商城送礼.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                                + " 玩家: " + c.getPlayer().getName() + " 使用了点券" + cItem.getPrice() + "点 赠送了"
                                + cItem.getId() + "x" + cItem.getCount() + " 给" + partnerName);
                    }
                } else {
                    System.out.println(errorCode + ":" + canBuy);
                    c.sendPacket(MTSCSPacket.sendCSFail(errorCode));
                }
                RefreshCashShop(c);
                break;
            }
            case 49: { // 送礼后重整处理
                RefreshCashShop(c);
                break;
            }
            case 51: { // 枫叶点数购买
                CashItemInfo item = CashItemFactory.getInstance().getItem(slea.readInt());
                if (item == null || c.getPlayer().getCSPoints(1) < item.getPrice()) {
                    c.sendPacket(MTSCSPacket.sendCSFail(0));
                    RefreshCashShop(c);
                    return;
                }
                switch (item.getPrice()) {
                    case 50:
                        c.getPlayer().modifyCSPoints(2, item.getPrice(), false);
                        break;
                    case 150:
                        c.getPlayer().modifyCSPoints(2, item.getPrice(), false);
                        break;
                    case 500:
                        c.getPlayer().modifyCSPoints(2, item.getPrice(), false);
                        break;
                }
                chr.dropMessage(1, "成功购买枫叶点数:" + item.getPrice());
                c.getPlayer().modifyCSPoints(1, -item.getPrice(), false);
                RefreshCashShop(c);
                break;
            }
            default:
                c.sendPacket(MTSCSPacket.sendCSFail(0));
                RefreshCashShop(c);
        }

    }

    private static final MapleInventoryType getInventoryType(final int id) {
        switch (id) {
            case 50200075:
                return MapleInventoryType.EQUIP;
            case 50200074:
                return MapleInventoryType.USE;
            case 50200073:
                return MapleInventoryType.ETC;
            default:
                return MapleInventoryType.UNDEFINED;
        }
    }

    private static void RefreshCashShop(MapleClient c) {
        c.sendPacket(MTSCSPacket.showCashInventory(c));
        c.sendPacket(MTSCSPacket.showNXMapleTokens(c.getPlayer()));
        c.sendPacket(MTSCSPacket.enableCSUse());
        c.getPlayer().getCashInventory().checkExpire(c);
    }

    /*
     * public static void doCSPackets(MapleClient c) {
     * c.sendPacket(MTSCSPacket.sendWishList(c.getPlayer(), false));
     * c.sendPacket(CSPacket.showNXMapleTokens(c.getPlayer()));
     * c.sendPacket(CSPacket.getCSGifts(c));
     * c.sendPacket(CSPacket.getCSInventory(c));
     * c.sendPacket(CSPacket.enableCSUse());
     * }
     */

    public static void sendWebSite(final MapleClient c) {
        c.sendPacket(MTSCSPacket.sendWEB(c));
        RefreshCashShop(c);
    }
}
