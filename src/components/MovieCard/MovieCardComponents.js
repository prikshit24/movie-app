import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const CardContainer = styled(Box)(({theme}) => ({
    // padding: 20,
    backgroundColor: "#242222",
    width: 320,
    display: 'flex',
    flexDirection:'column',
    cursor:'pointer',
    // alignItems:'center',
}))

export const Poster = styled('img')(({theme}) => ({
    height: 400,
    width: 320,
}))

export const TextBox = styled(Box)(({theme}) => ({
    padding:15,
}))

export const TileText = styled(Typography)(({theme}) => ({
    color: "#fff",
    fontSize: 20,
    textDecoration: 'none',
}))
