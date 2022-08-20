/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : v079

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2022-08-21 02:05:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `钓鱼物品`
-- ----------------------------
DROP TABLE IF EXISTS `钓鱼物品`;
CREATE TABLE `钓鱼物品` (
  `id` int(255) DEFAULT NULL,
  `itemid` int(255) DEFAULT NULL,
  `chance` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 钓鱼物品
-- ----------------------------
