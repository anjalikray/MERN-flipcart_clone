import { styled , Menu , MenuItem , Box , Typography } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { useState } from 'react';

const Component = styled(Menu)`
    margin-top: 5px;

`

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`

const Profile = ({account , setAccount}) => {

    const [open , setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const logoutUser = () => {
        setAccount('')
    }

    return(
        <>
            <Box>
                <Typography onClick={handleClick} style={{marginTop: 3 , cursor: 'pointer'}}>{account}</Typography>
                <Component
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}                    
                >
                    <MenuItem onClick={() => {handleClose(); logoutUser();}}>
                        <PowerSettingsNewIcon color="primary" fontSize="small" />
                        <Logout>Logout</Logout>
                    </MenuItem>
                </Component>
            </Box>
        </>
    )
}

export default Profile;