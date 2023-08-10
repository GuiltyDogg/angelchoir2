import React, { useState } from "react";
import {
  EventImageContainer,
  EventInfoContainer,
  BlurredImage,
  EventInfo,
} from "./styles";
import Button from "../../atoms/button";
import { InfoTitle, InfoKey, InfoValue } from "./styles";
import { Link } from "react-router-dom";

export const EventImage = ({ event }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(false);
  };

  const toggleInfo = () => {
    if (!showInfo) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <EventImageContainer>
      <BlurredImage
        src={event.imageSrc}
        alt="Event Image"
        isBlurred={isBlurred}
        onClick={() => {
          toggleBlur();
          toggleInfo();
        }}
      />
      <EventInfoContainer showInfo={showInfo} onClick={toggleInfo}>
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
