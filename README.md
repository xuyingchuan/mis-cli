## 简介

MIS-CLI 是一个后台集成解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 
[element](https://github.com/ElemeFE/element)  以及 [vue-element-admin](http://panjiachen.github.io/vue-element-admin) 

- [在线访问](http://panjiachen.github.io/vue-element-admin)

- [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)

- [Wiki](https://github.com/PanJiaChen/vue-element-admin/wiki)

- [国内访问文档](https://panjiachen.gitee.io/vue-element-admin-site/zh/) 方便没翻墙的用户查看文档

**本项目的定位是后台集成方案，不适合当基础模板来开发。**

- 模板建议使用: [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)
- 桌面端: [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)
- Typescript版: [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (鸣谢: [@Armour](https://github.com/Armour))


**注意：该项目使用 element-ui@2.3.0+ 版本，所以最低兼容 vue@2.5.0+**

**从`v3.8.0`开始使用`webpack4`。所以若还想使用`webpack3`开发，请使用该分支[webpack3](https://github.com/PanJiaChen/vue-element-admin/tree/webpack3)**

**该项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill [详情](https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill)**


## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 二步登录

- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地mock数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

- Excel
  - 导出excel
  - 导出zip
  - 导入excel
  - 前端可视化excel

- 表格
  - 动态表格
  - 拖拽表格
  - 树形表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
- Markdown2html
```

## 开发

```bash
# 克隆项目

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# --report to build with bundle size analytics
# 打包分析
npm run build:prod

# --generate a bundle size analytics. default: bundle-report.html
npm run build:prod --generate_report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```
