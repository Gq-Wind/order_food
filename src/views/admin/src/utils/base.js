const base = {
    get() {
        return {
            url : "http://localhost:8080/order_food/",
            name: "order_food",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/order_food/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "餐厅点餐系统"
        } 
    }
}
export default base
