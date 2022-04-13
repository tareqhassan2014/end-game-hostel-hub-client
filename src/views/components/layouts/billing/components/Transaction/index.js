// @mui material components
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import MDBox from 'src/views/components/MDBox';
import MDButton from 'src/views/components/MDButton';
import MDTypography from 'src/views/components/MDTypography';

function Transaction({ color, icon, name, description, value }) {
    return (
        <MDBox key={name} component="li" py={1} pr={2} mb={1}>
            <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <MDBox display="flex" alignItems="center">
                    <MDBox mr={2}>
                        <MDButton
                            variant="outlined"
                            color={color}
                            iconOnly
                            circular
                        >
                            <Icon sx={{ fontWeight: 'bold' }}>{icon}</Icon>
                        </MDButton>
                    </MDBox>
                    <MDBox display="flex" flexDirection="column">
                        <MDTypography
                            variant="button"
                            fontWeight="medium"
                            gutterBottom
                        >
                            {name}
                        </MDTypography>
                        <MDTypography
                            variant="caption"
                            color="text"
                            fontWeight="regular"
                        >
                            {description}
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDTypography
                    variant="button"
                    color={color}
                    fontWeight="medium"
                    textGradient
                >
                    {value}
                </MDTypography>
            </MDBox>
        </MDBox>
    );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
    ]).isRequired,
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Transaction;
