(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8859b8c"],{5825:function(e,r,t){},"93a2":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("a-form-model",{ref:"registerForm",staticClass:"login-form",attrs:{model:e.registerForm,rules:e.rules,id:"components-form-demo-normal-login"}},[t("a-form-model-item",{attrs:{"has-feedback":"",prop:"username"}},[t("a-input",{attrs:{placeholder:"UserName"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("a-form-model-item",{attrs:{"has-feedback":"",prop:"email"}},[t("a-input",{attrs:{placeholder:"Eamil"},model:{value:e.registerForm.email,callback:function(r){e.$set(e.registerForm,"email",r)},expression:"registerForm.email"}},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),t("a-form-model-item",{attrs:{"has-feedback":"",prop:"password"}},[t("a-input-password",{attrs:{autocomplete:"off",placeholder:"Password"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),t("a-form-model-item",{attrs:{prop:"role"}},[t("a-input",{staticStyle:{width:"100%"},attrs:{value:"用户角色",disabled:""}},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"question-circle"},slot:"prefix"}),t("a-select",{staticStyle:{width:"275px"},attrs:{slot:"addonAfter",placeholder:"Please select your role"},on:{change:e.handleRoleChange},slot:"addonAfter"},[t("a-select-option",{attrs:{value:"admin"}},[e._v(" 管理员 ")]),t("a-select-option",{attrs:{value:"customer"}},[e._v(" 商家 ")])],1)],1)],1),t("a-form-model-item",{attrs:{prop:"code"}},[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{span:17}},[t("a-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.registerForm.code,callback:function(r){e.$set(e.registerForm,"code",r)},expression:"registerForm.code"}})],1),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(r){return e.getCodeHandle("registerForm")}}},[e._v("获取验证码")])],1)],1)],1),t("a-form-model-item",[t("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:function(r){return e.submitForm("registerForm")}}},[e._v(" 立即注册 ")]),e._v(" Or "),t("router-link",{attrs:{to:{name:"Login"}}},[e._v(" Login now! ")])],1)],1)],1)},a=[],s=t("c24f"),i={data:function(){var e=function(e,r,t){var o=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;return r?o.test(r)?t():t(new Error("邮箱格式错误")):t(new Error("请输入邮箱"))},r=function(e,r,t){return""===r?t(new Error("请输入密码")):6!==r.length?t(new Error("密码长度必须为6位")):t()};return{registerForm:{email:"",password:"",code:"",username:"",role:""},rules:{email:[{validator:e,trigger:"change"}],password:[{validator:r,trigger:"change"}],code:[{required:!0,message:"验证码不能为空"}],username:[{required:!0,message:"用户名不能为空"}],role:[{required:!0,message:"用户角色不能为空"}]},formItemLayout:{labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:16}}}}},methods:{handleRoleChange:function(e){this.registerForm.role=e},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){return e?(s["a"].register(r.registerForm).then((function(){r.$message.success("注册成功！立即登录吧！"),r.$router.push({name:"Login"})})).catch((function(e){r.$message.error(e)})),!0):(console.log("error submit!!"),!1)}))},getCodeHandle:function(e){var r=this;this.$refs[e].validateField("email",(function(e){return!e&&(s["a"].getCode({email:r.registerForm.email}),!0)}))}}},l=i,n=(t("fdcd"),t("2877")),c=Object(n["a"])(l,o,a,!1,null,null,null);r["default"]=c.exports},fdcd:function(e,r,t){"use strict";t("5825")}}]);
//# sourceMappingURL=chunk-b8859b8c.8d521481.js.map