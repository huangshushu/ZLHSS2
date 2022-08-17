/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : v079

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2022-08-17 17:27:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for equip_score
-- ----------------------------
DROP TABLE IF EXISTS `equip_score`;
CREATE TABLE `equip_score` (
  `character_id` int(11) NOT NULL,
  `job` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total_score` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for equip_score_before
-- ----------------------------
DROP TABLE IF EXISTS `equip_score_before`;
CREATE TABLE `equip_score_before` (
  `character_id` int(11) NOT NULL,
  `job` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total_score` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for equip_score_job
-- ----------------------------
DROP TABLE IF EXISTS `equip_score_job`;
CREATE TABLE `equip_score_job` (
  `character_id` int(11) NOT NULL,
  `job` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total_score` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for equip_score_job_before
-- ----------------------------
DROP TABLE IF EXISTS `equip_score_job_before`;
CREATE TABLE `equip_score_job_before` (
  `character_id` int(11) NOT NULL,
  `job` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total_score` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
