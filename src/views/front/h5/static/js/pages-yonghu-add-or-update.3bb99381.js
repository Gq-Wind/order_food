(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"04b3":function(e,r,t){"use strict";t.r(r);var i=t("825a"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},"4a7f":function(e,r,t){var i=t("74c2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("2a1aa3a8",i,!0,{sourceMap:!1,shadowMode:!1})},"6e35":function(e,r,t){"use strict";t.r(r);var i=t("ebd0"),n=t("04b3");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("e884");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"dafb1588",null,!1,i["a"],o);r["default"]=u.exports},"74c2":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-dafb1588]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"825a":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("a481"),t("f559"),t("ac6a"),t("c5f6"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o=i(t("064f")),s=i(t("bd56")),u={data:function(){return{cross:"",ruleForm:{zhanghao:"",mima:"",xingming:"",xingbie:"",shouji:"",touxiang:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,xingbie:!1,shouji:!1,touxiang:!1,money:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("appUserid"),r.refid&&(this.ruleForm.refid=Number(r.refid),this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=r.cross,!r.cross){e.next=50;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=50;break}if(a=e.t1.value,"zhanghao"!=a){e.next=24;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",18);case 24:if("mima"!=a){e.next=28;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,e.abrupt("continue",18);case 28:if("xingming"!=a){e.next=32;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",18);case 32:if("xingbie"!=a){e.next=36;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,e.abrupt("continue",18);case 36:if("shouji"!=a){e.next=40;break}return this.ruleForm.shouji=n[a],this.ro.shouji=!0,e.abrupt("continue",18);case 40:if("touxiang"!=a){e.next=44;break}return this.ruleForm.touxiang=n[a].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",18);case 44:if("money"!=a){e.next=48;break}return this.ruleForm.money=n[a],this.ro.money=!0,e.abrupt("continue",18);case 48:e.next=18;break;case 50:this.styleChange(),this.$forceUpdate(),uni.getStorageSync("raffleType")&&null!=uni.getStorageSync("raffleType")&&(uni.removeStorageSync("raffleType"),setTimeout((function(){o.onSubmitTap()}),300));case 53:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.touxiang="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,t,i,n,a,o,s,u,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=12;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 12:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){e.next=15;break}return this.$utils.msg("余额应输入数字"),e.abrupt("return");case 15:if(!this.cross){e.next=32;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=32;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=28;break}for(s in r)s==a&&(r[s]=o);return u=uni.getStorageSync("crossTable"),e.next=26,this.$api.update("".concat(u),r);case 26:e.next=32;break;case 28:t=Number(uni.getStorageSync("appUserid")),i=r["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 32:if(!i||!t){e.next=55;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:t,crossrefid:i},e.next=38,this.$api.list("yonghu",l);case 38:if(c=e.sent,!(c.data.total>=n)){e.next=45;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 45:if(!this.ruleForm.id){e.next=50;break}return e.next=48,this.$api.update("yonghu",this.ruleForm);case 48:e.next=52;break;case 50:return e.next=52,this.$api.add("yonghu",this.ruleForm);case 52:this.$utils.msgBack("提交成功");case 53:e.next=63;break;case 55:if(!this.ruleForm.id){e.next=60;break}return e.next=58,this.$api.update("yonghu",this.ruleForm);case 58:e.next=62;break;case 60:return e.next=62,this.$api.add("yonghu",this.ruleForm);case 62:this.$utils.msgBack("提交成功");case 63:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};r.default=u},e884:function(e,r,t){"use strict";var i=t("4a7f"),n=t.n(i);n.a},ebd0:function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("账号")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号",type:"text"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("密码")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码",type:"text"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("姓名")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名",type:"text"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("性别")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{disabled:e.ro.xingbie,value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#FFBC1D"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("手机")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机",type:"text"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("头像")]),e.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.touxiang.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderRadius:"30rpx 60rpx 60rpx 0",borderWidth:"0",background:"#F0F3FC",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#9E9E9E",textAlign:"center"}},[e._v("余额")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.money,placeholder:"余额",type:"digit"},model:{value:e.ruleForm.money,callback:function(r){e.$set(e.ruleForm,"money",e._n(r))},expression:"ruleForm.money"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"center",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 0 20rpx",color:"rgb(255, 255, 255)",borderRadius:"60rpx",background:"#FFBC1D",width:"100%",lineHeight:"80rpx",fontSize:"40rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))}}]);