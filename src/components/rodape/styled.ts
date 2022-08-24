import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.rodape.background} ;
    height: 34px ;
    display: flex ;
    align-items: center ;
    justify-content: center ;

    label{
        display: flex ;
        color: ${props => props.theme.rodape.font};
        font-weight: 400;
        font-size: 12px;
    }
`
