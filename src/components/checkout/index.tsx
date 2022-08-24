
import { Bar, BoxList, BoxListMobile, BoxValue, Close, Container, Title } from './styled'

import CardItemCheckout from 'components/card-item-checkout';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setIsVisible } from 'redux/slices/controlCheckoutSlice';
import { Product } from 'redux/slices/getProductsSlice';
import { IoIosClose } from "react-icons/io";
import CardItemCheckoutMobile from 'components/card-item-checkout-mobile';


const Checkout = () => {

    const visibleCheckout = useAppSelector(state => state.controlCheckoutSlice);
    const carts = useAppSelector(state => state.cartSlice);
    const dispatch = useAppDispatch();

    const groupProducts = () => {

        const dadosUnicos = new Map()
        carts.data.forEach((item: Product) => {
            if (!dadosUnicos.has(item.id)) {
                dadosUnicos.set(item.id, item)
            }
        })

        //console.log("testando", [...dadosUnicos.values()])
        return [...dadosUnicos.values()]
    }
    const getValueTotal = () => {
         
          const result = carts.data.reduce((accumulator: number, obj: Product) => {
            return (accumulator + +obj.price);
          }, 0);
          
          return result;
    }

    return (
        <Container visible={visibleCheckout.visible}>
            <Close>
                <IoIosClose onClick={() => { dispatch(setIsVisible(false)) }} size={38} />
            </Close>
            <Title>
                <label>
                    Carrinho de compras
                </label>
            </Title>
            <BoxList>
                {/* {Array(3).fill(<CardItemCheckout />)} */}
                {groupProducts().map((item: Product) => <CardItemCheckout key={item.id} product={item} />)}

            </BoxList>
            <BoxListMobile>
                {groupProducts().map((item: Product) => <CardItemCheckoutMobile key={item.id} product={item} />)}
            </BoxListMobile>
            <BoxValue>
                <label>Total</label>
                <label>{getValueTotal()}</label>
            </BoxValue>
            <Bar>
                <label>Finalizar Compra</label>
            </Bar>
        </Container>
    )
}

export default Checkout