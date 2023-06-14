import { Window } from "./styles";
import { EventTitle } from "../../organisms/eventspage/styles";
import { ButtonStyles } from "../button/styles";

function GlassWindow() {
  return (
    <Window>
      <EventTitle>CHECK IN</EventTitle>
      <br></br>
      EVENT INFO HERE
      <br></br>
      <ButtonStyles>YEAH CHECK ME IN</ButtonStyles>
    </Window>
  );
}

export default GlassWindow;
