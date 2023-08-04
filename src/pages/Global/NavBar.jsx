import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { shades } from '../../theme';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <Box>
      NavBar
    </Box>
  )
}

export default NavBar;
