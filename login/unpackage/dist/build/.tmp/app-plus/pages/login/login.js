(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"1f51":function(t,e,n){"use strict";n.r(e);var i=n("88c5"),o=n("be9d");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("f48b");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"215a":function(t,e,n){"use strict";n("fcac");var i=a(n("b0ce")),o=a(n("1f51"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},"88c5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[t.show?n("image",{staticClass:"logo",attrs:{src:"../../static/logo.png"}}):t._e(),t.show?t._e():n("image",{staticClass:"logo",attrs:{src:"../../static/shuijiao.jpg"}}),n("view",{staticClass:"login"},[n("view",{staticClass:"login-xy"},[n("uni-icon",{attrs:{type:"person-filled",size:"30",color:"black",mpcomid:"abb6ec54-0"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"login-txt",attrs:{placeholder:"用户名",eventid:"abb6ec54-0"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})],1),n("view",{staticClass:"login-xy"},[n("uni-icon",{attrs:{type:"locked",size:"28",color:"black",mpcomid:"abb6ec54-1"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"login-txt",staticStyle:{"letter-spacing":"15px"},attrs:{placeholder:"密码",password:"",eventid:"abb6ec54-1"},domProps:{value:t.pwd},on:{click:function(e){t.show=!0},input:function(e){e.target.composing||(t.pwd=e.target.value)}}})],1),n("button",{staticClass:"button",attrs:{eventid:"abb6ec54-2"},on:{tap:function(e){t.goLogin()}}},[t._v("登录")]),n("view",{staticClass:"forgot-psd"},[n("text",{attrs:{eventid:"abb6ec54-3"},on:{click:function(e){t.test()}}},[t._v("忘记密码")]),n("text",{staticClass:"forgot-psd-spacing"},[t._v("|")]),n("text",{attrs:{eventid:"abb6ec54-4"},on:{click:function(e){t.register()}}},[t._v("注册账号")])]),n("view",{staticClass:"bottom"},[n("view",[t._v("第三方登录")]),n("view",{staticClass:"login-icon"},[n("uni-icon",{attrs:{type:"weibo",size:"20",color:"black",mpcomid:"abb6ec54-2"}}),n("uni-icon",{attrs:{type:"weixin",size:"20",color:"black",mpcomid:"abb6ec54-3"}}),n("uni-icon",{attrs:{type:"qq",size:"20",color:"black",mpcomid:"abb6ec54-4"}})],1)])],1)])},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},be9d:function(t,e,n){"use strict";n.r(e);var i=n("d705"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},d705:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("3d4c"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{name:"",pwd:"",show:!0}},components:{uniIcon:i.default},methods:{login:function(){t.navigateTo({url:"../index/index"})},test:function(){t.navigateTo({url:"../index/index"})},register:function(){t.navigateTo({url:"../register/register"})},goLogin:function(){this.name.length<=0?t.showToast({icon:"none",title:"请输入用户名"}):this.pwd.length<=0?t.showToast({icon:"none",title:"请输入密码"}):t.request({url:"http://yijint.top:8089/login",method:"POST",data:{userName:this.name,password:this.pwd},success:function(e){console.log(e.data),t.showToast({icon:"none",title:"登录成功"})},fail:function(){t.hideLoading(),console.log("请求失败")},complete:function(){}})},gettest:function(){t.navigateTo({url:"../222/222"})},WX_MP_getuserinfo:function(e){t.login({provider:"weixin",success:function(e){t.getUserInfo({success:function(e){var n=e.userInfo,i=n.nickName,o=n.avatarUrl;t.setStorageSync("wxname",i),t.setStorageSync("wximg",o)}}),t.navigateTo({url:"../register/register"})},fail:function(){}})}},onLoad:function(){},beforeUpdate:function(){}};e.default=a}).call(this,n("649d")["default"])},f48b:function(t,e,n){"use strict";var i=n("fc5c"),o=n.n(i);o.a},fc5c:function(t,e,n){}},[["215a","common/runtime","common/vendor"]]]);