import React from "react";
import Api from "../Api";
import { useState, useEffect } from "react";
import { StyledAbout } from "./style-about";

function About(){
    const [page, setPage] = useState([]);

    useEffect(() => {
        Api.get('/page/2')
            .then((response) => {
                setPage(response.data)
            })
    }, []);

    return(
        <StyledAbout>
            <div 
                dangerouslySetInnerHTML={
                    {
                        __html: page.content
                    }
                }
            >
            </div>
        </StyledAbout>
        
    )
}

export default About;