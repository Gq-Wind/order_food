<template>
<view class="content">
	<view :style='{"width":"100%","flexWrap":"wrap","background":"#fff","display":"flex","height":"100%"}'>
		<swiper :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","background":"#fff","height":"360rpx","order":"3"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#FFBC1D' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"100%","objectFit":"cover","borderRadius":"20rpx","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"60rpx","fontSize":"28rpx","color":"#333","background":"#fff"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>
		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0","margin":"0","flexWrap":"wrap","background":"#f7f7f7","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"2"}'>
            <block v-for="(item,index1) in menuList" v-bind:key="item.roleName">
                <block v-if="index1==0" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"23%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2(child.tableName)">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#fff","borderRadius":"100%","textAlign":"center","background":"linear-gradient(180deg, #FC6103 0%, #FFB56E 100%)","display":"block","width":"104rpx","lineHeight":"104rpx","fontSize":"72rpx","height":"104rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#000","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		<!-- 商品推荐 -->
		<view class="listBox recommend" :style='{"width":"100%","padding":"0 20rpx","margin":"0 0 20rpx","background":"#fff","order":"8"}'>
			<view class="title" :style='{"border":"2rpx solid #D8D8D8","padding":"0 0","margin":"0","background":"none","borderWidth":"0 0 2rpx","display":"flex","width":"100%"}'>
				<view :style='{"border":"2rpx solid #FFBC1D","fontSize":"36rpx","lineHeight":"88rpx","color":"#FFBC1D","borderWidth":"0 0 2rpx","fontWeight":"bold"}'>餐品信息推荐</view>
			</view>
			<!-- 样式6 -->
			<view class="list-box style6" :style='{"width":"100%","padding":"24rpx 0","margin":"0","height":"auto"}'>
				<view v-if="canpinxinxilist.length > 0" @tap="onDetailTap('canpinxinxi',canpinxinxilist[0].id)" class="box box1" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="canpinxinxilist[0].tupian.substring(0,4)=='http'" :src="canpinxinxilist[0].tupian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="canpinxinxilist[0].tupian?baseUrl+canpinxinxilist[0].tupian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[0].canpinmingcheng}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[0].cantingmingcheng}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 4rpx","order":"8"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[0].addtime}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","order":"6"}'>
						  <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[0].shangjiazhanghao}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"2"}'>
						  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[0].thumbsupnum}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
						  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[0].storeupnum}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[0].clicknum}}</text>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","margin":"0 0 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="canpinxinxilist.length > 1" @tap="onDetailTap('canpinxinxi',canpinxinxilist[1].id)" class="box box2" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-if="canpinxinxilist[1].tupian.substring(0,4)=='http'" :src="canpinxinxilist[1].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-else :src="canpinxinxilist[1].tupian?baseUrl+canpinxinxilist[1].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[1].canpinmingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[1].cantingmingcheng}}</view>
								<view :style='{"padding":"0 20rpx 4rpx","order":"5"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[1].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{canpinxinxilist[1].shangjiazhanghao}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"2"}'>
								  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[1].thumbsupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[1].storeupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[1].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="canpinxinxilist.length > 2" @tap="onDetailTap('canpinxinxi',canpinxinxilist[2].id)" class="box box3" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="canpinxinxilist[2].tupian.substring(0,4)=='http'" :src="canpinxinxilist[2].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="canpinxinxilist[2].tupian?baseUrl+canpinxinxilist[2].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[2].canpinmingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[2].cantingmingcheng}}</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{canpinxinxilist[2].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{canpinxinxilist[2].shangjiazhanghao}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"2"}'>
								  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[2].thumbsupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[2].storeupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[2].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="canpinxinxilist.length > 3" @tap="onDetailTap('canpinxinxi',canpinxinxilist[3].id)" class="box box4" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="canpinxinxilist[3].tupian.substring(0,4)=='http'" :src="canpinxinxilist[3].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="canpinxinxilist[3].tupian?baseUrl+canpinxinxilist[3].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[3].canpinmingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[3].cantingmingcheng}}</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{canpinxinxilist[3].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{canpinxinxilist[3].shangjiazhanghao}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"2"}'>
								  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[3].thumbsupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[3].storeupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[3].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="canpinxinxilist.length > 4" @tap="onDetailTap('canpinxinxi',canpinxinxilist[4].id)" class="box box5" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-if="canpinxinxilist[4].tupian.substring(0,4)=='http'" :src="canpinxinxilist[4].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-else :src="canpinxinxilist[4].tupian?baseUrl+canpinxinxilist[4].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[4].canpinmingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[4].cantingmingcheng}}</view>
								
								<view :style='{"padding":"0 20rpx 4rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[4].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{canpinxinxilist[4].shangjiazhanghao}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"2"}'>
								  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[4].thumbsupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[4].storeupnum}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[4].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="canpinxinxilist.length > 5" @tap="onDetailTap('canpinxinxi',canpinxinxilist[5].id)" class="box box6" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="canpinxinxilist[5].tupian.substring(0,4)=='http'" :src="canpinxinxilist[5].tupian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="canpinxinxilist[5].tupian?baseUrl+canpinxinxilist[5].tupian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[5].canpinmingcheng}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{canpinxinxilist[5].cantingmingcheng}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 2p","order":"7"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[5].addtime}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","order":"5"}'>
						  <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[5].shangjiazhanghao}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"2"}'>
						  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[5].thumbsupnum}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
						  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[5].storeupnum}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{canpinxinxilist[5].clicknum}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="listBox recommend" :style='{"width":"100%","padding":"0 20rpx","margin":"0 0 20rpx","background":"#fff","order":"8"}'>
			<view class="title" :style='{"border":"2rpx solid #D8D8D8","padding":"0 0","margin":"0","background":"none","borderWidth":"0 0 2rpx","display":"flex","width":"100%"}'>
				<view :style='{"border":"2rpx solid #FFBC1D","fontSize":"36rpx","lineHeight":"88rpx","color":"#FFBC1D","borderWidth":"0 0 2rpx","fontWeight":"bold"}'>公告信息推荐</view>
			</view>
			<!-- 样式6 -->
			<view class="list-box style6" :style='{"width":"100%","padding":"24rpx 0","margin":"0","height":"auto"}'>
				<view v-if="gonggaoxinxilist.length > 0" @tap="onDetailTap('gonggaoxinxi',gonggaoxinxilist[0].id)" class="box box1" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="gonggaoxinxilist[0].fengmian.substring(0,4)=='http'" :src="gonggaoxinxilist[0].fengmian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="gonggaoxinxilist[0].fengmian?baseUrl+gonggaoxinxilist[0].fengmian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[0].biaoti}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[0].fabushijian}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 4rpx","order":"8"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[0].addtime}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[0].clicknum}}</text>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","margin":"0 0 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="gonggaoxinxilist.length > 1" @tap="onDetailTap('gonggaoxinxi',gonggaoxinxilist[1].id)" class="box box2" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-if="gonggaoxinxilist[1].fengmian.substring(0,4)=='http'" :src="gonggaoxinxilist[1].fengmian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-else :src="gonggaoxinxilist[1].fengmian?baseUrl+gonggaoxinxilist[1].fengmian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[1].biaoti}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[1].fabushijian}}</view>
								<view :style='{"padding":"0 20rpx 4rpx","order":"5"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[1].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[1].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="gonggaoxinxilist.length > 2" @tap="onDetailTap('gonggaoxinxi',gonggaoxinxilist[2].id)" class="box box3" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="gonggaoxinxilist[2].fengmian.substring(0,4)=='http'" :src="gonggaoxinxilist[2].fengmian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="gonggaoxinxilist[2].fengmian?baseUrl+gonggaoxinxilist[2].fengmian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[2].biaoti}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[2].fabushijian}}</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{gonggaoxinxilist[2].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[2].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="gonggaoxinxilist.length > 3" @tap="onDetailTap('gonggaoxinxi',gonggaoxinxilist[3].id)" class="box box4" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="gonggaoxinxilist[3].fengmian.substring(0,4)=='http'" :src="gonggaoxinxilist[3].fengmian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="gonggaoxinxilist[3].fengmian?baseUrl+gonggaoxinxilist[3].fengmian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[3].biaoti}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[3].fabushijian}}</view>
								<view :style='{"padding":"0 20rpx","display":"none"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"24rpx"}'>{{gonggaoxinxilist[3].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[3].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="gonggaoxinxilist.length > 4" @tap="onDetailTap('gonggaoxinxi',gonggaoxinxilist[4].id)" class="box box5" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-if="gonggaoxinxilist[4].fengmian.substring(0,4)=='http'" :src="gonggaoxinxilist[4].fengmian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' class="list-item-image" mode="aspectFill" v-else :src="gonggaoxinxilist[4].fengmian?baseUrl+gonggaoxinxilist[4].fengmian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[4].biaoti}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[4].fabushijian}}</view>
								
								<view :style='{"padding":"0 20rpx 4rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[4].addtime}}</text>
								</view>
								<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[4].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="gonggaoxinxilist.length > 5" @tap="onDetailTap('gonggaoxinxi',gonggaoxinxilist[5].id)" class="box box6" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="gonggaoxinxilist[5].fengmian.substring(0,4)=='http'" :src="gonggaoxinxilist[5].fengmian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="gonggaoxinxilist[5].fengmian?baseUrl+gonggaoxinxilist[5].fengmian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[5].biaoti}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"1.5","fontSize":"32rpx","color":"#fff","order":"1"}' class="title ">{{gonggaoxinxilist[5].fabushijian}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 2p","order":"7"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[5].addtime}}</text>
						</view>
						<view :style='{"padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{gonggaoxinxilist[5].clicknum}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		<!-- 商品列表 -->
		<!-- 商品列表 -->
		<!-- 新闻资讯 -->
		<!-- 新闻资讯 -->
	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
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
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				canpinxinxilist: [],
				gonggaoxinxilist: [],
				news: [],
			}
		},
		watch: {
		},
		mounted() {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
        async onLoad(){
            
        },
		async onShow() {
			this.swiperMenuList = []
			this.role = uni.getStorageSync("appRole");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
			this.menuList.forEach((item,key) => {
			    if(key==0) {
			        item.frontMenu.forEach((item2,key2) => {
			            if(item2.child[0].buttons.indexOf("查看")>-1) {
			                this.swiperMenuList.push(item2);
			            }
			        })
			    }
			})
            // let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.list('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name,
						url: item.url
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			

			// 推荐信息
			// 推荐信息
			this.getRecommendList()
			this.getHomeList()
			this.getNewsList()
		},
		methods: {
			uGetRect(selector, all) {
				return new Promise(resolve => {
					uni.createSelectorQuery()
					.in(this)
					[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect);
						}
						if (!all && rect) {
							resolve(rect);
						}
					})
					.exec();
				});
			},
			cloneData(data) {
				return JSON.parse(JSON.stringify(data));
			},
			newsTabClick2(index){
				this.newsIndex2 = index
				this.getNewsList()
			},
			async getNewsList(){
				let res;
				let params = {
					page: 1,
					limit: 6,
					sort: 'id',
					order: 'desc',
				}
			},
			homeTabClick2(index,name){
				this['home' + name + 'Index2'] = index
				this.getHomeList()
			},
			async getHomeList(){
				let res;
				let params;
			},
			recommendTabClick2(index,name){
				this[name + 'Index2'] = index
				this.getRecommendList()
			},
			async getRecommendList(){
				let res;
				let params;
				// 推荐信息
				params = {
					page: 1,
					limit: 6,
				}
				if(uni.getStorageSync("appUserid")) {
					res = await this.$api.recommend2('canpinxinxi', params);
				} else {
					res = await this.$api.recommend('canpinxinxi', params);
				}
				this.canpinxinxilist = res.data.list
				

				// 推荐信息
				params = {
					page: 1,
					limit: 6,
				}
				res = await this.$api.recommend('gonggaoxinxi', params);
				this.gonggaoxinxilist = res.data.list
				

			},
			//轮播图跳转
			onSwiperTap(e) {
				if(e.url) {
					if (e.url.indexOf('https') != -1) {
						window.open(e.url)
					} else {
						this.$utils.jump(e.url)
					}
				}
			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(index) {
				let url = '../' + index + '/list'
				if(index=='forum'){
					url = '../forum-index/forum-index'
				}
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
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
