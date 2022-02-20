import React, { Component } from "react";
import { MainBox,SmallBox } from "./ColorPicker.styles";
import boxes from "../../Data/colors";

class ColorPicker extends Component{
    static = {};
    state = {
        activeOptionIdx: 0, 
    };

    render() {
        return (
            <MainBox>
                {/* {<SmallBox></SmallBox>} */}
                {boxes.map((box) => {
                    const { label, color} = box;
                    return (
                        <SmallBox key={color } style={{backgroundColor:color}}>{label}</SmallBox>
                    )
                })}
            </MainBox>
        )
    }
}

export default ColorPicker;