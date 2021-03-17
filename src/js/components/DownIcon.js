import React from "react";
import '../../css/components_css/DownIcon.css';

const DownIcon = (props) => {
    return (
        <div
            onClick={props.onClick}
            className="downicon">
            <div>
                <img src={props.icon} alt={props.title}/>
            </div>
        </div>
    )
}

export default DownIcon