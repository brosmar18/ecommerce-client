import { getIn } from "formik";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

const AddressForm = ({
    type,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
}) => {
    const isNonMobile = useMediaQuery('(min-width:600px)');

    // improve readability
    const formattedName = (field) => `${type}.${field}`;

    const formattedError = (field) => Boolean(
        getIn(touched, formattedName(field) && getIn(errors, formattedName(field)))
    );

    const formattedHelper = (field) =>
        getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));


    return (
        <Box
            display='grid'
            gap='15px'
            gridTemplateColumns='repeat(4, minmax(0, 1fr))'
            sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
            }}
        >
            <TextField
                fullWidth
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name={formattedName("firstName")}
                error={formattedError("firstName")}
                helperText={formattedHelper("firstName")}
                sx={{ gridColumn: "span 2" }}
            />

        </Box>
    )
}

export default AddressForm;
