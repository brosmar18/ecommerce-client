import { useState } from "react";
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";


const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive 30% off your first order at checkout
      </Typography>
      <Box>
        <InputBase 
          placeholder="Enter Email"
          sx={{ ml: 1, flex: 1}}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Box>
    </Box>
  )
}

export default Subscribe;
