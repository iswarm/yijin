<template>
	<view>
		<image class="logo" src="../../static/logo.png"></image>
		<view class="login">
			<view class="login-xy">
				<uni-icon type="person-filled" size="30" color="black"></uni-icon>
				<input  placeholder="用户名" class="login-txt"/>
			</view>
			<view class="line"></view>
			<view class="login-xy">
				<uni-icon type="locked" size="28" color="black"></uni-icon>
				<input placeholder="密   码" class="login-txt" password/>
			</view>
			<view class="forgot-psd">
				<text>忘记密码</text>
				<text style="padding-left: 10upx;" @click="register()">注册账号</text>
			</view>
			<button class="button" @tap="login()">登录</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue";
		export default {
			data() {
				return {
				}
			},
			components: {
				uniIcon,
			},
			methods:{
				login() {//页面跳转时间
				uni.redirectTo({
					url: '../index/index'
				})  
				},
				register(){
					uni.redirectTo({
						url:'../register/register'
					})
				}
			},
			onLoad(){
			}
		}
	</script>
	
<style>
	@import url("../../common/login");
</style>
	