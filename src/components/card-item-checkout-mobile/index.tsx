import { BoxImg, BoxQtd, Close, Container, Name, Section, Value } from "./styled"
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { Product } from "redux/slices/getProductsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { removeProduct, removeProductUnd, setProduct } from "redux/slices/cartSlice";
import { IoIosClose } from "react-icons/io";

export interface CardsProps {
    product: Product | undefined;
}

const CardItemCheckoutMobile: React.FC<CardsProps> = (props) => {

    const carts = useAppSelector(state => state.cartSlice);
    const dispatch = useAppDispatch();

    const countItems = () => {
        let filtered = carts.data.filter((item: Product) => item.id === props.product?.id);
        return filtered.length
    }

    const formatPrice = (value: string | any) => {
        return value.substring(0, value.length - 3)
    }

    return (
        <Container>
            <Close>
                <IoIosClose onClick={() => { dispatch(removeProduct(props?.product?.name)) }} size={19} />
            </Close>
            <BoxImg>
                <img src={props?.product?.photo} />
            </BoxImg>
            <Name>{props?.product?.name}</Name>
            <Section>
                <BoxQtd>
                    <label><GrFormSubtract onClick={() => { dispatch(removeProductUnd(props?.product)) }} size={10} /></label>
                    <label>{countItems()}</label>
                    <label>
                        <GrFormAdd onClick={() => { dispatch(setProduct(props.product)) }} size={10} />
                    </label>
                </BoxQtd>
                <Value>R$ {formatPrice("" + props?.product?.price)}</Value>
            </Section>


        </Container>
    )
}

export default CardItemCheckoutMobile