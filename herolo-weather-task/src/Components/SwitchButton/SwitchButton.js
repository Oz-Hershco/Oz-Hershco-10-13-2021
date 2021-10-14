import React from 'react'

import './SwitchButton.scss';

export default function SwitchButton(props) {
    var handleOnClick = props.onClick;
    return (
        <label onClick={handleOnClick} className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}
