import React, { Component } from "react";

import Controls from './Controls/Controls'
import Value from "./Value/Value";

class Counter extends Component{

    static defaultProps =  {
        initialValue:0
    }

    state = {
        value:this.props.initialValue,
    };

    add = () => {
        this.setState(prep => ({value: prep.value + 1
        }))
    }

    rem = () => {
        this.setState(prep => ({value:prep.value - 1
        }))
    }

    render() {
        return (
            <>
                <Value onValue={ this.state.value}/>
                <Controls onAdd={this.add} onRem={this.rem}/>
            </>
        )
    }
}

export default Counter;