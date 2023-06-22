import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import { Box, Button, Container, Divider, List, ListItem } from "@mui/material";
import { useRouter } from "next/router";
import Product from "../components/Product";
import { ShopContext } from "../context/shop-context";
import React from "react";
import { PRODUCTS } from "../products";

const Cart: NextPage = () => {
  const router = useRouter();
  const {cartItems, addToCart} = React.useContext(ShopContext);

  const handleCheckout = () => {
    router.push("checkout");
  };

  return (
    <div>
      <TopBar />
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
          { PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return <div key={product.id}>
                <ListItem alignItems="flex-start">
                  <Product 
                    id={product.id} 
                    name={product.name} 
                    description={product.description} 
                    image={product.image}
                    amount={cartItems[product.id]}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>;
            }
          })}
          </List>
        </Box>
      </Container>

      <Button
        variant="contained"
        onClick={handleCheckout}
        sx={{ mt: 3, ml: 1 }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
