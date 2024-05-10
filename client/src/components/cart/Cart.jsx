import {useSelector} from 'react-redux'

import { Grid , Box , Typography , Button , styled} from '@mui/material'

import CartItem from './CartItem'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'

const Container = styled(Grid)(({theme}) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '15px 10px'
    }
}))
  
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`
const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb( 0 0 0 / 10%);
    border-top : 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    color: #fff;
    width: 220px;
    border-radius: 2px;
    height: 51px;
    background: #fb641b;
`

const LeftComponent = styled(Grid)(({theme}) => ({
    paddingRight: '15px',
    [theme.breakpoints.down('md')]:{
        marginBottom: 15,
        paddingRight: '10px'
    }
}))    


const Cart = () => {

    const { cartItems } = useSelector(state => state.cart)

    return(
        <>
            {
                cartItems.length ? 
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item => {
                                return(
                                    <CartItem item={item}/>
                                )
                            })
                        }
                        <ButtonWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems} />
                    </Grid>
                </Container>
                : 
                <EmptyCart />
            }
        
        </>
    )
}

export default Cart;