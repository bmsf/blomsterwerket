import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination]);

const Header = () => {
  return (
    <>
      <Swiper pagination={true} className="mySwiper">
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1560243563-62087d88da39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1600104197373-c07cc35e4f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;

// const classes = useStyles();
//   return (
//     <>
//       <div className={classes.toolbar} />
//       <div className="img-container">
//         <div className="velg-blomst-div">
//           <Button component={Link} to="/products" buttonSize="btn--large">
//             Utforsk
//           </Button>
//         </div>
//       </div>
//     </>
//   );
