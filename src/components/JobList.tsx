import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const WelcomeText = styled(Typography)({
    fontWeight: 600,
    margin: "10px",
});

const JobList = () => {
    return (

        <>
            <WelcomeText variant="h6">👋 Welcome Back, Andre!</WelcomeText>

            </>
    );
};

export default JobList;
