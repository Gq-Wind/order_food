<template>
	<view class="content">
		<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
			<view v-if="user&&user.id" :style='{"padding":"80rpx","margin":"0 0 20rpx 0","background":"url(http://codegen.caihongy.cn/20231206/b736fb88bf0f4084a664c9d3163fa0cd.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignContent":"center","alignItems":"center","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"width":"100rpx","padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","height":"100rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"calc(100% - 120rpx)","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#000"}'>{{user.zhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"padding":"0 20rpx","margin":"20rpx 0","color":"#FFBC1D","borderRadius":"40rpx","background":"#FFF7E4","width":"100%","lineHeight":"60rpx","fontSize":"24rpx"}'>手机：{{user.shouji}}</view>
						<view :style='{"padding":"0 20rpx","margin":"20rpx 0","color":"#FFBC1D","borderRadius":"40rpx","background":"#FFF7E4","width":"100%","lineHeight":"60rpx","fontSize":"24rpx"}' v-if="user.money">余额：{{user.money}}</view>
						<view :style='{"padding":"0 20rpx","margin":"20rpx 0","color":"#FFBC1D","borderRadius":"40rpx","background":"#FFF7E4","width":"100%","lineHeight":"60rpx","fontSize":"24rpx"}' v-if="user.jf||user.jf==0">积分：{{user.jf}}</view>
					</view>
				</view>
				<view :style='{"alignContent":"center","alignItems":"center","flexWrap":"wrap","display":"flex","height":"auto"}' v-if="tableName=='shangjia'" class="userinfo">
					<image :style='{"width":"100rpx","padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","height":"100rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"calc(100% - 120rpx)","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#000"}'>{{user.shangjiazhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"padding":"0 20rpx","margin":"20rpx 0","color":"#FFBC1D","borderRadius":"40rpx","background":"#FFF7E4","width":"100%","lineHeight":"60rpx","fontSize":"24rpx"}'>联系电话：{{user.lianxidianhua}}</view>
						<view :style='{"padding":"0 20rpx","margin":"20rpx 0","color":"#FFBC1D","borderRadius":"40rpx","background":"#FFF7E4","width":"100%","lineHeight":"60rpx","fontSize":"24rpx"}' v-if="user.money">余额：{{user.money}}</view>
						<view :style='{"padding":"0 20rpx","margin":"20rpx 0","color":"#FFBC1D","borderRadius":"40rpx","background":"#FFF7E4","width":"100%","lineHeight":"60rpx","fontSize":"24rpx"}' v-if="user.jf||user.jf==0">积分：{{user.jf}}</view>
					</view>
				</view>
				<view :style='{"padding":"0 20rpx","alignItems":"center","top":"80rpx","borderRadius":"60rpx","background":"#FFBC1D","display":"flex","width":"auto","position":"absolute","right":"80rpx","justifyContent":"center","height":"auto"}' class="setting">
					<text class="icon iconfont icon-qita6" :style='{"border":"0","margin":"0 8rpx 0 0","fontSize":"32rpx","color":"#000","borderRadius":"0"}'></text>
					<text :style='{"color":"#000","lineHeight":"2","fontSize":"32rpx"}'>设置</text>
				</view>
			</view>
			
			<view v-else :style='{"padding":"80rpx","margin":"0 0 20rpx 0","background":"url(http://codegen.caihongy.cn/20231206/b736fb88bf0f4084a664c9d3163fa0cd.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","height":"auto"}' @tap="loginClick" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignItems":"center","color":"#666","display":"flex","width":"100%","fontSize":"36rpx","justifyContent":"center","height":"300rpx"}'>登录/注册</view>
			</view>
			
			<view :style='{"width":"100%","background":"#fff","height":"auto"}' class="list">
				<view :style='{"padding":"80rpx 60rpx 40rpx","background":"url(http://codegen.caihongy.cn/20231206/00d71bd79b77481aace4b4cbce045aa4.png)","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"auto"}' v-if="user&&user.id">
					<view :style='{"border":"2rpx solid #a1a1a1","padding":"0","background":"none","borderWidth":"0 0 2rpx","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"border":"2rpx solid #FFBC1D","fontSize":"36rpx","lineHeight":"80rpx","color":"#FFBC1D","borderWidth":"0 0 2rpx","fontWeight":"bold"}'>我的订单</view>
						<view :style='{"color":"#9E9E9E","fontSize":"28rpx","lineHeight":"80rpx"}' @tap="onPageTap('../shop-order/shop-order')">查看所有订单</view>
					</view>
					<view :style='{"width":"100%","padding":"40rpx 0","display":"flex","height":"auto"}'>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=未支付')">
							<span class="icon iconfont icon-quxiao16" :style='{"color":"#000","lineHeight":"1.2","fontSize":"48rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">未支付</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已支付')">
							<span class="icon iconfont icon-zhifudingjin" :style='{"color":"#000","lineHeight":"1.2","fontSize":"48rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已支付</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已完成')">
							<span class="icon iconfont icon-yanziwancheng" :style='{"color":"#000","lineHeight":"1.2","fontSize":"48rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已完成</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已取消')">
							<span class="icon iconfont icon-quxiao03" :style='{"color":"#000","lineHeight":"1.2","fontSize":"48rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已取消</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已退款')">
							<span class="icon iconfont icon-menu02" :style='{"color":"#000","lineHeight":"1.2","fontSize":"48rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已退款</view>
						</view>
						<!-- <view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已发货')">
							<span class="icon iconfont icon-menu16" :style='{"color":"#333","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#333","lineHeight":"2","fontSize":"24rpx"}' class="title">已发货</view>
						</view> -->
					</view>
				</view>
				
				<view :style='{"width":"100%","padding":"80rpx 60rpx ","background":"url(http://codegen.caihongy.cn/20240401/f27f53a9fe2a4454b53652a4951c1816.jpg) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20240401/9c1c4bcc3bf0434fb8d245c377887170.jpg) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20240401/c79605c2d52c4da6bffa83803eb48fa8.jpg) repeat-y center center / 100% auto","height":"auto"}'>
					<view :style='{"border":"2rpx solid #a1a1a1","padding":"0 0","background":"none","borderWidth":"0 0 2rpx","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"border":"2rpx solid #FFBC1D","fontSize":"36rpx","lineHeight":"80rpx","color":"#FFBC1D","borderWidth":"0 0 2rpx","fontWeight":"bold"}'>我的服务</view>
					</view>
					<view :style='{"width":"100%","padding":"20rpx 0","flexWrap":"wrap","display":"flex","height":"auto"}'>
					
						<block v-for="item in menuList" v-bind:key="item.roleName">
							<block v-if="role==item.roleName" v-bind:key="menu.menu" v-for="(menu,index) in item.backMenu">
								<block v-bind:key="child.tableName" v-for=" (child,sort) in menu.child">
									<view :style='{"padding":"0 20rpx","borderColor":"#ccc","margin":"0 0 20rpx","alignItems":"center","borderWidth":"0","background":"linear-gradient(90deg, #FFF6E0 0%, rgba(255,253,248,0.81) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="child.tableName!='orders/已发货' && child.tableName!='orders/已退款' &&child.tableName!='orders/已取消' && child.tableName!='orders/未支付' && child.tableName!='orders/已支付' && child.tableName!='orders/已完成' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
										<view :style='{"lineHeight":"1","fontSize":"48rpx","color":"#000","fontWeight":"bold"}' :class="child.appFrontIcon"></view>
										<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"32rpx","color":"#000","flex":"1"}' class="text">{{child.menu}}</view>
										<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
									</view>
								</block>
							</block>
						</block>
						
						<view @tap="onPageTap('../shop-recharge/pay-confirm')" :style='{"padding":"0 20rpx","borderColor":"#ccc","margin":"0 0 20rpx","alignItems":"center","borderWidth":"0","background":"linear-gradient(90deg, #FFF6E0 0%, rgba(255,253,248,0.81) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="li" hover-class="hover">
							<view :style='{"lineHeight":"1","fontSize":"48rpx","color":"#000","fontWeight":"bold"}' class="cuIcon-moneybag"></view>
							<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"32rpx","color":"#000","flex":"1"}'>用户充值</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view v-if="user&&user.id" @tap="passwordShow()" :style='{"padding":"0 20rpx","borderColor":"#ccc","margin":"0 0 20rpx","alignItems":"center","borderWidth":"0","background":"linear-gradient(90deg, #FFF6E0 0%, rgba(255,253,248,0.81) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="li" hover-class="hover">
							<view :style='{"lineHeight":"1","fontSize":"48rpx","color":"#000","fontWeight":"bold"}' class="cuIcon-lock"></view>
							<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"32rpx","color":"#000","flex":"1"}'>修改密码</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="recommend" :style='{"padding":"0 40rpx","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}' v-if="recommendList.length">
				<view :style='{"border":"2rpx solid #FFBC1D","padding":"0 0","color":"#FFBC1D","background":"none","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"36rpx","fontWeight":"bold"}'>为你推荐</view>
				<view :style='{"border":"2rpx solid #a1a1a1","padding":"0 0 0","flexWrap":"wrap","background":"#fff","borderWidth":"2rpx 0 0","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
					<view v-for="(item,index) in recommendList" :key="index" :style='{"boxShadow":"0 8rpx 20rpx rgba(0,0,0,.3)","padding":"20rpx","margin":"20rpx 0 0 0","borderRadius":"10rpx","background":"#fff","width":"48%","height":"auto"}' @click="recommendDetail(item.id)">
						<image :style='{"width":"100%","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"240rpx"}' :src="item[recommendPicture]?(baseUrl + item[recommendPicture].split(',')[0]):''"></image>
						<view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"28rpx","color":"#000"}'>{{item[recommendTitle]}}</view>
						<view :style='{"padding":"0 8rpx","lineHeight":"24rpx","fontSize":"24rpx","color":"#9e9e9e","textAlign":"left"}'>{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 80px"></view>
		</view>
		<uni-popup class="popup-content" ref="passwordPopup" type="bottom">
			<view class="passwordForm">
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.mima" placeholder="原密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima" placeholder="新密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima1" placeholder="确认密码" />
				</view>
				<view class="passwordBtnView">
					<button class="passwordBtn" @click="updatePassword">更新</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
				recommendList: [],
				recommendTable: '',
				recommendTitle: '',
				recommendPicture: '',
				passwordForm: {
					mima: '',
					newmima: '',
					newmima1: '',
				},
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(){
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("appRole");
			await this.getSession()
			this.getThumbsup()
			this.getStoreup()
			this.tableName = uni.getStorageSync("nowTable");
			let menus = menu.list();
			this.menuList = menus;
			this.getRecommendList()
		},
		methods: {
			async getSession(){
				let table = uni.getStorageSync("nowTable");
				let res = await this.$api.session(table);
				this.user = res.data;
				this.$forceUpdate()
			},
			async getThumbsup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 21})
				this.user.thumbsnum = Number(res.data.total)
				this.$forceUpdate()
			},
			async getStoreup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 1})
				this.user.storenum = Number(res.data.total)
				this.$forceUpdate()
			},
			loginClick(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			},
			async getRecommendList(){
				let params = {
					page: 1,
					limit: 4
				}
				let res;
				if(uni.getStorageSync("appUserid")) {
					res = await this.$api.recommend2('canpinxinxi', params);
				} else {
					res = await this.$api.recommend('canpinxinxi', params);
				}
				this.recommendList = res.data.list
				this.recommendTable = 'canpinxinxi'
				this.recommendTitle = 'canpinmingcheng'
				this.recommendPicture = 'tupian'
				this.$forceUpdate()
			},
			recommendDetail(id) {
				uni.navigateTo({
					url: `../${this.recommendTable}/detail?id=${id}`,
					fail: function() {
						uni.switchTab({
							url: `../${this.recommendTable}/detail?id=${id}`
						});
					}
				});
			},
			passwordShow() {
				this.passwordForm = {
					mima: '',
					newmima: '',
					newmima1: '',
				}
				this.$forceUpdate()
				this.$refs.passwordPopup.open()
			},
			async updatePassword() {
				if (this.passwordForm.mima == ''){
					this.$utils.msg('原密码不能为空')
					return false
				}
				if (this.passwordForm.newmima == ''){
					this.$utils.msg('新密码不能为空')
					return false
				}
				if (this.passwordForm.newmima1 == ''){
					this.$utils.msg('确认密码不能为空')
					return false
				}
				let password = ''
				if (this.user.mima) {
					password = this.user.mima;
				} else if (this.user.password) {
					password = this.user.password;
				}
				let newpassword = this.passwordForm.mima
				if(password != newpassword){
					this.$utils.msg('原密码不正确')
					return false
				}
				if (this.passwordForm.newmima != this.passwordForm.newmima1){
					this.$utils.msg('两次密码不一致')
					return false
				}
				if (this.passwordForm.mima == this.passwordForm.newmima){
					this.$utils.msg('新密码与原密码相同！')
					return false
				}
				if (this.tableName == 'yonghu') {
				}
				this.user.password = this.passwordForm.newmima
				this.user.mima = this.passwordForm.newmima
				await this.$api.update(this.tableName,this.user)
				this.$utils.msg('修改密码成功,下次登录系统生效')
				this.$refs.passwordPopup.close()
				this.getSession()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
	.passwordForm {
		width: 100%;
		padding: 10px 20px 60px;
		background: #fff;
	
		.passwordInput {
			background: #eee;
			margin: 0 0 10px;
			padding: 0 10px;
	
			input {
				height: 36px;
				line-height: 36px;
				font-size: 14px;
			}
		}
	
		.passwordBtnView {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
	
			.passwordBtn {
				padding: 0 20px;
				width: auto;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #fff;
				background: #007aff;
				border: none;
				border-radius: 5px;
	
			}
		}
	}
</style>
