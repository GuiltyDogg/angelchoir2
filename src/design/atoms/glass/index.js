import { Window } from "./styles";
import { EventTitle } from "../../organisms/eventspage/styles";
import { ButtonStyles } from "../button/styles";
import { EventLocation } from "./styles";

function GlassWindow() {
  return (
    <Window>
      <EventTitle>CHECK IN</EventTitle>
      <br></br>
      EVENT INFO HERE
      <br></br>
      <EventLocation src="./images/gps.png" alt="gps pic" />
      <ButtonStyles>YEAH CHECK ME IN</ButtonStyles>
    </Window>
  );
}

export default GlassWindow;
