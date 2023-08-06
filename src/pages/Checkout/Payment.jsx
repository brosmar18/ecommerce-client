import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
    return (
        <Box>
            <Typography sx={{ mg: '15px' }} fontSize='18px'>
                Contact Info
            </Typography>
            <TextField
                fullWidth
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4", marginBottom: "15px" }}
            />
        </Box>
    )
}

export default Payment;
