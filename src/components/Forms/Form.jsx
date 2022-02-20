import React, { Component } from "react";
import { } from './Form.styles';

class Form extends Component {

    state = {
        name: "",
        nickName: "",
        number:'1'
    }

    handleChange = event => {
        const { name, value}= event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({
            name: "",
            nickName: "",
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange} />
                </label>
                <label htmlFor="">Nick
                    <input
                        type="text"
                        value={this.state.nickName}
                        name="nickName"
                        onChange={ this.handleChange}/>
                </label>
                <button type="submit">send</button>
                <p>your level</p>
                <label htmlFor="1">
                    <input
                        id="1"
                        type="radio"
                        name="number" 
                        value="1"
                        onChange={this.handleChange}
                        checked={this.state.number === "1"} 
                        />1
                </label>
                <label htmlFor="2"> 
                    <input
                        id="2"
                        type="radio"
                        name="number" 
                        value="2"
                        onChange={this.handleChange}
                        checked={this.state.number === "2"}
                        />2
                </label>
                <label htmlFor="3">
                    <input
                        id="3"
                        type="radio"
                        name="number" 
                        value="3"
                        onChange={this.handleChange}
                        checked={this.state.number === "3"} 
                        />3
                </label>
            </form>
        )
    }
}

export default Form;