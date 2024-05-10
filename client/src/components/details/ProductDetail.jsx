import {Typography , Box , styled , Table , TableBody , TableRow , TableCell} from'@mui/material'

import LocalOffer from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledBadge = styled(LocalOffer)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top : 10px;
        border: none;
    } 
`

const ProductDetail = ({product}) => {
    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))


    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5 , fontSize: 14 , color: '#878787'}}>
                8 Ratings & 1 Reviews
                <Box component='span'><img src={fassured} alt="pic" style={{marginLeft: 20 , width: 77}} /></Box>
            </Typography>
            <Typography >
                <Box component='span' style={{fontSize : 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color: '#388e3c' , fontWeight:'600'}}>{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
            </Typography>   
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Get Extra 20% off upto ₹50 on 1 item T&C</Typography>
                <Typography><StyledBadge/>Get extra 30% off (price inclusive of cashback/coupon) T&C</Typography>
                <Typography><StyledBadge/>Sign up for Flipcart Pay Later and get Flipcart Gift Card Worth ₹100* Know More </Typography>
                <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyledBadge/>Get No Cost EMI on IT and Gaming Accessories T&C</Typography>
                <Typography><StyledBadge/>Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!Know More</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Seller</TableCell>
                        <TableCell >
                            <Box component='span' style={{color: '#2874f0'}}>Super ComNet</Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View more Sellers starting from {product.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src= {adURL} alt='ad' style={{width: 390}} />
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                    
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;