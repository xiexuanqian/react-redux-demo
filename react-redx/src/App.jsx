import React, { Component } from 'react'
import Count from './componens/count'
import Person from './componens/person'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}

