import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import { Box, Button, Container, Divider, List, ListItem } from "@mui/material";
import { useRouter } from "next/router";
import Product from "../components/Product";

const Cart: NextPage = () => {
  const router = useRouter();

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
            <ListItem alignItems="flex-start">
              <Product />
            </ListItem>
            <Divider variant="inset" component="li" />
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
