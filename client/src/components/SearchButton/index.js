import React from "react";

function SearchButton(props) {
    return (
        <button {...props} style={{ float: "right" }} className="btn btn-secondary">
            {props.children}
        </button>
    );
}

export default SearchButton;