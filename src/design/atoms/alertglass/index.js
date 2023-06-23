import Slider from "react-slick";
import StarBar from "../starbar";
import { EventTitle } from "../../organisms/eventspage/styles";
import { Window, GpsImage, CardContainer, AlertImage } from "./styles";
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
            <EventTitle>ALERT!</EventTitle>
            <AlertImage src="./images/drew.png" alt="Alerting User" />
            <StarBar />
          </Window>
        </div>
        <div>
          <Window>
            <EventTitle>WTF</EventTitle>
            <GpsImage src="./images/gps.png" alt="gps photo" />
            <StarBar />
          </Window>
        </div>
      </Slider>
    </div>
  );
}

export default AlertGlass;
