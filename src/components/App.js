'use strict';

import React, { Component } from "react";
import { Router, Route, browserHistory }  from 'react-router';
import List  from './List';

export default class App extends Component {
  constructor() {                                         //initialization of the class
    super();                                               //invokes the constructor component. initializes 'this'

    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);


    this.state = {
      todos: []
    }
  }

  updateTodo(id, todoUpdate) {
  fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(todoUpdate),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
  .then(todos => {
    this.setState({todos});
  })
  .catch(err => {
    console.log('err:', err);
  })
};

toggleTodo(id) {
  fetch(`/api/todos/${id}/toggle`, {
    method: 'PUT'
  })
  .then(res => res.json())
  .then(todos => {
    this.setState({todos});
  })
  .catch(err => {
    console.log('err:', err);
  })
}

componentDidMount() {
  fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
      this.setState({todos});
    })
    .catch(err => {
      throw err;
    })
}



  render() {
    return (
      <div>
      <List todos={this.state.todos} toggleTodo={this.toggleTodo} updateTodo={this.updateTodo} />
      </div>
    )
  }
}




{/* {this.props.children}             {/* whatever child component is being render will go through here */}
