import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  // Destructuring attributes and nested image data
  const {
    attributes: {
      category,
      price,
      name,
      image: {
        data: {
          attributes: {
            formats: {
              medium: { url = "" } = {},  // Defaulting URL to an empty string in case it's undefined
            } = {},
          } = {},
        } = {},
      } = {},
    } = {},
  } = item;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={name}
          width="300px"
          height="400px"
          src={url}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        {isHovered && (  // A more React-ish way to conditionally render elements
          <Box
            position="absolute"
            bottom="10%"
            left="0"
            width="100%"
            padding="0 5%"
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                display="flex"
                alignItems="center"
                backgroundColor={shades.neutral[100]}
                borderRadius="3px"
              >
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                  <RemoveIcon />
                </IconButton>
                <Typography color={shades.primary[300]}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                onClick={() => {
                  dispatch(addToCart({ item: { ...item, count } }));
                }}
                sx={{ backgroundColor: shades.primary[300], color: "white" }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
