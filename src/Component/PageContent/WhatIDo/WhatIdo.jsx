

import React from 'react'
import "./Content.css"
import football from "../../../Images/football.jpeg"
import Cook from "../../../Images/cook.jpeg"
import Ai from "../../../Images/Ai.avif"
import Software from "../../../Images/soft.png"
import CountClass from './CountClass'

function WhatIdo() {
    return (
        <><div>
            <center><p style={{ fontFamily: "cursive", marginTop: "3%", fontWeight: "bold", fontSize: "30px" }}>WHAT I DO?</p></center>
            <center><p style={{ fontFamily: "monospace", marginTop: "1%" }}>HERE ARE SOME OF MY EXPERTISE</p></center>


        </div>

            <div class="row1-container" style={{ margin: "5%" }}>
                <div class="box  cyan">
                    <h2>Software Development</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                    <img className="img" src={Software} alt="" style={{position:"relative",
                        right:"25%",
                        top:"-25px",
                        width:"30%",
                        height:"80%"}} />
                </div>

                <div class="box red">
                    <h2>AI & Machine Learning</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                    <img className="img" src={Ai} alt="" height={"90px"} />
                </div>

                <div class="box  blue">
                    <h2>Play Football</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                    <img className="img" src={football} alt="" height={"90px"} />
                </div>
                <div class="box red">
                    <h2>Culinary & Trips</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                    <img className="img" src={Cook} alt="" height={"90px"} />
                </div>
            </div>

            <CountClass />


        </>
    )
}

export default WhatIdo