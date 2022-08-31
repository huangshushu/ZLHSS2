/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : 追梦数据库备份

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2022-08-31 11:17:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `xmwnjl`
-- ----------------------------
DROP TABLE IF EXISTS `xmwnjl`;
CREATE TABLE `xmwnjl` (
  `bosslogid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ty` text CHARACTER SET utf8,
  `characterid` int(10) unsigned DEFAULT NULL,
  `bossid` varchar(20) CHARACTER SET utf8 DEFAULT '0',
  `count` int(10) DEFAULT '0',
  `type` int(10) DEFAULT '0',
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `jobid` int(5) NOT NULL DEFAULT '0',
  PRIMARY KEY (`bosslogid`)
) ENGINE=InnoDB AUTO_INCREMENT=6905 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of xmwnjl
-- ----------------------------
