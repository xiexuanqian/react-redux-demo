import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementAction,decrementAction,incrementAsyncAction} from '../redux/actions/count'

class count extends Component {

    add = ()=>{
        this.props.add(1)
    }
    reduce = ()=>{
        this.props.reduce(1)
    }
    addAsync = ()=>{
        this.props.addAsync(1,3000)
    }
    addOdd = ()=>{
        if(this.props.sum%2!==0){
            this.props.add(1)
        }
    }
    render() {
        return (
            <div>
                <h4>求和为{this.props.sum}</h4>
                <button onClick={this.add}>加</button>
                <button onClick={this.reduce}>减</button>
                <button onClick={this.addAsync}>异步加</button>
                <button onClick={this.addOdd}>奇数加</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {sum:state.sum}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        add:(data)=>dispatch(incrementAction(data)),
        reduce:(data)=>dispatch(decrementAction(data)),
        addAsync:(data,time)=>dispatch(incrementAsyncAction(data,time))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(count)
