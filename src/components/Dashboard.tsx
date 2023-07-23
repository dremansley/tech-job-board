import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Typography from "@mui/joy/Typography";

const Dashboard = () => {

    const WelcomeText = styled(Typography)({
        fontWeight: 600,
        marginRight: "15px",
        marginBottom:"5px",
        marginLeft:"20px",
        marginTop:"0px"
    });

    return (
        <>
            <Box sx={{display:"flex",flexDirection:"column", pt:1, pb:2}}>
                <WelcomeText level="h6">👋 Welcome Back, Andre!</WelcomeText>
                {/*<WelcomeText level={"body2"}>Discover your next career move now! 🔥</WelcomeText>*/}

                {/*List of recent searches*/}
            </Box></>
    )
}
export default Dashboard
