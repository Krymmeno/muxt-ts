import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Product from "./Product";
import { PRODUCTS } from "../products";
import Grid from "@mui/material/Grid";
import { Breadcrumbs, InputAdornment, Link, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Breadcrumbs */}
        <Box sx={{ marginBottom: 1 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Schmerzen</Typography>
          </Breadcrumbs>
        </Box>
      {/* Search bar */}
      <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            placeholder="Search..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

      {/* Header */}
      <Box sx={{ marginBottom: 3, textAlign: 'left' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Schmerzen
          </Typography>
        </Box>

        <Grid container spacing={2}>
          { PRODUCTS.map((product) => 
            <Grid item xs={6} sm={4} md={4}>
              <Product 
                id={product.id} 
                name={product.name} 
                description={product.description} 
                image={product.image}
              />
            </Grid>
          )}
<!--           <Grid item xs={6} sm={4} md={4}>
            <Product
              name="ratioDolor® Ibuprofen 400 mg"
              imageSrc="/images/ratioDolor.jpg"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Product
              name="Ibumetin® forte 400mg"
              imageSrc="/images/ibumetin.jpg"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Product
              name="NUROFEN® Rapid Weichkapseln 400mg"
              imageSrc="/images/nuprofen.jpg"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Product
              name="Redcare Halstabletten Propolis"
              imageSrc="/images/redcare.jpg"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Product
              name="Mexalen® 500 mg Tabletten"
              imageSrc="/images/mexalen.jpg"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Grid> -->
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
