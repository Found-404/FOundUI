# FOundUI

[![NPM version](https://img.shields.io/npm/v/FOundUI.svg?style=flat)](https://npmjs.org/package/FOundUI)
[![NPM downloads](http://img.shields.io/npm/dm/FOundUI.svg?style=flat)](https://npmjs.org/package/FOundUI)

## 前言

0. **main 分支的代码永远都是最新的，记得先去 main 分支上把代码合并到自己的分支上,之后记得 yarn 一下，安装最新的包**
1. 😋 组件展示大舞台，有想法你就来，丑东西就不要搬进来了捏
2. 😘 编写组件前请阅读文档，杜绝抄袭小鬼来当伸手党，至少点个 star 再跑
3. 😍 开源的没有技术含量的组件库，就是写着玩儿
4. ✨ 请按照 gitflow 工作流规范开发
5. 🎁 项目配备了.husky,会在提交前进行 eslint 以及 commit 提交规范检测

## 提交

| 关键字 type | 说明                                                                                 |
| ----------- | ------------------------------------------------------------------------------------ |
| feat        | 新增功能                                                                             |
| fix         | bug 修复                                                                             |
| docs        | 文档更新,README.md 等                                                                |
| style       | 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑) |
| refactor    | 重构代码，不是修改不 bug，也不是新增功能 feart                                       |
| perf        | 性能, 体验优化                                                                       |
| test        | 新增测试用例或是更新已存在测试                                                       |
| build       | 修改构建系统，例如（gulp rollup webpack）等配置文件修改                              |
| ci          | 修改持续集成文件，例如：`ravis，Jenkins，GitLab CI，Circl`等提交                     |
| revert      | 回退版本到某个更早提交                                                               |
| chore       | 没有上述变动，其他；例如需修改 test src 目录 打包发布前，提交用 chore                |
| depc        | 升级依赖                                                                             |

## 使用

TODO

## 开始

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build
```

## 开发指南

### 开发模板生成

项目配了 hygen 可以快速生成组件模板,请根据需求使用

```bash
# 自动生成Demo组件模板
# hygen component Gen 组件名
hygen component Gen Demo

```

### 开发规范

代码同步更新建议

> 请使用 git rebase <分支名> 同步更新分支
> git pull 会造成一次提交，如果 commit 过多推荐使用 **git rebase -i** 进行合并/修改

```bash
git rebase <分支名>

```

### 开发需求

1. 项目配备了 eslint 和 prettierrc,需要开发者下载必要插件

-   editorConfig
-   eslint
-   prettier
-   Stylelint

## 版本迭代

```ts
/**
 * @version 1.0.0
 * 脚手架搭建
 * @version 1.1.0
 * 部分基础组件开发
 * @version 1.1.2
 * 多语言
 * @version 1.2.0
 * Grid组件
 * @version 1.2.1
 * Grid组件 接收到非布尔属性报错修复
 *
 */
```

## COOPERATE

<a href="https://github.com/Found-404/FOundUI/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Found-404/FOundUI" />
</a>
