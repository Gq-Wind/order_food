-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: order_food
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `order_food`
--

/*!40000 DROP DATABASE IF EXISTS `order_food`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `order_food` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `order_food`;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `address` varchar(200) NOT NULL COMMENT '地址',
  `name` varchar(200) NOT NULL COMMENT '收货人',
  `phone` varchar(200) NOT NULL COMMENT '电话',
  `isdefault` varchar(200) NOT NULL COMMENT '是否默认地址[是/否]',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='地址';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'2024-04-13 03:43:49',11,'宇宙银河系金星1号','金某','13823888881','是'),(2,'2024-04-13 03:43:49',12,'宇宙银河系木星1号','木某','13823888882','是'),(3,'2024-04-13 03:43:49',13,'宇宙银河系水星1号','水某','13823888883','是'),(4,'2024-04-13 03:43:49',14,'宇宙银河系火星1号','火某','13823888884','是'),(5,'2024-04-13 03:43:49',15,'宇宙银河系土星1号','土某','13823888885','是'),(6,'2024-04-13 03:43:49',16,'宇宙银河系月球1号','月某','13823888886','是'),(7,'2024-04-13 03:43:49',17,'宇宙银河系黑洞1号','黑某','13823888887','是'),(8,'2024-04-13 03:43:49',18,'宇宙银河系地球1号','地某','13823888888','是');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `canpinfenlei`
--

DROP TABLE IF EXISTS `canpinfenlei`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `canpinfenlei` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `canpinfenlei` varchar(200) DEFAULT NULL COMMENT '餐品分类',
  PRIMARY KEY (`id`),
  UNIQUE KEY `canpinfenlei` (`canpinfenlei`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COMMENT='餐品分类';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canpinfenlei`
--

LOCK TABLES `canpinfenlei` WRITE;
/*!40000 ALTER TABLE `canpinfenlei` DISABLE KEYS */;
INSERT INTO `canpinfenlei` VALUES (31,'2024-04-13 03:43:49','餐品分类1'),(32,'2024-04-13 03:43:49','餐品分类2'),(33,'2024-04-13 03:43:49','餐品分类3'),(34,'2024-04-13 03:43:49','餐品分类4'),(35,'2024-04-13 03:43:49','餐品分类5'),(36,'2024-04-13 03:43:49','餐品分类6'),(37,'2024-04-13 03:43:49','餐品分类7'),(38,'2024-04-13 03:43:49','餐品分类8');
/*!40000 ALTER TABLE `canpinfenlei` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `canpinxinxi`
--

DROP TABLE IF EXISTS `canpinxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `canpinxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `canpinmingcheng` varchar(200) NOT NULL COMMENT '餐品名称',
  `cantingmingcheng` varchar(200) DEFAULT NULL COMMENT '餐厅名称',
  `canpinfenlei` varchar(200) NOT NULL COMMENT '餐品分类',
  `kouwei` varchar(200) DEFAULT NULL COMMENT '口味',
  `fenliang` varchar(200) DEFAULT NULL COMMENT '份量',
  `shangjiashijian` date DEFAULT NULL COMMENT '上架时间',
  `canpinjieshao` longtext COMMENT '餐品介绍',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商家账号',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `tupian` longtext COMMENT '图片',
  `onelimittimes` int(11) DEFAULT NULL COMMENT '单限',
  `alllimittimes` int(11) DEFAULT NULL COMMENT '库存',
  `thumbsupnum` int(11) DEFAULT '0' COMMENT '赞',
  `crazilynum` int(11) DEFAULT '0' COMMENT '踩',
  `clicktime` datetime DEFAULT NULL COMMENT '最近点击时间',
  `clicknum` int(11) DEFAULT '0' COMMENT '点击次数',
  `discussnum` int(11) DEFAULT '0' COMMENT '评论数',
  `price` double NOT NULL COMMENT '价格',
  `storeupnum` int(11) DEFAULT '0' COMMENT '收藏数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COMMENT='餐品信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canpinxinxi`
--

LOCK TABLES `canpinxinxi` WRITE;
/*!40000 ALTER TABLE `canpinxinxi` DISABLE KEYS */;
INSERT INTO `canpinxinxi` VALUES (41,'2024-04-13 03:43:49','餐品名称1','餐厅名称1','餐品分类1','口味1','份量1','2024-04-13','餐品介绍1','商家账号1','联系电话1','upload/canpinxinxi_tupian1.jpg,upload/canpinxinxi_tupian2.jpg,upload/canpinxinxi_tupian3.jpg',1,99,1,1,'2024-04-13 11:43:49',1,0,99.9,1),(42,'2024-04-13 03:43:49','餐品名称2','餐厅名称2','餐品分类2','口味2','份量2','2024-04-13','餐品介绍2','商家账号2','联系电话2','upload/canpinxinxi_tupian2.jpg,upload/canpinxinxi_tupian3.jpg,upload/canpinxinxi_tupian4.jpg',2,99,2,2,'2024-04-13 11:43:49',2,0,99.9,2),(43,'2024-04-13 03:43:49','餐品名称3','餐厅名称3','餐品分类3','口味3','份量3','2024-04-13','餐品介绍3','商家账号3','联系电话3','upload/canpinxinxi_tupian3.jpg,upload/canpinxinxi_tupian4.jpg,upload/canpinxinxi_tupian5.jpg',3,99,3,3,'2024-04-13 11:43:49',3,0,99.9,3),(44,'2024-04-13 03:43:49','餐品名称4','餐厅名称4','餐品分类4','口味4','份量4','2024-04-13','餐品介绍4','商家账号4','联系电话4','upload/canpinxinxi_tupian4.jpg,upload/canpinxinxi_tupian5.jpg,upload/canpinxinxi_tupian6.jpg',4,99,4,4,'2024-04-13 11:43:49',4,0,99.9,4),(45,'2024-04-13 03:43:49','餐品名称5','餐厅名称5','餐品分类5','口味5','份量5','2024-04-13','餐品介绍5','商家账号5','联系电话5','upload/canpinxinxi_tupian5.jpg,upload/canpinxinxi_tupian6.jpg,upload/canpinxinxi_tupian7.jpg',5,99,5,5,'2024-04-13 11:43:49',5,0,99.9,5),(46,'2024-04-13 03:43:49','餐品名称6','餐厅名称6','餐品分类6','口味6','份量6','2024-04-13','餐品介绍6','商家账号6','联系电话6','upload/canpinxinxi_tupian6.jpg,upload/canpinxinxi_tupian7.jpg,upload/canpinxinxi_tupian8.jpg',6,99,6,6,'2024-04-13 11:43:49',6,0,99.9,6),(47,'2024-04-13 03:43:49','餐品名称7','餐厅名称7','餐品分类7','口味7','份量7','2024-04-13','餐品介绍7','商家账号7','联系电话7','upload/canpinxinxi_tupian7.jpg,upload/canpinxinxi_tupian8.jpg,upload/canpinxinxi_tupian9.jpg',7,99,7,7,'2024-04-13 11:43:49',7,0,99.9,7),(48,'2024-04-13 03:43:49','餐品名称8','餐厅名称8','餐品分类8','口味8','份量8','2024-04-13','餐品介绍8','商家账号8','联系电话8','upload/canpinxinxi_tupian8.jpg,upload/canpinxinxi_tupian9.jpg,upload/canpinxinxi_tupian10.jpg',8,99,8,8,'2024-04-13 11:43:49',8,0,99.9,8);
/*!40000 ALTER TABLE `canpinxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tablename` varchar(200) DEFAULT 'canpinxinxi' COMMENT '商品表名',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `goodid` bigint(20) NOT NULL COMMENT '商品id',
  `goodname` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `picture` longtext COMMENT '图片',
  `buynumber` int(11) NOT NULL COMMENT '购买数量',
  `price` double DEFAULT NULL COMMENT '单价',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商户名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='购物车表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  `url` varchar(500) DEFAULT NULL COMMENT 'url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='配置文件';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'picture1','upload/picture1.jpg',NULL),(2,'picture2','upload/picture2.jpg',NULL),(3,'picture3','upload/picture3.jpg',NULL);
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discusscanpinxinxi`
--

DROP TABLE IF EXISTS `discusscanpinxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discusscanpinxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `avatarurl` longtext COMMENT '头像',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='餐品信息评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discusscanpinxinxi`
--

LOCK TABLES `discusscanpinxinxi` WRITE;
/*!40000 ALTER TABLE `discusscanpinxinxi` DISABLE KEYS */;
/*!40000 ALTER TABLE `discusscanpinxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gonggaoxinxi`
--

DROP TABLE IF EXISTS `gonggaoxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gonggaoxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `biaoti` varchar(200) NOT NULL COMMENT '标题',
  `jianjie` longtext COMMENT '简介',
  `fabushijian` date DEFAULT NULL COMMENT '发布时间',
  `fengmian` longtext COMMENT '封面',
  `neirong` longtext COMMENT '内容',
  `clicktime` datetime DEFAULT NULL COMMENT '最近点击时间',
  `clicknum` int(11) DEFAULT '0' COMMENT '点击次数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COMMENT='公告信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gonggaoxinxi`
--

LOCK TABLES `gonggaoxinxi` WRITE;
/*!40000 ALTER TABLE `gonggaoxinxi` DISABLE KEYS */;
INSERT INTO `gonggaoxinxi` VALUES (51,'2024-04-13 03:43:49','标题1','简介1','2024-04-13','upload/gonggaoxinxi_fengmian1.jpg,upload/gonggaoxinxi_fengmian2.jpg,upload/gonggaoxinxi_fengmian3.jpg','内容1','2024-04-13 11:43:49',1),(52,'2024-04-13 03:43:49','标题2','简介2','2024-04-13','upload/gonggaoxinxi_fengmian2.jpg,upload/gonggaoxinxi_fengmian3.jpg,upload/gonggaoxinxi_fengmian4.jpg','内容2','2024-04-13 11:43:49',2),(53,'2024-04-13 03:43:49','标题3','简介3','2024-04-13','upload/gonggaoxinxi_fengmian3.jpg,upload/gonggaoxinxi_fengmian4.jpg,upload/gonggaoxinxi_fengmian5.jpg','内容3','2024-04-13 11:43:49',3),(54,'2024-04-13 03:43:49','标题4','简介4','2024-04-13','upload/gonggaoxinxi_fengmian4.jpg,upload/gonggaoxinxi_fengmian5.jpg,upload/gonggaoxinxi_fengmian6.jpg','内容4','2024-04-13 11:43:49',4),(55,'2024-04-13 03:43:49','标题5','简介5','2024-04-13','upload/gonggaoxinxi_fengmian5.jpg,upload/gonggaoxinxi_fengmian6.jpg,upload/gonggaoxinxi_fengmian7.jpg','内容5','2024-04-13 11:43:49',5),(56,'2024-04-13 03:43:49','标题6','简介6','2024-04-13','upload/gonggaoxinxi_fengmian6.jpg,upload/gonggaoxinxi_fengmian7.jpg,upload/gonggaoxinxi_fengmian8.jpg','内容6','2024-04-13 11:43:49',6),(57,'2024-04-13 03:43:49','标题7','简介7','2024-04-13','upload/gonggaoxinxi_fengmian7.jpg,upload/gonggaoxinxi_fengmian8.jpg,upload/gonggaoxinxi_fengmian9.jpg','内容7','2024-04-13 11:43:49',7),(58,'2024-04-13 03:43:49','标题8','简介8','2024-04-13','upload/gonggaoxinxi_fengmian8.jpg,upload/gonggaoxinxi_fengmian9.jpg,upload/gonggaoxinxi_fengmian10.jpg','内容8','2024-04-13 11:43:49',8);
/*!40000 ALTER TABLE `gonggaoxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `orderid` varchar(200) NOT NULL COMMENT '订单编号',
  `tablename` varchar(200) DEFAULT 'canpinxinxi' COMMENT '商品表名',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `goodid` bigint(20) NOT NULL COMMENT '商品id',
  `goodname` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `picture` longtext COMMENT '商品图片',
  `buynumber` int(11) NOT NULL COMMENT '购买数量',
  `price` double NOT NULL DEFAULT '0' COMMENT '价格',
  `total` double NOT NULL DEFAULT '0' COMMENT '总价格',
  `type` int(11) DEFAULT '1' COMMENT '支付类型',
  `status` varchar(200) DEFAULT NULL COMMENT '状态',
  `address` varchar(200) DEFAULT NULL COMMENT '地址',
  `tel` varchar(200) DEFAULT NULL COMMENT '电话',
  `consignee` varchar(200) DEFAULT NULL COMMENT '收货人',
  `logistics` longtext COMMENT '物流',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商户名称',
  `sfsh` varchar(200) DEFAULT '' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  `role` varchar(200) DEFAULT NULL COMMENT '用户角色',
  PRIMARY KEY (`id`),
  UNIQUE KEY `orderid` (`orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shangjia`
--

DROP TABLE IF EXISTS `shangjia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shangjia` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `shangjiazhanghao` varchar(200) NOT NULL COMMENT '商家账号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `cantingmingcheng` varchar(200) NOT NULL COMMENT '餐厅名称',
  `cantingdizhi` varchar(200) DEFAULT NULL COMMENT '餐厅地址',
  `fuzeren` varchar(200) DEFAULT NULL COMMENT '负责人',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `touxiang` longtext COMMENT '头像',
  `money` double DEFAULT '0' COMMENT '余额',
  PRIMARY KEY (`id`),
  UNIQUE KEY `shangjiazhanghao` (`shangjiazhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='商家';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shangjia`
--

LOCK TABLES `shangjia` WRITE;
/*!40000 ALTER TABLE `shangjia` DISABLE KEYS */;
INSERT INTO `shangjia` VALUES (21,'2024-04-13 03:43:49','商家账号1','123456','餐厅名称1','餐厅地址1','负责人1','13823888881','upload/shangjia_touxiang1.jpg',200),(22,'2024-04-13 03:43:49','商家账号2','123456','餐厅名称2','餐厅地址2','负责人2','13823888882','upload/shangjia_touxiang2.jpg',200),(23,'2024-04-13 03:43:49','商家账号3','123456','餐厅名称3','餐厅地址3','负责人3','13823888883','upload/shangjia_touxiang3.jpg',200),(24,'2024-04-13 03:43:49','商家账号4','123456','餐厅名称4','餐厅地址4','负责人4','13823888884','upload/shangjia_touxiang4.jpg',200),(25,'2024-04-13 03:43:49','商家账号5','123456','餐厅名称5','餐厅地址5','负责人5','13823888885','upload/shangjia_touxiang5.jpg',200),(26,'2024-04-13 03:43:49','商家账号6','123456','餐厅名称6','餐厅地址6','负责人6','13823888886','upload/shangjia_touxiang6.jpg',200),(27,'2024-04-13 03:43:49','商家账号7','123456','餐厅名称7','餐厅地址7','负责人7','13823888887','upload/shangjia_touxiang7.jpg',200),(28,'2024-04-13 03:43:49','商家账号8','123456','餐厅名称8','餐厅地址8','负责人8','13823888888','upload/shangjia_touxiang8.jpg',200);
/*!40000 ALTER TABLE `shangjia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storeup`
--

DROP TABLE IF EXISTS `storeup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storeup` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) DEFAULT NULL COMMENT '商品id',
  `tablename` varchar(200) DEFAULT NULL COMMENT '表名',
  `name` varchar(200) NOT NULL COMMENT '名称',
  `picture` longtext COMMENT '图片',
  `type` varchar(200) DEFAULT '1' COMMENT '类型',
  `inteltype` varchar(200) DEFAULT NULL COMMENT '推荐类型',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收藏表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storeup`
--

LOCK TABLES `storeup` WRITE;
/*!40000 ALTER TABLE `storeup` DISABLE KEYS */;
/*!40000 ALTER TABLE `storeup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `image` varchar(200) DEFAULT NULL COMMENT '头像',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','upload/image1.jpg','管理员','2024-04-13 03:43:49');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yonghu`
--

DROP TABLE IF EXISTS `yonghu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yonghu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `zhanghao` varchar(200) NOT NULL COMMENT '账号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `xingming` varchar(200) NOT NULL COMMENT '姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shouji` varchar(200) DEFAULT NULL COMMENT '手机',
  `touxiang` longtext COMMENT '头像',
  `money` double DEFAULT '0' COMMENT '余额',
  PRIMARY KEY (`id`),
  UNIQUE KEY `zhanghao` (`zhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='用户';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yonghu`
--

LOCK TABLES `yonghu` WRITE;
/*!40000 ALTER TABLE `yonghu` DISABLE KEYS */;
INSERT INTO `yonghu` VALUES (11,'2024-04-13 03:43:49','账号1','123456','姓名1','男','13823888881','upload/yonghu_touxiang1.jpg',200),(12,'2024-04-13 03:43:49','账号2','123456','姓名2','男','13823888882','upload/yonghu_touxiang2.jpg',200),(13,'2024-04-13 03:43:49','账号3','123456','姓名3','男','13823888883','upload/yonghu_touxiang3.jpg',200),(14,'2024-04-13 03:43:49','账号4','123456','姓名4','男','13823888884','upload/yonghu_touxiang4.jpg',200),(15,'2024-04-13 03:43:49','账号5','123456','姓名5','男','13823888885','upload/yonghu_touxiang5.jpg',200),(16,'2024-04-13 03:43:49','账号6','123456','姓名6','男','13823888886','upload/yonghu_touxiang6.jpg',200),(17,'2024-04-13 03:43:49','账号7','123456','姓名7','男','13823888887','upload/yonghu_touxiang7.jpg',200),(18,'2024-04-13 03:43:49','账号8','123456','姓名8','女','13823888888','upload/yonghu_touxiang8.jpg',200);
/*!40000 ALTER TABLE `yonghu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-16 13:05:49
