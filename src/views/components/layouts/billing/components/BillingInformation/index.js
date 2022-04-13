import Card from '@mui/material/Card';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import Bill from '../Bill';

function BillingInformation() {
    return (
        <Card id="delete-account">
            <MDBox pt={3} px={2}>
                <MDTypography variant="h6" fontWeight="medium">
                    Billing Information
                </MDTypography>
            </MDBox>
            <MDBox pt={1} pb={2} px={2}>
                <MDBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                >
                    <Bill
                        name="oliver liam"
                        company="viking burrito"
                        email="oliver@burrito.com"
                        vat="FRB1235476"
                    />
                    <Bill
                        name="lucas harper"
                        company="stone tech zone"
                        email="lucas@stone-tech.com"
                        vat="FRB1235476"
                    />
                    <Bill
                        name="ethan james"
                        company="fiber notion"
                        email="ethan@fiber.com"
                        vat="FRB1235476"
                        noGutter
                    />
                </MDBox>
            </MDBox>
        </Card>
    );
}

export default BillingInformation;
