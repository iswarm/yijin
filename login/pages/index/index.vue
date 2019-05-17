<template>
	<view>
		<view class="screen">
			te
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
	.screen{
	    width: 100vh;
	    height: 100vw;
	    position: absolute;/*绝对定位*/
	    left: 50%;
	    top: 50%;
	    overflow: hidden;/*内容溢出，内容会被修剪*/
	    transform: translate3d(-50%,-50%,0) rotate(90deg);/*Internet Explorer 10、Firefox、Opera 支持 transform 属性。*/
		/*定义 3D 转换。translate3d(x,y,z) rotate(angle)定义 2D 旋转，在参数中规定角度。*/
	    -webkit-transform: translate3d(-50%,-50%,0) rotate(90deg);/*Safari 和 Chrome 支持替代的 -webkit-transform 属性*/
	    margin: auto;
		background: #09BB07;
	}
</style>
