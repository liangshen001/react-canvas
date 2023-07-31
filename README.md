# @liangshen/react-canvas

使用React的方式来编写Canvas, 运行环境只需要支持Canvas即可, 不再需要完整的浏览器的Dom Bom环境.

## 安装

```
npm i @liangshen/react-canvas -S
```

## 使用方法
使用 @liangshen/react-canvas 替换 react-dom 库来做渲染。

index.tsx
```tsx
import React from "react";
import ReactCanvas from "@liangshen/react-canvas";
import App from "./App";

// 如果是浏览器环境 获取到index.html中的Canvas对象, 或者在这里创建一个Canvas
const canvas = document.getElementsByTagName('canvas')[0];
ReactCanvas.render(canvas,
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

html中添加一个Canvas元素, 或者在js中动态创建一个Canvas

index.html
```html
<!DOCTYPE html>
<html>
    <body>
        <canvas id="canvas" width="800" height="400"></canvas>
    </body>
</html>
```

App.tsx
```tsx
import {Text} from '@liangshen/react-canvas';
export const App = () => <>
    <Text value={'测试一下'}></Text>
</>
```

## @liangshen/react-canvas 提供的一些组件

* Text 文本
* Image 图片类似html中的`img`
* View 类似html中的`div`
* ScrollView 类似html中可滚动的`div`

### 使用到了minigame-canvas-engine做为Canvas的渲染库, 还是特别感谢下作者🙏


