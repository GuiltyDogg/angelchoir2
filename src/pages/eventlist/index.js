// import GlassWindow from "../../design/atoms/glass";
// import ToolBar from "../../design/atoms/navbar";
// import StarBar from "../../design/atoms/starbar";
// import Events from "../../design/organisms/eventspage";

// function Eventlist() {
//   return (
//     <>
//       <ToolBar></ToolBar>
//       <Events></Events>
//       <StarBar></StarBar>
//       <GlassWindow></GlassWindow>
//     </>
//   );
// }

// export default Eventlist;

import GlassWindow from "../../design/atoms/glass";
import ToolBar from "../../design/atoms/navbar";
import StarBar from "../../design/atoms/starbar";
import Events from "../../design/organisms/eventspage";
import { PageContainer } from "../../design/atoms/glass/styles";

function Eventlist() {
  return (
    <>
      <PageContainer>
        <ToolBar />
        <Events />
        <StarBar />
      </PageContainer>
      <GlassWindow></GlassWindow>
    </>
  );
}

export default Eventlist;
