import GlassWindow from "../../design/atoms/glass";
import ToolBar from "../../design/atoms/navbar";
import StarBar from "../../design/atoms/starbar";
import Events from "../../design/organisms/eventscroll";
import AlertList from "../../design/organisms/alertlist";
import { PageContainer } from "../../design/atoms/glass/styles";
import { CardContainer } from "../../design/atoms/alertglass/styles";
import AlertGlass from "../../design/atoms/alertglass";
import AnchoredFooter from "../../design/layout/anchored-footer";

function AlertPage() {
  return (
      
    <AnchoredFooter
    header={<ToolBar title={"ALERTS"} />}
    window={<AlertList />}
    />

  );
}

export default AlertPage;
