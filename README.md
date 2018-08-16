# element_demo

### SPA、单页面应用重新部署后，正在浏览的页面如何更新缓存？
博客页面：https://www.cnblogs.com/cag2050/p/9293949.html
### 想到的一个较好的解决方案：
1. webpack打包时，得到打包的hash码，存到一个文件里（最好是json文件，此文件不缓存）；
2. 将hash码存在 localStorage 中；
3. 进入每个路由时，比较 localStorage 中的 hashcode 与 文件中的 hashcode 值，是否一致。不一致的话，刷新页面。
4. 将新的 hashcode 存入 localStorage。
* 此解决方案在 vue-cli 2.x 项目中的实现：https://github.com/cag2050/element_demo
需要修改的文件：build/build.js、src/main.js。

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
