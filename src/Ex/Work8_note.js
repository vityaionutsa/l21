import React from "react";

function Work8_note(props) {
    return(
        <div style={{ 
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            margin: "10px 0px",
            padding: "10px 0px",
         }}>
            <h2>Note { props.note.id }</h2>
            <h3>Created: { props.note.date }</h3>
            <p>{ props.note.content }</p>
            <div>
                <button onClick={ props.onClickUpdate }>
                    Update
                </button>
                <button onClick={ props.onClickDelete }>
                    Delete
                </button><br />
                <textarea
                    id={ "textareaNoteID" + props.note.id }
                    rows="10"
                    cols="40"
                    onBlur={ props.onBlur }
                    placeholder="Введіть зміни"
                    style={{
                        display: "none",
                        margin: "5px 0px"
                    }}
                >
                </textarea>
            </div>
        </div>
    );
}

export default Work8_note;