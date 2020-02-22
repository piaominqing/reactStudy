# React组件化预习

[TOC]

## 资源

1. [create-react-app](https://www.html.cn/create-react-app/docs/getting-started/)
2. [ant design](https://ant.design/docs/react/use-with-create-react-app-cn)



## 知识点

### 快速开始

```
npx create-react-app lesson1-pre

cd lesson1-pre

yarn start
```



### 环境准备

vscode所需插件：

<img src="https://tva1.sinaimg.cn/large/0082zybply1gc219raji1j30ep0ysh4o.jpg" width=300/>



### 使用第三方组件

安装：`yarn add antd` 

范例：试用 ant-design组件库

```react
import React, { Component } from 'react'
import Button from 'antd/es/button'
import "antd/dist/antd.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
export default App
```



### 配置按需加载

这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置，而且上面的例子加载了全部的 antd 组件的样式（gzipped 后一共大约 60kb）。

此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) （一个对 create-react-app 进行自定义配置的社区解决方案）。

引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 [react-app-rewired@2.x](https://github.com/timarney/react-app-rewired#alternatives) 版本的关系，你还需要安装 [customize-cra](https://github.com/arackaf/customize-cra)。

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件（[原理](https://ant.design/docs/react/getting-started-cn#按需加载)）。

`yarn add react-app-rewired customize-cra babel-plugin-import`

```js
//根目录创建config-overrides.js, 修改默认配置
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {//antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
```

//修改package.json

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```



```jsx
import React, { Component } from 'react'
import {Button} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
export default App
```



### 使用less

` yarn add less less-loader`



### 自定义主题

按照 [配置主题](https://ant.design/docs/react/customize-theme-cn) 的要求，自定义主题需要用到 less 变量覆盖功能。我们可以引入 `customize-cra` 中提供的 less 相关的函数 [addLessLoader](https://github.com/arackaf/customize-cra#addlessloaderloaderoptions) 来帮助加载 less 样式，同时修改 `config-overrides.js` 文件如下。

```js
const {override, fixBabelImports, addLessLoader} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {"@primary-color": "red"}
  })
);
```

修改后重启 `yarn start`，如果看到一个红色的按钮就说明配置成功了。