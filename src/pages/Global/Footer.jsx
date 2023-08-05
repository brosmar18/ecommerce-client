import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";


function Footer() {
    const {
        palette: { neutral },
    } = useTheme();


    return (
        <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
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
                <Box>
                    <Typography>
                        About Us
                    </Typography>
                    <Typography>Careers</Typography>
                    <Typography>Our Stores</Typography>
                    <Typography>Terms & Conditions</Typography>
                    <Typography>Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography>
                        Customer Service
                    </Typography>
                    <Typography>Help Center</Typography>
                    <Typography>Track Your Order</Typography>
                    <Typography>Corporate & Bulk Purchasing</Typography>
                    <Typography>Returns</Typography>
                </Box>
                <Box>
                    <Typography>
                        Contact Us
                    </Typography>
                    <Typography>
                        423 SouthLane Street, NW, Narnia, NV 3920
                    </Typography>
                    <Typography>
                        Email: ecommercewebsite@email.com
                    </Typography>
                    <Typography>
                        (378) 730-9389
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;
