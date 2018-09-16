import React, { Component } from 'react';
import "./Login.css";
export default class Login extends Component {
    state = {  }
    render() {
        return (
            <div className="login">
                <form>
                    <p>Login</p>
                    <label>username <input type="text"/></label>
                    <label>password <input type="password"/></label>
                    <input type="submit"/>
                </form>
                <a href="">Forgot your password?</a>
                <form>
                    <p>Create Account</p>
                    <label>username <input type="text"/></label>
                    <label>password <input type="password"/></label>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}