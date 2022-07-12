import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Container = styled(Box)(({ theme }) => ({
    paddingBlock: 30,
    display: 'flex',
}))

export const LeftBox = styled(Box)(({ theme }) => ({
    width: '75%',
}))

export const RightBox = styled(Box)(({ theme }) => ({
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
}))

export const TitleText = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontSize: 36,
}))

export const DetailText = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontSize: 16,
    display: 'flex',
}))

export const StarIcon = styled(StarRoundedIcon)(({ theme }) => ({
    color: '#fc9d05',
}))

export const ThumbUp = styled(ThumbUpRoundedIcon)(({ theme }) => ({
    color: '#0076ff',
}))

export const MovieIcon = styled(LocalMoviesOutlinedIcon)(({ theme }) => ({
    color: '#0076ff',
}))

export const CalendarIcon = styled(CalendarMonthIcon)(({ theme }) => ({
    color: '#0076ff',
}))

export const LeftText = styled(Typography)(({ theme }) => ({
    color: '#fff',
    width: 150,
    fontSize: 16,
}))
export const RightText = styled(Typography)(({ theme }) => ({
    color: '#0076ff',
    fontSize: 16,
}))

export const Poster = styled('img')(({ theme }) => ({
    width: '90%',
}))
