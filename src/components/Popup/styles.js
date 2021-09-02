import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  popup: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    height: 240,
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  iconButton: {},

  buttonRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3),
  },

  text: {
    padding: theme.spacing(1),
    fontFamily: "Lato",
  },
}));
