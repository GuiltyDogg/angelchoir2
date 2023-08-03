import GlassWindow from "../../design/atoms/glass";
import ToolBar from "../../design/atoms/navbar";
import StarBar from "../../design/atoms/starbar";
import Events from "../../design/organisms/eventscroll";
import { PageContainer } from "../../design/atoms/glass/styles";
import { CardContainer } from "../../design/atoms/alertglass/styles";
import AlertGlass from "../../design/atoms/alertglass";
import AnchoredFooter from "../../design/layout/anchored-footer";
import EventImage from "../../design/organisms/eventimage";

function EventDetails() {
  return (
    <>
      <AnchoredFooter
        header={<ToolBar />}
        window={<>event detail pages</>}
        footer={<StarBar />}
      />
    </>
  );
}

export default EventDetails;
