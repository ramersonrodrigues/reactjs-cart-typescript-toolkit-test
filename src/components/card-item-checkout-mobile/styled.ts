import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    height:  220px;
    width: 250px ;
    background-color:  ${props => props.theme.cardCheckout.background};
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    align-items: center ;
    justify-content: space-between ;
    padding: 20px ;
    position: relative ;
    flex-direction: column ;
`

export const Name = styled.div`
    display: flex ;
    width: max-content;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 10px;
`

export const Value = styled.div`
    display: flex ;
    font-weight: 700;
    font-size: 14px;
    background-color: ${props => props.theme.cardProduct.inforValueBackground} ;
    color:  ${props => props.theme.cardProduct.inforValueColor} ;
    padding: 5px ;
    border-radius: 8px ;
`

export const Section = styled.div`
    display: flex ;
    font-weight: 700;
    font-size: 14px;
    //background-color: red ;
    gap: 30px;
`

export const BoxImg = styled.div`
    display: flex ;
    flex: 1 ;

    img{
        width: 100px ;
        height: 100px ;
    }
`

export const BoxQtd = styled.div`
    display: flex ;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;

    label{
        display: flex ;
        width: 25px;
        height: 25px;
        justify-content: center ;
        align-items: center ;
        font-size: 8px;
        //background-color: red ;

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
