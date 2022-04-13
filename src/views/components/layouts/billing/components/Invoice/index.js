import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';

function Invoice({ date, id, price, noGutter }) {
    return (
        <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={1}
            pr={1}
            mb={noGutter ? 0 : 1}
        >
            <MDBox lineHeight={1.125}>
                <MDTypography
                    display="block"
                    variant="button"
                    fontWeight="medium"
                >
                    {date}
                </MDTypography>
                <MDTypography
                    variant="caption"
                    fontWeight="regular"
                    color="text"
                >
                    {id}
                </MDTypography>
            </MDBox>
            <MDBox display="flex" alignItems="center">
                <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                >
                    {price}
                </MDTypography>
                <MDBox
                    display="flex"
                    alignItems="center"
                    lineHeight={1}
                    ml={3}
                    sx={{ cursor: 'pointer' }}
                >
                    <Icon fontSize="small">picture_as_pdf</Icon>
                    <MDTypography variant="button" fontWeight="bold">
                        &nbsp;PDF
                    </MDTypography>
                </MDBox>
            </MDBox>
        </MDBox>
    );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
    noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    noGutter: PropTypes.bool,
};

export default Invoice;
