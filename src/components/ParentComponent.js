import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'JAgruti'
        }
    }
    componentDidMount(){
        setInterval(() => {
          this.setState({
            name : 'JAgruti'
          })
        },2000)
    }
    
    render() {
        console.log('Parent Component render')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComponent
