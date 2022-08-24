import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.barMenu.backgroundBar} ;
    display: flex;
    height: 100px ;
    flex: 1 ;
    justify-content: space-between ;
    align-items: center;
    padding: 28px 65px ;

    @media(max-width: 500px) {
        padding: 2px 20px ;
        height: 48px ;
    }
`

export const BoxLeft = styled.div`
    display: flex ;
    flex: 1 ;
    align-items: center ;
    gap: 10px;
`

export const BoxRight = styled.div`
    display: flex ;
`

export const Title = styled.div`
    display: flex ;
    font-size: 40px ;
    font-weight: 600 ;
    color: ${props => props.theme.barMenu.TextInfor} ;

    @media(max-width: 500px) {
        font-size: 32px;
    }

`

export const Subtitle = styled.div`
    display: flex ;
    font-size: 20px ;
    font-weight: 300 ;
    color: ${props => props.theme.barMenu.TextInfor} ;

    @media(max-width: 500px) {
        font-size: 16px;
    }

`

export const Cart = styled.div`
    background-color: ${props => props.theme.barMenu.backgroundCart} ;
    display: flex ;
    height: 45px ;
    width: 90px ;
    align-items: center ;
    justify-content: space-evenly ;
    border-radius: 8px;
    cursor: pointer;



    @media(max-width: 500px) {
        width: 52px;
        height: 26px;
    }

    svg{
        color: ${props => props.theme.barMenu.colorCart} ;
    }

    label{
        display: flex ;
        font-weight: 700;
        font-size: 18px;
        color: ${props => props.theme.barMenu.colorCart} ;
        cursor: pointer;

        @media(max-width: 500px) {
            font-size: 12px;
        }

    }
`