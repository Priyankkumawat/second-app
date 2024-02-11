import React from "react";

function Alert(props) {
    let capital=(str)=>{
        let text = str.toLowerCase();
        return text[0].toUpperCase() + text.slice(1);
    }
    return (
        <div style={{height:50}}>
            {props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
                <div>
                    <strong>{props.alert.msg}</strong> : {capital(props.alert.type)}
                </div>
            </div>}
        </div>
    );
}

export default Alert;