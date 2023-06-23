import { Window } from "./styles";
import { EventTitle } from "../../organisms/eventspage/styles";
import { ButtonStyles } from "../button/styles";
import { CheckInImage } from "./styles";

function GlassWindow() {
  return (
    <Window>
      <EventTitle>CHECK IN</EventTitle>
      EVENT INFO
      <CheckInImage src="./images/sampleflyer.jpg" alt="Event Picture" />
      <ButtonStyles>CHECK IN</ButtonStyles>
    </Window>
  );
}

export default GlassWindow;
