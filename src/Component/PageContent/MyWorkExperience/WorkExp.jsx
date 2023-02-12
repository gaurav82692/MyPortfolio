import React from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'

function WorkExp() {
    return (
        <>
            <div>
                <center><p style={{ fontFamily: "cursive", marginTop: "3%", fontWeight: "bold", fontSize: "30px" }}>Work Experience</p></center>
                <center><p style={{ fontFamily: "monospace", marginTop: "1%" }}>HERE ARE SOME OF MY SERVINGS</p></center>


            </div>

            <div style={{ padding: "3%" }}>
                <div style={{ padding: "3%", border: "1px solid grey", background: "#f7f7e9" }}>

                    <Timeline>
                        <TimelineEvent title="Hummingwave Technologies, Bengaluru"
                            createdAt="04 july 2022 - now"
                            icon={<i class="fa-solid fa-user"></i>}
                        >
                            <ul>
                                <li>Designation : Software Development Engineer I</li>
                                <li>Domain : Fintech & CRM</li>
                                <li>Tech Stack : Frontend - [JavaScript React JS Angular], Backend - [Java, Spring, AWS, RDS]</li>
                            </ul>
                        </TimelineEvent>
                        <TimelineEvent title="Codebugged AI, Lucknow"
                            createdAt="04 july 2018 - june 2022"
                            icon={<i class="fa-solid fa-user"></i>}
                        >
                            <ul>
                                <li>Designation : Machine Learning Engineer </li>
                                <li>Domain : Analytics and Surveillance</li>
                                <li>Tech Stack : Frontend - [HTML CSS JavaScript React JS Angular], Backend - [Python, Node, AWS, RDS]</li>
                            </ul>
                        </TimelineEvent>
                        <TimelineEvent title="Prithvi AI, Kanpur"
                            createdAt="07 April 2019 - 07 Sept 2019"
                            icon={<i class="fa-solid fa-user"></i>}
                        >
                            <ul>
                                <li>Designation : Data Science Intern </li>
                                <li>Domain : Artificial Intelligence and Computer Vision</li>
                                <li>Tech Stack : Frontend - [Django], Backend - [Python C++ linux]</li>
                            </ul>
                        </TimelineEvent>


                    </Timeline>
                </div>

            </div>
        </>
    )
}

export default WorkExp
