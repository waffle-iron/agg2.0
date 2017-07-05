// GOOD HANDLER BINDING
//
// class  extends React.Component {
//   constructor(props) {
//     super(props);

//     this.onClickDiv = this.onClickDiv.bind(this); << here
//   }

//   onClickDiv() {
//     // do stuff
//   }

//   render() {
//     return <div onClick={this.onClickDiv} />; << not here ( onClick={this.onClickDiv.bind(this)} sucks )
//   }
//  }

/*

///////////////////////////
// COMPONENT TEMPLATE
//////////////////////////

import React, { Component, PropTypes } from 'react'

const propTypes = {
  //all external props must be described
}

const defaultProps = {
  //all of not required props must have default value
}

class Class extends Component {
   static staticMethod() {
    return true;
  }
  constructor(props) {
    super(props)
  }
  componentWillMount
  componentDidMount
  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate
  componentDidUpdate
  componentWillUnmount
  eventHandlers
  optional render methods

  render() {
    return (
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
      </div>
    )
  }
}

Class.propTypes = propTypes

Class.defaultProps = defaultProps

export default Class

*/

/*
Avoid using an array index as key prop, prefer a unique ID.
// bad
{
  todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )
}

// good
{
  todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))
}
*/
