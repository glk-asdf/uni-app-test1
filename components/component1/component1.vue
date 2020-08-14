<template>
	<view>
		{{a}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: 'qwert'
			}
		},
		methods: {
			method1() {
				console.log(this.a)
			}
		}
	}
</script>

<style>

</style>
