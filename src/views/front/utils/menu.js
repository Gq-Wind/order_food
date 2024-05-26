const menu = {
    list() {
        return [
            {
                "backMenu": [
                    {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除", "用户人数", "首页总数", "首页统计"],
                        "appFrontIcon": "cuIcon-cardboard",
                        "buttons": ["新增", "查看", "修改", "删除", "用户人数", "首页总数", "首页统计"],
                        "menu": "用户",
                        "menuJump": "列表",
                        "tableName": "yonghu"
                    }], "menu": "用户管理"
                    },
                    {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除"],
                        "appFrontIcon": "cuIcon-medal",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "商家",
                        "menuJump": "列表",
                        "tableName": "shangjia"
                    }], "menu": "商家管理"
                    }, {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除"],
                        "appFrontIcon": "cuIcon-form",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "餐品分类",
                        "menuJump": "列表",
                        "tableName": "canpinfenlei"
                    }], "menu": "餐品分类管理"
                    }, {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除", "餐品库存", "餐厅库存", "查看评论", "首页总数", "首页统计"],
                        "appFrontIcon": "cuIcon-news",
                        "buttons": ["查看", "删除", "餐品库存", "餐厅库存", "查看评论", "首页总数", "首页统计"],
                        "menu": "餐品信息",
                        "menuJump": "列表",
                        "tableName": "canpinxinxi"
                    }], "menu": "餐品信息管理"
                    }, {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除"],
                        "appFrontIcon": "cuIcon-album",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "公告信息",
                        "menuJump": "列表",
                        "tableName": "gonggaoxinxi"
                    }], "menu": "公告信息管理"
                }, {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除"],
                        "appFrontIcon": "cuIcon-attentionfavor",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "轮播图管理",
                        "tableName": "config"
                    }], "menu": "系统管理"
                }, {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "确认收货", "物流"],
                        "appFrontIcon": "cuIcon-pic",
                        "buttons": ["查看", "删除"],
                        "menu": "已发货订单",
                        "tableName": "orders/已发货"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                        "appFrontIcon": "cuIcon-addressbook",
                        "buttons": ["查看", "删除"],
                        "menu": "未支付订单",
                        "tableName": "orders/未支付"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "发货", "物流", "核销"],
                        "appFrontIcon": "cuIcon-skin",
                        "buttons": ["查看", "删除"],
                        "menu": "已支付订单",
                        "tableName": "orders/已支付"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流", "退货审核"],
                        "appFrontIcon": "cuIcon-similar",
                        "buttons": ["查看", "删除", "日销量", "品销量", "日销额", "品销额"],
                        "menu": "已完成订单",
                        "tableName": "orders/已完成"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                        "appFrontIcon": "cuIcon-copy",
                        "buttons": ["查看", "删除"],
                        "menu": "已取消订单",
                        "tableName": "orders/已取消"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流"],
                        "appFrontIcon": "cuIcon-form",
                        "buttons": ["查看", "删除"],
                        "menu": "已退款订单",
                        "tableName": "orders/已退款"
                    }], "menu": "订单管理"
                }],
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "管理员",
                "tableName": "users"
            }, {
                "backMenu": [{
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除"],
                        "appFrontIcon": "cuIcon-favor",
                        "buttons": ["查看", "删除"],
                        "menu": "我的收藏",
                        "menuJump": "1",
                        "tableName": "storeup"
                    }], "menu": "我的收藏管理"
                }],
                "frontMenu": [],
                "hasBackLogin": "否",
                "hasBackRegister": "否",
                "hasFrontLogin": "是",
                "hasFrontRegister": "是",
                "roleName": "用户",
                "tableName": "yonghu"
            }, {
                "backMenu": [{
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除", "餐品库存", "餐厅库存", "查看评论", "首页总数", "首页统计"],
                        "appFrontIcon": "cuIcon-news",
                        "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                        "menu": "餐品信息",
                        "menuJump": "列表",
                        "tableName": "canpinxinxi"
                    }], "menu": "餐品信息管理"
                }, {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "确认收货", "物流"],
                        "appFrontIcon": "cuIcon-pic",
                        "buttons": ["查看", "删除", "物流"],
                        "menu": "已发货订单",
                        "tableName": "orders/已发货"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                        "appFrontIcon": "cuIcon-addressbook",
                        "buttons": ["查看", "删除"],
                        "menu": "未支付订单",
                        "tableName": "orders/未支付"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "发货", "物流", "核销"],
                        "appFrontIcon": "cuIcon-skin",
                        "buttons": ["查看", "删除", "发货"],
                        "menu": "已支付订单",
                        "tableName": "orders/已支付"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流", "退货审核"],
                        "appFrontIcon": "cuIcon-similar",
                        "buttons": ["查看", "删除", "退货审核", "日销量", "品销量", "日销额", "品销额"],
                        "menu": "已完成订单",
                        "tableName": "orders/已完成"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                        "appFrontIcon": "cuIcon-copy",
                        "buttons": ["查看", "删除"],
                        "menu": "已取消订单",
                        "tableName": "orders/已取消"
                    }, {
                        "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流"],
                        "appFrontIcon": "cuIcon-form",
                        "buttons": ["查看", "删除"],
                        "menu": "已退款订单",
                        "tableName": "orders/已退款"
                    }], "menu": "订单管理"
                }],
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "是",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "商家",
                "tableName": "shangjia"
            }]
    }
}
export default menu;
