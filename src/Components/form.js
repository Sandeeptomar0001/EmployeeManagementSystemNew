import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box mt={5} >
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form>
            <Box display="flex" flexDirection="column">
              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                name="name"

              />
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                name="username"

              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                name="email"

              />
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                name="password"

              />
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default App;
