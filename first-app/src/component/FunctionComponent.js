import React, {useState, useEffect} from 'react'

export default function FunctionComponent (){
    const [date, setState] = useState(new Date())
    // 第一个参数相当于componentDidMount(函数内容)，componentWillUnmount（return的回掉函数）
    // 第二个参数相当于shouldComponentUpdate（传入的数组内容为变更时 执行一次，当前不需要执行传入空数组）
    useEffect(
        ()=>{
            const timer = setInterval(()=>{
                setState(new Date())
            },1000)
            return  () => clearInterval(timer)
        },[]
    )
    return (
        <div>
            <h3>FunctionComponent Page</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}