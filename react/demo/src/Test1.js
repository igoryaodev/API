import React, { Component } from 'react';

export default class Test1 extends Component {
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
    // this.setState({
    //   contact: 1234
    // })
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return false
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    const { test } = this.props
    return (
      <div className="App">
        <p className="App-intro">
          Test1, {test}
        </p>
      </div>
    );
  }
}

// componentWillMount
// Test1.js:11 componentDidMount
// Test1.js:17 shouldComponentUpdate
// Test1.js:21 componentWillUpdate
// Test1.js:24 componentDidUpdate


// componentWillMount
// Test1.js:11 componentDidMount
// Test1.js:5 componentWillReceiveProps
// Test1.js:17 shouldComponentUpdate
// Test1.js:21 componentWillUpdate
// Test1.js:24 componentDidUpdate


// componentWillReceiveProps
// Test1.js:17 shouldComponentUpdate
// Test1.js:21 componentWillUpdate
// Test1.js:24 componentDidUpdate

// 网页管理
// 列表
// {
//   list: [
//     {
//       name: '',
//       isDelete: false
//     }
//   ],
//   page: 1
// }

// 详情 
// {
//   list: [
//     {
//       status:1,
//       video: {}
//       video_En: {}
//       coverimage: {}
//       coverimage_En: {}
//       description: String,
//       description_En: String,
//       backgroundColor: String,
//       fontColor: String,
//       sortId: Int
//     }
//   ],
//   id: 0,
//   name: '关于展馆',
//   code: '用来匹配menu'
// }