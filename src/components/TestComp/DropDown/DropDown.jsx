import React, { Component } from "react";

import { MainBox, SecondBox } from "./DropDown.styles";

class DropDown extends Component{
    static = {};
    state = {
        visible:false,
    };

    toggle = () => {
        this.setState(prep => ({visible: !prep.visible}))
    }

    render() {
        return (
            <>
                <button onClick={this.toggle}>{this.state.visible ?"hide" : "show"}</button>
                <MainBox>Dropdown</MainBox>
                {this.state.visible && <SecondBox>box</SecondBox>}
            </>
        )
    }

}

export default DropDown;