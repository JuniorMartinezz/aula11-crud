import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import { Routes, Route } from "react-router-dom";

function Section() {
    return (
        <section id="section" class="container p-3">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element ={<About />}/>
                <Route path='/products' element ={<Products />}/>
                <Route path='/contact' element ={<Contact />}/>
            </Routes>
        </section>
    )
}

export default Section;