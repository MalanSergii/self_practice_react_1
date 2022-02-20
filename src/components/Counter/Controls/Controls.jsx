import React from "react";

const Controls = (props) => {
    return (
        <>
            <button onClick={props.onAdd}>+ 1</button>
            <button onClick={props.onRem}>- 1</button>
        </>
    )
}

export default Controls;