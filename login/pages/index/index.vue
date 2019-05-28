<template>
	<view>
		<!--
		<web-view src="../../hybrid/html/paly.html"></web-view>
		
		<view><image :src="img"></image></view>-->
		
		<text>{{name}}</text>登录成功
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:uni.getStorageSync('name'),
				//uni.getStorageSync('storage_key')
				img:'../../static/logo.png'
			}
		},
		components: {
			
		},
		onLoad() {
			
		},
		methods: {
		}
	}
</script>

<style>
</style>
