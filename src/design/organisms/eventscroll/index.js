import { EventBox, EventDiv, EventTitle } from "./styles";
import EventImage from "../eventimage";
import useEvents from "../../../state/hooks/useEvents";

function Events({ onClick }) {
  const getEvents = useEvents();
  const events = getEvents();

  return (
    <EventDiv>
      {events.map((event) => (
        <EventImage
          onClick={onClick}
          key={event.id}
          src="./images/sampleflyer.jpg"
          alt="Your Image"
          event={event}
        />
      ))}
    </EventDiv>
  );
}

export default Events;
