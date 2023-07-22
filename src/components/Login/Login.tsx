import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControl, FormLabel, Input, Button} from "@mui/joy";
import Key from "@mui/icons-material/Key";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SignInWithGoogleButton from "./SignInWithGoogleButton.tsx";

const Login = () => {
return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 4, mt: 10 }}>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 0, mb: 4 }}>Login</Typography>
        <FormControl sx={{ width: { xs: "85vw", md: "30vw" } , display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ alignItems: "center", mb:3, width:"100%"}}>
                <FormLabel sx={{ mr: 1}}>Username or Email</FormLabel>
                <Input placeholder="Enter your username or email" variant="plain" size="md"
                startDecorator={<PersonOutlineOutlinedIcon/>}/>
            </Box>
            <Box sx={{ alignItems: "center", mb:2, width:"100%" }}>
                <FormLabel sx={{ mr: 1 }}>Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    startDecorator={<Key />}
                    size="md"
                />
            </Box>
            <Button variant={"solid"} sx={{width:"100%", mb:4}} color={"info"}>Login</Button>

            <Typography variant={"subtitle2"} sx={{fontWeight:600}}>OR</Typography>
            <SignInWithGoogleButton/>
            <Typography variant={"caption"} sx={{mt:2, mb:2}}>Don't have an account yet? Sign Up</Typography>

        </FormControl>
    </Box>

)
}
export default Login;
