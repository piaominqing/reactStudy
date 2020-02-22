import React, {Component} from 'react'
export default class LifeCycle extends Component {
    // 初始化时的生命周期
    static defaultProps = {}
    static propTypes = {}
    constructor(props){
        super(props)
        this.state = {
            counter: 1
        }
        console.log('constructor')
    }
    // render方法(或shouldComponentUpdate)之前被调用(作为新功能不能与将要废弃的三个生命周期同时使用)
    static getDerivedStateFromProps(props, state){
        const {counter} = state
        console.log('getDerivedStateFromProps')
        return counter > 5 ? {counter: 0} : null 
    }
    // 挂在之前被调用的生命周期
    // UNSAFE_componentWillMount(){
    //     console.log('componentWillMount')
    // }
    render(){
        console.log('render')
        const {counter} = this.state
        return (
            <div>
                <h3>LifeCycle Page</h3>
                <p>{counter}</p>
                <button onClick={this.addCounter}>add</button>
                <Child counter={counter}></Child>
            </div>
        )
    }
    // 挂在之后被调用的生命周期
    componentDidMount(){
        console.log('componentDidMount')
    }

    // 下面是运行时的生命周期

    // state或prop变更时被调用，返回false 组件不会被更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    // 组件更新之前被调用（后面是render函数）将要废弃的功能不建议使用，需要加UNSAFE_才能使用
    // UNSAFE_componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }

    // render之后componentDidUpdate之前被调用
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('shouldComponentUpdate',prevProps, prevState)
        return 'snapshot'
    }
    // 组件更新完毕后被调用（前面是render函数）
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState, snapshot)
    }

    addCounter= ()=>{
        console.log('addCounter')
        this.setState({counter: this.state.counter + 1})
    }


}

class Child extends Component{
    render(){
        console.log('child componentDidUpdate')
        const {counter} = this.props
        return (
            <div>
                {counter}
            </div>
        )
    }
    // props变化时被调用（后面是shouldComponentUpdate）
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log('child componentWillReceiveProps', nextProps)
    // }
    // 组件被卸载之前被调用
    componentWillUnmount(){
        console.log('child componentWillUnmount')
    }
}