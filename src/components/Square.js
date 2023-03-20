import React from 'react';
const squareStyle={
    border: "2px solid green",
    background: "lightyellow",
    marginTop: "-1px",
    marginRight: "-1x",
    fontSize: "60px",
    fontWeight: "800",
    float: "left",
    cursor: "pointer",
    padding: "0px",
    textAlign: "center",
}

const Square = (props) => {
    return (
        <button style={squareStyle}>

            {props.card.isOpen ? props.card.img : ""}

        </button>

    );
};


export default Square;