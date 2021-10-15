import React from 'react'

import './TempMetricToggle.scss';

export default function TempMetricToggle() {
    return (
        <div className="TempMetricToggle">
            <div className="TempMetricToggle-Button">C°</div>
            <div className="TempMetricToggle-Divider">|</div>
            <div className="TempMetricToggle-Button-Active">F°</div>
        </div>
    )
}
