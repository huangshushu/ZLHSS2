/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : new113

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-08-02 04:09:15
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `addkey`
-- ----------------------------
DROP TABLE IF EXISTS `addkey`;
CREATE TABLE `addkey` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `accountid` int(11) NOT NULL,
  `loginkey` varchar(255) DEFAULT NULL,
  `serverkey` varchar(255) DEFAULT NULL,
  `clientkey` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accountid` (`accountid`),
  CONSTRAINT `addkey_ibfk_1` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of addkey
-- ----------------------------
