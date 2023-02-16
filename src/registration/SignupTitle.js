import DniImage from '../assets/dnimage.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function SignupTitle(){
    return (
        <Box>
            <Grid container justifyContent="right">
                <img src={DniImage}></img>
            </Grid>
        </Box>
    )
}

export default SignupTitle;