/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : new113

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-06-18 16:45:03
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `wz_customlife`
-- ----------------------------
DROP TABLE IF EXISTS `wz_customlife`;
CREATE TABLE `wz_customlife` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dataid` int(11) NOT NULL,
  `f` int(11) NOT NULL,
  `hide` tinyint(1) NOT NULL DEFAULT '0',
  `fh` int(11) NOT NULL,
  `type` varchar(1) CHARACTER SET latin1 NOT NULL,
  `cy` int(11) NOT NULL,
  `rx0` int(11) NOT NULL,
  `rx1` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `mobtime` int(11) DEFAULT '1000',
  `mid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wz_customlife
-- ----------------------------
INSERT INTO `wz_customlife` VALUES ('1', '9900007', '0', '0', '81', 'n', '34', '238', '238', '238', '34', '1000', '910000000');
