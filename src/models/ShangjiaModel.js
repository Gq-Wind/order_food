import { DataTypes } from "sequelize";
import moment from "moment";
import sequelize from "./sequelize";

// 商家
const ShangjiaModel = sequelize.define(
  "ShangjiaModel",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "主键id",
    },
    shangjiazhanghao: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "商家账号",
    },
    mima: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "密码",
    },
    cantingmingcheng: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "餐厅名称",
    },
    cantingdizhi: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "餐厅地址",
    },
    fuzeren: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "负责人",
    },
    lianxidianhua: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "联系电话",
    },
    touxiang: {
      type: DataTypes.TEXT,
      defaultValue: "",
      allowNull: true,
      comment: "头像",
    },
    money: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      allowNull: true,
      comment: "余额",
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
    tableName: "shangjia",
  }
);

export default ShangjiaModel;
