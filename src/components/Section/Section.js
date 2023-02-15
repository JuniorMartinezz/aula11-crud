import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact";

import Login from "../Admin/Login/Login";

import ContactView from "../Admin/Contact/ContactView";
import ContactResponse from "../Admin/Contact/ContactResponse";
import ClientList from "../Admin/Client/ClientList";
import ClientAdd from "../Admin/Client/ClientAdd";
import ClientUpdate from "../Admin/Client/ClientUpdate";
import { StyledSection } from "./style-section";

function Section() {
    return (
        <StyledSection id="section">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element ={<About />}/>
                <Route path='/products/*' element ={<Products />}/>
                <Route path='/contact' element ={<Contact />}/>

                <Route path='/user/login' element={<Login />} />

                <Route path='/admin/contactView' element ={<ContactView />}/>
                <Route path='/admin/contact/response/:idContact' element={<ContactResponse />} />
                
                <Route path='/admin/ClientList' element={<ClientList />}/>
                <Route path='/admin/ClientAdd' element={<ClientAdd />}/>
                <Route path='/admin/ClientUpdate/:idClient' element={<ClientUpdate />}/>
            </Routes>
        </StyledSection>
    )
}

export default Section;