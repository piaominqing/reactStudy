/**
 * Redux只是个纯粹的状态管理器，默认只⽀持同步，实现异
 * 步任务 ⽐如延迟，⽹络请求，需要中间件的⽀持，⽐如我们
 * 试⽤最简单的redux-thunk和redux-logger 。
 * 中间件就是⼀个函数，对store.dispatch⽅法进⾏改造，
 * 在发出 Action 和执⾏ Reducer 这两步之间，添加了其他功
 * 能。
 */
export function createStore(reducer, enhancer){
  if(enhancer){
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let currentListeners = []

  function getState(){
    return currentState
  }
  function subscribe(callback){
    currentListeners.push(callback)
  }
  function dispatch(action){
    currentState = reducer(currentState,action)
    currentListeners.forEach(callback=>callback())
    
    return action
  }
  
  //初始化
  dispatch({type: '@@@@/@@@@@'})

  return {
    getState,
    subscribe,
    dispatch
  }
}
/**
* 整体思路:
* store的dispatch 添加到中间件 返回新的dispatch
* 所以dispatch的时候 中间件+store.dispatch
*/
export function applyMiddleware(...middlewares){
  return createStore => (reducer)=>{
    
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const storeApi = {
      getState: store.getState,
      dispatch:(reducer) => dispatch(reducer)
    }

    const middlewareChain = middlewares.map(middleware => middleware(storeApi))
    // compose(...middlewareChain)(dispatch) = middleware1(middleware2(dispatch()))
    dispatch = compose(...middlewareChain)(dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
// 将d多个函数聚合成一个函数,fn1(fn2())
function compose(...funcs){
  if(funcs.length === 0){
    return arg => arg
  }
  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((preFn, currentFn) => (...args) => currentFn(preFn(...args)))
}

