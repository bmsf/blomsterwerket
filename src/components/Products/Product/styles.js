import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-heebo";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  name: {
    fontFamily: "Helvetica",
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
    fontSize: "30px",
    fontWeight: "400"
  }
}));
