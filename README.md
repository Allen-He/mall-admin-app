# mall-admin-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 项目总结
## 项目效果预览：
    https://allen-he.github.io/MusicPlayer/dist/html/index.html
## 项目技术栈：
    Vue全家桶、Axios、AntDesign、Echarts（v-charts）、Less；Vue/cli、ESLint
## 项目思路：
• 分析整体布局：（左侧宽度固定，右侧宽度自适应，... ），细分各个模块后进行开发，Home.vue，将页面细分为多个组件并引入AntDesign组件，通过动态绑定class以及配合Vuex实现左侧菜单栏与右侧内容的伸缩联动
• 登录界面实现、登录信息的数据交互、登录状态校验：Login.vue，改写AntDesign组件结构及功能，实现表单校验、用户登录与退出登录（① 封装api/user.js管理需要请求的接口；② 利用js-cookie库封装utils/userCookie.js实现userInfo在cookie中的增删查改；③ 利用Vuex在不同组件之间共享状态以链接当前登录用户信息；④ 配置路由参数和路由拦截器实现页面跳转以及登录验证。）
• 菜单栏权限配置、菜单栏过滤展示、面包屑导航：router/index.js配置菜单栏对应的路由；utils/permission.js存储用户类别与router的对应关系，并导出getMenuRoute方法---根据传入的所有路由及用户类别进行过滤返回；router/index.js在beforeEach中的合适位置调用上述方法，并调用router.addRoutes(...)将结果配置到router对象中---此配置方法只能调用一次，则此处可加一个“锁”；store/index.js使用vuex存储menuRoutes，并配合vuex的计算属性渲染菜单栏；配合$route.matched[n].meta.title渲染面包屑导航---n为0或1。
• 商品列表页面的搜索组件、表格分页展示、搜索并筛选列表、“添加商品”按钮：ProductsList.vue嵌套两个组件---Search.vue和ProductTable.vue，各组件的功能相互独立，通过$emit向父组件传递数据，通过props从父组件获取数据，父组件在调用子组件时需要监听组件内部的自定义事件。在productList.vue中书写相关事件处理函数、调用api/products.js中封装的“与产品相关”的接口发送网络请求获取categoryList和tableData（配置axios.js中的请求拦截器，为请求非"/passport/..."接口的请求体参数自动加上appkey）--- FormModule组件（将用户submit的结果传给父组件）、Table组件（对tableData的进一步处理、配置pagination-分页的方法）的引用。
• “添加商品”按钮及其路由跳转、“编辑”和“删除”功能、菜单栏的重新渲染：通过router-link实现点击“添加商品”按钮跳转路由；通过利用api/products封装的接口发送“删除商品”的请求；在router/index.js中配置“name为ProductsEdit、组件为productsAdd.vue”的动态路由，通过编程式导航实现“编辑”按钮的路由跳转；在Home.vue组件中，调用LeftMenu组件时为其动态绑定一个值为时间戳的key属性，当监听到$route发生变化时更新key的值，促使LeftMenu组件重新渲染，以此解决“点击-添加商品-和-编辑-按钮后左侧菜单栏的选中转态未动态更新的问题。
• “新增商品”页面实现、“编辑商品”页面实现：ProductsAdd.vue引用AntDsign的“Steps步骤条”并在其内部嵌套两个组件---BasicDetail.vue和SaleDetail.vue（由FormModuel表单、setect选择器、upload上传组成）。① 在BasicDetail.vue中，注册props特性form，将其中的数据和对应的表单控件做双向数据绑定；使用请求到的ctegoryList渲染商品类目，然后根据select控件的change事件传递的val值获取对应的ctegoryCItems以渲染子类目；点击“下一步”按钮可触发自定义事件next并向父组件传递form数据。② 在SaleDetail.vue中，实现方法同上述子组件类似，使用upload控件实现上传图片的功能（利用上传状态改变时会触发的change事件，根据file.status的不同对form.images的值进行变更，记得在最后写上：“this.fileList=fileList”以动态显示已上传的图片）；点击“上一步”按钮触发自定义事件prev；点击“提交”按钮触发自定义事件next并向父组件传递form数据；在creted钩子函数中需判断$route.params.id是否存在，若存在则根据传入的form.images数据初始化fileList以显示编辑对象对应的图片。③ 在ProductsAdd.vue中调用两个子组件时需根据需要监听其自定义事件以及为组件的props特性form赋值；处理函数nextHandle中需根据this.current判断当前调用的是“下一步”还是“提交数据”功能，并确定是否改变this.current的值，根据$route.params.id判断“提交数据”是为了“新增商品”还是“编辑商品”；处理prevHandles时需改变this.current的值；在created钩子函数中根据$route.params.id判断当前页面是“新增商品”还是“编辑商品”，若id存在，则是“编辑商品”页面，需发送请求查询当前id对应的商品信息以回填表单。