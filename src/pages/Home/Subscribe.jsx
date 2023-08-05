import { useState } from "react";
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";


const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box>
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  )
}

export default Subscribe;
