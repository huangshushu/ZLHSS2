package gui.tools;

import database.DBConPool;

import javax.swing.*;
import java.awt.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class 一键还原 extends javax.swing.JFrame {

    public 一键还原() {

        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("image2/logo.png"));
        setTitle("一键还原数据库工具");
        Image background = new ImageIcon("gui/1.png").getImage();
        setIconImage(icon.getImage());
        initComponents();
        生成验证码();
    }

    private void 生成验证码() {
        String 生成验证码 = "1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        char 生成1 = 生成验证码.charAt((int) (Math.random() * 62));
        char 生成2 = 生成验证码.charAt((int) (Math.random() * 62));
        char 生成3 = 生成验证码.charAt((int) (Math.random() * 62));
        char 生成4 = 生成验证码.charAt((int) (Math.random() * 62));
        String 输出验证码 = "" + 生成1 + "" + 生成2 + "" + 生成3 + "" + 生成4 + "";
        验证码(输出验证码);
    }

    public void Z(int i) {
        进度条1.setValue(i);
    }

    private void 验证码(String str) {
        验证码.setText(str);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        进度条1 = new javax.swing.JProgressBar();
        清除金币拍卖行 = new javax.swing.JButton();
        还原 = new javax.swing.JButton();
        验证码 = new javax.swing.JLabel();
        输入验证码 = new javax.swing.JTextField();
        验证码1 = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();
        清除点券拍卖行 = new javax.swing.JButton();
        清除个人随身仓库 = new javax.swing.JButton();
        清除家族随身仓库 = new javax.swing.JButton();
        清除商城所有商品 = new javax.swing.JButton();

        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());
        jPanel1.add(进度条1, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 10, 330, 40));

        清除金币拍卖行.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        清除金币拍卖行.setText("清除金币拍卖行");
        清除金币拍卖行.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                清除金币拍卖行ActionPerformed(evt);
            }
        });
        jPanel1.add(清除金币拍卖行, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 150, 160, 30));

        还原.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        还原.setForeground(new java.awt.Color(255, 51, 102));
        还原.setText("一键还原游戏数据");
        还原.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                还原ActionPerformed(evt);
            }
        });
        jPanel1.add(还原, new org.netbeans.lib.awtextra.AbsoluteConstraints(180, 120, 160, 30));

        验证码.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        验证码.setForeground(new java.awt.Color(0, 51, 204));
        验证码.setText("XXXX");
        jPanel1.add(验证码, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 60, 60, 40));
        jPanel1.add(输入验证码, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 70, 90, -1));

        验证码1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        验证码1.setText("验证码:");
        jPanel1.add(验证码1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 60, 60, 40));

        jButton1.setText("刷");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        jPanel1.add(jButton1, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 70, 60, 25));

        清除点券拍卖行.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        清除点券拍卖行.setText("清除点券拍卖行");
        清除点券拍卖行.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                清除点券拍卖行ActionPerformed(evt);
            }
        });
        jPanel1.add(清除点券拍卖行, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 120, 160, 30));

        清除个人随身仓库.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        清除个人随身仓库.setText("清除个人随身仓库");
        清除个人随身仓库.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                清除个人随身仓库ActionPerformed(evt);
            }
        });
        jPanel1.add(清除个人随身仓库, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 180, 160, 30));

        清除家族随身仓库.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        清除家族随身仓库.setText("清除家族随身仓库");
        清除家族随身仓库.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                清除家族随身仓库ActionPerformed(evt);
            }
        });
        jPanel1.add(清除家族随身仓库, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 210, 160, 30));

        清除商城所有商品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        清除商城所有商品.setText("清除商城所有商品");
        清除商城所有商品.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                清除商城所有商品ActionPerformed(evt);
            }
        });
        jPanel1.add(清除商城所有商品, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 240, 160, 30));

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 350, 290));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void 还原ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_还原ActionPerformed

        if (输入验证码.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "请输入验证码！");
            return;
        }

        if (!输入验证码.getText().equals(验证码.getText())) {
            JOptionPane.showMessageDialog(null, "验证码错误！");
            生成验证码();
            return;
        }
        Delete("accounts", 1);
        Delete("accounts_info", 2);
        Delete("auctionitems", 3);
        Delete("aclog", 4);
        Delete("addlog", 5);
        Delete("alliances", 6);
        Delete("auth_server_channel", 7);
        Delete("auth_server_channel_ip", 8);
        Delete("auth_server_cs", 9);
        Delete("auth_server_login", 10);
        Delete("auth_server_mts", 11);
        Delete("auctionpoint", 12);
        Delete("auctionpoint1", 13);
        Delete("bank_item", 20);
        Delete("bank_item1", 21);
        Delete("bank_item2", 22);
        Delete("bbs_replies", 23);
        Delete("bbs_threads", 24);
        Delete("blocklogin", 25);
        Delete("bosslog", 26);
        Delete("bossrank", 27);
        Delete("bossrank1", 28);
        Delete("bossrank2", 29);
        Delete("bossrank3", 30);
        Delete("bossrank4", 31);
        Delete("bossrank5", 32);
        Delete("bossrank6", 33);
        Delete("bossrank7", 34);
        Delete("bossrank8", 35);
        Delete("bossrank9", 36);
        Delete("buddies", 37);
        Delete("capture_cs", 38);
        Delete("capture_jl", 39);
        Delete("capture_zj", 40);
        Delete("capture_zk", 41);
        Delete("character_slots", 42);
        Delete("cashshop_limit_sell", 43);
        Delete("character7", 44);
        Delete("charactera", 45);
        Delete("characters", 46);
        Delete("characterz", 47);
        Delete("cheatlog", 48);
        Delete("csequipment", 49);
        Delete("csitems", 50);

        Delete("dangerousacc", 55);
        Delete("dangerousip", 55);

        Delete("divine", 56);
        Delete("dueyequipment", 57);
        Delete("dueyitems", 58);
        Delete("dueypackages", 59);
        Delete("eventstats", 60);
        Delete("famelog", 61);
        Delete("families", 62);
        Delete("fishingjf", 63);
        Delete("fubenjilu", 64);
        Delete("fullpoint", 65);
        Delete("fengye", 66);
        Delete("forum_reply", 67);
        Delete("forum_section", 68);
        Delete("forum_thread", 69);
        Delete("game_poll_reply", 70);
        Delete("gbook_admin", 71);
        Delete("gbook_setting", 72);
        Delete("gifts", 73);
        Delete("gmlog", 74);
        Delete("guiidld", 75);
        Delete("guilds", 76);
        Delete("guildsl", 77);
        Delete("hiredmerch", 78);
        Delete("hiredmerchequipment", 79);
        Delete("hiredmerchitems", 80);
        Delete("hiredmerch", 81);
        Delete("htsquads", 82);

        Delete("inventoryequipment", 83);
        Delete("inventoryitems", 84);
        Delete("inventorylog", 85);
        Delete("inventoryslot", 86);
        Delete("invitecodedata", 87);
        Delete("ipbans", 88);
        Delete("ipcheck", 89);
        Delete("ipvotelog", 90);
        Delete("keymap", 91);
        Delete("loginlog", 92);
        Delete("lottery_info", 93);
        Delete("lottery_player_info", 94);
        Delete("macbans", 95);
        Delete("mapidban", 96);
        Delete("macfilters", 97);
        Delete("monsterbook", 98);
        Delete("mountdata", 99);
        Delete("mts_cart", 100);
        Delete("mts_items", 101);
        Delete("mtsequipment", 102);
        Delete("mtsitems", 103);
        Delete("mtstransfer", 104);
        Delete("mtstransferequipment", 105);
        Delete("mulungdojo", 106);
        Delete("notes", 107);
        Delete("nxcode", 108);
        Delete("nxcodez", 109);
        Delete("nxitemlist", 110);
        Delete("onetimelog", 111);
        Delete("pets", 112);
        Delete("pnpc", 113);
        Delete("playernpcs", 114);
        Delete("playernpcs_equip", 115);
        Delete("prizelog", 116);
        Delete("qqlog", 117);
        Delete("qqstem", 118);
        Delete("questactions", 119);
        Delete("questinfo", 120);
        Delete("questrequirements", 121);
        Delete("queststatus", 122);
        Delete("queststatusmobs", 123);
        Delete("rcmedals", 124);
        Delete("regrocklocations", 125);
        Delete("reports", 126);
        Delete("rings", 127);
        Delete("saiji", 128);
        Delete("savedlocations", 129);
        Delete("skillmacros", 130);
        Delete("skills", 131);
        Delete("skills_cooldowns", 132);
        Delete("speedruns", 133);
        Delete("storages", 134);
        Delete("stjflog", 134);
        Delete("stlog", 134);
        Delete("trocklocations", 135);
        Delete("uselog", 136);
        Delete("zaksquads", 137);
        Delete("z_pg", 138);
        Delete("bank", 139);
        Delete("mail", 140);
        Delete("jiezoudashi", 141);
        Delete("shouce", 145);

        /*Z(-100);
        清理雇佣金币();
        清空账号();
        清空家族表();
        清空角色表();
        清空核心数据库();
        清空每日列表();
        清空随身仓库();
        清空拍卖1();
        清空拍卖2();
        清空世界爆物();
        清空论坛1();
        清空论坛2();
        清空论坛3();
        清空武器1();
        清空武器2();
        清空A();
        清空B();
        清空C();
        清空D();
        清空任务1();
        清空任务2();
        清空技能1();
        清空技能2();
        清空商城();
        清空记录角色人数();
        清空雇佣1();
        清空雇佣2();
        清空雇佣3();
        清空B1();
        清空B2();
        清空B3();
        清空B4();
        清空B5();
        清空B6();
        清空B7();
        清空B8();
        //清空养殖();
        清空个人设置();
        清空qqgame();
        清空qqlog();*/
        JOptionPane.showMessageDialog(null, "清理完成");
        System.exit(0);
    }//GEN-LAST:event_还原ActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        生成验证码();
    }//GEN-LAST:event_jButton1ActionPerformed

    private void Delete(String a, int b) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from " + a + "");
            ps.executeUpdate();
            ps.close();
            Z(b);
        } catch (SQLException e) {
            System.out.println("Error/" + a + ":" + e);
        }
    }

    private void 清空个人设置() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from characterz");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空qqgame() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from qqstem");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空qqlog() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from qqlog");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空养殖() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from character7");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B1() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank1");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B2() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank2");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B3() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank3");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B4() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank4");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B5() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank5");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B6() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank6");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B7() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank7");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B8() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank8");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清除金币拍卖行ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_清除金币拍卖行ActionPerformed
        清空拍卖b1();
        清空拍卖b2();
        JOptionPane.showMessageDialog(null, "金币拍卖行清理完成");
    }//GEN-LAST:event_清除金币拍卖行ActionPerformed

    private void 清空拍卖b1() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from auctionitems1");
            ps.executeUpdate();
            ps.close();
            Z(50);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空拍卖b2() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from auctionpoint1");
            ps.executeUpdate();
            ps.close();
            Z(100);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清除点券拍卖行ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_清除点券拍卖行ActionPerformed
        清空拍卖a1();
        清空拍卖a2();
        JOptionPane.showMessageDialog(null, "点券拍卖行清理完成");
    }//GEN-LAST:event_清除点券拍卖行ActionPerformed

    private void 清除个人随身仓库ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_清除个人随身仓库ActionPerformed
        清空个人随身仓库();
        JOptionPane.showMessageDialog(null, "个人随身仓库清理完成");
    }//GEN-LAST:event_清除个人随身仓库ActionPerformed

    private void 清除家族随身仓库ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_清除家族随身仓库ActionPerformed
        清空家族随身仓库();
        JOptionPane.showMessageDialog(null, "家族随身仓库清理完成");
    }//GEN-LAST:event_清除家族随身仓库ActionPerformed

    private void 清除商城所有商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_清除商城所有商品ActionPerformed
        清除商城所有商品();
        清除SN("sn1000", 10000000);
        Z(10);
        清除SN("sn1009", 10089999);
        Z(20);
        清除SN("sn1010", 10100000);
        Z(30);
        清除SN("sn1019", 10189999);
        Z(40);
        清除SN("sn1020", 10200000);
        Z(50);
        清除SN("sn1029", 10289999);
        Z(60);
        清除SN("sn2000", 20000000);
        Z(100);
        JOptionPane.showMessageDialog(null, "商城所有商品清理完成");
    }//GEN-LAST:event_清除商城所有商品ActionPerformed

    private void 清除SN(String a, int b) {
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        try {
            ps1 = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("SELECT * FROM " + a + " WHERE SN > " + b + "");
            ps1.setInt(1, b);
            rs = ps1.executeQuery();
            if (rs.next()) {
                String sqlstr = " delete from " + a + " where SN >" + b + "";
                ps1.executeUpdate(sqlstr);
            }
        } catch (SQLException ex) {
        }
    }

    private void 清除商城所有商品() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from cashshop_modified_items");
            ps.executeUpdate();
            ps.close();
            Z(100);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空个人随身仓库() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bank_item");
            ps.executeUpdate();
            ps.close();
            Z(100);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空家族随身仓库() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bank_item1");
            ps.executeUpdate();
            ps.close();
            Z(100);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空拍卖a1() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from auctionitems");
            ps.executeUpdate();
            ps.close();
            Z(50);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空拍卖a2() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from auctionpoint");
            ps.executeUpdate();
            ps.close();
            Z(100);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清理雇佣金币() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from hiredmerch");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空记录角色人数() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from z角色统计");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空商城() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from csitems");
            ps.executeUpdate();
            ps.close();
            Z(56);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空技能2() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from skills");
            ps.executeUpdate();
            ps.close();
            Z(54);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空技能1() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from skillmacros");
            ps.executeUpdate();
            ps.close();
            Z(52);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空任务2() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from queststatusmobs");
            ps.executeUpdate();
            ps.close();
            Z(50);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空任务1() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from queststatus");
            ps.executeUpdate();
            ps.close();
            Z(48);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空D() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from mountdata");
            ps.executeUpdate();
            ps.close();
            Z(46);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空C() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from keymap");
            ps.executeUpdate();
            ps.close();
            Z(44);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空B() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from inventoryslot");
            ps.executeUpdate();
            ps.close();
            Z(42);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空论坛1() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from forum_thread");
            ps.executeUpdate();
            ps.close();
            Z(30);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空A() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from hypay");
            ps.executeUpdate();
            ps.close();
            Z(40);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空武器2() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from inventoryitems");
            ps.executeUpdate();
            ps.close();
            Z(38);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空武器1() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from inventoryequipment");
            ps.executeUpdate();
            ps.close();
            Z(36);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空论坛2() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from forum_section");
            ps.executeUpdate();
            ps.close();
            Z(32);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空论坛3() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from forum_reply");
            ps.executeUpdate();
            ps.close();
            Z(34);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空世界爆物() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from drop_data_global");
            ps.executeUpdate();
            ps.close();
            Z(28);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空家族表() {
        Z(6);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from guilds");
            ps.executeUpdate();
            ps.close();

        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
        Z(8);
    }

    private void 清空角色表() {
        Z(10);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from characters");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
        Z(12);
    }

    private void 清空核心数据库() {
        Z(14);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bossrank");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
        Z(16);
    }

    private void 清空每日列表() {
        Z(18);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bosslog");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
        Z(20);
    }

    private void 清空随身仓库() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from bank_item");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
        Z(22);
    }

    private void 清空拍卖1() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from auctionitems");
            ps.executeUpdate();
            ps.close();
            Z(24);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空拍卖2() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from auctionpoint");
            ps.executeUpdate();
            ps.close();
            Z(26);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }

    }

    private void 清空账号() {
        Z(2);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from accounts");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
        Z(4);
    }

    private void 清空雇佣1() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from hiredmerch");
            ps.executeUpdate();
            ps.close();
            Z(58);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空雇佣2() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from hiredmerchequipment");
            ps.executeUpdate();
            ps.close();
            Z(60);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    private void 清空雇佣3() {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("Delete from hiredmerchitems");
            ps.executeUpdate();
            ps.close();
            Z(62);
        } catch (SQLException e) {
            System.out.println("Error " + e);
        }
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JButton 清除个人随身仓库;
    private javax.swing.JButton 清除商城所有商品;
    private javax.swing.JButton 清除家族随身仓库;
    private javax.swing.JButton 清除点券拍卖行;
    private javax.swing.JButton 清除金币拍卖行;
    private javax.swing.JTextField 输入验证码;
    private javax.swing.JButton 还原;
    private javax.swing.JProgressBar 进度条1;
    private javax.swing.JLabel 验证码;
    private javax.swing.JLabel 验证码1;
    // End of variables declaration//GEN-END:variables

}
