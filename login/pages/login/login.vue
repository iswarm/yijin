<template>
	<view>
		<image v-if="show" src="../../static/logo.png" class="logo"></image>
		<image v-if="!show" src="../../static/shuijiao.jpg" class="logo"></image>
		<view class="login">
			<view class="login-xy">
				<uni-icon type="person-filled" size="30" color="black"></uni-icon>
				<input  placeholder="用户S名" class="login-txt" v-model="name" v-on:click="show = false" />
			</view>
			<view class="login-xy">
				<uni-icon type="locked" size="28" color="black"></uni-icon>
				<input placeholder="密码" class="login-txt" password  v-model="pwd" style="letter-spacing:15px;" v-on:click="show = true">
			</view>
			<button class="button" @tap="goLogin()">登录</button>
			<view class="forgot-psd">
				<text @click="test()">忘记密码</text>
				<text class="forgot-psd-spacing">|</text>
				<text @click="register()">注册账号</text>
			</view>
			<view class="bottom">
				<view>第三方登录</view>
				<view class="login-icon">
					<uni-icon type="weibo" size="20" color="black" @click="test()"></uni-icon>
					<uni-icon type="weixin" size="20" color="black" @click="WX_MP_getuserinfo()"></uni-icon>
					<uni-icon type="qq" size="20" color="black"></uni-icon>
				</view> 
			</view>
			<!--
			<button class="button" open-type="getUserInfo" @getuserinfo="WX_MP_getuserinfo">微信授权登录</button>
			<button class="button" @tap="gettest()">get测试</button>
			-->
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue";
		export default {
			data() {
				return {
					name:'',
					pwd:'',
					show:true
				}
			},
			components: {
				uniIcon,
			},
			methods:{
				login() {//登录
				uni.navigateTo({
					url: '../index/index'
				})  
				},
				test() {//登录
				uni.request({
					url: 'http://yijint.top:8089/login',
					method: 'POST',//get或post
					data: {//请求的参数
						username:'测试1',
						password:'123456'
					},
					success: res => {
						console.log(res.data)
					},
					fail: () => {
						console.log('请求失败')
					}
				})
				},
				register(){//注册
					uni.navigateTo({
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
						url: 'http://yijint.top:8089/login',//开发者服务器接口地址
						method: 'POST',//get或post
						data: {//请求的参数
							username:this.name,
							password:this.pwd
						},
						success: res => {
							//console.log(this.name)
							console.log(res.data)
							var code = res.data.code;
							if(code==1){
								var name = res.data.data.username;
								uni.setStorageSync('name', name)
								uni.navigateTo({
									url:'../index/index'
								})
							}
							else{
								uni.showModal({
									content: "用户名或密码错误",
									confirmText: "确定",
									cancelText: "取消"
								})
							}
							//uni.setStorageSync('name', this.name)//缓存	
						},
						fail: () => {
							uni.hideLoading();//隐藏 loading 提示框。
							console.log("请求失败")
							//console.log(this.name)
							uni.showToast({//交互反馈接口，显示消息提示框。
								icon:'none',
								title:'请求失败'
							})
						},
						complete: () => {}
					});
				},
				gettest(){
					uni.navigateTo({//登录成功页面跳转
						url:'../222/222'
					})
				},
				WX_MP_getuserinfo(e){
					//微信小程序微信登录方法	
					uni.login({
					provider: 'weixin',
					success: function (loginRes) {
					//登录成功
					uni.getUserInfo({
						success: function (res){
							const userInfo = res.userInfo
							const nickName= userInfo.nickName//读取头像
							const avatarUrl= userInfo.avatarUrl
							uni.setStorageSync('name', nickName)//缓存
							uni.setStorageSync('wximg', avatarUrl)
							
						}	
					});
					uni.navigateTo({//登录成功页面跳转
						url:'../index/index'
					})
						},
						fail:function(){	
						}
					});
				}
			},
			onLoad(){//第一次加载
				console.log(this.code)
			},
			beforeUpdate(){//数据更新时调用此生命周期函数
				
			},
		}
	</script>
	
<style>
	@import url("../../common/login");
</style>
	