import React, { useState } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './CustomDropdown.scss';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

export default function CustomDropdown(props) {
    const items = props.items;
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="CustomDropdown-Button">
                <FontAwesomeIcon onClick={() => { }} className="CustomDropdown-Dots-Icon" icon={faEllipsisH} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="CustomDropdown-Menu" align="end">
                {
                    items ? items.map((item, i) => {
                        return <Dropdown.Item key={i} className="CustomDropdown-Menu-Item" eventKey={i}>{item}</Dropdown.Item>
                    }) : null
                }


            </Dropdown.Menu>
        </Dropdown>
    )
}
