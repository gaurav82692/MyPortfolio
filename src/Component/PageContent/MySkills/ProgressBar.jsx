import React from 'react'

function ProgressBar(props) {
    return (
        <div>

            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <span> {props.skill}</span>
                <span>{props.icon}</span>
            </span>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: props.percent, backgroundColor: `${props.color}` }}>{props.percent}</div>
            </div>
        </div>
    )
}

export default ProgressBar
