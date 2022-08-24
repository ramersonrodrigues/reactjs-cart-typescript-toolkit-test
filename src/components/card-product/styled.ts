import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    width: 220px;
    height: 285px ;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    flex-direction: column ;
    background-color: ${props => props.theme.cardProduct.background} ;
`

export const BoxImg = styled.div`
    display: flex ;
    flex: 1;
    justify-content: center ;
    align-items: center ;

    img{
        width: 120px ;
        height: 120px ;
    }
`

export const BoxInfor = styled.div`
    display: flex ;
    //background-color: green ;
    flex-direction: column ;
    padding: 10px ;
    gap: 5px;

    div{
        display: flex ;
        height: 38px ;
        justify-content: space-between ;
        align-items: center ;

        label{
            display: flex ;
            font-weight: 400;
            font-size: 16px;
            color: ${props => props.theme.cardProduct.font};
            word-break: break-word;
            //width: 50px;
        }

        span{
            display: flex ;
            min-width: 64px;
            min-height: 26px ;
            background-color: ${props => props.theme.cardProduct.inforValueBackground} ;
            color: ${props => props.theme.cardProduct.inforValueColor};
            border-radius: 5px;
            align-items: center;
            justify-content: center;

            label{
                font-size: 10px ;
            }
        }

    }


`

export const Descript = styled.label`
    font-weight: 300;
    font-size: 10px;
    overflow: hidden;
    display: flex ;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

export const Bar = styled.div`
    display: flex;
    background-color: ${props => props.theme.cardProduct.backgroundBar} ;
    height: 30px;
    justify-content: center ;
    align-items: center ;
    gap: 5px;
    border-radius: 0px 0px 8px 8px ;
    cursor: pointer;

    label{
        display: flex ;
        font-size: 14px ;
        color: ${props => props.theme.cardProduct.fontBar};
        cursor: pointer;
    }

    svg{
        color: ${props => props.theme.cardProduct.fontBar};
    }
`
