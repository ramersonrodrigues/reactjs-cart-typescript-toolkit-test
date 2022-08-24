import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.body.background} ;
    display: flex;
    flex-direction: column ;
    justify-content: center;

`

export const Body = styled.div`
    display: flex ;
    justify-content: center ;
`

export const GridProducts = styled.div`
    margin-top: 100px ;
    margin-bottom: 100px ;
    max-width: 900px ;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px;
    justify-content: center;

    @media(max-width: 1000px) {
        grid-template-columns: auto auto auto;
    }

    @media(max-width: 767px) {
        grid-template-columns: auto auto;
        margin-top: 50px ;
        margin-bottom: 50px ;
    }

    @media(max-width: 500px) {
        grid-template-columns: auto;
        margin-top: 20px ;
        margin-bottom: 20px ;
    }
`