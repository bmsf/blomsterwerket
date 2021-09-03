import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    width: 260,
    objectFit: "contain",
  },
  cartCard: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "150px",
    backgroundColor: "#FFFFFF",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
  },
  cardActions: {
    justifyContent: "space-between",
    fontFamily: "Playfair display",
    padding: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },

  itemName: {
    fontFamily: "Playfair display",
    fontSize: "20px",
    padding: theme.spacing(3),
  },
  removeItemButton: {
    fontFamily: "Lato",
    fontWeight: "bold",
  },
}));
