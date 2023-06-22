import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ShopContext } from "../context/shop-context";
import { ProductType } from "../products";

export default function Product({ id, name, description, image, amount }: ProductType) {
  const [expanded, setExpanded] = React.useState(false);
  const { cartItems, addToCart } = React.useContext(ShopContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name} // Medication name received from props
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img" // Corrected component value
        height="194"
        src={image} // Medication image source received from props
        alt="Medication Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        { amount !== undefined && amount > 0 && 
          <Typography color="text.secondary" mt={2}>
            Amount: {amount}
          </Typography>
        }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to shopping cart" onClick={() => addToCart(id)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
