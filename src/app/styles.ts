import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>({
  container: {
    height: "100vh",
  },
  button: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "lightred",
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default useStyles;
