import React from 'react'

import './AutoCompleteDropdown.scss';

export default function AutoCompleteDropdown(props) {

    const items = props.items;
    return (
        items && items.length ? <div className="AutoCompleteDropdown">
            {
                items.map((item) => {
                    return (<div className="AutoCompleteDropdown-Option">{item.LocalizedName}</div>)
                })
            }
        </div> : null
    )
}
