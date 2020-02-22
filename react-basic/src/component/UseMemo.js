import React, {useState, useMemo, useCallback, PureComponent} from 'react'
/**
 * 把“创建”函数和依赖项数组作为参数传⼊入 useMemo ，它仅会在某个依赖项改变时才重新计算 memoized 值。
 * 这种优化有助于避免在每次渲染时都进⾏行行⾼高开销的计算。
 */
export default function MyHook (){
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    // 第一个参数相当于componentDidMount(函数内容) + componentDidUpdate(函数内容)，componentWillUnmount（return的回掉函数）
    // 第二个参数传入的数组内容为变更时 执行一次，当前不需要执行传入空数组
    const expensive = useMemo(() =>{
        console.log('expensive')
        let sum = 0
        for(let i = 0; i <= count; i++){
            sum+= i
        }
        return sum
    }, [count])
    const addClick = useCallback(() => {    
        let sum = 0;    
        for (let i = 0; i < count; i++) {      
            sum += i;    
        }    
      return sum;  
    }, [count])
    return (
        <div>
            <h3>FunctionComponent Page</h3>
            <button onClick={()=>setCount(count + 1)}>{count}</button>
            <p>{expensive}</p>
            <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <Child addClick={addClick} />
        </div>
    ) 
}
/**
 * 把内联回调函数及依赖项数组作为参数传⼊入 useCallback ，它将返回该回调函数的 memoized 版本， 
 * 该回调函数仅在某个依赖项改变时才会更更新。当你把回调函数传递给经过优化的并使⽤用引⽤用相等性去避 
 * 免⾮非必要渲染（例例如 shouldComponentUpdate ）的⼦子组件时，它将⾮非常有⽤用。
 */
class Child extends PureComponent {  
    render() {    
        console.log("child render");    
        const { addClick } = this.props;    
        return (      
          <div>        
            <h3>Child</h3>        
            <button onClick={() => console.log(addClick())}>add</button>      
          </div>    
        ); 
    } 
}
