import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

export const FooterBox = styled(Box)(({theme}) => ({
    backgroundColor: '#0e0c25',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: '10px 30px',
}))
