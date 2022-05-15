import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/system';
import visaCard from 'src/assets/images/logos/visaCard.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: 'https://i.ibb.co/vcr8XHn/pexels-cottonbro-5158464-min.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/GMWX69y/pexels-cottonbro-5158945-min.jpg',
        title: 'Burger',
    },
    {
        img: 'https://i.ibb.co/Sv69tDG/pexels-binyamin-mellish-186181-min.jpg',
        title: 'Camera',
    },
    {
        img: 'https://i.ibb.co/9V8zSxV/pexels-cottonbro-5137789-min.jpg',
        title: 'Coffee',
        cols: 2,
    },
];

// https: //i.ibb.co/9Zj2D2h/pexels-george-pak-7968277-min.jpg
// https: //i.ibb.co/F3SLK7Q/pexels-ketut-subiyanto-4907454-min.jpg

const MyButton = styled(Button)({
    backgroundColor: '#43515a',
    color: 'white',
    padding: '5px 15px',
    margin: 2,
    fontSize: 10,
    borderRadius: 3,
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
    },
});

function refreshPage() {
    window.location.reload();
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const footerBg = {
    background: `url(https://i.ibb.co/2qf7JbV/aa.jpg)`,
    backgroundColor: `rgba(33, 33, 33,0.95)`,
    backgroundBlendMode: `darken, luminosity`,
    backgroundPossition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `100%`,
};

const Footer = () => {
    return (
        <Box
            sx={{
                pb: 5,
                fontFamily: "'Skranji' , cursive",
            }}
            style={footerBg}
        >
            <Container>
                <Grid container>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 5,
                                color: 'white',
                                fontFamily: "'Monoton',cursive",
                            }}
                        >
                            Hostel Hub
                        </Typography>

                        <Grid container sx={{ color: '#9bb8cc', width: '90%' }}>
                            <Typography variant="caption">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus nisi dignissimos amet
                                cum ea ab placeat. Cupiditate quod est corporis
                                voluptatum quia. Et obcaecati Tempore, expedita
                                cumque! Provident.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 5,
                                color: 'white',
                                fontFamily: "'Skranji' , cursive",
                            }}
                        >
                            Address & Contact
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                my: 2,
                                pr: 14,
                                fontSize: 13,
                                color: '#b2c3cb',
                            }}
                        >
                            1234 Somewhere Rd.Estronpark, TN 00018 United
                            States.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: { md: 18, sm: 16 },
                                color: 'white',
                            }}
                            gutterBottom
                        >
                            <EmailIcon sx={{ mr: 1 }} />
                            sales@example.com
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: { md: 18, sm: 16 },
                                my: 2,
                                color: 'white',
                            }}
                            gutterBottom
                        >
                            <LocalPhoneIcon sx={{ mr: 1 }} />
                            +01944981668
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 5,
                                color: 'white',
                                fontFamily: "'Skranji' , cursive",
                            }}
                        >
                            Travel Destinations
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            United Arab Amritas
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            United Kingdom
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            Australia
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            Maldives
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            Turkey
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mb: 5,
                                color: 'white',
                                fontFamily: "'Monoton',cursive",
                            }}
                        >
                            Instagram
                        </Typography>

                        {/* <Grid container spacing={1}>
                            <Grid item xs={4}>
                                
                            </Grid>
                           
                        </Grid> */}

                        <ImageList
                            sx={{
                                width: '100%',
                                height: '200px',
                                borderRadius: 2,
                            }}
                            variant="quilted"
                            cols={4}
                            rowHeight={98}
                        >
                            {itemData.map((item) => (
                                <ImageListItem
                                    key={item.img}
                                    cols={item.cols || 1}
                                    rows={item.rows || 1}
                                >
                                    <img
                                        {...srcset(
                                            item.img,
                                            121,
                                            item.rows,
                                            item.cols
                                        )}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
                <Divider />
                <Grid
                    container
                    sx={{
                        mt: 1,
                    }}
                >
                    <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                            alignItems: { md: 'center', sm: 'center' },
                            display: { md: 'flex', sm: 'flex' },
                            justifyContent: {
                                md: 'space-between',
                                sm: 'space-between',
                            },
                        }}
                    >
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            © Copyright 2022 Hostel Hub - All Right Reserved.
                        </Typography>
                        <Box
                            component="img"
                            src={visaCard}
                            alt="visa"
                            sx={{ height: 45, width: 85 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
