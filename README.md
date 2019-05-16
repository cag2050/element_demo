# element_demo

### 使用网址：http://localhost:9098/axios 测试：mocker-api 的使用，步骤：
1. 运行：`npm run mocker`
2. 访问：http://localhost:9098/axios ，返回数据会是：mocker/index.js 中定义返回的内容。

### el-tabs 里面是嵌套路由，第一个tab下的路由，离开时提示"是否要离开当前页面"，路由网址：http://localhost:9098/tabs/tabFirst ，实现点：
1. 跳到第二个tab下面的路由，也要提示
2. 用户刷新页面时，tab 样式在正确的位置上
3. 注意：用到了 el-tabs 的 before-leave 属性，element-ui 版本 2.4.11 才支持。

### SPA、单页面应用重新部署后，正在浏览的页面如何更新缓存？
博客页面：https://www.cnblogs.com/cag2050/p/9293949.html

### 想到的一个较好的解决方案（还有一个方案是：nginx设置不缓存 index.html）：
1. webpack打包时，设置一个唯一的打包字符串（比如：当前时间戳），存到一个文件里（最好是json文件，此文件不缓存）；
2. 将打包字符串存在 localStorage 中；
3. 进入每个路由时，比较 localStorage 中的打包字符串与文件中新的打包字符串是否一致。不一致的话，刷新页面。
4. 将新的打包字符串，存入 localStorage。

### 功能
1. 新增动态表单(select和input)

### 说明：
1. components文件夹中添加组件vue;
2. router/index.js中导入组件、添加路由;
3. App.vue添加router-link。

### eslint配置：
1. .editorconfig 修改：indent_size = 4；
2. .eslintrc.js 规则rules中添加一行：'indent': [2, 4, { "SwitchCase": 1 }]；
3. build/webpack.base.config.js 在eslint-loader配置部分，在语句：include: [resolve('src/components'), resolve('test')] 中配置需要校验的目录

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
