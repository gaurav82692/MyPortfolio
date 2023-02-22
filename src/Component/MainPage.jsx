import React from 'react'
import ContactMe from './PageContent/ContactMe/ContactMe'
import Education from './PageContent/MyEducation/Education'
import MySkills from './PageContent/MySkills/MySkills'
import WorkExp from './PageContent/MyWorkExperience/WorkExp'
import WhatIdo from './PageContent/WhatIDo/WhatIdo'
import PageHeader from './PageHeader'

function MainPage() {
  return (
    <>
    <PageHeader />
    <WhatIdo />
    <MySkills />
    <Education />
    <WorkExp />
    <ContactMe />
    </>
  )
}

export default MainPage
