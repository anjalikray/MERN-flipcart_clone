import { useState } from 'react';

import { AppBar , Box , Toolbar , Typography , Drawer , IconButton , List , ListItem , styled} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

//components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px; 
`

const Headers = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';    
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [ open , setOpen ] = useState(false);

    const Component = styled(Link)`
        margin-left: 12%;
        line-height:0;
        text-decoration: none;
        color: inherit;
    ` 
    const SubHeading = styled(Typography)`
        font-size: 10px;
        font-style: italic;
    `
    const PlusImage = styled('img')({
        width:10,
        height:10,
        marginLeft:4
    })

    const CustomButtonWrapper = styled(Box)(({theme}) => ({
        margin: '0 2% 0 auto',
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            display: 'none',
        }                   

    }))

    const MenuButton = styled(IconButton)(({theme})=>({
        display: 'none',
        [theme.breakpoints.down('md')]:{
            display: 'block'
        }
    }))
        
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <StyledHeader> 
            <Toolbar style= {{minHeight: 55}}>
                    
                <MenuButton style={{color: 'inherit'}} onClick={handleOpen}>
                    <MenuIcon/>
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} alt="logo" style = {{ width: 75 }}/>
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component = 'span' style = {{color : '#ffe500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src = {subURL} alt = 'sublogo' />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons
                     />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Headers;