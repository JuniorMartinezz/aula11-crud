import React from "react";
import Api from "../Api";
import { useState, useEffect } from "react";

function About(){
    const [page, setPage] = useState([]);

    useEffect(() => {
        Api.get('/page/2')
            .then((response) => {
                setPage(response.data)
            })
    }, []);

    return(
        <div className="row">
            <div className="col-md-1"></div>
            <div 
                className="col-md-10"
                dangerouslySetInnerHTML={
                    {
                        __html: page.content
                    }
                }
            >
                  
            </div>
            <div className="col-md-1"></div>
        </div>
        
    )
}

export default About;