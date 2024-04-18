import { DataTypes } from "sequelize";
import moment from "moment";
import sequelize from "./sequelize";

// 餐品分类
const CanpinfenleiModel = sequelize.define(
  "CanpinfenleiModel",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "主键id",
    },
    canpinfenlei: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
      comment: "餐品分类",
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
    tableName: "canpinfenlei",
  }
);

export default CanpinfenleiModel;
