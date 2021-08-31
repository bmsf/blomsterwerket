import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-heebo";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#FFFFF",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  header: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: "400",
  },
  addToCart: {
    color: "#000000",
  },
  bodyText: {
    fontFamily: "Lato",
    fontSize: "16px",
  },
}));
