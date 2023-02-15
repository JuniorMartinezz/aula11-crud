import React from "react";
import Api from "../Api";
import { useState, useEffect } from "react";
import { StyledHome } from "./style-home";

function Home(){
    const [page, setPage] = useState([]);

    useEffect(() => {
        Api.get('/page/1')
            .then((response) => {
                setPage(response.data)
            })
    }, []);

    return(
        <StyledHome>
            <div
                dangerouslySetInnerHTML={
                    {
                        __html: page.content
                    }
                }
            >
            </div>
        </StyledHome>
        
    )
}

export default Home;