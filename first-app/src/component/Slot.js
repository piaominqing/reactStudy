import React, {Component} from 'react'

export class DefaultSlot extends Component {
    render (){
        const {children} = this.props
        return (
            <div>
                {children}
            </div>
        )
    }
}

export class NametSlot extends Component {
    render (){
        const {children} = this.props
        return (
            <div>
                {children.content}
                {children.txt}
            </div>
        )
    }
}