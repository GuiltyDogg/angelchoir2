import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StarDetails, StarStyle } from "./styles";
import { LogoNav } from "../logo/styles";
import { StyledTools } from "../navbar/styles";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import TextBox from "../textbox";
import Button from "../button";
import { ButtonStyles } from "../starbar/styles";

function StarBar({ onClick }) {
  const [starState, setStarState] = useState([false, false, false]);

  const toggleStar = (index) => {
    const newStarState = starState.map((filled, i) =>
      i <= index ? true : filled
    );
    setStarState(newStarState);
    onClick(newStarState.filter(Boolean).length);
  };

  return (
    <>
      <StarStyle>
        <Link to="/Alerts">
          <StyledTools>
            <FontAwesomeIcon icon={faBell} />
          </StyledTools>
        </Link>
        <div>
          {starState.map((starFilled, index) => (
            <StyledTools key={index}>
              <FontAwesomeIcon
                onClick={() => toggleStar(index)}
                icon={starFilled ? faStar : faStarRegular}
                className={starFilled ? "filled-star" : ""}
              />
            </StyledTools>
          ))}
        </div>
      </StarStyle>
      <StarDetails>
        <TextBox />
      </StarDetails>
      <ButtonStyles>
        <Button>Cancel</Button>
        <Button>Confirm</Button>
      </ButtonStyles>
    </>
  );
}

export default StarBar;
