import { Router } from "express";
import { Op, QueryTypes } from "sequelize";
import sequelize from "../models/sequelize";
import toRes from "../lib/toRes";
import CanpinxinxiModel from "../models/CanpinxinxiModel";
import util from "../lib/util";
import OrdersModel from "../models/OrdersModel";
import jwt from "jsonwebtoken";
import moment from "moment";

export default ({ config, db }) => {
  let api = Router();
  // 分页接口（后端）
  api.get("/page", async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      let limit = parseInt(req.query.limit) || 10;
      let sort = req.query.sort || "id";
      let order = req.query.order || "asc";

      let where = {};
      let canpinmingcheng = req.query.canpinmingcheng;
      if (canpinmingcheng) {
        if (canpinmingcheng.indexOf("%") != -1) {
          where.canpinmingcheng = {
            [Op.like]: canpinmingcheng,
          };
        } else {
          where.canpinmingcheng = {
            [Op.eq]: canpinmingcheng,
          };
        }
      }
      let cantingmingcheng = req.query.cantingmingcheng;
      if (cantingmingcheng) {
        if (cantingmingcheng.indexOf("%") != -1) {
          where.cantingmingcheng = {
            [Op.like]: cantingmingcheng,
          };
        } else {
          where.cantingmingcheng = {
            [Op.eq]: cantingmingcheng,
          };
        }
      }
      let canpinfenlei = req.query.canpinfenlei;
      if (canpinfenlei) {
        if (canpinfenlei.indexOf("%") != -1) {
          where.canpinfenlei = {
            [Op.like]: canpinfenlei,
          };
        } else {
          where.canpinfenlei = {
            [Op.eq]: canpinfenlei,
          };
        }
      }
      let kouwei = req.query.kouwei;
      if (kouwei) {
        if (kouwei.indexOf("%") != -1) {
          where.kouwei = {
            [Op.like]: kouwei,
          };
        } else {
          where.kouwei = {
            [Op.eq]: kouwei,
          };
        }
      }
      let fenliang = req.query.fenliang;
      if (fenliang) {
        if (fenliang.indexOf("%") != -1) {
          where.fenliang = {
            [Op.like]: fenliang,
          };
        } else {
          where.fenliang = {
            [Op.eq]: fenliang,
          };
        }
      }
      let shangjiashijian = req.query.shangjiashijian;
      if (shangjiashijian) {
        if (shangjiashijian.indexOf("%") != -1) {
          where.shangjiashijian = {
            [Op.like]: shangjiashijian,
          };
        } else {
          where.shangjiashijian = {
            [Op.eq]: shangjiashijian,
          };
        }
      }
      let canpinjieshao = req.query.canpinjieshao;
      if (canpinjieshao) {
        if (canpinjieshao.indexOf("%") != -1) {
          where.canpinjieshao = {
            [Op.like]: canpinjieshao,
          };
        } else {
          where.canpinjieshao = {
            [Op.eq]: canpinjieshao,
          };
        }
      }
      let shangjiazhanghao = req.query.shangjiazhanghao;
      if (shangjiazhanghao) {
        if (shangjiazhanghao.indexOf("%") != -1) {
          where.shangjiazhanghao = {
            [Op.like]: shangjiazhanghao,
          };
        } else {
          where.shangjiazhanghao = {
            [Op.eq]: shangjiazhanghao,
          };
        }
      }
      let lianxidianhua = req.query.lianxidianhua;
      if (lianxidianhua) {
        if (lianxidianhua.indexOf("%") != -1) {
          where.lianxidianhua = {
            [Op.like]: lianxidianhua,
          };
        } else {
          where.lianxidianhua = {
            [Op.eq]: lianxidianhua,
          };
        }
      }
      let tupian = req.query.tupian;
      if (tupian) {
        if (tupian.indexOf("%") != -1) {
          where.tupian = {
            [Op.like]: tupian,
          };
        } else {
          where.tupian = {
            [Op.eq]: tupian,
          };
        }
      }
      let onelimittimes = req.query.onelimittimes;
      if (onelimittimes) {
        if (onelimittimes.indexOf("%") != -1) {
          where.onelimittimes = {
            [Op.like]: onelimittimes,
          };
        } else {
          where.onelimittimes = {
            [Op.eq]: onelimittimes,
          };
        }
      }
      let alllimittimes = req.query.alllimittimes;
      if (alllimittimes) {
        if (alllimittimes.indexOf("%") != -1) {
          where.alllimittimes = {
            [Op.like]: alllimittimes,
          };
        } else {
          where.alllimittimes = {
            [Op.eq]: alllimittimes,
          };
        }
      }
      let thumbsupnum = req.query.thumbsupnum;
      if (thumbsupnum) {
        if (thumbsupnum.indexOf("%") != -1) {
          where.thumbsupnum = {
            [Op.like]: thumbsupnum,
          };
        } else {
          where.thumbsupnum = {
            [Op.eq]: thumbsupnum,
          };
        }
      }
      let crazilynum = req.query.crazilynum;
      if (crazilynum) {
        if (crazilynum.indexOf("%") != -1) {
          where.crazilynum = {
            [Op.like]: crazilynum,
          };
        } else {
          where.crazilynum = {
            [Op.eq]: crazilynum,
          };
        }
      }
      let clicktime = req.query.clicktime;
      if (clicktime) {
        if (clicktime.indexOf("%") != -1) {
          where.clicktime = {
            [Op.like]: clicktime,
          };
        } else {
          where.clicktime = {
            [Op.eq]: clicktime,
          };
        }
      }
      let clicknum = req.query.clicknum;
      if (clicknum) {
        if (clicknum.indexOf("%") != -1) {
          where.clicknum = {
            [Op.like]: clicknum,
          };
        } else {
          where.clicknum = {
            [Op.eq]: clicknum,
          };
        }
      }
      let discussnum = req.query.discussnum;
      if (discussnum) {
        if (discussnum.indexOf("%") != -1) {
          where.discussnum = {
            [Op.like]: discussnum,
          };
        } else {
          where.discussnum = {
            [Op.eq]: discussnum,
          };
        }
      }
      let price = req.query.price;
      if (price) {
        if (price.indexOf("%") != -1) {
          where.price = {
            [Op.like]: price,
          };
        } else {
          where.price = {
            [Op.eq]: price,
          };
        }
      }
      let storeupnum = req.query.storeupnum;
      if (storeupnum) {
        if (storeupnum.indexOf("%") != -1) {
          where.storeupnum = {
            [Op.like]: storeupnum,
          };
        } else {
          where.storeupnum = {
            [Op.eq]: storeupnum,
          };
        }
      }
      let tableName =
        req.session.userinfo === undefined
          ? jwt.decode(req.headers.token).tableName
          : req.session.userinfo.tableName;
      if (tableName == "shangjia") {
        where.shangjiazhanghao = {
          [Op.eq]:
            req.session.userinfo === undefined
              ? jwt.decode(req.headers.token).shangjiazhanghao
              : req.session.userinfo.shangjiazhanghao,
        };
        if (where["userid"] != undefined) {
          delete where.userid;
        }
      }

      let orders = [];
      const sortList = sort.split(",");
      const orderList = order.split(",");
      sortList.forEach((item, index) => {
        orders.push([item, orderList[index]]);
      });
      let result = await CanpinxinxiModel.findAndCountAll({
        order: [orders],
        where,
        offset: (page - 1) * limit,
        limit,
      });

      result.currPage = page;
      result.pageSize = limit;

      toRes.page(res, 0, result);
    } catch (err) {
      res.status(500).render(err);
      //toRes.session(res, 500, '服务器错误！', '', 500)
    }
  });

  // 全部
  api.get("/lists", async (req, res) => {
    try {
      let result = await CanpinxinxiModel.findAll();
      toRes.record(res, 0, result);
    } catch (err) {
      toRes.session(res, 401, "您的权限不够！", "", 200);
    }
  });

  // 查询单条记录（前端）
  api.get("/query", async (req, res) => {
    try {
      const dictionary = {};
      for (let key in req.query) {
        dictionary[key] = req.query[key];
      }
      let result = await CanpinxinxiModel.findOne({ where: dictionary });
      toRes.record(res, 0, result);
    } catch (err) {
      res.status(500).render(err);
    }
  });

  // 分页接口（前端）
  api.get("/list", async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      let limit = parseInt(req.query.limit) || 10;
      let sort = req.query.sort || "id";
      let order = req.query.order || "asc";
      let where = {};
      let canpinmingcheng = req.query.canpinmingcheng;
      if (canpinmingcheng) {
        if (canpinmingcheng.indexOf("%") != -1) {
          where.canpinmingcheng = {
            [Op.like]: canpinmingcheng,
          };
        } else {
          where.canpinmingcheng = {
            [Op.eq]: canpinmingcheng,
          };
        }
      }
      let cantingmingcheng = req.query.cantingmingcheng;
      if (cantingmingcheng) {
        if (cantingmingcheng.indexOf("%") != -1) {
          where.cantingmingcheng = {
            [Op.like]: cantingmingcheng,
          };
        } else {
          where.cantingmingcheng = {
            [Op.eq]: cantingmingcheng,
          };
        }
      }
      let canpinfenlei = req.query.canpinfenlei;
      if (canpinfenlei) {
        if (canpinfenlei.indexOf("%") != -1) {
          where.canpinfenlei = {
            [Op.like]: canpinfenlei,
          };
        } else {
          where.canpinfenlei = {
            [Op.eq]: canpinfenlei,
          };
        }
      }
      let kouwei = req.query.kouwei;
      if (kouwei) {
        if (kouwei.indexOf("%") != -1) {
          where.kouwei = {
            [Op.like]: kouwei,
          };
        } else {
          where.kouwei = {
            [Op.eq]: kouwei,
          };
        }
      }
      let orders = [];
      const sortList = sort.split(",");
      const orderList = order.split(",");
      sortList.forEach((item, index) => {
        orders.push([item, orderList[index]]);
      });
      let result = await CanpinxinxiModel.findAndCountAll({
        order: [orders],
        where,
        offset: (page - 1) * limit,
        limit,
      });
      result.currPage = page;
      result.pageSize = limit;
      toRes.page(res, 0, result);
    } catch (err) {
      toRes.session(res, 401, "您的权限不够！", "", 200);
    }
  });

  // 保存接口（后端）
  api.post("/save", async (req, res) => {
    try {
      Object.keys(req.body).forEach((item) => {
        if (req.body[item] == "") delete req.body[item];
        if (req.body[item] == "" && item == "sfsh") req.body[item] = "待审核";
      });
      req.body.clicktime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

      const userinfo = await CanpinxinxiModel.create(req.body);

      if (userinfo === null) {
        toRes.session(res, -1, "添加失败！");
      } else {
        toRes.session(res, 0, "添加成功！");
      }
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 保存接口（前端）
  api.post("/add", async (req, res) => {
    try {
      Object.keys(req.body).forEach((item) => {
        if (req.body[item] == "") delete req.body[item];
        if (req.body[item] == "" && item == "sfsh") req.body[item] = "待审核";
      });

      if (jwt.decode(req.headers.token) == null) {
        toRes.session(res, 401, "请登录后再操作", "", 401);
      }

      req.body.clicktime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

      const userinfo = await CanpinxinxiModel.create(req.body);

      if (userinfo === null) {
        toRes.session(res, -1, "添加失败！");
      } else {
        toRes.session(res, 0, "添加成功！");
      }
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 更新接口
  api.post("/update", async (req, res) => {
    try {
      await CanpinxinxiModel.update(req.body, {
        where: {
          id: req.body.id || 0,
        },
      });

      toRes.session(res, 0, "编辑成功！");
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 删除接口
  api.post("/delete", async (req, res) => {
    try {
      await CanpinxinxiModel.destroy({
        where: {
          id: {
            [Op.in]: req.body,
          },
        },
      });

      toRes.session(res, 0, "删除成功！");
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 详情接口（后端）
  api.all("/info/:id", async (req, res) => {
    try {
      const recordInfo = await CanpinxinxiModel.findOne({
        where: { id: req.params.id },
      });
      await recordInfo.increment("clicknum");
      toRes.record(
        res,
        0,
        await CanpinxinxiModel.findOne({ where: { id: req.params.id } })
      );
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 详情接口（前端）
  api.all("/detail/:id", async (req, res) => {
    try {
      const recordInfo = await CanpinxinxiModel.findOne({
        where: { id: req.params.id },
      });
      await recordInfo.increment("clicknum");

      toRes.record(
        res,
        0,
        await CanpinxinxiModel.findOne({ where: { id: req.params.id } })
      );
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 获取需要提醒的记录数接口
  api.get("/remind/:columnName/:type", async (req, res) => {
    let where = " 1=1 ";
    let tableName =
      req.session.userinfo === undefined
        ? jwt.decode(req.headers.token).tableName
        : req.session.userinfo.tableName;
    if (tableName == "shangjia") {
      where +=
        " AND shangjiazhanghao = '" +
        jwt.decode(req.headers.token).username +
        "' ";
    }

    try {
      let sql = "SELECT 0 AS count";

      if (req.params.type == 1) {
        if (req.query.remindstart)
          sql =
            "SELECT COUNT(*) AS count FROM canpinxinxi WHERE " +
            where +
            " AND " +
            req.params.columnName +
            " >= '" +
            req.query.remindstart +
            "'";
        if (req.query.remindend)
          sql =
            "SELECT COUNT(*) AS count FROM canpinxinxi WHERE " +
            where +
            " AND " +
            req.params.columnName +
            " <= '" +
            req.query.remindend +
            "'";

        if (req.query.remindstart && req.query.remindend) {
          sql =
            "SELECT COUNT(*) AS count FROM canpinxinxi WHERE " +
            where +
            " AND " +
            req.params.columnName +
            " >= '" +
            req.query.remindstart +
            "' AND " +
            req.params.columnName +
            " <= '" +
            req.query.remindend +
            "'";
        }
      }

      if (req.params.type == 2) {
        if (req.query.remindstart) {
          let remindStart = util.getDateTimeFormat(
            0 + Number(req.query.remindstart),
            "yyyy-MM-dd"
          );
          sql =
            "SELECT COUNT(*) AS count FROM canpinxinxi WHERE " +
            where +
            " AND " +
            req.params.columnName +
            " >= '" +
            remindStart +
            "'";
        }
        if (req.query.remindend) {
          let remindEnd = util.getDateTimeFormat(
            req.query.remindend,
            "yyyy-MM-dd"
          );
          sql =
            "SELECT COUNT(*) AS count FROM canpinxinxi WHERE " +
            where +
            " AND " +
            req.params.columnName +
            " <= '" +
            remindEnd +
            "'";
        }

        if (req.query.remindstart && req.query.remindend) {
          let remindStart = util.getDateTimeFormat(
            0 + Number(req.query.remindstart),
            "yyyy-MM-dd"
          );
          let remindEnd = util.getDateTimeFormat(
            req.query.remindend,
            "yyyy-MM-dd"
          );
          sql =
            "SELECT COUNT(*) AS count FROM canpinxinxi WHERE " +
            where +
            " AND " +
            req.params.columnName +
            " >= '" +
            remindStart +
            "' AND " +
            req.params.columnName +
            " <= '" +
            remindEnd +
            "'";
        }
      }

      const results = await sequelize.query(sql, {
        plain: true,
        raw: true,
        type: QueryTypes.SELECT,
      });
      toRes.count(res, 0, results.count);
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 赞、踩接口
  api.get("/thumbsup/:id", async (req, res) => {
    try {
      let type = req.query.type;

      const recordInfo = await CanpinxinxiModel.findOne({
        where: { id: req.params.id },
      });
      if (type == 1) {
        await recordInfo.increment("thumbsupnum");
      }
      if (type == 2) {
        await recordInfo.increment("crazilynum");
      }

      toRes.session(res, 0, "操作成功！");
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 智能推荐接口
  api.get("/autoSort", async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      let limit = parseInt(req.query.limit) || 5;
      let sort = req.query.sort || "clicktime";
      let order = req.query.order || "desc";

      sort = "clicknum";

      let where = {};
      const keys = Object.keys(req.query);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (
          key != "page" &&
          key != "limit" &&
          key != "sort" &&
          key != "order"
        ) {
          if (req.query[key]) {
            where[key] = {
              [Op.eq]: req.query[key],
            };
          }
        }
      }

      let orders = [];
      const sortList = sort.split(",");
      const orderList = order.split(",");
      sortList.forEach((item, index) => {
        orders.push([item, orderList[index]]);
      });
      let result = await CanpinxinxiModel.findAndCountAll({
        order: [orders],
        where,
        offset: (page - 1) * limit,
        limit,
      });

      result.currPage = page;
      result.pageSize = limit;

      toRes.page(res, 0, result);
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  //用户协同算法
  api.get("/autoSort2", async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      let limit = parseInt(req.query.limit) || 5;

      let orderList = await OrdersModel.findAndCountAll({
        order: [["addtime", "desc"]],
      });
      //用户-订单矩阵
      let userOrderMatrix = {};
      orderList.rows.forEach((item) => {
        let goodid = item.goodid;
        let userid = item.userid;
        if (userOrderMatrix.hasOwnProperty(userid)) {
          if (userOrderMatrix[userid].hasOwnProperty(goodid)) {
            userOrderMatrix[userid][goodid] += 1;
          } else {
            userOrderMatrix[userid][goodid] = 1;
          }
        } else {
          userOrderMatrix[userid] = {
            [goodid]: 1,
          };
        }
      });

      // 找到与当前用户最相似的用户
      let mostSimilarUser = null;
      let maxSimilarity = -1;
      let userid = jwt.decode(req.headers.token).id;
      for (const user in userOrderMatrix) {
        if (user != userid) {
          const similarity = calculateSimilarity(userid, user, userOrderMatrix);
          if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostSimilarUser = user;
          }
        }
      }

      let result;
      //根据与用户mostSimilarUser的相似度进行推荐
      if (mostSimilarUser) {
        //找到最相似但目标用户未购买过的商品
        const newDictionary = Object.keys(
          userOrderMatrix[mostSimilarUser]
        ).reduce((result, key) => {
          if (!userOrderMatrix[userid].hasOwnProperty(key)) {
            result[key] = userOrderMatrix[mostSimilarUser][key];
          }
          return result;
        }, {});
        //按评分降序排列推荐
        const sortedDictionary = Object.keys(
          objectFromEntries(
            Object.entries(newDictionary).sort((a, b) => b[1] - a[1])
          )
        );

        result = await CanpinxinxiModel.findAndCountAll({
          where: {
            id: { [Op.in]: sortedDictionary },
          },
          offset: (page - 1) * limit,
          limit,
        });

        let result1 = await CanpinxinxiModel.findAndCountAll({
          where: {
            id: { [Op.notIn]: sortedDictionary },
          },
          offset: (page - 1) * limit,
          limit: limit - result.count,
        });
        result.rows = result.rows.concat(result1.rows);
        result.total = result.count + result1.count;
      } else {
        result = await CanpinxinxiModel.findAndCountAll({
          offset: (page - 1) * limit,
          limit,
        });
        result.total = result.count;
      }

      result.currPage = page;
      result.pageSize = limit;
      result.count = result.total;
      toRes.page(res, 0, result);
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  function objectFromEntries(entries) {
    var obj = {};
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      obj[entry[0]] = entry[1];
    }
    return obj;
  }

  // 计算用户之间的相似度
  function calculateSimilarity(user1, user2, userOrderMatrix) {
    const user1Orders = userOrderMatrix[user1];
    const user2Orders = userOrderMatrix[user2];

    let commonOrders = 0;
    let totalOrders = 0;

    for (const order in user1Orders) {
      if (user2Orders.hasOwnProperty(order)) {
        commonOrders += user1Orders[order] * user2Orders[order];
      }
      totalOrders += user1Orders[order] ** 2;
    }

    const similarity = commonOrders / Math.sqrt(totalOrders);
    return similarity;
  }

  // 分组统计接口
  api.get("/group/:columnName", async (req, res) => {
    try {
      let sql = "";
      let columnName = req.params.columnName;
      // let tableName = "canpinxinxi"
      let where = " WHERE 1 = 1 ";
      let tableName =
        req.session.userinfo === undefined
          ? jwt.decode(req.headers.token).tableName
          : req.session.userinfo.tableName;
      if (tableName == "shangjia") {
        where +=
          " AND shangjiazhanghao = '" +
          jwt.decode(req.headers.token).username +
          "' ";
      }
      sql =
        "SELECT COUNT(*) AS total, " +
        columnName +
        " FROM canpinxinxi " +
        where +
        " GROUP BY " +
        columnName;
      toRes.record(
        res,
        0,
        await sequelize.query(sql, {
          plain: false,
          raw: true,
          type: QueryTypes.SELECT,
        })
      );
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 统计指定字段
  api.get("/value/:xColumnName/:yColumnName", async (req, res) => {
    try {
      let sql = "";
      let xColumnName = req.params.xColumnName;
      let yColumnName = req.params.yColumnName;
      let where = " WHERE 1 = 1 ";
      let tableName =
        req.session.userinfo === undefined
          ? jwt.decode(req.headers.token).tableName
          : req.session.userinfo.tableName;
      if (tableName == "shangjia") {
        where +=
          " AND shangjiazhanghao = '" +
          jwt.decode(req.headers.token).username +
          "' ";
      }
      if ("canpinxinxi" == "orders") {
        where += " AND status IN ('已支付', '已发货', '已完成') ";
      }

      sql =
        "SELECT " +
        xColumnName +
        ", SUM(" +
        yColumnName +
        ") AS total FROM canpinxinxi " +
        where +
        " GROUP BY " +
        xColumnName +
        " DESC";

      toRes.record(
        res,
        0,
        await sequelize.query(sql, {
          plain: false,
          raw: true,
          type: QueryTypes.SELECT,
        })
      );
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // (按值统计）时间统计类型(多)
  api.get("/valueMul/:xColumnName", async (req, res) => {
    try {
      let sql = "";
      let xColumnName = req.params.xColumnName;
      let yColumnName = req.query.yColumnNameMul;
      let tableName = "canpinxinxi";
      let where = " WHERE 1 = 1 ";
      let userTableName =
        req.session.userinfo === undefined
          ? jwt.decode(req.headers.token).tableName
          : req.session.userinfo.tableName;
      if (userTableName == "shangjia") {
        where +=
          " AND shangjiazhanghao = '" +
          jwt.decode(req.headers.token).username +
          "' ";
      }
      const promises = yColumnName.split(",").map(async (item) => {
        sql =
          "SELECT " +
          xColumnName +
          ", sum(" +
          item +
          ") total FROM " +
          tableName +
          where +
          " GROUP BY " +
          xColumnName;
        const results = await sequelize.query(sql, {
          plain: false,
          raw: true,
          type: QueryTypes.SELECT,
        });
        return results;
      });

      toRes.record(res, 0, await Promise.all(promises));
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // (按值统计）时间统计类型(多)
  api.get("/valueMul/:xColumnName/:timeStatType", async (req, res) => {
    try {
      let sql = "";
      let xColumnName = req.params.xColumnName;
      let yColumnName = req.query.yColumnNameMul;
      let timeStatType = req.params.timeStatType;
      let tableName = "canpinxinxi";
      let where = " WHERE 1 = 1 ";
      let userTableName =
        req.session.userinfo === undefined
          ? jwt.decode(req.headers.token).tableName
          : req.session.userinfo.tableName;
      if (userTableName == "shangjia") {
        where +=
          " AND shangjiazhanghao = '" +
          jwt.decode(req.headers.token).username +
          "' ";
      }

      const promises = yColumnName.split(",").map(async (item) => {
        sql =
          "SELECT " +
          xColumnName +
          ", sum(" +
          item +
          ") total FROM " +
          tableName +
          where +
          " GROUP BY " +
          xColumnName;
        if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
          if (timeStatType == "日")
            sql =
              "SELECT DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m-%d') " +
              xColumnName +
              ", sum(" +
              item +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m-%d')";
          if (timeStatType == "月")
            sql =
              "SELECT DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m') " +
              xColumnName +
              ", sum(" +
              item +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m')";
          if (timeStatType == "年")
            sql =
              "SELECT DATE_FORMAT(" +
              xColumnName +
              ", '%Y') " +
              xColumnName +
              ", sum(" +
              item +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(" +
              xColumnName +
              ", '%Y')";
        } else {
          if (timeStatType == "日")
            sql =
              "SELECT DATE_FORMAT(VARCHAR(10)," +
              xColumnName +
              ", 120) " +
              xColumnName +
              ", sum(" +
              item +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(VARCHAR(10)," +
              xColumnName +
              ", 120)";
          if (timeStatType == "月")
            sql =
              "SELECT DATE_FORMAT(VARCHAR(7)," +
              xColumnName +
              ", 120) " +
              xColumnName +
              ", sum(" +
              item +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(VARCHAR(7)," +
              xColumnName +
              ", 120)";
          if (timeStatType == "年")
            sql =
              "SELECT DATE_FORMAT(VARCHAR(4)," +
              xColumnName +
              ", 120) " +
              xColumnName +
              ", sum(" +
              item +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(VARCHAR(4)," +
              xColumnName +
              ", 120)";
        }
        const results = await sequelize.query(sql, {
          plain: false,
          raw: true,
          type: QueryTypes.SELECT,
        });
        return results;
      });

      toRes.record(res, 0, await Promise.all(promises));
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  // 按日期统计
  api.get(
    "/value/:xColumnName/:yColumnName/:timeStatType",
    async (req, res) => {
      try {
        let sql = "";
        let xColumnName = req.params.xColumnName;
        let yColumnName = req.params.yColumnName;
        let timeStatType = req.params.timeStatType;
        let tableName = "canpinxinxi";
        let where = " WHERE 1 = 1 ";
        let userTableName =
          req.session.userinfo === undefined
            ? jwt.decode(req.headers.token).tableName
            : req.session.userinfo.tableName;
        if (userTableName == "shangjia") {
          where +=
            " AND shangjiazhanghao = '" +
            jwt.decode(req.headers.token).username +
            "' ";
        }
        if ("canpinxinxi" == "orders") {
          where += " AND status IN ('已支付', '已发货', '已完成') ";
        }

        if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
          if (timeStatType == "日")
            sql =
              "SELECT DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m-%d') " +
              xColumnName +
              ", sum(" +
              yColumnName +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m-%d')";
          if (timeStatType == "月")
            sql =
              "SELECT DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m') " +
              xColumnName +
              ", sum(" +
              yColumnName +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(" +
              xColumnName +
              ", '%Y-%m')";
          if (timeStatType == "年")
            sql =
              "SELECT DATE_FORMAT(" +
              xColumnName +
              ", '%Y') " +
              xColumnName +
              ", sum(" +
              yColumnName +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(" +
              xColumnName +
              ", '%Y')";
        } else {
          if (timeStatType == "日")
            sql =
              "SELECT DATE_FORMAT(VARCHAR(10)," +
              xColumnName +
              ", 120) " +
              xColumnName +
              ", sum(" +
              yColumnName +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(VARCHAR(10)," +
              xColumnName +
              ", 120)";
          if (timeStatType == "月")
            sql =
              "SELECT DATE_FORMAT(VARCHAR(7)," +
              xColumnName +
              ", 120) " +
              xColumnName +
              ", sum(" +
              yColumnName +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(VARCHAR(7)," +
              xColumnName +
              ", 120)";
          if (timeStatType == "年")
            sql =
              "SELECT DATE_FORMAT(VARCHAR(4)," +
              xColumnName +
              ", 120) " +
              xColumnName +
              ", sum(" +
              yColumnName +
              ") total FROM " +
              tableName +
              where +
              " GROUP BY DATE_FORMAT(VARCHAR(4)," +
              xColumnName +
              ", 120)";
        }
        toRes.record(
          res,
          0,
          await sequelize.query(sql, {
            plain: false,
            raw: true,
            type: QueryTypes.SELECT,
          })
        );
      } catch (err) {
        toRes.session(res, 500, "服务器错误！", "", 500);
      }
    }
  );

  // 总数接口
  api.get("/count", async (req, res) => {
    try {
      let where = {};
      var canpinmingcheng = req.query.canpinmingcheng;
      if (canpinmingcheng) {
        if (canpinmingcheng.indexOf("%") != -1) {
          where.canpinmingcheng = {
            [Op.like]: canpinmingcheng,
          };
        } else {
          where.canpinmingcheng = {
            [Op.eq]: canpinmingcheng,
          };
        }
      }
      var cantingmingcheng = req.query.cantingmingcheng;
      if (cantingmingcheng) {
        if (cantingmingcheng.indexOf("%") != -1) {
          where.cantingmingcheng = {
            [Op.like]: cantingmingcheng,
          };
        } else {
          where.cantingmingcheng = {
            [Op.eq]: cantingmingcheng,
          };
        }
      }
      var canpinfenlei = req.query.canpinfenlei;
      if (canpinfenlei) {
        if (canpinfenlei.indexOf("%") != -1) {
          where.canpinfenlei = {
            [Op.like]: canpinfenlei,
          };
        } else {
          where.canpinfenlei = {
            [Op.eq]: canpinfenlei,
          };
        }
      }
      var kouwei = req.query.kouwei;
      if (kouwei) {
        if (kouwei.indexOf("%") != -1) {
          where.kouwei = {
            [Op.like]: kouwei,
          };
        } else {
          where.kouwei = {
            [Op.eq]: kouwei,
          };
        }
      }

      let tableName =
        req.session.userinfo === undefined
          ? jwt.decode(req.headers.token).tableName
          : req.session.userinfo.tableName;
      if (tableName == "shangjia") {
        where.shangjiazhanghao = {
          [Op.eq]:
            req.session.userinfo === undefined
              ? jwt.decode(req.headers.token).shangjiazhanghao
              : req.session.userinfo.shangjiazhanghao,
        };
        if (where["userid"] != undefined) {
          delete where.userid;
        }
      }
      const count = await CanpinxinxiModel.count({ where });

      toRes.record(res, 0, count);
    } catch (err) {
      toRes.session(res, 500, "服务器错误！", "", 500);
    }
  });

  return api;
};
