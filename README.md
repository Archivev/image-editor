## image-editor

[![Build Status](https://travis-ci.org/shiyangzhaoa/image-editor.svg?branch=master)](https://travis-ci.org/shiyangzhaoa/image-editor)

这是一个`React`截图工具的组件, 基本功能和微信截图相似, 微信截图是一个相对比较成熟且稳定的产品, 所以我们的功能目前在一定程度上比不上微信截图, 但基本满足截图的所有场景, 因为使用了`React Hooks`, 所以对`React`的版本有一定要求

## install

```shell
yarn add image-editor-little
```
or
```shell
npm install -S image-editor-little
```
## example

```js
import ImageEditor from 'image-editor-little';

<ImageEditor
  width={500}
  height={500}
  src="https://miro.medium.com/max/3200/1*hLM2qGfy0VOTiyuyE3pOBA.png"
/>
```

## online
[![image-editor-little-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/youthful-visvesvaraya-11iv1)

## api

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| --- | --- | --- | --- | --- |
| width| 宽度 | `number` | - | 否 |
| height| 高度 | `number` | - | 否 |
| className| 自定义类名 | `string` | - | 否 |
| locSize| 放大镜大小(x 10) | `number` | 10 | 否 |
| holdSize| 懒加载图片大小 | `object` | { w: '100vw', h: '100vh' } | 否 |
| onConfirm| 点击确认触发 | `(url?: string, close?: () => void) => void` | - | 否 |