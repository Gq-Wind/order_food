<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
		<form :style='{"width":"100%","padding":"24rpx","background":"#fff","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">商家账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangjiazhanghao" v-model="ruleForm.shangjiazhanghao" placeholder="商家账号"  type="text"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.mima" v-model="ruleForm.mima" placeholder="密码"  type="text"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">餐厅名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.cantingmingcheng" v-model="ruleForm.cantingmingcheng" placeholder="餐厅名称"  type="text"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">餐厅地址</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.cantingdizhi" v-model="ruleForm.cantingdizhi" placeholder="餐厅地址"  type="text"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">负责人</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.fuzeren" v-model="ruleForm.fuzeren" placeholder="负责人"  type="text"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">联系电话</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.lianxidianhua" v-model="ruleForm.lianxidianhua" placeholder="联系电话"  type="text"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="touxiangTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">头像</view>
				<image :style='{"width":"80rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.touxiang" :src="baseUrl+ruleForm.touxiang.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"30rpx 60rpx 60rpx 0","borderWidth":"0","background":"#F0F3FC","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#9E9E9E","textAlign":"center"}' class="title">余额</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.money" v-model.number="ruleForm.money" placeholder="余额" type="digit"></input>
			</view>
 

			
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0 0 20rpx","color":"rgb(255, 255, 255)","borderRadius":"60rpx","background":"#FFBC1D","width":"100%","lineHeight":"80rpx","fontSize":"40rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				shangjiazhanghao: '',
				mima: '',
				cantingmingcheng: '',
				cantingdizhi: '',
				fuzeren: '',
				lianxidianhua: '',
				touxiang: '',
				money: '',
				},
				// 登录用户信息
				user: {},
                ro:{
                   shangjiazhanghao : false,
                   mima : false,
                   cantingmingcheng : false,
                   cantingdizhi : false,
                   fuzeren : false,
                   lianxidianhua : false,
                   touxiang : false,
                   money : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect,
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取



			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("appUserid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = Number(options.refid);
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`shangjia`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='shangjiazhanghao'){
					this.ruleForm.shangjiazhanghao = obj[o];
					this.ro.shangjiazhanghao = true;
					continue;
					}
					if(o=='mima'){
					this.ruleForm.mima = obj[o];
					this.ro.mima = true;
					continue;
					}
					if(o=='cantingmingcheng'){
					this.ruleForm.cantingmingcheng = obj[o];
					this.ro.cantingmingcheng = true;
					continue;
					}
					if(o=='cantingdizhi'){
					this.ruleForm.cantingdizhi = obj[o];
					this.ro.cantingdizhi = true;
					continue;
					}
					if(o=='fuzeren'){
					this.ruleForm.fuzeren = obj[o];
					this.ro.fuzeren = true;
					continue;
					}
					if(o=='lianxidianhua'){
					this.ruleForm.lianxidianhua = obj[o];
					this.ro.lianxidianhua = true;
					continue;
					}
					if(o=='touxiang'){
					this.ruleForm.touxiang = obj[o].split(",")[0];
					this.ro.touxiang = true;
					continue;
					}
					if(o=='money'){
					this.ruleForm.money = obj[o];
					this.ro.money = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
			
			if (uni.getStorageSync('raffleType') && uni.getStorageSync('raffleType') != null) {
				uni.removeStorageSync('raffleType')
				setTimeout(() => {
					this.onSubmitTap()
				}, 300)
			}
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数




			touxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {
//跨表计算判断
				var obj;
				if((!this.ruleForm.shangjiazhanghao)){
					this.$utils.msg(`商家账号不能为空`);
					return
				}
				if((!this.ruleForm.mima)){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.cantingmingcheng)){
					this.$utils.msg(`餐厅名称不能为空`);
					return
				}
				if(this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				if(this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				//更新跨表属性
				var crossuserid;
				var crossrefid;
				var crossoptnum;
				if(this.cross){
                    uni.setStorageSync('crossCleanType',true);
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('appUserid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`shangjia`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`shangjia`, this.ruleForm);
						}else{
							await this.$api.add(`shangjia`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`shangjia`, this.ruleForm);
					}else{
						await this.$api.add(`shangjia`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				if(this.ro[str]){
					return false
				}
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
