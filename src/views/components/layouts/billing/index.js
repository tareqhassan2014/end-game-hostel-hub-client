import Grid from '@mui/material/Grid';
import DefaultInfoCard from '../../examples/Cards/InfoCards/DefaultInfoCard';
import MasterCard from '../../examples/Cards/MasterCard';
import Footer from '../../examples/Footer';
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar';
import MDBox from '../../MDBox';
import BillingInformation from './components/BillingInformation';
import Invoices from './components/Invoices';
import PaymentMethod from './components/PaymentMethod';
import Transactions from './components/Transactions';

function Billing() {
    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini />
            <MDBox mt={8}>
                <MDBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} xl={6}>
                                    <MasterCard
                                        number={4562112245947852}
                                        holder="jack peterson"
                                        expires="11/22"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        icon="account_balance"
                                        title="salary"
                                        description="Belong Interactive"
                                        value="+$2000"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        icon="paypal"
                                        title="paypal"
                                        description="Freelance Payment"
                                        value="$455.00"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <PaymentMethod />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Invoices />
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <BillingInformation />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Transactions />
                        </Grid>
                    </Grid>
                </MDBox>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Billing;
