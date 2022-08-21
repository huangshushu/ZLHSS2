package gui.tools;

import tools.SearchGenerator;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.util.Map;

/**
 *
 * @author Administrator
 */
public class 代码查询工具 extends javax.swing.JFrame {

    /**
     * Creates new form 锻造控制台
     */
    public 代码查询工具() {
        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image2/logo.png"));
        setIconImage(icon.getImage());
        setTitle("【代码查询工具，可关闭】");
        initComponents();
        jTable1.getColumnModel().getColumn(0).setPreferredWidth(75);
        jTable1.getColumnModel().getColumn(1).setPreferredWidth(275);
        jTable1.getColumnModel().getColumn(2).setPreferredWidth(100);
    }

    public void init() {
        jTextField1.setText("");
        jComboBox1.setSelectedIndex(0);
        modelClear();
        setSize(400, 300);
    }

    public void modelClear() {
        DefaultTableModel model = ((DefaultTableModel) jTable1.getModel());
        int count = model.getRowCount();
        for (int i = 0; i < count; i++) {
            model.removeRow(0);
        }
    }

    public boolean addModel(int type, Map<Integer, String> data, boolean show) {
        return addModel(SearchGenerator.SearchType.valueOf(SearchGenerator.SearchType.nameOf(type)), data, show);
    }

    public boolean addModel(SearchGenerator.SearchType type, Map<Integer, String> data, boolean show) {
        if (data == null || data.isEmpty()) {
            if (show) {
                JOptionPane.showMessageDialog(null, "未找到。");
            }
            return false;
        }
        DefaultTableModel model = ((DefaultTableModel) jTable1.getModel());
        for (int i : data.keySet()) {
            model.addRow(new Object[]{
                type.name(),
                data.get(i),
                i
            });
        }
        return true;
    }

    public void search() {
        modelClear();
        String str = jTextField1.getText();
        int type = jComboBox1.getSelectedIndex();
        if (type == 0) {
            boolean find = false;
            for (int i = 1; i <= SearchGenerator.职业; i++) {
                boolean show = addModel(i, SearchGenerator.getSearchData(i, str), i == SearchGenerator.职业 ? !find : false);
                if (!find) {
                    find = show;
                }
            }
        } else {
            addModel(type, SearchGenerator.getSearchData(type, str), true);
        }
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel4 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jComboBox1 = new javax.swing.JComboBox();
        jLabel2 = new javax.swing.JLabel();
        jTextField1 = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();

        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setText("搜索类型:");
        jPanel4.add(jLabel1);

        jComboBox1.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "全部", "道具", "NPC", "地图", "怪物", "任务", "技能", "职业", "服务端包头", "客户端包头", "发型", "脸型", "SN" }));
        jComboBox1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jComboBox1ActionPerformed(evt);
            }
        });
        jPanel4.add(jComboBox1);

        jLabel2.setText("搜索关键字:");
        jPanel4.add(jLabel2);

        jTextField1.setColumns(10);
        jPanel4.add(jTextField1);

        jButton1.setText("搜索");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        jPanel4.add(jButton1);

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "类型", "名称或ID", "值"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.String.class, java.lang.String.class, java.lang.Integer.class
            };
            boolean[] canEdit = new boolean [] {
                false, true, true
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane1.setViewportView(jTable1);

        jPanel4.add(jScrollPane1);

        getContentPane().add(jPanel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 460, 480));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jComboBox1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jComboBox1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jComboBox1ActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        search();
    }//GEN-LAST:event_jButton1ActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JComboBox jComboBox1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTable jTable1;
    private javax.swing.JTextField jTextField1;
    // End of variables declaration//GEN-END:variables
}
