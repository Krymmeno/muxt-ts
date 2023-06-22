import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Product from "./Product";
import { PRODUCTS } from "../products";
import Grid from "@mui/material/Grid";
import {
  Breadcrumbs,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
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
        <Box sx={{ marginBottom: 3, textAlign: "left" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Schmerzen
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {PRODUCTS.map((product) => (
            <Grid key={product.id} item xs={6} sm={4} md={4}>
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
