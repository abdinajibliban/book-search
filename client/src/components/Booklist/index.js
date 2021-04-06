import React from "react";

function Booklist({ children }) {
    return (
        <ul className="list-group">
            {children}
        </ul>
    );
}

export default Booklist;