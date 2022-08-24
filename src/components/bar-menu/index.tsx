import { BoxLeft, BoxRight, Cart, Container, Subtitle, Title } from './styled'
import { IoCart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { setIsVisible } from 'redux/slices/controlCheckoutSlice';

const BarMenu = () => {

    const dataCart = useAppSelector(state => state.cartSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        //console.log("teste", dataCart.data.length)
    }, [dataCart])


    return (
        <Container>
            <BoxLeft>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </BoxLeft>
            <BoxRight>
                <Cart onClick={() => { dispatch(setIsVisible(true))}}>
                    <IoCart size={15} />
                    <label>{dataCart?.data?.length}</label>
                </Cart>
            </BoxRight>
        </Container>
    )
}

export default BarMenu