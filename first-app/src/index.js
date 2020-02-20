import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

// jsx语法
// 基本使用 

// jsx1 表达式用{}包裹
// const name = 'pmq'
// const jsx1 = <div>hello, {name}</div>

// jsx2 函数使用
// const obj = {
//   firstName: 'p',
//   lastName: 'mq'
// }
// function formatName(name){
//   return name.firstName +' ' +name.lastName
// }
// const jsx2 = <div>hello, {formatName(obj)}</div>

// jsx3 jsx对象
// const greet = <div>greet</div>
// const jsx3 = <div>{greet}</div>

// jsx4 条件语句
// const show = false
// const jsx4 = <div>{show? greet: '被隐藏'}</div>

// jsx5 数组
// const arr = [0, 1, 2]
// const jsx5 = 
// <div>
//   <ul>
//     {arr.map(item=>{
//       return <li key={item}>{item}</li>
//     })}
//     </ul>
// </div>


// jsx6 属性
// const jsx6 = <div><img src={logo}></img></div>

// jsx7 模块化

ReactDOM.render(<App/>, document.getElementById('root'));
// store发生变化时，通知页面重新渲染
store.subscribe(()=>{
  ReactDOM.render(<App/>, document.getElementById('root'));
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
