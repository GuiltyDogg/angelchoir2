import React, { useState, useContext } from "react";
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

export const EventImage = ({ event }) => {
  const { isBlurred, setIsBlurred } = useContext(Context);

  const toggleInfo = () => {
    if (isBlurred === null) {
      setIsBlurred(event.id);
    } else {
      setIsBlurred(null);
    }
  };

  return (
    <EventImageContainer>
      <BlurredImage
        src={event.imageSrc}
        alt="Event Image"
        isBlurred={isBlurred === event.id}
        onClick={() => {
          toggleInfo();
        }}
      />
      <EventInfoContainer
        showInfo={isBlurred === event.id}
        onClick={toggleInfo}
      >
        <EventInfo>
          {/* Render the event information here */}
          <InfoTitle>{event.title}</InfoTitle>

          <InfoValue>{event.location}</InfoValue>
          <InfoKey>Location</InfoKey>

          <InfoValue>{event.date}</InfoValue>
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
