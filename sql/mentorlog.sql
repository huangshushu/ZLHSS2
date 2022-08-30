/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : maplestory072

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2022-08-29 23:25:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `mentorlog`
-- ----------------------------
DROP TABLE IF EXISTS `mentorlog`;
CREATE TABLE `mentorlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(10) unsigned NOT NULL,
  `log` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=443 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of mentorlog
-- ----------------------------
INSERT INTO `mentorlog` VALUES ('318', '364', '师傅');
INSERT INTO `mentorlog` VALUES ('319', '97', '师傅');
INSERT INTO `mentorlog` VALUES ('320', '61', '师傅');
INSERT INTO `mentorlog` VALUES ('321', '61', '61');
INSERT INTO `mentorlog` VALUES ('322', '706', '师傅');
INSERT INTO `mentorlog` VALUES ('323', '97', '收徒');
INSERT INTO `mentorlog` VALUES ('324', '97', '1071');
INSERT INTO `mentorlog` VALUES ('325', '1071', '1071');
INSERT INTO `mentorlog` VALUES ('326', '568', '师傅');
INSERT INTO `mentorlog` VALUES ('327', '446', '师傅');
INSERT INTO `mentorlog` VALUES ('328', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('329', '568', '1068');
INSERT INTO `mentorlog` VALUES ('330', '1068', '1068');
INSERT INTO `mentorlog` VALUES ('331', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('332', '568', '1056');
INSERT INTO `mentorlog` VALUES ('333', '1056', '1056');
INSERT INTO `mentorlog` VALUES ('334', '446', '收徒');
INSERT INTO `mentorlog` VALUES ('335', '446', '885');
INSERT INTO `mentorlog` VALUES ('336', '885', '885');
INSERT INTO `mentorlog` VALUES ('337', '176', '师傅');
INSERT INTO `mentorlog` VALUES ('338', '519', '师傅');
INSERT INTO `mentorlog` VALUES ('339', '176', '收徒');
INSERT INTO `mentorlog` VALUES ('340', '176', '1010');
INSERT INTO `mentorlog` VALUES ('341', '1010', '1010');
INSERT INTO `mentorlog` VALUES ('342', '827', '师傅');
INSERT INTO `mentorlog` VALUES ('343', '568', '出师');
INSERT INTO `mentorlog` VALUES ('344', '568', '-1056');
INSERT INTO `mentorlog` VALUES ('345', '706', '收徒');
INSERT INTO `mentorlog` VALUES ('346', '706', '1058');
INSERT INTO `mentorlog` VALUES ('347', '1058', '1058');
INSERT INTO `mentorlog` VALUES ('348', '706', '收徒');
INSERT INTO `mentorlog` VALUES ('349', '706', '1074');
INSERT INTO `mentorlog` VALUES ('350', '1074', '1074');
INSERT INTO `mentorlog` VALUES ('351', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('352', '568', '1027');
INSERT INTO `mentorlog` VALUES ('353', '1027', '1027');
INSERT INTO `mentorlog` VALUES ('354', '850', '师傅');
INSERT INTO `mentorlog` VALUES ('355', '850', '收徒');
INSERT INTO `mentorlog` VALUES ('356', '850', '1046');
INSERT INTO `mentorlog` VALUES ('357', '1046', '1046');
INSERT INTO `mentorlog` VALUES ('358', '251', '师傅');
INSERT INTO `mentorlog` VALUES ('359', '251', '收徒');
INSERT INTO `mentorlog` VALUES ('360', '251', '1077');
INSERT INTO `mentorlog` VALUES ('361', '1077', '1077');
INSERT INTO `mentorlog` VALUES ('362', '706', '收徒');
INSERT INTO `mentorlog` VALUES ('363', '706', '1098');
INSERT INTO `mentorlog` VALUES ('364', '1098', '1098');
INSERT INTO `mentorlog` VALUES ('365', '795', '师傅');
INSERT INTO `mentorlog` VALUES ('366', '795', '收徒');
INSERT INTO `mentorlog` VALUES ('367', '795', '1101');
INSERT INTO `mentorlog` VALUES ('368', '1101', '1101');
INSERT INTO `mentorlog` VALUES ('369', '795', '收徒');
INSERT INTO `mentorlog` VALUES ('370', '795', '1117');
INSERT INTO `mentorlog` VALUES ('371', '795', '收徒');
INSERT INTO `mentorlog` VALUES ('372', '795', '1128');
INSERT INTO `mentorlog` VALUES ('373', '1128', '1128');
INSERT INTO `mentorlog` VALUES ('374', '88', '师傅');
INSERT INTO `mentorlog` VALUES ('375', '88', '收徒');
INSERT INTO `mentorlog` VALUES ('376', '88', '1158');
INSERT INTO `mentorlog` VALUES ('377', '1158', '1158');
INSERT INTO `mentorlog` VALUES ('378', '88', '收徒');
INSERT INTO `mentorlog` VALUES ('379', '88', '1140');
INSERT INTO `mentorlog` VALUES ('380', '1140', '1140');
INSERT INTO `mentorlog` VALUES ('381', '88', '出师');
INSERT INTO `mentorlog` VALUES ('382', '88', '-1158');
INSERT INTO `mentorlog` VALUES ('383', '251', '收徒');
INSERT INTO `mentorlog` VALUES ('384', '251', '1159');
INSERT INTO `mentorlog` VALUES ('385', '1159', '1159');
INSERT INTO `mentorlog` VALUES ('386', '356', '师傅');
INSERT INTO `mentorlog` VALUES ('387', '356', '收徒');
INSERT INTO `mentorlog` VALUES ('388', '356', '94');
INSERT INTO `mentorlog` VALUES ('389', '94', '94');
INSERT INTO `mentorlog` VALUES ('390', '251', '出师');
INSERT INTO `mentorlog` VALUES ('391', '251', '-1159');
INSERT INTO `mentorlog` VALUES ('392', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('393', '568', '1177');
INSERT INTO `mentorlog` VALUES ('394', '1177', '1177');
INSERT INTO `mentorlog` VALUES ('395', '588', '师傅');
INSERT INTO `mentorlog` VALUES ('396', '588', '收徒');
INSERT INTO `mentorlog` VALUES ('397', '588', '1175');
INSERT INTO `mentorlog` VALUES ('398', '1175', '1175');
INSERT INTO `mentorlog` VALUES ('399', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('400', '568', '1179');
INSERT INTO `mentorlog` VALUES ('401', '1179', '1179');
INSERT INTO `mentorlog` VALUES ('402', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('403', '568', '997');
INSERT INTO `mentorlog` VALUES ('404', '997', '997');
INSERT INTO `mentorlog` VALUES ('405', '251', '收徒');
INSERT INTO `mentorlog` VALUES ('406', '251', '1191');
INSERT INTO `mentorlog` VALUES ('407', '1191', '1191');
INSERT INTO `mentorlog` VALUES ('408', '79', '师傅');
INSERT INTO `mentorlog` VALUES ('409', '79', '收徒');
INSERT INTO `mentorlog` VALUES ('410', '79', '1169');
INSERT INTO `mentorlog` VALUES ('411', '1169', '1169');
INSERT INTO `mentorlog` VALUES ('412', '314', '师傅');
INSERT INTO `mentorlog` VALUES ('413', '314', '收徒');
INSERT INTO `mentorlog` VALUES ('414', '314', '1185');
INSERT INTO `mentorlog` VALUES ('415', '1185', '1185');
INSERT INTO `mentorlog` VALUES ('416', '251', '收徒');
INSERT INTO `mentorlog` VALUES ('417', '251', '1173');
INSERT INTO `mentorlog` VALUES ('418', '1173', '1173');
INSERT INTO `mentorlog` VALUES ('419', '251', '收徒');
INSERT INTO `mentorlog` VALUES ('420', '251', '1176');
INSERT INTO `mentorlog` VALUES ('421', '1176', '1176');
INSERT INTO `mentorlog` VALUES ('422', '88', '收徒');
INSERT INTO `mentorlog` VALUES ('423', '88', '1198');
INSERT INTO `mentorlog` VALUES ('424', '1198', '1198');
INSERT INTO `mentorlog` VALUES ('425', '88', '收徒');
INSERT INTO `mentorlog` VALUES ('426', '88', '1199');
INSERT INTO `mentorlog` VALUES ('427', '1199', '1199');
INSERT INTO `mentorlog` VALUES ('428', '1098', '师傅');
INSERT INTO `mentorlog` VALUES ('429', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('430', '568', '1168');
INSERT INTO `mentorlog` VALUES ('431', '1168', '1168');
INSERT INTO `mentorlog` VALUES ('432', '706', '出师');
INSERT INTO `mentorlog` VALUES ('433', '706', '-1098');
INSERT INTO `mentorlog` VALUES ('434', '1101', '退出师门');
INSERT INTO `mentorlog` VALUES ('435', '88', '出师');
INSERT INTO `mentorlog` VALUES ('436', '88', '-1199');
INSERT INTO `mentorlog` VALUES ('437', '568', '收徒');
INSERT INTO `mentorlog` VALUES ('438', '568', '1095');
INSERT INTO `mentorlog` VALUES ('439', '1095', '1095');
INSERT INTO `mentorlog` VALUES ('440', '588', '收徒');
INSERT INTO `mentorlog` VALUES ('441', '588', '1232');
INSERT INTO `mentorlog` VALUES ('442', '1232', '1232');
