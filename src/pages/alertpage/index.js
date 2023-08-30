import GlassWindow from "../../design/atoms/glass";
import ToolBar from "../../design/atoms/navbar";
import StarBar from "../../design/atoms/starbar";
import Events from "../../design/organisms/eventscroll";
import AlertList from "../../design/organisms/alertlist";
import { PageContainer } from "../../design/atoms/glass/styles";
import { CardContainer } from "../../design/atoms/alertglass/styles";
import AlertGlass from "../../design/atoms/alertglass";

function AlertPage() {
  return (
    <>
      <PageContainer>
        <ToolBar title={"ALERTS"} />
        <AlertList />
      </PageContainer>
      {/* Nuking the alert/check in pop up cards */}
      {/* <GlassWindow></GlassWindow> */}
      {/* <AlertGlass /> */}
    </>
  );
}

export default AlertPage;
