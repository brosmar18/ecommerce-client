import { Box, Checkout, FormControlLabel, Typography } from '@mui/material';
import AddressForm from './AddressForm';

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    hadleChange,
    setFieldValue,
}) => {
  return (
    <Box m="30px auto">
        <Box>
            <Typography sx={{ mb: "15px"}} fontSize="18px">
                Billing Information
            </Typography>
        </Box>
    </Box>
  )
}

export default Shipping;
