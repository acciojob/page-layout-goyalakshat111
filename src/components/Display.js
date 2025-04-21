import React from "react";

const Display = ({header,children,footer})=>{

    return(
        <div>
            <h1>{header}</h1>
            <p>{children}</p>
            <footer>{footer}</footer>
        </div>
    )
}

export default Display;