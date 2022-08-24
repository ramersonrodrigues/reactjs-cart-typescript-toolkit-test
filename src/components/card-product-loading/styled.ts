import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    width: 220px;
    height: 285px ;
    //box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    flex-direction: column ;
    background-color: #f1f1f1;
    //background-color: yellow;

    animation: Skeleton 1s ease infinite alternate;

    @keyframes Skeleton{
        to{
            opacity: 0.5;
        }
    }

`

export const Bar = styled.div`
    display: flex ;
    background-color: #dcdcdc;
    height: 30px;
    width: 100% ;
    border-radius: 0px 0px 8px 8px ;
    margin-top: 5px;
`

export const Price = styled.div`
    background-color: #dcdcdc;
    height: 30px ;
    width: 60px;
    margin-bottom: 5px;
    border-radius: 10px;
`

export const Box = styled.div`
    //background-color: #dcdcdc;
    display: flex ;
    flex: 1;
    align-items: flex-end ;
    margin-bottom: 10px ;
    padding: 0px 20px;
    justify-content: space-between ;
    
`

export const Name = styled.div`
    background-color: #dcdcdc;
    height: 40px ;
    width: 100px;
    border-radius: 10px;
`

export const Descript = styled.div`
    background-color: #dcdcdc;
    height: 10px;
    width: calc(100% - 40px);
    display: flex ;
    margin: 2px 20px ;
    border-radius: 5px ;
`