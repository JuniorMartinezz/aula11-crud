import styled from "styled-components";

export const Container = styled.div`
    .block{
        background-color: #4265ff;
        padding: 1rem;
        border-radius: 1rem;
        color: white;
    }

    h1{
        text-align: center;
    }

    ul{
        list-style: none;
        margin: 0 0 1rem 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .cat-button{
        color: white;
        background-color: #3f0ce7;
        border-radius: 1rem;
        padding: 1rem;
        transition: 0.5s;
        border: none;
    }

    p:hover{
        background-color: #1500fa;
    }
`