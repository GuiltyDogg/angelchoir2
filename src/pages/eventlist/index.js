import GlassWindow from "../../design/atoms/glass";
import ToolBar from "../../design/atoms/navbar";
import StarBar from "../../design/atoms/starbar";
import Events from "../../design/organisms/eventspage";

function Eventlist() {
  return (
    <>
      <ToolBar></ToolBar>
      <Events></Events>
      <StarBar></StarBar>
      <GlassWindow></GlassWindow>
    </>
  );
}

export default Eventlist;
