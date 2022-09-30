import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPersonAction} from '../redux/actions/person.js'
import {nanoid} from 'nanoid'

class person extends Component {
  addPerson = ()=>{
    let obj = {}
    obj.name = this.input1.value
    obj.age = this.input2.value
    obj.id = nanoid()
    this.props.addPerson(obj)
  }
  render() {
    return (
      <div>
        <h2>count组件求和为{this.props.sum}</h2>
        <input ref={c=>this.input1=c}/>
        <input ref={c=>this.input2=c}/>
        <button onClick={this.addPerson}>增加</button>
        <ul>
          {
            this.props.persons.map(person=>{
              return <li key={person.id}>{person.name}={person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {persons:state.persons,sum:state.count}
}

const mapDispatchToProps = (dispatch)=>{
  return {addPerson:(data)=>dispatch(addPersonAction(data))}
}
export default connect(mapStateToProps,mapDispatchToProps)(person)
