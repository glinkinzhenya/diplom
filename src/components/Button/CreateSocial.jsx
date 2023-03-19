import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
    {
        url: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM',
        title: 'Instagram',
        width: '20%',
        height: '15vh'
    },
    {
        url: 'https://techcrunch.com/wp-content/uploads/2021/01/facebook-earnings-2021.jpg',
        title: 'FaceBook',
        width: '20%',
    },
    {
        url: 'data:image/jpeg;base64,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',
        title: 'Telegram',
        width: '20%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '15vh',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function CreatSocial() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '50%' }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(0.5)} + 3px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}