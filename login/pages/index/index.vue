<template>
	<view>
		 a= <input type="text" id="t1" v-model="t1">
        b= <input type="text" id="t2" v-model="t2">
        a+b=<span class="a">{{msg}}</span>
        <input type="button" value="submit" @click="get()">
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				t1:'',
                t2:'',
                msg:''
				}
		},
		onLoad() {
		},
		methods: {
			get:function(){
                    this.$http.get('http://192.168.0.246:8080/user/login',{
                         a:this.t1,
                         b:this.t2
                    }).then(function(res){
                       this.msg=res.data;
                    },function(res){
                        alert(res.status);
                    });
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
