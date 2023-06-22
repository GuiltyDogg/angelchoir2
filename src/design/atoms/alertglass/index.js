import Slider from "react-slick";
import Avatar from "../avatar";
import StarBar from "../starbar";
import { Window, GpsImage, CardContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AlertGlass() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Window>
            <h1>ALERT!</h1>
            <Avatar />
            <StarBar />
          </Window>
        </div>
        <div>
          <Window>
            <h3>WTF</h3>
            <GpsImage src="./images/gps.png" alt="gps photo" />
            <StarBar />
          </Window>
        </div>
      </Slider>
    </div>
  );
}

export default AlertGlass;
