import React from 'react'
import backgroundImage from "../Images/g.jpg"
import backgroundImage2 from "../Images/main.jpg"
import backgroundImage3 from "../Images/hu.jpg"
import backgroundImage4 from "../Images/hum.jpg"
import GauravImage from "../Images/gaurav.png"
import backgroundImage5 from "../Images/hum2.jpg"
import backgroundImage6 from "../Images/hum3.jpeg"
import backgroundImage7 from "../Images/iii.jpg"
import backgroundImage8 from "../Images/image.jpg"
import resume from "../../src/Docs/GauravResume.pdf"

import Grid from '@mui/material/Grid';
import Amination from './Animations/Amination';
import Label from './Animations/Label';
import { Button } from '@mui/material'


function PageHeader() {

    const aboutMe = "I'm Bengaluru based Software Engineer, Currently building the mobile and web application for a new Fintech venture. I gathered my first experience working in Fintech, while developing product of several startups within my career at Codebugged AI and Hummingwave Technologies. My passion for semantics, analytical correlations and psychological user patterns builds the foundation of a strong approach in developing Softwares."

    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage8})`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                // background: "black",


            }}>
                <Grid container item spacing={3} style={{ padding: '1rem 2rem 1rem 2rem' }}>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        {/* <img style={{ marginLeft: "10%" }} src={GauravImage} alt="" /> */}
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12} style={{ marginTop: "5%", fontSize: "20rem" ,right:"10",bottom:"0"}}>
                        <Label />
                        <div style={{ marginTop: "25%" }}>
                            <Amination text={"Hi!"} color={"black"} fontSize={"4vw"} fontFamily={"cursive"} fontWeight={"Bold"} lineHeight={"1.5"} />
                            <Amination text={"I'm Gaurav Singh"} color={"black"} fontSize={"4vw"} fontFamily={"cursive"} fontWeight={"Bold"} lineHeight={"2"} />
                            <Amination text={aboutMe} color={"black"} fontSize={"1.3vw"} fontFamily={"italic"} fontWeight={""} lineHeight={"1"} />
                           
                        </div>
                    </Grid>
                    <div style={{display:"flex",width:"100%",flexDirection:"row-reverse",justifyContent:"space-between"}}>
                    <a href={resume} download="GauravResume.pdf" target='_blank'>
                    <Button style={{ color: "#fff",background:"#98e39e", fontSize: "0.6rem", borderRadius: "5px",position:"absolute",border:"1px solid black",padding:"0%",width:"100px",right:"0",bottom:"0", marginRight:"10%"}}>Download CV  <i class="fa-solid fa-down-to-line"></i></Button></a>
                    <Button/>
                    </div>
                 
                </Grid>
               


            </div>

        </>
    )
}

export default PageHeader