// import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-heebo";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#FEEFE9",
    borderRadius: "0",
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  header: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "400",
  },

  grouping: {
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: ".25rem",
    borderLeftColor: "#b0dae6",
    borderRightColor: "#ffd6c7",
    borderTopColor: "#b0dae6",
    borderBottomColor: "#ffd6c7",
    padding: theme.spacing(1),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
    "&:hover": {
      background: "linear-gradient(135deg, #b0dae6, #ffd6c7 60%, #ffd6c7)",
    },
  },

  addToCart: {
    color: "#000000",
    padding: "0px",
    alignSelf: "flex-start",
  },
  bodyText: {
    fontFamily: "Lato",
    fontSize: "14px",
  },
  confirmationBox: {
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: ".25rem",
    borderLeftColor: "#b0dae6",
    borderRightColor: "#ffd6c7",
    borderTopColor: "#b0dae6",
    borderBottomColor: "#ffd6c7",
    padding: theme.spacing(1),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
    "&:hover": {
      background: "linear-gradient(135deg, #b0dae6, #ffd6c7 60%, #ffd6c7)",
    },
  },
}));
