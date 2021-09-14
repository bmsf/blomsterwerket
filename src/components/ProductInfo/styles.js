import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  root: {
    flexGrow: 1,
  },

  icon: {
    width: 13,
    height: 13,
    marginBottom: "8px",
    marginRight: "5px",
  },

  container: {
    display: "flex",
  },
  infoImg: {
    objectFit: "contain",
    width: "50%",
    alignSelf: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
}));
