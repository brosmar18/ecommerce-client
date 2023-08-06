import { Box, Checkout, FormControlLabel, Typography } from '@mui/material';
import AddressForm from './AddressForm';
import { Add } from '@mui/icons-material';

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) => {
    return (
        <Box m="30px auto">
            <Box>
                <Typography sx={{ mb: "15px" }} fontSize="18px">
                    Billing Information
                </Typography>
                <AddressForm
                    type='billingAddress'
                    values={values.billingAddress}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
            </Box>
        </Box>
    )
}

export default Shipping;
