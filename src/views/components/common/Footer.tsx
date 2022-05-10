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

const Footer = () => {
    return (
        <Box
            sx={{
                pb: 5,
                bgcolor: blueGrey[900],
            }}
        >
            <Container>
                <Grid container>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ mb: 5, color: 'white' }}
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
                            variant="subtitle1"
                            sx={{ mb: 5, color: 'white' }}
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
                            sx={{ mb: 5, color: 'white' }}
                        >
                            Blog Categories
                        </Typography>

                        <Grid container sx={{ color: '#9bb8cc' }}>
                            <Grid item md={6} xs={6}>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Improve Life
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Productivity
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Sport
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Tools
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Life
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Self Discipline
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: 13 }}>
                                    Technology
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ mb: 5, color: 'white' }}
                        >
                            Tags
                        </Typography>
                        <MyButton size="small">productivity</MyButton>
                        <MyButton size="small">relax</MyButton>
                        <br />
                        <MyButton size="small">self discipline</MyButton>
                        <MyButton size="small">software</MyButton>
                        <br />
                        <MyButton size="small">productivity</MyButton>
                        <MyButton size="small">productivity</MyButton>
                        <br />
                        <MyButton size="small">tools</MyButton>
                        <MyButton size="small">web</MyButton>
                        <MyButton size="small">view</MyButton>
                        <MyButton size="small" onClick={refreshPage}>
                            work
                        </MyButton>
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
