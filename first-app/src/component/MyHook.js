import React, {useState, useEffect} from 'react'

export default function MyHook (){
    const [count, setCount] = useState(0)
    // 第一个参数相当于componentDidMount(函数内容) + componentDidUpdate(函数内容)，componentWillUnmount（return的回掉函数）
    // 第二个参数传入的数组内容为变更时 执行一次，当前不需要执行传入空数组
    useEffect(
        ()=>{
            document.title = `You clicked ${count} times`;
        },[count]
    )
    return (
        <div>
            <h3>FunctionComponent Page</h3>
            <button onClick={()=>setCount(count + 1)}>{count}</button>
            <p>{useClock().toLocaleTimeString()}</p>
        </div>
    )
}

function useClock()
{   
    const [date, setDate] = useState(new Date())
    useEffect(
        ()=>{
            const timer = setInterval(()=>{
                setDate(new Date())
            },1000)
            return  () => clearInterval(timer)
        },[]
    )
    
    return date
}