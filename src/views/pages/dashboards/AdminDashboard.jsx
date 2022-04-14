import { Grid } from '@mui/material';

const AdminDashboard = () => {
    return (
        <Grid container alignItems="stretch">
            <Grid item md={2}>
                Side bar
            </Grid>
            <Grid item md={10}>
                main div
            </Grid>
        </Grid>
    );
};

export default AdminDashboard;
