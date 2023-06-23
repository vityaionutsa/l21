import React from "react";

function Work6_button(props) {

    return (
        <button
            style={{
                margin: "0px 10px"
            }}
            onClick={ props.onClick }
        >
            { props.content }
        </button>
    );
}

export default Work6_button;