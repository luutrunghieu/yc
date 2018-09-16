import React, { Component } from "react";
import { Row, Col } from 'antd';
import {BrowserRouter,Link, Route} from 'react-router-dom';
import NewTab from './NewTab';
import CommentTab from './CommentTab';
import "./App.css";
class App extends Component {
  state = {
    navItems: [
        'new','comments','show','ask','jobs','submit'
    ]
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Row className="container" style={{ margin: "0 auto", width: "80%" }}>
          <Col span={1}>
            <Link to="/" className="logo">
              Y
            </Link>
          </Col>
          <Col span={3}>
            <Link to="/news" className="title">
              Hacker News
            </Link>
          </Col>
          <Col span={17}>
            {this.state.navItems.map(item => (
              <Link to={ `/${item}`} className="tab">
                {item}
              </Link>
            ))}
          </Col>
          <Col span={3}>
            <Link to="" className="login">
              log in
            </Link>
          </Col>
        </Row>
        <Route path='/'/>
        <Route path='/new' component={NewTab}/>
        <Route path='/comments' component={CommentTab}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
