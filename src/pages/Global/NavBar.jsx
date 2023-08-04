import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, Icon, IconButton } from '@mui/material';
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
      <Box>
        <Box>
          Ecommerce Website
          <Box>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <PersonOutline />
            </IconButton>
            <Badge>
              <IconButton>
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar;
