import { Link } from "react-router-dom";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.container_collection_grid}></div>
    </main>
  );
};

export default Header;
