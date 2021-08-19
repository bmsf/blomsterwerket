import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-heebo";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
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
    fontFamily: "heebo",
    fontSize: "20px",
    fontWeight: "400",
  },
  addToCart: {
    color: "#000000",
  },
}));
