/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : v113

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-05-08 00:27:06
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `drop_data_global`
-- ----------------------------
DROP TABLE IF EXISTS `drop_data_global`;
CREATE TABLE `drop_data_global` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `continent` int(11) NOT NULL,
  `dropType` tinyint(1) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  `minimum_quantity` int(11) NOT NULL DEFAULT '1',
  `maximum_quantity` int(11) NOT NULL DEFAULT '1',
  `questid` int(11) NOT NULL DEFAULT '0',
  `chance` int(11) NOT NULL DEFAULT '0',
  `comments` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mobid` (`continent`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of drop_data_global
-- ----------------------------
INSERT INTO `drop_data_global` VALUES ('1', '-1', '0', '4000313', '1', '1', '0', '10000', '黃金楓葉');
INSERT INTO `drop_data_global` VALUES ('2', '-1', '0', '4001337', '1', '1', '0', '2500', '解夢鑰匙');
INSERT INTO `drop_data_global` VALUES ('3', '-1', '0', '4032225', '1', '1', '0', '0', '去除厄運的符咒');
INSERT INTO `drop_data_global` VALUES ('4', '-1', '0', '4000516', '0', '0', '0', '0', '香爐');
INSERT INTO `drop_data_global` VALUES ('5', '-1', '0', '4001038', '1', '1', '0', '100', '木妖橡皮擦');
INSERT INTO `drop_data_global` VALUES ('6', '-1', '0', '4001039', '1', '1', '0', '100', '蘑菇王橡皮擦');
INSERT INTO `drop_data_global` VALUES ('7', '-1', '0', '4001040', '1', '1', '0', '100', '猴子橡皮擦');
INSERT INTO `drop_data_global` VALUES ('8', '-1', '0', '4001041', '1', '1', '0', '100', '大幽靈橡皮擦');
INSERT INTO `drop_data_global` VALUES ('9', '-1', '0', '4001042', '1', '1', '0', '100', '綠水靈橡皮擦');
INSERT INTO `drop_data_global` VALUES ('10', '-1', '0', '4001043', '1', '1', '0', '100', '三眼章魚橡皮擦');
INSERT INTO `drop_data_global` VALUES ('11', '-1', '0', '4001197', '1', '1', '0', '100', '水藍色礦石');
INSERT INTO `drop_data_global` VALUES ('12', '-1', '0', '4001126', '1', '1', '0', '250000', '楓葉');
