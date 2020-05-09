import React from 'react';

import "./DottedButton.scss";

function DottedButton (props: any) {

    return (
        <button className="dotted-button">{props.name}</button>
    )
    
}

export default DottedButton;