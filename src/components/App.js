import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css"
import Header from "./Header";
import HomeTab from "./HomeTab";
import NewTab from "./NewTab";
import CommentTab from "./CommentTab";
import ShowTab from "./ShowTab";
import AskTab from "./AskTab";
import JobTab from "./JobTab";
import Footer from "./Footer";
import Login from "./Login";
import User from "./User";
import Submitted from "./Submitted";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={HomeTab}/>
          <Route path="/login" component={Login}/>
          <Route path="/news" component={HomeTab}/>
          <Route path="/new" component={NewTab} />
          <Route path="/comments" component={CommentTab} />
          <Route path="/show" component={ShowTab} />
          <Route path="/ask" component={AskTab} />
          <Route path="/jobs" component={JobTab} />
          <Route path="/user/:userId" component={User}/>
          <Route path="/submitted/:userId" component={Submitted}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
