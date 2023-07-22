import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DataObjectIcon from '@mui/icons-material/DataObject';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Typography from "@mui/joy/Typography"
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import {useNavigate} from "react-router-dom";
import JobSearchForm from "./JobSearchForm.tsx";

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {

    const pages = [
        { name: 'Find Jobs', icon: <WorkOutlineOutlinedIcon/>, url:"/" },
        { name: 'Saved', icon: <BookmarksOutlinedIcon/>, url: "/saved"}
    ]

    const accountPages = [
        { name: 'Login', icon: '', url: "/login"},
        { name: 'Register', icon: '', url: "/register"}
    ]
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" elevation={0} sx={{background:"#FFFFFF"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <DataObjectIcon sx={{ display: { xs: 'none', md: 'flex', color:"#2f3542" }, mr: 1 }} />
                    <Typography
                        level="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            textDecoration: 'none',
                            color:"#2f3542"
                        }}
                    >
                        {props.title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="default"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <WorkOutlineOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        level="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#2f3542',
                            textDecoration: 'none',
                        }}
                    >
                        {props.title}
                    </Typography>

                    <JobSearchForm/>
                    {/*<Box sx={{ flexGrow: 1, ml:10, display: { xs: 'none', md: 'flex' } }}>*/}
                    {/*    {pages.map((page) => (*/}
                    {/*        <Button*/}
                    {/*            key={page.name}*/}
                    {/*            onClick={()=> navigate(page.url)}*/}
                    {/*            sx={{ my: 1 }}*/}
                    {/*            className={"menu-button"}*/}
                    {/*            startIcon={page.icon}*/}
                    {/*        >*/}

                    {/*            {page.name}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}

                    <Box sx={{ flexGrow: 0 }}>

                        {accountPages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={()=>navigate(page.url)}
                                sx={{ my: 1 }}
                                className={"menu-button"}
                                startIcon={page.icon}
                            >

                                {page.name}
                            </Button>
                        ))}

                        {/*<Tooltip title="Open settings">*/}
                        {/*    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                        {/*        <Avatar alt="Andre" src="/" />*/}
                        {/*    </IconButton>*/}
                        {/*</Tooltip>*/}
                        {/*<Menu*/}
                        {/*    sx={{ mt: '45px' }}*/}
                        {/*    id="menu-appbar"*/}
                        {/*    anchorEl={anchorElUser}*/}
                        {/*    anchorOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    keepMounted*/}
                        {/*    transformOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    open={Boolean(anchorElUser)}*/}
                        {/*    onClose={handleCloseUserMenu}*/}
                        {/*>*/}
                        {/*    {settings.map((setting) => (*/}
                        {/*        <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                        {/*            <Typography textAlign="center">{setting}</Typography>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}
                        {/*</Menu>*/}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
