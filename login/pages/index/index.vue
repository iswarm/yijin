<template>
	<view class="content">
       
		<view>
			<button @click="openCodeDialog">发送验证码</button>
			<view>验证码为：{{code}}</view>
        </view>
		<lausirCodeDialog :show="showCodeDialog" :len="4" :autoCountdown="true" :phone="'139****7978'" v-on:change="change"></lausirCodeDialog>
	</view>
</template>

<script>
	import lausirCodeDialog from '../../components/lausir-codedialog.vue';
	export default {
		components: {
			lausirCodeDialog,
		},
		data() {
			return {
				showCodeDialog: false,
				code:"1231"
			}
		},
		onLoad() {

		},
		methods: {
			change:function(res){
				if(res.type == 1){
					this.code = res.code;
					this.showCodeDialog = false;
				}else if(res.type == -1){
					this.code ="请输入验证码";
					this.showCodeDialog = false;
				}else{
					setTimeout(function(){
						res.resendCall()
					},3000)
				}
				
				
			},
			openCodeDialog:function(){
				this.showCodeDialog = true;
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
