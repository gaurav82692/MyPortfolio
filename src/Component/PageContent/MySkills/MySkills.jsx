import React from 'react'
import Grid from '@mui/material/Grid';
import ProgressBar from './ProgressBar';


function MySkills() {
    return (
        <div>
            <div>
                <center><p style={{ fontFamily: "cursive", marginTop: "3%", fontWeight: "bold", fontSize: "30px" }}>My Skills</p></center>
                <center><p style={{ fontFamily: "monospace", marginTop: "1%" }}>HERE ARE SOME OF MY SPECIALTY</p></center>


            </div>
            <Grid container item spacing={2} style={{ padding: '1rem 5rem 6rem 2rem' }}>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"HTML"} percent={"95%"} color={"green"} icon={<i class="fa-brands fa-html5 fa-lg"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"CSS"} percent={"65%"} color={"red"} icon={<i class="fa-brands fa-css3-alt"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Javascript"} percent={"75%"} color={"blue"} icon={<i class="fa-brands fa-square-js"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"React JS"} percent={"85%"} color={"#32a852"} icon={<i class="fa-brands fa-react"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Java"} percent={"75%"} color={"#24c7b4"} icon={<i class="fa-brands fa-java"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"C"} percent={"90%"} color={"#63e60b"} icon={<i class="fa-solid fa-c"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"C++"} percent={"85%"} color={"#95c7b4"} icon={<i class="fa-solid fa-c">++</i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Python"} percent={"95%"} color={"#cd3e53"} icon={<i class="fa-brands fa-python"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Node JS"} percent={"75%"} color={"#e60ba4"} icon={<i class="fa-brands fa-node"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"My SQL"} percent={"80%"} color={"#kt8ba4"} icon={<i class="fa-solid fa-database"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Git"} percent={"85%"} color={"#5018de"} icon={<i class="fa-brands fa-git-alt"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Docker"} percent={"50%"} color={"#bade18"} icon={<i class="fa-brands fa-docker"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Machine Learning"} percent={"65%"} color={"#green"} icon={<i class="fa-sharp fa-solid fa-laptop-code"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Deep Learning"} percent={"65%"} color={"#af0be6"} icon={<i class="fa-solid fa-brain"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Computer Vision"} percent={"55%"} color={"#bade18"} icon={<i class="fa-solid fa-eye-low-vision"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"AWS"} percent={"75%"} color={"blue"} icon={<i class="fa-brands fa-aws"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Linux"} percent={"65%"} color={"#cd3e53"} icon={<i class="fa-brands fa-linux"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Data Structure"} percent={"85%"} color={"#bade18"} icon={<i class="fa-regular fa-book"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Algorithm"} percent={"75%"} color={"#63e60b"} icon={<i class="fa-regular fa-brain"></i>} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                    <ProgressBar skill={"Optimization"} percent={"65%"} color={"#e60ba4"} icon={<i class="fa-thin fa-toolbox"></i>} />
                </Grid>


            </Grid>



        </div>
    )
}

export default MySkills
