import React from 'react'

import './TempMetricToggle.scss';

export default function TempMetricToggle(props) {

    const handleOnClick = props.onClick;
    const defaultdMetric = props.defaultdMetric;

    return (
        <div onClick={handleOnClick} className="TempMetricToggle">
            <div className={defaultdMetric === "c" ? "TempMetricToggle-Button-Active" : "TempMetricToggle-Button"}>C°</div>
            <div className="TempMetricToggle-Divider">|</div>
            <div className={defaultdMetric === "f" ? "TempMetricToggle-Button-Active" : "TempMetricToggle-Button"}>F°</div>
        </div>
    )
}
