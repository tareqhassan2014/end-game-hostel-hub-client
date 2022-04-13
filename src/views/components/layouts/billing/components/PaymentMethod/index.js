import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
// Images
import masterCardLogo from 'src/assets/images/logos/mastercard.png';
import visaLogo from 'src/assets/images/logos/visa.png';
import useController from 'src/hooks/useController';
import MDBox from 'src/views/components/MDBox';
import MDButton from 'src/views/components/MDButton';
import MDTypography from 'src/views/components/MDTypography';

function PaymentMethod() {
    const [controller] = useController();
    const { darkMode } = controller;

    return (
        <Card id="delete-account">
            <MDBox
                pt={2}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <MDTypography variant="h6" fontWeight="medium">
                    Payment Method
                </MDTypography>
                <MDButton variant="gradient" color="dark">
                    <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
                    &nbsp;add new card
                </MDButton>
            </MDBox>
            <MDBox p={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <MDBox
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={3}
                            sx={{
                                border: ({
                                    borders: { borderWidth, borderColor },
                                }) => `${borderWidth[1]} solid ${borderColor}`,
                            }}
                        >
                            <MDBox
                                component="img"
                                src={masterCardLogo}
                                alt="master card"
                                width="10%"
                                mr={2}
                            />
                            <MDTypography variant="h6" fontWeight="medium">
                                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
                            </MDTypography>
                            <MDBox
                                ml="auto"
                                lineHeight={0}
                                color={darkMode ? 'white' : 'dark'}
                            >
                                <Tooltip title="Edit Card" placement="top">
                                    <Icon
                                        sx={{ cursor: 'pointer' }}
                                        fontSize="small"
                                    >
                                        edit
                                    </Icon>
                                </Tooltip>
                            </MDBox>
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MDBox
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={3}
                            sx={{
                                border: ({
                                    borders: { borderWidth, borderColor },
                                }) => `${borderWidth[1]} solid ${borderColor}`,
                            }}
                        >
                            <MDBox
                                component="img"
                                src={visaLogo}
                                alt="master card"
                                width="10%"
                                mr={2}
                            />
                            <MDTypography variant="h6" fontWeight="medium">
                                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
                            </MDTypography>
                            <MDBox
                                ml="auto"
                                lineHeight={0}
                                color={darkMode ? 'white' : 'dark'}
                            >
                                <Tooltip title="Edit Card" placement="top">
                                    <Icon
                                        sx={{ cursor: 'pointer' }}
                                        fontSize="small"
                                    >
                                        edit
                                    </Icon>
                                </Tooltip>
                            </MDBox>
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
        </Card>
    );
}

export default PaymentMethod;
