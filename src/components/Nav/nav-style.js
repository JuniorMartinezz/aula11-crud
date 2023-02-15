import styled from "styled-components";

export const StyledNav = styled.div`
    color: white;
    background-color: rgba(0, 76, 56, 0.772);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: 100%;

    .nav-link{
        color: white;
        transition: 0.3s all ease;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .nav-link:hover{
        background: rgba(43, 240, 187, 0.765);
    }
`