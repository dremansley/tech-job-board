import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControl, FormLabel, Input, Button} from "@mui/joy";
import Key from "@mui/icons-material/Key";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SignInWithGoogleButton from "./SignInWithGoogleButton.tsx";
import React, {useState} from "react";

const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("")

    const handleUsernameChange = (newUsernameValue:string) => setUsername(newUsernameValue)
    const handlePasswordChange = (newPasswordValue: string) => setPassword(newPasswordValue)


return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 4, mt: 10 }}>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 0, mb: 4 }}>Login</Typography>
        <FormControl sx={{ width: { xs: "85vw", md: "30vw" } , display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ alignItems: "center", mb:3, width:"100%"}}>
                <FormLabel sx={{ mr: 1}}>Username or Email</FormLabel>
                <Input placeholder="Enter your username or email" variant="plain" size="md"
                startDecorator={<PersonOutlineOutlinedIcon/>} value={username} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleUsernameChange(event.target.value)}/>
            </Box>
        </FormControl>
        <FormControl sx={{ width: { xs: "85vw", md: "30vw" } , display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ alignItems: "center", mb:2, width:"100%" }}>
                <FormLabel sx={{ mr: 1 }}>Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    startDecorator={<Key />}
                    size="md"
                    value={password}
                    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handlePasswordChange(event.target.value)}
                />
                <Button variant={"solid"} sx={{width:"100%", mt:4,mb:2}} color={"info"}>Login</Button>
            </Box>
        </FormControl>

            <Typography variant={"subtitle2"} sx={{fontWeight:600}}>OR</Typography>
            <SignInWithGoogleButton/>
            <Typography variant={"caption"} sx={{mt:2, mb:2}}>Don't have an account yet? Sign Up</Typography>


    </Box>

)
}
export default Login;
