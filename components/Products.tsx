import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Product from "./Product";
import { PRODUCTS } from "../products";

const Products = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          { PRODUCTS.map((product) => 
          <div key={product.id}>
            <ListItem alignItems="flex-start">
              <Product 
                id={product.id} 
                name={product.name} 
                description={product.description} 
                image={product.image}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>) }
        </List>
      </Box>
    </Container>
  );
};

export default Products;
