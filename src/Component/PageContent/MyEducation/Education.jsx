import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Education() {
    return (
        <>
            <div>
                <center><p style={{ fontFamily: "cursive", marginTop: "3%", fontWeight: "bold", fontSize: "30px" }}>Education</p></center>
                <center><p style={{ fontFamily: "monospace", marginTop: "1%" }}>The best part of everyone's life</p></center>


            </div>
            <div style={{ padding: "3%" }}>
                <Accordion style={{ padding: "0.5%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{

                            bgcolor: '#0a0a0a', // use summary background color

                            color: 'success.dark', // use summary default color

                            '&:hover': {

                                bgcolor: '#9fb004', // use summary hover background

                                color: '#fff', // use summary hover color

                                '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#fff' } // use summary hover icon color

                            }

                        }}
                    >
                        <Typography sx={{ color: "#fff" }}>BACHELOR DEGREE IN COMPUTER SCIENCE & ENG.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-sm" style={{ padding: "0% 50% 0% 50%" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Year</th>
                                        <th >2018-2022</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">College</th>
                                        <th >Madan Mohan Malaviya University of Technology</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">Place</th>
                                        <th >Gorakhpur Uttar Pradesh India</th>

                                    </tr>
                                    <tr>
                                        <th scope="col">Passing Grades</th>
                                        <th >7.43 CGPA</th>

                                    </tr>
                                </thead>
                            </table>

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ padding: "0.5%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{

                            bgcolor: '#0a0a0a', // use summary background color

                            color: 'success.dark', // use summary default color

                            '&:hover': {

                                bgcolor: '#9fb004', // use summary hover background

                                color: '#fff', // use summary hover color

                                '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#fff' } // use summary hover icon color

                            }

                        }}
                    >
                        <Typography sx={{ color: "#fff" }}>INTERMEDIATE SECONDARY EDUCATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-sm" style={{ padding: "0% 50% 0% 50%" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Year</th>
                                        <th >2015 - 2016</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">School</th>
                                        <th >Amar Memorial St Georges Preparatory School</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">Place</th>
                                        <th >Sarnath Varanasi Uttar Pradesh</th>

                                    </tr>
                                    <tr>
                                        <th scope="col">Passing Grades</th>
                                        <th >75.6%</th>

                                    </tr>
                                </thead>
                            </table>

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ padding: "0.5%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{

                            bgcolor: '#0a0a0a', // use summary background color

                            color: 'success.dark', // use summary default color

                            '&:hover': {

                                bgcolor: '#9fb004', // use summary hover background

                                color: '#fff', // use summary hover color

                                '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#fff' } // use summary hover icon color

                            }

                        }}
                    >
                        <Typography sx={{ color: "#fff" }}>HIGH SCHOOL SECONDARY EDUCATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-sm" style={{ padding: "0% 50% 0% 50%" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Year</th>
                                        <th >2014</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">School</th>
                                        <th >Amar Memorial St Georges Preparatory School</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">Place</th>
                                        <th >Sarnath Varanasi Uttar Pradesh</th>

                                    </tr>
                                    <tr>
                                        <th scope="col">Passing Grades</th>
                                        <th >8 CGPA</th>

                                    </tr>
                                </thead>
                            </table>

                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion style={{ padding: "0.5%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{

                            bgcolor: '#0a0a0a', // use summary background color

                            color: 'success.dark', // use summary default color

                            '&:hover': {

                                bgcolor: '#9fb004', // use summary hover background

                                color: '#fff', // use summary hover color

                                '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#fff' } // use summary hover icon color

                            }

                        }}
                    >
                        <Typography sx={{ color: "#fff" }}>
                            ELEMENTERY EDUCATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-sm" style={{ padding: "0% 50% 0% 50%" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Year</th>
                                        <th >2004-2013</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">School</th>
                                        <th >M.P Memorial School</th>

                                    </tr>

                                    <tr>
                                        <th scope="col">Place</th>
                                        <th >Kandwa Chitaipur Varanasi Uttar Pradesh</th>

                                    </tr>
                                    <tr>
                                        <th scope="col">Passing Grades</th>
                                        <th >75% (avg)</th>

                                    </tr>
                                </thead>
                            </table>

                        </Typography>
                    </AccordionDetails>
                </Accordion>


            </div>
            <br></br>



        </>
    )
}

export default Education
