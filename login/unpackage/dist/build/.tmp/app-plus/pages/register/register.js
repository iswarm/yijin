(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"05c2":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(s("3d4c"));function i(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{array:["学生","老师","管理员","角色x"],index:0,registerPhone:"",registerName:"",registerPassword:"",confirmPassword:"",registerCode:"",registerRole:"",smsbtn:{text:"发送",status:!1,codeTime:60},timerId:null,message:""}},components:{uniIcon:r.default},onLoad:function(){},methods:{bindPickerChange:function(e){console.log("picker发送选择改变，携带值为："+e.target.value),this.index=e.target.value},getsmscode:function(){var e=this;if(60==this.smsbtn.codeTime)return this.timerId=setInterval(function(){var t=e.smsbtn.codeTime;t--,e.smsbtn.codeTime=t,e.smsbtn.text=t+"S",t<1&&(clearInterval(e.timerId),e.smsbtn.text="重试",e.smsbtn.codeTime=60,e.smsbtn.status=!1)},1e3),!1},goRegister:function(){var t=this,s=this.registerPhone,r=this.registerName,i=this.registerPassword,a=this.confirmPassword,n=this.registerCode;this.registerRole;if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(s))return this.message="手机号码有误，请重填",!1;if(n<1e5)return this.message="验证码不符合格式",!1;if(!r)return this.message="用户名为空",!1;if(!i)return this.message="密码为空",!1;var o=0;return i.match(/([a-z])+/)&&o++,i.match(/([0-9])+/)&&o++,i.match(/([A-Z])+/)&&o++,i.match(/[^a-zA-Z0-9]+/)&&o++,i.length<8&&(o=0),o<2?(this.message="密码强度不够，至少8位，大写、小写、字母、符号 其中两种",!1):a!=i?(this.message="两次密码不同",!1):void e.request({url:"http://yijint.top:8089/register",method:"POST",data:{phnoe:this.registerPhone,password:this.registerPassword,username:this.registerName,rolename:this.registerRole},success:function(t){console.log(t),console.log(thi.index),e.redirectTo({url:"../login/login"})},fail:function(){e.hideLoading(),t.message="网络连接失败"},complete:function(){}})},openAgreement:function(){e.navigateTo({url:"../../store/new_file.html",success:function(e){},fail:function(){},complete:function(){}})}}};t.default=a}).call(this,s("649d")["default"])},"1e18":function(e,t,s){"use strict";s.r(t);var r=s("5f33"),i=s("280a");for(var a in i)"default"!==a&&function(e){s.d(t,e,function(){return i[e]})}(a);s("2801");var n=s("2877"),o=Object(n["a"])(i["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},2801:function(e,t,s){"use strict";var r=s("5186"),i=s.n(r);i.a},"280a":function(e,t,s){"use strict";s.r(t);var r=s("05c2"),i=s.n(r);for(var a in r)"default"!==a&&function(e){s.d(t,e,function(){return r[e]})}(a);t["default"]=i.a},"4e01":function(e,t,s){"use strict";s("fcac");var r=a(s("b0ce")),i=a(s("1e18"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(i.default))},5186:function(e,t,s){},"5f33":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[s("view",{staticClass:"inputArea"},[s("view",{staticClass:"registerRole"},[s("text",{staticStyle:{"margin-right":"20rpx"}},[e._v("选择注册的角色")]),s("picker",{attrs:{value:e.index,range:e.array,eventid:"cd81f23c-1"},on:{change:e.bindPickerChange}},[s("text",{attrs:{eventid:"cd81f23c-0"},model:{value:e.registerRole,callback:function(t){e.registerRole=t},expression:"registerRole"}},[e._v(e._s(e.array[e.index]))])])],1)]),s("view",{staticClass:"inputArea"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPhone,expression:"registerPhone"}],staticClass:"inputClass",attrs:{placeholder:"请输入手机号(国内)",type:"number",maxlength:"11",eventid:"cd81f23c-2"},domProps:{value:e.registerPhone},on:{input:function(t){t.target.composing||(e.registerPhone=t.target.value)}}})]),s("view",{staticClass:"inputArea"},[s("view",{staticStyle:{display:"flex"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerCode,expression:"registerCode"}],staticClass:"inputClass",staticStyle:{flex:"4","border-radius":"22px 0 0 22px"},attrs:{type:"number",maxlength:"6",placeholder:"短信验证码",eventid:"cd81f23c-3"},domProps:{value:e.registerCode},on:{input:function(t){t.target.composing||(e.registerCode=t.target.value)}}}),s("view",{staticClass:"inputClass getCAPTCHA",attrs:{eventid:"cd81f23c-4"},on:{click:e.getsmscode}},[e._v(e._s(e.smsbtn.text))])])]),s("view",{staticClass:"inputArea"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerName,expression:"registerName"}],staticClass:"inputClass",attrs:{placeholder:"输入用户名",type:"text",eventid:"cd81f23c-5"},domProps:{value:e.registerName},on:{input:function(t){t.target.composing||(e.registerName=t.target.value)}}})]),s("view",{staticClass:"inputArea"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword,expression:"registerPassword"}],staticClass:"inputClass",attrs:{placeholder:"密码(至少符号数字大小写两种)",type:"password",eventid:"cd81f23c-6"},domProps:{value:e.registerPassword},on:{input:function(t){t.target.composing||(e.registerPassword=t.target.value)}}})]),s("view",{staticClass:"inputArea"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"inputClass",attrs:{placeholder:"确认登录密码",type:"password",eventid:"cd81f23c-7"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]),s("view",{staticStyle:{padding:"0 10%"}},[s("text",{staticStyle:{color:"red"}},[e._v(e._s(e.message))])]),s("view",{staticClass:"inputArea"},[s("button",{staticStyle:{"border-radius":"22px"},attrs:{type:"primary",eventid:"cd81f23c-8"},on:{click:e.goRegister}},[e._v("注 册")])],1),s("view",{staticClass:"inputArea"},[s("text",{staticStyle:{float:"right",color:"blue"},attrs:{eventid:"cd81f23c-9"},on:{click:e.openAgreement}},[e._v("《用户协议》")])])])},i=[];s.d(t,"a",function(){return r}),s.d(t,"b",function(){return i})}},[["4e01","common/runtime","common/vendor"]]]);