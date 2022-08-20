/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : v079

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2022-08-21 02:05:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `configvalues`
-- ----------------------------
DROP TABLE IF EXISTS `configvalues`;
CREATE TABLE `configvalues` (
  `id` int(255) DEFAULT NULL,
  `name` char(255) DEFAULT NULL,
  `val` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of configvalues
-- ----------------------------
INSERT INTO `configvalues` VALUES (null, '泡点经验开关', '0');
INSERT INTO `configvalues` VALUES (null, '泡点金币开关', '0');
INSERT INTO `configvalues` VALUES (null, '泡点点券开关', '0');
INSERT INTO `configvalues` VALUES (null, '泡点抵用开关', '0');
INSERT INTO `configvalues` VALUES (null, '泡点豆豆开关', '0');
INSERT INTO `configvalues` VALUES (null, '物品额外数量', '0');
INSERT INTO `configvalues` VALUES (null, '金锤子提升上限', '1');
