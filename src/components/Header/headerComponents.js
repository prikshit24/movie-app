import { Typography, Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export const HeaderBox = styled(Box)(({theme}) => ({
    backgroundColor: '#102030',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 30px',
}))

export const SearchBox = styled(Box)(({thrmr}) => ({
    display: 'flex',
    gap: 20,
}))

export const SearchField = styled(TextField)(({theme}) => ({
    fontSize: 20,
}))

export const Search = styled(SearchIcon)(({theme}) => ({
    color:'#fff',
}))

export const UserIcon = styled(AccountCircleIcon)(({theme}) => ({
    height: 40,
    width: 40,
    color: '#0072e5',
    cursor: 'pointer',
}))