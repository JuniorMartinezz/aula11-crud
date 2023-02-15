import styled from "styled-components";

export const StyledClientAdd = styled.div`
    margin-top: 1rem;
    color: rgb(0, 96, 87);

    h1{
        text-align: left;
    }

    .block{
        background-color: rgba(0, 96, 86, 0.809);
        width: 50%;
        border-radius: 1rem;
        color: white;
        margin: auto;
        padding: 50px;

        h1{
            margin-bottom: 1rem;
        }

        @media (max-width: 1000px){
            width: auto;
        }
    }

    button{
        margin-top: 1rem;
        padding: 0.5rem;
        background-color: rgba(43, 240, 187, 0.765);
        color: white;
        border: 0;
        border-radius: 0.5rem;
        
        :active{
            color: rgba(43, 240, 187, 0.765);
            border: 0.5px solid rgba(43, 240, 187, 0.765);
            background: rgba(0, 96, 86, 0.809);
        }

        :hover{
            color: rgba(43, 240, 187, 0.765);
            background: rgba(0, 96, 86, 0.809);
        }
    }

    input, label{
        color: white;
        :focus{
            color: rgb(0, 96, 87);
        }
    }

    input{
        background: rgba(43, 240, 187, 0.765);
        border-color: white;
        margin-bottom: 1rem;

        :focus{
            background: rgba(43, 240, 187, 0.765);
        }
    }
`