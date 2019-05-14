<template>
	<view class="vertical">
		<image class="img" src="../../static/logo.png"></image>
		<view class="horizontal">
			<text style="margin-right: 20upx;">选择注册的角色</text>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<text>{{array[index]}}</text>
			</picker>
		</view>
		<view class="horizontal">
			<uni-icon type="person-filled" size="30" color="black"></uni-icon>
			<input placeholder="输入用户名"/>
		</view>
		<view class="horizontal">
			<uni-icon type="locked" size="30" color="black"></uni-icon>
			<input  placeholder="输入密码"/>
		</view>
		<view class="horizontal">
			<uni-icon type="phone" size="30" color="black"></uni-icon>
			<input  placeholder="手机号码"/>
		</view>
		<view class="horizontal">
			<input  placeholder="输入验证码"/>
			<button>获取验证码</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue";
	export default {
		data() {
			return {
				array: ['学生', '老师', '管理员', '角色x'],
				index: 0,
			};
		},
		components: {
			uniIcon,
		},
		methods:{
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			}
		}
	}
</script>

<style>
	@import url("../../common/register");
</style>
