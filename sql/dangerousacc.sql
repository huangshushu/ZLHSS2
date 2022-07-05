/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-07-14 16:11:09
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `dangerousacc`
-- ----------------------------
DROP TABLE IF EXISTS `dangerousacc`;
CREATE TABLE `dangerousacc` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `acc` varchar(40) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of dangerousacc
-- ----------------------------
