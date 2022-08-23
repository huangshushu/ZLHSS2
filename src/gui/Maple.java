package gui;

import client.MapleCharacter;
import client.inventory.Equip;
import client.inventory.ItemFlag;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConfig;
import database.DBConPool;
import gui.tools.*;
import handling.RecvPacketOpcode;
import handling.SendPacketOpcode;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.MapleParty;
import handling.world.World;
import handling.world.World.Find;
import org.jb2011.lnf.beautyeye.BeautyEyeLNFHelper;
import org.jb2011.lnf.beautyeye.ch3_button.BEButtonUI;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.Timer;
import server.*;
import server.Timer.EventTimer;
import server.life.MapleMonsterInformationProvider;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.wztosql.*;

import javax.management.InstanceAlreadyExistsException;
import javax.management.MBeanRegistrationException;
import javax.management.MalformedObjectNameException;
import javax.management.NotCompliantMBeanException;
import javax.swing.*;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.rmi.NotBoundException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @author Administrator
 */
public class Maple extends javax.swing.JFrame {

    private final ImageIcon bgImg = new ImageIcon(Objects.requireNonNull(this.getClass().getClassLoader().getResource("image/qqq.jpg")));// 图片路径不要写错了
    public static Map<String, Integer> ConfigValuesMap = new HashMap<>();
    private final ReentrantReadWriteLock mutex = new ReentrantReadWriteLock();
    private static final Maple instance = new Maple();
    private final Map<Windows, javax.swing.JFrame> windows = new HashMap<>();
    private ScheduledFuture<?> shutdownServer, updateplayer;
    private static long startRunTime = 0;
    private static final long starttime = 0;
    private final ArrayList<Tools> tools = new ArrayList<>();
    private final Lock writeLock = mutex.writeLock();
    private final Vector<Vector<String>> playerTableRom = new Vector<>();
    boolean 调试模式 = false;
    boolean 自动注册 = false;
    String 服务器名字 = "获取中";
    String 经验倍数 = "获取中";
    boolean 开启服务端 = false;
    private final boolean searchServer = false;
    String accname = "null", pwd = "null", money = "null", rmb = "null", dj = "null", dy = "null", ljzz = "null";
    String mima = "123456";
    int accid = 0;

    public class HomePanel extends JPanel {

        ImageIcon icon;
        Image img;

        public HomePanel() {
            ImageIcon icon = new ImageIcon(Objects.requireNonNull(getClass().getClassLoader().getResource("image/logo.png")));
            this.img = icon.getImage();
        }

        public void paintComponent(Graphics g) {
            super.paintComponent(g);

            g.drawImage(this.img, 0, 0, getWidth(), getHeight(), this);
        }
    }

    //导入gif
    public static class HomePanel2 extends JPanel {

        ImageIcon icon;
        Image img;

        public HomePanel2() {
            ImageIcon icon = new ImageIcon(Objects.requireNonNull(getClass().getClassLoader().getResource("image/long.gif")));
            this.img = icon.getImage();
        }

        public void paintComponent(Graphics g) {
            super.paintComponent(g);

            g.drawImage(this.img, 0, 0, getWidth(), getHeight(), this);
        }
    }

    /**
     * Creates new form KinMS
     */
    public static Maple getInstance() {

// 重定向System.out和System.err
        return instance;
    }

    public Maple() {
        ImageIcon icon = new ImageIcon(Objects.requireNonNull(getClass().getClassLoader().getResource("image/Icon.png")));
        setIconImage(icon.getImage());
        setTitle(" 【" + ServerConfig.SERVER_NAME + "控制台】Ver.079版本");
        try {
            //控制台预加载配置
            GetConfigValues();
        } catch (SQLException ex) {
            Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
        }
        resetWorldPanel();
        initComponents(); // 开始服务端启动计时
        updatePlayerList();// 开始统计人数
        updateThreadNum(); // 开始统计线程
        MemoryTest();//开始内存统计情况
        刷新信息();
        //显示数据剧中代码开始
        MapleStream mps = new MapleStream(System.out, 输出窗口);
        //重定向System.out 和 System.err
        System.setOut(mps);
        System.setErr(mps);
        //显示数据剧中代码结束
        // 设置当前进度值
        内存.setValue(0);
        内存.setStringPainted(true);
        // 绘制百分比文本（进度条中间显示的百分数）
        内存.setMinimum(0);
        内存.setMaximum(100);
        Timer.GuiTimer.getInstance().start();//计时器

        initview();//初始化控件信息
        DefaultTableCellRenderer cr = new DefaultTableCellRenderer();
        cr.setHorizontalAlignment(JLabel.CENTER);

        输出窗口.setEditable(false);
        输出窗口.setLineWrap(true);        //激活自动换行功能 
        输出窗口.setWrapStyleWord(true);            // 激活断行不断字功能
        主窗口.setOpaque(false);
        jTabbedPane2.setOpaque(false);
    }

    private void resetWorldPanel() {
        //给服务器增加一个默认状态
        InputStream is;
//        //开始读取ini内的参数信息
        String exp = null;
        String drop = null;
        String cash = null;
        Properties p = new Properties();
        BufferedReader bf = null;
        try {
            is = new FileInputStream("settings.ini");
            //这个要看你dd.properties文件的编码格式，如果编码格式是gbk的要用gbk的InputStreamReader读取，如果utf8的就不用特殊设置了，如果你手工输入的dd的信息应该是gbk的编码
            bf = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            p = new Properties();
            p.load(bf);

        } catch (FileNotFoundException e) {
            System.out.println("没有找到文件");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("读取配置文件失败");
            e.printStackTrace();
        }
    }

    private void 刷新信息() {
        刷新泡点金币开关();
        刷新泡点点券开关();
        刷新泡点经验开关();
        刷新泡点抵用开关();
        刷新泡点豆豆开关();
        刷新泡点设置();
        刷新经验加成表();
        刷新物品叠加数量上限();
        刷新倍怪地图();
        刷新弓标子弹叠加代码();
    }

    public static String[] DEFAULT_FONT = new String[]{
            "Table.font",
            "TableHeader.font",
            "CheckBox.font",
            "Tree.font",
            "Viewport.font",
            "ProgressBar.font",
            "RadioButtonMenuItem.font",
            "ToolBar.font",
            "ColorChooser.font",
            "ToggleButton.font",
            "Panel.font",
            "TextArea.font",
            "Menu.font",
            "TableHeader.font" // ,"TextField.font"
            ,
            "OptionPane.font",
            "MenuBar.font",
            "Button.font",
            "Label.font",
            "PasswordField.font",
            "ScrollPane.font",
            "MenuItem.font",
            "ToolTip.font",
            "List.font",
            "EditorPane.font",
            "Table.font",
            "TabbedPane.font",
            "RadioButton.font",
            "CheckBoxMenuItem.font",
            "TextPane.font",
            "PopupMenu.font",
            "TitledBorder.font",
            "ComboBox.font"
    };

    public void actionPerformed(ActionEvent e) {
        //计时开始
        Dis tt = new Dis();
        tt.start();
    }

