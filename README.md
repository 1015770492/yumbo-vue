# yumbo-vue
云博的前端项目

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

根目录src下的文件夹说明
api  存放音乐api等第三方库的的地址配置，以及云博第三方的配置，用子目录进行区分

assets 存放图片，文件等资源

components 存放子模块、组件相关代码

router  全局路由配置

store 存放vuex配置


**关于api文件夹的说明**
api子文件夹由子模块名构成，每一个模块也有components、page、模块路由.js构成

assets存放静态资源文件

common公共资源

components分手机端和电脑端组件

router全局路由信息

store  vuex状态管理组件
