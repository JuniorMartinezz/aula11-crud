import styled from "styled-components";

export const StyledLogin = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 1rem;
    color: rgb(0, 96, 87);

    @media (max-width: 500px){
        width: 100%;
    }

    #inputLogin{
        width: 100%;
    }

    input, textarea{
        margin-bottom: 10px;
        border: 1px solid rgba(43, 240, 187, 0.765);
        border-radius: 0.5rem;
        color: rgb(0, 96, 87);

        :focus{
            color: rgb(0, 96, 87);
        }
    }

    textarea{
        height: 6rem!important;
    }

    h1{
        margin-bottom: 1rem;
        text-align: center;

    }

    form{
        width: 50%;
        margin: auto;

        @media (max-width: 950px){
            width: 100%;
        }
    }
`

export const StyledButton = styled.div`
    margin: auto;
    width: fit-content;

    .btnLogin{
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
    }
`