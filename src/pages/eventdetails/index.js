import GlassWindow from "../../design/atoms/glass";
import ToolBar from "../../design/atoms/navbar";
import StarBar from "../../design/atoms/starbar";
import Events from "../../design/organisms/eventscroll";
import { PageContainer } from "../../design/atoms/glass/styles";
import { CardContainer } from "../../design/atoms/alertglass/styles";
import AlertGlass from "../../design/atoms/alertglass";
import AnchoredFooter from "../../design/layout/anchored-footer";
import EventImage from "../../design/organisms/eventimage";
import { DetailContainer } from "../../design/atoms/detailimage/styles";
import DetailPageImage from "../../design/atoms/detailimage";
import { useState } from "react";

function EventDetails() {
  const [alert, setAlert] = useState(0);
  const handleStarClick = (clickedStar) => {
    const newAlert = clickedStar + 1;
    setAlert(newAlert);
  };

  return (
    <>
      <AnchoredFooter
        header={<ToolBar />}
        window={<DetailPageImage />}
        footer={<StarBar onClick={handleStarClick} />}
      />
    </>
  );
}

export default EventDetails;
