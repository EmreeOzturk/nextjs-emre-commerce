import ListedProducts from '../components/cart/ListedProducts'
import CartTitles from '../components/cart/CartTitles'
import CartContainer from '../components/containers/CartContainer'

const CartPage = () => {
    return (
        <CartContainer col>
            <CartTitles />
            <ListedProducts />
        </CartContainer>
    )
}

export default CartPage