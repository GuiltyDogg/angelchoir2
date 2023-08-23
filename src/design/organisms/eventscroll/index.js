import { EventBox, EventDiv, EventTitle } from "./styles";
import EventImage from "../eventimage";
import useEvents from "../../../state/hooks/useEvents";
import EventsContext from "../../../state/context/eventsContext";
import { useState } from "react";

function Events({ onClick }) {
  const getEvents = useEvents();
  const events = getEvents();
  const [isBlurred, setIsBlurred] = useState(null);

  return (
    <EventDiv>
      <EventsContext.Provider value={{ isBlurred, setIsBlurred }}>
        {events.map((event) => (
          <EventImage
            onClick={onClick}
            key={event.id}
            src="./images/sampleflyer.jpg"
            alt="Your Image"
            event={event}
          />
        ))}
      </EventsContext.Provider>
    </EventDiv>
  );
}

export default Events;
