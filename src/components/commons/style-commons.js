import styled from "styled-components";

export const StyledSearchBar = styled.div`
    color: rgb(0, 96, 87);
    width: auto;

    
    input{
        border: 1px solid rgba(43, 240, 187, 0.765);
        border-radius: 0.5rem;
    }

    #blockSearch{
        width: 100%;
    }

    #inputSearch{
        width: 70%;
        float: right;
        float: left;
    }

    #btnSearch{
        width: 25%;
        float: right;
    }
`

export const StyledButtonSearch = styled.button`
    background:rgb(0, 96, 87);
    padding: 1rem;
    border: 0;
    border-radius: 0.5rem;
    color: white;
    transition: 0.3s all ease;

    :hover{
        background: rgba(43, 240, 187, 0.765);
        color: rgb(0, 96, 87);
    }

    :active{
        border: 0.5px solid rgb(0, 96, 87);
    }

    ion-icon{
        font-size: 20px;
    }
`

export const Container = styled.div`
    margin-top: 1rem;
    
    .block{
        background-color: rgba(0, 96, 86, 0.809);
        padding: 1rem;
        color: white;
        border-radius: 1rem;
    }
    
    table{
        border-radius: 1rem;
        background-color: rgba(0, 96, 86, 0.809);
        color: white;
        width: 100%;
        margin: auto;
    }

    td{
        padding: 1rem;
    }

    @media (max-width: 890px){
        table{
            width: 100% !important;
        }
    }

    h1{
        text-align: center;
    }

    ul{
        list-style: none;
        padding: 0px;
        display: flex;
        justify-content: center;
    }
`
