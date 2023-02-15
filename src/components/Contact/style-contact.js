import styled from "styled-components";

export const StyledContact = styled.div`
    margin-top: 1rem;
    color: rgb(0, 96, 87);

    input, textarea{
        margin-bottom: 10px;
        width: 500px;
        border: 1px solid rgba(43, 240, 187, 0.765);
        border-radius: 0.5rem;
        color: rgb(0, 96, 87);

        @media (max-width: 550px){
            width: 100%;
        }

        :focus{
            color: rgb(0, 96, 87);
        }
    }

    textarea{
        height: 6rem!important;
    }

    h1{
        margin-bottom: 1rem;

    }
`

export const StyledButton = styled.button`
    color: white;
    font-size: bolder;
    background: rgba(11, 68, 53, 0.765);
    width: fit-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0;

    :hover{
        background: rgba(43, 240, 187, 0.765);
        color: rgba(11, 68, 53, 0.765);
    }

    :active{
        border: 0.5px solid rgba(11, 68, 53, 0.765);
    }
`