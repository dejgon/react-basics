import React from "react";
import { Box, Button } from "@material-ui/core";

import logo from "../logo.svg";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <header className={classes.header}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="contained" color="primary" className={classes.button}>
          Hello there MUI!
        </Button>
      </header>
    </Box>
  );
}

export default App;
