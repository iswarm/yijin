<template>
	<view>
		<view class="inputArea">
			<view class="registerRole">
				<text style="margin-right: 20upx;">选择注册的角色</text>
				<picker @change="bindPickerChange" :value="index" :range="array"  >
					<text v-model="registerRole">{{array[index]}}</text>
				</picker>
			</view>
		</view>
		<!--
		<view class="inputArea">
			<input v-model="registerPhone" placeholder="请输入手机号(国内)" type="number" maxlength="11" class="inputClass" />
		</view>
		<view class="inputArea">
			<view style="display: flex;">
				<input type="number" maxlength="6" placeholder="短信验证码" class="inputClass" style="flex:4;border-radius: 22px 0 0 22px;"
				 v-model="registerCode" />
				<view class="inputClass getCAPTCHA" @click="getsmscode">{{smsbtn.text}}</view>
			</view>
		</view>-->
		<view class="inputArea">
			<input v-model="registerName" placeholder="输入用户名" type="text" class="inputClass" />
		</view>
		<view class="inputArea">
			<input v-model="registerPassword" placeholder="密码(至少符号数字大小写两种)" type="password" class="inputClass" />
		</view>
		<view class="inputArea">
			<input v-model="confirmPassword" placeholder="确认登录密码" type="password" class="inputClass" />
		</view>
		<view class="inputArea">
			<input v-model="registerEmail" placeholder="电子邮件" type="text" class="inputClass" />
		</view>
		<view style="padding: 0 10%;">
			<text style="color: red;">{{message}}</text>
		</view>
		<view class="inputArea">
			<button style="border-radius:22px;" type="primary" @click="goRegister">注 册</button>
		</view>
		<view class="inputArea">
			<text style="float:right;color:blue;" @click="openAgreement">《用户协议》</text>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue";
	export default {
		data() {
			return {
				array: ['学生', '老师', '管理员', '角色x'],//注册角色
				index: 0,
				//registerPhone: '',
				registerName:'',
				registerPassword: '',
				confirmPassword: '',
				//registerCode: '',
				registerRole:'学生',
				registerEmail:'',
				smsbtn: {//发送验证码按钮状态
					text: '发送',
					status: false,
					codeTime: 60
				},
				timerId: null,
				message: ''
			}
		},
		components: {
			uniIcon,
		},
		onLoad() {
		},
		methods: {
			bindPickerChange: function(e) {//角色选择
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
				if(e.target.value==1){
					this.registerRole='老师'
					console.log(this.registerRole)
				}
				if(e.target.value==2){
					this.registerRole='管理员'
					console.log(this.registerRole)
				}
				
			},
			getsmscode() {
				//发送验证码函数
				if (this.smsbtn.codeTime != 60) {
					return;
				}
				this.timerId = setInterval(() => {//发送验证码的定时器
						let codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重试";
							this.smsbtn.codeTime = 60;
							this.smsbtn.status = false;
						}
					},
					1000);
				return false;
			},
			goRegister() {//注册函数
				//let registerPhone = this.registerPhone;
				let registerName = this.registerName;
				let registerPassword = this.registerPassword;
				let confirmPassword = this.confirmPassword;
				//let registerCode = this.registerCode;
				let registerRole=this.registerRole;
				/* if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(registerPhone))) {
					this.message = "手机号码有误，请重填";
					return false;
				}
				if (registerCode < 100000) {
					this.message = "验证码不符合格式";
					return false;
				} */
				if (!registerName) {
					this.message = "用户名为空";
					return false;
				}
				if (!registerPassword) {
					this.message = "密码为空";
					return false;
				}
				/* let ls = 0;
				if (registerPassword.match(/([a-z])+/)) {
					ls++;
				}
				if (registerPassword.match(/([0-9])+/)) {
					ls++;
				}
				if (registerPassword.match(/([A-Z])+/)) {
					ls++;
				}
				if (registerPassword.match(/[^a-zA-Z0-9]+/)) {
					ls++;
				}
				if (registerPassword.length < 8) {
					ls = 0;
				}
				if (ls < 2) {
					this.message = "密码强度不够，至少8位，大写、小写、字母、符号 其中两种";
					return false;
				} */
				if (confirmPassword != registerPassword) {
					this.message = "两次密码不同";
					return false;
				}
				uni.request({
					url: 'http://yijint.top:8089/register',
					method: 'POST',
					data: {
						//phone应该以后台验证码接收到的为phone，否则会造成修改后任意手机号注册漏洞
						username:this.registerName,
						password: this.registerPassword ,
						email: this.registerEmail, 
						rolename:this.registerRole
					},
					success: res => {
						console.log(res)
						uni.redirectTo({
							url:'../login/login'
						})
					},
					fail: () => {
						uni.hideLoading();
						this.message = "网络连接失败";
					},
					complete: () => {}
				});
			},
			openAgreement() {//用户协议
				uni.navigateTo({
					url: '../../store/new_file.html',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	@import url("../../common/register");
</style>
