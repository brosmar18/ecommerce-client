import { Box, Checkout, FormControlLabel, Typography } from '@mui/material';
import AddressForm from './AddressForm';
import { Add, CheckBox } from '@mui/icons-material';

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
            <Box mb="20px">
                <FormControlLabel 
                label="Same as Shipping Address"
                    control={
                        <CheckBox 
                            defaultChecked
                            value={values.shippingAddress.isSameAddress}
                            onChange={() => 
                                setFieldValue(
                                    "shippingAddress.isSameAddress",
                                    !values.shippingAddress.isSameAddress
                                )
                            }
                        />
                    }
                />

            </Box>
        </Box>
    )
}

export default Shipping;
