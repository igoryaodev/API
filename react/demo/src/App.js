import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
import Test1 from './Test1'

export default class App extends Component {

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   this.setState({
  //     contact: 1234
  //   })
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  //   componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }
 
  test() {
    this.setState({
      test1: '1233333'
    })
  }

  render() {
    const { test1 } = this.state || ''
    console.log('render')
    return (
      <div className="App">
        <p className="App-intro">
          test
        </p>
        <button onClick={() => this.test()} >click</button>
        <Test1 test={test1} />
      </div>
    );
  }
}

