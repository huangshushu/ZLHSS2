/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui.tools;

import client.MapleCharacter;
import database.DBConPool;
import gui.Maple;
import handling.channel.ChannelServer;
import server.MapleItemInformationProvider;
import server.Start;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import static gui.Maple.ConfigValuesMap;

/**
 *
 * @author Administrator
 */
public class 商店管理控制台 extends javax.swing.JFrame {

    /**
     * Creates new form 锻造控制台
     */
    public 商店管理控制台() {
        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image2/logo.png"));
        setIconImage(icon.getImage());
        setTitle("【商店控制台工具，可关闭】");
        GetConfigValues();
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel35 = new javax.swing.JPanel();
        jPanel36 = new javax.swing.JPanel();
        jScrollPane25 = new javax.swing.JScrollPane();
        游戏商店2 = new javax.swing.JTable();
        jPanel56 = new javax.swing.JPanel();
        删除商品 = new javax.swing.JButton();
        新增商品 = new javax.swing.JButton();
        商品序号 = new javax.swing.JTextField();
        商店代码 = new javax.swing.JTextField();
        商品物品代码 = new javax.swing.JTextField();
        商品售价金币 = new javax.swing.JTextField();
        jLabel268 = new javax.swing.JLabel();
        jLabel269 = new javax.swing.JLabel();
        jLabel271 = new javax.swing.JLabel();
        jLabel272 = new javax.swing.JLabel();
        修改商品 = new javax.swing.JButton();
        商品名称 = new javax.swing.JTextField();
        jLabel273 = new javax.swing.JLabel();
        jPanel55 = new javax.swing.JPanel();
        查询商店2 = new javax.swing.JButton();
        查询商店 = new javax.swing.JTextField();
        jLabel270 = new javax.swing.JLabel();
        jButton33 = new javax.swing.JButton();

        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel35.setBackground(new java.awt.Color(255, 255, 255));

        jPanel36.setBackground(new java.awt.Color(250, 250, 250));

        javax.swing.GroupLayout jPanel36Layout = new javax.swing.GroupLayout(jPanel36);
        jPanel36.setLayout(jPanel36Layout);
        jPanel36Layout.setHorizontalGroup(
            jPanel36Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 1110, Short.MAX_VALUE)
        );
        jPanel36Layout.setVerticalGroup(
            jPanel36Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );

        游戏商店2.setBackground(new java.awt.Color(153, 153, 153));
        游戏商店2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        游戏商店2.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "序号", "商店ID", "物品代码", "销售金币", "物品名称"
            }
        ) {
            final boolean[] canEdit = new boolean [] {
                false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        游戏商店2.getTableHeader().setReorderingAllowed(false);
        jScrollPane25.setViewportView(游戏商店2);

        jPanel56.setBackground(new java.awt.Color(250, 250, 250));
        jPanel56.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "查询商品出售物品", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel56.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        删除商品.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        删除商品.setText("删除");
        删除商品.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除商品ActionPerformed(evt);
            }
        });
        jPanel56.add(删除商品, new org.netbeans.lib.awtextra.AbsoluteConstraints(640, 70, -1, 30));

        新增商品.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        新增商品.setText("新增");
        新增商品.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                新增商品ActionPerformed(evt);
            }
        });
        jPanel56.add(新增商品, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 70, -1, 30));

        商品序号.setEditable(false);
        商品序号.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jPanel56.add(商品序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 70, 80, 30));

        商店代码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        商店代码.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商店代码ActionPerformed(evt);
            }
        });
        jPanel56.add(商店代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 70, 80, 30));

        商品物品代码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jPanel56.add(商品物品代码, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 70, 90, 30));

        商品售价金币.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jPanel56.add(商品售价金币, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 70, 100, 30));

        jLabel268.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jLabel268.setText("出售金币");
        jPanel56.add(jLabel268, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 50, -1, -1));

        jLabel269.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jLabel269.setText("序号");
        jPanel56.add(jLabel269, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 50, -1, -1));

        jLabel271.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jLabel271.setText("物品名称");
        jPanel56.add(jLabel271, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 50, -1, -1));

        jLabel272.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jLabel272.setText("商店ID");
        jPanel56.add(jLabel272, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 50, -1, -1));

        修改商品.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        修改商品.setText("修改");
        修改商品.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改商品ActionPerformed(evt);
            }
        });
        jPanel56.add(修改商品, new org.netbeans.lib.awtextra.AbsoluteConstraints(570, 70, -1, 30));

        商品名称.setEditable(false);
        商品名称.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        商品名称.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商品名称ActionPerformed(evt);
            }
        });
        jPanel56.add(商品名称, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 70, 100, 30));

        jLabel273.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jLabel273.setText("物品代码");
        jPanel56.add(jLabel273, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 50, -1, -1));

        jPanel55.setBackground(new java.awt.Color(250, 250, 250));
        jPanel55.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "查询商品出售物品", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.TOP, new java.awt.Font("幼圆", 0, 18))); // NOI18N
        jPanel55.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        查询商店2.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        查询商店2.setText("查询商店");
        查询商店2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查询商店2ActionPerformed(evt);
            }
        });
        jPanel55.add(查询商店2, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 50, -1, 30));

        查询商店.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jPanel55.add(查询商店, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 50, 110, 30));

        jLabel270.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jLabel270.setText("商店ID");
        jPanel55.add(jLabel270, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 50, -1, 30));

        jButton33.setFont(new java.awt.Font("微软雅黑", 0, 15)); // NOI18N
        jButton33.setText("查看全部");
        jButton33.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton33ActionPerformed(evt);
            }
        });
        jPanel55.add(jButton33, new org.netbeans.lib.awtextra.AbsoluteConstraints(760, 40, 258, 63));

        javax.swing.GroupLayout jPanel35Layout = new javax.swing.GroupLayout(jPanel35);
        jPanel35.setLayout(jPanel35Layout);
        jPanel35Layout.setHorizontalGroup(
            jPanel35Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel35Layout.createSequentialGroup()
                .addGroup(jPanel35Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jScrollPane25)
                    .addComponent(jPanel55, javax.swing.GroupLayout.DEFAULT_SIZE, 1095, Short.MAX_VALUE)
                    .addComponent(jPanel56, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addGap(0, 15, Short.MAX_VALUE))
            .addGroup(jPanel35Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addComponent(jPanel36, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel35Layout.setVerticalGroup(
            jPanel35Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel35Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jScrollPane25, javax.swing.GroupLayout.PREFERRED_SIZE, 343, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel55, javax.swing.GroupLayout.PREFERRED_SIZE, 134, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel56, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(55, Short.MAX_VALUE))
            .addGroup(jPanel35Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel35Layout.createSequentialGroup()
                    .addContainerGap(631, Short.MAX_VALUE)
                    .addComponent(jPanel36, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addContainerGap(48, Short.MAX_VALUE)))
        );

        getContentPane().add(jPanel35, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1110, -1));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void 删除商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除商品ActionPerformed
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.商品序号.getText().matches("[0-9]+");
        if (result) {
            int 商城SN编码 = Integer.parseInt(this.商品序号.getText());
            try {
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM shopitems WHERE shopitemid = ?");
                ps1.setInt(1, 商城SN编码);
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from shopitems where shopitemid =" + 商城SN编码 + "";
                    ps1.executeUpdate(sqlstr);
                    查询商店(1);
                }
                rs.close();
                ps1.close();
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
            JOptionPane.showMessageDialog(null, "[信息]:删除商店商品成功。");
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要删除的商品。");
        }
    }//GEN-LAST:event_删除商品ActionPerformed

    private void 新增商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_新增商品ActionPerformed

        boolean result = this.商品物品代码.getText().matches("[0-9]+");
        boolean result1 = this.商店代码.getText().matches("[0-9]+");
        boolean result2 = this.商品售价金币.getText().matches("[0-9]+");

        if (result && result1 && result2) {
            if (Integer.parseInt(this.商店代码.getText()) < 0 && Integer.parseInt(this.商品物品代码.getText()) < 0 && Integer.parseInt(this.商品售价金币.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                return;
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("INSERT INTO shopitems (shopid ,itemid ,price ,pitch ,position ,reqitem ,reqitemq) VALUES ( ?, ?, ?, ?, ?, ?, ?)")) {
                ps.setInt(1, Integer.parseInt(this.商店代码.getText()));
                ps.setInt(2, Integer.parseInt(this.商品物品代码.getText()));
                ps.setInt(3, Integer.parseInt(this.商品售价金币.getText()));
                ps.setInt(4, 0);
                ps.setInt(5, 0);
                ps.setInt(6, 0);
                ps.setInt(7, 0);
                ps.executeUpdate();
                ps.close();
                查询商店(1);
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
            JOptionPane.showMessageDialog(null, "[信息]:新增商店商品成功。");
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:输入<商店ID><物品代码><售价>。");
        }
    }//GEN-LAST:event_新增商品ActionPerformed

    private void 商店代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商店代码ActionPerformed

    }//GEN-LAST:event_商店代码ActionPerformed

    private void 修改商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改商品ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.商品物品代码.getText().matches("[0-9]+");
        boolean result1 = this.商店代码.getText().matches("[0-9]+");
        boolean result2 = this.商品售价金币.getText().matches("[0-9]+");

        if (result && result1 && result2) {
            if (Integer.parseInt(this.商店代码.getText()) < 0 && Integer.parseInt(this.商品物品代码.getText()) < 0 && Integer.parseInt(this.商品售价金币.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try {
                ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE shopitems SET itemid = ?,price = ?,shopid = ?WHERE shopitemid = ?");
                ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM shopitems WHERE shopitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.商品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    String sqlString2 = null;
                    String sqlString3 = null;
                    sqlString1 = "update shopitems set itemid='" + this.商品物品代码.getText() + "' where shopitemid=" + this.商品序号.getText() + ";";
                    PreparedStatement itemid = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString1);
                    itemid.executeUpdate(sqlString1);

                    sqlString2 = "update shopitems set price='" + this.商品售价金币.getText() + "' where shopitemid=" + this.商品序号.getText() + ";";
                    PreparedStatement price = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString2);
                    price.executeUpdate(sqlString2);

                    sqlString3 = "update shopitems set shopid='" + this.商店代码.getText() + "' where shopitemid=" + this.商品序号.getText() + ";";
                    PreparedStatement shopid = DBConPool.getInstance().getDataSource().getConnection().prepareStatement(sqlString3);
                    shopid.executeUpdate(sqlString3);

                    查询商店(1);
                }
                rs.close();
                ps1.close();
                JOptionPane.showMessageDialog(null, "[信息]:商店商品修改成功。");
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:选择你要修改的商品,并填写<商店ID><物品代码><售价金币>。");
        }
    }//GEN-LAST:event_修改商品ActionPerformed

    private void 商品名称ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商品名称ActionPerformed

    }//GEN-LAST:event_商品名称ActionPerformed

    private void 查询商店2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查询商店2ActionPerformed
        查询商店(1);
    }//GEN-LAST:event_查询商店2ActionPerformed

    private void jButton33ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton33ActionPerformed

        查询商店(0);
        // TODO add your handling code here:
    }//GEN-LAST:event_jButton33ActionPerformed
    public void 查询商店(int lx) {

        boolean result = this.查询商店.getText().matches("[0-9]+");
        if (lx == 0) {
            result = true;
        }
        if (result) {
            if (lx != 0) {
                if (Integer.parseInt(this.查询商店.getText()) < 0) {
                    JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                    return;
                }
            }
            for (int i = this.游戏商店2.getModel().getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.游戏商店2.getModel())).removeRow(i);
            }
            try {
                Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = null;
                ResultSet rs = null;
                if (lx == 0) {
                    ps = con.prepareStatement("SELECT * FROM shopitems");
                } else {
                    ps = con.prepareStatement("SELECT * FROM shopitems WHERE shopid = " + Integer.parseInt(this.查询商店.getText()) + " ");
                }
                rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) 游戏商店2.getModel()).insertRow(游戏商店2.getRowCount(), new Object[]{
                        rs.getInt("shopitemid"),
                        rs.getInt("shopid"),
                        rs.getInt("itemid"),
                        rs.getInt("price"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });
                }
                rs.close();
                ps.close();
                JOptionPane.showMessageDialog(null, "[信息]:商城物品查询成功。");
            } catch (SQLException ex) {
                Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
            }
            游戏商店2.addMouseListener(new MouseAdapter() {
                public void mouseClicked(MouseEvent e) {
                    int i = 游戏商店2.getSelectedRow();
                    String a = 游戏商店2.getValueAt(i, 0).toString();
                    String a1 = 游戏商店2.getValueAt(i, 1).toString();
                    String a2 = 游戏商店2.getValueAt(i, 2).toString();
                    String a3 = 游戏商店2.getValueAt(i, 3).toString();
                    //String a4 = 游戏商店2.getValueAt(i, 4).toString();
                    商品序号.setText(a);
                    商店代码.setText(a1);
                    商品物品代码.setText(a2);
                    商品售价金币.setText(a3);
                    // 商品名称.setText(a4);
                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你需要查询的商店ID。");
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

    public static void Gaincharacter7(String Name, int Channale, int Piot) {
        try {
            int ret = Getcharacter7(Name, Channale);
            if (ret == -1) {
                ret = 0;
                PreparedStatement ps = null;
                try {
                    ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("INSERT INTO character7 (channel, Name,Point) VALUES (?, ?, ?)");
                    ps.setInt(1, Channale);
                    ps.setString(2, Name);
                    ps.setInt(3, ret);
                    ps.execute();
                } catch (SQLException e) {
                    System.out.println("xxxxxxxx:" + e);
                } finally {
                    try {
                        if (ps != null) {
                            ps.close();
                        }
                    } catch (SQLException e) {
                        System.out.println("xxxxxxxxzzzzzzz:" + e);
                    }
                }
            }
            ret += Piot;
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE character7 SET `Point` = ? WHERE Name = ? and channel = ?");
            ps.setInt(1, ret);
            ps.setString(2, Name);
            ps.setInt(3, Channale);
            ps.execute();
            ps.close();
        } catch (SQLException sql) {
            System.err.println("Getcharacter7!!55" + sql);
        }
    }

    public static int Getcharacter7(String Name, int Channale) {
        int ret = -1;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM character7 WHERE channel = ? and Name = ?");
            ps.setInt(1, Channale);
            ps.setString(2, Name);
            ResultSet rs = ps.executeQuery();
            rs.next();
            ret = rs.getInt("Point");
            rs.close();
            ps.close();
        } catch (SQLException ex) {
        }
        return ret;
    }

    public static int Get商城物品() {
        int ret = -1;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE serial = ?");
            int serial = 0;
            ps.setInt(1, serial);
            ResultSet rs = ps.executeQuery();
            rs.next();
            ret = rs.getInt("meso");
            rs.close();
            ps.close();
        } catch (SQLException ex) {
        }
        return ret;
    }

    public static void Gain商城物品(int Piot, int Piot1) {
        try {
            int ret = Get商城物品();
            if (ret == -1) {
                ret = 0;
                PreparedStatement ps = null;
                try {
                    ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("INSERT INTO cashshop_modified_items (serial,meso) VALUES (?, ?)");
                    int serial = 0;
                    ps.setInt(1, serial);
                    ps.setInt(2, ret);
                    ps.execute();
                } catch (SQLException e) {
                    System.out.println("xxxxxxxx:" + e);
                } finally {
                    try {
                        if (ps != null) {
                            ps.close();
                        }
                    } catch (SQLException e) {
                        System.out.println("xxxxxxxxzzzzzzz:" + e);
                    }
                }
            }
            ret += Piot;
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE cashshop_modified_items SET `meso` = ? WHERE serial = ?");
            ps.setInt(1, ret);
            int serial = 0;
            ps.setInt(2, serial);
            ps.execute();
            ps.close();
        } catch (SQLException sql) {
            System.err.println("获取错误!!55" + sql);
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
        GetConfigValues();
    }

    public static void GetConfigValues() {
        try {
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
                ps.close();
            } catch (SQLException ex) {
                System.err.println("读取动态数据库出错：" + ex.getMessage());
            }
        } catch (SQLException ex) {
            Logger.getLogger(商店管理控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton33;
    private javax.swing.JLabel jLabel268;
    private javax.swing.JLabel jLabel269;
    private javax.swing.JLabel jLabel270;
    private javax.swing.JLabel jLabel271;
    private javax.swing.JLabel jLabel272;
    private javax.swing.JLabel jLabel273;
    private javax.swing.JPanel jPanel35;
    private javax.swing.JPanel jPanel36;
    private javax.swing.JPanel jPanel55;
    private javax.swing.JPanel jPanel56;
    private javax.swing.JScrollPane jScrollPane25;
    private javax.swing.JButton 修改商品;
    private javax.swing.JButton 删除商品;
    private javax.swing.JTextField 商品名称;
    private javax.swing.JTextField 商品售价金币;
    private javax.swing.JTextField 商品序号;
    private javax.swing.JTextField 商品物品代码;
    private javax.swing.JTextField 商店代码;
    private javax.swing.JButton 新增商品;
    private javax.swing.JTextField 查询商店;
    private javax.swing.JButton 查询商店2;
    private javax.swing.JTable 游戏商店2;
    // End of variables declaration//GEN-END:variables
}