    //计时开始
    int year = Calendar.getInstance().get(Calendar.YEAR);//年
    int month = Calendar.getInstance().get(Calendar.MONTH) + 1;//月
    int date = Calendar.getInstance().get(Calendar.DATE);//日
    int hour = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);//小时
    int minute = Calendar.getInstance().get(Calendar.MINUTE);//分钟
    int second = Calendar.getInstance().get(Calendar.SECOND); //毫秒

    private static class Dis extends Thread {

        public Dis() {
        }

        public void run() {
            while (true) {
                final int 运行秒数 = (int) ((System.currentTimeMillis() - Maple.startRunTime) / 1000L);
                时长.setValue(运行秒数 / 60);
                时长.setString(运行秒数 / 86400 + "天" + 运行秒数 / 3600 % 24 + "时" + 运行秒数 / 60 % 60 + "分" + 运行秒数 % 60 + "秒");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    //玩家监测
    public static int 在线账号() {
        int data = 0;
        int p = 0;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT loggedin as DATA FROM accounts WHERE loggedin > 0");
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    data = rs.getInt("DATA");
                    p += 1;
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("在线账号、出错");
        }
        return p;
    }

    public void updatePlayerList() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                updateplayer = Timer.GuiTimer.getInstance().register(new Runnable() {
                    @Override
                    public void run() {
                        playerTable.removeAll();
                        int cloumn = 0;
                        for (ChannelServer cs : ChannelServer.getAllInstances()) {
                            for (MapleCharacter player : cs.getPlayerStorage().getAllCharacters()) {
                                if (player == null) {
                                    continue;
                                }
                                playerTable.setValueAt(player.getId(), cloumn, 0);//角色ID
                                playerTable.setValueAt(player.getName(), cloumn, 1);//角色名字
                                playerTable.setValueAt(cs.getChannel(), cloumn, 2);//频道
                                playerTable.setValueAt(player.getLevel(), cloumn, 3);//等级
                                playerTable.setValueAt(player.getJob(), cloumn, 4);//职业ID
                                playerTable.setValueAt(player.getMap().getMapName(), cloumn, 5);//所在地图
                                playerTable.setValueAt(player.getMeso(), cloumn, 6);//金币
                                playerTable.setValueAt(player.getCSPoints(1), cloumn, 7);//点卷
                                playerTable.setValueAt(player.getCSPoints(2), cloumn, 8);//抵用卷
                                playerTable.setValueAt(player.getmoneyb(), cloumn, 9);//元宝 余额
                                cloumn++;
                            }
                        }
                        //PlayerCount.setText("【在线人数】：");
                        在线人数.setValue(cloumn);
                        在线人数.setString(cloumn + "/999");
                    }
                }, 1000 * 60);
            }
        }).start();
    }

    public static void GetConfigValues() throws SQLException {
        //动态数据库连接
        Connection con = DBConPool.getInstance().getDataSource().getConnection();
        try (PreparedStatement ps = con.prepareStatement("SELECT name, val FROM ConfigValues")) {
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    String name = rs.getString("name");
                    int val = rs.getInt("val");
                    ConfigValuesMap.put(name, val);
                }
            }
        } catch (SQLException ex) {
            System.err.println("读取动态数据库出错：" + ex.getMessage());
        }
    }

    public void initview() {
        /*  363: 344 */
        ((JPanel) getContentPane()).setOpaque(true); // 将JFrame上自带的面板设置为透明，否则背景图片
        UIManager.put("TabbedPane.contentOpaque", true);
    }

    void startConsoleReaderThread(InputStream inStream) {
        final BufferedReader br = new BufferedReader(new InputStreamReader(inStream));
        new Thread(() -> {
            StringBuilder sb = new StringBuilder();
            try {
                String s;
                while ((s = br.readLine()) != null) {
                    boolean caretAtEnd = false;
                    sb.setLength(0);
                    Maple.this.输出窗口.append(s + '\n');
                }
            } catch (IOException e) {
                JOptionPane.showMessageDialog(null, "从BufferedReader读取错误：" + e);

                System.exit(1);
            }
        }).start();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        主窗口 = new javax.swing.JTabbedPane();
        首页功能 = new javax.swing.JPanel();
        jTabbedPane2 = new javax.swing.JTabbedPane();
        jPanel29 = new javax.swing.JPanel();
        jScrollPane2 = new javax.swing.JScrollPane();
        输出窗口 = new javax.swing.JTextArea();
        jPanel5 = new javax.swing.JPanel();
        jScrollPane4 = new javax.swing.JScrollPane();
        playerTable = new javax.swing.JTable();
        jPanel38 = new javax.swing.JPanel();
        jLabel22 = new javax.swing.JLabel();
        角色名称编辑框 = new javax.swing.JTextField();
        jLabel23 = new javax.swing.JLabel();
        角色点券编辑框 = new javax.swing.JTextField();
        角色抵用编辑框 = new javax.swing.JTextField();
        jLabel24 = new javax.swing.JLabel();
        角色所在地图编辑 = new javax.swing.JTextField();
        jLabel25 = new javax.swing.JLabel();
        修改玩家信息 = new javax.swing.JButton();
        个人玩家下线 = new javax.swing.JButton();
        传送玩家到自由 = new javax.swing.JButton();
        全员下线 = new javax.swing.JButton();
        关玩家到小黑屋 = new javax.swing.JButton();
        传送玩家到指定地图 = new javax.swing.JButton();
        一键满技能 = new javax.swing.JButton();
        jLabel27 = new javax.swing.JLabel();
        角色元宝编辑框 = new javax.swing.JTextField();
        jPanel15 = new javax.swing.JPanel();
        重载副本按钮2 = new javax.swing.JButton();
        重载爆率按钮2 = new javax.swing.JButton();
        重载反应堆按钮2 = new javax.swing.JButton();
        重载传送门按钮2 = new javax.swing.JButton();
        重载商城按钮2 = new javax.swing.JButton();
        重载商店按钮2 = new javax.swing.JButton();
        重载任务2 = new javax.swing.JButton();
        重载包头按钮2 = new javax.swing.JButton();
        jLabel28 = new javax.swing.JLabel();
        jPanel34 = new javax.swing.JPanel();
        startserverbutton = new javax.swing.JButton();
        ActiveThread = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        内存 = new javax.swing.JProgressBar();
        jLabel44 = new javax.swing.JLabel();
        jTextField22 = new javax.swing.JTextField();
        jButton16 = new javax.swing.JButton();
        jPanel37 = new javax.swing.JPanel();
        查询在线玩家人数按钮 = new javax.swing.JButton();
        jButton17 = new javax.swing.JButton();
        jButton8 = new javax.swing.JButton();
        jButton9 = new javax.swing.JButton();
        清空日志 = new javax.swing.JButton();
        PlayerCount = new javax.swing.JLabel();
        时长 = new javax.swing.JProgressBar();
        在线人数 = new javax.swing.JProgressBar();
        常用工具 = new javax.swing.JPanel();
        jPanel67 = new javax.swing.JPanel();
        jButton69 = new javax.swing.JButton();
        jButton70 = new javax.swing.JButton();
        jButton72 = new javax.swing.JButton();
        jButton73 = new javax.swing.JButton();
        jButton74 = new javax.swing.JButton();
        jButton75 = new javax.swing.JButton();
        jButton76 = new javax.swing.JButton();
        jPanel53 = new javax.swing.JPanel();
        jButton40 = new javax.swing.JButton();
        jButton41 = new javax.swing.JButton();
        jButton29 = new javax.swing.JButton();
        jButton22 = new javax.swing.JButton();
        jButton42 = new javax.swing.JButton();
        jButton43 = new javax.swing.JButton();
        jPanel68 = new javax.swing.JPanel();
        jButton27 = new javax.swing.JButton();
        jButton55 = new javax.swing.JButton();
        jButton44 = new javax.swing.JButton();
        jButton50 = new javax.swing.JButton();
        jButton47 = new javax.swing.JButton();
        jButton51 = new javax.swing.JButton();
        jButton48 = new javax.swing.JButton();
        jButton38 = new javax.swing.JButton();
        jButton68 = new javax.swing.JButton();
        jButton46 = new javax.swing.JButton();
        jButton49 = new javax.swing.JButton();
        jButton54 = new javax.swing.JButton();
        jButton35 = new javax.swing.JButton();
        功能设置 = new javax.swing.JTabbedPane();
        jPanel93 = new javax.swing.JPanel();
        jScrollPane136 = new javax.swing.JScrollPane();
        经验加成表 = new javax.swing.JTable();
        经验加成表序号 = new javax.swing.JTextField();
        经验加成表类型 = new javax.swing.JTextField();
        经验加成表数值 = new javax.swing.JTextField();
        经验加成表修改 = new javax.swing.JButton();
        jLabel384 = new javax.swing.JLabel();
        jLabel385 = new javax.swing.JLabel();
        jLabel386 = new javax.swing.JLabel();
        游戏经验加成说明 = new javax.swing.JButton();
        jPanel66 = new javax.swing.JPanel();
        jPanel73 = new javax.swing.JPanel();
        开启双倍经验 = new javax.swing.JButton();
        双倍经验持续时间 = new javax.swing.JTextField();
        jLabel359 = new javax.swing.JLabel();
        开启双倍爆率 = new javax.swing.JButton();
        双倍爆率持续时间 = new javax.swing.JTextField();
        jLabel360 = new javax.swing.JLabel();
        开启双倍金币 = new javax.swing.JButton();
        双倍金币持续时间 = new javax.swing.JTextField();
        jLabel361 = new javax.swing.JLabel();
        jPanel76 = new javax.swing.JPanel();
        开启三倍经验 = new javax.swing.JButton();
        三倍经验持续时间 = new javax.swing.JTextField();
        jLabel362 = new javax.swing.JLabel();
        开启三倍爆率 = new javax.swing.JButton();
        三倍爆率持续时间 = new javax.swing.JTextField();
        jLabel348 = new javax.swing.JLabel();
        开启三倍金币 = new javax.swing.JButton();
        三倍金币持续时间 = new javax.swing.JTextField();
        jLabel349 = new javax.swing.JLabel();
        jLabel15 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jPanel62 = new javax.swing.JPanel();
        经验 = new javax.swing.JTextField();
        jLabel42 = new javax.swing.JLabel();
        经验确认 = new javax.swing.JButton();
        物品 = new javax.swing.JTextField();
        物品确认 = new javax.swing.JButton();
        金币 = new javax.swing.JTextField();
        金币确认 = new javax.swing.JButton();
        jLabel43 = new javax.swing.JLabel();
        jLabel67 = new javax.swing.JLabel();
        jLabel68 = new javax.swing.JLabel();
        福利中心 = new javax.swing.JPanel();
        jTabbedPane7 = new javax.swing.JTabbedPane();
        jPanel4 = new javax.swing.JPanel();
        jPanel59 = new javax.swing.JPanel();
        z2 = new javax.swing.JButton();
        z3 = new javax.swing.JButton();
        z1 = new javax.swing.JButton();
        z4 = new javax.swing.JButton();
        z5 = new javax.swing.JButton();
        z6 = new javax.swing.JButton();
        a1 = new javax.swing.JTextField();
        jLabel235 = new javax.swing.JLabel();
        jPanel58 = new javax.swing.JPanel();
        全服发送装备装备加卷 = new javax.swing.JTextField();
        全服发送装备装备制作人 = new javax.swing.JTextField();
        全服发送装备装备力量 = new javax.swing.JTextField();
        全服发送装备装备MP = new javax.swing.JTextField();
        全服发送装备装备智力 = new javax.swing.JTextField();
        全服发送装备装备运气 = new javax.swing.JTextField();
        全服发送装备装备HP = new javax.swing.JTextField();
        全服发送装备装备攻击力 = new javax.swing.JTextField();
        全服发送装备装备给予时间 = new javax.swing.JTextField();
        全服发送装备装备可否交易 = new javax.swing.JTextField();
        全服发送装备装备敏捷 = new javax.swing.JTextField();
        全服发送装备物品ID = new javax.swing.JTextField();
        全服发送装备装备魔法力 = new javax.swing.JTextField();
        全服发送装备装备魔法防御 = new javax.swing.JTextField();
        全服发送装备装备物理防御 = new javax.swing.JTextField();
        给予装备1 = new javax.swing.JButton();
        jLabel219 = new javax.swing.JLabel();
        jLabel220 = new javax.swing.JLabel();
        jLabel221 = new javax.swing.JLabel();
        jLabel222 = new javax.swing.JLabel();
        jLabel223 = new javax.swing.JLabel();
        jLabel224 = new javax.swing.JLabel();
        jLabel225 = new javax.swing.JLabel();
        jLabel226 = new javax.swing.JLabel();
        jLabel227 = new javax.swing.JLabel();
        jLabel228 = new javax.swing.JLabel();
        jLabel229 = new javax.swing.JLabel();
        jLabel230 = new javax.swing.JLabel();
        jLabel231 = new javax.swing.JLabel();
        jLabel232 = new javax.swing.JLabel();
        jLabel233 = new javax.swing.JLabel();
        发送装备玩家姓名 = new javax.swing.JTextField();
        给予装备2 = new javax.swing.JButton();
        jLabel246 = new javax.swing.JLabel();
        jLabel244 = new javax.swing.JLabel();
        jPanel80 = new javax.swing.JPanel();
        z7 = new javax.swing.JButton();
        z8 = new javax.swing.JButton();
        z9 = new javax.swing.JButton();
        z10 = new javax.swing.JButton();
        z11 = new javax.swing.JButton();
        z12 = new javax.swing.JButton();
        a2 = new javax.swing.JTextField();
        jLabel236 = new javax.swing.JLabel();
        个人发送物品玩家名字1 = new javax.swing.JTextField();
        jLabel64 = new javax.swing.JLabel();
        jPanel61 = new javax.swing.JPanel();
        发放个人玩家名字 = new javax.swing.JTextField();
        发放道具代码 = new javax.swing.JTextField();
        jLabel243 = new javax.swing.JLabel();
        jLabel245 = new javax.swing.JLabel();
        jLabel247 = new javax.swing.JLabel();
        发放道具发放范围 = new javax.swing.JComboBox<>();
        jLabel248 = new javax.swing.JLabel();
        给予物品1 = new javax.swing.JButton();
        jLabel249 = new javax.swing.JLabel();
        发放道具数量 = new javax.swing.JTextField();
        jPanel64 = new javax.swing.JPanel();
        jLabel237 = new javax.swing.JLabel();
        发放其他类型 = new javax.swing.JComboBox<>();
        发放其他范围 = new javax.swing.JComboBox<>();
        jLabel250 = new javax.swing.JLabel();
        发放其他玩家 = new javax.swing.JTextField();
        jLabel251 = new javax.swing.JLabel();
        给予物品 = new javax.swing.JButton();
        jLabel240 = new javax.swing.JLabel();
        jLabel254 = new javax.swing.JLabel();
        发放其他数量 = new javax.swing.JTextField();
        jPanel9 = new javax.swing.JPanel();
        jScrollPane134 = new javax.swing.JScrollPane();
        在线泡点设置 = new javax.swing.JTable();
        泡点序号 = new javax.swing.JTextField();
        泡点类型 = new javax.swing.JTextField();
        泡点值 = new javax.swing.JTextField();
        泡点值修改 = new javax.swing.JButton();
        jLabel322 = new javax.swing.JLabel();
        jLabel326 = new javax.swing.JLabel();
        jLabel327 = new javax.swing.JLabel();
        jPanel75 = new javax.swing.JPanel();
        泡点金币开关 = new javax.swing.JButton();
        泡点经验开关 = new javax.swing.JButton();
        泡点点券开关 = new javax.swing.JButton();
        泡点抵用开关 = new javax.swing.JButton();
        泡点豆豆开关 = new javax.swing.JButton();
        jLabel65 = new javax.swing.JLabel();
        jLabel328 = new javax.swing.JLabel();
        福利提示语言2 = new javax.swing.JLabel();
        jLabel60 = new javax.swing.JLabel();
        jLabel61 = new javax.swing.JLabel();
        jLabel62 = new javax.swing.JLabel();
        jPanel23 = new javax.swing.JPanel();
        jPanel65 = new javax.swing.JPanel();
        jLabel269 = new javax.swing.JLabel();
        物品叠加数量 = new javax.swing.JTextField();
        修改物品叠加数量1 = new javax.swing.JButton();
        jScrollPane12 = new javax.swing.JScrollPane();
        弓标子弹叠加上限突破 = new javax.swing.JTextArea();
        jLabel32 = new javax.swing.JLabel();
        jPanel83 = new javax.swing.JPanel();
        jButton10 = new javax.swing.JButton();
        jLabel263 = new javax.swing.JLabel();
        jScrollPane6 = new javax.swing.JScrollPane();
        倍怪地图 = new javax.swing.JTextArea();
        jLabel264 = new javax.swing.JLabel();
        怪物倍率 = new javax.swing.JTextField();
        修改怪物倍率 = new javax.swing.JButton();
        游戏公告 = new javax.swing.JPanel();
        sendNotice = new javax.swing.JButton();
        sendWinNotice = new javax.swing.JButton();
        sendMsgNotice = new javax.swing.JButton();
        sendNpcTalkNotice = new javax.swing.JButton();
        noticeText = new javax.swing.JTextField();
        jLabel117 = new javax.swing.JLabel();
        jLabel118 = new javax.swing.JLabel();
        jLabel119 = new javax.swing.JLabel();
        jLabel106 = new javax.swing.JLabel();
        公告发布喇叭代码 = new javax.swing.JTextField();
        jButton45 = new javax.swing.JButton();
        jLabel259 = new javax.swing.JLabel();
        关于我们 = new javax.swing.JTabbedPane();
        jPanel52 = new javax.swing.JPanel();
        jLabel9 = new javax.swing.JLabel();
        jLabel14 = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jButton7 = new javax.swing.JButton();
        jScrollPane9 = new javax.swing.JScrollPane();
        jTextArea2 = new javax.swing.JTextArea();

        setDefaultCloseOperation(javax.swing.WindowConstants.DO_NOTHING_ON_CLOSE);
        setBackground(new java.awt.Color(255, 255, 255));
        setResizable(false);
        setSize(new java.awt.Dimension(890, 690));
        addWindowListener(new java.awt.event.WindowAdapter() {
            public void windowClosing(java.awt.event.WindowEvent evt) {
                formWindowClosing(evt);
            }
        });
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        主窗口.setBackground(new java.awt.Color(255, 255, 255));
        主窗口.setBorder(javax.swing.BorderFactory.createCompoundBorder());
        主窗口.setPreferredSize(new java.awt.Dimension(890, 758));

        首页功能.setBackground(new java.awt.Color(255, 255, 255));
        首页功能.setPreferredSize(new java.awt.Dimension(890, 758));
        首页功能.setRequestFocusEnabled(false);
        首页功能.setVerifyInputWhenFocusTarget(false);
        首页功能.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        输出窗口.setColumns(20);
        输出窗口.setForeground(new java.awt.Color(102, 102, 102));
        输出窗口.setRows(5);
        输出窗口.setFocusTraversalPolicyProvider(true);
        输出窗口.setInheritsPopupMenu(true);
        输出窗口.setSelectedTextColor(new java.awt.Color(51, 0, 51));
        jScrollPane2.setViewportView(输出窗口);

        javax.swing.GroupLayout jPanel29Layout = new javax.swing.GroupLayout(jPanel29);
        jPanel29.setLayout(jPanel29Layout);
        jPanel29Layout.setHorizontalGroup(
                jPanel29Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jScrollPane2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 555, Short.MAX_VALUE)
        );
        jPanel29Layout.setVerticalGroup(
                jPanel29Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jScrollPane2, javax.swing.GroupLayout.DEFAULT_SIZE, 502, Short.MAX_VALUE)
        );

        jTabbedPane2.addTab("服务端输出信息", new javax.swing.ImageIcon(getClass().getResource("/image2/日志.png")), jPanel29); // NOI18N

        jPanel5.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "在线玩家信息", javax.swing.border.TitledBorder.DEFAULT_JUSTIFICATION, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("宋体", 0, 12), new java.awt.Color(255, 153, 153))); // NOI18N
        jPanel5.setPreferredSize(new java.awt.Dimension(500, 500));

        playerTable.setAutoCreateRowSorter(true);
        playerTable.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null},
                        {null, null, null, null, null, null, null, null, null, null}
                },
                new String[]{
                        "id", "名称", "频道", "等级", "职业", "地图", "金币", "点卷", "抵用", "元宝"
                }
        ) {
            final Class[] types = new Class[]{
                    java.lang.Integer.class, java.lang.String.class, java.lang.Integer.class, java.lang.Integer.class, java.lang.String.class, java.lang.String.class, java.lang.Integer.class, java.lang.Integer.class, java.lang.Integer.class, java.lang.Integer.class
            };

            public Class getColumnClass(int columnIndex) {
                return types[columnIndex];
            }
        });
        playerTable.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        playerTable.setGridColor(javax.swing.UIManager.getDefaults().getColor("Button.light"));
        playerTable.getTableHeader().setReorderingAllowed(false);
        playerTable.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                playerTableMouseClicked(evt);
            }
        });
        jScrollPane4.setViewportView(playerTable);

        jPanel38.setBackground(new java.awt.Color(255, 255, 255));
        jPanel38.setBorder(javax.swing.BorderFactory.createTitledBorder("便捷功能"));

        jLabel22.setText("角色名称：");

        角色名称编辑框.setEditable(false);
        角色名称编辑框.setForeground(new java.awt.Color(51, 153, 255));
        角色名称编辑框.addActionListener(this::角色名称编辑框ActionPerformed);

        jLabel23.setText("角色点券：");

        角色点券编辑框.setForeground(new java.awt.Color(51, 153, 255));
        角色点券编辑框.addActionListener(this::角色点券编辑框ActionPerformed);

        角色抵用编辑框.setForeground(new java.awt.Color(51, 153, 255));
        角色抵用编辑框.addActionListener(this::角色抵用编辑框ActionPerformed);

        jLabel24.setText("角色抵用：");

        角色所在地图编辑.setForeground(new java.awt.Color(51, 153, 255));
        角色所在地图编辑.setText("填写地图代码");
        角色所在地图编辑.addActionListener(this::角色所在地图编辑ActionPerformed);

        jLabel25.setText("所在地图：");

        修改玩家信息.setText("修改信息");
        修改玩家信息.addActionListener(this::修改玩家信息ActionPerformed);

        个人玩家下线.setText("强制下线");
        个人玩家下线.addActionListener(this::个人玩家下线ActionPerformed);

        传送玩家到自由.setText("传送自由");
        传送玩家到自由.addActionListener(this::传送玩家到自由ActionPerformed);

        全员下线.setText("全部下线");
        全员下线.addActionListener(this::全员下线ActionPerformed);

        关玩家到小黑屋.setText("关小黑屋");
        关玩家到小黑屋.addActionListener(this::关玩家到小黑屋ActionPerformed);

        传送玩家到指定地图.setText("传送地图");
        传送玩家到指定地图.addActionListener(this::传送玩家到指定地图ActionPerformed);

        一键满技能.setText("一键满技");
        一键满技能.addActionListener(this::一键满技能ActionPerformed);

        jLabel27.setText("角色元宝：");

        角色元宝编辑框.setForeground(new java.awt.Color(51, 153, 255));
        角色元宝编辑框.addActionListener(this::角色元宝编辑框ActionPerformed);

        javax.swing.GroupLayout jPanel38Layout = new javax.swing.GroupLayout(jPanel38);
        jPanel38.setLayout(jPanel38Layout);
        jPanel38Layout.setHorizontalGroup(
                jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel38Layout.createSequentialGroup()
                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                .addGroup(jPanel38Layout.createSequentialGroup()
                                                        .addComponent(jLabel27)
                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                        .addComponent(角色元宝编辑框))
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                        .addGroup(jPanel38Layout.createSequentialGroup()
                                                                .addComponent(jLabel24)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(角色抵用编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel38Layout.createSequentialGroup()
                                                                .addComponent(jLabel23)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(角色点券编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                        .addGroup(jPanel38Layout.createSequentialGroup()
                                                                .addComponent(jLabel22)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(角色名称编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                        .addGroup(jPanel38Layout.createSequentialGroup()
                                                .addComponent(jLabel25)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(角色所在地图编辑, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addGroup(jPanel38Layout.createSequentialGroup()
                                                .addComponent(传送玩家到指定地图)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(传送玩家到自由)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(个人玩家下线))
                                        .addGroup(jPanel38Layout.createSequentialGroup()
                                                .addComponent(一键满技能)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(关玩家到小黑屋)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(全员下线))
                                        .addComponent(修改玩家信息, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addContainerGap())
        );
        jPanel38Layout.setVerticalGroup(
                jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel38Layout.createSequentialGroup()
                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel38Layout.createSequentialGroup()
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(传送玩家到指定地图)
                                                        .addComponent(传送玩家到自由)
                                                        .addComponent(个人玩家下线))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(全员下线)
                                                        .addComponent(一键满技能)
                                                        .addComponent(关玩家到小黑屋))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(修改玩家信息, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel38Layout.createSequentialGroup()
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel22)
                                                        .addComponent(角色名称编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel23)
                                                        .addComponent(角色点券编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel24)
                                                        .addComponent(角色抵用编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel27)
                                                        .addComponent(角色元宝编辑框, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel38Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(jLabel25)
                                                        .addComponent(角色所在地图编辑, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(0, 0, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout jPanel5Layout = new javax.swing.GroupLayout(jPanel5);
        jPanel5.setLayout(jPanel5Layout);
        jPanel5Layout.setHorizontalGroup(
                jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jScrollPane4, javax.swing.GroupLayout.DEFAULT_SIZE, 543, Short.MAX_VALUE)
                        .addComponent(jPanel38, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        jPanel5Layout.setVerticalGroup(
                jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel5Layout.createSequentialGroup()
                                .addComponent(jScrollPane4, javax.swing.GroupLayout.DEFAULT_SIZE, 320, Short.MAX_VALUE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jPanel38, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );

        jTabbedPane2.addTab("在线玩家监控", new javax.swing.ImageIcon(Objects.requireNonNull(Objects.requireNonNull(getClass().getResource("/image2/信息日志.png")))), jPanel5); // NOI18N

        首页功能.add(jTabbedPane2, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 560, 540));

        jPanel15.setBackground(new java.awt.Color(250, 250, 250));
        jPanel15.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "重载系列", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP));
        jPanel15.setPreferredSize(new java.awt.Dimension(320, 250));

        重载副本按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/更新.png")))); // NOI18N
        重载副本按钮2.setText("重载副本");
        重载副本按钮2.addActionListener(this::重载副本按钮2ActionPerformed);

        重载爆率按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/4031041.png")))); // NOI18N
        重载爆率按钮2.setText("重载爆率");
        重载爆率按钮2.addActionListener(this::重载爆率按钮2ActionPerformed);

        重载反应堆按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/更多设置.png")))); // NOI18N
        重载反应堆按钮2.setText("重载反应堆");
        重载反应堆按钮2.addActionListener(this::重载反应堆按钮2ActionPerformed);

        重载传送门按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/1802034.png")))); // NOI18N
        重载传送门按钮2.setText("重载传送门");
        重载传送门按钮2.addActionListener(this::重载传送门按钮2ActionPerformed);

        重载商城按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/自定义购物中心.png")))); // NOI18N
        重载商城按钮2.setText("重载商城");
        重载商城按钮2.addActionListener(this::重载商城按钮2ActionPerformed);

        重载商店按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/商店管理.png")))); // NOI18N
        重载商店按钮2.setText("重载商店");
        重载商店按钮2.addActionListener(this::重载商店按钮2ActionPerformed);

        重载任务2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/信息日志.png")))); // NOI18N
        重载任务2.setText("重载任务");
        重载任务2.addActionListener(this::重载任务2ActionPerformed);

        重载包头按钮2.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/更多设置.png")))); // NOI18N
        重载包头按钮2.setText("重载包头");
        重载包头按钮2.addActionListener(this::重载包头按钮2ActionPerformed);

        javax.swing.GroupLayout jPanel15Layout = new javax.swing.GroupLayout(jPanel15);
        jPanel15.setLayout(jPanel15Layout);
        jPanel15Layout.setHorizontalGroup(
                jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel15Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                        .addComponent(重载商城按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(重载爆率按钮2, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addComponent(重载任务2, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(重载商店按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(重载包头按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载传送门按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载反应堆按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载副本按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(31, 31, 31))
        );
        jPanel15Layout.setVerticalGroup(
                jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel15Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(重载商店按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载反应堆按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(重载商城按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载传送门按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(重载包头按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载爆率按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(重载任务2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(重载副本按钮2, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        首页功能.add(jPanel15, new org.netbeans.lib.awtextra.AbsoluteConstraints(580, 30, 290, 250));

        jLabel28.setFont(new java.awt.Font("微软雅黑", Font.PLAIN, 12)); // NOI18N
        jLabel28.setText("【运行时长】：");
        首页功能.add(jLabel28, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 500, -1, -1));

        jPanel34.setBackground(new java.awt.Color(255, 255, 255));
        jPanel34.setBorder(javax.swing.BorderFactory.createTitledBorder("游戏开关"));

        startserverbutton.setBackground(new java.awt.Color(51, 51, 255));
        startserverbutton.setFont(new java.awt.Font("微软雅黑", Font.BOLD, 12)); // NOI18N
        startserverbutton.setIcon(new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/常用功能.png")))); // NOI18N
        startserverbutton.setText("启动服务端");
        startserverbutton.addActionListener(this::startserverbuttonActionPerformed);

        ActiveThread.setText("【游戏线程】:0个进程");

        jLabel2.setText("【当前内存】:");

        内存.setMaximum(1000);
        内存.setAutoscrolls(true);
        内存.setString("0 MB");
        内存.setStringPainted(true);

        jLabel44.setFont(new java.awt.Font("微软雅黑", 0, 12)); // NOI18N
        jLabel44.setText("关闭时间/ 分钟");

        jTextField22.setForeground(new java.awt.Color(255, 51, 51));
        jTextField22.setText("0");
        jTextField22.addActionListener(this::jTextField22ActionPerformed);

        jButton16.setBackground(new java.awt.Color(0, 0, 204));
        jButton16.setFont(new java.awt.Font("微软雅黑", 1, 12)); // NOI18N
        jButton16.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/关闭服务器.png"))); // NOI18N
        jButton16.setText("关闭服务端");
        jButton16.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton16ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel34Layout = new javax.swing.GroupLayout(jPanel34);
        jPanel34.setLayout(jPanel34Layout);
        jPanel34Layout.setHorizontalGroup(
                jPanel34Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel34Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(startserverbutton)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(ActiveThread, javax.swing.GroupLayout.PREFERRED_SIZE, 146, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jLabel2)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(内存, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(jLabel44)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jTextField22, javax.swing.GroupLayout.PREFERRED_SIZE, 96, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(6, 6, 6)
                                .addComponent(jButton16)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel34Layout.setVerticalGroup(
                jPanel34Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel34Layout.createSequentialGroup()
                                .addGroup(jPanel34Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(startserverbutton, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel34Layout.createSequentialGroup()
                                                .addGap(11, 11, 11)
                                                .addGroup(jPanel34Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(内存, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel2)
                                                        .addComponent(ActiveThread)))
                                        .addComponent(jButton16, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel34Layout.createSequentialGroup()
                                                .addGap(5, 5, 5)
                                                .addGroup(jPanel34Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(jTextField22, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel44))))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        首页功能.add(jPanel34, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 550, 870, 70));
        jPanel34.getAccessibleContext().setAccessibleDescription("");

        jPanel37.setBackground(new java.awt.Color(255, 255, 255));
        jPanel37.setBorder(javax.swing.BorderFactory.createTitledBorder("工具系列"));

        查询在线玩家人数按钮.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/100.png"))); // NOI18N
        查询在线玩家人数按钮.setText("在线人数");
        查询在线玩家人数按钮.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查询在线玩家人数按钮ActionPerformed(evt);
            }
        });

        jButton17.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/100.png"))); // NOI18N
        jButton17.setText("回收内存");
        jButton17.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton17ActionPerformed(evt);
            }
        });

        jButton8.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/100.png"))); // NOI18N
        jButton8.setText("保存数据");
        jButton8.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton8ActionPerformed(evt);
            }
        });

        jButton9.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/100.png"))); // NOI18N
        jButton9.setText("保存雇佣");
        jButton9.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton9ActionPerformed(evt);
            }
        });

        清空日志.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/错误日志.png"))); // NOI18N
        清空日志.setText("清空日志");
        清空日志.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                清空日志ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel37Layout = new javax.swing.GroupLayout(jPanel37);
        jPanel37.setLayout(jPanel37Layout);
        jPanel37Layout.setHorizontalGroup(
                jPanel37Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel37Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel37Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(查询在线玩家人数按钮, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton9, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 18, Short.MAX_VALUE)
                                .addGroup(jPanel37Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jButton17, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton8, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap())
                        .addGroup(jPanel37Layout.createSequentialGroup()
                                .addGap(79, 79, 79)
                                .addComponent(清空日志, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel37Layout.setVerticalGroup(
                jPanel37Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel37Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel37Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(查询在线玩家人数按钮, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton17, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel37Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton9, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton8, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(清空日志, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        首页功能.add(jPanel37, new org.netbeans.lib.awtextra.AbsoluteConstraints(580, 290, 290, 200));

        PlayerCount.setFont(new java.awt.Font("微软雅黑", 0, 12)); // NOI18N
        PlayerCount.setText("【在线人数】：");
        首页功能.add(PlayerCount, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 530, 90, -1));

        时长.setMaximum(21000);
        时长.setAutoscrolls(true);
        时长.setString("0天0时0分0秒");
        时长.setStringPainted(true);
        首页功能.add(时长, new org.netbeans.lib.awtextra.AbsoluteConstraints(690, 500, -1, -1));

        在线人数.setAutoscrolls(true);
        在线人数.setString("0/999");
        在线人数.setStringPainted(true);
        首页功能.add(在线人数, new org.netbeans.lib.awtextra.AbsoluteConstraints(690, 530, -1, -1));

        主窗口.addTab("首页功能", new javax.swing.ImageIcon(getClass().getResource("/image2/01003824.png")), 首页功能); // NOI18N

        常用工具.setBackground(new java.awt.Color(255, 255, 255));
        常用工具.setVerifyInputWhenFocusTarget(false);
        常用工具.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel67.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "转存数据[非开发者请勿点击下方功能]", javax.swing.border.TitledBorder.DEFAULT_JUSTIFICATION, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("微软雅黑", 0, 12), new java.awt.Color(255, 0, 0))); // NOI18N

        jButton69.setText("更新物品道具");
        jButton69.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton69.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton69.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton69.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton69ActionPerformed(evt);
            }
        });

        jButton70.setText("导出爆物数据");
        jButton70.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton70.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton70.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton70.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton70ActionPerformed(evt);
            }
        });

        jButton72.setText("更新商城");
        jButton72.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton72ActionPerformed(evt);
            }
        });

        jButton73.setText("更新怪物技能");
        jButton73.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton73.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton73.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton73.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton73ActionPerformed(evt);
            }
        });

        jButton74.setText("更新问答数据");
        jButton74.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton74.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton74.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton74.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton74ActionPerformed(evt);
            }
        });

        jButton75.setText("更新任务数据");
        jButton75.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton75.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton75.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton75.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton75ActionPerformed(evt);
            }
        });

        jButton76.setText("更新发型脸型");
        jButton76.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton76.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton76.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton76.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton76ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel67Layout = new javax.swing.GroupLayout(jPanel67);
        jPanel67.setLayout(jPanel67Layout);
        jPanel67Layout.setHorizontalGroup(
                jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel67Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(jButton70, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel67Layout.createSequentialGroup()
                                                .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jButton73, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jButton69, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(26, 26, 26)
                                                .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jButton72, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jButton74, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jButton75, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton76, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel67Layout.setVerticalGroup(
                jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel67Layout.createSequentialGroup()
                                .addGap(18, 18, 18)
                                .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton69, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton72, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton75, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel67Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(jButton76, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addComponent(jButton74, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(jButton73, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(23, 23, 23)
                                .addComponent(jButton70, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        常用工具.add(jPanel67, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, -1, 230));

        jPanel53.setBackground(new java.awt.Color(250, 250, 250));
        jPanel53.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "工具系列", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP));

        jButton40.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/魔方.png"))); // NOI18N
        jButton40.setText("代码查询");
        jButton40.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton40ActionPerformed(evt);
            }
        });

        jButton41.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/问题.png"))); // NOI18N
        jButton41.setText("删除NPC");
        jButton41.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton41.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton41.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton41.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton41ActionPerformed(evt);
            }
        });

        jButton29.setForeground(new java.awt.Color(255, 51, 51));
        jButton29.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/4031683.png"))); // NOI18N
        jButton29.setText("一键清空数据库");
        jButton29.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton29.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton29.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton29.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton29ActionPerformed(evt);
            }
        });

        jButton22.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/GM工具.png"))); // NOI18N
        jButton22.setText("基址计算工具");
        jButton22.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton22.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton22.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton22.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton22ActionPerformed(evt);
            }
        });

        jButton42.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/2000001.png"))); // NOI18N
        jButton42.setText("药水冷却时间控制台");
        jButton42.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton42.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton42.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton42.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton42ActionPerformed(evt);
            }
        });

        jButton43.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/装备修改.png"))); // NOI18N
        jButton43.setText("永恒重生装备控制台");
        jButton43.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton43.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton43.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton43.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton43ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel53Layout = new javax.swing.GroupLayout(jPanel53);
        jPanel53.setLayout(jPanel53Layout);
        jPanel53Layout.setHorizontalGroup(
                jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel53Layout.createSequentialGroup()
                                .addGap(16, 16, 16)
                                .addGroup(jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addComponent(jButton42, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton29, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton41, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGroup(jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel53Layout.createSequentialGroup()
                                                .addGap(28, 28, 28)
                                                .addGroup(jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jButton40, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jButton22, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel53Layout.createSequentialGroup()
                                                .addGap(27, 27, 27)
                                                .addComponent(jButton43, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap())
        );
        jPanel53Layout.setVerticalGroup(
                jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel53Layout.createSequentialGroup()
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addGroup(jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton41, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton40, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton29, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton22, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel53Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addComponent(jButton42, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton43, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(30, 30, 30))
        );

        常用工具.add(jPanel53, new org.netbeans.lib.awtextra.AbsoluteConstraints(472, 0, -1, 230));

        jPanel68.setBorder(javax.swing.BorderFactory.createTitledBorder("其他控制台"));

        jButton27.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/4110000.png"))); // NOI18N
        jButton27.setText("CDK卡密");
        jButton27.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton27.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton27.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton27.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton27ActionPerformed(evt);
            }
        });

        jButton55.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/3010025.png"))); // NOI18N
        jButton55.setText("椅子管理");
        jButton55.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton55ActionPerformed(evt);
            }
        });

        jButton44.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/2470000.png"))); // NOI18N
        jButton44.setText("金锤子成功率");
        jButton44.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton44.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton44.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton44.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton44ActionPerformed(evt);
            }
        });

        jButton50.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/3800871.png"))); // NOI18N
        jButton50.setText("锻造控制台");
        jButton50.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton50.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton50.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton50.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton50ActionPerformed(evt);
            }
        });

        jButton47.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/3994506.png"))); // NOI18N
        jButton47.setText("抽奖管理");
        jButton47.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton47ActionPerformed(evt);
            }
        });

        jButton51.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/钓鱼.png"))); // NOI18N
        jButton51.setText("鱼来鱼往");
        jButton51.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton51ActionPerformed(evt);
            }
        });

        jButton48.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/111.png"))); // NOI18N
        jButton48.setText("活动控制台");
        jButton48.setMaximumSize(new java.awt.Dimension(81, 23));
        jButton48.setMinimumSize(new java.awt.Dimension(81, 23));
        jButton48.setPreferredSize(new java.awt.Dimension(81, 23));
        jButton48.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton48ActionPerformed(evt);
            }
        });

        jButton38.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/商店管理.png"))); // NOI18N
        jButton38.setText("商店管理");
        jButton38.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton38ActionPerformed(evt);
            }
        });

        jButton68.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/2630205.png"))); // NOI18N
        jButton68.setText("广播系统");
        jButton68.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton68ActionPerformed(evt);
            }
        });

        jButton46.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/101.png"))); // NOI18N
        jButton46.setText("OX答题管理");
        jButton46.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton46ActionPerformed(evt);
            }
        });

        jButton49.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/01003112.png"))); // NOI18N
        jButton49.setText("物品删除");
        jButton49.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton49ActionPerformed(evt);
            }
        });

        jButton54.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/后台.png"))); // NOI18N
        jButton54.setText("账号管理");
        jButton54.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton54ActionPerformed(evt);
            }
        });

        jButton35.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/爆率.png"))); // NOI18N
        jButton35.setText("爆率设置");
        jButton35.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton35ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel68Layout = new javax.swing.GroupLayout(jPanel68);
        jPanel68.setLayout(jPanel68Layout);
        jPanel68Layout.setHorizontalGroup(
                jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel68Layout.createSequentialGroup()
                                .addGap(21, 21, 21)
                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jButton44, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel68Layout.createSequentialGroup()
                                                .addGap(1, 1, 1)
                                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jButton35, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jButton46, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(27, 27, 27)
                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jButton50, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton27, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton38, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(26, 26, 26)
                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel68Layout.createSequentialGroup()
                                                .addComponent(jButton68, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(18, 18, 18)
                                                .addComponent(jButton47, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(18, 18, 18)
                                                .addComponent(jButton54, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel68Layout.createSequentialGroup()
                                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel68Layout.createSequentialGroup()
                                                                .addComponent(jButton55, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addGap(18, 18, 18)
                                                                .addComponent(jButton51, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                        .addComponent(jButton48, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(18, 18, 18)
                                                .addComponent(jButton49, javax.swing.GroupLayout.PREFERRED_SIZE, 145, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap(42, Short.MAX_VALUE))
        );
        jPanel68Layout.setVerticalGroup(
                jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel68Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton38, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton68, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton47, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton54, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton35, javax.swing.GroupLayout.PREFERRED_SIZE, 47, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE, false)
                                        .addComponent(jButton55, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton27, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton51, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton46, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton49, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel68Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton44, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton50, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton48, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(27, Short.MAX_VALUE))
        );

        常用工具.add(jPanel68, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 241, 890, 240));

        主窗口.addTab("常用工具", new javax.swing.ImageIcon(Objects.requireNonNull(getClass().getResource("/image2/3994106.png"))), 常用工具); // NOI18N

        功能设置.setMinimumSize(new java.awt.Dimension(890, 758));
        功能设置.setPreferredSize(new java.awt.Dimension(890, 758));

        jPanel93.setBackground(new java.awt.Color(255, 255, 255));
        jPanel93.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "游戏经验加成", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", Font.PLAIN, 24))); // NOI18N
        jPanel93.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jScrollPane136.setFont(new java.awt.Font("宋体", Font.PLAIN, 14)); // NOI18N

        经验加成表.setFont(new java.awt.Font("幼圆", Font.PLAIN, 20)); // NOI18N
        经验加成表.setForeground(new java.awt.Color(102, 102, 255));
        经验加成表.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "经验加成序号", "经验加成类型", "经验加成数值百分比设置0为关闭"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        经验加成表.setAutoscrolls(false);
        经验加成表.setGridColor(new java.awt.Color(204, 204, 204));
        经验加成表.setName(""); // NOI18N
        经验加成表.setRequestFocusEnabled(false);
        经验加成表.setRowHeight(18);
        经验加成表.setRowSelectionAllowed(false);
        经验加成表.getTableHeader().setReorderingAllowed(false);
        jScrollPane136.setViewportView(经验加成表);

        jPanel93.add(jScrollPane136, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 70, 630, 390));

        经验加成表序号.setEditable(false);
        经验加成表序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                经验加成表序号ActionPerformed(evt);
            }
        });
        jPanel93.add(经验加成表序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 480, 70, 30));

        经验加成表类型.setEditable(false);
        jPanel93.add(经验加成表类型, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 480, 230, 30));

        经验加成表数值.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                经验加成表数值ActionPerformed(evt);
            }
        });
        jPanel93.add(经验加成表数值, new org.netbeans.lib.awtextra.AbsoluteConstraints(430, 480, 100, 30));

        经验加成表修改.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        经验加成表修改.setText("修改");
        经验加成表修改.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                经验加成表修改ActionPerformed(evt);
            }
        });
        jPanel93.add(经验加成表修改, new org.netbeans.lib.awtextra.AbsoluteConstraints(530, 480, 100, 30));

        jLabel384.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel384.setText("数值；");
        jPanel93.add(jLabel384, new org.netbeans.lib.awtextra.AbsoluteConstraints(430, 460, -1, -1));

        jLabel385.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel385.setText("类型；");
        jPanel93.add(jLabel385, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 460, -1, -1));

        jLabel386.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel386.setText("序号；");
        jPanel93.add(jLabel386, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 460, -1, -1));

        游戏经验加成说明.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        游戏经验加成说明.setText("说明");
        游戏经验加成说明.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                游戏经验加成说明ActionPerformed(evt);
            }
        });
        jPanel93.add(游戏经验加成说明, new org.netbeans.lib.awtextra.AbsoluteConstraints(630, 480, 100, 30));

        功能设置.addTab("经验加成配置", new javax.swing.ImageIcon(getClass().getResource("/image2/2435108.png")), jPanel93); // NOI18N

        jPanel66.setBackground(new java.awt.Color(255, 255, 255));
        jPanel66.setBorder(javax.swing.BorderFactory.createTitledBorder("活动经验"));

        jPanel73.setBackground(new java.awt.Color(255, 255, 255));
        jPanel73.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "2倍率活动", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel73.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        开启双倍经验.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        开启双倍经验.setText("开启双倍经验");
        开启双倍经验.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                开启双倍经验ActionPerformed(evt);
            }
        });
        jPanel73.add(开启双倍经验, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 70, 140, 40));
        jPanel73.add(双倍经验持续时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 80, 120, -1));

        jLabel359.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel359.setText("持续时间/h；");
        jPanel73.add(jLabel359, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 60, -1, 20));

        开启双倍爆率.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        开启双倍爆率.setText("开启双倍爆率");
        开启双倍爆率.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                开启双倍爆率ActionPerformed(evt);
            }
        });
        jPanel73.add(开启双倍爆率, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 150, 140, 40));
        jPanel73.add(双倍爆率持续时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 160, 120, -1));

        jLabel360.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel360.setText("持续时间/h；");
        jPanel73.add(jLabel360, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 140, -1, 20));

        开启双倍金币.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        开启双倍金币.setText("开启双倍金币");
        开启双倍金币.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                开启双倍金币ActionPerformed(evt);
            }
        });
        jPanel73.add(开启双倍金币, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 230, 140, 40));
        jPanel73.add(双倍金币持续时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 240, 120, -1));

        jLabel361.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel361.setText("持续时间/h；");
        jPanel73.add(jLabel361, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 220, -1, 20));

        jPanel76.setBackground(new java.awt.Color(255, 255, 255));
        jPanel76.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "3倍率活动", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel76.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        开启三倍经验.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        开启三倍经验.setText("开启三倍经验");
        开启三倍经验.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                开启三倍经验ActionPerformed(evt);
            }
        });
        jPanel76.add(开启三倍经验, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 70, 140, 40));
        jPanel76.add(三倍经验持续时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 80, 120, -1));

        jLabel362.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel362.setText("持续时间/h；");
        jPanel76.add(jLabel362, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 60, -1, 20));

        开启三倍爆率.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        开启三倍爆率.setText("开启三倍爆率");
        开启三倍爆率.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                开启三倍爆率ActionPerformed(evt);
            }
        });
        jPanel76.add(开启三倍爆率, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 150, 140, 40));
        jPanel76.add(三倍爆率持续时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 160, 120, -1));

        jLabel348.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel348.setText("持续时间/h；");
        jPanel76.add(jLabel348, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 140, -1, 20));

        开启三倍金币.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        开启三倍金币.setText("开启三倍金币");
        开启三倍金币.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                开启三倍金币ActionPerformed(evt);
            }
        });
        jPanel76.add(开启三倍金币, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 230, 140, 40));
        jPanel76.add(三倍金币持续时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 240, 120, -1));

        jLabel349.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel349.setText("持续时间/h；");
        jPanel76.add(jLabel349, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 220, -1, 20));

        jLabel15.setFont(new java.awt.Font("宋体", 1, 36)); // NOI18N
        jLabel15.setForeground(new java.awt.Color(255, 51, 51));
        jLabel15.setText("功能说明：本功能无需重启服务端立即生效");

        jLabel7.setFont(new java.awt.Font("宋体", 1, 36)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(255, 0, 51));
        jLabel7.setText("单位换算 h=小时 时间到期自动解除倍率");

        jPanel62.setBackground(new java.awt.Color(255, 255, 255));
        jPanel62.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "不限时倍率设置", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("宋体", 0, 21))); // NOI18N

        jLabel42.setText("经验");

        经验确认.setFont(new java.awt.Font("宋体", 0, 24)); // NOI18N
        经验确认.setText("确认");
        经验确认.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                经验确认ActionPerformed(evt);
            }
        });

        物品.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                物品ActionPerformed(evt);
            }
        });

        物品确认.setFont(new java.awt.Font("宋体", 0, 24)); // NOI18N
        物品确认.setText("确认");
        物品确认.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                物品确认ActionPerformed(evt);
            }
        });

        金币确认.setFont(new java.awt.Font("宋体", 0, 24)); // NOI18N
        金币确认.setText("确认");
        金币确认.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                金币确认ActionPerformed(evt);
            }
        });

        jLabel43.setText("物品");

        jLabel67.setText("金币");

        jLabel68.setBackground(new java.awt.Color(255, 255, 255));
        jLabel68.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jLabel68.setForeground(new java.awt.Color(255, 0, 153));
        jLabel68.setText("重启服务端恢复默认配置");

        javax.swing.GroupLayout jPanel62Layout = new javax.swing.GroupLayout(jPanel62);
        jPanel62.setLayout(jPanel62Layout);
        jPanel62Layout.setHorizontalGroup(
                jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel62Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel62Layout.createSequentialGroup()
                                                .addGroup(jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                        .addComponent(jLabel68, javax.swing.GroupLayout.PREFERRED_SIZE, 177, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addGroup(jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                .addGroup(jPanel62Layout.createSequentialGroup()
                                                                        .addComponent(jLabel42)
                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                        .addComponent(经验, javax.swing.GroupLayout.PREFERRED_SIZE, 69, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                        .addComponent(经验确认))
                                                                .addGroup(jPanel62Layout.createSequentialGroup()
                                                                        .addComponent(jLabel67)
                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                        .addComponent(金币, javax.swing.GroupLayout.PREFERRED_SIZE, 69, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                        .addComponent(金币确认))))
                                                .addGap(0, 0, Short.MAX_VALUE))
                                        .addGroup(jPanel62Layout.createSequentialGroup()
                                                .addComponent(jLabel43)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(物品, javax.swing.GroupLayout.PREFERRED_SIZE, 69, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(物品确认)
                                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))))
        );
        jPanel62Layout.setVerticalGroup(
                jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel62Layout.createSequentialGroup()
                                .addGap(31, 31, 31)
                                .addGroup(jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE, false)
                                        .addComponent(经验确认, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(经验)
                                        .addComponent(jLabel42))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addGroup(jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(物品, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(物品确认)
                                        .addComponent(jLabel43))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel62Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel67)
                                        .addComponent(金币, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(金币确认))
                                .addGap(18, 18, 18)
                                .addComponent(jLabel68)
                                .addGap(68, 68, 68))
        );

        javax.swing.GroupLayout jPanel66Layout = new javax.swing.GroupLayout(jPanel66);
        jPanel66.setLayout(jPanel66Layout);
        jPanel66Layout.setHorizontalGroup(
                jPanel66Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel66Layout.createSequentialGroup()
                                .addGap(50, 50, 50)
                                .addGroup(jPanel66Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel7)
                                        .addComponent(jLabel15, javax.swing.GroupLayout.PREFERRED_SIZE, 732, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addGroup(jPanel66Layout.createSequentialGroup()
                                .addComponent(jPanel73, javax.swing.GroupLayout.PREFERRED_SIZE, 308, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jPanel76, javax.swing.GroupLayout.PREFERRED_SIZE, 309, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jPanel62, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel66Layout.setVerticalGroup(
                jPanel66Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel66Layout.createSequentialGroup()
                                .addGroup(jPanel66Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jPanel76, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(jPanel73, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel66Layout.createSequentialGroup()
                                                .addContainerGap()
                                                .addComponent(jPanel62, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jLabel15, javax.swing.GroupLayout.PREFERRED_SIZE, 54, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jLabel7)
                                .addGap(159, 159, 159))
        );

        功能设置.addTab("活动经验设置", new javax.swing.ImageIcon(getClass().getResource("/image2/经验1.png")), jPanel66); // NOI18N

        主窗口.addTab("功能设置", new javax.swing.ImageIcon(getClass().getResource("/image2/3800871.png")), 功能设置); // NOI18N

        福利中心.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jTabbedPane7.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N

        jPanel4.setBackground(new java.awt.Color(255, 255, 255));

        jPanel59.setBackground(new java.awt.Color(255, 255, 255));
        jPanel59.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "全服发送福利", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 12))); // NOI18N
        jPanel59.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        z2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z2.setText("发送抵用");
        z2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z2ActionPerformed(evt);
            }
        });
        jPanel59.add(z2, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 120, 100, 30));

        z3.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z3.setText("发送金币");
        z3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z3ActionPerformed(evt);
            }
        });
        jPanel59.add(z3, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 170, 100, 30));

        z1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z1.setText("发送点券");
        z1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z1ActionPerformed(evt);
            }
        });
        jPanel59.add(z1, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 70, 100, 30));

        z4.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z4.setText("发送经验");
        z4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z4ActionPerformed(evt);
            }
        });
        jPanel59.add(z4, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 70, 100, 30));

        z5.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z5.setText("发送人气");
        z5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z5ActionPerformed(evt);
            }
        });
        jPanel59.add(z5, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 120, 100, 30));

        z6.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z6.setText("发送豆豆");
        z6.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z6ActionPerformed(evt);
            }
        });
        jPanel59.add(z6, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 170, 100, 30));

        a1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                a1ActionPerformed(evt);
            }
        });
        jPanel59.add(a1, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 20, 100, 30));

        jLabel235.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel235.setText("数量：");
        jPanel59.add(jLabel235, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 30, -1, -1));

        jPanel58.setBackground(new java.awt.Color(255, 255, 255));
        jPanel58.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "全服发送福利", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 12))); // NOI18N
        jPanel58.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        全服发送装备装备加卷.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备加卷ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备加卷, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 100, 100, 30));

        全服发送装备装备制作人.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备制作人ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备制作人, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 40, 100, 30));

        全服发送装备装备力量.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备力量ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备力量, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 170, 100, 30));

        全服发送装备装备MP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备MPActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备MP, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 100, 100, 30));

        全服发送装备装备智力.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备智力ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备智力, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 170, 100, 30));

        全服发送装备装备运气.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备运气ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备运气, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 100, 100, 30));

        全服发送装备装备HP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备HPActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备HP, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 100, 100, 30));

        全服发送装备装备攻击力.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备攻击力ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备攻击力, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 40, 100, 30));

        全服发送装备装备给予时间.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备给予时间ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备给予时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 230, 100, 30));

        全服发送装备装备可否交易.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备可否交易ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备可否交易, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 170, 100, 30));

        全服发送装备装备敏捷.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备敏捷ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备敏捷, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 170, 100, 30));

        全服发送装备物品ID.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备物品IDActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备物品ID, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 40, 100, 30));

        全服发送装备装备魔法力.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备魔法力ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备魔法力, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 40, 100, 30));

        全服发送装备装备魔法防御.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备魔法防御ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备魔法防御, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 230, 100, 30));

        全服发送装备装备物理防御.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                全服发送装备装备物理防御ActionPerformed(evt);
            }
        });
        jPanel58.add(全服发送装备装备物理防御, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 230, 100, 30));

        给予装备1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        给予装备1.setText("个人发送");
        给予装备1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                给予装备1ActionPerformed(evt);
            }
        });
        jPanel58.add(给予装备1, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 170, 100, 30));

        jLabel219.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel219.setText("能否交易->0交易 1上锁");
        jPanel58.add(jLabel219, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 150, -1, -1));

        jLabel220.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel220.setText("HP加成；");
        jPanel58.add(jLabel220, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 80, -1, -1));

        jLabel221.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel221.setText("魔法攻击力；");
        jPanel58.add(jLabel221, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 20, -1, -1));

        jLabel222.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel222.setText("装备代码；");
        jPanel58.add(jLabel222, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 20, -1, -1));

        jLabel223.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel223.setText("MP加成；");
        jPanel58.add(jLabel223, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 80, -1, -1));

        jLabel224.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel224.setText("物理攻击力；");
        jPanel58.add(jLabel224, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 20, -1, -1));

        jLabel225.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel225.setText("可砸卷次数；");
        jPanel58.add(jLabel225, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 80, -1, -1));

        jLabel226.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel226.setText("装备署名；");
        jPanel58.add(jLabel226, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 20, -1, -1));

        jLabel227.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel227.setText("装备力量；");
        jPanel58.add(jLabel227, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 150, -1, -1));

        jLabel228.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel228.setText("装备敏捷；");
        jPanel58.add(jLabel228, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 150, -1, -1));

        jLabel229.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel229.setText("装备智力；");
        jPanel58.add(jLabel229, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 150, -1, -1));

        jLabel230.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel230.setText("装备运气；");
        jPanel58.add(jLabel230, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 80, -1, -1));

        jLabel231.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel231.setText("魔法防御；");
        jPanel58.add(jLabel231, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 210, -1, -1));

        jLabel232.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel232.setText("物理防御；");
        jPanel58.add(jLabel232, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 210, -1, -1));

        jLabel233.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel233.setText("限时时间；");
        jPanel58.add(jLabel233, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 210, -1, -1));

        发送装备玩家姓名.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发送装备玩家姓名ActionPerformed(evt);
            }
        });
        jPanel58.add(发送装备玩家姓名, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 40, 100, 30));

        给予装备2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        给予装备2.setText("全服发送");
        给予装备2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                给予装备2ActionPerformed(evt);
            }
        });
        jPanel58.add(给予装备2, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 100, 100, 30));

        jLabel246.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel246.setText("玩家名字；");
        jPanel58.add(jLabel246, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 20, -1, -1));

        jLabel244.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel244.setText("个人发送需要填写名字");
        jPanel58.add(jLabel244, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 230, -1, -1));

        jPanel80.setBackground(new java.awt.Color(255, 255, 255));
        jPanel80.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "个人发送福利", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 12))); // NOI18N
        jPanel80.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        z7.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z7.setText("发送抵用");
        z7.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z7ActionPerformed(evt);
            }
        });
        jPanel80.add(z7, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 150, 100, 30));

        z8.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z8.setText("发送金币");
        z8.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z8ActionPerformed(evt);
            }
        });
        jPanel80.add(z8, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 200, 100, 30));

        z9.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z9.setText("发送点券");
        z9.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z9ActionPerformed(evt);
            }
        });
        jPanel80.add(z9, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 100, 100, 30));

        z10.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z10.setText("发送经验");
        z10.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z10ActionPerformed(evt);
            }
        });
        jPanel80.add(z10, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 100, 100, 30));

        z11.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        z11.setText("发送人气");
        z11.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                z11ActionPerformed(evt);
            }
        });
        jPanel80.add(z11, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 150, 100, 30));

        z12.setFont(new java.awt.Font("幼圆", Font.PLAIN, 15)); // NOI18N
        z12.setText("发送豆豆");
        z12.addActionListener(this::z12ActionPerformed);
        jPanel80.add(z12, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 200, 100, 30));

        a2.addActionListener(this::a2ActionPerformed);
        jPanel80.add(a2, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 40, 100, 30));

        jLabel236.setFont(new java.awt.Font("幼圆", Font.PLAIN, 14)); // NOI18N
        jLabel236.setText("数量；");
        jPanel80.add(jLabel236, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 50, -1, -1));

        个人发送物品玩家名字1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                个人发送物品玩家名字1ActionPerformed(evt);
            }
        });
        jPanel80.add(个人发送物品玩家名字1, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 40, 80, 30));

        jLabel64.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jLabel64.setText("玩家名字:");
        jPanel80.add(jLabel64, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 50, -1, -1));

        jPanel61.setBackground(new java.awt.Color(255, 255, 255));
        jPanel61.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "发放道具", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 12), new java.awt.Color(0, 204, 204))); // NOI18N
        jPanel61.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        发放个人玩家名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放个人玩家名字ActionPerformed(evt);
            }
        });
        jPanel61.add(发放个人玩家名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 40, 80, 30));

        发放道具代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放道具代码ActionPerformed(evt);
            }
        });
        jPanel61.add(发放道具代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 40, 90, 30));

        jLabel243.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel243.setText("玩家名字");
        jPanel61.add(jLabel243, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 20, -1, -1));

        jLabel245.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel245.setText("道具代码");
        jPanel61.add(jLabel245, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 20, -1, -1));

        jLabel247.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel247.setText("输入数量");
        jPanel61.add(jLabel247, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 20, -1, -1));

        发放道具发放范围.setModel(new javax.swing.DefaultComboBoxModel<>(new String[]{"发放全服", "发放个人"}));
        发放道具发放范围.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放道具发放范围ActionPerformed(evt);
            }
        });
        jPanel61.add(发放道具发放范围, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 40, 80, 30));

        jLabel248.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel248.setText("发放范围");
        jPanel61.add(jLabel248, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 20, -1, -1));

        给予物品1.setBackground(new java.awt.Color(255, 255, 255));
        给予物品1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        给予物品1.setText("发放道具");
        给予物品1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                给予物品1ActionPerformed(evt);
            }
        });
        jPanel61.add(给予物品1, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 40, 100, 30));

        jLabel249.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel249.setText("点击发放");
        jPanel61.add(jLabel249, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 20, -1, -1));

        发放道具数量.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放道具数量ActionPerformed(evt);
            }
        });
        jPanel61.add(发放道具数量, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 40, 80, 30));

        jPanel64.setBackground(new java.awt.Color(255, 255, 255));
        jPanel64.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "发放点卷抵用金币", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 12), new java.awt.Color(0, 204, 204))); // NOI18N
        jPanel64.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel237.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel237.setText("发送数量");
        jPanel64.add(jLabel237, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 30, -1, -1));

        发放其他类型.setModel(new javax.swing.DefaultComboBoxModel<>(new String[]{"发放点券", "发放抵用", "发放金币"}));
        发放其他类型.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放其他类型ActionPerformed(evt);
            }
        });
        jPanel64.add(发放其他类型, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 50, 80, 30));

        发放其他范围.setModel(new javax.swing.DefaultComboBoxModel<>(new String[]{"发放全服", "发放个人"}));
        发放其他范围.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放其他范围ActionPerformed(evt);
            }
        });
        jPanel64.add(发放其他范围, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 50, 80, 30));

        jLabel250.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel250.setText("选择类型");
        jPanel64.add(jLabel250, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 30, -1, -1));

        发放其他玩家.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放其他玩家ActionPerformed(evt);
            }
        });
        jPanel64.add(发放其他玩家, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 50, 80, 30));

        jLabel251.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel251.setText("玩家名字");
        jPanel64.add(jLabel251, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 30, -1, -1));

        给予物品.setBackground(new java.awt.Color(255, 255, 255));
        给予物品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        给予物品.setText("发送内容");
        给予物品.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                给予物品ActionPerformed(evt);
            }
        });
        jPanel64.add(给予物品, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 50, 100, 30));

        jLabel240.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel240.setText("点击发放");
        jPanel64.add(jLabel240, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 30, -1, -1));

        jLabel254.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel254.setText("发放范围");
        jPanel64.add(jLabel254, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 30, -1, -1));

        发放其他数量.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发放其他数量ActionPerformed(evt);
            }
        });
        jPanel64.add(发放其他数量, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 50, 80, 30));

        javax.swing.GroupLayout jPanel4Layout = new javax.swing.GroupLayout(jPanel4);
        jPanel4.setLayout(jPanel4Layout);
        jPanel4Layout.setHorizontalGroup(
                jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel4Layout.createSequentialGroup()
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel4Layout.createSequentialGroup()
                                                .addGap(14, 14, 14)
                                                .addComponent(jPanel58, javax.swing.GroupLayout.PREFERRED_SIZE, 522, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jPanel80, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                        .addGroup(jPanel4Layout.createSequentialGroup()
                                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                        .addComponent(jPanel61, javax.swing.GroupLayout.PREFERRED_SIZE, 547, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jPanel64, javax.swing.GroupLayout.PREFERRED_SIZE, 547, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(18, 18, 18)
                                                .addComponent(jPanel59, javax.swing.GroupLayout.PREFERRED_SIZE, 311, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel4Layout.setVerticalGroup(
                jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel4Layout.createSequentialGroup()
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel4Layout.createSequentialGroup()
                                                .addContainerGap()
                                                .addComponent(jPanel59, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                        .addGroup(jPanel4Layout.createSequentialGroup()
                                                .addGap(21, 21, 21)
                                                .addComponent(jPanel61, javax.swing.GroupLayout.PREFERRED_SIZE, 91, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(jPanel64, javax.swing.GroupLayout.PREFERRED_SIZE, 107, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jPanel80, javax.swing.GroupLayout.PREFERRED_SIZE, 270, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jPanel58, javax.swing.GroupLayout.PREFERRED_SIZE, 270, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(112, 112, 112))
        );

        jTabbedPane7.addTab("福利道具发送", new javax.swing.ImageIcon(getClass().getResource("/image2/3010025.png")), jPanel4); // NOI18N

        jPanel9.setBackground(new java.awt.Color(255, 255, 255));
        jPanel9.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "玩家在线泡点", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel9.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        在线泡点设置.setFont(new java.awt.Font("幼圆", 0, 20)); // NOI18N
        在线泡点设置.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "类型", "数值"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        在线泡点设置.getTableHeader().setReorderingAllowed(false);
        jScrollPane134.setViewportView(在线泡点设置);

        jPanel9.add(jScrollPane134, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 40, 470, 260));

        泡点序号.setEditable(false);
        jPanel9.add(泡点序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(50, 380, 70, 30));

        泡点类型.setEditable(false);
        jPanel9.add(泡点类型, new org.netbeans.lib.awtextra.AbsoluteConstraints(190, 380, 110, 30));
        jPanel9.add(泡点值, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 380, 120, 30));

        泡点值修改.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        泡点值修改.setText("修改");
        泡点值修改.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                泡点值修改ActionPerformed(evt);
            }
        });
        jPanel9.add(泡点值修改, new org.netbeans.lib.awtextra.AbsoluteConstraints(550, 380, 80, 30));

        jLabel322.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel322.setText("类型数值：");
        jPanel9.add(jLabel322, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 360, -1, -1));

        jLabel326.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel326.setForeground(new java.awt.Color(255, 0, 153));
        jLabel326.setText("提示：修改泡点时间需30分钟生效,其它设置即时生效。");
        jPanel9.add(jLabel326, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 310, -1, -1));

        jLabel327.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel327.setText("泡点奖励类型：");
        jPanel9.add(jLabel327, new org.netbeans.lib.awtextra.AbsoluteConstraints(190, 360, -1, -1));

        jPanel75.setBackground(new java.awt.Color(255, 255, 255));
        jPanel75.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "在线泡点设置", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N

        泡点金币开关.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        泡点金币开关.setText("泡点金币");
        泡点金币开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                泡点金币开关ActionPerformed(evt);
            }
        });

        泡点经验开关.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        泡点经验开关.setText("泡点经验");
        泡点经验开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                泡点经验开关ActionPerformed(evt);
            }
        });

        泡点点券开关.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        泡点点券开关.setText("泡点点券");
        泡点点券开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                泡点点券开关ActionPerformed(evt);
            }
        });

        泡点抵用开关.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        泡点抵用开关.setText("泡点抵用");
        泡点抵用开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                泡点抵用开关ActionPerformed(evt);
            }
        });

        泡点豆豆开关.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        泡点豆豆开关.setText("泡点豆豆");
        泡点豆豆开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                泡点豆豆开关ActionPerformed(evt);
            }
        });

        jLabel65.setForeground(new java.awt.Color(255, 0, 153));
        jLabel65.setText("提示：在线泡点开关，无需重启服务端，即时生效");

        javax.swing.GroupLayout jPanel75Layout = new javax.swing.GroupLayout(jPanel75);
        jPanel75.setLayout(jPanel75Layout);
        jPanel75Layout.setHorizontalGroup(
                jPanel75Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel75Layout.createSequentialGroup()
                                .addGap(24, 24, 24)
                                .addGroup(jPanel75Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addComponent(泡点豆豆开关, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel75Layout.createSequentialGroup()
                                                .addComponent(泡点金币开关, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(20, 20, 20)
                                                .addComponent(泡点经验开关, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel75Layout.createSequentialGroup()
                                                .addGap(2, 2, 2)
                                                .addComponent(泡点点券开关, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(18, 18, 18)
                                                .addComponent(泡点抵用开关, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(jLabel65, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addGap(0, 0, 0))
        );
        jPanel75Layout.setVerticalGroup(
                jPanel75Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel75Layout.createSequentialGroup()
                                .addGap(1, 1, 1)
                                .addGroup(jPanel75Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(泡点金币开关, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(泡点经验开关, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addGroup(jPanel75Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(泡点点券开关, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(泡点抵用开关, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(27, 27, 27)
                                .addComponent(泡点豆豆开关, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(jLabel65, javax.swing.GroupLayout.PREFERRED_SIZE, 23, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap())
        );

        jPanel9.add(jPanel75, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 30, 360, 270));

        jLabel328.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel328.setText("序号：");
        jPanel9.add(jLabel328, new org.netbeans.lib.awtextra.AbsoluteConstraints(50, 360, -1, -1));

        福利提示语言2.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        福利提示语言2.setText("[信息]：");
        jPanel9.add(福利提示语言2, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 520, 800, 25));

        jLabel60.setText("金币==数值乘等级 列如：金币数值10，实际泡点所得金币等于10乘当前等级");
        jPanel9.add(jLabel60, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 430, 510, -1));

        jLabel61.setText("经验==数值乘等级 列如：经验数值10，实际泡点所得经验等于10乘当前等级");
        jPanel9.add(jLabel61, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 460, 500, -1));

        jLabel62.setText("其中：点卷/抵用卷/豆豆 这三个数值都是固定数值，设置10泡点所得就是10");
        jPanel9.add(jLabel62, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 490, 520, -1));

        jTabbedPane7.addTab("福利在线泡点", new javax.swing.ImageIcon(getClass().getResource("/image2/2000001.png")), jPanel9); // NOI18N

        jPanel23.setBackground(new java.awt.Color(255, 255, 255));
        jPanel23.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "高级配置 [所有功能重启服务端恢复默认配置]", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel23.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel65.setBackground(new java.awt.Color(255, 255, 255));
        jPanel65.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "弓标子弹叠加上限突破", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("宋体", 0, 21))); // NOI18N

        jLabel269.setFont(new java.awt.Font("微软雅黑", 0, 12)); // NOI18N
        jLabel269.setText("所有物品叠加数量");

        修改物品叠加数量1.setText("修改确认");
        修改物品叠加数量1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改物品叠加数量1ActionPerformed(evt);
            }
        });

        弓标子弹叠加上限突破.setColumns(20);
        弓标子弹叠加上限突破.setLineWrap(true);
        弓标子弹叠加上限突破.setRows(5);
        弓标子弹叠加上限突破.setToolTipText("");
        jScrollPane12.setViewportView(弓标子弹叠加上限突破);

        jLabel32.setText("需要突破叠加弓、标、子弹代码：");

        javax.swing.GroupLayout jPanel65Layout = new javax.swing.GroupLayout(jPanel65);
        jPanel65.setLayout(jPanel65Layout);
        jPanel65Layout.setHorizontalGroup(
                jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel65Layout.createSequentialGroup()
                                .addGroup(jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel32)
                                        .addGroup(jPanel65Layout.createSequentialGroup()
                                                .addGap(14, 14, 14)
                                                .addComponent(jLabel269)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(物品叠加数量, javax.swing.GroupLayout.PREFERRED_SIZE, 93, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(32, 32, 32)
                                                .addComponent(修改物品叠加数量1, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel65Layout.createSequentialGroup()
                                                .addGap(19, 19, 19)
                                                .addComponent(jScrollPane12, javax.swing.GroupLayout.PREFERRED_SIZE, 350, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel65Layout.setVerticalGroup(
                jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel65Layout.createSequentialGroup()
                                .addComponent(jLabel32)
                                .addGap(18, 18, 18)
                                .addComponent(jScrollPane12, javax.swing.GroupLayout.PREFERRED_SIZE, 184, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addGroup(jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(物品叠加数量, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel269)
                                        .addComponent(修改物品叠加数量1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap())
        );

        jPanel23.add(jPanel65, new org.netbeans.lib.awtextra.AbsoluteConstraints(460, 30, 400, 310));

        jPanel83.setBackground(new java.awt.Color(255, 255, 255));
        jPanel83.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "自定义地图刷怪设置", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("微软雅黑", 0, 12))); // NOI18N

        jButton10.setText("功能说明");
        jButton10.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton10ActionPerformed(evt);
            }
        });

        jLabel263.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel263.setText("自定义怪物倍数地图列表id(逗号隔开)");

        倍怪地图.setColumns(20);
        倍怪地图.setLineWrap(true);
        倍怪地图.setRows(5);
        倍怪地图.setToolTipText("");
        jScrollPane6.setViewportView(倍怪地图);

        jLabel264.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel264.setText("怪物倍率");

        修改怪物倍率.setText("修改");
        修改怪物倍率.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改怪物倍率ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel83Layout = new javax.swing.GroupLayout(jPanel83);
        jPanel83.setLayout(jPanel83Layout);
        jPanel83Layout.setHorizontalGroup(
                jPanel83Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel83Layout.createSequentialGroup()
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(jLabel263, javax.swing.GroupLayout.PREFERRED_SIZE, 242, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(79, 79, 79))
                        .addGroup(jPanel83Layout.createSequentialGroup()
                                .addGap(14, 14, 14)
                                .addGroup(jPanel83Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jScrollPane6, javax.swing.GroupLayout.PREFERRED_SIZE, 363, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel83Layout.createSequentialGroup()
                                                .addGap(14, 14, 14)
                                                .addComponent(jLabel264)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(怪物倍率, javax.swing.GroupLayout.PREFERRED_SIZE, 56, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(27, 27, 27)
                                                .addComponent(修改怪物倍率, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(jButton10, javax.swing.GroupLayout.PREFERRED_SIZE, 96, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap(31, Short.MAX_VALUE))
        );
        jPanel83Layout.setVerticalGroup(
                jPanel83Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel83Layout.createSequentialGroup()
                                .addComponent(jLabel263, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jScrollPane6, javax.swing.GroupLayout.PREFERRED_SIZE, 187, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel83Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(修改怪物倍率, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(怪物倍率)
                                        .addComponent(jLabel264)
                                        .addComponent(jButton10, javax.swing.GroupLayout.DEFAULT_SIZE, 31, Short.MAX_VALUE))
                                .addContainerGap())
        );

        jPanel23.add(jPanel83, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 420, 310));

        jTabbedPane7.addTab("高级叠加设置", new javax.swing.ImageIcon(getClass().getResource("/image2/5680149.png")), jPanel23); // NOI18N

        福利中心.add(jTabbedPane7, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, -1, -1));

        主窗口.addTab("福利中心", new javax.swing.ImageIcon(getClass().getResource("/image2/1802034.png")), 福利中心); // NOI18N

        游戏公告.setBackground(new java.awt.Color(255, 255, 255));
        游戏公告.setBorder(javax.swing.BorderFactory.createTitledBorder("游戏公告"));
        游戏公告.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        sendNotice.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/喇叭1.png"))); // NOI18N
        sendNotice.setText("蓝色提示公告");
        sendNotice.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sendNoticeActionPerformed(evt);
            }
        });
        游戏公告.add(sendNotice, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 300, 155, 40));

        sendWinNotice.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/喇叭2.png"))); // NOI18N
        sendWinNotice.setText("顶部滚动公告");
        sendWinNotice.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sendWinNoticeActionPerformed(evt);
            }
        });
        游戏公告.add(sendWinNotice, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 300, 155, 40));

        sendMsgNotice.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/喇叭3.png"))); // NOI18N
        sendMsgNotice.setText("弹窗公告");
        sendMsgNotice.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sendMsgNoticeActionPerformed(evt);
            }
        });
        游戏公告.add(sendMsgNotice, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 300, 155, 40));

        sendNpcTalkNotice.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/喇叭4.png"))); // NOI18N
        sendNpcTalkNotice.setText("蓝色公告事项");
        sendNpcTalkNotice.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sendNpcTalkNoticeActionPerformed(evt);
            }
        });
        游戏公告.add(sendNpcTalkNotice, new org.netbeans.lib.awtextra.AbsoluteConstraints(520, 300, 155, 40));

        noticeText.setText("游戏即将维护,请安全下线！造成不便请谅解！");
        游戏公告.add(noticeText, new org.netbeans.lib.awtextra.AbsoluteConstraints(16, 35, 853, 203));

        jLabel117.setFont(new java.awt.Font("幼圆", 0, 24)); // NOI18N
        jLabel117.setText("1、不得散布谣言，扰乱社会秩序，破坏社会稳定的信息 ");
        游戏公告.add(jLabel117, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 423, 680, 40));

        jLabel118.setFont(new java.awt.Font("幼圆", 0, 24)); // NOI18N
        jLabel118.setText("2、不得散布赌博、暴力、凶杀、恐怖或者教唆犯罪的信息");
        游戏公告.add(jLabel118, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 463, 680, 40));

        jLabel119.setFont(new java.awt.Font("幼圆", 0, 24)); // NOI18N
        jLabel119.setText("3、不得侮辱或者诽谤他人，侵害他人合法权益");
        游戏公告.add(jLabel119, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 503, 680, 40));

        jLabel106.setFont(new java.awt.Font("幼圆", 0, 24)); // NOI18N
        jLabel106.setText("4、不得含有法律、行政法规禁止的其他内容");
        游戏公告.add(jLabel106, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 543, 680, 40));

        公告发布喇叭代码.setForeground(new java.awt.Color(255, 51, 102));
        公告发布喇叭代码.setText("5120027");
        公告发布喇叭代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                公告发布喇叭代码ActionPerformed(evt);
            }
        });
        游戏公告.add(公告发布喇叭代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 250, 90, 30));

        jButton45.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jButton45.setIcon(new javax.swing.ImageIcon(getClass().getResource("/image2/喇叭5.png"))); // NOI18N
        jButton45.setText("屏幕正中公告");
        jButton45.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton45ActionPerformed(evt);
            }
        });
        游戏公告.add(jButton45, new org.netbeans.lib.awtextra.AbsoluteConstraints(680, 300, 155, 40));

        jLabel259.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel259.setText("喇叭代码：");
        游戏公告.add(jLabel259, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 260, -1, -1));

        主窗口.addTab("游戏公告", new javax.swing.ImageIcon(getClass().getResource("/image2/2630205.png")), 游戏公告); // NOI18N

        关于我们.setBackground(new java.awt.Color(255, 255, 255));

        jPanel52.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "关于我们", javax.swing.border.TitledBorder.DEFAULT_JUSTIFICATION, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("微软雅黑", 0, 12))); // NOI18N
        jPanel52.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel9.setText("服务端Ver:079 [正版]");
        jPanel52.add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(351, 267, -1, 34));

        jLabel14.setText("请遵守协议,服务端均来自互联网,如有法律侵权请第一时间联系我们删除.");
        jPanel52.add(jLabel14, new org.netbeans.lib.awtextra.AbsoluteConstraints(238, 443, -1, -1));

        jLabel13.setText("请勿商业用途,后果自负.技术维护QQ：2215672221");
        jPanel52.add(jLabel13, new org.netbeans.lib.awtextra.AbsoluteConstraints(298, 410, -1, -1));

        jLabel12.setText("游戏中遇到BUG请提交到作者");
        jPanel52.add(jLabel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(344, 377, -1, -1));

        jLabel10.setText("我们是永久包版本更新的哦,不收取其他任何费用");
        jPanel52.add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(292, 344, -1, -1));

        jLabel8.setText("不得外传和转发,仅研究使用,请勿商业用途,使用完后请立即删除");
        jPanel52.add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(255, 311, -1, -1));

        jButton7.setText("问题提交");
        jButton7.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton7ActionPerformed(evt);
            }
        });
        jPanel52.add(jButton7, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 470, 104, 34));

        关于我们.addTab("版权信息", new javax.swing.ImageIcon(getClass().getResource("/image2/警告日志.png")), jPanel52); // NOI18N

        jTextArea2.setColumns(20);
        jTextArea2.setRows(5);
        jTextArea2.setText("感谢使用LnyxMS079服务端\n10年技术支持，信誉做人。\n服务端出现基础BUG，我们将无偿提供修复更新。\n------------------------------------------\n2022-5-18 LnyxMS079.5更新说明\n1.修复 队长变身技能\n2.添加指令 解卡组队 \n3.添加 复古经验倍率0.XX倍\n4.新增 聊天解卡\n\n2022-5-18 LnyxMS079.5更新说明\n1.修复 正向卷轴不正向的问题\n2.新增 物品叠加最大3W\n3.新增 新增吸怪 账号控制台授权\n4.修复 物品发送掉线 \n5.新增 自定义多倍怪\n6.新增 控制台新增日志清空\n\n2022-5-18 LnyxMS079.5更新说明\n1.修复 刷出来的现金装备无法放进商城\n2.新增 优化内存\n3.新增 皮肤更换功能\n4.优化 服务端\n\n2022-5-13 LnyxMS079.4更新说明\n1.修复 NPC不说话 以及部分NPC不走动\n2.新增 宠吸功能\n3.新增 怪物掉落点券控制\n4.新增 技能检测 用于防挂\n5.新增 玩家命令 @解卡组队\n6.新增 控制台功能\n7.新增 函数 cm.spawnMobStats(怪物代码,怪物数量,怪物血量,怪物经验,怪物X坐标,怪物Y坐标);\n\n2022-5-12 LnyxMS079.3更新说明\n1.修复 控制台部分功能\n2.新增 函数 NPCConversationManager 捉鬼任务1() 捉鬼任务2() 捉鬼任务3() 捉鬼任务4()\n3.修正 getByMobSkill(int skill) 读取怪物技能 返回debuff类型\n4.新增 万能记录表单 getFZ1(int someid, String log1) setFZ1(int someid, String log1 ,int slot)\n5.新增 函数 getHp() 读取血量  getMp() 读取蓝量\n\n2022-5-10 LnyxMS079.2更新说明\n1.新增 控制台\n2.修复 修复商城限时特卖的异常出现 \n3.修复 商城热度包\n4.修复 转职之后技能点给的数值写法\n\n2022-5-5 LnyxMS079.1 更新说明\n1.修复 进入游戏的所有包头与拆包。 \n2.修复 NPC点击。 \n3.修复 NPC商城。 \n4.修复 怪物召唤，怪移动的问题。 \n5.修复 人物移动的封包错误问题，修复多人同时在同地图封包错误的问题。 \n6.修复 怪物掉落物品坐标问题。 \n7.修复 椅子 \n8.修复 骑宠 \n9.修复 战，法，弓，飞侠等职业技能。 \n10.修复 辅助技能。 \n11.修复 喇叭封包错误问题。 \n12.修复 招待好友封包问题。 \n13.修复 部分被动技能无效问题\n14.修复 技能宏不保存问题\n15.修复 测谎仪系统\n16.修复 学院系统\n17.修复 钓鱼系统\n18.修复 结婚系统 \n19.新增 自定义商城道具\n20.修复 好友组队问题。\n21.优化 大部分源代码写法(使服务端更加稳定)\n22.最新 开服源码框架，服务端长久稳定(不掉线是不可能的，只能说我们的是最稳定的)");
        jScrollPane9.setViewportView(jTextArea2);

        关于我们.addTab("修复内容", new javax.swing.ImageIcon(getClass().getResource("/image2/信息日志.png")), jScrollPane9); // NOI18N

        主窗口.addTab("关于我们", new javax.swing.ImageIcon(getClass().getResource("/image2/关于.png")), 关于我们); // NOI18N

        getContentPane().add(主窗口, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 890, 690));
        主窗口.getAccessibleContext().setAccessibleName("首页功能");

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jTextField22ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField22ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField22ActionPerformed

    private void jButton16ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton16ActionPerformed
        // 关闭服务端按钮:
        重启服务器();
    }//GEN-LAST:event_jButton16ActionPerformed

    private void startserverbuttonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_startserverbuttonActionPerformed
        if (!开启服务端) {
            开启服务端 = true;
        } else {
            System.out.println("服务端正在运行中！");
            return;
        }
        new Thread(new Runnable() {
            public void run() {
                startRunTime = System.currentTimeMillis();
                Start.是否控制台启动 = true;
                Start.main(null);
                startserverbutton.setText("正在运行中...");
                startserverbutton.setUI(new BEButtonUI().setNormalColor(BEButtonUI.NormalColor.normal));
            }
        }).start();//线程启动服务器初始化
        Dis tt = new Dis();
        tt.start();
    }//GEN-LAST:event_startserverbuttonActionPerformed

    private void 重载包头按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载包头按钮2ActionPerformed
        // TODO add your handling code here:
        SendPacketOpcode.reloadValues();
        RecvPacketOpcode.reloadValues();
        String 输出 = "[重载系统] 包头重载成功。";
        JOptionPane.showMessageDialog(null, "包头重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载包头按钮2ActionPerformed

    private void 重载任务2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载任务2ActionPerformed
        // TODO add your handling code here:
        MapleQuest.clearQuests();
        String 输出 = "[重载系统] 任务重载成功。";
        JOptionPane.showMessageDialog(null, "任务重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载任务2ActionPerformed

    private void 重载商店按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载商店按钮2ActionPerformed
        // TODO add your handling code here:
        MapleShopFactory.getInstance().clear();
        String 输出 = "[重载系统] 商店重载成功。";
        JOptionPane.showMessageDialog(null, "商店重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载商店按钮2ActionPerformed

    private void 重载商城按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载商城按钮2ActionPerformed
        // TODO add your handling code here:
        CashItemFactory.getInstance().clearItems();
        String 输出 = "[重载系统] 商城重载成功。";
        JOptionPane.showMessageDialog(null, "商城重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载商城按钮2ActionPerformed

    private void 重载传送门按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载传送门按钮2ActionPerformed
        // TODO add your handling code here:
        PortalScriptManager.getInstance().clearScripts();
        String 输出 = "[重载系统] 传送门重载成功。";
        JOptionPane.showMessageDialog(null, "传送门重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载传送门按钮2ActionPerformed

    private void 重载反应堆按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载反应堆按钮2ActionPerformed
        // TODO add your handling code here:
        ReactorScriptManager.getInstance().clearDrops();
        String 输出 = "[重载系统] 反应堆重载成功。";
        JOptionPane.showMessageDialog(null, "反应堆重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载反应堆按钮2ActionPerformed

    private void 重载爆率按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载爆率按钮2ActionPerformed
        // TODO add your handling code here:
        MapleMonsterInformationProvider.getInstance().clearDrops();
        String 输出 = "[重载系统] 爆率重载成功。";
        JOptionPane.showMessageDialog(null, "爆率重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_重载爆率按钮2ActionPerformed

    private void 重载副本按钮2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重载副本按钮2ActionPerformed
        // TODO add your handling code here:
        for (ChannelServer instance : ChannelServer.getAllInstances()) {
            if (instance != null) {
                instance.reloadEvents();
            }
        }
        JOptionPane.showMessageDialog(null, "副本重载成功。");
    }//GEN-LAST:event_重载副本按钮2ActionPerformed

    private void jButton7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton7ActionPerformed
        String str = "cmd /c start iexplore https://wpa.qq.com/wpa_jump_page?v=3&uin=2215672221&site=[Discuz!]&from=discuz&menu=yes";
        try {
            Runtime.getRuntime().exec(str);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }//GEN-LAST:event_jButton7ActionPerformed

    private void jButton45ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton45ActionPerformed
        sendNotice(4);
        System.out.println("[公告系统] 发送公告成功！");
        JOptionPane.showMessageDialog(null, "发送公告成功！");
    }//GEN-LAST:event_jButton45ActionPerformed

    private void 公告发布喇叭代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_公告发布喇叭代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_公告发布喇叭代码ActionPerformed

    private void sendNpcTalkNoticeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sendNpcTalkNoticeActionPerformed
        sendNotice(3);
        System.out.println("[公告系统] 发送黄色滚动公告成功！");
        JOptionPane.showMessageDialog(null, "发送黄色滚动公告成功！");
    }//GEN-LAST:event_sendNpcTalkNoticeActionPerformed

    private void sendMsgNoticeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sendMsgNoticeActionPerformed
        sendNotice(2);
        System.out.println("[公告系统] 发送红色提示公告成功！");
        JOptionPane.showMessageDialog(null, "发送红色提示公告成功！");
    }//GEN-LAST:event_sendMsgNoticeActionPerformed

    private void sendWinNoticeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sendWinNoticeActionPerformed
        sendNotice(1);
        System.out.println("[公告系统] 发送弹窗公告成功！");
        JOptionPane.showMessageDialog(null, "发送弹窗公告成功！");
    }//GEN-LAST:event_sendWinNoticeActionPerformed

    private void sendNoticeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sendNoticeActionPerformed
        sendNotice(0);
        System.out.println("[公告系统] 发送蓝色公告事项公告成功！");
        JOptionPane.showMessageDialog(null, "发送蓝色公告事项公告成功！");
    }//GEN-LAST:event_sendNoticeActionPerformed

    private void 泡点豆豆开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_泡点豆豆开关ActionPerformed
        int 泡点豆豆开关 = Maple.ConfigValuesMap.get("泡点豆豆开关");
        按键开关("泡点豆豆开关", 711);
        刷新泡点豆豆开关();
    }//GEN-LAST:event_泡点豆豆开关ActionPerformed

    private void 泡点抵用开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_泡点抵用开关ActionPerformed
        int 泡点抵用开关 = Maple.ConfigValuesMap.get("泡点抵用开关");
        按键开关("泡点抵用开关", 707);
        刷新泡点抵用开关();
    }//GEN-LAST:event_泡点抵用开关ActionPerformed

    private void 泡点点券开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_泡点点券开关ActionPerformed
        int 泡点点券开关 = Maple.ConfigValuesMap.get("泡点点券开关");
        按键开关("泡点点券开关", 703);
        刷新泡点点券开关();
    }//GEN-LAST:event_泡点点券开关ActionPerformed

    private void 泡点经验开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_泡点经验开关ActionPerformed

        int 泡点经验开关 = Maple.ConfigValuesMap.get("泡点经验开关");
        按键开关("泡点经验开关", 705);
        刷新泡点经验开关();
    }//GEN-LAST:event_泡点经验开关ActionPerformed

    private void 泡点金币开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_泡点金币开关ActionPerformed
        int 泡点金币开关 = Maple.ConfigValuesMap.get("泡点金币开关");
        按键开关("泡点金币开关", 701);
        刷新泡点金币开关();
    }//GEN-LAST:event_泡点金币开关ActionPerformed

    private void 泡点值修改ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_泡点值修改ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.泡点值.getText().matches("[0-9]+");
        if (result1) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");

                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");

                ps1.setInt(1, Integer.parseInt(this.泡点序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    sqlString1 = "update configvalues set Val = '" + this.泡点值.getText() + "' where id= " + this.泡点序号.getText() + ";";
                    PreparedStatement Val = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    Val.executeUpdate(sqlString1);
                    刷新泡点设置();
                    Maple.GetConfigValues();
                    福利提示语言2.setText("[信息]:修改成功已经生效。");
                }
            } catch (SQLException ex) {
                Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            福利提示语言2.setText("[信息]:请选择你要修改的值。");
        }
    }//GEN-LAST:event_泡点值修改ActionPerformed

    private void 个人发送物品玩家名字1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_个人发送物品玩家名字1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_个人发送物品玩家名字1ActionPerformed

    private void a2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_a2ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_a2ActionPerformed

    private void z12ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z12ActionPerformed
        个人发送福利(6);
    }//GEN-LAST:event_z12ActionPerformed

    private void z11ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z11ActionPerformed
        个人发送福利(5);
    }//GEN-LAST:event_z11ActionPerformed

    private void z10ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z10ActionPerformed
        个人发送福利(4);
    }//GEN-LAST:event_z10ActionPerformed

    private void z9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z9ActionPerformed
        个人发送福利(1);
    }//GEN-LAST:event_z9ActionPerformed

    private void z8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z8ActionPerformed
        个人发送福利(3);
    }//GEN-LAST:event_z8ActionPerformed

    private void z7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z7ActionPerformed
        个人发送福利(2);
    }//GEN-LAST:event_z7ActionPerformed

    private void 发送装备玩家姓名ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发送装备玩家姓名ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发送装备玩家姓名ActionPerformed

    private void 给予装备1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_给予装备1ActionPerformed
        刷装备2(2);        // TODO add your handling code here:
    }//GEN-LAST:event_给予装备1ActionPerformed

    private void 全服发送装备装备物理防御ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备物理防御ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备物理防御ActionPerformed

    private void 全服发送装备装备魔法防御ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备魔法防御ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备魔法防御ActionPerformed

    private void 全服发送装备装备魔法力ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备魔法力ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备魔法力ActionPerformed

    private void 全服发送装备物品IDActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备物品IDActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备物品IDActionPerformed

    private void 全服发送装备装备敏捷ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备敏捷ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备敏捷ActionPerformed

    private void 全服发送装备装备可否交易ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备可否交易ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备可否交易ActionPerformed

    private void 全服发送装备装备给予时间ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备给予时间ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备给予时间ActionPerformed

    private void 全服发送装备装备攻击力ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备攻击力ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备攻击力ActionPerformed

    private void 全服发送装备装备HPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备HPActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备HPActionPerformed

    private void 全服发送装备装备运气ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备运气ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备运气ActionPerformed

    private void 全服发送装备装备智力ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备智力ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备智力ActionPerformed

    private void 全服发送装备装备MPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备MPActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备MPActionPerformed

    private void 全服发送装备装备力量ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备力量ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备力量ActionPerformed

    private void 全服发送装备装备制作人ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备制作人ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备制作人ActionPerformed

    private void 全服发送装备装备加卷ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全服发送装备装备加卷ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_全服发送装备装备加卷ActionPerformed

    private void a1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_a1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_a1ActionPerformed

    private void z6ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z6ActionPerformed
        发送福利(6);
    }//GEN-LAST:event_z6ActionPerformed

    private void z5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z5ActionPerformed
        发送福利(5);
    }//GEN-LAST:event_z5ActionPerformed

    private void z4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z4ActionPerformed
        发送福利(4);
    }//GEN-LAST:event_z4ActionPerformed

    private void z1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z1ActionPerformed
        发送福利(1);        // TODO add your handling code here:
    }//GEN-LAST:event_z1ActionPerformed

    private void z3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z3ActionPerformed
        发送福利(3);
    }//GEN-LAST:event_z3ActionPerformed

    private void z2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_z2ActionPerformed
        发送福利(2);
    }//GEN-LAST:event_z2ActionPerformed

    private void jButton48ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton48ActionPerformed
        // TODO add your handling code here:
        openWindow(Windows.活动控制台);
    }//GEN-LAST:event_jButton48ActionPerformed

    private void jButton51ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton51ActionPerformed
        openWindow(Windows.鱼来鱼往);
    }//GEN-LAST:event_jButton51ActionPerformed

    private void jButton47ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton47ActionPerformed
        openWindow(Windows.游戏抽奖工具);
    }//GEN-LAST:event_jButton47ActionPerformed

    private void jButton50ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton50ActionPerformed
        openWindow(Windows.锻造控制台);
    }//GEN-LAST:event_jButton50ActionPerformed

    private void jButton44ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton44ActionPerformed
        openWindow(Windows.金锤子成功率控制台);
    }//GEN-LAST:event_jButton44ActionPerformed

    private void jButton55ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton55ActionPerformed
        openWindow(Windows.椅子控制台);
    }//GEN-LAST:event_jButton55ActionPerformed

    private void jButton27ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton27ActionPerformed
        openWindow(Windows.卡密制作工具);
    }//GEN-LAST:event_jButton27ActionPerformed

    private void jButton43ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton43ActionPerformed
        openWindow(Windows.永恒重生装备控制台);
    }//GEN-LAST:event_jButton43ActionPerformed

    private void jButton42ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton42ActionPerformed
        openWindow(Windows.药水冷却时间控制台);
    }//GEN-LAST:event_jButton42ActionPerformed

    private void jButton22ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton22ActionPerformed
        openWindow(Windows.基址计算工具);
    }//GEN-LAST:event_jButton22ActionPerformed

    private void jButton29ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton29ActionPerformed
        openWindow(Windows.一键还原);
    }//GEN-LAST:event_jButton29ActionPerformed

    private void jButton41ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton41ActionPerformed
        openWindow(Windows.删除自添加NPC工具);
    }//GEN-LAST:event_jButton41ActionPerformed

    private void jButton40ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton40ActionPerformed
        openWindow(Windows.代码查询工具);
        if (!LoginServer.isShutdown() || searchServer) {
        }
    }//GEN-LAST:event_jButton40ActionPerformed

    private void jButton76ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton76ActionPerformed
        runTool(Tools.FixCharSets);
    }//GEN-LAST:event_jButton76ActionPerformed

    private void jButton75ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton75ActionPerformed
        runTool(Tools.DumpQuests);
    }//GEN-LAST:event_jButton75ActionPerformed

    private void jButton74ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton74ActionPerformed
        runTool(Tools.DumpOxQuizData);
    }//GEN-LAST:event_jButton74ActionPerformed

    private void jButton73ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton73ActionPerformed
        runTool(Tools.DumpMobSkills);
    }//GEN-LAST:event_jButton73ActionPerformed

    private void jButton72ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton72ActionPerformed
        runTool(Tools.DumpCashShop);
    }//GEN-LAST:event_jButton72ActionPerformed

    private void jButton70ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton70ActionPerformed
        runTool(Tools.MonsterDropCreator);
    }//GEN-LAST:event_jButton70ActionPerformed

    private void jButton69ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton69ActionPerformed
        runTool(Tools.DumpItems);
    }//GEN-LAST:event_jButton69ActionPerformed

    private void 查询在线玩家人数按钮ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查询在线玩家人数按钮ActionPerformed
        int p = 0;
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                if (chr != null) {
                    ++p;
                }
            }
        }
        JOptionPane.showMessageDialog(this, "当前在线人数：" + p + "人");
    }//GEN-LAST:event_查询在线玩家人数按钮ActionPerformed

    private void jButton17ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton17ActionPerformed
        System.gc();
        JOptionPane.showMessageDialog(null, "回收服务端内存成功！");
    }//GEN-LAST:event_jButton17ActionPerformed

    private void jButton38ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton38ActionPerformed
        openWindow(Windows.商店管理控制台);
    }//GEN-LAST:event_jButton38ActionPerformed

    private void jButton68ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton68ActionPerformed
        openWindow(Windows.广播系统控制台);
    }//GEN-LAST:event_jButton68ActionPerformed

    private void jButton46ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton46ActionPerformed
        openWindow(Windows.OX答题控制台);
    }//GEN-LAST:event_jButton46ActionPerformed

    private void jButton49ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton49ActionPerformed
        openWindow(Windows.物品删除管理工具);
    }//GEN-LAST:event_jButton49ActionPerformed

    private void jButton54ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton54ActionPerformed
        openWindow(Windows.账号管理工具);
    }//GEN-LAST:event_jButton54ActionPerformed

    private void jButton8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton8ActionPerformed
        int p = 0;
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                p++;
                chr.saveToDB(false, false);
            }
        }
        String 输出 = "[保存数据系统] 保存" + p + "个成功。";
        JOptionPane.showMessageDialog(null, 输出);
        printChatLog(输出);
    }//GEN-LAST:event_jButton8ActionPerformed

    private void jButton9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
        // TODO add your handling code here:
        int p = 0;
        for (handling.channel.ChannelServer cserv : handling.channel.ChannelServer.getAllInstances()) {
            p++;
            cserv.closeAllMerchants();
        }
        String 输出 = "[保存雇佣商人系统] 雇佣商人保存" + p + "个频道成功。";
        JOptionPane.showMessageDialog(null, "雇佣商人保存" + p + "个频道成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton9ActionPerformed

    private void 经验加成表序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_经验加成表序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_经验加成表序号ActionPerformed

    private void 经验加成表数值ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_经验加成表数值ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_经验加成表数值ActionPerformed

    private void 经验加成表修改ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_经验加成表修改ActionPerformed

        PreparedStatement ps = null;
        PreparedStatement ps1;
        ResultSet rs;
        boolean result1 = this.经验加成表序号.getText().matches("[0-9]+");
        if (result1) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.经验加成表序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1;
                    sqlString1 = "update configvalues set Val = '" + this.经验加成表数值.getText() + "' where id= " + this.经验加成表序号.getText() + ";";
                    PreparedStatement Val = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    Val.executeUpdate(sqlString1);
                    刷新经验加成表();
                    Maple.GetConfigValues();
                    JOptionPane.showMessageDialog(null, "修改成功已经生效");
                }
            } catch (SQLException ex) {
                Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要修改的值");
        }
    }//GEN-LAST:event_经验加成表修改ActionPerformed

    private void 游戏经验加成说明ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_游戏经验加成说明ActionPerformed
        JOptionPane.showMessageDialog(null, "<相关说明文>\r\n\r\n"
                + "1:相对应数值为0则为关闭经验加成。\r\n"
                + "2:人气经验 = 人气 * 人气经验加成数值。\r\n"
                + "\r\n");
    }//GEN-LAST:event_游戏经验加成说明ActionPerformed

    private void 清空日志ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_清空日志ActionPerformed
        输出窗口.setText("[" + FileoutputUtil.CurrentReadable_Time() + "][=============窗口清空完毕===========]\r\n");
    }//GEN-LAST:event_清空日志ActionPerformed

    private void formWindowClosing(java.awt.event.WindowEvent evt) {//GEN-FIRST:event_formWindowClosing
        int n = JOptionPane.showConfirmDialog(this, "服务端主控制台一旦退出就会停服！\r\n确定要退出？", "警告", JOptionPane.YES_NO_OPTION);
        if (n == JOptionPane.YES_OPTION) {
            for (handling.channel.ChannelServer cserv : handling.channel.ChannelServer.getAllInstances()) {
                cserv.closeAllMerchant();//保存雇佣
            }
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                    chr.saveToDB(false, false);//保存角色
                }
            }
            System.exit(0);
        }
    }//GEN-LAST:event_formWindowClosing

    private void jButton35ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton35ActionPerformed
        // TODO add your handling code here:
        openWindow(Windows.爆率设置);
    }//GEN-LAST:event_jButton35ActionPerformed

    private void playerTableMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_playerTableMouseClicked
        int i = playerTable.getSelectedRow();
        if (playerTable.getValueAt(i, 1) == null) {
            return;
        }
        String a = playerTable.getValueAt(i, 1).toString();//名字
        String a0 = playerTable.getValueAt(i, 5).toString();//地图
        String a1 = playerTable.getValueAt(i, 7).toString();//点券
        String a2 = playerTable.getValueAt(i, 8).toString();//抵用
        String a3 = playerTable.getValueAt(i, 9).toString();//元宝
        角色名称编辑框.setText(a);
        角色所在地图编辑.setText(a0);
        角色点券编辑框.setText(a1);
        角色抵用编辑框.setText(a2);
        角色元宝编辑框.setText(a3);
    }//GEN-LAST:event_playerTableMouseClicked

    private void 角色名称编辑框ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色名称编辑框ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色名称编辑框ActionPerformed

    private void 角色点券编辑框ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色点券编辑框ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色点券编辑框ActionPerformed

    private void 角色抵用编辑框ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色抵用编辑框ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色抵用编辑框ActionPerformed

    private void 角色元宝编辑框ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色元宝编辑框ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色元宝编辑框ActionPerformed

    private void 角色所在地图编辑ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色所在地图编辑ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色所在地图编辑ActionPerformed

    private void 全员下线ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_全员下线ActionPerformed
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.getPlayerStorage().disconnectAll(true);
        }
        JOptionPane.showMessageDialog(null, "成功");
    }//GEN-LAST:event_全员下线ActionPerformed

    private void 个人玩家下线ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_个人玩家下线ActionPerformed
        final String name = 角色名称编辑框.getText();
        final int ch = Find.findChannel(name);
        if (ch <= 0) {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
            return;
        }
        final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
        if (victim != null) {
            victim.getClient().disconnect(true, false);
            victim.getClient().getSession().close();
            JOptionPane.showMessageDialog(null, "成功");
        } else {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
        }
    }//GEN-LAST:event_个人玩家下线ActionPerformed

    private void 传送玩家到自由ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_传送玩家到自由ActionPerformed
        final String name = 角色名称编辑框.getText();
        final int ch = Find.findChannel(name);
        if (ch <= 0) {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
            return;
        }
        final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
        if (victim != null) {
            victim.changeMap(910000000);
            JOptionPane.showMessageDialog(null, "成功");
        } else {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
        }
    }//GEN-LAST:event_传送玩家到自由ActionPerformed

    private void 关玩家到小黑屋ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_关玩家到小黑屋ActionPerformed
        final String name = 角色名称编辑框.getText();
        final int ch = Find.findChannel(name);
        if (ch <= 0) {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
            return;
        }
        final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
        if (victim != null) {
            victim.changeMap(180000001);
            JOptionPane.showMessageDialog(null, "成功");
        } else {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
        }

    }//GEN-LAST:event_关玩家到小黑屋ActionPerformed

    private void 传送玩家到指定地图ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_传送玩家到指定地图ActionPerformed
        final String name = 角色名称编辑框.getText();
        final int ch = Find.findChannel(name);
        if (ch <= 0) {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
            return;
        }
        final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
        if (victim != null) {
            if (角色所在地图编辑.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "地图代码不能为空");
                return;
            }
            victim.changeMap(Integer.parseInt(角色所在地图编辑.getText()));
            JOptionPane.showMessageDialog(null, "成功");
        } else {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
        }
    }//GEN-LAST:event_传送玩家到指定地图ActionPerformed

    private void 一键满技能ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_一键满技能ActionPerformed
        final String name = 角色名称编辑框.getText();
        final int ch = Find.findChannel(name);
        if (ch <= 0) {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
            return;
        }
        final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
        if (victim != null) {
            if (角色名称编辑框.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "角色名字不能为空");
                return;
            }
            victim.maxSkills();
            JOptionPane.showMessageDialog(null, "成功");
        } else {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
        }
    }//GEN-LAST:event_一键满技能ActionPerformed

    private void 修改玩家信息ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改玩家信息ActionPerformed
        final String name = 角色名称编辑框.getText();
        final int ch = Find.findChannel(name);
        if (ch <= 0) {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
            return;
        }
        final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
        if (victim != null) {
            victim.modifyCSPoints(1, Integer.parseInt(角色点券编辑框.getText()));
            victim.modifyCSPoints(2, Integer.parseInt(角色抵用编辑框.getText()));
            victim.setmoneyb(Integer.parseInt(角色元宝编辑框.getText()));
            victim.saveToDB(false, false);//保存角色
            JOptionPane.showMessageDialog(null, "成功");
        } else {
            JOptionPane.showMessageDialog(null, "该玩家不在线上");
        }
    }//GEN-LAST:event_修改玩家信息ActionPerformed

    private void 开启双倍经验ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_开启双倍经验ActionPerformed
        boolean result1 = this.双倍经验持续时间.getText().matches("[0-9]+");
        if (result1) {
            if (双倍经验持续时间.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "持续时间不能为空");
                return;
            }
            int 原始经验 = Integer.parseInt(ServerProperties.getProperty("server.settings.expRate"));
            int 双倍经验活动 = 原始经验 * 2;
            int seconds = 0;
            int mins = 0;
            int hours = Integer.parseInt(this.双倍经验持续时间.getText());
            int time = seconds + (mins * 60) + (hours * 60 * 60);
            final String rate = "经验";
            World.scheduleRateDelay(rate, time);
            for (ChannelServer cservs : ChannelServer.getAllInstances()) {
                cservs.setExpRate(双倍经验活动);
            }
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 2 倍打怪经验活动，将持续 " + hours + " 小时，请各位玩家狂欢吧！"));
            // World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 2 倍打怪经验活动，将持续 \" + hours + \" 小时，请各位玩家狂欢吧！").getBytes());
            JOptionPane.showMessageDialog(null, "成功开启双倍经验活动，持续 " + hours + " 小时");
        } else {
            JOptionPane.showMessageDialog(null, "持续时间输入不正确");
        }
    }//GEN-LAST:event_开启双倍经验ActionPerformed

    private void 开启双倍爆率ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_开启双倍爆率ActionPerformed
        boolean result1 = this.双倍爆率持续时间.getText().matches("[0-9]+");
        if (result1) {
            if (双倍爆率持续时间.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "持续时间不能为空");
                return;
            }
            int 原始爆率 = Integer.parseInt(ServerProperties.getProperty("server.settings.dropRate"));
            int 双倍爆率活动 = 原始爆率 * 2;
            int seconds = 0;
            int mins = 0;
            int hours = Integer.parseInt(this.双倍爆率持续时间.getText());
            int time = seconds + (mins * 60) + (hours * 60 * 60);
            final String rate = "爆率";
            World.scheduleRateDelay(rate, time);
            for (ChannelServer cservs : ChannelServer.getAllInstances()) {
                cservs.setExpRate(双倍爆率活动);
            }
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 2 倍打怪爆率活动，将持续 " + hours + " 小时，请各位玩家狂欢吧！"));
            JOptionPane.showMessageDialog(null, "成功开启双倍爆率活动，持续 " + hours + " 小时");
        } else {
            JOptionPane.showMessageDialog(null, "持续时间输入不正确");
        }
    }//GEN-LAST:event_开启双倍爆率ActionPerformed

    private void 开启双倍金币ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_开启双倍金币ActionPerformed
        boolean result1 = this.双倍金币持续时间.getText().matches("[0-9]+");
        if (result1) {
            if (双倍金币持续时间.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "持续时间不能为空");
                return;
            }
            int 原始金币 = Integer.parseInt(ServerProperties.getProperty("server.settings.mesoRate"));
            int 双倍金币活动 = 原始金币 * 2;
            int seconds = 0;
            int mins = 0;
            int hours = Integer.parseInt(this.双倍金币持续时间.getText());
            int time = seconds + (mins * 60) + (hours * 60 * 60);
            final String rate = "金币";
            World.scheduleRateDelay(rate, time);
            for (ChannelServer cservs : ChannelServer.getAllInstances()) {
                cservs.setExpRate(双倍金币活动);
            }
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 2 倍打怪金币活动，将持续 " + hours + " 小时，请各位玩家狂欢吧！"));
            JOptionPane.showMessageDialog(null, "成功开启双倍金币活动，持续 " + hours + " 小时");
        } else {
            JOptionPane.showMessageDialog(null, "持续时间输入不正确");
        }
    }//GEN-LAST:event_开启双倍金币ActionPerformed

    private void 开启三倍经验ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_开启三倍经验ActionPerformed
        boolean result1 = this.三倍经验持续时间.getText().matches("[0-9]+");
        if (result1) {
            if (三倍经验持续时间.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "持续时间不能为空");
                return;
            }
            int 原始经验 = Integer.parseInt(ServerProperties.getProperty("server.settings.expRate"));
            int 三倍经验活动 = 原始经验 * 3;
            int seconds = 0;
            int mins = 0;
            int hours = Integer.parseInt(this.三倍经验持续时间.getText());
            int time = seconds + (mins * 60) + (hours * 60 * 60);
            final String rate = "经验";
            World.scheduleRateDelay(rate, time);
            for (ChannelServer cservs : ChannelServer.getAllInstances()) {
                cservs.setExpRate(三倍经验活动);
            }
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 3 倍打怪经验活动，将持续 " + hours + " 小时，请各位玩家狂欢吧！"));
            JOptionPane.showMessageDialog(null, "成功开启三倍经验活动，持续 " + hours + " 小时");
        } else {
            JOptionPane.showMessageDialog(null, "持续时间输入不正确");
        }
    }//GEN-LAST:event_开启三倍经验ActionPerformed

    private void 开启三倍爆率ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_开启三倍爆率ActionPerformed
        boolean result1 = this.三倍爆率持续时间.getText().matches("[0-9]+");
        if (result1) {
            if (三倍爆率持续时间.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "持续时间不能为空");
                return;
            }
            int 原始爆率 = Integer.parseInt(ServerProperties.getProperty("server.settings.dropRate"));
            int 三倍爆率活动 = 原始爆率 * 3;
            int seconds = 0;
            int mins = 0;
            int hours = Integer.parseInt(this.三倍爆率持续时间.getText());
            int time = seconds + (mins * 60) + (hours * 60 * 60);
            final String rate = "爆率";
            World.scheduleRateDelay(rate, time);
            for (ChannelServer cservs : ChannelServer.getAllInstances()) {
                cservs.setExpRate(三倍爆率活动);
            }
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 3 倍打怪爆率活动，将持续 " + hours + " 小时，请各位玩家狂欢吧！"));
            JOptionPane.showMessageDialog(null, "成功开启三倍爆率活动，持续 " + hours + " 小时");
        } else {
            JOptionPane.showMessageDialog(null, "持续时间输入不正确");
        }
    }//GEN-LAST:event_开启三倍爆率ActionPerformed

    private void 开启三倍金币ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_开启三倍金币ActionPerformed
        boolean result1 = this.三倍金币持续时间.getText().matches("[0-9]+");
        if (result1) {
            if (三倍金币持续时间.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "持续时间不能为空");
                return;
            }
            int 原始金币 = Integer.parseInt(ServerProperties.getProperty("server.settings.mesoRate"));
            int 三倍金币活动 = 原始金币 * 3;
            int seconds = 0;
            int mins = 0;
            int hours = Integer.parseInt(this.三倍金币持续时间.getText());
            int time = seconds + (mins * 60) + (hours * 60 * 60);
            final String rate = "金币";
            World.scheduleRateDelay(rate, time);
            for (ChannelServer cservs : ChannelServer.getAllInstances()) {
                cservs.setExpRate(三倍金币活动);
            }
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍率活动] : 游戏开始 3 倍打怪金币活动，将持续 " + hours + " 小时，请各位玩家狂欢吧！"));
            JOptionPane.showMessageDialog(null, "成功开启三倍金币活动，持续 " + hours + " 小时");
        } else {
            JOptionPane.showMessageDialog(null, "持续时间输入不正确");
        }
    }//GEN-LAST:event_开启三倍金币ActionPerformed

    private void 经验确认ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_经验确认ActionPerformed
        int exp = Integer.parseInt(经验.getText());

        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.setExpRate(exp);

        }
        System.out.println("經驗已修改為" + exp + "。");
        JOptionPane.showMessageDialog(null, "成功。");
        // TODO add your handling code here:
    }//GEN-LAST:event_经验确认ActionPerformed

    private void 物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_物品ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_物品ActionPerformed

    private void 物品确认ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_物品确认ActionPerformed
        int drop = Integer.parseInt(物品.getText());

        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.setDropRate(drop);

        }
        System.out.println("物品倍率已修改為" + drop + "。");
        JOptionPane.showMessageDialog(null, "修改成功。");
        // TODO add your handling code here:
    }//GEN-LAST:event_物品确认ActionPerformed

    private void 金币确认ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_金币确认ActionPerformed
        int meso = Integer.parseInt(金币.getText());

        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            cserv.setMesoRate(meso);

        }
        System.out.println("金幣倍率已修改為" + meso + "。");
        JOptionPane.showMessageDialog(null, "修改成功。");
    }//GEN-LAST:event_金币确认ActionPerformed

    private void 修改物品叠加数量1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改物品叠加数量1ActionPerformed
        // TODO add your handling code here:
        boolean result2 = this.物品叠加数量.getText().matches("[0-9]+");
        PreparedStatement ps = null;
        PreparedStatement ps1;
        ResultSet rs;
        if (result2) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                ps1.setInt(1, 2179);
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2;
                    sqlString2 = "update configvalues set Val='" + this.物品叠加数量.getText() + "' where id = 2179;";
                    PreparedStatement dropperid = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    dropperid.executeUpdate(sqlString2);
                    GetConfigValues();
                    刷新物品叠加数量上限();
                    JOptionPane.showMessageDialog(null, "[信息]:修改成功， 本次修改及时生效");
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
            String[] 弓标子弹叠加代码 = Maple.弓标子弹叠加上限突破.getText().split(",");
            for (String s : 弓标子弹叠加代码) {
                MapleItemInformationProvider.slotMaxCache.put(Integer.valueOf(s), Short.valueOf(物品叠加数量.getText()));
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你要修改的数据。");
        }
    }//GEN-LAST:event_修改物品叠加数量1ActionPerformed

    private void 发放个人玩家名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放个人玩家名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放个人玩家名字ActionPerformed

    private void 发放道具代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放道具代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放道具代码ActionPerformed

    private void 发放道具发放范围ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放道具发放范围ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放道具发放范围ActionPerformed

    private void 给予物品1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_给予物品1ActionPerformed
        发放道具(); // TODO add your handling code here:
    }//GEN-LAST:event_给予物品1ActionPerformed

    private void 发放道具数量ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放道具数量ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放道具数量ActionPerformed

    private void 发放其他类型ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放其他类型ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放其他类型ActionPerformed

    private void 发放其他范围ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放其他范围ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放其他范围ActionPerformed

    private void 发放其他玩家ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放其他玩家ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放其他玩家ActionPerformed

    private void 给予物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_给予物品ActionPerformed
        发放其他(); // TODO add your handling code here:
    }//GEN-LAST:event_给予物品ActionPerformed

    private void 发放其他数量ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发放其他数量ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发放其他数量ActionPerformed

    private void jButton10ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton10ActionPerformed
        JOptionPane.showMessageDialog(instance, "功能说明\r\n修改自定义地图刷怪倍数\r\n自定义地图刷怪倍数数值(几倍)\r\n自定义怪物倍数地图列表id(逗号隔开)\r\n此功能开启会增加地图的怪物倍数");
    }//GEN-LAST:event_jButton10ActionPerformed

    private void 修改怪物倍率ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改怪物倍率ActionPerformed
        // TODO add your handling code here:
        boolean result2 = this.怪物倍率.getText().matches("[0-9]+");
        if (result2) {
            if (怪物倍率.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "怪物倍率不能为空");
                return;
            }
            if (倍怪地图.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "倍怪地图不能为空");
                return;
            }
            int 怪物倍率调整 = Integer.parseInt(this.怪物倍率.getText());
            if (怪物倍率调整 >= 2) {
                MapleParty.怪物倍率 = 怪物倍率调整;
                MapleParty.怪物倍怪 = true;
                JOptionPane.showMessageDialog(null, "[信息]:修改成功， 本次修改及时生效");
                World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍怪活动] : 游戏开始 " + 怪物倍率调整 + " 倍打怪活动.请各位玩家狂欢吧！"));
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                        chr.getMap().respawn(true);
                    }
                }
            } else {
                MapleParty.怪物倍率 = 1;
                MapleParty.怪物倍怪 = true;
                World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(9, 20, "[倍怪活动] : 游戏倍怪活动已经结束！"));
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                        chr.getMap().respawn(true);
                    }
                }
            }
        }
    }//GEN-LAST:event_修改怪物倍率ActionPerformed

    private void 给予装备2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_给予装备2ActionPerformed
        刷装备2(1);
    }//GEN-LAST:event_给予装备2ActionPerformed

    public void 发放其他() {
        int 道具数量;
        if ("输入数字".equals(发放其他数量.getText())) {
            道具数量 = 0;
        } else {
            道具数量 = Integer.parseInt(发放其他数量.getText());
        }
        int 发放范围;
        String 名字 = "";
        String 玩家的名字 = "";
        if ("输入数字".equals(Integer.valueOf(发放其他范围.getSelectedIndex()))) {
            发放范围 = 0;
        } else {
            发放范围 = 发放其他范围.getSelectedIndex();
            switch (发放范围) {
                case 0: {
                    名字 = "全服";
                    break;
                }
                case 1: {
                    名字 = "个人";
                    玩家的名字 = 发放其他玩家.getText();
                    break;
                }
            }
        }
        int 发放类型 = 0;
        String 名字2 = "";
        if ("输入数字".equals(Integer.valueOf(发放其他类型.getSelectedIndex()))) {
            发放类型 = 0;
        } else {
            发放类型 = this.发放其他类型.getSelectedIndex();
            switch (发放类型) {
                case 0: {
                    名字2 = "点卷";
                    break;
                }
                case 1: {
                    名字2 = "抵用";
                    break;
                }
                case 2: {
                    名字2 = "金币";
                    break;
                }
            }
        }
        final int answer = JOptionPane.showConfirmDialog(this, "当前选择的类型是:" + 名字2 + "\r\n当前输入数量设置是:" + 道具数量 + "个\r\n当前发放范围设置是:" + 名字 + "" + ((发放范围 == 1) ? ("\r\n当前你选择的角色名字是:" + 玩家的名字 + "\r\n") : "") + "请问您是否要发放呢?\r\n", "发放点卷抵用金币", 0);
        if (answer != 0) {
            return;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        int 个数 = 0;
        if (发放范围 == 0) {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (final MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                    if (发放类型 == 0) {
                        mch.modifyCSPoints(1, 道具数量, true);
                    } else if (发放类型 == 1) {
                        mch.modifyCSPoints(2, 道具数量, true);
                    } else if (发放类型 == 2) {
                        mch.gainMeso(道具数量, true);
                    }
                    mch.startMapEffect("管理员发放礼物" + 道具数量 + "个" + 名字2 + "给在线的所有玩家！祝您玩得开心快乐", 5121009);
                    ++个数;
                }
            }
        } else {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                final MapleCharacter mch2 = ChannelServer.getInstance(cserv.getChannel()).getPlayerStorage().getCharacterByName(玩家的名字);
                if (mch2 != null) {
                    if (发放类型 == 0) {
                        mch2.modifyCSPoints(1, 道具数量, true);
                    } else if (发放类型 == 1) {
                        mch2.modifyCSPoints(2, 道具数量, true);
                    } else if (发放类型 == 2) {
                        mch2.gainMeso(道具数量, true);
                    }
                    mch2.startMapEffect("管理员发放礼物" + 道具数量 + "个" + 名字2 + "单独给你！祝您玩得开心快乐", 5121009);
                    ++个数;
                }
            }
        }
        System.out.println("[" + FileoutputUtil.CurrentReadable_Time() + "][信息]发放" + 名字2 + ":一共发给了" + 个数 + "个玩家");
    }

    public void 发放道具() {
        int 道具代码;
        if ("输入道具代码".equals(this.发放道具代码.getText())) {
            道具代码 = 4000000;
        } else {
            道具代码 = (Math.max(Integer.parseInt(this.发放道具代码.getText()), 1));
        }
        int 道具数量;
        if ("输入数字".equals(this.发放道具数量.getText())) {
            道具数量 = 0;
        } else {
            道具数量 = Integer.parseInt(this.发放道具数量.getText());
        }
        int 发放范围;
        String 名字 = "";
        String 玩家的名字 = "";
        if ("输入数字".equals(Integer.valueOf(this.发放道具发放范围.getSelectedIndex()))) {
            发放范围 = 0;
        } else {
            发放范围 = this.发放道具发放范围.getSelectedIndex();
            switch (发放范围) {
                case 0: {
                    名字 = "全服";
                    break;
                }
                case 1: {
                    名字 = "个人";
                    玩家的名字 = this.发放个人玩家名字.getText();
                    break;
                }
            }
        }
        final int answer = JOptionPane.showConfirmDialog(this, "当前输入道具代码是:" + 道具代码 + "\r\n当前输入道具数量设置是:" + 道具数量 + "个\r\n当前发放范围设置是:" + 名字 + "" + ((发放范围 == 1) ? ("\r\n当前你选择的角色名字是:" + 玩家的名字 + "\r\n") : "") + "请问您是否要开启呢?\r\n", "发放道具", 0);
        if (answer != 0) {
            return;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        int 个数 = 0;
        if (发放范围 == 0) {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (final MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                    mch.gainItem(道具代码, 道具数量);
                    mch.startMapEffect("管理员发放礼物" + 道具数量 + "个" + ii.getName(道具代码) + "给在线的所有玩家！祝您玩得开心快乐", 5121009);
                    ++个数;
                }
            }
        } else {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                final MapleCharacter mch2 = ChannelServer.getInstance(cserv.getChannel()).getPlayerStorage().getCharacterByName(玩家的名字);
                if (mch2 != null) {
                    mch2.gainItem(道具代码, 道具数量);
                    mch2.startMapEffect("管理员发放礼物" + 道具数量 + "个" + ii.getName(道具代码) + "单独给你！祝您玩得开心快乐", 5121009);
                    ++个数;
                }
            }
        }
        System.out.println("[" + FileoutputUtil.CurrentReadable_Time() + "][信息]发放道具:一共发给了" + 个数 + "个玩家:" + 道具数量 + "个" + ii.getName(道具代码) + "");
    }

    private void 刷装备2(int a) {
        try {
            int 物品ID;
            if ("物品ID".equals(全服发送装备物品ID.getText())) {
                物品ID = 0;
            } else {
                物品ID = Integer.parseInt(全服发送装备物品ID.getText());
            }
            int 力量;
            if ("力量".equals(全服发送装备装备力量.getText())) {
                力量 = 0;
            } else {
                力量 = Integer.parseInt(全服发送装备装备力量.getText());
            }
            int 敏捷;
            if ("敏捷".equals(全服发送装备装备敏捷.getText())) {
                敏捷 = 0;
            } else {
                敏捷 = Integer.parseInt(全服发送装备装备敏捷.getText());
            }
            int 智力;
            if ("智力".equals(全服发送装备装备智力.getText())) {
                智力 = 0;
            } else {
                智力 = Integer.parseInt(全服发送装备装备智力.getText());
            }
            int 运气;
            if ("运气".equals(全服发送装备装备运气.getText())) {
                运气 = 0;
            } else {
                运气 = Integer.parseInt(全服发送装备装备运气.getText());
            }
            int HP;
            if ("HP设置".equals(全服发送装备装备HP.getText())) {
                HP = 0;
            } else {
                HP = Integer.parseInt(全服发送装备装备HP.getText());
            }
            int MP;
            if ("MP设置".equals(全服发送装备装备MP.getText())) {
                MP = 0;
            } else {
                MP = Integer.parseInt(全服发送装备装备MP.getText());
            }
            int 可加卷次数;
            if ("加卷次数".equals(全服发送装备装备加卷.getText())) {
                可加卷次数 = 0;
            } else {
                可加卷次数 = Integer.parseInt(全服发送装备装备加卷.getText());
            }

            String 制作人名字;
            if ("制作人".equals(全服发送装备装备制作人.getText())) {
                制作人名字 = "";
            } else {
                制作人名字 = 全服发送装备装备制作人.getText();
            }
            int 给予时间;
            if ("给予物品时间".equals(全服发送装备装备给予时间.getText())) {
                给予时间 = 0;
            } else {
                给予时间 = Integer.parseInt(全服发送装备装备给予时间.getText());
            }
            String 是否可以交易 = 全服发送装备装备可否交易.getText();
            int 攻击力;
            if ("攻击力".equals(全服发送装备装备攻击力.getText())) {
                攻击力 = 0;
            } else {
                攻击力 = Integer.parseInt(全服发送装备装备攻击力.getText());
            }
            int 魔法力;
            if ("魔法力".equals(全服发送装备装备魔法力.getText())) {
                魔法力 = 0;
            } else {
                魔法力 = Integer.parseInt(全服发送装备装备魔法力.getText());
            }
            int 物理防御;
            if ("物理防御".equals(全服发送装备装备物理防御.getText())) {
                物理防御 = 0;
            } else {
                物理防御 = Integer.parseInt(全服发送装备装备物理防御.getText());
            }
            int 魔法防御;
            if ("魔法防御".equals(全服发送装备装备魔法防御.getText())) {
                魔法防御 = 0;
            } else {
                魔法防御 = Integer.parseInt(全服发送装备装备魔法防御.getText());
            }
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            MapleInventoryType type = GameConstants.getInventoryType(物品ID);
            for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                    if (a == 1) {
                        if (!MapleInventoryManipulator.checkSpace(mch.getClient(), 物品ID, 1, "")) {
                            return;
                        }
                        if (type.equals(MapleInventoryType.EQUIP)
                                || type.equals(MapleInventoryType.CASH) && 物品ID >= 5000000 && 物品ID <= 5000100) {
                            final Equip item = (Equip) (ii.getEquipById(物品ID));
                            if (ii.isCash(物品ID)) {
                                item.setUniqueId(1);
                            }
                            if (力量 > 0 && 力量 <= 32767) {
                                item.setStr((short) (力量));
                            }
                            if (敏捷 > 0 && 敏捷 <= 32767) {
                                item.setDex((short) (敏捷));
                            }
                            if (智力 > 0 && 智力 <= 32767) {
                                item.setInt((short) (智力));
                            }
                            if (运气 > 0 && 运气 <= 32767) {
                                item.setLuk((short) (运气));
                            }
                            if (攻击力 > 0 && 攻击力 <= 32767) {
                                item.setWatk((short) (攻击力));
                            }
                            if (魔法力 > 0 && 魔法力 <= 32767) {
                                item.setMatk((short) (魔法力));
                            }
                            if (物理防御 > 0 && 物理防御 <= 32767) {
                                item.setWdef((short) (物理防御));
                            }
                            if (魔法防御 > 0 && 魔法防御 <= 32767) {
                                item.setMdef((short) (魔法防御));
                            }
                            if (HP > 0 && HP <= 30000) {
                                item.setHp((short) (HP));
                            }
                            if (MP > 0 && MP <= 30000) {
                                item.setMp((short) (MP));
                            }
                            if ("1".equals(是否可以交易)) {
                                item.setFlag((byte) (item.getFlag() | ItemFlag.LOCK.getValue()));
                            }
                            if (给予时间 > 0) {
                                item.setExpiration(System.currentTimeMillis() + ((给予时间 * 2L) * 24 * 60 * 60 * 1000));
                            }
                            if (可加卷次数 > 0) {
                                item.setUpgradeSlots((byte) (可加卷次数));
                            }
                            if (制作人名字 != null) {
                                item.setOwner(制作人名字);
                            }
                            final String name = ii.getName(物品ID);
                            if (物品ID / 10000 == 114 && name != null && name.length() > 0) { //medal
                                final String msg = "你已获得称号 <" + name + ">";
                                mch.getClient().getPlayer().dropMessage(5, msg);
                            }
                            MapleInventoryManipulator.addbyItem(mch.getClient(), item.copy());
                        } else {
                            //     MapleInventoryManipulator.addById(mch.getClient(), 物品ID, (short) 1, "", null, 给予时间, "");
                            MapleInventoryManipulator.addById(mch.getClient(), 物品ID, (short) 1, "", null, (byte) 0);

                        }
                        mch.getClient().getSession().write(MaplePacketCreator.getShowItemGain(物品ID, (short) 1, true));
                    } else if (mch.getName().equals(发送装备玩家姓名.getText())) {
                        if (!MapleInventoryManipulator.checkSpace(mch.getClient(), 物品ID, 1, "")) {
                            return;
                        }
                        if (type.equals(MapleInventoryType.EQUIP)
                                || type.equals(MapleInventoryType.CASH) && 物品ID >= 5000000 && 物品ID <= 5000100) {
                            final Equip item = (Equip) (ii.getEquipById(物品ID));
                            if (ii.isCash(物品ID)) {
                                item.setUniqueId(1);
                            }
                            if (力量 > 0 && 力量 <= 32767) {
                                item.setStr((short) (力量));
                            }
                            if (敏捷 > 0 && 敏捷 <= 32767) {
                                item.setDex((short) (敏捷));
                            }
                            if (智力 > 0 && 智力 <= 32767) {
                                item.setInt((short) (智力));
                            }
                            if (运气 > 0 && 运气 <= 32767) {
                                item.setLuk((short) (运气));
                            }
                            if (攻击力 > 0 && 攻击力 <= 32767) {
                                item.setWatk((short) (攻击力));
                            }
                            if (魔法力 > 0 && 魔法力 <= 32767) {
                                item.setMatk((short) (魔法力));
                            }
                            if (物理防御 > 0 && 物理防御 <= 32767) {
                                item.setWdef((short) (物理防御));
                            }
                            if (魔法防御 > 0 && 魔法防御 <= 32767) {
                                item.setMdef((short) (魔法防御));
                            }
                            if (HP > 0 && HP <= 30000) {
                                item.setHp((short) (HP));
                            }
                            if (MP > 0 && MP <= 30000) {
                                item.setMp((short) (MP));
                            }
                            if ("1".equals(是否可以交易)) {
                                item.setFlag((byte) (item.getFlag() | ItemFlag.LOCK.getValue()));
                            }
                            if (给予时间 > 0) {
                                item.setExpiration(System.currentTimeMillis() + ((给予时间 * 2L) * 24 * 60 * 60 * 1000));
                            }
                            if (可加卷次数 > 0) {
                                item.setUpgradeSlots((byte) (可加卷次数));
                            }
                            if (制作人名字 != null) {
                                item.setOwner(制作人名字);
                            }
                            final String name = ii.getName(物品ID);
                            if (物品ID / 10000 == 114 && name != null && name.length() > 0) { //medal
                                final String msg = "你已获得称号 <" + name + ">";
                                mch.getClient().getPlayer().dropMessage(5, msg);
                            }
                            MapleInventoryManipulator.addbyItem(mch.getClient(), item.copy());
                        } else {
                            MapleInventoryManipulator.addById(mch.getClient(), 物品ID, (short) 1, "", null, (byte) 0);
                        }
                        mch.getClient().getSession().write(MaplePacketCreator.getShowItemGain(物品ID, (short) 1, true));

                    }
                }
            }
            JOptionPane.showMessageDialog(null, "[信息]:发送成功。");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "[信息]:错误!" + e);
        }
    }

    private void 发送福利(int a) {
        boolean result1 = this.a1.getText().matches("[0-9]+");
        if (result1) {
            int 数量;
            if ("100000000".equals(a1.getText())) {
                数量 = 100;
            } else {
                数量 = Integer.parseInt(a1.getText());
            }
            if (数量 <= 0 || 数量 > 999999999) {
                return;
            }
            String 类型 = "";
            for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {

                    switch (a) {
                        case 1:
                            类型 = "点券";
                            mch.modifyCSPoints(1, 数量, true);
                            break;
                        case 2:
                            类型 = "抵用券";
                            mch.modifyCSPoints(2, 数量, true);
                            break;
                        case 3:
                            类型 = "金币";
                            mch.gainMeso(数量, true);
                            break;
                        case 4:
                            类型 = "经验";
                            mch.gainExp(数量, false, false, false);
                            break;
                        case 5:
                            类型 = "人气";
                            mch.addFame(数量);
                            break;
                        case 6:
                            类型 = "豆豆";
                            mch.gainBeans(数量);
                            break;
                        default:
                            break;
                    }
                    mch.startMapEffect("管理员发放 " + 数量 + " " + 类型 + "给在线的所有玩家！", 5121009);
                }
            }
            JOptionPane.showMessageDialog(null, "[信息]:发放 " + 数量 + " " + 类型 + "给在线的所有玩家。");
            a1.setText("");
            JOptionPane.showMessageDialog(null, "发送成功");
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入要发送数量。");
        }
    }

    //新增
    public void runTool(final Tools tool) {
        if (tools.contains(tool)) {
            JOptionPane.showMessageDialog(null, "工具已在运行。");
        } else {
            tools.add(tool);
            Thread t = new Thread() {
                @Override
                public void run() {
                    switch (tool) {

                        case DumpItems:
                        case DumpCashShop:
                            DumpItems.main(new String[0]);
                            break;
                        case DumpMobSkills:
                            DumpMobSkills.main(new String[0]);
                            break;
                        case DumpOxQuizData: {
                            try {
                                DumpOxQuizData.main(new String[0]);
                            } catch (IOException | SQLException ex) {
                                Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
                            }
                        }
                        break;
                        case DumpQuests:
                            DumpQuests.main(new String[0]);
                            break;
                        case MonsterDropCreator: {
                            try {
                                MonsterDropCreator.main(new String[0]);
                            } catch (IOException | NotBoundException | InstanceAlreadyExistsException |
                                     MBeanRegistrationException | NotCompliantMBeanException |
                                     MalformedObjectNameException ex) {
                                Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
                            }
                        }
                        break;

                    }
                    tools.remove(tool);
                }
            };
            t.start();
        }
    }

    public enum Tools {
        DumpCashShop,
        DumpItems,
        FixCharSets,
        DumpMobSkills,
        DumpNpcNames,
        DumpOxQuizData,
        DumpQuests,
        MonsterDropCreator
    }

    public void openWindow(final Windows w) {
        if (!windows.containsKey(w)) {
            switch (w) {
                case 商店管理控制台:
                    windows.put(w, new 商店管理控制台());
                    break;
                case 广播系统控制台:
                    windows.put(w, new 广播系统控制台());
                    break;
                case 游戏抽奖工具:
                    windows.put(w, new 游戏抽奖工具());
                    break;
                case 账号管理工具:
                    windows.put(w, new 账号管理工具());
                    break;
                case OX答题控制台:
                    windows.put(w, new OX答题控制台());
                    break;
                case 卡密制作工具:
                    windows.put(w, new 卡密制作工具());
                    break;
                case 椅子控制台:
                    windows.put(w, new 椅子控制台());
                    break;
                case 鱼来鱼往:
                    windows.put(w, new 鱼来鱼往());
                    break;
                case 金锤子成功率控制台:
                    windows.put(w, new 金锤子成功率控制台());
                    break;
                case 锻造控制台:
                    windows.put(w, new 锻造控制台());
                    break;
                case 活动控制台:
                    windows.put(w, new 活动控制台());
                    break;
                case 物品删除管理工具:
                    windows.put(w, new 物品删除管理工具());
                    break;
                case 删除自添加NPC工具:
                    windows.put(w, new 删除自添加NPC工具());
                    break;
                case 代码查询工具:
                    windows.put(w, new 代码查询工具());
                    break;
                case 一键还原:
                    windows.put(w, new 一键还原());
                    break;
                case 基址计算工具:
                    windows.put(w, new 基址计算工具());
                    break;
                case 爆率设置:
                    windows.put(w, new 爆率设置());
                    break;
                case 药水冷却时间控制台:
                    windows.put(w, new 药水冷却时间控制台());
                    break;
                case 永恒重生装备控制台:
                    windows.put(w, new 永恒重生装备控制台());
                    break;
                default:
                    return;
            }
            windows.get(w).setDefaultCloseOperation(javax.swing.WindowConstants.HIDE_ON_CLOSE);
        }
        windows.get(w).setVisible(true);
    }

    public enum Windows {
        基址计算工具,
        广播系统控制台,
        商店管理控制台,
        套装系统,
        一键还原,
        商城管理控制台,
        锻造控制台,
        卡密制作工具,
        代码查询工具,
        活动控制台,
        删除自添加NPC工具,
        游戏抽奖工具,
        药水冷却时间控制台,
        金锤子成功率控制台,
        永恒重生装备控制台,
        椅子控制台,
        鱼来鱼往,
        OX答题控制台,
        物品删除管理工具,
        账号管理工具,
        爆率设置,
        CashShopItemEditor,
        CashShopItemAdder,
        DropDataAdder,
        DropDataEditor,
    }

    public void 刷新泡点设置() {
        for (int i = this.在线泡点设置.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.在线泡点设置.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps;
            ResultSet rs;
            ps = con.prepareStatement("SELECT * FROM configvalues WHERE id = 700 || id = 702 || id = 704 || id = 706 || id = 708 || id = 712");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 在线泡点设置.getModel()).insertRow(在线泡点设置.getRowCount(), new Object[]{rs.getString("id"), rs.getString("name"), rs.getString("Val")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
        }
        在线泡点设置.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 在线泡点设置.getSelectedRow();
                String a = 在线泡点设置.getValueAt(i, 0).toString();
                String a1 = 在线泡点设置.getValueAt(i, 1).toString();
                String a2 = 在线泡点设置.getValueAt(i, 2).toString();
                泡点序号.setText(a);
                泡点类型.setText(a1);
                泡点值.setText(a2);
            }
        });
    }

    private void 刷新物品叠加数量上限() {
        int 显示 = Maple.ConfigValuesMap.get("物品额外数量");
        物品叠加数量.setText("" + 显示 + "");
    }

    private void 刷新倍怪地图() {
        String 地图 = ServerProperties.getProperty("server.settings.倍怪地图");
        倍怪地图.setText("" + 地图 + "");
    }

    private void 刷新弓标子弹叠加代码() {
        String 代码 = ServerProperties.getProperty("server.settings.弓标子弹叠加代码");
        弓标子弹叠加上限突破.setText("" + 代码 + "");
    }

    private void 刷新泡点金币开关() {
        String 泡点金币开关显示;
        int 泡点金币开关 = Maple.ConfigValuesMap.get("泡点金币开关");
        if (泡点金币开关 <= 0) {
            泡点金币开关显示 = "泡点金币:开启";
        } else {
            泡点金币开关显示 = "泡点金币:关闭";
        }
        泡点金币开关(泡点金币开关显示);
    }

    private void 刷新泡点点券开关() {
        String 泡点点券开关显示;
        int 泡点点券开关 = Maple.ConfigValuesMap.get("泡点点券开关");
        if (泡点点券开关 <= 0) {
            泡点点券开关显示 = "泡点点券:开启";
        } else {
            泡点点券开关显示 = "泡点点券:关闭";
        }
        泡点点券开关(泡点点券开关显示);
    }

    private void 刷新泡点经验开关() {
        String 泡点经验开关显示;
        int 泡点经验开关 = Maple.ConfigValuesMap.get("泡点经验开关");
        if (泡点经验开关 <= 0) {
            泡点经验开关显示 = "泡点经验:开启";
        } else {
            泡点经验开关显示 = "泡点经验:关闭";
        }
        泡点经验开关(泡点经验开关显示);
    }

    private void 刷新泡点抵用开关() {
        String 泡点抵用开关显示;
        int 泡点抵用开关 = Maple.ConfigValuesMap.get("泡点抵用开关");
        if (泡点抵用开关 <= 0) {
            泡点抵用开关显示 = "泡点抵用:开启";
        } else {
            泡点抵用开关显示 = "泡点抵用:关闭";
        }
        泡点抵用开关(泡点抵用开关显示);
    }

    private void 刷新泡点豆豆开关() {
        String 泡点豆豆开关显示;
        int 泡点豆豆开关 = Maple.ConfigValuesMap.get("泡点豆豆开关");
        if (泡点豆豆开关 <= 0) {
            泡点豆豆开关显示 = "泡点豆豆:开启";
        } else {
            泡点豆豆开关显示 = "泡点豆豆:关闭";
        }
        泡点豆豆开关(泡点豆豆开关显示);
    }

    private void 泡点点券开关(String str) {
        泡点点券开关.setText(str);
    }

    private void 泡点经验开关(String str) {
        泡点经验开关.setText(str);
    }

    private void 泡点抵用开关(String str) {
        泡点抵用开关.setText(str);
    }

    private void 泡点金币开关(String str) {
        泡点金币开关.setText(str);
    }

    private void 泡点豆豆开关(String str) {
        泡点豆豆开关.setText(str);
    }

    private void 个人发送福利(int a) {
        int 数量;
        String name;
        数量 = Integer.parseInt(a2.getText());
        name = 个人发送物品玩家名字1.getText();
        for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
            for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                if (mch.getName().equals(name)) {
                    int ch = World.Find.findChannel(name);
                    if (ch <= 0) {
                        JOptionPane.showMessageDialog(null, "该玩家不在线");
                    }
                    switch (a) {
                        case 1:
                            mch.modifyCSPoints(1, 数量, true);
                            mch.dropMessage("已经收到点卷" + 数量 + "点");
                            JOptionPane.showMessageDialog(null, "发送成功");
                            break;
                        case 2:
                            mch.modifyCSPoints(2, 数量, true);
                            mch.dropMessage("已经收到抵用" + 数量 + "点");
                            JOptionPane.showMessageDialog(null, "发送成功");
                            break;
                        case 3:
                            mch.gainMeso(数量, true);
                            mch.dropMessage("已经收到金币" + 数量 + "点");
                            JOptionPane.showMessageDialog(null, "发送成功");
                            break;
                        case 4:
                            mch.gainExp(数量, true, false, true);
                            mch.dropMessage("已经收到经验" + 数量 + "点");
                            JOptionPane.showMessageDialog(null, "发送成功");
                            break;
                        case 5:
                            mch.addFame(数量);
                            mch.dropMessage("已经收到人气" + 数量 + "点");
                            JOptionPane.showMessageDialog(null, "发送成功");
                            break;
                        case 6:
                            mch.gainBeans(数量);
                            mch.dropMessage("已经收到豆豆" + 数量 + "点");
                            JOptionPane.showMessageDialog(null, "发送成功");
                            break;
                    }
                }
            }
        }
    }

    //新增结束
    private static ScheduledFuture<?> ts = null;
    private int minutesLeft = 0;
    private static Thread t = null;

    private void 重启服务器() {
        try {
            String 输出 = "关闭服务器倒数时间";
            minutesLeft = Integer.parseInt(jTextField22.getText());
            if (ts == null && (t == null || !t.isAlive())) {
                t = new Thread(ShutdownServer.getInstance());
                ts = EventTimer.getInstance().register(() -> {
                    if (minutesLeft == 0) {
                        ShutdownServer.getInstance();
                        t.start();
                        ts.cancel(false);
                        return;
                    }
                    World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, "本私服器將在 " + minutesLeft + "分钟后关闭. 请尽速关闭雇佣商人 并下线，以免造成损失."));
                    System.out.println("本私服器將在 " + minutesLeft + "分钟后关闭.");
                    minutesLeft--;
                }, 60000);
            }
            jTextField22.setText("关闭服务器倒数时间");
            printChatLog(输出);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + e);
        }
    }

    public void 按键开关(String a, int b) {
        int 检测开关 = Maple.ConfigValuesMap.get(a);
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        if (检测开关 > 0) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                ps1.setInt(1, b);
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2;
                    String sqlString3 = null;
                    String sqlString4 = null;
                    sqlString2 = "update configvalues set Val= '0' where id= '" + b + "';";
                    PreparedStatement dropperid = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    dropperid.executeUpdate(sqlString2);
                }
            } catch (SQLException ex) {
                Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                ps1.setInt(1, b);
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2;
                    String sqlString3 = null;
                    String sqlString4 = null;
                    sqlString2 = "update configvalues set Val= '1' where id='" + b + "';";
                    PreparedStatement dropperid = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    dropperid.executeUpdate(sqlString2);
                }
            } catch (SQLException ex) {
                Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        try {
            Maple.GetConfigValues();
        } catch (SQLException ex) {
            Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    //新增结束
    private void printChatLog(String str) {
        输出窗口.setText(输出窗口.getText() + str + "\r\n");
    }

    private void sendNotice(int a) {
        try {
            String str = noticeText.getText();
            String 输出 = "";
            for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                    switch (a) {
//                        case 0:
//                            //顶端公告
//                            World.Broadcast.broadcastMessage(MaplePacketCreator.getItemNotice(str.toString()));
//                            break;
                        case 1:
                            //顶端公告
                            World.Broadcast.broadcastMessage(MaplePacketCreator.serverMessage(str));
                            break;
                        case 2:
                            //弹窗公告
                            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(1, str));
                            break;
                        case 3:
                            //聊天蓝色公告
                            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, str));
                            break;
                        case 4:
                            mch.startMapEffect(str, Integer.parseInt(公告发布喇叭代码.getText()));
                            break;
                        default:
                            break;
                    }
                }
                公告发布喇叭代码.setText("5120027");
            }
        } catch (Exception ignored) {
        }
    }

    public void 按键开关2(String name, int id, int val) {
        int oval = Maple.ConfigValuesMap.get(name);
        PreparedStatement ps = null;
        PreparedStatement ps1;
        ResultSet rs;
        try {
            //ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
            ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");
            ps1.setInt(1, id);
            rs = ps1.executeQuery();
            if (rs.next()) {
                String sqlString2 = null;
                String sqlString3 = null;
                String sqlString4 = null;
                sqlString2 = "update configvalues set Val= '" + val + "' where id= '" + id + "';";
                PreparedStatement dropperid = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                dropperid.executeUpdate(sqlString2);
                dropperid.close();
            } else {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("insert into configvalues values (?,?,?)");
                ps1.setInt(1, id);
                ps1.setString(2, name);
                ps1.setInt(3, val);
                ps1.execute();
            }
            rs.close();
            ps1.close();
            //ps.close();
        } catch (SQLException ex) {
            Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void updateThreadNum() {
        writeLock.lock();
        try {
            server.Timer.WorldTimer.GuiTimer.getInstance().register(() -> ActiveThread.setText("<html>【线程个数】：<span style='color:red;'>" + Thread.activeCount() + "</span>"), 1000);
        } finally {
            writeLock.unlock();
        }
    }

    public void MemoryTest() {
        writeLock.lock();
        try {
            server.Timer.WorldTimer.GuiTimer.getInstance().register(() -> {
                Runtime rt = Runtime.getRuntime();
                long totalMemory = rt.totalMemory() / 1024 / 1024;
                long usedMemory = totalMemory - rt.freeMemory() / 1024 / 1024;
                int usedRate = Math.toIntExact(usedMemory * 100 / totalMemory);
                内存.setValue(usedRate);
                内存.setString("已用:" + usedMemory + "MB/共:" + totalMemory + "MB");
            }, 1000);
        } finally {
            writeLock.unlock();
        }
    }

    public void 刷新经验加成表() {
        for (int i = this.经验加成表.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.经验加成表.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps;
            ResultSet rs;
            ps = con.prepareStatement("SELECT * FROM configvalues WHERE id = 150 ||  id = 151  ||  id=152  ||  id=153 || id=154");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 经验加成表.getModel()).insertRow(经验加成表.getRowCount(), new Object[]{rs.getString("id"), rs.getString("name"), rs.getString("Val")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Maple.class.getName()).log(Level.SEVERE, null, ex);
        }
        经验加成表.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 经验加成表.getSelectedRow();
                String a = 经验加成表.getValueAt(i, 0).toString();
                String a1 = 经验加成表.getValueAt(i, 1).toString();
                String a2 = 经验加成表.getValueAt(i, 2).toString();
                经验加成表序号.setText(a);
                经验加成表类型.setText(a1);
                经验加成表数值.setText(a2);
            }
        });
    }

    public static void main(final String[] args) throws Exception {
        JFrame.setDefaultLookAndFeelDecorated(true);
        JDialog.setDefaultLookAndFeelDecorated(true);
        try {
            BeautyEyeLNFHelper.frameBorderStyle = BeautyEyeLNFHelper.FrameBorderStyle.translucencySmallShadow;//设置本属性将改变窗口边框样式定义
            UIManager.put("RootPane.setupButtonVisible", false);//关闭设置
            BeautyEyeLNFHelper.launchBeautyEyeLNF();
            //顺便加载一下字体
            for (String s : DEFAULT_FONT) {
                UIManager.put(s, new Font("微软雅黑", Font.PLAIN, 14));
            }
        } catch (Exception e) {
            System.out.println("[" + FileoutputUtil.CurrentReadable_Time() + "]" + e);
        }
        EventQueue.invokeLater(() -> {
            new Maple().setVisible(true);
            System.out.println("[" + FileoutputUtil.CurrentReadable_Time() + "][========================================]");
            System.out.println("[" + FileoutputUtil.CurrentReadable_Time() + "][信息]控制台已启动，点击左下角[启动服务端]运行。");
            System.out.println("[" + FileoutputUtil.CurrentReadable_Time() + "][========================================]");
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel ActiveThread;
    private javax.swing.JLabel PlayerCount;
    private javax.swing.JTextField a1;
    private javax.swing.JTextField a2;
    private javax.swing.JButton jButton10;
    private javax.swing.JButton jButton16;
    private javax.swing.JButton jButton17;
    private javax.swing.JButton jButton22;
    private javax.swing.JButton jButton27;
    private javax.swing.JButton jButton29;
    private javax.swing.JButton jButton35;
    private javax.swing.JButton jButton38;
    private javax.swing.JButton jButton40;
    private javax.swing.JButton jButton41;
    private javax.swing.JButton jButton42;
    private javax.swing.JButton jButton43;
    private javax.swing.JButton jButton44;
    private javax.swing.JButton jButton45;
    private javax.swing.JButton jButton46;
    private javax.swing.JButton jButton47;
    private javax.swing.JButton jButton48;
    private javax.swing.JButton jButton49;
    private javax.swing.JButton jButton50;
    private javax.swing.JButton jButton51;
    private javax.swing.JButton jButton54;
    private javax.swing.JButton jButton55;
    private javax.swing.JButton jButton68;
    private javax.swing.JButton jButton69;
    private javax.swing.JButton jButton7;
    private javax.swing.JButton jButton70;
    private javax.swing.JButton jButton72;
    private javax.swing.JButton jButton73;
    private javax.swing.JButton jButton74;
    private javax.swing.JButton jButton75;
    private javax.swing.JButton jButton76;
    private javax.swing.JButton jButton8;
    private javax.swing.JButton jButton9;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel106;
    private javax.swing.JLabel jLabel117;
    private javax.swing.JLabel jLabel118;
    private javax.swing.JLabel jLabel119;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel15;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel219;
    private javax.swing.JLabel jLabel22;
    private javax.swing.JLabel jLabel220;
    private javax.swing.JLabel jLabel221;
    private javax.swing.JLabel jLabel222;
    private javax.swing.JLabel jLabel223;
    private javax.swing.JLabel jLabel224;
    private javax.swing.JLabel jLabel225;
    private javax.swing.JLabel jLabel226;
    private javax.swing.JLabel jLabel227;
    private javax.swing.JLabel jLabel228;
    private javax.swing.JLabel jLabel229;
    private javax.swing.JLabel jLabel23;
    private javax.swing.JLabel jLabel230;
    private javax.swing.JLabel jLabel231;
    private javax.swing.JLabel jLabel232;
    private javax.swing.JLabel jLabel233;
    private javax.swing.JLabel jLabel235;
    private javax.swing.JLabel jLabel236;
    private javax.swing.JLabel jLabel237;
    private javax.swing.JLabel jLabel24;
    private javax.swing.JLabel jLabel240;
    private javax.swing.JLabel jLabel243;
    private javax.swing.JLabel jLabel244;
    private javax.swing.JLabel jLabel245;
    private javax.swing.JLabel jLabel246;
    private javax.swing.JLabel jLabel247;
    private javax.swing.JLabel jLabel248;
    private javax.swing.JLabel jLabel249;
    private javax.swing.JLabel jLabel25;
    private javax.swing.JLabel jLabel250;
    private javax.swing.JLabel jLabel251;
    private javax.swing.JLabel jLabel254;
    private javax.swing.JLabel jLabel259;
    private javax.swing.JLabel jLabel263;
    private javax.swing.JLabel jLabel264;
    private javax.swing.JLabel jLabel269;
    private javax.swing.JLabel jLabel27;
    private javax.swing.JLabel jLabel28;
    private javax.swing.JLabel jLabel32;
    private javax.swing.JLabel jLabel322;
    private javax.swing.JLabel jLabel326;
    private javax.swing.JLabel jLabel327;
    private javax.swing.JLabel jLabel328;
    private javax.swing.JLabel jLabel348;
    private javax.swing.JLabel jLabel349;
    private javax.swing.JLabel jLabel359;
    private javax.swing.JLabel jLabel360;
    private javax.swing.JLabel jLabel361;
    private javax.swing.JLabel jLabel362;
    private javax.swing.JLabel jLabel384;
    private javax.swing.JLabel jLabel385;
    private javax.swing.JLabel jLabel386;
    private javax.swing.JLabel jLabel42;
    private javax.swing.JLabel jLabel43;
    private javax.swing.JLabel jLabel44;
    private javax.swing.JLabel jLabel60;
    private javax.swing.JLabel jLabel61;
    private javax.swing.JLabel jLabel62;
    private javax.swing.JLabel jLabel64;
    private javax.swing.JLabel jLabel65;
    private javax.swing.JLabel jLabel67;
    private javax.swing.JLabel jLabel68;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel15;
    private javax.swing.JPanel jPanel23;
    private javax.swing.JPanel jPanel29;
    private javax.swing.JPanel jPanel34;
    private javax.swing.JPanel jPanel37;
    private javax.swing.JPanel jPanel38;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JPanel jPanel5;
    private javax.swing.JPanel jPanel52;
    private javax.swing.JPanel jPanel53;
    private javax.swing.JPanel jPanel58;
    private javax.swing.JPanel jPanel59;
    private javax.swing.JPanel jPanel61;
    private javax.swing.JPanel jPanel62;
    private javax.swing.JPanel jPanel64;
    private javax.swing.JPanel jPanel65;
    private javax.swing.JPanel jPanel66;
    private javax.swing.JPanel jPanel67;
    private javax.swing.JPanel jPanel68;
    private javax.swing.JPanel jPanel73;
    private javax.swing.JPanel jPanel75;
    private javax.swing.JPanel jPanel76;
    private javax.swing.JPanel jPanel80;
    private javax.swing.JPanel jPanel83;
    private javax.swing.JPanel jPanel9;
    private javax.swing.JPanel jPanel93;
    private javax.swing.JScrollPane jScrollPane12;
    private javax.swing.JScrollPane jScrollPane134;
    private javax.swing.JScrollPane jScrollPane136;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JScrollPane jScrollPane4;
    private javax.swing.JScrollPane jScrollPane6;
    private javax.swing.JScrollPane jScrollPane9;
    private javax.swing.JTabbedPane jTabbedPane2;
    private javax.swing.JTabbedPane jTabbedPane7;
    private javax.swing.JTextArea jTextArea2;
    private javax.swing.JTextField jTextField22;
    private javax.swing.JTextField noticeText;
    private javax.swing.JTable playerTable;
    private javax.swing.JButton sendMsgNotice;
    private javax.swing.JButton sendNotice;
    private javax.swing.JButton sendNpcTalkNotice;
    private javax.swing.JButton sendWinNotice;
    private static javax.swing.JButton startserverbutton;
    private javax.swing.JButton z1;
    private javax.swing.JButton z10;
    private javax.swing.JButton z11;
    private javax.swing.JButton z12;
    private javax.swing.JButton z2;
    private javax.swing.JButton z3;
    private javax.swing.JButton z4;
    private javax.swing.JButton z5;
    private javax.swing.JButton z6;
    private javax.swing.JButton z7;
    private javax.swing.JButton z8;
    private javax.swing.JButton z9;
    private javax.swing.JButton 一键满技能;
    private javax.swing.JTextField 三倍爆率持续时间;
    private javax.swing.JTextField 三倍经验持续时间;
    private javax.swing.JTextField 三倍金币持续时间;
    private javax.swing.JTextField 个人发送物品玩家名字1;
    private javax.swing.JButton 个人玩家下线;
    private javax.swing.JTabbedPane 主窗口;
    private javax.swing.JButton 传送玩家到指定地图;
    private javax.swing.JButton 传送玩家到自由;
    private javax.swing.JButton 修改怪物倍率;
    private javax.swing.JButton 修改物品叠加数量1;
    private javax.swing.JButton 修改玩家信息;
    public static javax.swing.JTextArea 倍怪地图;
    private javax.swing.JButton 全员下线;
    private javax.swing.JTextField 全服发送装备物品ID;
    private javax.swing.JTextField 全服发送装备装备HP;
    private javax.swing.JTextField 全服发送装备装备MP;
    private javax.swing.JTextField 全服发送装备装备制作人;
    private javax.swing.JTextField 全服发送装备装备力量;
    private javax.swing.JTextField 全服发送装备装备加卷;
    private javax.swing.JTextField 全服发送装备装备可否交易;
    private javax.swing.JTextField 全服发送装备装备攻击力;
    private javax.swing.JTextField 全服发送装备装备敏捷;
    private javax.swing.JTextField 全服发送装备装备智力;
    private javax.swing.JTextField 全服发送装备装备物理防御;
    private javax.swing.JTextField 全服发送装备装备给予时间;
    private javax.swing.JTextField 全服发送装备装备运气;
    private javax.swing.JTextField 全服发送装备装备魔法力;
    private javax.swing.JTextField 全服发送装备装备魔法防御;
    private javax.swing.JTextField 公告发布喇叭代码;
    private javax.swing.JTabbedPane 关于我们;
    private javax.swing.JButton 关玩家到小黑屋;
    private static javax.swing.JProgressBar 内存;
    private javax.swing.JTabbedPane 功能设置;
    private javax.swing.JTextField 双倍爆率持续时间;
    private javax.swing.JTextField 双倍经验持续时间;
    private javax.swing.JTextField 双倍金币持续时间;
    private javax.swing.JTextField 发放个人玩家名字;
    private javax.swing.JTextField 发放其他数量;
    private javax.swing.JTextField 发放其他玩家;
    private javax.swing.JComboBox<String> 发放其他类型;
    private javax.swing.JComboBox<String> 发放其他范围;
    private javax.swing.JTextField 发放道具代码;
    private javax.swing.JComboBox<String> 发放道具发放范围;
    private javax.swing.JTextField 发放道具数量;
    private javax.swing.JTextField 发送装备玩家姓名;
    private static javax.swing.JProgressBar 在线人数;
    private javax.swing.JTable 在线泡点设置;
    private javax.swing.JPanel 常用工具;
    private javax.swing.JButton 开启三倍爆率;
    private javax.swing.JButton 开启三倍经验;
    private javax.swing.JButton 开启三倍金币;
    private javax.swing.JButton 开启双倍爆率;
    private javax.swing.JButton 开启双倍经验;
    private javax.swing.JButton 开启双倍金币;
    public static javax.swing.JTextArea 弓标子弹叠加上限突破;
    private javax.swing.JTextField 怪物倍率;
    private static javax.swing.JProgressBar 时长;
    private javax.swing.JButton 查询在线玩家人数按钮;
    private javax.swing.JTextField 泡点值;
    private javax.swing.JButton 泡点值修改;
    private javax.swing.JTextField 泡点序号;
    private javax.swing.JButton 泡点抵用开关;
    private javax.swing.JButton 泡点点券开关;
    private javax.swing.JTextField 泡点类型;
    private javax.swing.JButton 泡点经验开关;
    private javax.swing.JButton 泡点豆豆开关;
    private javax.swing.JButton 泡点金币开关;
    private javax.swing.JButton 清空日志;
    private javax.swing.JPanel 游戏公告;
    private javax.swing.JButton 游戏经验加成说明;
    private javax.swing.JTextField 物品;
    private javax.swing.JTextField 物品叠加数量;
    private javax.swing.JButton 物品确认;
    private javax.swing.JPanel 福利中心;
    private javax.swing.JLabel 福利提示语言2;
    private javax.swing.JTextField 经验;
    private javax.swing.JTable 经验加成表;
    private javax.swing.JButton 经验加成表修改;
    private javax.swing.JTextField 经验加成表序号;
    private javax.swing.JTextField 经验加成表数值;
    private javax.swing.JTextField 经验加成表类型;
    private javax.swing.JButton 经验确认;
    private javax.swing.JButton 给予物品;
    private javax.swing.JButton 给予物品1;
    private javax.swing.JButton 给予装备1;
    private javax.swing.JButton 给予装备2;
    private javax.swing.JTextField 角色元宝编辑框;
    private javax.swing.JTextField 角色名称编辑框;
    private javax.swing.JTextField 角色所在地图编辑;
    private javax.swing.JTextField 角色抵用编辑框;
    private javax.swing.JTextField 角色点券编辑框;
    private javax.swing.JTextArea 输出窗口;
    private javax.swing.JButton 重载任务2;
    private javax.swing.JButton 重载传送门按钮2;
    private javax.swing.JButton 重载副本按钮2;
    private javax.swing.JButton 重载包头按钮2;
    private javax.swing.JButton 重载反应堆按钮2;
    private javax.swing.JButton 重载商城按钮2;
    private javax.swing.JButton 重载商店按钮2;
    private javax.swing.JButton 重载爆率按钮2;
    private javax.swing.JTextField 金币;
    private javax.swing.JButton 金币确认;
    private javax.swing.JPanel 首页功能;
    // End of variables declaration//GEN-END:variables

}
