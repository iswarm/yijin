<template>
	<view>
		<image class="logo" src="../../static/logo.png"></image>
		<open-data type="userNickName"></open-data>
		<view class="login">
			<view class="login-xy">
				<uni-icon type="person-filled" size="30" color="black"></uni-icon>
				<input  placeholder="用户名" class="login-txt" v-model="name"/>
			</view>
			<view class="line"></view>
			<view class="login-xy">
				<uni-icon type="locked" size="28" color="black"></uni-icon>
				<input placeholder="密   码" class="login-txt" password  v-model="pwd"/>
			</view>
			<view class="forgot-psd">
				<text>忘记密码</text>
				<text style="padding-left: 10upx;" @click="register()">注册账号</text>
			</view>
			<button class="button" @tap="goLogin()">登录</button>
			<button class="button" open-type="getUserInfo" @getuserinfo="WX_MP_getuserinfo">微信授权登录</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue";
		export default {
			data() {
				return {
					name:'',
					pwd:''
				}
			},
			components: {
				uniIcon,
			},
			methods:{
				login() {//登录
				uni.redirectTo({
					url: '../index/index'
				})  
				},
				register(){//注册
					uni.redirectTo({
						url:'../register/register'
					})
				},
				goLogin() {
					if (this.name.length <= 0){
						uni.showToast({
							icon:'none',
							title:"请输入用户名"
						});
						return;
					}
					if (this.pwd.length <= 0){
						uni.showToast({
							icon:'none',
							title:"请输入密码"
						});
						return;
					}
					uni.request({
						url: 'http://192.168.0.246:8080/user/login',
						method: 'POST',//get或post
						data: {
							userName:this.name,
							password:this.pwd
						},
						success: res => {
							console.log(res.data)
							uni.showToast({
								icon:'none',
								title:'登录成功'
							})
						},
						fail: () => {
							uni.hideLoading();
							console.log("请求失败啊")
						},
						complete: () => {}
					});
				},
				WX_MP_getuserinfo(e){
					//微信小程序微信登录方法	
					uni.login({
					provider: 'weixin',
					success: function (loginRes) {
					//登录成功
					console.log("yes")
					uni.getUserInfo({
						success: function (res){
							const userInfo = res.userInfo
							//获取用户名
							console.log(userInfo.nickName)
						}
							
					});
					uni.redirectTo({//页面跳转
						url:'../register/register'
					})
						},
						fail:function(){
							
						}
					});
				}
			},
			onLoad(){//第一次加载
			},
		}
	</script>
	
<style>
	@import url("../../common/login");
</style>
	