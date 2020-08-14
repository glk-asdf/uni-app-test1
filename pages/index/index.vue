<template>
	<view class="content">
		<navigator url="../list/list" hover-class="navigator-hover">
			<button type="default">跳转到 list 页面</button>
		</navigator>
		<button @click="showHelperUrl">helper的url</button>
		<button @click="showPrototypeUrl">prototype的url</button>
		<button @click="showGlobalDataUrl">globalData的url</button>
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<navigator url="../list/list">百度</navigator>
		<text class="text1">这里写够二十个字然后再多一个换行来确定单位</text>
		<view class="view1">100px宽度</view>
		<view class="view2">100rpx宽度</view>
		<view class="view3">10vh+50vw</view>
		<view class="view4">--status-bar-height</view>
		<view class="view5">--window-top</view>
		<view class="view6">--window-bottom</view>
		<view class="view7"></view>
		<text class="icon-xiazai2"></text>
		<block v-for="item in 10" :key="item">
			<text>{{item}}</text>
		</block>
		<view>
			<uni-calendar :insert="true" :lunar="true" :disable-before="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'"
			 @change="change" />
		</view>
		<block v-for="item in arr" :key="item">
			<text>{{item}}</text>
			<input type="text">
		</block>
		<button type="primary" @click="reverseArr">reverse</button>
		<view class="mask" @touchmove.stop.prevent="moveHandle"></view>
		<view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="picker">
					当前选择：{{array[index]}}{{index}}
				</view>
			</picker>
		</view>
		<view>
			<radio-group class="radio-group" @change="radioChange">
				<label class="radio" v-for="(item, index) in items" :key="item.name">
					<radio :value="item.name" :checked="item.checked" /> {{item.value}}
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import uniCalendar from "../../components/uni-calendar/uni-calendar.vue"
	import helper from "../../common/js/helper.js"
	export default {
		data() {
			return {
				title: 'Hello',
				arr: [1, 2, 3],
				index: 0,
				array: ['A', 'B', 'C'],
				items: [{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: 'true'
					},
					{
						name: 'BRA',
						value: '巴西'
					},
					{
						name: 'JPN',
						value: '日本'
					},
					{
						name: 'ENG',
						value: '英国'
					},
					{
						name: 'TUR',
						value: '法国'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			radioChange(e) {
				console.log('radio发生change事件，携带value值为：', e.target.value)
			},
			bindPickerChange(e) {
				console.log(e)
				this.index = e.target.value
			},
			moveHandle() {},
			reverseArr() {
				this.arr = this.arr.reverse()
			},
			change(e) {
				console.log(e);
			},
			showHelperUrl() {
				console.log(helper.tempUrl)
			},
			showPrototypeUrl() {
				console.log(this.app1_tempUrl)
			},
			showGlobalDataUrl() {
				console.log(getApp().globalData.tempUrl)
			}
		},
		components: {
			uniCalendar
		},
		onLoad() {
			console.log('index load')
		},
		onShow() {
			console.log('index show')
		},
		onReady() {
			console.log('index ready')
		},
		onHide() {
			console.log('index hide')
		},
		onUnload() {
			console.log('index unload')
		},
		onResize() {
			console.log('index resize')
		},
		onPullDownRefresh() {
			console.log('index pullDownRefresh')
		},
		onReachBottom() {
			// 滚动触底时触发，（但并不是完全触底，会有一段距离，50左右，可能与TabBar有关）
			console.log('index reachBottom')
		},
		onTabItemTap({
			index,
			pagePath,
			text
		}) {
			console.log('点击了第' + (index + 1) + '个名为' + text + '的按钮，当前页面路径为' + pagePath)
			console.log('index tableItemTap')
		},
		onShareAppMessage() {
			console.log('index shareAppMessage')
		},
		onPageScroll({
			scrollTop
		}) {
			// console.log('距离顶部的距离：' + scrollTop + 'px')
			// console.log('index pageScroll')
		},
		onNavigationBarButtonTap({
			index
		}) {
			console.log('当前点击的原生标题栏按钮下标为' + index)
			console.log('index navigationBarButtonTap')
		},
		onBackPress({
			from
		}) {
			console.log('点击 安卓后退按钮 或 左上角后退按钮 后退时触发')
			console.log('当前点击的按钮为' + from)
			console.log('index backPress')
		},
		onNavigationBarSearchInputChanged() {
			console.log('navigationBarSearchInputChanged')
		},
		onNavigationBarSearchInputConfirmed() {
			console.log('navigationBarSearchInputConfirmed')
		},
		onNavigationBarSearchInputClicked() {
			console.log('navigationBarSearchInputclicked')
		}
	}
</script>

<style>
	@import '../../common/css/index.css';

	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	page {
		background-color: #efefef;
	}
</style>
