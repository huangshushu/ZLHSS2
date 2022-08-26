/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui.tools;

import client.LoginCrypto;
import client.MapleCharacter;
import database.DBConPool;
import handling.channel.ChannelServer;
import handling.login.handler.AutoRegister;
import handling.world.World;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import scripting.NPCConversationManager;
import server.MapleItemInformationProvider;
import server.Start;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import static server.MapleCarnivalChallenge.getJobNameById;

public class 账号管理工具 extends javax.swing.JFrame {

    /**
     * Creates new form WinStart
     */
    public 账号管理工具() {
        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image/logo.png"));
        setIconImage(icon.getImage());
        setTitle("账号管理工具");
        initComponents();
        initview();//初始化控件信息
    }

    public void initview() {
        ((JPanel) getContentPane()).setOpaque(true); // 将JFrame上自带的面板设置为透明，否则背景图片
        UIManager.put("TabbedPane.contentOpaque", true);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane8 = new javax.swing.JTabbedPane();
        jPanel23 = new javax.swing.JPanel();
        jScrollPane3 = new javax.swing.JScrollPane();
        账号信息 = new javax.swing.JTable();
        jPanel30 = new javax.swing.JPanel();
        抵用 = new javax.swing.JTextField();
        账号 = new javax.swing.JTextField();
        点券 = new javax.swing.JTextField();
        jLabel55 = new javax.swing.JLabel();
        jLabel131 = new javax.swing.JLabel();
        修改账号点券抵用 = new javax.swing.JButton();
        账号ID = new javax.swing.JTextField();
        jLabel206 = new javax.swing.JLabel();
        jLabel312 = new javax.swing.JLabel();
        管理1 = new javax.swing.JTextField();
        jLabel353 = new javax.swing.JLabel();
        QQ = new javax.swing.JTextField();
        jLabel357 = new javax.swing.JLabel();
        jPanel32 = new javax.swing.JPanel();
        注册的账号 = new javax.swing.JTextField();
        注册的密码 = new javax.swing.JTextField();
        jButton35 = new javax.swing.JButton();
        jLabel111 = new javax.swing.JLabel();
        jLabel201 = new javax.swing.JLabel();
        jButton32 = new javax.swing.JButton();
        刷新账号信息 = new javax.swing.JButton();
        离线账号 = new javax.swing.JButton();
        解封 = new javax.swing.JButton();
        已封账号 = new javax.swing.JButton();
        在线账号 = new javax.swing.JButton();
        删除账号 = new javax.swing.JButton();
        封锁账号 = new javax.swing.JButton();
        解卡 = new javax.swing.JButton();
        显示在线账号 = new javax.swing.JLabel();
        账号提示语言 = new javax.swing.JLabel();
        jButton12 = new javax.swing.JButton();
        账号操作 = new javax.swing.JTextField();
        角色信息1 = new javax.swing.JPanel();
        jScrollPane4 = new javax.swing.JScrollPane();
        角色信息 = new javax.swing.JTable();
        刷新角色信息 = new javax.swing.JButton();
        显示管理角色 = new javax.swing.JButton();
        jButton38 = new javax.swing.JButton();
        删除角色 = new javax.swing.JButton();
        角色昵称 = new javax.swing.JTextField();
        等级 = new javax.swing.JTextField();
        力量 = new javax.swing.JTextField();
        敏捷 = new javax.swing.JTextField();
        智力 = new javax.swing.JTextField();
        运气 = new javax.swing.JTextField();
        HP = new javax.swing.JTextField();
        MP = new javax.swing.JTextField();
        金币1 = new javax.swing.JTextField();
        地图 = new javax.swing.JTextField();
        GM = new javax.swing.JTextField();
        jLabel182 = new javax.swing.JLabel();
        jLabel183 = new javax.swing.JLabel();
        jLabel184 = new javax.swing.JLabel();
        jLabel185 = new javax.swing.JLabel();
        jLabel186 = new javax.swing.JLabel();
        jLabel187 = new javax.swing.JLabel();
        jLabel189 = new javax.swing.JLabel();
        jLabel190 = new javax.swing.JLabel();
        jLabel191 = new javax.swing.JLabel();
        jLabel192 = new javax.swing.JLabel();
        jLabel193 = new javax.swing.JLabel();
        角色ID = new javax.swing.JTextField();
        卡号自救1 = new javax.swing.JButton();
        卡号自救2 = new javax.swing.JButton();
        jLabel203 = new javax.swing.JLabel();
        查看技能 = new javax.swing.JButton();
        查看背包 = new javax.swing.JButton();
        卡家族解救 = new javax.swing.JButton();
        脸型 = new javax.swing.JTextField();
        发型 = new javax.swing.JTextField();
        jLabel214 = new javax.swing.JLabel();
        离线角色 = new javax.swing.JButton();
        在线角色 = new javax.swing.JButton();
        显示在线玩家 = new javax.swing.JLabel();
        角色背包 = new javax.swing.JPanel();
        jTabbedPane5 = new javax.swing.JTabbedPane();
        jPanel39 = new javax.swing.JPanel();
        jScrollPane15 = new javax.swing.JScrollPane();
        角色背包穿戴 = new javax.swing.JTable();
        背包物品名字1 = new javax.swing.JTextField();
        身上穿戴序号1 = new javax.swing.JTextField();
        背包物品代码1 = new javax.swing.JTextField();
        jLabel276 = new javax.swing.JLabel();
        jLabel283 = new javax.swing.JLabel();
        jLabel287 = new javax.swing.JLabel();
        删除穿戴装备 = new javax.swing.JButton();
        jPanel40 = new javax.swing.JPanel();
        jScrollPane16 = new javax.swing.JScrollPane();
        角色装备背包 = new javax.swing.JTable();
        装备背包物品名字 = new javax.swing.JTextField();
        装备背包物品序号 = new javax.swing.JTextField();
        装备背包物品代码 = new javax.swing.JTextField();
        jLabel288 = new javax.swing.JLabel();
        jLabel289 = new javax.swing.JLabel();
        jLabel290 = new javax.swing.JLabel();
        删除装备背包 = new javax.swing.JButton();
        jPanel41 = new javax.swing.JPanel();
        jScrollPane17 = new javax.swing.JScrollPane();
        角色消耗背包 = new javax.swing.JTable();
        消耗背包物品名字 = new javax.swing.JTextField();
        消耗背包物品序号 = new javax.swing.JTextField();
        消耗背包物品代码 = new javax.swing.JTextField();
        jLabel291 = new javax.swing.JLabel();
        jLabel292 = new javax.swing.JLabel();
        jLabel293 = new javax.swing.JLabel();
        删除消耗背包 = new javax.swing.JButton();
        jPanel42 = new javax.swing.JPanel();
        jScrollPane18 = new javax.swing.JScrollPane();
        角色设置背包 = new javax.swing.JTable();
        设置背包物品名字 = new javax.swing.JTextField();
        设置背包物品序号 = new javax.swing.JTextField();
        设置背包物品代码 = new javax.swing.JTextField();
        jLabel294 = new javax.swing.JLabel();
        jLabel295 = new javax.swing.JLabel();
        jLabel296 = new javax.swing.JLabel();
        删除设置背包 = new javax.swing.JButton();
        jPanel43 = new javax.swing.JPanel();
        jScrollPane19 = new javax.swing.JScrollPane();
        角色其他背包 = new javax.swing.JTable();
        其他背包物品名字 = new javax.swing.JTextField();
        其他背包物品序号 = new javax.swing.JTextField();
        其他背包物品代码 = new javax.swing.JTextField();
        jLabel297 = new javax.swing.JLabel();
        jLabel298 = new javax.swing.JLabel();
        jLabel299 = new javax.swing.JLabel();
        删除其他背包 = new javax.swing.JButton();
        jPanel44 = new javax.swing.JPanel();
        jScrollPane20 = new javax.swing.JScrollPane();
        角色特殊背包 = new javax.swing.JTable();
        特殊背包物品名字 = new javax.swing.JTextField();
        特殊背包物品序号 = new javax.swing.JTextField();
        特殊背包物品代码 = new javax.swing.JTextField();
        jLabel300 = new javax.swing.JLabel();
        jLabel301 = new javax.swing.JLabel();
        jLabel302 = new javax.swing.JLabel();
        删除特殊背包 = new javax.swing.JButton();
        jPanel45 = new javax.swing.JPanel();
        jScrollPane21 = new javax.swing.JScrollPane();
        角色游戏仓库 = new javax.swing.JTable();
        游戏仓库物品名字 = new javax.swing.JTextField();
        游戏仓库物品序号 = new javax.swing.JTextField();
        游戏仓库物品代码 = new javax.swing.JTextField();
        jLabel303 = new javax.swing.JLabel();
        jLabel304 = new javax.swing.JLabel();
        jLabel305 = new javax.swing.JLabel();
        删除游戏仓库 = new javax.swing.JButton();
        jPanel46 = new javax.swing.JPanel();
        jScrollPane22 = new javax.swing.JScrollPane();
        角色商城仓库 = new javax.swing.JTable();
        商城仓库物品名字 = new javax.swing.JTextField();
        商城仓库物品序号 = new javax.swing.JTextField();
        商城仓库物品代码 = new javax.swing.JTextField();
        jLabel306 = new javax.swing.JLabel();
        jLabel307 = new javax.swing.JLabel();
        jLabel308 = new javax.swing.JLabel();
        删除商城仓库 = new javax.swing.JButton();
        jPanel48 = new javax.swing.JPanel();
        jScrollPane30 = new javax.swing.JScrollPane();
        角色点券拍卖行 = new javax.swing.JTable();
        拍卖行物品名字1 = new javax.swing.JTextField();
        角色点券拍卖行序号 = new javax.swing.JTextField();
        拍卖行物品代码1 = new javax.swing.JTextField();
        jLabel354 = new javax.swing.JLabel();
        jLabel355 = new javax.swing.JLabel();
        jLabel356 = new javax.swing.JLabel();
        删除拍卖行1 = new javax.swing.JButton();
        jPanel47 = new javax.swing.JPanel();
        jScrollPane23 = new javax.swing.JScrollPane();
        角色金币拍卖行 = new javax.swing.JTable();
        拍卖行物品名字 = new javax.swing.JTextField();
        角色金币拍卖行序号 = new javax.swing.JTextField();
        拍卖行物品代码 = new javax.swing.JTextField();
        jLabel309 = new javax.swing.JLabel();
        jLabel310 = new javax.swing.JLabel();
        jLabel311 = new javax.swing.JLabel();
        删除拍卖行 = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        技能 = new javax.swing.JPanel();
        jScrollPane14 = new javax.swing.JScrollPane();
        技能信息 = new javax.swing.JTable();
        技能代码 = new javax.swing.JTextField();
        技能目前等级 = new javax.swing.JTextField();
        技能最高等级 = new javax.swing.JTextField();
        技能名字 = new javax.swing.JTextField();
        jLabel86 = new javax.swing.JLabel();
        jLabel89 = new javax.swing.JLabel();
        jLabel107 = new javax.swing.JLabel();
        修改技能 = new javax.swing.JButton();
        技能序号 = new javax.swing.JTextField();
        jLabel188 = new javax.swing.JLabel();
        jLabel204 = new javax.swing.JLabel();
        jLabel205 = new javax.swing.JLabel();
        删除技能 = new javax.swing.JButton();
        修改技能1 = new javax.swing.JButton();
        jPanel50 = new javax.swing.JPanel();
        jScrollPane24 = new javax.swing.JScrollPane();
        家族信息 = new javax.swing.JTable();
        刷新家族信息 = new javax.swing.JButton();
        jLabel194 = new javax.swing.JLabel();
        家族ID = new javax.swing.JTextField();
        家族名称 = new javax.swing.JTextField();
        jLabel195 = new javax.swing.JLabel();
        家族族长 = new javax.swing.JTextField();
        jLabel196 = new javax.swing.JLabel();
        jLabel198 = new javax.swing.JLabel();
        家族成员2 = new javax.swing.JTextField();
        jLabel199 = new javax.swing.JLabel();
        家族成员3 = new javax.swing.JTextField();
        jLabel200 = new javax.swing.JLabel();
        家族成员4 = new javax.swing.JTextField();
        jLabel313 = new javax.swing.JLabel();
        家族成员5 = new javax.swing.JTextField();
        jLabel314 = new javax.swing.JLabel();
        家族GP = new javax.swing.JTextField();
        jButton34 = new javax.swing.JButton();
        jPanel65 = new javax.swing.JPanel();
        jScrollPane107 = new javax.swing.JScrollPane();
        封IP = new javax.swing.JTable();
        jScrollPane108 = new javax.swing.JScrollPane();
        封MAC = new javax.swing.JTable();
        刷新封IP = new javax.swing.JButton();
        刷新封MAC = new javax.swing.JButton();
        删除IP代码 = new javax.swing.JTextField();
        删除MAC = new javax.swing.JButton();
        删除IP = new javax.swing.JButton();
        删MAC代码 = new javax.swing.JTextField();
        jLabel346 = new javax.swing.JLabel();
        jLabel347 = new javax.swing.JLabel();

        setResizable(false);

        jTabbedPane8.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N

        jPanel23.setBackground(new java.awt.Color(255, 255, 255));

        账号信息.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        账号信息.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "账号ID", "账号", "IP地址", "MAC地址", "绑定QQ", "点券", "抵用", "最近上线", "在线", "封号", "GM"
                }
        ) {
            final Class[] types = new Class[]{
                    java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.String.class, java.lang.Object.class
            };
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false, false, false, false, false, false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types[columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        账号信息.getTableHeader().setReorderingAllowed(false);
        jScrollPane3.setViewportView(账号信息);

        jPanel30.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "账号修改", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel30.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        抵用.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jPanel30.add(抵用, new org.netbeans.lib.awtextra.AbsoluteConstraints(520, 40, 120, 30));

        账号.setEditable(false);
        账号.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jPanel30.add(账号, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 40, 100, 30));

        点券.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jPanel30.add(点券, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 40, 120, 30));

        jLabel55.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel55.setText("抵用；");
        jPanel30.add(jLabel55, new org.netbeans.lib.awtextra.AbsoluteConstraints(520, 20, 60, -1));

        jLabel131.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel131.setText("点券；");
        jPanel30.add(jLabel131, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 20, -1, -1));

        修改账号点券抵用.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        修改账号点券抵用.setText("修改");
        修改账号点券抵用.setToolTipText("<html>\n点击账号后可修改账号的<strong><font color=\"#FF0000\">抵用券</font></strong><strong>和<font color=\"#FF0000\">点券</font></strong>");
        修改账号点券抵用.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改账号点券抵用ActionPerformed(evt);
            }
        });
        jPanel30.add(修改账号点券抵用, new org.netbeans.lib.awtextra.AbsoluteConstraints(780, 40, 70, 30));

        账号ID.setEditable(false);
        账号ID.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jPanel30.add(账号ID, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 40, 70, 30));

        jLabel206.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel206.setText("ID；");
        jPanel30.add(jLabel206, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 20, -1, -1));

        jLabel312.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel312.setText("管理；");
        jPanel30.add(jLabel312, new org.netbeans.lib.awtextra.AbsoluteConstraints(670, 20, -1, -1));

        管理1.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jPanel30.add(管理1, new org.netbeans.lib.awtextra.AbsoluteConstraints(670, 40, 70, 30));

        jLabel353.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel353.setText("账号；");
        jPanel30.add(jLabel353, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 20, -1, -1));

        QQ.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jPanel30.add(QQ, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 40, 120, 30));

        jLabel357.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel357.setText("绑定QQ；");
        jPanel30.add(jLabel357, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 20, 80, -1));

        jPanel32.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "注册/修改", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel32.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        注册的账号.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        注册的账号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                注册的账号ActionPerformed(evt);
            }
        });
        jPanel32.add(注册的账号, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 30, 100, 30));

        注册的密码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        注册的密码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                注册的密码ActionPerformed(evt);
            }
        });
        jPanel32.add(注册的密码, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 30, 100, 30));

        jButton35.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jButton35.setText("注册");
        jButton35.setToolTipText("<html>\n输入<strong><font color=\"#FF0000\">账号</font></strong><strong>和<strong><font color=\"#FF0000\">密码</font></strong><strong>即可注册账号");
        jButton35.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton35ActionPerformed(evt);
            }
        });
        jPanel32.add(jButton35, new org.netbeans.lib.awtextra.AbsoluteConstraints(420, 30, 70, 30));

        jLabel111.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel111.setText("账号；");
        jPanel32.add(jLabel111, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 30, -1, 30));

        jLabel201.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel201.setText("密码；");
        jPanel32.add(jLabel201, new org.netbeans.lib.awtextra.AbsoluteConstraints(180, 30, -1, 30));

        jButton32.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jButton32.setText("改密");
        jButton32.setToolTipText("<html>\n输入账号修改<strong><font color=\"#FF0000\">密码</font></strong><strong>");
        jButton32.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton32ActionPerformed(evt);
            }
        });
        jPanel32.add(jButton32, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 30, 70, 30));

        刷新账号信息.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        刷新账号信息.setText("全部账号");
        刷新账号信息.setToolTipText("显示所有玩家账号");
        刷新账号信息.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新账号信息ActionPerformed(evt);
            }
        });

        离线账号.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        离线账号.setText("离线账号");
        离线账号.setToolTipText("显示离线账号");
        离线账号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                离线账号ActionPerformed(evt);
            }
        });

        解封.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        解封.setText("解封账号");
        解封.setToolTipText("<html>\n在文本框<strong><font color=\"#FF0000\">操作的账号</font></strong>中输入账号即可解封已经被封禁的账号<br>\n");
        解封.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                解封ActionPerformed(evt);
            }
        });

        已封账号.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        已封账号.setText("已封账号");
        已封账号.setToolTipText("显示已经被封禁的账号");
        已封账号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                已封账号ActionPerformed(evt);
            }
        });

        在线账号.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        在线账号.setText("在线账号");
        在线账号.setToolTipText("显示在线账号");
        在线账号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                在线账号ActionPerformed(evt);
            }
        });

        删除账号.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        删除账号.setText("删除账号");
        删除账号.setToolTipText("<html>\n在文本框<strong><font color=\"#FF0000\">操作的账号</font></strong>中输入账号即可删除账号<br>");
        删除账号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除账号ActionPerformed(evt);
            }
        });

        封锁账号.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        封锁账号.setText("封锁账号");
        封锁账号.setToolTipText("<html>\n在文本框<strong><font color=\"#FF0000\">操作的账号</font></strong>中输入账号即可封禁账号<br>");
        封锁账号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                封锁账号ActionPerformed(evt);
            }
        });

        解卡.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        解卡.setText("解卡账号");
        解卡.setToolTipText("<html>\n在文本框<strong><font color=\"#FF0000\">操作的账号</font></strong>中输入账号即可解卡账号<br>");
        解卡.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                解卡ActionPerformed(evt);
            }
        });

        显示在线账号.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N

        账号提示语言.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        账号提示语言.setText("[信息]：");

        jButton12.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jButton12.setText("查账号");
        jButton12.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton12ActionPerformed(evt);
            }
        });

        账号操作.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        账号操作.setText("40074907");

        javax.swing.GroupLayout jPanel23Layout = new javax.swing.GroupLayout(jPanel23);
        jPanel23.setLayout(jPanel23Layout);
        jPanel23Layout.setHorizontalGroup(
                jPanel23Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel23Layout.createSequentialGroup()
                                .addGap(10, 10, 10)
                                .addGroup(jPanel23Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel23Layout.createSequentialGroup()
                                                .addComponent(刷新账号信息)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(在线账号)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(离线账号)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(已封账号)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(删除账号)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(解卡)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(封锁账号)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(解封)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton12, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(账号操作, javax.swing.GroupLayout.PREFERRED_SIZE, 71, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addContainerGap())
                                        .addGroup(jPanel23Layout.createSequentialGroup()
                                                .addGap(0, 0, Short.MAX_VALUE)
                                                .addComponent(显示在线账号, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))))
                        .addGroup(jPanel23Layout.createSequentialGroup()
                                .addGroup(jPanel23Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jScrollPane3, javax.swing.GroupLayout.PREFERRED_SIZE, 883, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(账号提示语言, javax.swing.GroupLayout.PREFERRED_SIZE, 700, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel23Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                                .addComponent(jPanel32, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(jPanel30, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 866, Short.MAX_VALUE)))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel23Layout.setVerticalGroup(
                jPanel23Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel23Layout.createSequentialGroup()
                                .addGroup(jPanel23Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(刷新账号信息, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(在线账号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(离线账号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(已封账号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(删除账号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(解卡, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(封锁账号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(解封, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton12, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(账号操作, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(5, 5, 5)
                                .addComponent(jScrollPane3, javax.swing.GroupLayout.PREFERRED_SIZE, 405, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jPanel30, javax.swing.GroupLayout.PREFERRED_SIZE, 78, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jPanel32, javax.swing.GroupLayout.PREFERRED_SIZE, 68, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(账号提示语言, javax.swing.GroupLayout.PREFERRED_SIZE, 25, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(27, 27, 27)
                                .addComponent(显示在线账号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jTabbedPane8.addTab("账号管理", jPanel23);

        角色信息1.setBackground(new java.awt.Color(255, 255, 255));
        角色信息1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色信息.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        角色信息.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        角色信息.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "角色ID", "账号ID", "角色昵称", "职业", "等级", "力量", "敏捷", "智力", "运气", "MaxHP", "MaxMP", "金币", "所在地图", "状态", "GM", "发型", "脸型"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色信息.setName(""); // NOI18N
        角色信息.getTableHeader().setReorderingAllowed(false);
        jScrollPane4.setViewportView(角色信息);

        角色信息1.add(jScrollPane4, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 870, 490));

        刷新角色信息.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新角色信息.setText("刷新");
        刷新角色信息.setToolTipText("显示所有角色");
        刷新角色信息.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新角色信息ActionPerformed(evt);
            }
        });
        角色信息1.add(刷新角色信息, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 500, 110, 30));

        显示管理角色.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        显示管理角色.setText("管理角色");
        显示管理角色.setToolTipText("显示所有GM管理员");
        显示管理角色.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                显示管理角色ActionPerformed(evt);
            }
        });
        角色信息1.add(显示管理角色, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 530, 110, 30));

        jButton38.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jButton38.setText("修改");
        jButton38.setToolTipText("<html>\n修改角色信息<strong><font color=\"#FF0000\">文本框不可留空</font></strong><strong>");
        jButton38.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton38ActionPerformed(evt);
            }
        });
        角色信息1.add(jButton38, new org.netbeans.lib.awtextra.AbsoluteConstraints(770, 580, 100, 40));

        删除角色.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        删除角色.setText("删除角色");
        删除角色.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除角色ActionPerformed(evt);
            }
        });
        角色信息1.add(删除角色, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 500, 130, 30));

        角色昵称.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色昵称.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                角色昵称ActionPerformed(evt);
            }
        });
        角色信息1.add(角色昵称, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 590, 70, 30));

        等级.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        等级.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                等级ActionPerformed(evt);
            }
        });
        角色信息1.add(等级, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 590, 40, 30));

        力量.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        力量.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                力量ActionPerformed(evt);
            }
        });
        角色信息1.add(力量, new org.netbeans.lib.awtextra.AbsoluteConstraints(190, 590, 40, 30));

        敏捷.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        敏捷.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                敏捷ActionPerformed(evt);
            }
        });
        角色信息1.add(敏捷, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 590, 40, 30));

        智力.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        智力.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                智力ActionPerformed(evt);
            }
        });
        角色信息1.add(智力, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 590, 40, 30));

        运气.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        运气.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                运气ActionPerformed(evt);
            }
        });
        角色信息1.add(运气, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 590, 40, 30));

        HP.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        HP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                HPActionPerformed(evt);
            }
        });
        角色信息1.add(HP, new org.netbeans.lib.awtextra.AbsoluteConstraints(420, 590, 50, 30));

        MP.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        MP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                MPActionPerformed(evt);
            }
        });
        角色信息1.add(MP, new org.netbeans.lib.awtextra.AbsoluteConstraints(480, 590, 50, 30));

        金币1.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        金币1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                金币1ActionPerformed(evt);
            }
        });
        角色信息1.add(金币1, new org.netbeans.lib.awtextra.AbsoluteConstraints(540, 590, 100, 30));

        地图.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        地图.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                地图ActionPerformed(evt);
            }
        });
        角色信息1.add(地图, new org.netbeans.lib.awtextra.AbsoluteConstraints(650, 590, 110, 30));

        GM.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        GM.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                GMActionPerformed(evt);
            }
        });
        角色信息1.add(GM, new org.netbeans.lib.awtextra.AbsoluteConstraints(690, 540, 60, 30));

        jLabel182.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel182.setText("GM等级；");
        角色信息1.add(jLabel182, new org.netbeans.lib.awtextra.AbsoluteConstraints(630, 550, -1, -1));

        jLabel183.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel183.setText("角色ID；");
        角色信息1.add(jLabel183, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 570, -1, -1));

        jLabel184.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel184.setText("等级；");
        角色信息1.add(jLabel184, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 570, -1, -1));

        jLabel185.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel185.setText("力量；");
        角色信息1.add(jLabel185, new org.netbeans.lib.awtextra.AbsoluteConstraints(190, 570, -1, -1));

        jLabel186.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel186.setText("敏捷；");
        角色信息1.add(jLabel186, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 570, -1, -1));

        jLabel187.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel187.setText("智力；");
        角色信息1.add(jLabel187, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 570, -1, -1));

        jLabel189.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel189.setText("MaxHP；");
        角色信息1.add(jLabel189, new org.netbeans.lib.awtextra.AbsoluteConstraints(420, 570, -1, -1));

        jLabel190.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel190.setText("MaxMP；");
        角色信息1.add(jLabel190, new org.netbeans.lib.awtextra.AbsoluteConstraints(480, 570, -1, -1));

        jLabel191.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel191.setText("金币；");
        角色信息1.add(jLabel191, new org.netbeans.lib.awtextra.AbsoluteConstraints(540, 570, -1, -1));

        jLabel192.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel192.setText("发型/脸型");
        角色信息1.add(jLabel192, new org.netbeans.lib.awtextra.AbsoluteConstraints(630, 500, -1, 30));

        jLabel193.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel193.setText("角色昵称；");
        角色信息1.add(jLabel193, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 570, -1, -1));

        角色ID.setEditable(false);
        角色ID.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色ID.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                角色IDActionPerformed(evt);
            }
        });
        角色信息1.add(角色ID, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 590, 40, 30));

        卡号自救1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        卡号自救1.setText("卡发/脸型解救");
        卡号自救1.setToolTipText("<html>\n角色卡<strong><font color=\"#FF0000\">发型</font></strong><strong>或者<strong><font color=\"#FF0000\">脸型</font></strong><strong>时候可用此功能\n");
        卡号自救1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                卡号自救1ActionPerformed(evt);
            }
        });
        角色信息1.add(卡号自救1, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 500, 130, 30));

        卡号自救2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        卡号自救2.setText("卡物品解救");
        卡号自救2.setToolTipText("<html>\n次卡号解救会对角色进行<strong><font color=\"#FF0000\">清空物品</font></strong><strong>处理");
        卡号自救2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                卡号自救2ActionPerformed(evt);
            }
        });
        角色信息1.add(卡号自救2, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 530, 130, 30));

        jLabel203.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel203.setText("运气；");
        角色信息1.add(jLabel203, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 570, -1, -1));

        查看技能.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        查看技能.setText("查看角色技能");
        查看技能.setToolTipText("<html>\n选择角色后，点击此功能，可查看角色所有<strong><font color=\"#FF0000\">技能信息</font></strong><strong>");
        查看技能.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查看技能ActionPerformed(evt);
            }
        });
        角色信息1.add(查看技能, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 530, 130, 30));

        查看背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        查看背包.setText("查看角色背包");
        查看背包.setToolTipText("<html>\n选择角色后，点击此功能，可查看角色所有<strong><font color=\"#FF0000\">物品信息</font></strong><strong>");
        查看背包.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查看背包ActionPerformed(evt);
            }
        });
        角色信息1.add(查看背包, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 530, 130, 30));

        卡家族解救.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        卡家族解救.setText("卡家族解救");
        卡家族解救.setToolTipText("<html>\n角色卡<strong><font color=\"#FF0000\">发型</font></strong><strong>或者<strong><font color=\"#FF0000\">脸型</font></strong><strong>时候可用此功能\n");
        卡家族解救.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                卡家族解救ActionPerformed(evt);
            }
        });
        角色信息1.add(卡家族解救, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 500, 130, 30));

        脸型.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        脸型.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                脸型ActionPerformed(evt);
            }
        });
        角色信息1.add(脸型, new org.netbeans.lib.awtextra.AbsoluteConstraints(760, 500, 60, 30));

        发型.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        发型.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发型ActionPerformed(evt);
            }
        });
        角色信息1.add(发型, new org.netbeans.lib.awtextra.AbsoluteConstraints(690, 500, 60, 30));

        jLabel214.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel214.setText("所在地图；");
        角色信息1.add(jLabel214, new org.netbeans.lib.awtextra.AbsoluteConstraints(650, 570, -1, -1));

        离线角色.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        离线角色.setText("离线角色");
        离线角色.setToolTipText("显示所有GM管理员");
        离线角色.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                离线角色ActionPerformed(evt);
            }
        });
        角色信息1.add(离线角色, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 530, 110, 30));

        在线角色.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        在线角色.setText("在线角色");
        在线角色.setToolTipText("显示所有GM管理员");
        在线角色.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                在线角色ActionPerformed(evt);
            }
        });
        角色信息1.add(在线角色, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 500, 110, 30));

        显示在线玩家.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        角色信息1.add(显示在线玩家, new org.netbeans.lib.awtextra.AbsoluteConstraints(1110, 495, 130, 30));

        jTabbedPane8.addTab("角色信息", 角色信息1);

        角色背包.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jTabbedPane5.setBackground(new java.awt.Color(255, 255, 255));
        jTabbedPane5.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N

        jPanel39.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "角色穿戴装备信息", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel39.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色背包穿戴.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色背包穿戴.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色背包穿戴.getTableHeader().setReorderingAllowed(false);
        jScrollPane15.setViewportView(角色背包穿戴);

        jPanel39.add(jScrollPane15, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 40, 860, 480));

        背包物品名字1.setEditable(false);
        背包物品名字1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                背包物品名字1ActionPerformed(evt);
            }
        });
        jPanel39.add(背包物品名字1, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 550, 150, 30));

        身上穿戴序号1.setEditable(false);
        身上穿戴序号1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                身上穿戴序号1ActionPerformed(evt);
            }
        });
        jPanel39.add(身上穿戴序号1, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 550, 110, 30));

        背包物品代码1.setEditable(false);
        背包物品代码1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                背包物品代码1ActionPerformed(evt);
            }
        });
        jPanel39.add(背包物品代码1, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 550, 110, 30));

        jLabel276.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel276.setText("序号；");
        jPanel39.add(jLabel276, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 530, -1, 20));

        jLabel283.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel283.setText("物品名字；");
        jPanel39.add(jLabel283, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 530, -1, 20));

        jLabel287.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel287.setText("物品代码；");
        jPanel39.add(jLabel287, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 530, -1, 20));

        删除穿戴装备.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除穿戴装备.setText("删除");
        删除穿戴装备.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除穿戴装备ActionPerformed(evt);
            }
        });
        jPanel39.add(删除穿戴装备, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 550, -1, 30));

        jTabbedPane5.addTab("身上穿戴", jPanel39);

        jPanel40.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "装备背包", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel40.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色装备背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色装备背包.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色装备背包.getTableHeader().setReorderingAllowed(false);
        jScrollPane16.setViewportView(角色装备背包);

        jPanel40.add(jScrollPane16, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 40, 850, 480));

        装备背包物品名字.setEditable(false);
        装备背包物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                装备背包物品名字ActionPerformed(evt);
            }
        });
        jPanel40.add(装备背包物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 550, 150, 30));

        装备背包物品序号.setEditable(false);
        装备背包物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                装备背包物品序号ActionPerformed(evt);
            }
        });
        jPanel40.add(装备背包物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 550, 110, 30));

        装备背包物品代码.setEditable(false);
        装备背包物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                装备背包物品代码ActionPerformed(evt);
            }
        });
        jPanel40.add(装备背包物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 550, 110, 30));

        jLabel288.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel288.setText("序号；");
        jPanel40.add(jLabel288, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 530, -1, 20));

        jLabel289.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel289.setText("物品名字；");
        jPanel40.add(jLabel289, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 530, -1, 20));

        jLabel290.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel290.setText("物品代码；");
        jPanel40.add(jLabel290, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 530, -1, 20));

        删除装备背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除装备背包.setText("删除");
        删除装备背包.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除装备背包ActionPerformed(evt);
            }
        });
        jPanel40.add(删除装备背包, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 550, -1, 30));

        jTabbedPane5.addTab("装备背包", jPanel40);

        jPanel41.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "消耗背包", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel41.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色消耗背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色消耗背包.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色消耗背包.getTableHeader().setReorderingAllowed(false);
        jScrollPane17.setViewportView(角色消耗背包);

        jPanel41.add(jScrollPane17, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        消耗背包物品名字.setEditable(false);
        消耗背包物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                消耗背包物品名字ActionPerformed(evt);
            }
        });
        jPanel41.add(消耗背包物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(450, 550, 150, 30));

        消耗背包物品序号.setEditable(false);
        消耗背包物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                消耗背包物品序号ActionPerformed(evt);
            }
        });
        jPanel41.add(消耗背包物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 550, 110, 30));

        消耗背包物品代码.setEditable(false);
        消耗背包物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                消耗背包物品代码ActionPerformed(evt);
            }
        });
        jPanel41.add(消耗背包物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 550, 110, 30));

        jLabel291.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel291.setText("序号；");
        jPanel41.add(jLabel291, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 530, -1, 20));

        jLabel292.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel292.setText("物品名字；");
        jPanel41.add(jLabel292, new org.netbeans.lib.awtextra.AbsoluteConstraints(450, 530, -1, 20));

        jLabel293.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel293.setText("物品代码；");
        jPanel41.add(jLabel293, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 530, -1, 20));

        删除消耗背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除消耗背包.setText("删除");
        删除消耗背包.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除消耗背包ActionPerformed(evt);
            }
        });
        jPanel41.add(删除消耗背包, new org.netbeans.lib.awtextra.AbsoluteConstraints(610, 550, -1, 30));

        jTabbedPane5.addTab("消耗背包", jPanel41);

        jPanel42.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "设置背包", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel42.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色设置背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色设置背包.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色设置背包.getTableHeader().setReorderingAllowed(false);
        jScrollPane18.setViewportView(角色设置背包);

        jPanel42.add(jScrollPane18, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        设置背包物品名字.setEditable(false);
        设置背包物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                设置背包物品名字ActionPerformed(evt);
            }
        });
        jPanel42.add(设置背包物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(450, 550, 150, 30));

        设置背包物品序号.setEditable(false);
        设置背包物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                设置背包物品序号ActionPerformed(evt);
            }
        });
        jPanel42.add(设置背包物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 550, 110, 30));

        设置背包物品代码.setEditable(false);
        设置背包物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                设置背包物品代码ActionPerformed(evt);
            }
        });
        jPanel42.add(设置背包物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 550, 110, 30));

        jLabel294.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel294.setText("序号；");
        jPanel42.add(jLabel294, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 530, -1, 20));

        jLabel295.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel295.setText("物品名字；");
        jPanel42.add(jLabel295, new org.netbeans.lib.awtextra.AbsoluteConstraints(450, 530, -1, 20));

        jLabel296.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel296.setText("物品代码；");
        jPanel42.add(jLabel296, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 530, -1, 20));

        删除设置背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除设置背包.setText("删除");
        删除设置背包.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除设置背包ActionPerformed(evt);
            }
        });
        jPanel42.add(删除设置背包, new org.netbeans.lib.awtextra.AbsoluteConstraints(610, 550, -1, 30));

        jTabbedPane5.addTab("设置背包", jPanel42);

        jPanel43.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "其他背包", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel43.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色其他背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色其他背包.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色其他背包.getTableHeader().setReorderingAllowed(false);
        jScrollPane19.setViewportView(角色其他背包);

        jPanel43.add(jScrollPane19, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        其他背包物品名字.setEditable(false);
        其他背包物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                其他背包物品名字ActionPerformed(evt);
            }
        });
        jPanel43.add(其他背包物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(450, 550, 150, 30));

        其他背包物品序号.setEditable(false);
        其他背包物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                其他背包物品序号ActionPerformed(evt);
            }
        });
        jPanel43.add(其他背包物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 550, 110, 30));

        其他背包物品代码.setEditable(false);
        其他背包物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                其他背包物品代码ActionPerformed(evt);
            }
        });
        jPanel43.add(其他背包物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 550, 110, 30));

        jLabel297.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel297.setText("序号；");
        jPanel43.add(jLabel297, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 530, -1, 20));

        jLabel298.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel298.setText("物品名字；");
        jPanel43.add(jLabel298, new org.netbeans.lib.awtextra.AbsoluteConstraints(450, 530, -1, 20));

        jLabel299.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel299.setText("物品代码；");
        jPanel43.add(jLabel299, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 530, -1, 20));

        删除其他背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除其他背包.setText("删除");
        删除其他背包.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除其他背包ActionPerformed(evt);
            }
        });
        jPanel43.add(删除其他背包, new org.netbeans.lib.awtextra.AbsoluteConstraints(610, 550, -1, 30));

        jTabbedPane5.addTab("其他背包", jPanel43);

        jPanel44.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "特殊背包", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel44.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色特殊背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色特殊背包.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色特殊背包.getTableHeader().setReorderingAllowed(false);
        jScrollPane20.setViewportView(角色特殊背包);

        jPanel44.add(jScrollPane20, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        特殊背包物品名字.setEditable(false);
        特殊背包物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                特殊背包物品名字ActionPerformed(evt);
            }
        });
        jPanel44.add(特殊背包物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 550, 150, 30));

        特殊背包物品序号.setEditable(false);
        特殊背包物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                特殊背包物品序号ActionPerformed(evt);
            }
        });
        jPanel44.add(特殊背包物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 550, 110, 30));

        特殊背包物品代码.setEditable(false);
        特殊背包物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                特殊背包物品代码ActionPerformed(evt);
            }
        });
        jPanel44.add(特殊背包物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 550, 110, 30));

        jLabel300.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel300.setText("序号；");
        jPanel44.add(jLabel300, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 530, -1, 20));

        jLabel301.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel301.setText("物品名字；");
        jPanel44.add(jLabel301, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 530, -1, 20));

        jLabel302.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel302.setText("物品代码；");
        jPanel44.add(jLabel302, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 530, -1, 20));

        删除特殊背包.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除特殊背包.setText("删除");
        删除特殊背包.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除特殊背包ActionPerformed(evt);
            }
        });
        jPanel44.add(删除特殊背包, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 550, -1, 30));

        jTabbedPane5.addTab("特殊背包", jPanel44);

        jPanel45.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "游戏仓库", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel45.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色游戏仓库.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色游戏仓库.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色游戏仓库.getTableHeader().setReorderingAllowed(false);
        jScrollPane21.setViewportView(角色游戏仓库);

        jPanel45.add(jScrollPane21, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        游戏仓库物品名字.setEditable(false);
        游戏仓库物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                游戏仓库物品名字ActionPerformed(evt);
            }
        });
        jPanel45.add(游戏仓库物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(430, 550, 150, 30));

        游戏仓库物品序号.setEditable(false);
        游戏仓库物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                游戏仓库物品序号ActionPerformed(evt);
            }
        });
        jPanel45.add(游戏仓库物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 550, 110, 30));

        游戏仓库物品代码.setEditable(false);
        游戏仓库物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                游戏仓库物品代码ActionPerformed(evt);
            }
        });
        jPanel45.add(游戏仓库物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 550, 110, 30));

        jLabel303.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel303.setText("序号；");
        jPanel45.add(jLabel303, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 530, -1, 20));

        jLabel304.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel304.setText("物品名字；");
        jPanel45.add(jLabel304, new org.netbeans.lib.awtextra.AbsoluteConstraints(430, 530, -1, 20));

        jLabel305.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel305.setText("物品代码；");
        jPanel45.add(jLabel305, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 530, -1, 20));

        删除游戏仓库.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除游戏仓库.setText("删除");
        删除游戏仓库.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除游戏仓库ActionPerformed(evt);
            }
        });
        jPanel45.add(删除游戏仓库, new org.netbeans.lib.awtextra.AbsoluteConstraints(590, 550, -1, 30));

        jTabbedPane5.addTab("游戏仓库", jPanel45);

        jPanel46.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "商城仓库", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel46.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色商城仓库.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色商城仓库.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色商城仓库.getTableHeader().setReorderingAllowed(false);
        jScrollPane22.setViewportView(角色商城仓库);

        jPanel46.add(jScrollPane22, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        商城仓库物品名字.setEditable(false);
        商城仓库物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商城仓库物品名字ActionPerformed(evt);
            }
        });
        jPanel46.add(商城仓库物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(460, 550, 150, 30));

        商城仓库物品序号.setEditable(false);
        商城仓库物品序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商城仓库物品序号ActionPerformed(evt);
            }
        });
        jPanel46.add(商城仓库物品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 550, 110, 30));

        商城仓库物品代码.setEditable(false);
        商城仓库物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商城仓库物品代码ActionPerformed(evt);
            }
        });
        jPanel46.add(商城仓库物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 550, 110, 30));

        jLabel306.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel306.setText("序号；");
        jPanel46.add(jLabel306, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 530, -1, 20));

        jLabel307.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel307.setText("物品名字；");
        jPanel46.add(jLabel307, new org.netbeans.lib.awtextra.AbsoluteConstraints(460, 530, -1, 20));

        jLabel308.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel308.setText("物品代码；");
        jPanel46.add(jLabel308, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 530, -1, 20));

        删除商城仓库.setText("删除");
        删除商城仓库.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除商城仓库ActionPerformed(evt);
            }
        });
        jPanel46.add(删除商城仓库, new org.netbeans.lib.awtextra.AbsoluteConstraints(620, 550, -1, 30));

        jTabbedPane5.addTab("商城仓库", jPanel46);

        jPanel48.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "点券拍卖行", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel48.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色点券拍卖行.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色点券拍卖行.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字", "物品数量"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色点券拍卖行.getTableHeader().setReorderingAllowed(false);
        jScrollPane30.setViewportView(角色点券拍卖行);

        jPanel48.add(jScrollPane30, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        拍卖行物品名字1.setEditable(false);
        拍卖行物品名字1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                拍卖行物品名字1ActionPerformed(evt);
            }
        });
        jPanel48.add(拍卖行物品名字1, new org.netbeans.lib.awtextra.AbsoluteConstraints(460, 550, 150, 30));

        角色点券拍卖行序号.setEditable(false);
        角色点券拍卖行序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                角色点券拍卖行序号ActionPerformed(evt);
            }
        });
        jPanel48.add(角色点券拍卖行序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 550, 110, 30));

        拍卖行物品代码1.setEditable(false);
        拍卖行物品代码1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                拍卖行物品代码1ActionPerformed(evt);
            }
        });
        jPanel48.add(拍卖行物品代码1, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 550, 110, 30));

        jLabel354.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel354.setText("序号；");
        jPanel48.add(jLabel354, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 530, -1, 20));

        jLabel355.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel355.setText("物品名字；");
        jPanel48.add(jLabel355, new org.netbeans.lib.awtextra.AbsoluteConstraints(460, 530, -1, 20));

        jLabel356.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel356.setText("物品代码；");
        jPanel48.add(jLabel356, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 530, -1, 20));

        删除拍卖行1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除拍卖行1.setText("删除");
        删除拍卖行1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除拍卖行1ActionPerformed(evt);
            }
        });
        jPanel48.add(删除拍卖行1, new org.netbeans.lib.awtextra.AbsoluteConstraints(620, 550, -1, 30));

        jTabbedPane5.addTab("点券拍卖行", jPanel48);

        jPanel47.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "金币拍卖行", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        jPanel47.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        角色金币拍卖行.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        角色金币拍卖行.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "物品代码", "物品名字"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        角色金币拍卖行.getTableHeader().setReorderingAllowed(false);
        jScrollPane23.setViewportView(角色金币拍卖行);

        jPanel47.add(jScrollPane23, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 860, 490));

        拍卖行物品名字.setEditable(false);
        拍卖行物品名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                拍卖行物品名字ActionPerformed(evt);
            }
        });
        jPanel47.add(拍卖行物品名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 550, 150, 30));

        角色金币拍卖行序号.setEditable(false);
        角色金币拍卖行序号.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                角色金币拍卖行序号ActionPerformed(evt);
            }
        });
        jPanel47.add(角色金币拍卖行序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 550, 110, 30));

        拍卖行物品代码.setEditable(false);
        拍卖行物品代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                拍卖行物品代码ActionPerformed(evt);
            }
        });
        jPanel47.add(拍卖行物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 550, 110, 30));

        jLabel309.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel309.setText("序号；");
        jPanel47.add(jLabel309, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 530, -1, 20));

        jLabel310.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel310.setText("物品名字；");
        jPanel47.add(jLabel310, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 530, -1, 20));

        jLabel311.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel311.setText("物品代码；");
        jPanel47.add(jLabel311, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 530, -1, 20));

        删除拍卖行.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除拍卖行.setText("删除");
        删除拍卖行.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除拍卖行ActionPerformed(evt);
            }
        });
        jPanel47.add(删除拍卖行, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 550, -1, 30));

        jTabbedPane5.addTab("金币拍卖行", jPanel47);

        角色背包.add(jTabbedPane5, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 880, 640));

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 890, Short.MAX_VALUE)
        );
        jPanel2Layout.setVerticalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 730, Short.MAX_VALUE)
        );

        角色背包.add(jPanel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, -30, 890, 730));

        jTabbedPane8.addTab("角色道具信息", 角色背包);

        技能.setBackground(new java.awt.Color(255, 255, 255));
        技能.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "角色技能", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        技能.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        技能信息.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        技能信息.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "技能名字", "技能代码", "目前等级", "最高等级"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        技能信息.getTableHeader().setReorderingAllowed(false);
        jScrollPane14.setViewportView(技能信息);

        技能.add(jScrollPane14, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 870, 430));

        技能代码.setEditable(false);
        技能代码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        技能.add(技能代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 490, 120, 30));

        技能目前等级.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        技能.add(技能目前等级, new org.netbeans.lib.awtextra.AbsoluteConstraints(520, 490, 120, 30));

        技能最高等级.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        技能.add(技能最高等级, new org.netbeans.lib.awtextra.AbsoluteConstraints(650, 490, 120, 30));

        技能名字.setEditable(false);
        技能名字.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        技能名字.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                技能名字ActionPerformed(evt);
            }
        });
        技能.add(技能名字, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 490, 120, 30));

        jLabel86.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel86.setText("技能代码；");
        技能.add(jLabel86, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 470, -1, -1));

        jLabel89.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel89.setText("目前等级；");
        技能.add(jLabel89, new org.netbeans.lib.awtextra.AbsoluteConstraints(520, 470, -1, -1));

        jLabel107.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel107.setText("最高等级；");
        技能.add(jLabel107, new org.netbeans.lib.awtextra.AbsoluteConstraints(650, 470, -1, -1));

        修改技能.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        修改技能.setText("修改");
        修改技能.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改技能ActionPerformed(evt);
            }
        });
        技能.add(修改技能, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 530, 120, 40));

        技能序号.setEditable(false);
        技能序号.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        技能.add(技能序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 490, 80, 30));

        jLabel188.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel188.setText("技能名字；");
        技能.add(jLabel188, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 470, -1, -1));

        jLabel204.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel204.setText("序号；");
        技能.add(jLabel204, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 470, -1, -1));

        jLabel205.setFont(new java.awt.Font("幼圆", 0, 24)); // NOI18N
        jLabel205.setText("提示;技能无法超出正常范围值。");
        技能.add(jLabel205, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 580, 360, 30));

        删除技能.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除技能.setText("删除");
        删除技能.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除技能ActionPerformed(evt);
            }
        });
        技能.add(删除技能, new org.netbeans.lib.awtextra.AbsoluteConstraints(520, 530, 120, 40));

        修改技能1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        修改技能1.setText("刷新");
        修改技能1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改技能1ActionPerformed(evt);
            }
        });
        技能.add(修改技能1, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 530, 120, 40));

        jTabbedPane8.addTab("角色技能信息", 技能);

        jPanel50.setBackground(new java.awt.Color(255, 255, 255));

        家族信息.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族信息.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "家族ID", "家族名称", "族长/角色ID", "成员2", "成员3", "成员4", "成员5", "家族GP"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false, false, false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        家族信息.getTableHeader().setReorderingAllowed(false);
        jScrollPane24.setViewportView(家族信息);

        刷新家族信息.setText("刷新家族信息");
        刷新家族信息.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新家族信息ActionPerformed(evt);
            }
        });

        jLabel194.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel194.setText("家族ID；");

        家族ID.setEditable(false);
        家族ID.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族ID.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族IDActionPerformed(evt);
            }
        });

        家族名称.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族名称.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族名称ActionPerformed(evt);
            }
        });

        jLabel195.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel195.setText("家族名称；");

        家族族长.setEditable(false);
        家族族长.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族族长.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族族长ActionPerformed(evt);
            }
        });

        jLabel196.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel196.setText("家族族长；");

        jLabel198.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel198.setText("家族成员2；");

        家族成员2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族成员2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族成员2ActionPerformed(evt);
            }
        });

        jLabel199.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel199.setText("家族成员3；");

        家族成员3.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族成员3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族成员3ActionPerformed(evt);
            }
        });

        jLabel200.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel200.setText("家族成员4；");

        家族成员4.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族成员4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族成员4ActionPerformed(evt);
            }
        });

        jLabel313.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel313.setText("家族成员5；");

        家族成员5.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族成员5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族成员5ActionPerformed(evt);
            }
        });

        jLabel314.setFont(new java.awt.Font("幼圆", 0, 12)); // NOI18N
        jLabel314.setText("家族GP；");

        家族GP.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        家族GP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                家族GPActionPerformed(evt);
            }
        });

        jButton34.setText("更改家族GP点数");
        jButton34.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton34ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel50Layout = new javax.swing.GroupLayout(jPanel50);
        jPanel50.setLayout(jPanel50Layout);
        jPanel50Layout.setHorizontalGroup(
                jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel50Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jScrollPane24))
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel50Layout.createSequentialGroup()
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(刷新家族信息, javax.swing.GroupLayout.PREFERRED_SIZE, 206, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(26, 26, 26)
                                .addComponent(jButton34, javax.swing.GroupLayout.PREFERRED_SIZE, 176, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(280, 280, 280))
                        .addGroup(jPanel50Layout.createSequentialGroup()
                                .addGap(94, 94, 94)
                                .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addComponent(jLabel194, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(家族ID, javax.swing.GroupLayout.PREFERRED_SIZE, 48, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel50Layout.createSequentialGroup()
                                                .addComponent(家族名称, javax.swing.GroupLayout.PREFERRED_SIZE, 87, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(家族族长, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(家族成员2, javax.swing.GroupLayout.PREFERRED_SIZE, 67, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(家族成员3, javax.swing.GroupLayout.PREFERRED_SIZE, 67, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(家族成员4, javax.swing.GroupLayout.PREFERRED_SIZE, 67, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel50Layout.createSequentialGroup()
                                                .addComponent(jLabel195)
                                                .addGap(35, 35, 35)
                                                .addComponent(jLabel196)
                                                .addGap(26, 26, 26)
                                                .addComponent(jLabel198)
                                                .addGap(18, 18, 18)
                                                .addComponent(jLabel199)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(jLabel200)))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel50Layout.createSequentialGroup()
                                                .addComponent(家族成员5, javax.swing.GroupLayout.PREFERRED_SIZE, 67, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(18, 18, 18)
                                                .addComponent(家族GP, javax.swing.GroupLayout.PREFERRED_SIZE, 83, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel50Layout.createSequentialGroup()
                                                .addComponent(jLabel313)
                                                .addGap(18, 18, 18)
                                                .addComponent(jLabel314)))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel50Layout.setVerticalGroup(
                jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel50Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jScrollPane24, javax.swing.GroupLayout.DEFAULT_SIZE, 549, Short.MAX_VALUE)
                                .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(jLabel194)
                                                .addComponent(jLabel195)
                                                .addComponent(jLabel196)
                                                .addComponent(jLabel198)
                                                .addComponent(jLabel199)
                                                .addComponent(jLabel200)
                                                .addComponent(jLabel313)
                                                .addComponent(jLabel314))
                                        .addGroup(jPanel50Layout.createSequentialGroup()
                                                .addGap(20, 20, 20)
                                                .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(家族ID, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族名称, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族族长, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族成员2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族成员3, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族成员4, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族成员5, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(家族GP, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(22, 22, 22)
                                .addGroup(jPanel50Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(刷新家族信息, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton34, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(20, 20, 20))
        );

        jTabbedPane8.addTab("游戏家族", jPanel50);

        jPanel65.setBackground(new java.awt.Color(255, 255, 255));
        jPanel65.setBorder(javax.swing.BorderFactory.createTitledBorder("MAC/IP封禁"));

        封IP.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        封IP.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序列号", "IP地址"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane107.setViewportView(封IP);

        封MAC.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        封MAC.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序列号", "MAC地址"
                }
        ) {
            final boolean[] canEdit = new boolean[]{
                    false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane108.setViewportView(封MAC);

        刷新封IP.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新封IP.setText("刷新");
        刷新封IP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新封IPActionPerformed(evt);
            }
        });

        刷新封MAC.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新封MAC.setText("刷新");
        刷新封MAC.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新封MACActionPerformed(evt);
            }
        });

        删除MAC.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除MAC.setText("删除");
        删除MAC.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除MACActionPerformed(evt);
            }
        });

        删除IP.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除IP.setText("删除");
        删除IP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除IPActionPerformed(evt);
            }
        });

        jLabel346.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel346.setText("序号；");

        jLabel347.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel347.setText("序号；");

        javax.swing.GroupLayout jPanel65Layout = new javax.swing.GroupLayout(jPanel65);
        jPanel65.setLayout(jPanel65Layout);
        jPanel65Layout.setHorizontalGroup(
                jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel65Layout.createSequentialGroup()
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(jLabel347)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(删MAC代码, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(10, 10, 10)
                                .addComponent(删除MAC, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(刷新封MAC, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(101, 101, 101)
                                .addComponent(jLabel346)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(删除IP代码, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(10, 10, 10)
                                .addComponent(删除IP, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(刷新封IP, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(160, 160, 160))
                        .addGroup(jPanel65Layout.createSequentialGroup()
                                .addComponent(jScrollPane108, javax.swing.GroupLayout.PREFERRED_SIZE, 437, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jScrollPane107, javax.swing.GroupLayout.PREFERRED_SIZE, 0, Short.MAX_VALUE)
                                .addContainerGap())
        );
        jPanel65Layout.setVerticalGroup(
                jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel65Layout.createSequentialGroup()
                                .addGroup(jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addComponent(jScrollPane108, javax.swing.GroupLayout.DEFAULT_SIZE, 506, Short.MAX_VALUE)
                                        .addComponent(jScrollPane107))
                                .addGap(20, 20, 20)
                                .addGroup(jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(删MAC代码, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addComponent(jLabel347, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(删除MAC, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(刷新封MAC, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel65Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(删除IP代码, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addComponent(jLabel346, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(删除IP, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(刷新封IP, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jTabbedPane8.addTab("MAC/IP封禁", jPanel65);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jTabbedPane8, javax.swing.GroupLayout.PREFERRED_SIZE, 892, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jTabbedPane8, javax.swing.GroupLayout.PREFERRED_SIZE, 728, Short.MAX_VALUE)
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void 修改账号点券抵用ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改账号点券抵用ActionPerformed
        boolean result1 = this.点券.getText().matches("[0-9]+");
        boolean result2 = this.抵用.getText().matches("[0-9]+");
        boolean result3 = this.管理1.getText().matches("[0-9]+");
        boolean result4 = this.QQ.getText().matches("[0-9]+");
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        if (result1 && result2 && result3 && result4) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE accounts SET ACash = ?, mPoints = ?, gm = ?, qq = ? WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM accounts  WHERE id = ? ");
                ps1.setInt(1, Integer.parseInt(this.账号ID.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2 = null;
                    String sqlString3 = null;
                    String sqlString4 = null;
                    String sqlString5 = null;
                    sqlString2 = "update accounts set ACash=" + Integer.parseInt(this.点券.getText()) + " where id ='" + Integer.parseInt(this.账号ID.getText()) + "';";
                    PreparedStatement priority = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    priority.executeUpdate(sqlString2);
                    sqlString3 = "update accounts set mPoints=" + Integer.parseInt(this.抵用.getText()) + " where id='" + Integer.parseInt(this.账号ID.getText()) + "';";
                    PreparedStatement period = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString3);
                    period.executeUpdate(sqlString3);
                    sqlString4 = "update accounts set gm=" + Integer.parseInt(this.管理1.getText()) + " where id='" + Integer.parseInt(this.账号ID.getText()) + "';";
                    PreparedStatement gm = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString4);
                    gm.executeUpdate(sqlString4);
                    sqlString5 = "update accounts set qq=" + Integer.parseInt(this.QQ.getText()) + " where id='" + Integer.parseInt(this.账号ID.getText()) + "';";
                    PreparedStatement qq = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString5);
                    qq.executeUpdate(sqlString5);
                    刷新账号信息();
                    账号提示语言.setText("[信息]:修改账号 " + this.账号操作.getText() + " / 点券→" + Integer.parseInt(this.点券.getText()) + " / 抵用券→" + Integer.parseInt(this.抵用.getText()) + " 成功。");
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            账号提示语言.setText("[信息]:请选择要修改的账号,数据不能为空，或者数值填写不对。");
        }
    }//GEN-LAST:event_修改账号点券抵用ActionPerformed

    private void 注册的账号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_注册的账号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_注册的账号ActionPerformed

    private void 注册的密码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_注册的密码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_注册的密码ActionPerformed

    private void jButton35ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton35ActionPerformed
        注册新账号();        // TODO add your handling code here:
    }//GEN-LAST:event_jButton35ActionPerformed

    private void jButton32ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton32ActionPerformed
        ChangePassWord();
    }//GEN-LAST:event_jButton32ActionPerformed

    private void 刷新账号信息ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新账号信息ActionPerformed
        账号提示语言.setText("[信息]:显示游戏所有玩家账号信息。");
        刷新账号信息();
        显示在线账号.setText("账号在线; " + 在线账号() + "");
    }//GEN-LAST:event_刷新账号信息ActionPerformed

    private void 离线账号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_离线账号ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        账号提示语言.setText("[信息]:显示游戏所有离线玩家账号信息。");
        for (int i = this.账号信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.账号信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM accounts  WHERE loggedin = 0 ");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 封号 = "";
                if (rs.getInt("banned") == 0) {
                    封号 = "正常";
                } else {
                    封号 = "封禁";
                }
                String 在线 = "";
                if (rs.getInt("loggedin") == 0) {
                    在线 = "不在线";
                } else {
                    在线 = "在线";
                }
                String QQ = "";
                if (rs.getString("qq") != null) {
                    QQ = rs.getString("qq");
                } else {
                    QQ = "未绑定QQ";
                }
                ((DefaultTableModel) 账号信息.getModel()).insertRow(账号信息.getRowCount(), new Object[]{
                        rs.getInt("id"), //账号ID
                        rs.getString("name"), //账号
                        rs.getString("SessionIP"), //账号IP地址
                        rs.getString("macs"), ///账号MAC地址
                        QQ,//注册时间
                        rs.getInt("ACash"),//点券
                        rs.getInt("mPoints"),//抵用
                        rs.getString("lastlogin"),//最近上线
                        在线,
                        封号,
                        rs.getInt("gm")
                });

            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        读取显示账号();
    }//GEN-LAST:event_离线账号ActionPerformed

    private void 解封ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_解封ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        if (账号操作.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "请输入需要解封的账号 ");
            return;
        }
        String account = 账号操作.getText();
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps;

            ps = con.prepareStatement("Update accounts set banned = ? Where name = ?");
            ps.setInt(1, 0);
            ps.setString(2, account);
            ps.execute();
            ps.close();
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + ex);
        }
        账号提示语言.setText("[信息]:解封账号 " + account + " 成功。");
        //JOptionPane.showMessageDialog(null, "账号解封成功");
        刷新账号信息();
    }//GEN-LAST:event_解封ActionPerformed

    private void 已封账号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_已封账号ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        账号提示语言.setText("[信息]:显示游戏所有已被封禁的玩家账号信息。");
        for (int i = this.账号信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.账号信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM accounts WHERE banned > 0 ");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 封号 = "";
                if (rs.getInt("banned") == 0) {
                    封号 = "正常";
                } else {
                    封号 = "封禁";
                }
                String 在线 = "";
                if (rs.getInt("loggedin") == 0) {
                    在线 = "不在线";
                } else {
                    在线 = "在线";
                }
                String QQ = "";
                if (rs.getString("qq") != null) {
                    QQ = rs.getString("qq");
                } else {
                    QQ = "未绑定QQ";
                }
                ((DefaultTableModel) 账号信息.getModel()).insertRow(账号信息.getRowCount(), new Object[]{
                        rs.getInt("id"), //账号ID
                        rs.getString("name"), //账号
                        rs.getString("SessionIP"), //账号IP地址
                        rs.getString("macs"), ///账号MAC地址
                        QQ,//注册时间
                        rs.getInt("ACash"),//点券
                        rs.getInt("mPoints"),//抵用
                        rs.getString("lastlogin"),//最近上线
                        在线,
                        封号,
                        rs.getInt("gm")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        读取显示账号();
    }//GEN-LAST:event_已封账号ActionPerformed

    private void 在线账号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_在线账号ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        账号提示语言.setText("[信息]:显示游戏所有在线玩家账号信息。");
        for (int i = this.账号信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.账号信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM accounts  WHERE loggedin > 0 ");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 封号 = "";
                if (rs.getInt("banned") == 0) {
                    封号 = "正常";
                } else {
                    封号 = "封禁";
                }
                String 在线 = "";
                if (rs.getInt("loggedin") == 0) {
                    在线 = "不在线";
                } else {
                    在线 = "在线";
                }
                String QQ = "";
                if (rs.getString("qq") != null) {
                    QQ = rs.getString("qq");
                } else {
                    QQ = "未绑定QQ";
                }
                ((DefaultTableModel) 账号信息.getModel()).insertRow(账号信息.getRowCount(), new Object[]{
                        rs.getInt("id"), //账号ID
                        rs.getString("name"), //账号
                        rs.getString("SessionIP"), //账号IP地址
                        rs.getString("macs"), ///账号MAC地址
                        QQ,//注册时间
                        rs.getInt("ACash"),//点券
                        rs.getInt("mPoints"),//抵用
                        rs.getString("lastlogin"),//最近上线
                        在线,
                        封号,
                        rs.getInt("gm")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        读取显示账号();
    }//GEN-LAST:event_在线账号ActionPerformed

    private void 删除账号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除账号ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        try {
            int n = JOptionPane.showConfirmDialog(this, "你确定要删除这个账号吗？", "信息", JOptionPane.YES_NO_OPTION);
            if (n == JOptionPane.YES_OPTION) {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM accounts ");
                //ps1.setInt(1, Integer.parseInt(this.账号信息.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " Delete from accounts where name ='" + this.账号操作.getText() + "'";
                    账号提示语言.setText("[信息]:删除账号 " + this.账号操作.getText() + " 成功。");
                    ps1.executeUpdate(sqlstr);
                    刷新账号信息();
                }
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_删除账号ActionPerformed

    private void 封锁账号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_封锁账号ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        if (账号操作.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "请输入需要封锁的账号 ");
            return;
        }
        String account = 账号操作.getText();
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps;

            ps = con.prepareStatement("Update accounts set banned = ? Where name = ?");
            ps.setInt(1, 1);
            ps.setString(2, account);
            ps.execute();
            ps.close();
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + ex);
        }
        账号提示语言.setText("[信息]:封锁账号 " + this.账号操作.getText() + " 成功。");
        刷新账号信息();
    }//GEN-LAST:event_封锁账号ActionPerformed

    private void 解卡ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_解卡ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        if (账号操作.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "请输入需要解卡的账号 ");
            return;
        }
        String account = 账号操作.getText();
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps;

            ps = con.prepareStatement("Update accounts set loggedin = ? Where name = ?");
            ps.setInt(1, 0);
            ps.setString(2, account);
            ps.execute();
            ps.close();
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + ex);
        }
        账号提示语言.setText("[信息]:解卡账号 " + this.账号操作.getText() + " 成功。");
        刷新账号信息();
    }//GEN-LAST:event_解卡ActionPerformed

    private void jButton12ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton12ActionPerformed
        显示在线账号.setText("账号在线; " + 在线账号() + "");
        查找账号();
    }//GEN-LAST:event_jButton12ActionPerformed

    private void 刷新角色信息ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新角色信息ActionPerformed
        JOptionPane.showMessageDialog(null, "[信息]:显示游戏所有玩家角色信息。");
        刷新角色信息();
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
    }//GEN-LAST:event_刷新角色信息ActionPerformed

    private void 显示管理角色ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_显示管理角色ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        for (int i = this.角色信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM characters  WHERE gm >0 ");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 在线 = "";
                if (World.Find.findChannel(rs.getString("name")) > 0) {
                    在线 = "在线";
                } else {
                    在线 = "离线";
                }
                ((DefaultTableModel) 角色信息.getModel()).insertRow(角色信息.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        rs.getInt("accountid"),
                        rs.getString("name"),
                        getJobNameById(rs.getInt("job")),
                        rs.getInt("level"),
                        rs.getInt("str"),
                        rs.getInt("dex"),
                        rs.getInt("int"),
                        rs.getInt("luk"),
                        rs.getInt("maxhp"),
                        rs.getInt("maxmp"),
                        rs.getInt("meso"),
                        rs.getInt("map"),
                        在线,
                        rs.getInt("gm"),
                        rs.getInt("hair"),
                        rs.getInt("face"
                        )});
            }
            JOptionPane.showMessageDialog(null, "[信息]:显示游戏所有管理员角色信息。");
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_显示管理角色ActionPerformed

    private void jButton38ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton38ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean A = this.等级.getText().matches("[0-9]+");
        boolean B = this.GM.getText().matches("[0-9]+");
        boolean C = this.地图.getText().matches("[0-9]+");
        boolean D = this.金币1.getText().matches("[0-9]+");
        boolean E = this.MP.getText().matches("[0-9]+");
        boolean F = this.HP.getText().matches("[0-9]+");
        boolean G = this.运气.getText().matches("[0-9]+");
        boolean H = this.智力.getText().matches("[0-9]+");
        boolean Y = this.敏捷.getText().matches("[0-9]+");
        boolean J = this.力量.getText().matches("[0-9]+");
        if (角色昵称.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "角色昵称不能留空");
            return;
        }
        if (World.Find.findChannel(角色昵称.getText()) > 0) {
            JOptionPane.showMessageDialog(null, "请先将角色离线后再修改。");
            return;
        }
        int n = JOptionPane.showConfirmDialog(this, "你确定要修改这个角色吗？", "信息", JOptionPane.YES_NO_OPTION);
        if (n != JOptionPane.YES_OPTION) {
            return;
        }
        try {
            ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE characters SET (name = ?,level = ?, str = ?, dex = ?, luk = ?,int = ?,  maxhp = ?, maxmp = ?, meso = ?, map = ?, gm = ?, hair = ?, face = ? )WHERE id = ?");
            ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM characters WHERE id = ?");
            ps1.setInt(1, Integer.parseInt(this.角色ID.getText()));
            rs = ps1.executeQuery();
            if (rs.next()) {
                String sqlString1 = null;
                String sqlString2 = null;
                String sqlString3 = null;
                String sqlString4 = null;
                String sqlString5 = null;
                String sqlString6 = null;
                String sqlString7 = null;
                String sqlString8 = null;
                String sqlString9 = null;
                String sqlString10 = null;
                String sqlString11 = null;
                String sqlString12 = null;
                String sqlString13 = null;
                sqlString1 = "update characters set name='" + this.角色昵称.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement name = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                name.executeUpdate(sqlString1);
                sqlString2 = "update characters set level='" + this.等级.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement level = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                level.executeUpdate(sqlString2);

                sqlString3 = "update characters set str='" + this.力量.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement str = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString3);
                str.executeUpdate(sqlString3);

                sqlString4 = "update characters set dex='" + this.敏捷.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement dex = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString4);
                dex.executeUpdate(sqlString4);

                sqlString5 = "update characters set luk='" + this.智力.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement luk = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString5);
                luk.executeUpdate(sqlString5);

                sqlString6 = "update characters set `int`='" + this.运气.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement executeUpdate = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString6);
                executeUpdate.executeUpdate(sqlString6);

                sqlString7 = "update characters set maxhp='" + this.HP.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement maxhp = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString7);
                maxhp.executeUpdate(sqlString7);

                sqlString8 = "update characters set maxmp='" + this.MP.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement maxmp = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString8);
                maxmp.executeUpdate(sqlString8);

                sqlString9 = "update characters set meso='" + this.金币1.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement meso = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString9);
                meso.executeUpdate(sqlString9);

                sqlString10 = "update characters set map='" + this.地图.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement map = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString10);
                map.executeUpdate(sqlString10);

                sqlString11 = "update characters set gm='" + this.GM.getText() + "' where id=" + this.角色ID.getText() + ";";
                PreparedStatement gm = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString11);
                gm.executeUpdate(sqlString11);

                sqlString12 = "update characters set hair='" + this.发型.getText() + "' where id=" + this.发型.getText() + ";";
                PreparedStatement hair = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString12);
                hair.executeUpdate(sqlString12);

                sqlString13 = "update characters set face='" + this.脸型.getText() + "' where id=" + this.脸型.getText() + ";";
                PreparedStatement face = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString13);
                face.executeUpdate(sqlString13);
                JOptionPane.showMessageDialog(null, "[信息]:角色信息修改成功。");
                刷新角色信息();
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_jButton38ActionPerformed

    private void 删除角色ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除角色ActionPerformed
        String 输出 = "";
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.角色ID.getText().matches("[0-9]+");

        if (result1) {
            int n = JOptionPane.showConfirmDialog(this, "你确定要删除这个角色吗？", "信息", JOptionPane.YES_NO_OPTION);
            if (n == JOptionPane.YES_OPTION) {
                try {
                    ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM characters WHERE id = ?");
                    ps1.setInt(1, Integer.parseInt(this.角色ID.getText()));
                    rs = ps1.executeQuery();
                    if (rs.next()) {
                        String sqlstr = " delete from characters where id =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr);
                        String sqlstr2 = " delete from inventoryitems where characterid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr2);
                        String sqlstr3 = " delete from auctionitems where characterid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr3);
                        String sqlstr31 = " delete from auctionitems1 where characterid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr31);
                        String sqlstr4 = " delete from csitems where accountid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr4);
                        String sqlstr5 = " delete from bank_item where cid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr5);
                        String sqlstr6 = " delete from bossrank where cid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr6);
                        String sqlstr7 = " delete from skills where characterid =" + Integer.parseInt(this.角色ID.getText()) + "";
                        ps1.executeUpdate(sqlstr7);
                        JOptionPane.showMessageDialog(null, "[信息]:成功删除角色 " + Integer.parseInt(this.角色ID.getText()) + " ，以及所有相关信息。");
                        刷新角色信息();
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择删除的角色。");
        }
    }//GEN-LAST:event_删除角色ActionPerformed

    private void 角色昵称ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色昵称ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色昵称ActionPerformed

    private void 等级ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_等级ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_等级ActionPerformed

    private void 力量ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_力量ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_力量ActionPerformed

    private void 敏捷ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_敏捷ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_敏捷ActionPerformed

    private void 智力ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_智力ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_智力ActionPerformed

    private void 运气ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_运气ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_运气ActionPerformed

    private void HPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_HPActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_HPActionPerformed

    private void MPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_MPActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_MPActionPerformed

    private void 金币1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_金币1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_金币1ActionPerformed

    private void 地图ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_地图ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_地图ActionPerformed

    private void GMActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_GMActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_GMActionPerformed

    private void 角色IDActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色IDActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色IDActionPerformed

    private void 卡号自救1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_卡号自救1ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.角色ID.getText().matches("[0-9]+");
        if (result1) {
            int n = JOptionPane.showConfirmDialog(this, "你确定要解卡发型脸型自救这个角色吗？", "信息", JOptionPane.YES_NO_OPTION);
            if (n != JOptionPane.YES_OPTION) {
                return;
            }
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE characters SET (hair = ?,face = ?)WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM characters WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.角色ID.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    String sqlString2 = null;
                    sqlString1 = "update characters set hair='30000' where id=" + this.角色ID.getText() + ";";
                    PreparedStatement hair = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    hair.executeUpdate(sqlString1);
                    sqlString2 = "update characters set face='20000' where id=" + this.角色ID.getText() + ";";
                    PreparedStatement face = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    face.executeUpdate(sqlString2);
                    JOptionPane.showMessageDialog(null, "[信息]:解救成功，发型脸型初始化。");
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择卡发型脸型的角色。");
        }
    }//GEN-LAST:event_卡号自救1ActionPerformed

    private void 卡号自救2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_卡号自救2ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        String 输出 = "";
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.角色ID.getText().matches("[0-9]+");
        if (result1) {
            int n = JOptionPane.showConfirmDialog(this, "你确定要解卡物品自救这个角色吗？", "信息", JOptionPane.YES_NO_OPTION);
            if (n != JOptionPane.YES_OPTION) {
                return;
            }
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE characterid = ?");
                ps1.setInt(1, Integer.parseInt(this.角色ID.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr2 = " delete from inventoryitems where characterid =" + Integer.parseInt(this.角色ID.getText()) + "";
                    ps1.executeUpdate(sqlstr2);
                    JOptionPane.showMessageDialog(null, "[信息]:角色已经进行38处理。");
                    刷新角色信息();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }

        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择要38处理的角色。");
        }
    }//GEN-LAST:event_卡号自救2ActionPerformed

    private void 查看技能ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查看技能ActionPerformed

        JOptionPane.showMessageDialog(null, "[信息]:查看玩家技能信息。");
        刷新技能信息();
    }//GEN-LAST:event_查看技能ActionPerformed

    private void 查看背包ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查看背包ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        boolean result1 = this.角色ID.getText().matches("[0-9]+");
        if (!result1) {
            JOptionPane.showMessageDialog(null, "[信息]:请选择角色。");
            return;
        }
        if (账号ID.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "[信息]:请先选择账号，再选择账号下的角色，接下来才可以查看游戏仓库。");
            return;
        }
        JOptionPane.showMessageDialog(null, "[信息]:查询速度跟角色信息量有关，请耐心等候。");
        刷新角色背包穿戴();
        刷新角色装备背包();
        刷新角色消耗背包();
        刷新角色设置背包();
        刷新角色其他背包();
        刷新角色特殊背包();
        刷新角色游戏仓库();
        刷新角色商城仓库();
        //        刷新角色金币拍卖行();
        //        刷新角色点券拍卖行();
        JOptionPane.showMessageDialog(null, "[信息]:请转到角色道具信息面板查看。");
    }//GEN-LAST:event_查看背包ActionPerformed

    private void 卡家族解救ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_卡家族解救ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.角色ID.getText().matches("[0-9]+");
        if (result1) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE characters SET (guildid = ?,guildrank = ?,allianceRank = ?)WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM characters WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.角色ID.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    String sqlString2 = null;
                    String sqlString3 = null;
                    sqlString1 = "update characters set guildid='0' where id=" + this.角色ID.getText() + ";";
                    PreparedStatement hair = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    hair.executeUpdate(sqlString1);
                    sqlString2 = "update characters set guildrank='5' where id=" + this.角色ID.getText() + ";";
                    PreparedStatement face = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    face.executeUpdate(sqlString2);
                    sqlString3 = "update characters set allianceRank='5' where id=" + this.角色ID.getText() + ";";
                    PreparedStatement allianceRank = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString3);
                    allianceRank.executeUpdate(sqlString3);
                    JOptionPane.showMessageDialog(null, "[信息]:解卡家族角色成功。");
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择卡家族的角色。");
        }
    }//GEN-LAST:event_卡家族解救ActionPerformed

    private void 脸型ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_脸型ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_脸型ActionPerformed

    private void 发型ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发型ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_发型ActionPerformed

    private void 离线角色ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_离线角色ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        for (int i = this.角色信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM characters order by id desc");
            rs = ps.executeQuery();
            while (rs.next()) {
                if (World.Find.findChannel(rs.getString("name")) <= 0) {
                    ((DefaultTableModel) 角色信息.getModel()).insertRow(角色信息.getRowCount(), new Object[]{
                            rs.getInt("id"),
                            rs.getInt("accountid"),
                            rs.getString("name"),
                            getJobNameById(rs.getInt("job")),
                            rs.getInt("level"),
                            rs.getInt("str"),
                            rs.getInt("dex"),
                            rs.getInt("int"),
                            rs.getInt("luk"),
                            rs.getInt("maxhp"),
                            rs.getInt("maxmp"),
                            rs.getInt("meso"),
                            rs.getInt("map"),
                            "在线",
                            rs.getInt("gm"),
                            rs.getInt("hair"),
                            rs.getInt("face"
                            )});
                }
            }
            JOptionPane.showMessageDialog(null, "[信息]:显示游戏所有离线角色信息。");

        } catch (SQLException ex) {
            Logger.getLogger(Start.class
                    .getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_离线角色ActionPerformed

    private void 在线角色ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_在线角色ActionPerformed
        显示在线玩家.setText("在线玩家; " + 在线玩家() + "");
        for (int i = this.角色信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM characters order by id desc");
            rs = ps.executeQuery();
            while (rs.next()) {
                if (World.Find.findChannel(rs.getString("name")) > 0) {
                    ((DefaultTableModel) 角色信息.getModel()).insertRow(角色信息.getRowCount(), new Object[]{
                            rs.getInt("id"),
                            rs.getInt("accountid"),
                            rs.getString("name"),
                            getJobNameById(rs.getInt("job")),
                            rs.getInt("level"),
                            rs.getInt("str"),
                            rs.getInt("dex"),
                            rs.getInt("int"),
                            rs.getInt("luk"),
                            rs.getInt("maxhp"),
                            rs.getInt("maxmp"),
                            rs.getInt("meso"),
                            rs.getInt("map"),
                            "在线",
                            rs.getInt("gm"),
                            rs.getInt("hair"),
                            rs.getInt("face"
                            )});
                }
            }
            JOptionPane.showMessageDialog(null, "[信息]:显示游戏所有在线角色信息。");

        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_在线角色ActionPerformed

    private void 背包物品名字1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_背包物品名字1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_背包物品名字1ActionPerformed

    private void 身上穿戴序号1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_身上穿戴序号1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_身上穿戴序号1ActionPerformed

    private void 背包物品代码1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_背包物品代码1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_背包物品代码1ActionPerformed

    private void 删除穿戴装备ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除穿戴装备ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.身上穿戴序号1.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.身上穿戴序号1.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where inventoryitemid =" + Integer.parseInt(this.身上穿戴序号1.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色背包穿戴();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除穿戴装备ActionPerformed

    private void 装备背包物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_装备背包物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_装备背包物品名字ActionPerformed

    private void 装备背包物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_装备背包物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_装备背包物品序号ActionPerformed

    private void 装备背包物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_装备背包物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_装备背包物品代码ActionPerformed

    private void 删除装备背包ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除装备背包ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.装备背包物品序号.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.装备背包物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where inventoryitemid =" + Integer.parseInt(this.装备背包物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色装备背包();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除装备背包ActionPerformed

    private void 消耗背包物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_消耗背包物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_消耗背包物品名字ActionPerformed

    private void 消耗背包物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_消耗背包物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_消耗背包物品序号ActionPerformed

    private void 消耗背包物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_消耗背包物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_消耗背包物品代码ActionPerformed

    private void 删除消耗背包ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除消耗背包ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.消耗背包物品序号.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.消耗背包物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where inventoryitemid =" + Integer.parseInt(this.消耗背包物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色消耗背包();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除消耗背包ActionPerformed

    private void 设置背包物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_设置背包物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_设置背包物品名字ActionPerformed

    private void 设置背包物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_设置背包物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_设置背包物品序号ActionPerformed

    private void 设置背包物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_设置背包物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_设置背包物品代码ActionPerformed

    private void 删除设置背包ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除设置背包ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.设置背包物品序号.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.设置背包物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where inventoryitemid =" + Integer.parseInt(this.设置背包物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色设置背包();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除设置背包ActionPerformed

    private void 其他背包物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_其他背包物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_其他背包物品名字ActionPerformed

    private void 其他背包物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_其他背包物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_其他背包物品序号ActionPerformed

    private void 其他背包物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_其他背包物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_其他背包物品代码ActionPerformed

    private void 删除其他背包ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除其他背包ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.其他背包物品序号.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.其他背包物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where inventoryitemid =" + Integer.parseInt(this.其他背包物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色其他背包();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除其他背包ActionPerformed

    private void 特殊背包物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_特殊背包物品名字ActionPerformed

    }//GEN-LAST:event_特殊背包物品名字ActionPerformed

    private void 特殊背包物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_特殊背包物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_特殊背包物品序号ActionPerformed

    private void 特殊背包物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_特殊背包物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_特殊背包物品代码ActionPerformed

    private void 删除特殊背包ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除特殊背包ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.特殊背包物品序号.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.特殊背包物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where inventoryitemid =" + Integer.parseInt(this.特殊背包物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色特殊背包();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除特殊背包ActionPerformed

    private void 游戏仓库物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_游戏仓库物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_游戏仓库物品名字ActionPerformed

    private void 游戏仓库物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_游戏仓库物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_游戏仓库物品序号ActionPerformed

    private void 游戏仓库物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_游戏仓库物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_游戏仓库物品代码ActionPerformed

    private void 删除游戏仓库ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除游戏仓库ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_删除游戏仓库ActionPerformed

    private void 商城仓库物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商城仓库物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_商城仓库物品名字ActionPerformed

    private void 商城仓库物品序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商城仓库物品序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_商城仓库物品序号ActionPerformed

    private void 商城仓库物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商城仓库物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_商城仓库物品代码ActionPerformed

    private void 删除商城仓库ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除商城仓库ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.商城仓库物品序号.getText().matches("[0-9]+");
        if (result) {
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM csitems WHERE inventoryitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.商城仓库物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from csitems where inventoryitemid =" + Integer.parseInt(this.商城仓库物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新角色商城仓库();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品");
        }
    }//GEN-LAST:event_删除商城仓库ActionPerformed

    private void 拍卖行物品名字1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_拍卖行物品名字1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_拍卖行物品名字1ActionPerformed

    private void 角色点券拍卖行序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色点券拍卖行序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色点券拍卖行序号ActionPerformed

    private void 拍卖行物品代码1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_拍卖行物品代码1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_拍卖行物品代码1ActionPerformed

    private void 删除拍卖行1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除拍卖行1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_删除拍卖行1ActionPerformed

    private void 拍卖行物品名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_拍卖行物品名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_拍卖行物品名字ActionPerformed

    private void 角色金币拍卖行序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_角色金币拍卖行序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_角色金币拍卖行序号ActionPerformed

    private void 拍卖行物品代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_拍卖行物品代码ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_拍卖行物品代码ActionPerformed

    private void 删除拍卖行ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除拍卖行ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_删除拍卖行ActionPerformed

    private void 技能名字ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_技能名字ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_技能名字ActionPerformed

    private void 修改技能ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改技能ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.技能序号.getText().matches("[0-9]+");

        if (result1) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE skills SET skilllevel = ?,masterlevel = ? WHERE id = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM skills WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.技能序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    String sqlString2 = null;

                    sqlString1 = "update skills set skilllevel='" + this.技能目前等级.getText() + "' where id=" + this.技能序号.getText() + ";";
                    PreparedStatement skilllevel = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    skilllevel.executeUpdate(sqlString1);

                    sqlString2 = "update skills set masterlevel='" + this.技能最高等级.getText() + "' where id=" + this.技能序号.getText() + ";";
                    PreparedStatement masterlevel = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    masterlevel.executeUpdate(sqlString2);

                    刷新技能信息();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要修改的技能");
        }// TODO add your handling code here:
    }//GEN-LAST:event_修改技能ActionPerformed

    private void 删除技能ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除技能ActionPerformed

        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.技能序号.getText().matches("[0-9]+");

        if (result1) {
            if (Integer.parseInt(this.技能序号.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM skills WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.技能序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from skills where id =" + Integer.parseInt(this.技能序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新技能信息();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的技能");
        }
    }//GEN-LAST:event_删除技能ActionPerformed

    private void 修改技能1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改技能1ActionPerformed
        JOptionPane.showMessageDialog(null, "[信息]:查看玩家技能信息。");
        刷新技能信息();
    }//GEN-LAST:event_修改技能1ActionPerformed

    private void 刷新家族信息ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新家族信息ActionPerformed
        刷新家族信息();
    }//GEN-LAST:event_刷新家族信息ActionPerformed

    private void 家族IDActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族IDActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族IDActionPerformed

    private void 家族名称ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族名称ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族名称ActionPerformed

    private void 家族族长ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族族长ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族族长ActionPerformed

    private void 家族成员2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族成员2ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族成员2ActionPerformed

    private void 家族成员3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族成员3ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族成员3ActionPerformed

    private void 家族成员4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族成员4ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族成员4ActionPerformed

    private void 家族成员5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族成员5ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族成员5ActionPerformed

    private void 家族GPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_家族GPActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_家族GPActionPerformed

    private void jButton34ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton34ActionPerformed
        try {

            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE guilds SET GP =" + 家族GP.getText() + " WHERE guildid = " + 家族ID.getText() + "");
            ps.executeUpdate();
            ps.close();
            System.out.println("update guild gp !");
            刷新家族信息();
        } catch (SQLException ex) {
            ex.getStackTrace();
        }
    }//GEN-LAST:event_jButton34ActionPerformed

    private void 刷新封IPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新封IPActionPerformed
        刷新封IP();
    }//GEN-LAST:event_刷新封IPActionPerformed

    private void 刷新封MACActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新封MACActionPerformed
        刷新封MAC();
    }//GEN-LAST:event_刷新封MACActionPerformed

    private void 删除MACActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除MACActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.删MAC代码.getText().matches("[0-9]+");

        if (result1) {
            if (Integer.parseInt(this.删MAC代码.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM macbans WHERE macbanid = ?");
                ps1.setInt(1, Integer.parseInt(this.删MAC代码.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from macbans where macbanid =" + Integer.parseInt(this.删MAC代码.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新封MAC();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入数字 ");
        }
    }//GEN-LAST:event_删除MACActionPerformed

    private void 删除IPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除IPActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.删除IP代码.getText().matches("[0-9]+");

        if (result1) {
            if (Integer.parseInt(this.删除IP代码.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try {

                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM ipbans WHERE ipbanid = ?");
                ps1.setInt(1, Integer.parseInt(this.删除IP代码.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from ipbans where ipbanid =" + Integer.parseInt(this.删除IP代码.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新封IP();
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入数字 ");
        }
    }//GEN-LAST:event_删除IPActionPerformed

    private void 刷新家族信息() {
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM characters");
            rs = ps.executeQuery();
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        for (int i = this.家族信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.家族信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM guilds");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 家族信息.getModel()).insertRow(家族信息.getRowCount(), new Object[]{
                        rs.getInt("guildid"),
                        rs.getString("name"),
                        //ooors.getInt("leader"),
                        //    NPCConversationManager.角色ID取名字(rs.getInt("leader")),
                        rs.getString("rank1title"),
                        rs.getString("rank2title"),
                        rs.getString("rank3title"),
                        rs.getString("rank4title"),
                        rs.getString("rank5title"),
                        rs.getString("GP")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        家族信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 家族信息.getSelectedRow();
                String a1 = 家族信息.getValueAt(i, 0).toString();
                String a2 = 家族信息.getValueAt(i, 1).toString();
                String a3 = 家族信息.getValueAt(i, 2).toString();
                String a4 = 家族信息.getValueAt(i, 3).toString();
                String a5 = 家族信息.getValueAt(i, 4).toString();
                String a6 = 家族信息.getValueAt(i, 5).toString();
                String a7 = 家族信息.getValueAt(i, 6).toString();
                String a8 = 家族信息.getValueAt(i, 7).toString();

                家族ID.setText(a1);
                家族名称.setText(a2);
                家族族长.setText(a3);
                家族成员2.setText(a4);
                家族成员3.setText(a5);
                家族成员4.setText(a6);
                家族成员5.setText(a7);
                家族GP.setText(a8);
            }
        });
    }

    public void 刷新封MAC() {
        for (int i = this.封MAC.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.封MAC.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM macbans");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 封MAC.getModel()).insertRow(封MAC.getRowCount(), new Object[]{
                        rs.getInt("macbanid"),
                        rs.getString("mac"),
                        NPCConversationManager.MAC取账号(rs.getString("mac"))
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public void 刷新封IP() {
        for (int i = this.封IP.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.封IP.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM ipbans");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 封IP.getModel()).insertRow(封IP.getRowCount(), new Object[]{
                        rs.getInt("ipbanid"),
                        rs.getString("ip"),
                        NPCConversationManager.IP取账号(rs.getString("ip"))
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public static int 在线玩家() {
        int p = 0;
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                if (chr != null) {
                    p++;
                }
            }
        }
        return p;
    }

    public void 读取显示账号() {
        账号信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 账号信息.getSelectedRow();
                String a = 账号信息.getValueAt(i, 0).toString();
                String a1 = 账号信息.getValueAt(i, 1).toString();
                String a2 = 账号信息.getValueAt(i, 5).toString();
                String a3 = 账号信息.getValueAt(i, 6).toString();
                //if (账号信息.getValueAt(i, 4).toString() != null) {
                String a4 = 账号信息.getValueAt(i, 4).toString();
                QQ.setText(a4);
                //}
                String a10 = 账号信息.getValueAt(i, 10).toString();
                账号ID.setText(a);
                账号操作.setText(a1);
                账号.setText(a1);

                点券.setText(a2);
                抵用.setText(a3);
                管理1.setText(a10);
                账号提示语言.setText("[信息]:显示账号 " + 账号.getText() + " 下角色信息。");
                刷新角色信息2();
            }
        });
    }

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

    private void ChangePassWord() {
        String account = 注册的账号.getText();
        String password = 注册的密码.getText();

        if (password.length() > 12) {
            账号提示语言.setText("[信息]:修改密码失败，密码过长。");
            return;
        }
        if (!AutoRegister.getAccountExists(account)) {
            账号提示语言.setText("[信息]:修改密码失败，账号不存在。");
            return;
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps;
            ps = con.prepareStatement("Update accounts set password = ? Where name = ?");
            ps.setString(1, LoginCrypto.hexSha1(password));
            ps.setString(2, account);
            ps.execute();
            ps.close();
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + ex);
        }
        账号提示语言.setText("[信息]:修改密码成功。账号: " + account + " 密码: " + password + "");
    }

    public void 注册新账号() {
        boolean result1 = this.注册的账号.getText().matches("[0-9]+");
        boolean result2 = this.注册的密码.getText().matches("[0-9]+");
        if (注册的账号.getText().equals("") || 注册的密码.getText().equals("")) {
            账号提示语言.setText("[信息]:请填写注册的账号密码");
        } else {
            Connection con;
            String account = 注册的账号.getText();
            String password = 注册的密码.getText();

            if (password.length() > 10) {
                账号提示语言.setText("[信息]:注册失败，密码过长");
                return;
            }
            if (AutoRegister.getAccountExists(account)) {
                账号提示语言.setText("[信息]:注册失败，账号已存在");
                return;
            }
            try {
                con = DBConPool.getInstance().getDataSource().getConnection();
            } catch (Exception ex) {
                System.out.println(ex);
                return;
            }
            try {
                PreparedStatement ps = con.prepareStatement("INSERT INTO accounts (name, password) VALUES (?,?)");
                ps.setString(1, account);
                ps.setString(2, LoginCrypto.hexSha1(password));
                ps.executeUpdate();
                刷新账号信息();
                账号提示语言.setText("[信息]:注册成功。账号: " + account + " 密码: " + password + "");
            } catch (SQLException ex) {
                System.out.println(ex);
            }
        }
    }

    private void 刷新账号信息() {
        for (int i = this.账号信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.账号信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM accounts order by id desc");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 封号 = "";
                if (rs.getInt("banned") == 0) {
                    封号 = "正常";
                } else {
                    封号 = "封禁";
                }
                String 在线 = "";
                if (rs.getInt("loggedin") == 0) {
                    // Font fnA = new Font("细明本",Font.PLAIN,12);
                    在线 = "不在线";
                } else {
                    在线 = "在线";
                }
                String QQ = "";
                if (rs.getString("qq") != null) {
                    QQ = rs.getString("qq");
                } else {
                    QQ = "未绑定QQ";
                }
                ((DefaultTableModel) 账号信息.getModel()).insertRow(账号信息.getRowCount(), new Object[]{
                        rs.getInt("id"), //账号ID
                        rs.getString("name"), //账号
                        rs.getString("SessionIP"), //账号IP地址
                        rs.getString("macs"), ///账号MAC地址
                        QQ,
                        rs.getInt("ACash"),//点券
                        rs.getInt("mPoints"),//抵用
                        rs.getString("lastlogin"),//最近上线
                        //rs.getInt("loggedin"),//在线
                        //rs.getInt("banned")//封号
                        在线,
                        封号,
                        rs.getInt("gm")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        读取显示账号();

    }

    private void 查找QQ() {

        for (int i = this.账号信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.账号信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM accounts WHERE qq =  '" + 账号操作.getText() + " ' ");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 封号 = "";
                if (rs.getInt("banned") == 0) {
                    封号 = "正常";
                } else {
                    封号 = "封禁";
                }
                String 在线 = "";
                if (rs.getInt("loggedin") == 0) {
                    // Font fnA = new Font("细明本",Font.PLAIN,12);
                    在线 = "不在线";
                } else {
                    在线 = "在线";
                }
                String QQ = "";
                if (rs.getString("qq") != null) {
                    QQ = rs.getString("qq");
                } else {
                    QQ = "未绑定QQ";
                }
                ((DefaultTableModel) 账号信息.getModel()).insertRow(账号信息.getRowCount(), new Object[]{
                        rs.getInt("id"), //账号ID
                        rs.getString("name"), //账号
                        rs.getString("SessionIP"), //账号IP地址
                        rs.getString("macs"), ///账号MAC地址
                        QQ,//注册时间
                        rs.getInt("ACash"),//点券
                        rs.getInt("mPoints"),//抵用
                        rs.getString("lastlogin"),//最近上线
                        在线,
                        封号,
                        rs.getInt("gm")
                });
            }
            账号提示语言.setText("[信息]:查找账号 " + this.账号操作.getText() + " 成功。");
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        账号信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 账号信息.getSelectedRow();
                String a = 账号信息.getValueAt(i, 0).toString();
                String a1 = 账号信息.getValueAt(i, 1).toString();
                String a2 = 账号信息.getValueAt(i, 5).toString();
                String a3 = 账号信息.getValueAt(i, 6).toString();
                账号ID.setText(a);
                账号操作.setText(a1);
                账号.setText(a1);
                点券.setText(a2);
                抵用.setText(a3);
                刷新角色信息2();
            }
        });
    }

    private void 查找账号() {

        for (int i = this.账号信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.账号信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM accounts WHERE name =  '" + 账号操作.getText() + "  '");
            rs = ps.executeQuery();
            while (rs.next()) {
                String 封号 = "";
                if (rs.getInt("banned") == 0) {
                    封号 = "正常";
                } else {
                    封号 = "封禁";
                }
                String 在线 = "";
                if (rs.getInt("loggedin") == 0) {
                    // Font fnA = new Font("细明本",Font.PLAIN,12);
                    在线 = "不在线";
                } else {
                    在线 = "在线";
                }
                ((DefaultTableModel) 账号信息.getModel()).insertRow(账号信息.getRowCount(), new Object[]{
                        rs.getInt("id"), //账号ID
                        rs.getString("name"), //账号
                        rs.getString("SessionIP"), //账号IP地址
                        rs.getString("macs"), ///账号MAC地址
                        rs.getString("qq"),//注册时间
                        rs.getInt("ACash"),//点券
                        rs.getInt("mPoints"),//抵用
                        rs.getString("lastlogin"),//最近上线
                        在线,
                        封号,
                        rs.getInt("gm")
                });
            }
            账号提示语言.setText("[信息]:查找账号 " + this.账号操作.getText() + " 成功。");
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        账号信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 账号信息.getSelectedRow();
                String a = 账号信息.getValueAt(i, 0).toString();
                String a1 = 账号信息.getValueAt(i, 1).toString();
                String a2 = 账号信息.getValueAt(i, 5).toString();
                String a3 = 账号信息.getValueAt(i, 6).toString();
                账号ID.setText(a);
                账号操作.setText(a1);
                账号.setText(a1);
                点券.setText(a2);
                抵用.setText(a3);
                刷新角色信息2();
            }
        });
    }

    private void 刷新技能信息() {
        boolean result1 = this.角色ID.getText().matches("[0-9]+");
        if (result1) {
            for (int i = this.技能信息.getModel().getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.技能信息.getModel())).removeRow(i);
            }
            try {
                Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = null;

                ResultSet rs = null;
                ps = con.prepareStatement("SELECT * FROM skills  WHERE characterid =" + this.角色ID.getText() + "");
                rs = ps.executeQuery();
                while (rs.next()) {
                    MapleDataProvider data = MapleDataProviderFactory.getDataProvider(new File((System.getProperty("wzpath") != null ? System.getProperty("wzpath") : "") + "wz/String.wz"));
                    MapleData itemsData;
                    int itemId;
                    String itemName = "";
                    itemsData = data.getData("Skill.img");
                    for (MapleData itemFolder : itemsData.getChildren()) {
                        itemId = Integer.parseInt(itemFolder.getName());
                        if (rs.getInt("skillid") == itemId) {
                            itemName = MapleDataTool.getString("name", itemFolder, "NO-NAME");
                        }
                    }
                    ((DefaultTableModel) 技能信息.getModel()).insertRow(技能信息.getRowCount(), new Object[]{
                            rs.getInt("id"),
                            itemName,
                            rs.getInt("skillid"),
                            rs.getInt("skilllevel"),
                            rs.getInt("masterlevel")
                    });
                }
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
            技能信息.addMouseListener(new MouseAdapter() {
                public void mouseClicked(MouseEvent e) {
                    int i = 技能信息.getSelectedRow();
                    String a = 技能信息.getValueAt(i, 0).toString();
                    // String a1 = 技能信息.getValueAt(i, 1).toString();
                    String a2 = 技能信息.getValueAt(i, 2).toString();
                    String a3 = 技能信息.getValueAt(i, 3).toString();
                    String a4 = 技能信息.getValueAt(i, 4).toString();
                    技能序号.setText(a);
                    // 技能名字.setText(a1);
                    技能代码.setText(a2);
                    技能目前等级.setText(a3);
                    技能最高等级.setText(a4);
                    //出售状态.setText(a8);
                    //jTextField9.setText(a9);
                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请先点击你想查看的角色。");
        }
    }

    private void 刷新角色信息() {
        String 输出 = "";
        for (int i = this.角色信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM characters order by id desc");
            rs = ps.executeQuery();

            while (rs.next()) {
                String 在线 = "";
                if (World.Find.findChannel(rs.getString("name")) > 0) {
                    在线 = "在线";
                } else {
                    在线 = "离线";
                }
                ((DefaultTableModel) 角色信息.getModel()).insertRow(角色信息.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        rs.getInt("accountid"),
                        rs.getString("name"),
                        getJobNameById(rs.getInt("job")),
                        rs.getInt("level"),
                        rs.getInt("str"),
                        rs.getInt("dex"),
                        rs.getInt("luk"),
                        rs.getInt("int"),
                        rs.getInt("maxhp"),
                        rs.getInt("maxmp"),
                        rs.getInt("meso"),
                        rs.getInt("map"),
                        在线,
                        rs.getInt("gm"),
                        rs.getInt("hair"),
                        rs.getInt("face")
                });

            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色信息.getSelectedRow();
                String a = 角色信息.getValueAt(i, 0).toString();
                String a1 = 角色信息.getValueAt(i, 2).toString();
                String a2 = 角色信息.getValueAt(i, 4).toString();
                String a3 = 角色信息.getValueAt(i, 5).toString();
                String a4 = 角色信息.getValueAt(i, 6).toString();
                String a5 = 角色信息.getValueAt(i, 7).toString();
                String a6 = 角色信息.getValueAt(i, 8).toString();
                String a7 = 角色信息.getValueAt(i, 9).toString();
                String a8 = 角色信息.getValueAt(i, 10).toString();
                String a9 = 角色信息.getValueAt(i, 11).toString();
                String a10 = 角色信息.getValueAt(i, 12).toString();
                String a11 = 角色信息.getValueAt(i, 14).toString();
                String a12 = 角色信息.getValueAt(i, 15).toString();
                String a13 = 角色信息.getValueAt(i, 16).toString();
                角色ID.setText(a);
                角色昵称.setText(a1);
                等级.setText(a2);
                力量.setText(a3);
                敏捷.setText(a4);
                智力.setText(a5);
                运气.setText(a6);
                HP.setText(a7);
                MP.setText(a8);
                金币1.setText(a9);
                地图.setText(a10);
                GM.setText(a11);
                发型.setText(a12);
                脸型.setText(a13);
                //  个人发送物品玩家名字.setText(a1);
                //  发送装备玩家姓名.setText(a1);
            }
        });
    }

    private void 刷新角色背包穿戴() {
        for (int i = this.角色背包穿戴.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色背包穿戴.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid =" + this.角色ID.getText() + " && inventorytype = -1");
            rs = ps.executeQuery();
            while (rs.next()) {

                ((DefaultTableModel) 角色背包穿戴.getModel()).insertRow(角色背包穿戴.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色背包穿戴.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色背包穿戴.getSelectedRow();
                String a = 角色背包穿戴.getValueAt(i, 0).toString();
                String a1 = 角色背包穿戴.getValueAt(i, 1).toString();
                String a2 = 角色背包穿戴.getValueAt(i, 2).toString();
                身上穿戴序号1.setText(a);
                背包物品代码1.setText(a1);
                背包物品名字1.setText(a2);
            }
        });
    }

    private void 刷新角色装备背包() {
        for (int i = this.角色装备背包.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色装备背包.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid =" + this.角色ID.getText() + " && inventorytype = 1");
            rs = ps.executeQuery();
            while (rs.next()) {

                ((DefaultTableModel) 角色装备背包.getModel()).insertRow(角色装备背包.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色装备背包.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色装备背包.getSelectedRow();
                String a = 角色装备背包.getValueAt(i, 0).toString();
                String a1 = 角色装备背包.getValueAt(i, 1).toString();
                String a2 = 角色装备背包.getValueAt(i, 2).toString();
                装备背包物品序号.setText(a);
                装备背包物品代码.setText(a1);
                装备背包物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色消耗背包() {
        for (int i = this.角色消耗背包.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色消耗背包.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid =" + this.角色ID.getText() + " && inventorytype = 2");
            rs = ps.executeQuery();
            while (rs.next()) {

                ((DefaultTableModel) 角色消耗背包.getModel()).insertRow(角色消耗背包.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色消耗背包.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色消耗背包.getSelectedRow();
                String a = 角色消耗背包.getValueAt(i, 0).toString();
                String a1 = 角色消耗背包.getValueAt(i, 1).toString();
                //String a2 = 角色消耗背包.getValueAt(i, 2).toString();
                消耗背包物品序号.setText(a);
                消耗背包物品代码.setText(a1);
                //消耗背包物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色特殊背包() {
        for (int i = this.角色特殊背包.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色特殊背包.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid =" + this.角色ID.getText() + " && inventorytype = 5");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色特殊背包.getModel()).insertRow(角色特殊背包.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色特殊背包.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色特殊背包.getSelectedRow();
                String a = 角色特殊背包.getValueAt(i, 0).toString();
                String a1 = 角色特殊背包.getValueAt(i, 1).toString();
                //String a2 = 角色特殊背包.getValueAt(i, 2).toString();
                特殊背包物品序号.setText(a);
                特殊背包物品代码.setText(a1);
                //特殊背包物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色游戏仓库() {
        for (int i = this.角色游戏仓库.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色游戏仓库.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE accountid =" + this.账号ID.getText());
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色游戏仓库.getModel()).insertRow(角色游戏仓库.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色游戏仓库.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色游戏仓库.getSelectedRow();
                String a = 角色游戏仓库.getValueAt(i, 0).toString();
                String a1 = 角色游戏仓库.getValueAt(i, 1).toString();
                //String a2 = 角色游戏仓库.getValueAt(i, 2).toString();
                游戏仓库物品序号.setText(a);
                游戏仓库物品代码.setText(a1);
                //游戏仓库物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色商城仓库() {
        for (int i = this.角色商城仓库.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色商城仓库.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM csitems WHERE accountid =" + this.账号ID.getText());
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色商城仓库.getModel()).insertRow(角色商城仓库.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色商城仓库.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色商城仓库.getSelectedRow();
                String a = 角色商城仓库.getValueAt(i, 0).toString();
                String a1 = 角色商城仓库.getValueAt(i, 1).toString();
                //String a2 = 角色商城仓库.getValueAt(i, 2).toString();
                商城仓库物品序号.setText(a);
                商城仓库物品代码.setText(a1);
                //商城仓库物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色点券拍卖行() {
        for (int i = this.角色点券拍卖行.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色点券拍卖行.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM auctionitems WHERE characterid =" + this.角色ID.getText());
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色点券拍卖行.getModel()).insertRow(角色点券拍卖行.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("characterName")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色点券拍卖行.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色点券拍卖行.getSelectedRow();
                String a = 角色点券拍卖行.getValueAt(i, 0).toString();
                角色点券拍卖行序号.setText(a);
            }
        });
    }

    private void 刷新角色金币拍卖行() {
        for (int i = this.角色金币拍卖行.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色金币拍卖行.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM auctionitems1 WHERE characterid =" + this.角色ID.getText());
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色金币拍卖行.getModel()).insertRow(角色金币拍卖行.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("characterName")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色金币拍卖行.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色金币拍卖行.getSelectedRow();
                String a = 角色金币拍卖行.getValueAt(i, 0).toString();
                角色金币拍卖行序号.setText(a);
            }
        });
    }

    private void 刷新角色其他背包() {
        for (int i = this.角色其他背包.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色其他背包.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid =" + this.角色ID.getText() + " && inventorytype = 4");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色其他背包.getModel()).insertRow(角色其他背包.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色其他背包.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色其他背包.getSelectedRow();
                String a = 角色其他背包.getValueAt(i, 0).toString();
                String a1 = 角色其他背包.getValueAt(i, 1).toString();
                //String a2 = 角色其他背包.getValueAt(i, 2).toString();
                其他背包物品序号.setText(a);
                其他背包物品代码.setText(a1);
                //其他背包物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色设置背包() {
        for (int i = this.角色设置背包.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色设置背包.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid =" + this.角色ID.getText() + " && inventorytype = 3");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 角色设置背包.getModel()).insertRow(角色设置背包.getRowCount(), new Object[]{
                        rs.getInt("inventoryitemid"),
                        rs.getInt("itemid"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid")),
                        rs.getInt("quantity")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色设置背包.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色设置背包.getSelectedRow();
                String a = 角色设置背包.getValueAt(i, 0).toString();
                String a1 = 角色设置背包.getValueAt(i, 1).toString();
                String a2 = 角色设置背包.getValueAt(i, 2).toString();
                设置背包物品序号.setText(a);
                设置背包物品代码.setText(a1);
                设置背包物品名字.setText(a2);
            }
        });
    }

    private void 刷新角色信息2() {
        for (int i = this.角色信息.getModel().getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.角色信息.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;

            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM characters WHERE accountid =" + this.账号ID.getText() + "");
            rs = ps.executeQuery();

            while (rs.next()) {
                String 在线 = "";
                if (World.Find.findChannel(rs.getString("name")) > 0) {
                    在线 = "在线";
                } else {
                    在线 = "离线";
                }
                ((DefaultTableModel) 角色信息.getModel()).insertRow(角色信息.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        rs.getInt("accountid"),
                        rs.getString("name"),
                        getJobNameById(rs.getInt("job")),
                        rs.getInt("level"),
                        rs.getInt("str"),
                        rs.getInt("dex"),
                        rs.getInt("luk"),
                        rs.getInt("int"),
                        rs.getInt("maxhp"),
                        rs.getInt("maxmp"),
                        rs.getInt("meso"),
                        rs.getInt("map"),
                        在线,
                        rs.getInt("gm"),
                        rs.getInt("hair"),
                        rs.getInt("face")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
        }
        角色信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 角色信息.getSelectedRow();
                String a = 角色信息.getValueAt(i, 0).toString();
                String a1 = 角色信息.getValueAt(i, 2).toString();
                String a2 = 角色信息.getValueAt(i, 4).toString();
                String a3 = 角色信息.getValueAt(i, 5).toString();
                String a4 = 角色信息.getValueAt(i, 6).toString();
                String a5 = 角色信息.getValueAt(i, 7).toString();
                String a6 = 角色信息.getValueAt(i, 8).toString();
                String a7 = 角色信息.getValueAt(i, 9).toString();
                String a8 = 角色信息.getValueAt(i, 10).toString();
                String a9 = 角色信息.getValueAt(i, 11).toString();
                String a10 = 角色信息.getValueAt(i, 12).toString();
                String a11 = 角色信息.getValueAt(i, 14).toString();
                String a12 = 角色信息.getValueAt(i, 15).toString();
                String a13 = 角色信息.getValueAt(i, 16).toString();
                角色ID.setText(a);
                角色昵称.setText(a1);
                等级.setText(a2);
                力量.setText(a3);
                敏捷.setText(a4);
                智力.setText(a5);
                运气.setText(a6);
                HP.setText(a7);
                MP.setText(a8);
                金币1.setText(a9);
                地图.setText(a10);
                GM.setText(a11);
                发型.setText(a12);
                脸型.setText(a13);
                //出售状态.setText(a8);
                //jTextField9.setText(a9);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextField GM;
    private javax.swing.JTextField HP;
    private javax.swing.JTextField MP;
    private javax.swing.JTextField QQ;
    private javax.swing.JButton jButton12;
    private javax.swing.JButton jButton32;
    private javax.swing.JButton jButton34;
    private javax.swing.JButton jButton35;
    private javax.swing.JButton jButton38;
    private javax.swing.JLabel jLabel107;
    private javax.swing.JLabel jLabel111;
    private javax.swing.JLabel jLabel131;
    private javax.swing.JLabel jLabel182;
    private javax.swing.JLabel jLabel183;
    private javax.swing.JLabel jLabel184;
    private javax.swing.JLabel jLabel185;
    private javax.swing.JLabel jLabel186;
    private javax.swing.JLabel jLabel187;
    private javax.swing.JLabel jLabel188;
    private javax.swing.JLabel jLabel189;
    private javax.swing.JLabel jLabel190;
    private javax.swing.JLabel jLabel191;
    private javax.swing.JLabel jLabel192;
    private javax.swing.JLabel jLabel193;
    private javax.swing.JLabel jLabel194;
    private javax.swing.JLabel jLabel195;
    private javax.swing.JLabel jLabel196;
    private javax.swing.JLabel jLabel198;
    private javax.swing.JLabel jLabel199;
    private javax.swing.JLabel jLabel200;
    private javax.swing.JLabel jLabel201;
    private javax.swing.JLabel jLabel203;
    private javax.swing.JLabel jLabel204;
    private javax.swing.JLabel jLabel205;
    private javax.swing.JLabel jLabel206;
    private javax.swing.JLabel jLabel214;
    private javax.swing.JLabel jLabel276;
    private javax.swing.JLabel jLabel283;
    private javax.swing.JLabel jLabel287;
    private javax.swing.JLabel jLabel288;
    private javax.swing.JLabel jLabel289;
    private javax.swing.JLabel jLabel290;
    private javax.swing.JLabel jLabel291;
    private javax.swing.JLabel jLabel292;
    private javax.swing.JLabel jLabel293;
    private javax.swing.JLabel jLabel294;
    private javax.swing.JLabel jLabel295;
    private javax.swing.JLabel jLabel296;
    private javax.swing.JLabel jLabel297;
    private javax.swing.JLabel jLabel298;
    private javax.swing.JLabel jLabel299;
    private javax.swing.JLabel jLabel300;
    private javax.swing.JLabel jLabel301;
    private javax.swing.JLabel jLabel302;
    private javax.swing.JLabel jLabel303;
    private javax.swing.JLabel jLabel304;
    private javax.swing.JLabel jLabel305;
    private javax.swing.JLabel jLabel306;
    private javax.swing.JLabel jLabel307;
    private javax.swing.JLabel jLabel308;
    private javax.swing.JLabel jLabel309;
    private javax.swing.JLabel jLabel310;
    private javax.swing.JLabel jLabel311;
    private javax.swing.JLabel jLabel312;
    private javax.swing.JLabel jLabel313;
    private javax.swing.JLabel jLabel314;
    private javax.swing.JLabel jLabel346;
    private javax.swing.JLabel jLabel347;
    private javax.swing.JLabel jLabel353;
    private javax.swing.JLabel jLabel354;
    private javax.swing.JLabel jLabel355;
    private javax.swing.JLabel jLabel356;
    private javax.swing.JLabel jLabel357;
    private javax.swing.JLabel jLabel55;
    private javax.swing.JLabel jLabel86;
    private javax.swing.JLabel jLabel89;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel23;
    private javax.swing.JPanel jPanel30;
    private javax.swing.JPanel jPanel32;
    private javax.swing.JPanel jPanel39;
    private javax.swing.JPanel jPanel40;
    private javax.swing.JPanel jPanel41;
    private javax.swing.JPanel jPanel42;
    private javax.swing.JPanel jPanel43;
    private javax.swing.JPanel jPanel44;
    private javax.swing.JPanel jPanel45;
    private javax.swing.JPanel jPanel46;
    private javax.swing.JPanel jPanel47;
    private javax.swing.JPanel jPanel48;
    private javax.swing.JPanel jPanel50;
    private javax.swing.JPanel jPanel65;
    private javax.swing.JScrollPane jScrollPane107;
    private javax.swing.JScrollPane jScrollPane108;
    private javax.swing.JScrollPane jScrollPane14;
    private javax.swing.JScrollPane jScrollPane15;
    private javax.swing.JScrollPane jScrollPane16;
    private javax.swing.JScrollPane jScrollPane17;
    private javax.swing.JScrollPane jScrollPane18;
    private javax.swing.JScrollPane jScrollPane19;
    private javax.swing.JScrollPane jScrollPane20;
    private javax.swing.JScrollPane jScrollPane21;
    private javax.swing.JScrollPane jScrollPane22;
    private javax.swing.JScrollPane jScrollPane23;
    private javax.swing.JScrollPane jScrollPane24;
    private javax.swing.JScrollPane jScrollPane3;
    private javax.swing.JScrollPane jScrollPane30;
    private javax.swing.JScrollPane jScrollPane4;
    private javax.swing.JTabbedPane jTabbedPane5;
    private javax.swing.JTabbedPane jTabbedPane8;
    private javax.swing.JButton 修改技能;
    private javax.swing.JButton 修改技能1;
    private javax.swing.JButton 修改账号点券抵用;
    private javax.swing.JTextField 其他背包物品代码;
    private javax.swing.JTextField 其他背包物品名字;
    private javax.swing.JTextField 其他背包物品序号;
    private javax.swing.JTextField 删MAC代码;
    private javax.swing.JButton 删除IP;
    private javax.swing.JTextField 删除IP代码;
    private javax.swing.JButton 删除MAC;
    private javax.swing.JButton 删除其他背包;
    private javax.swing.JButton 删除商城仓库;
    private javax.swing.JButton 删除技能;
    private javax.swing.JButton 删除拍卖行;
    private javax.swing.JButton 删除拍卖行1;
    private javax.swing.JButton 删除消耗背包;
    private javax.swing.JButton 删除游戏仓库;
    private javax.swing.JButton 删除特殊背包;
    private javax.swing.JButton 删除穿戴装备;
    private javax.swing.JButton 删除装备背包;
    private javax.swing.JButton 删除角色;
    private javax.swing.JButton 删除设置背包;
    private javax.swing.JButton 删除账号;
    private javax.swing.JButton 刷新家族信息;
    private javax.swing.JButton 刷新封IP;
    private javax.swing.JButton 刷新封MAC;
    private javax.swing.JButton 刷新角色信息;
    private javax.swing.JButton 刷新账号信息;
    private javax.swing.JTextField 力量;
    private javax.swing.JButton 卡号自救1;
    private javax.swing.JButton 卡号自救2;
    private javax.swing.JButton 卡家族解救;
    private javax.swing.JTextField 发型;
    private javax.swing.JTextField 商城仓库物品代码;
    private javax.swing.JTextField 商城仓库物品名字;
    private javax.swing.JTextField 商城仓库物品序号;
    private javax.swing.JButton 在线角色;
    private javax.swing.JButton 在线账号;
    private javax.swing.JTextField 地图;
    private javax.swing.JTextField 家族GP;
    private javax.swing.JTextField 家族ID;
    private javax.swing.JTable 家族信息;
    private javax.swing.JTextField 家族名称;
    private javax.swing.JTextField 家族成员2;
    private javax.swing.JTextField 家族成员3;
    private javax.swing.JTextField 家族成员4;
    private javax.swing.JTextField 家族成员5;
    private javax.swing.JTextField 家族族长;
    private javax.swing.JTable 封IP;
    private javax.swing.JTable 封MAC;
    private javax.swing.JButton 封锁账号;
    private javax.swing.JButton 已封账号;
    private javax.swing.JPanel 技能;
    private javax.swing.JTextField 技能代码;
    private javax.swing.JTable 技能信息;
    private javax.swing.JTextField 技能名字;
    private javax.swing.JTextField 技能序号;
    private javax.swing.JTextField 技能最高等级;
    private javax.swing.JTextField 技能目前等级;
    private javax.swing.JTextField 抵用;
    private javax.swing.JTextField 拍卖行物品代码;
    private javax.swing.JTextField 拍卖行物品代码1;
    private javax.swing.JTextField 拍卖行物品名字;
    private javax.swing.JTextField 拍卖行物品名字1;
    private javax.swing.JTextField 敏捷;
    private javax.swing.JLabel 显示在线玩家;
    private javax.swing.JLabel 显示在线账号;
    private javax.swing.JButton 显示管理角色;
    private javax.swing.JTextField 智力;
    private javax.swing.JButton 查看技能;
    private javax.swing.JButton 查看背包;
    private javax.swing.JTextField 注册的密码;
    private javax.swing.JTextField 注册的账号;
    private javax.swing.JTextField 消耗背包物品代码;
    private javax.swing.JTextField 消耗背包物品名字;
    private javax.swing.JTextField 消耗背包物品序号;
    private javax.swing.JTextField 游戏仓库物品代码;
    private javax.swing.JTextField 游戏仓库物品名字;
    private javax.swing.JTextField 游戏仓库物品序号;
    private javax.swing.JTextField 点券;
    private javax.swing.JTextField 特殊背包物品代码;
    private javax.swing.JTextField 特殊背包物品名字;
    private javax.swing.JTextField 特殊背包物品序号;
    private javax.swing.JButton 离线角色;
    private javax.swing.JButton 离线账号;
    private javax.swing.JTextField 等级;
    private javax.swing.JTextField 管理1;
    private javax.swing.JTextField 背包物品代码1;
    private javax.swing.JTextField 背包物品名字1;
    private javax.swing.JTextField 脸型;
    private javax.swing.JTextField 装备背包物品代码;
    private javax.swing.JTextField 装备背包物品名字;
    private javax.swing.JTextField 装备背包物品序号;
    private javax.swing.JTextField 角色ID;
    private javax.swing.JTable 角色信息;
    private javax.swing.JPanel 角色信息1;
    private javax.swing.JTable 角色其他背包;
    private javax.swing.JTable 角色商城仓库;
    private javax.swing.JTextField 角色昵称;
    private javax.swing.JTable 角色消耗背包;
    private javax.swing.JTable 角色游戏仓库;
    private javax.swing.JTable 角色点券拍卖行;
    private javax.swing.JTextField 角色点券拍卖行序号;
    private javax.swing.JTable 角色特殊背包;
    private javax.swing.JPanel 角色背包;
    private javax.swing.JTable 角色背包穿戴;
    private javax.swing.JTable 角色装备背包;
    private javax.swing.JTable 角色设置背包;
    private javax.swing.JTable 角色金币拍卖行;
    private javax.swing.JTextField 角色金币拍卖行序号;
    private javax.swing.JButton 解卡;
    private javax.swing.JButton 解封;
    private javax.swing.JTextField 设置背包物品代码;
    private javax.swing.JTextField 设置背包物品名字;
    private javax.swing.JTextField 设置背包物品序号;
    private javax.swing.JTextField 账号;
    private javax.swing.JTextField 账号ID;
    private javax.swing.JTable 账号信息;
    private javax.swing.JLabel 账号提示语言;
    private javax.swing.JTextField 账号操作;
    private javax.swing.JTextField 身上穿戴序号1;
    private javax.swing.JTextField 运气;
    private javax.swing.JTextField 金币1;
    // End of variables declaration//GEN-END:variables
}
