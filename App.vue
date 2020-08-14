<script>
	export default {
		globalData:{
			tempUrl: 'www.globalData.com'
		},
		onLaunch: function() {
			console.log('App Launch')
			if(process.env.NODE_ENV === 'development'){
				console.log('开发环境')
			}else{
				console.log('生产环境')
			}
			switch(uni.getSystemInfoSync().platform){
				case 'android':
				   console.log('运行Android上')
				   break;
				case 'ios':
				   console.log('运行iOS上')
				   break;
				default:
				   console.log('运行在开发者工具上')
				   break;
			}
		},
		onShow: function() {
			console.log('App Show')
			console.log(this.$options.globalData.tempUrl)
			console.log(getApp().globalData.tempUrl)
		},
		onHide: function() {
			console.log('App Hide')
		},
		onuniNViewMessage() {
			console.log('App uniNViewMessage')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/css/app.css';
	@import './common/iconfont/iconfont.css';
</style>
