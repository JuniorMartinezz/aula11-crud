import styled from "styled-components";

export const StyledProducts = styled.div`
    margin-top: 1rem;
    margin: auto;

    @media (max-width: 560px){
        .cat-button{
            font-size: small!important;;
        }
    }

    @media (max-width: 420px){
        .cat-button{
            padding: 8px!important;
        }
    }

    table{
        width: 50%!important;

        @media (max-width: 1275px){
            width: fit-content!important;
        }
    }

    .cat-button{
        color: white;
        background: rgba(43, 240, 187, 0.765);
        border-radius: 1rem;
        padding: 1rem;
        transition: 0.5s;
        border: none;
    }

    .cat-button:hover{
        background: rgba(11, 68, 53, 0.765);
        color: rgba(43, 240, 187, 0.765);
    }

    .cat-button:active{
        border: 0.5px solid rgba(43, 240, 187, 0.765);
    }
`