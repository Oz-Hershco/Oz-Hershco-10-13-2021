import React from 'react'

import './TopNavigationBar.scss';

export default function TopNavigationBar() {
    return (
        <header className="TopNavigationBar">
            <div className="TopNavigationBar-LeftSide">
                <h2>Herolo Weather Task</h2>
                <div>theme toggle</div>
            </div>
            <div className="TopNavigationBar-RightSide">
                <button>button 1</button>
                <button>button 2</button>
            </div>
        </header>
    )
}
