(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-27a9e35a":"c3410a91","chunk-2d0ac00e":"a15ce980","chunk-2d20902b":"40574671","chunk-30904278":"23ee7a12","chunk-49558400":"60922fb7","chunk-b8859b8c":"a8360fc6"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-27a9e35a":1,"chunk-30904278":1,"chunk-49558400":1,"chunk-b8859b8c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-27a9e35a":"c8f47087","chunk-2d0ac00e":"31d6cfe0","chunk-2d20902b":"31d6cfe0","chunk-30904278":"c0fbdbd2","chunk-49558400":"85b4543c","chunk-b8859b8c":"d51f2d08"}[e]+".css",s=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b0f":function(e,t,n){},"23be":function(e,t,n){},4360:function(e,t,n){"use strict";n("4de4");var a=n("2b0e"),r=n("2f62"),s=(n("4fad"),n("a78e")),o=n.n(s);function c(e){for(var t=Object.entries(e),n=0;n<t.length;n+=1)o.a.set(t[n][0],t[n][1]);return!0}function i(){return{username:o.a.get("username"),appkey:o.a.get("appkey"),email:o.a.get("email"),role:o.a.get("role")}}function u(){o.a.remove("username"),o.a.remove("appkey"),o.a.remove("email"),o.a.remove("role")}a["a"].use(r["a"]);t["a"]=new r["a"].Store({state:{collapsed:!1,userInfo:i(),menuRoutes:[]},getters:{filterMenuRoutes:function(e){return e.menuRoutes.filter((function(e){var t=e;if(e.meta.show){var n=e.children.filter((function(e){return e.meta.show}));return t.children=n,!0}return!1}))}},mutations:{changeCollapsed:function(e){e.collapsed=!e.collapsed},setUserInfo:function(e,t){e.userInfo=t},logout:function(e){e.userInfo={username:"",appkey:"",email:"",role:""}},setMenuRoutes:function(e,t){e.menuRoutes=t}},actions:{changeCollapsed:function(e){var t=e.commit;t("changeCollapsed")},setUserInfo:function(e,t){var n=e.commit;n("setUserInfo",t),c(t)},logout:function(e){var t=e.commit;t("logout"),u()},setMenuRoutes:function(e,t){var n=e.commit;n("setMenuRoutes",t)}},modules:{}})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={name:"app"},c=o,i=n("2877"),u=Object(i["a"])(c,r,s,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("8c4f")),f=n("4360"),m=(n("d81d"),n("b0c0"),n("4de4"),n("caad"),n("2532"),{coustomer:[{name:"Products"},{name:"ProductsList"},{name:"ProductsAdd"},{name:"ProductEdit"}],admin:[{name:"Products"},{name:"ProductsList"},{name:"ProductsAdd"},{name:"ProductEdit"},{name:"Category"}]});function b(e,t){var n=m[e].map((function(e){return e.name})),a=t.filter((function(e){var t=e;if(n.includes(e.name)){var a=e.children.filter((function(e){return n.includes(e.name)}));return t.children=a,!0}return!1}));return a}var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("LeftMenu",{key:e.menuKey}),n("div",{class:["content",{"content-collapsed":e.$store.state.collapsed}]},[n("RightHeader"),n("router-view")],1)],1)},h=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"leftMenu"},[n("a-menu",{staticClass:"menu-list",attrs:{"default-selected-keys":[e.defaultSelectedKey],"default-open-keys":[e.defaultOpenKey],mode:"inline",theme:"dark","inline-collapsed":e.$store.state.collapsed}},e._l(e.$store.getters.filterMenuRoutes,(function(t){return n("a-sub-menu",{key:t.name},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",[e._v(e._s(t.meta.title))])],1),e._l(t.children,(function(t){return n("a-menu-item",{key:t.name},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),e._v(" "+e._s(t.meta.title)+" ")],1)],1)}))],2)})),1)],1)},g=[],v={computed:{defaultSelectedKey:function(){return this.$router.currentRoute.matched[1]?this.$router.currentRoute.matched[1].name:""},defaultOpenKey:function(){return this.$route.matched[0].name}}},k=v,y=Object(i["a"])(k,j,g,!1,null,null,null),w=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"RightHeader"},[n("div",{staticClass:"btn"},[n("a-button",{attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.$store.state.collapsed?"menu-unfold":"menu-fold"}})],1)],1),n("div",{staticClass:"bread-crumb"},[n("a-breadcrumb",[n("a-breadcrumb-item",[e._v(e._s(e.$route.matched[0].meta.title))]),n("a-breadcrumb-item",[n("a",{attrs:{href:"#"}},[e._v(e._s(e.$route.matched[1].meta.title))])])],1)],1),n("ul",{staticClass:"userInfo"},[n("li",[e._v(" Hello, "+e._s(e.$store.state.userInfo.username)),n("a-icon",{staticClass:"icon",attrs:{type:"down"}})],1),n("li",{on:{click:e.logoutHandle}},[e._v("退出")])])])},C=[],O={data:function(){return{code:""}},methods:{toggleCollapsed:function(){this.$store.dispatch("changeCollapsed")},logoutHandle:function(){this.$store.dispatch("logout"),this.$router.push({name:"Login"})}}},x=O,E=Object(i["a"])(x,_,C,!1,null,null,null),P=E.exports,$={components:{LeftMenu:w,RightHeader:P},data:function(){return{menuKey:(new Date).getTime()}},watch:{$route:function(){this.menuKey=(new Date).getTime()}}},z=$,R=(n("6b1f"),Object(i["a"])(z,p,h,!1,null,null,null)),F=R.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("a-form-model",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.rules,id:"components-form-demo-normal-login"}},[n("a-form-model-item",{attrs:{"has-feedback":"",prop:"email"}},[n("a-input",{attrs:{placeholder:"Email"},model:{value:e.loginForm.email,callback:function(t){e.$set(e.loginForm,"email",t)},expression:"loginForm.email"}},[n("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),n("a-form-model-item",{attrs:{"has-feedback":"",prop:"password"}},[n("a-input-password",{attrs:{autocomplete:"off",placeholder:"Password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),n("a-form-model-item",[n("a-checkbox",{staticStyle:{float:"left"}},[e._v(" 记住密码 ")]),n("router-link",{staticStyle:{float:"right"},attrs:{to:{name:"Findback"}}},[e._v(" 忘记密码 ")]),n("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v(" 登录 ")]),e._v(" Or "),n("router-link",{attrs:{to:{name:"Register"}}},[e._v(" register now! ")])],1)],1)],1)},I=[],L=n("c24f"),M={data:function(){var e=function(e,t,n){var a=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;return t?a.test(t)?n():n(new Error("邮箱格式错误")):n(new Error("请输入邮箱"))},t=function(e,t,n){return""===t?n(new Error("请输入密码")):6!==t.length?n(new Error("密码长度必须为6位")):n()};return{loginForm:{email:"",password:""},rules:{email:[{validator:e,trigger:"change"}],password:[{validator:t,trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){return e?(L["a"].login(t.loginForm).then((function(e){t.$store.dispatch("setUserInfo",e),t.$router.push({name:"Home"}).catch((function(e){return new Error(e)}))})).catch((function(e){t.$message.error(e)})),!0):(console.log("error submit!!"),!1)}))}}},T=M,A=(n("734c"),Object(i["a"])(T,S,I,!1,null,null,null)),H=A.exports;a["a"].use(d["a"]);var U=[{path:"/products",redirect:"/products/list",name:"Products",component:F,meta:{title:"商品",show:!0,icon:"appstore"},children:[{path:"list",name:"ProductsList",component:function(){return n.e("chunk-30904278").then(n.bind(null,"e78d"))},meta:{title:"商品列表",show:!0,icon:"menu"}},{path:"add",name:"ProductsAdd",component:function(){return n.e("chunk-27a9e35a").then(n.bind(null,"e7cb"))},meta:{title:"添加商品",show:!0,icon:"plus"}},{path:"category",name:"Category",component:function(){return n.e("chunk-2d0ac00e").then(n.bind(null,"184e"))},meta:{title:"商品类目",show:!0,icon:"file-text"}},{path:"edit/:id",name:"ProductEdit",component:function(){return n.e("chunk-27a9e35a").then(n.bind(null,"e7cb"))},meta:{title:"编辑商品",show:!1,icon:"edit"}}]}],K=[{path:"/",name:"Home",component:F,redirect:"/index",meta:{title:"首页",show:!0,icon:"home"},children:[{path:"index",name:"Index",component:function(){return n.e("chunk-2d20902b").then(n.bind(null,"a6dd"))},meta:{title:"统计",show:!0,icon:"line-chart"}}]},{path:"/login",name:"Login",component:H,meta:{title:"登录",show:!1}},{path:"/register",name:"Register",component:function(){return n.e("chunk-b8859b8c").then(n.bind(null,"93a2"))},meta:{title:"注册",show:!1}},{path:"/findback",name:"Findback",component:function(){return n.e("chunk-49558400").then(n.bind(null,"2642"))},meta:{title:"找回密码",show:!1}}],N=new d["a"]({mode:"history",base:"/",routes:K}),D=!1;N.beforeEach((function(e,t,n){if("/login"!==e.path&&"/register"!==e.path&&"/findback"!==e.path){var a=f["a"].state.userInfo,r=a.appkey,s=a.username,o=a.email,c=a.role;if(r&&s&&o&&c){if(!D){var i=b(c,U);f["a"].dispatch("setMenuRoutes",K.concat(i)).then((function(){N.addRoute(i[0]),n()})),D=!0}return n()}return n({name:"Login"})}return n()}));var q=N,B=n("f23d");n("0b0f");a["a"].use(B["a"]);n("23be");a["a"].config.productionTip=!1,new a["a"]({router:q,store:f["a"],render:function(e){return e(l)}}).$mount("#app")},"6b1f":function(e,t,n){"use strict";n("9e59")},"734c":function(e,t,n){"use strict";n("8a64")},"8a64":function(e,t,n){},"9e59":function(e,t,n){},bb36:function(e,t,n){"use strict";var a=n("5530"),r=(n("caad"),n("2532"),n("d3b7"),n("bc3a")),s=n.n(r),o=n("4360"),c=s.a.create({baseURL:" https://mallapi.duyiedu.com/"});c.interceptors.request.use((function(e){return e.url.includes("/passport")?e:Object(a["a"])(Object(a["a"])({},e),{},{params:Object(a["a"])(Object(a["a"])({},e.params),{},{appkey:o["a"].state.userInfo.appkey})})}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return"fail"===e.data.status?Promise.reject(e.data.msg):e.data.data}),(function(e){return Promise.reject(e)})),t["a"]=c},c24f:function(e,t,n){"use strict";var a=n("bb36");function r(e){return a["a"].post("/passport/login",e)}function s(e){return a["a"].post("/passport/logon",e)}function o(e){return a["a"].post("/passport/getCode",e)}function c(e){return a["a"].post("/passport/findBack",e)}function i(e){return a["a"].post("/passport/changeUserInfo",e)}t["a"]={login:r,register:s,getCode:o,findBack:c,changeInfo:i}}});
//# sourceMappingURL=app.349af1b8.js.map