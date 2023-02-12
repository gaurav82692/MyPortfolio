import React from 'react'
import Grid from '@mui/material/Grid';
import backgroundImage from "../../../Images/hill.jpg"

function CountClass() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            // height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // background: "black",

            backgroundAttachment: "fixed",
            backgroundPosition: "center center"



        }}>
            <Grid container item spacing={3} style={{ padding: '1rem 2rem 1rem 2rem', border: "100px solid white" }}>
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12} style={{ padding: '1rem 2rem 1rem 2rem', margin: "5% 0% 5% 0%" }}>
                    <center><h1 style={{ color: "#fff", fontWeight: "bold" }}>42</h1>
                        <h4 style={{ color: "#fff" }}>Software Developed</h4></center>

                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12} style={{ padding: '1rem 2rem 1rem 2rem', margin: "5% 0% 5% 0%" }}>
                    <center><h1 style={{ color: "#fff", fontWeight: "bold" }}>07</h1>
                        <h4 style={{ color: "#fff" }}>Industrial Project</h4></center>

                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12} style={{ padding: '1rem 2rem 1rem 2rem', margin: "5% 0% 5% 0%" }}>
                    <center><h1 style={{ color: "#fff", fontWeight: "bold" }}>07</h1>
                        <h4 style={{ color: "#fff" }}>Happy Clients</h4></center>

                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12} style={{ padding: '1rem 2rem 1rem 2rem', margin: "5% 0% 5% 0%" }}>
                    <center><h1 style={{ color: "#fff", fontWeight: "bold" }}>02</h1>
                        <h4 style={{ color: "#fff" }}>Served Companies</h4></center>

                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12} style={{ padding: '1rem 2rem 1rem 2rem', margin: "5% 0% 5% 0%" }}>
                    <center><h1 style={{ color: "#fff", fontWeight: "bold" }}>2/195</h1>
                        <h4 style={{ color: "#fff" }}>Country Travelled</h4></center>

                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12} style={{ padding: '1rem 2rem 1rem 2rem', margin: "5% 0% 5% 0%" }}>
                    <center><h1 style={{ color: "#fff", fontWeight: "bold" }}>10/28</h1>
                        <h4 style={{ color: "#fff" }}>Indian State Travelled</h4></center>

                </Grid>


            </Grid>


        </div>

    )
}

export default CountClass
