import { DateTime } from "luxon";
import React, { useMemo, useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertContainer, AlertDetails, AlertControls, AlertImage } from "./styles";
import {
  EventBox,
  EventDiv,
  EventImage,
  EventTitle,
} from "../eventscroll/styles";
import StarBar from "../../atoms/starbar";
import { faLocation, faStar, faCamera } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { StarStyle } from "../../atoms/starbar/styles";
import { StyledTools } from "../../atoms/navbar/styles";
import { Text } from "../../atoms/typography";
import { CustomAvatarCircle } from "./styles";
import whitespace from "../../subatomics/whitespace";
import Button from "../../atoms/button";

function AlertList() {
  const defaultStarState = [false, false, false];

  const [starState, setStarState] = useState(defaultStarState);

  const events = [
    {
      id: 1,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "Not Drew",
      location: "The Masquerade",
      time: "2023-08-08T18:49:43.416Z",
      starsSelected: starState.filter(Boolean).length,
      description: localStorage.getItem("description") || "",
    },
    {
      id: 2,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "PimpCoatGuy",
      location: "The Masquerade",
      time: "2023-08-08T19:49:43.416Z",
      starsSelected: starState.filter(Boolean).length,
      description: localStorage.getItem("description") || "",
    },
    {
      id: 3,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "BVLLER",
      location: "The Masquerade",
      time: "2023-08-08T20:49:43.416Z",
      starsSelected: starState.filter(Boolean).length,
      description: localStorage.getItem("description") || "",
    },
    {
      id: 4,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "RunningOutOfUsernameIdeas",
      location: "The Masquerade",
      time: "2023-08-08T21:49:43.416Z",
      starsSelected: starState.filter(Boolean).length,
      description: localStorage.getItem("description") || "",
    },
  ];

  const milliseconds = events.sort();

  useEffect(() => {
    const storedStarState = JSON.parse(localStorage.getItem("starState"));
    if (storedStarState) {
      setStarState(storedStarState);
    }
  }, []);

  const sortedEvents = useMemo(() => {
    return events.sort((a, b) => {
      const timeA = DateTime.fromISO(a.time).toMillis();
      const timeB = DateTime.fromISO(b.time).toMillis();
      return timeA - timeB;
    });
  }, [events]);

  const starIcons = (numStars) => {
    const filledStars = Array.from({ length: numStars }).fill(faStar);
    const emptyStars = Array.from({ length: 3 - numStars }).fill(faStarRegular);
    const allStars = filledStars.concat(emptyStars);

    return (
      <div>
        {filledStars.map((icon, index) => (
          <span key={index}>
            <FontAwesomeIcon
              icon={icon}
              style={{ color: "gold" }}
              className="star-icon"
            />
          </span>
        ))}
        {emptyStars.map((icon, index) => (
          <span>
            <FontAwesomeIcon icon={icon} className="star-icon" />
          </span>
        ))}
      </div>
    );
  };

  return (
    <EventDiv style={{ display: 'block' }}>
      {sortedEvents.map((event) => {
        const formattedDate = DateTime.fromISO(event.time).toLocaleString(
          DateTime.DATETIME_SHORT
        );

        return (
          <AlertContainer key={event.id}>
            <AlertControls>
              <div>
              <CustomAvatarCircle disableUpload={true} />

              </div>

              <FontAwesomeIcon
              icon={faCamera}
              style={{ color: "gold" }}
              className="star-icon"
            />


            <FontAwesomeIcon
              icon={faLocation}
              style={{ color: "gold" }}
              className="star-icon"
            />

            </AlertControls>
            <AlertDetails>

            <StarStyle>
              <StyledTools className="alert-stars">
                {starIcons(event.starsSelected)}
              </StyledTools>

              <Text>{formattedDate}</Text>
            </StarStyle>

            <AlertImage />

  <p>Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. Lots of words and stuff. </p>

<Button>Hide</Button>

              

            </AlertDetails>
          </AlertContainer>
        );
      })}
    </EventDiv>
  );
}

export default AlertList;

