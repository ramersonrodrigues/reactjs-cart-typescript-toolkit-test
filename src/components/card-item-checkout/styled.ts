import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    height:  95px;
    background-color:  ${props => props.theme.cardCheckout.background};
    margin: 0px 47px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    align-items: center ;
    justify-content: space-between ;
    padding: 20px ;
    position: relative ;
`

export const Name = styled.div`
    display: flex ;
    width: 105px;
    font-weight: 400;
    font-size: 13px;
`

export const Value = styled.div`
    display: flex ;
    font-weight: 700;
    font-size: 14px;
`

export const BoxImg = styled.div`
    display: flex ;

    img{
        width: 50px ;
        height: 50px ;
    }
`

export const BoxQtd = styled.div`
    display: flex ;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;

    label{
        display: flex ;
        width: 20px;
        height: 20px;
        justify-content: center ;
        align-items: center ;
        font-size: 8px;

        svg{
            cursor: pointer;
        }
    }

`

export const Close = styled.span`
    display: flex ;
    width: 20px ;
    height: 20px;
    position: absolute ;
    align-items: center ;
    justify-content: center ;
    background-color: ${props => props.theme.close.background} ;

    border-radius: 50%;
    right: 0 ;
    top: 0;
    margin-top: -5px; 
    margin-right: -5px;
    cursor: pointer;

    svg{
        color: ${props => props.theme.close.icon};
    }
`
