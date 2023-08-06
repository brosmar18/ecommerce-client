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
        <div>
            Address Form
        </div>
    )
}

export default AddressForm;
