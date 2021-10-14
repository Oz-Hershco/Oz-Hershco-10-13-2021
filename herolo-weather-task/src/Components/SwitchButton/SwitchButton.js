import React from 'react'

import './SwitchButton.scss';

export default function SwitchButton(props) {
    var labelText = props.labelText;
    var handleOnClick = props.onClick;
    return (
        <label onChange={(e) => { handleOnClick(e.target.checked) }} className="switch">
            <input type="checkbox" />
            <span className="slider round">{labelText}</span>
        </label>
    )
}
