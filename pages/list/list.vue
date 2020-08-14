<template>
	<view>
		<text class="text" :title="title">{{title}}</text>
		<component1 ref="com"></component1>
		<button type="primary" @click="met1">123</button>
	</view>
</template>

<script>
	import component1 from "components/component1/component1"
	export default {
		data() {
			return {
				title: 123
			}
		},
		methods:{
			met1() {
				this.$refs.com.a = 123
			}
		},
		components:{
			component1
		},
		onLoad() {
			console.log('onLoad')
		},
		onShow() {
			console.log('onShow')
		},
		onReady() {
			console.log('onReady')
		},
		onHide() {
			console.log('onHide')
		},
		onUnload() {
			console.log('onUnload')
		}
	}
</script>

<style>
	.text{
		width: 10rpx;
	}
</style>
