# @liangshen/react-canvas

使用React的方式来编写Canvas, 运行环境只需要支持Canvas即可, 不再需要完整的浏览器的Dom Bom环境.

## 安装

```
npm i @liangshen/react-canvas minigame-canvas-engine -S
```

## 使用方法
使用 @liangshen/react-canvas 替换 react-dom 库来做渲染。index.html

index.tsx
```tsx
import React from "react";
import ReactCanvas from "@liangshen/react-canvas";
import App from "./App";

// 如果是浏览器环境 获取到index.html中的canvas对象
const canvas = document.getElementsByTagName('canvas')[0];
ReactCanvas.render(canvas,
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

App.tsx
```tsx
import {Text} from '@liangshen/react-canvas';
export const App = () => <>
    <Text value={'测试一下'}></Text>
</>
```

## @liangshen/react-canvas 提供了一些组件

* Text 文本
* Image 图片类似html中的<img>
* View 类似html中的<div>
* ScrollView 类似html中可滚动的<div>

### 最后特别感谢下 minigame-canvas-engine 的作者🙏


