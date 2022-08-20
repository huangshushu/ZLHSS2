/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui.tools;

import database.DBConPool;
import gui.Maple;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Administrator
 */
public class 永恒重生装备控制台 extends javax.swing.JFrame {

    /**
     * Creates new form 锻造控制台
     */
    public 永恒重生装备控制台() {
        try {
            ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image2/logo.png"));
            setIconImage(icon.getImage());
            setTitle("永恒重生装备控制台");
            initComponents();
            刷新永恒升级开关();
            刷新重生升级开关();
            Maple.GetConfigValues();
        } catch (SQLException ex) {
            Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void 刷新永恒升级开关() {
        String 显示 = "";
        int S = Maple.ConfigValuesMap.get("永恒升级开关");
        if (S <= 0) {
            显示 = "永恒升级:开启";
        } else {
            显示 = "永恒升级:关闭";
        }
        永恒升级开关.setText(显示);
    }

    private void 刷新重生升级开关() {
        String 显示 = "";
        int S = Maple.ConfigValuesMap.get("重生升级开关");
        if (S <= 0) {
            显示 = "重生升级:开启";
        } else {
            显示 = "重生升级:关闭";
        }
        重生升级开关.setText(显示);
    }

    public void 按键开关(String a, int b) {
        try {
            int 检测开关 = Maple.ConfigValuesMap.get(a);
            PreparedStatement ps = null;
            PreparedStatement ps1 = null;
            ResultSet rs = null;
            if (检测开关 > 0) {
                try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                    ps = con.prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                    ps1 = con.prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                    ps1.setInt(1, b);
                    rs = ps1.executeQuery();
                    if (rs.next()) {
                        String sqlString2 = null;
                        String sqlString3 = null;
                        String sqlString4 = null;
                        sqlString2 = "update configvalues set Val= '0' where id= '" + b + "';";
                        PreparedStatement dropperid = con.prepareStatement(sqlString2);
                        dropperid.executeUpdate(sqlString2);
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
                }
            } else {
                try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                    ps = con.prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                    ps1 = con.prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                    ps1.setInt(1, b);
                    rs = ps1.executeQuery();
                    if (rs.next()) {
                        String sqlString2 = null;
                        String sqlString3 = null;
                        String sqlString4 = null;
                        sqlString2 = "update configvalues set Val= '1' where id='" + b + "';";
                        PreparedStatement dropperid = con.prepareStatement(sqlString2);
                        dropperid.executeUpdate(sqlString2);
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            Maple.GetConfigValues();
        } catch (SQLException ex) {
            Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        永恒升级开关 = new javax.swing.JButton();
        重生升级开关 = new javax.swing.JButton();
        jScrollPane4 = new javax.swing.JScrollPane();
        升级经验信息 = new javax.swing.JTable();
        jLabel255 = new javax.swing.JLabel();
        刷新经验表 = new javax.swing.JButton();
        装备升级序号 = new javax.swing.JTextField();
        装备升级经验 = new javax.swing.JTextField();
        装备升级等级 = new javax.swing.JTextField();
        jLabel256 = new javax.swing.JLabel();
        jLabel257 = new javax.swing.JLabel();
        永恒升级开关1 = new javax.swing.JButton();
        jLabel258 = new javax.swing.JLabel();
        jScrollPane5 = new javax.swing.JScrollPane();
        装备升级设置 = new javax.swing.JTable();
        刷新设置表 = new javax.swing.JButton();
        装备升级序号1 = new javax.swing.JTextField();
        装备升级等级1 = new javax.swing.JTextField();
        装备升级经验1 = new javax.swing.JTextField();
        永恒升级开关2 = new javax.swing.JButton();
        jLabel259 = new javax.swing.JLabel();
        jLabel260 = new javax.swing.JLabel();
        jLabel261 = new javax.swing.JLabel();
        jPanel1 = new javax.swing.JPanel();

        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        永恒升级开关.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        永恒升级开关.setText("永恒升级");
        永恒升级开关.setToolTipText("");
        永恒升级开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                永恒升级开关ActionPerformed(evt);
            }
        });
        getContentPane().add(永恒升级开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 50, 130, 30));

        重生升级开关.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        重生升级开关.setText("重生升级");
        重生升级开关.setToolTipText("");
        重生升级开关.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                重生升级开关ActionPerformed(evt);
            }
        });
        getContentPane().add(重生升级开关, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 90, 130, 30));

        升级经验信息.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null},
                {null, null, null},
                {null, null, null},
                {null, null, null}
            },
            new String [] {
                "*", "等级", "经验"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane4.setViewportView(升级经验信息);

        getContentPane().add(jScrollPane4, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 50, 320, 310));

        jLabel255.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel255.setText("目前最高30级");
        getContentPane().add(jLabel255, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 510, 370, 20));

        刷新经验表.setText("刷新经验表");
        刷新经验表.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新经验表ActionPerformed(evt);
            }
        });
        getContentPane().add(刷新经验表, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 170, 130, 30));

        装备升级序号.setEditable(false);
        getContentPane().add(装备升级序号, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 360, 60, -1));
        getContentPane().add(装备升级经验, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 360, 170, -1));

        装备升级等级.setEditable(false);
        getContentPane().add(装备升级等级, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 360, 90, -1));

        jLabel256.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel256.setText("装备升级开关:");
        getContentPane().add(jLabel256, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 20, -1, 30));

        jLabel257.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel257.setText("装备升级属性设置请在服务端中的设置");
        getContentPane().add(jLabel257, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 440, 370, 30));

        永恒升级开关1.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        永恒升级开关1.setText("修改");
        永恒升级开关1.setToolTipText("");
        永恒升级开关1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                永恒升级开关1ActionPerformed(evt);
            }
        });
        getContentPane().add(永恒升级开关1, new org.netbeans.lib.awtextra.AbsoluteConstraints(720, 390, 130, 30));

        jLabel258.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel258.setText("装备升级一般设置项:");
        getContentPane().add(jLabel258, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 20, -1, 30));

        装备升级设置.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null},
                {null, null, null},
                {null, null, null},
                {null, null, null}
            },
            new String [] {
                "1", "信息", "值"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane5.setViewportView(装备升级设置);

        getContentPane().add(jScrollPane5, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 50, 350, 310));

        刷新设置表.setText("刷新设置表");
        刷新设置表.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新设置表ActionPerformed(evt);
            }
        });
        getContentPane().add(刷新设置表, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 130, 130, 30));

        装备升级序号1.setEditable(false);
        getContentPane().add(装备升级序号1, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 360, 60, -1));

        装备升级等级1.setEditable(false);
        getContentPane().add(装备升级等级1, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 360, 160, -1));
        getContentPane().add(装备升级经验1, new org.netbeans.lib.awtextra.AbsoluteConstraints(720, 360, 130, -1));

        永恒升级开关2.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        永恒升级开关2.setText("修改");
        永恒升级开关2.setToolTipText("");
        永恒升级开关2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                永恒升级开关2ActionPerformed(evt);
            }
        });
        getContentPane().add(永恒升级开关2, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 390, 130, 30));

        jLabel259.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel259.setText("装备升级所需经验:");
        getContentPane().add(jLabel259, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 20, -1, 30));

        jLabel260.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel260.setText("路径 *\\Load\\重生永恒属性升级设置");
        getContentPane().add(jLabel260, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 460, 370, 30));

        jLabel261.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel261.setText("防御不会增加双攻，而且属性是设置的一半");
        getContentPane().add(jLabel261, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 490, 370, 20));
        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 860, 530));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void 永恒升级开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_永恒升级开关ActionPerformed
        按键开关("永恒升级开关", 2128);
        刷新永恒升级开关();
    }//GEN-LAST:event_永恒升级开关ActionPerformed

    private void 重生升级开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_重生升级开关ActionPerformed
        按键开关("重生升级开关", 2129);
        刷新重生升级开关();
    }//GEN-LAST:event_重生升级开关ActionPerformed
    public void 刷新装备升级经验表() {
        for (int i = ((DefaultTableModel) (this.升级经验信息.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.升级经验信息.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM configvalues WHERE id > 100000 && id < 200000  ");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 升级经验信息.getModel()).insertRow(升级经验信息.getRowCount(), new Object[]{
                    rs.getString("id"),
                    rs.getString("name"),
                    rs.getString("Val")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
        升级经验信息.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 升级经验信息.getSelectedRow();
                String a = 升级经验信息.getValueAt(i, 0).toString();
                String a1 = 升级经验信息.getValueAt(i, 1).toString();
                String a2 = 升级经验信息.getValueAt(i, 2).toString();
                装备升级序号.setText(a);
                装备升级等级.setText(a1);
                装备升级经验.setText(a2);
            }
        });
    }

    public void 刷新装备升级设置表() {
        for (int i = ((DefaultTableModel) (this.装备升级设置.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.装备升级设置.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM configvalues WHERE id >= 200000 && id <300000  ");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 装备升级设置.getModel()).insertRow(装备升级设置.getRowCount(), new Object[]{
                    rs.getString("id"),
                    rs.getString("name"),
                    rs.getString("Val")
                });
            }
        } catch (SQLException ex) {
            Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
        }
        装备升级设置.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int i = 装备升级设置.getSelectedRow();
                String a = 装备升级设置.getValueAt(i, 0).toString();
                String a1 = 装备升级设置.getValueAt(i, 1).toString();
                String a2 = 装备升级设置.getValueAt(i, 2).toString();
                装备升级序号1.setText(a);
                装备升级等级1.setText(a1);
                装备升级经验1.setText(a2);
            }
        });
    }
    private void 刷新经验表ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新经验表ActionPerformed
        刷新装备升级经验表();
    }//GEN-LAST:event_刷新经验表ActionPerformed

    private void 永恒升级开关1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_永恒升级开关1ActionPerformed

        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.装备升级序号1.getText().matches("[0-9]+");
        if (result1) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                ps = con.prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                ps1 = con.prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.装备升级序号1.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    sqlString1 = "update configvalues set Val = '" + this.装备升级经验1.getText() + "' where id= " + this.装备升级序号1.getText() + ";";
                    PreparedStatement Val = con.prepareStatement(sqlString1);
                    Val.executeUpdate(sqlString1);
                    刷新装备升级设置表();
                    Maple.GetConfigValues();
                    JOptionPane.showMessageDialog(null, "修改成功已经生效");
                }
            } catch (SQLException ex) {
                Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要修改的值");
        }
    }//GEN-LAST:event_永恒升级开关1ActionPerformed

    private void 刷新设置表ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新设置表ActionPerformed
        刷新装备升级设置表();
    }//GEN-LAST:event_刷新设置表ActionPerformed

    private void 永恒升级开关2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_永恒升级开关2ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.装备升级序号.getText().matches("[0-9]+");
        if (result1) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                ps = con.prepareStatement("UPDATE configvalues SET Val = ? WHERE id = ?");
                ps1 = con.prepareStatement("SELECT * FROM configvalues WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.装备升级序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    sqlString1 = "update configvalues set Val = '" + this.装备升级经验.getText() + "' where id= " + this.装备升级序号.getText() + ";";
                    PreparedStatement Val = con.prepareStatement(sqlString1);
                    Val.executeUpdate(sqlString1);
                    刷新装备升级经验表();
                    Maple.GetConfigValues();
                    JOptionPane.showMessageDialog(null, "修改成功已经生效");
                }
            } catch (SQLException ex) {
                Logger.getLogger(永恒重生装备控制台.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要修改的值");
        }
    }//GEN-LAST:event_永恒升级开关2ActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel255;
    private javax.swing.JLabel jLabel256;
    private javax.swing.JLabel jLabel257;
    private javax.swing.JLabel jLabel258;
    private javax.swing.JLabel jLabel259;
    private javax.swing.JLabel jLabel260;
    private javax.swing.JLabel jLabel261;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane4;
    private javax.swing.JScrollPane jScrollPane5;
    private javax.swing.JButton 刷新经验表;
    private javax.swing.JButton 刷新设置表;
    private javax.swing.JTable 升级经验信息;
    private javax.swing.JButton 永恒升级开关;
    private javax.swing.JButton 永恒升级开关1;
    private javax.swing.JButton 永恒升级开关2;
    private javax.swing.JTextField 装备升级序号;
    private javax.swing.JTextField 装备升级序号1;
    private javax.swing.JTextField 装备升级等级;
    private javax.swing.JTextField 装备升级等级1;
    private javax.swing.JTextField 装备升级经验;
    private javax.swing.JTextField 装备升级经验1;
    private javax.swing.JTable 装备升级设置;
    private javax.swing.JButton 重生升级开关;
    // End of variables declaration//GEN-END:variables
}
