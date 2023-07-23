import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Avatar, Divider, Tooltip} from "@mui/joy";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {useNavigate} from "react-router-dom";
import {Dispatch, SetStateAction} from "react";
import {ActivePageInterface} from "../Interfaces/ActivePageInterface.tsx";

const SideBarStyled = styled(Box)({
    fontWeight: 600,
    paddingLeft: "8px",
    paddingRight: "8px",
    backgroundColor: "#2f3542",
    height: "100vh",
    borderRight: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingTop:"15px"
});

interface SidebarProps {
    activePage: ActivePageInterface,
    setActivePage: Dispatch<SetStateAction<ActivePageInterface>>
}

const Sidebar = (props: SidebarProps) => {

    const menuItems = [
        {
            title: 'Dashboard',
            icon: <DashboardOutlinedIcon sx={{ color: 'white' }} />,
            path: '/',
        },
        {
            title: 'Find Jobs',
            icon: <SearchOutlinedIcon sx={{ color: '#bbb' }} />,
            path: '/search',
        },
        {
            title: 'Saved Jobs',
            icon: <BookmarksOutlinedIcon sx={{ color: '#bbb' }} />,
            path: '/saved-jobs',
        },
        {
            title: 'Messages',
            icon: <MessageOutlinedIcon sx={{ color: '#bbb' }} />,
            path: '/messages',
        },
        {
            title: 'Your Applications',
            icon: <DescriptionOutlinedIcon sx={{ color: '#bbb' }} />,
            path: '/applications',
        },
        {
            title: 'Browse Companies',
            icon: <BusinessOutlinedIcon sx={{ color: '#bbb' }} />,
            path: '/companies',
        },
    ];


    const navigate = useNavigate()

    const handleMenuClick = (path: string, title: string, icon: object) => {
        props.setActivePage({title:title, icon:icon})
        navigate(path)
    }

    return (
        <SideBarStyled>
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="L" src="/" sx={{backgroundColor:"rgba(0,0,0,0.2)", color:"#FFFFFF"}} />
            </IconButton>

            <>
                {menuItems.map((item) => (
                    <Tooltip key={item.title} title={item.title} size="sm" placement="right">
                        <IconButton onClick={()=>handleMenuClick(item.path, item.title, item.icon)}>{item.icon}</IconButton>
                    </Tooltip>
                ))}
                <Divider />
                {/* Add more tooltips here as needed */}
                <Tooltip title="Settings" size="sm" placement="right">
                    <IconButton>
                        <SettingsOutlinedIcon sx={{ color: '#bbb' }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Help" size="sm" placement="right">
                    <IconButton>
                        <HelpOutlineOutlinedIcon sx={{ color: '#bbb' }} />
                    </IconButton>
                </Tooltip>
            </>


        </SideBarStyled>
    )
}
export default Sidebar
