import React from 'react'

import './AutoCompleteDropdown.scss';

export default function AutoCompleteDropdown(props) {

    const items = props.items;
    return (
        <div className="AutoCompleteDropdown">
            {
                items.map((item)=>{
                  return (<div>{item.name}</div>)  
                })
            }
        </div>
    )
}
