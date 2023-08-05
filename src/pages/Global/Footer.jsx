import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";


function Footer() {
    const {
        palette: { neutral },
    } = useTheme();


    return (
        <Box>
            <Box>
                <Box>
                    <Typography>
                        Ecommerce Website
                    </Typography>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;
