import React, { useState } from "react";
import { EventDiv } from "./styles";
import EventImage from "../eventimage";
import useEvents from "../../../state/hooks/useEvents";
import EventsContext from "../../../state/context/eventsContext";

function Events({ onClick }) {
  const getEvents = useEvents();
  const events = getEvents();
  const [isBlurred, setIsBlurred] = useState(null);
  const [blurredEventId, setBlurredEventId] = useState(null);

  return (
    <EventDiv>
      <EventsContext.Provider
        value={{ isBlurred, setIsBlurred, blurredEventId, setBlurredEventId }}
      >
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
