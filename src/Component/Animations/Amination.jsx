import React from 'react'
import "../Animations/Animation.css"



function Amination(props) {
    return (
        <>

            <h2 className='Animation' style={{
                color: props.color,
                fontSize: props.fontSize,
                fontFamily: props.fontFamily,
                fontWeight: props.fontWeight,
                lineHeight: props.lineHeight,

            }}>{props.text}</h2>

        </>
    )
}

export default Amination