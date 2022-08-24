import styled from "styled-components";

interface ContainerProps {
    visible: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.theme.checkout.background} ;
    height: 100vh ;
    width: 486px;
    position: fixed ;
    top: 0;
    right: 0;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display: ${props => props.visible ? "flex" : "none"} ;
    flex-direction: column ;
    overflow: auto ;

    @media(max-width: 767px) {
        width: 436px;
    }

    @media(max-width: 700px) {
        width: 400px;
    }

    @media(max-width: 500px) {
        width: 320px;
    }
`

export const Title = styled.div`

    display: flex ;
    //background-color:  yellow;
    margin: 36px 47px;
    width: 200px ;

    label{
        display: flex;
        font-weight: 700;
        font-size: 27px;
        width: 166px ;
        word-break: break-word;
        color: ${props => props.theme.checkout.font}
    }
`

export const BoxList = styled.div`
    display: flex ;
    flex-direction: column ;
    flex: 1;
    gap: 20px;
    padding: 0px 0px;

    @media(max-width: 767px) {
        display: none ;
    }
    
`

export const BoxListMobile = styled.div`
    display: none ;
    flex-direction: column ;
    flex: 1;
    gap: 20px;
    padding: 0px 0px;

    @media(max-width: 767px) {
        display: flex ;
        //background-color: red ;
        align-items: center;
    }
 `

export const Bar = styled.div`
    background-color: ${props => props.theme.checkout.backgroundBar};
    min-height: 100px ;
    display: flex ;
    align-items: center ;
    justify-content: center ;

    label{
        display: flex ;
        color: ${props => props.theme.checkout.font} ;
        font-weight: 700;
        font-size: 28px;
    }

    @media(max-width: 767px) {
        min-height: 65px ;
        font-size: 20px;
    }
`

export const Close = styled.span`
    display: flex ;
    width: 40px ;
    height: 40px;
    position: absolute ;
    align-items: center ;
    justify-content: center ;
    background-color: ${props => props.theme.close.background} ;

    border-radius: 50%;
    right: 0 ;
    margin: 39px 22px; 
    cursor: pointer;

    svg{
        color: ${props => props.theme.close.icon};
    }
`

export const BoxValue = styled.span`
    display: flex ;
    //background-color: green ;
    height: 50px;
    justify-content: space-between ;
    padding: 0px 47px;
    align-items: center ;
    margin-bottom: 20px ;
    margin-top: 20px ;

    label{
        display: flex ;
        font-weight: 700;
        font-size: 28px;
        color: ${props => props.theme.checkout.font} ;
    }
`