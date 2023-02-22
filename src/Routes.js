import MainPage from "./Component/MainPage";
import ContactMe from "./Component/PageContent/ContactMe/ContactMe";
import Education from "./Component/PageContent/MyEducation/Education";
import MySkills from "./Component/PageContent/MySkills/MySkills";
import WhatIdo from "./Component/PageContent/WhatIDo/WhatIdo";
import PageHeader from "./Component/PageHeader";




var routes = [
    {
        path: "/",
        name: "My Portfolio",
        imgSrc: "",
        component:<MainPage /> ,
        layout: "/admin"
    
    },
    {
        path: "/MyContacts",
        name: "My Contacts",
        imgSrc: "",
        component:<ContactMe /> ,
        layout: "/admin"
    
    },
]
export default routes;