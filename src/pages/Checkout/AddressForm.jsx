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
    return (
        <div>
            Address Form
        </div>
    )
}

export default AddressForm;
