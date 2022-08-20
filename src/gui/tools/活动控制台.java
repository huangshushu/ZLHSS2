/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui.tools;

import database.DBConPool;
import gui.Maple;
import handling.world.MapleParty;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.ImageIcon;
import javax.swing.JDialog;
import javax.swing.JOptionPane;
import javax.swing.UIManager;
import javax.swing.table.DefaultTableModel;
import org.jvnet.substance.skin.SubstanceBusinessBlackSteelLookAndFeel;

/**
 *
 * @author Administrator
 */
public class 活动控制台 extends javax.swing.JFrame {

    public 活动控制台() {
        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image/Icon.png"));
        setIconImage(icon.getImage());
        setTitle("游戏活动管理控制台 [ 可关闭 ] ");
        initComponents();
        刷新野外BOSS刷新时间();
        刷新魔族突袭开关();
        刷新魔族攻城开关();
        刷新神秘商人开关();
        刷新野外通缉开关();
        刷新幸运职业开关();
        刷新周末倍率开关();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane6 = new javax.swing.JTabbedPane();
        jPanel20 = new javax.swing.JPanel();
        jPanel9 = new javax.swing.JPanel();
        魔族突袭开关 = new javax.swing.JButton();
        jLabel270 = new javax.swing.JLabel();
        jPanel4 = new javax.swing.JPanel();
        魔族攻城开关 = new javax.swing.JButton();
        jLabel264 = new javax.swing.JLabel();
        jPanel15 = new javax.swing.JPanel();
        野外通缉开关 = new javax.swing.JButton();
        jLabel275 = new javax.swing.JLabel();
        jPanel8 = new javax.swing.JPanel();
        幸运职业开关 = new javax.swing.JButton();
        jLabel269 = new javax.swing.JLabel();
        jLabel267 = new javax.swing.JLabel();
        jPanel14 = new javax.swing.JPanel();
        神秘商人开关 = new javax.swing.JButton();
        jLabel274 = new javax.swing.JLabel();
        jPanel11 = new javax.swing.JPanel();
        周末倍率开关 = new javax.swing.JButton();
        jLabel272 = new javax.swing.JLabel();
        jPanel12 = new javax.swing.JPanel();
        每日送货开关3 = new javax.swing.JButton();
        jLabel273 = new javax.swing.JLabel();
        BOSS相关 = new javax.swing.JPanel();
        jScrollPane104 = new javax.swing.JScrollPane();
        野外BOSS刷新时间 = new javax.swing.JTable();
        刷新野外BOSS刷新时间 = new javax.swing.JButton();
        野外BOSS序号 = new javax.swing.JTextField();
        野外BOSS刷新时间值 = new javax.swing.JTextField();
        野外BOSS = new javax.swing.JTextField();
        刷新野外BOSS刷新时间修改 = new javax.swing.JButton();
        jLabel323 = new javax.swing.JLabel();
        jLabel324 = new javax.swing.JLabel();
        jLabel325 = new javax.swing.JLabel();
        jPanel18 = new javax.swing.JPanel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextPane1 = new javax.swing.JTextPane();
        jPanel1 = new javax.swing.JPanel();

        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel9.setBackground(new java.awt.Color(255, 255, 255));
        jPanel9.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "魔族突袭", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel9.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        魔族突袭开关.setText("开关");
        魔族突袭开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                魔族突袭开关ActionPerformed(evt);
            }
        });
        jPanel9.add(魔族突袭开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(890, 30, 80, 30));

        jLabel270.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel270.setForeground(new java.awt.Color(51, 102, 255));
        jLabel270.setText("开启后，每日22:00 - 22:10，蝙蝠魔会偷袭在野外的冒险家，高于30级，落单弱小的玩家偷袭概率最高");
        jPanel9.add(jLabel270, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 840, 20));

        jPanel4.setBackground(new java.awt.Color(255, 255, 255));
        jPanel4.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "魔族攻城", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel4.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        魔族攻城开关.setText("开关");
        魔族攻城开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                魔族攻城开关ActionPerformed(evt);
            }
        });
        jPanel4.add(魔族攻城开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(890, 30, 80, 30));

        jLabel264.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel264.setForeground(new java.awt.Color(51, 102, 255));
        jLabel264.setText("开启后，周末晚上 21:10 之后魔族会进行攻城，从林中之城开始攻向明珠港，射手村，废弃都市，魔法密林。");
        jPanel4.add(jLabel264, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 870, 30));

        jPanel15.setBackground(new java.awt.Color(255, 255, 255));
        jPanel15.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "野外通缉", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel15.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        野外通缉开关.setText("开关");
        野外通缉开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                野外通缉开关ActionPerformed(evt);
            }
        });
        jPanel15.add(野外通缉开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(890, 30, 80, 30));

        jLabel275.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel275.setForeground(new java.awt.Color(51, 102, 255));
        jLabel275.setText("开启后，服务端会在启动后 1 小时候发布通缉令，通缉目标被击杀后会 1 小时再次发");
        jPanel15.add(jLabel275, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 820, 30));

        jPanel8.setBackground(new java.awt.Color(255, 255, 255));
        jPanel8.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "幸运职业", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel8.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        幸运职业开关.setText("开关");
        幸运职业开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                幸运职业开关ActionPerformed(evt);
            }
        });
        jPanel8.add(幸运职业开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(890, 30, 80, 30));

        jLabel269.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel269.setForeground(new java.awt.Color(51, 102, 255));
        jLabel269.setText("开启后，给予指定的职业增加50%的额外狩猎经验，每日 11:00 23:00 会随机重置指定的职业，二转后生效。");
        jPanel8.add(jLabel269, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 880, 30));

        jLabel267.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel267.setForeground(new java.awt.Color(255, 0, 51));

        jPanel14.setBackground(new java.awt.Color(255, 255, 255));
        jPanel14.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "神秘商人", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel14.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        神秘商人开关.setText("开关");
        神秘商人开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                神秘商人开关ActionPerformed(evt);
            }
        });
        jPanel14.add(神秘商人开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(890, 30, 80, 30));

        jLabel274.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel274.setForeground(new java.awt.Color(51, 102, 255));
        jLabel274.setText("开启后，服务端会开始召唤神秘商人，商人每次只会待 5 分钟，消失并告知下一次出现的信息（9900001.js）");
        jPanel14.add(jLabel274, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 870, 30));

        jPanel11.setBackground(new java.awt.Color(255, 255, 255));
        jPanel11.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "周末随机双倍活动", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel11.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        周末倍率开关.setText("开关");
        周末倍率开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                周末倍率开关ActionPerformed(evt);
            }
        });
        jPanel11.add(周末倍率开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(890, 30, 80, 30));

        jLabel272.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel272.setForeground(new java.awt.Color(51, 102, 255));
        jLabel272.setText("开启后，周六，周日凌晨会随机开启24小时2倍经验，爆率，或者经验爆率活动。");
        jPanel11.add(jLabel272, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 820, 30));

        jPanel12.setBackground(new java.awt.Color(255, 255, 255));
        jPanel12.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "每日送货", javax.swing.border.TitledBorder.LEFT, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel12.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        每日送货开关3.setText("开关");
        每日送货开关3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                每日送货开关3ActionPerformed(evt);
            }
        });
        jPanel12.add(每日送货开关3, new org.netbeans.lib.awtextra.AbsoluteConstraints(1050, 30, 130, -1));

        jLabel273.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel273.setForeground(new java.awt.Color(255, 0, 51));
        jLabel273.setText("开启后，每日12:00之后开始送货，从明珠港开始，到废弃都市结束。");
        jPanel12.add(jLabel273, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 30, 820, 30));

        jPanel11.add(jPanel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 400, 1190, 80));

        javax.swing.GroupLayout jPanel20Layout = new javax.swing.GroupLayout(jPanel20);
        jPanel20.setLayout(jPanel20Layout);
        jPanel20Layout.setHorizontalGroup(
            jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel20Layout.createSequentialGroup()
                .addComponent(jPanel8, javax.swing.GroupLayout.PREFERRED_SIZE, 980, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, Short.MAX_VALUE))
            .addGroup(jPanel20Layout.createSequentialGroup()
                .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel9, javax.swing.GroupLayout.PREFERRED_SIZE, 980, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jPanel4, javax.swing.GroupLayout.PREFERRED_SIZE, 980, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jPanel15, javax.swing.GroupLayout.PREFERRED_SIZE, 980, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel20Layout.createSequentialGroup()
                        .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jPanel11, javax.swing.GroupLayout.PREFERRED_SIZE, 980, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jPanel14, javax.swing.GroupLayout.PREFERRED_SIZE, 981, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel267, javax.swing.GroupLayout.PREFERRED_SIZE, 610, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel20Layout.setVerticalGroup(
            jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel20Layout.createSequentialGroup()
                .addComponent(jPanel9, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel4, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel8, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(14, 14, 14)
                .addComponent(jPanel15, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel267, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jPanel14, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jPanel11, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 39, Short.MAX_VALUE))
        );

        jTabbedPane6.addTab("活动控制台", jPanel20);

        BOSS相关.setBackground(new java.awt.Color(255, 255, 255));
        BOSS相关.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "BOSS刷新时间", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 24))); // NOI18N
        BOSS相关.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        野外BOSS刷新时间.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "序号", "野外BOSS", "刷新时间/分"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        野外BOSS刷新时间.getTableHeader().setReorderingAllowed(false);
        jScrollPane104.setViewportView(野外BOSS刷新时间);

        BOSS相关.add(jScrollPane104, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 30, 460, 490));

        刷新野外BOSS刷新时间.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新野外BOSS刷新时间.setText("刷新");
        刷新野外BOSS刷新时间.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新野外BOSS刷新时间ActionPerformed(evt);
            }
        });
        BOSS相关.add(刷新野外BOSS刷新时间, new org.netbeans.lib.awtextra.AbsoluteConstraints(680, 180, 90, 30));

        野外BOSS序号.setEditable(false);
        BOSS相关.add(野外BOSS序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(480, 100, 100, 30));
        BOSS相关.add(野外BOSS刷新时间值, new org.netbeans.lib.awtextra.AbsoluteConstraints(790, 100, 110, 30));

        野外BOSS.setEditable(false);
        BOSS相关.add(野外BOSS, new org.netbeans.lib.awtextra.AbsoluteConstraints(580, 100, 210, 30));

        刷新野外BOSS刷新时间修改.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新野外BOSS刷新时间修改.setText("修改");
        刷新野外BOSS刷新时间修改.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新野外BOSS刷新时间修改ActionPerformed(evt);
            }
        });
        BOSS相关.add(刷新野外BOSS刷新时间修改, new org.netbeans.lib.awtextra.AbsoluteConstraints(590, 180, 90, 30));

        jLabel323.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel323.setText("刷新时间；");
        BOSS相关.add(jLabel323, new org.netbeans.lib.awtextra.AbsoluteConstraints(790, 80, -1, -1));

        jLabel324.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel324.setText("序号；");
        BOSS相关.add(jLabel324, new org.netbeans.lib.awtextra.AbsoluteConstraints(480, 80, -1, -1));

        jLabel325.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel325.setText("BOSS；");
        BOSS相关.add(jLabel325, new org.netbeans.lib.awtextra.AbsoluteConstraints(580, 80, -1, -1));

        jTabbedPane6.addTab("野外BOSS刷新时间", BOSS相关);

        jPanel18.setBackground(new java.awt.Color(255, 255, 255));
        jPanel18.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jTextPane1.setEditable(false);
        jTextPane1.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jTextPane1.setForeground(new java.awt.Color(51, 0, 255));
        jTextPane1.setText("[每日送货] 每日 12:00 - 23:59\n[魔族偷袭] 每日 22:00 - 22:10\n[魔族攻城] 周日 21:00 - 21:30\n[每日答题] 周一至周五 20:10 - 20:20 周末 20:10 - 20:59\n[神秘商人] 完全随机出现，无规律\n[野外通缉] 系统发布一个后，玩家完成后 1 小时刷新\n[幸运职业] 11:00 23:00 随机抽取职业群，增加 50% 狩猎经验\n[周末狂欢] 周六，周日凌晨随机开启2倍经验，2倍爆率，2倍经验和爆率\n[喜从天降] 周日，22:30 会在 2 频道市场狂欢发放物品\n[鱼来鱼往] 周一至周五 21:30 - 21:40 周末 21:30 - 21:59 在水下世界举行\n");
        jTextPane1.setToolTipText("");
        jScrollPane1.setViewportView(jTextPane1);

        jPanel18.add(jScrollPane1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 20, 620, 510));

        jTabbedPane6.addTab("预览", jPanel18);

        getContentPane().add(jTabbedPane6, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 990, 590));

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 1000, Short.MAX_VALUE)
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 600, Short.MAX_VALUE)
        );

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1000, 600));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void 刷新野外BOSS刷新时间ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新野外BOSS刷新时间ActionPerformed
        刷新野外BOSS刷新时间();
    }//GEN-LAST:event_刷新野外BOSS刷新时间ActionPerformed

    private void 刷新野外BOSS刷新时间修改ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新野外BOSS刷新时间修改ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.野外BOSS刷新时间值.getText().matches("[0-9]+");

        if (result1) {
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");

                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM configvalues WHERE id = ?");

                ps1.setInt(1, Integer.parseInt(this.野外BOSS序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    sqlString1 = "update configvalues set Val = '" + this.野外BOSS刷新时间值.getText() + "' where id= " + this.野外BOSS序号.getText() + ";";
                    PreparedStatement Val = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    Val.executeUpdate(sqlString1);
                    刷新野外BOSS刷新时间();
                    Maple.GetConfigValues();
                    JOptionPane.showMessageDialog(null, "修改成功，已经生效");
                }
            } catch (SQLException ex) {
                Logger.getLogger(活动控制台.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要修改的刷新时间");
        }
    }//GEN-LAST:event_刷新野外BOSS刷新时间修改ActionPerformed

    private void 魔族突袭开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_魔族突袭开关ActionPerformed
        按键开关("魔族突袭开关", 2400);
        刷新魔族突袭开关();
    }//GEN-LAST:event_魔族突袭开关ActionPerformed

    private void 魔族攻城开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_魔族攻城开关ActionPerformed
        按键开关("魔族攻城开关", 2404);
        刷新魔族攻城开关();
    }//GEN-LAST:event_魔族攻城开关ActionPerformed

    private void 野外通缉开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_野外通缉开关ActionPerformed
        按键开关("野外通缉开关", 2407);
        刷新野外通缉开关();
    }//GEN-LAST:event_野外通缉开关ActionPerformed

    private void 幸运职业开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_幸运职业开关ActionPerformed
        按键开关("幸运职业开关", 749);
        刷新幸运职业开关();
    }//GEN-LAST:event_幸运职业开关ActionPerformed

    private void 神秘商人开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_神秘商人开关ActionPerformed
        按键开关("神秘商人开关", 2406);
        刷新神秘商人开关();
    }//GEN-LAST:event_神秘商人开关ActionPerformed

    private void 周末倍率开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_周末倍率开关ActionPerformed
        按键开关("周末倍率开关", 2405);
        刷新周末倍率开关();
    }//GEN-LAST:event_周末倍率开关ActionPerformed

    private void 每日送货开关3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_每日送货开关3ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_每日送货开关3ActionPerformed

    private void 刷新周末倍率开关() {
        String 显示 = "";
        int S = gui.Maple.ConfigValuesMap.get("周末倍率开关");
        if (S <= 0) {
            显示 = "开启";
        } else {
            显示 = "关闭";
        }
        周末倍率开关.setText(显示);
    }

    private void 刷新神秘商人开关() {
        String 显示 = "";
        int S = gui.Maple.ConfigValuesMap.get("神秘商人开关");
        if (S <= 0) {
            显示 = "开启";
        } else {
            显示 = "关闭";
        }
        神秘商人开关.setText(显示);
    }

    private void 刷新幸运职业开关() {
        String 显示 = "";
        int S = gui.Maple.ConfigValuesMap.get("幸运职业开关");
        if (S <= 0) {
            显示 = "开启";
        } else {
            显示 = "关闭";
        }
        幸运职业开关.setText(显示);
    }

    private void 刷新野外通缉开关() {
        String 显示 = "";
        int S = gui.Maple.ConfigValuesMap.get("野外通缉开关");
        if (S <= 0) {
            显示 = "开启";
        } else {
            显示 = "关闭";
        }
        野外通缉开关.setText(显示);
    }

    private void 刷新魔族突袭开关() {
        String 显示 = "";
        int S = gui.Maple.ConfigValuesMap.get("魔族突袭开关");
        if (S <= 0) {
            显示 = "开启";
        } else {
            显示 = "关闭";
        }
        魔族突袭开关.setText(显示);
    }

    private void 刷新魔族攻城开关() {
        String 显示 = "";
        int S = gui.Maple.ConfigValuesMap.get("魔族攻城开关");
        if (S <= 0) {
            显示 = "开启";
        } else {
            显示 = "关闭";
        }
        魔族攻城开关.setText(显示);
    }

    public void 刷新野外BOSS刷新时间() {
        for (int i = ((DefaultTableModel) (this.野外BOSS刷新时间.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.野外BOSS刷新时间.getModel())).removeRow(i);
        }
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM configvalues WHERE id >= 10000 && id < 20000");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 野外BOSS刷新时间.getModel()).insertRow(野外BOSS刷新时间.getRowCount(), new Object[]{rs.getString("id"), rs.getString("name"), rs.getString("Val")});
            }
        } catch (SQLException ex) {
            Logger.getLogger(活动控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
        野外BOSS刷新时间.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 野外BOSS刷新时间.getSelectedRow();
                String a = 野外BOSS刷新时间.getValueAt(i, 0).toString();
                String a1 = 野外BOSS刷新时间.getValueAt(i, 1).toString();
                String a2 = 野外BOSS刷新时间.getValueAt(i, 2).toString();
                野外BOSS序号.setText(a);
                野外BOSS.setText(a1);
                野外BOSS刷新时间值.setText(a2);
            }
        });
    }

    public void 按键开关(String a, int b) {
        try {
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
                        String sqlString2 = null;
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
                        String sqlString2 = null;
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
            Maple.GetConfigValues();
        } catch (SQLException ex) {
            Logger.getLogger(活动控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(活动控制台.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(活动控制台.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(活动控制台.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(活动控制台.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        活动控制台.setDefaultLookAndFeelDecorated(true);
        JDialog.setDefaultLookAndFeelDecorated(true);
        try {
            UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());
            UIManager.setLookAndFeel(new SubstanceBusinessBlackSteelLookAndFeel());
            // UIManager.setLookAndFeel(new SubstanceBusinessLookAndFeel());
        } catch (Exception e) {
            e.printStackTrace();
        }
        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new 活动控制台().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel BOSS相关;
    private javax.swing.JLabel jLabel264;
    private javax.swing.JLabel jLabel267;
    private javax.swing.JLabel jLabel269;
    private javax.swing.JLabel jLabel270;
    private javax.swing.JLabel jLabel272;
    private javax.swing.JLabel jLabel273;
    private javax.swing.JLabel jLabel274;
    private javax.swing.JLabel jLabel275;
    private javax.swing.JLabel jLabel323;
    private javax.swing.JLabel jLabel324;
    private javax.swing.JLabel jLabel325;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel11;
    private javax.swing.JPanel jPanel12;
    private javax.swing.JPanel jPanel14;
    private javax.swing.JPanel jPanel15;
    private javax.swing.JPanel jPanel18;
    private javax.swing.JPanel jPanel20;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JPanel jPanel8;
    private javax.swing.JPanel jPanel9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane104;
    private javax.swing.JTabbedPane jTabbedPane6;
    private javax.swing.JTextPane jTextPane1;
    private javax.swing.JButton 刷新野外BOSS刷新时间;
    private javax.swing.JButton 刷新野外BOSS刷新时间修改;
    private javax.swing.JButton 周末倍率开关;
    private javax.swing.JButton 幸运职业开关;
    private javax.swing.JButton 每日送货开关3;
    private javax.swing.JButton 神秘商人开关;
    private javax.swing.JTextField 野外BOSS;
    private javax.swing.JTable 野外BOSS刷新时间;
    private javax.swing.JTextField 野外BOSS刷新时间值;
    private javax.swing.JTextField 野外BOSS序号;
    private javax.swing.JButton 野外通缉开关;
    private javax.swing.JButton 魔族攻城开关;
    private javax.swing.JButton 魔族突袭开关;
    // End of variables declaration//GEN-END:variables
}
