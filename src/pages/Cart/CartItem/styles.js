import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    width: 120,
    height: 120,
    objectFit: "contain",
    borderRadius: "5px",
  },
  cartCard: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "250px",
    backgroundColor: "#F5FAFD",
    paddingTop: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cardActions: {
    fontFamily: "Jost",
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },

  itemName: {
    fontFamily: "Jost",
    fontSize: "20px",
  },
  removeItemButton: {
    fontFamily: "Jost",
  },
  cards: {
    height: "20px",
    borderRadius: "30px",
  },
}));
