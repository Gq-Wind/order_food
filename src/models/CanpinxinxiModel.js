import { DataTypes } from "sequelize";
import moment from "moment";
import sequelize from "./sequelize";

// 餐品信息
const CanpinxinxiModel = sequelize.define(
  "CanpinxinxiModel",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "主键id",
    },
    canpinmingcheng: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "餐品名称",
    },
    cantingmingcheng: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "餐厅名称",
    },
    canpinfenlei: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "餐品分类",
    },
    kouwei: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "口味",
    },
    fenliang: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "份量",
    },
    shangjiashijian: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      get() {
        return moment(this.getDataValue("shangjiashijian")).format(
          "YYYY-MM-DD"
        );
      },
      defaultValue: new Date(),
      comment: "上架时间",
    },
    canpinjieshao: {
      type: DataTypes.TEXT,
      defaultValue: "",
      allowNull: true,
      comment: "餐品介绍",
    },
    shangjiazhanghao: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "商家账号",
    },
    lianxidianhua: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "联系电话",
    },
    tupian: {
      type: DataTypes.TEXT,
      defaultValue: "",
      allowNull: true,
      comment: "图片",
    },
    onelimittimes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "单限",
    },
    alllimittimes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "库存",
    },
    thumbsupnum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "赞",
    },
    crazilynum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "踩",
    },
    clicktime: {
      type: DataTypes.DATE,
      allowNull: true,
      get() {
        return moment(this.getDataValue("clicktime")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      },
      defaultValue: DataTypes.NOW,
      comment: "最近点击时间",
    },
    clicknum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "点击次数",
    },
    discussnum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "评论数",
    },
    price: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      allowNull: true,
      comment: "价格",
    },
    storeupnum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      comment: "收藏数",
    },
    addtime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      get() {
        return moment(this.getDataValue("addtime")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      },
      comment: "添加时间",
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "canpinxinxi",
  }
);

export default CanpinxinxiModel;
