import React, { Component } from "react";

class LoginForm extends Component {
    state = {
        userInfo: {
            email: "",
            password:"",
        },
        
    };

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.reset();
    }

    onHandleChange = (event) => {  
        const { name, value} = event.target
        this.setState((prev)=>({
            userInfo: { ...prev.userInfo, [name]: value }
        }))
    } 

    reset = () => {
        this.setState({
            userInfo: {
                email: "",
                password:"",
            },
        })
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>
                <input type="text" name='email' onChange={this.onHandleChange} value={this.state.userInfo.email}/>
                <input type="password" name='password' onChange={this.onHandleChange} value={this.state.userInfo.password}/>
                <button type="submit">to send</button>
            </form>
        )
    }
}

export default LoginForm;