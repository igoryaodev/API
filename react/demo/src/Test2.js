import React, { Component } from 'react';

export default class Test2 extends Component {
  componentWillMount() {
    console.log('app ---- componentWillMount')
  }
  componentDidMount() {
    console.log('app ---- componentDidMount')
  }
  componentWillUnount() {
    console.log('app ---- componentWillUnount')
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Test2
        </p>
      </div>
    );
  }
}

