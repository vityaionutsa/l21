import React from "react";

function Work6_input(props) {

    return(
        <input
            type="text"
            placeholder="Input your change"
            id={ props.id }
            onBlur={ props.onBlur }
            style={{
                display: "none"
            }}
        />
    );
}

export default Work6_input;