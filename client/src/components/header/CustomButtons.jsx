import { Box , Button , Typography , styled , Badge  } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState , useContext } from "react";
import {Link} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { DataContext } from "../../context/DataProviders";

//components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";


const Wrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    alignItems: 'center',
    '& > *' : {
        marginRight: '40px !important',  
        fontSize: '16px',
    },
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))

const Container = styled(Link)(({theme}) => ({
    display: 'flex',
    textDecoration : 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))
    

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform : none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;   
`

const CustomButtons = () => {

    const [open , setOpen] = useState(false);

    const {account , setAccount} = useContext(DataContext);

    const { cartItems} = useSelector(state => state.cart)

    const openDialog = () => {
        setOpen(!open);
    }

  return(
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} /> :
            <LoginButton variant ='contained' onClick={() => openDialog()}>Login</LoginButton>
        }

        <Typography style= {{marginTop:3 , width: 135}}>Become a Seller </Typography>
        <Typography style = {{marginTop: 3 }}>More</Typography>

        <Container to='/cart'>
            <Badge badgeContent={cartItems.length} color='secondary'>
                <ShoppingCartIcon />
            </Badge>
            <Typography style= {{marginLeft: 10}} >Cart</Typography>
            
        </Container>
        <LoginDialog open={open} setOpen = {setOpen}/>

    </Wrapper>
  )
};

export default CustomButtons;
