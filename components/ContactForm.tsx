import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  Paper,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function PaymentForm() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Contact Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              label="Your Inquiry"
              multiline
              fullWidth
              rows={10}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" startIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
