import { Bar, BoxImg, BoxInfor, Container, Descript } from './styled'
import { FiShoppingBag } from "react-icons/fi";
import { Product } from 'redux/slices/getProductsSlice';
import { useAppDispatch } from 'app/hooks';
import { setProduct } from 'redux/slices/cartSlice';

export interface CardsProps {
    product: Product | undefined;
}


const CardProduct: React.FC<CardsProps> = (props) => {

    const dispatch = useAppDispatch();

    const addCart = () => {
        dispatch(setProduct(props.product))
    }

    const formatPrice = (value: string | any) => {
        return value.substring(0, value.length -3)
    }

    return (
        <Container>
            <BoxImg>
                <img src={props.product?.photo} />
            </BoxImg>
            <BoxInfor>
                <div>
                    <label>{props?.product?.name}</label>
                    <span>
                        <label>R$ {formatPrice(props?.product?.price)}</label>
                    </span>
                </div>
                <Descript>{props?.product?.description}</Descript>
            </BoxInfor>
            <Bar onClick={() => { addCart() }}>
                <FiShoppingBag size={15} />
                <label>Comprar</label>
            </Bar>
        </Container>
    )
}

export default CardProduct