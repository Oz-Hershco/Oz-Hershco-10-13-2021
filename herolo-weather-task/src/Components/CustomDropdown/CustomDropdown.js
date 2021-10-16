import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './CustomDropdown.scss';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </span>
));

export default function CustomDropdown(props) {
    const id = props.id;
    const items = props.items;
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id={id}>
                <FontAwesomeIcon onClick={() => { }} className="CustomDropdown-Dots-Icon" icon={faEllipsisH} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="CustomDropdown-Menu" align="end">
                {
                    items ? items.filter(item => item).map((item, i) => {
                        return <Dropdown.Item key={i} className="CustomDropdown-Menu-Item" eventKey={i}>{item}</Dropdown.Item>
                    }) : null
                }


            </Dropdown.Menu>
        </Dropdown>
    )
}
