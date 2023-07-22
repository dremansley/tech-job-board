import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { styled } from '@mui/material/styles';

const GoogleButton = styled(Button)({
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ddd',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 15px',
    cursor: 'pointer',
    marginTop:"20px",
    marginBottom:"20px",
    '&:hover': {
        backgroundColor: '#f2f2f2',
    },
});

const SignInWithGoogleButton = () => {
    return (
        <GoogleButton>
            <GoogleIcon sx={{mr:2}}/>
            Sign In with Google
        </GoogleButton>
    );
};

export default SignInWithGoogleButton;
