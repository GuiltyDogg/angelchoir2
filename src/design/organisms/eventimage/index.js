import React, { useContext } from "react";
import {
  EventImageContainer,
  EventInfoContainer,
  BlurredImage,
  EventInfo,
} from "./styles";
import Button from "../../atoms/button";
import { InfoTitle, InfoKey, InfoValue } from "./styles";
import { Link } from "react-router-dom";
import Context from "../../../state/context/eventsContext";
import { DateTime } from "luxon";

export const EventImage = ({ event }) => {
  const { isBlurred, setIsBlurred, blurredEventId } = useContext(Context);

  const toggleInfo = () => {
    if (isBlurred === event.id) {
      setIsBlurred(null);
    } else {
      setIsBlurred(event.id);
    }
  };

  const formattedDate = DateTime.fromISO(event.date).toLocaleString();

  return (
    <EventImageContainer>
      <BlurredImage
        src={event.imageSrc}
        alt="Event Image"
        isBlurred={isBlurred === event.id}
        onClick={toggleInfo}
      />
      <EventInfoContainer
        showInfo={isBlurred === event.id}
        onClick={toggleInfo}
      >
        <EventInfo>
          <InfoTitle>{event.title}</InfoTitle>
          <InfoValue>{event.location}</InfoValue>
          <InfoKey>Location</InfoKey>
          <InfoValue>{formattedDate}</InfoValue>
          <InfoKey>Date</InfoKey>
          <InfoValue>{event.time}</InfoValue>
          <InfoKey>Time</InfoKey>
          <Link to={`/Events/${event.id}`}>
            <Button>Check In</Button>
          </Link>
        </EventInfo>
      </EventInfoContainer>
    </EventImageContainer>
  );
};

export default EventImage;
