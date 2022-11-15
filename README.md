# Vue 3 + TypeScript + Vite

[Vue3 + TypeScript + Vite 模板搭建](https://cn.vuejs.org/guide/scaling-up/tooling.html#project-scaffolding)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 模板搭建

1. 初始化项目

```
npm init vite@latest project-name --template vue-ts
```

2. 配置 tsconfig.json

3. 配置 vite.config.ts

4. 集成 vueuse

VueUse 是一个基于 Composition API 的实用函数集合。

更多函数官方文档：[链接](https://vueuse.org)

```
npm i @vueuse/core
```

5. git commit 规范

使用 [web-norm](https://github.com/lyh0371/web-norm),保存代码自动格式化 💯 提交前 commit 校验 💯eslint pretter 校验 💯
husky 自动装载 💯

```
npm run commit
```
