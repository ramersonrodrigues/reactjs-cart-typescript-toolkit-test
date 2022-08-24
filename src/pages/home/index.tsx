import { useAppSelector } from 'app/hooks'
import BarMenu from 'components/bar-menu'
import CardProduct from 'components/card-product'
import CardProductLoading from 'components/card-product-loading'
import Checkout from 'components/checkout'
import Rodape from 'components/rodape'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts, Product } from 'redux/slices/getProductsSlice'
import { AppDispatch } from 'redux/store'
import { Body, Container, GridProducts } from './styled'

const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const products = useAppSelector(state => state.getProductsSlice);

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    console.log("PRODUCTS: ", products)
  }, [products])

  return (
    <Container>
      <Checkout />
      <BarMenu />
      <Body>
        <GridProducts>
          {products.loading ?
            Array(8).fill(<CardProductLoading />) :
            products?.products?.map((item: Product | any) => <CardProduct key={item.id} product={item} />)}
        </GridProducts>
      </Body>
      <Rodape />
    </Container>
  )
}

export default Home