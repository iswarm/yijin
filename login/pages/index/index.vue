<template>
	<view class="html">
		<view class="webpBack html">
			<view id="print" class="body">
				<p>lol</p>  
			</view>
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
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>
	@media screen and (orientation: portrait) {
	      .html{
	         width : 100% ;
	         height : 100% ;
	          background-color: white ;
	          overflow : hidden;
	      }
	      .body{
	          width : 100% ;
	         height : 100% ;
	         background-color: red ;
	          overflow : hidden;
	      }
	      #print{
	         position : absolute ;
	         background-color: yellow ;
	      }
	} 
	@media screen and (orientation: landscape) {
	       .html{
	         width : 100% ;
	         height : 100% ;
	         background-color: white ;
	      } 
	       .body{
	          width : 100% ;
	         height : 100% ;
	         background-color: white ;
	      }
	           #print{
	            position : absolute ;
	            top : 0 ; 
	            left : 0 ;
	            width : 100% ;
	            height : 100% ;
	            background-color: yellow ;
	         }
	}
	#print p{
	        margin: auto ;
	        margin-top : 20px ;
	        text-align: center;
	      }
</style>
