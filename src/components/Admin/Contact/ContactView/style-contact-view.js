import styled from "styled-components";

export const StyledContactView = styled.div`
    margin-top: 1rem;
    color: rgb(0, 96, 87);

    #block{
        width: 100%;
        display: table;
    }
    
    #titleContactList{
        width: 70%;
        float: left;

        @media (max-width: 600px){
            float: none;
            width: auto;
        }
    }

    #searchBarRight{
        width: 30%;
        float: right;

        @media (max-width: 600px){
            float: none;
            width: auto;
        }
    }

    .block{
        background: none!important;
    }
    
    .btnUpdate{
        background: rgba(43, 240, 187, 0.765);
        padding: 0.5rem;
        color: white;
        border: none;
        border-radius: 0.5rem;
        transition: 0.3s all ease;

        :hover{
            color: rgb(0, 96, 87);
            background: rgba(43, 240, 187, 0.765);
        }

        :active{
            border: 0.5px solid rgb(0, 96, 87);
        }
    }

    .btnDelete{
        background:rgba(164, 36, 36, 0.8);
        padding: 0.5rem;
        color: white;
        border: none;
        border-radius: 0.5rem;
        transition: 0.3s all ease;

        :hover{
            color: rgba(164, 36, 36, 0.8);
            background: rgba(100, 22, 22, 0.8);
        }

        :active{
            border: 0.5px solid rgb(164, 36, 36);
        }
    }
`