import React, { useMemo, useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StarDetails, StarStyle } from "./styles";
import { LogoNav } from "../logo/styles";
import { StyledTools } from "../navbar/styles";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link, useMatch } from "react-router-dom";
import TextBox from "../textbox";
import Button from "../button";
import { ButtonStyles } from "../starbar/styles";

function StarBar({ onClick }) {
  const defaultStarState = [false, false, false];

  useEffect(() => {
    const storedStarState = JSON.parse(localStorage.getItem("starState"));
    if (storedStarState) {
      setStarState(storedStarState);
    }
  }, []);

  useEffect(() => {
    const storedDescription = localStorage.getItem("description");
    if (storedDescription) {
      setDescription(storedDescription);
    }
  }, []);

  const [starState, setStarState] = useState(defaultStarState);
  const [description, setDescription] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isRatingDisabled, setIsRatingDisabled] = useState(false);

  const updateStarState = (newState) => {
    setStarState(newState);
    localStorage.setItem("starState", JSON.stringify(newState));
    onClick(newState.filter(Boolean).length);
  };

  const updateDescription = (newDescription) => {
    setDescription(newDescription);
    localStorage.setItem("description", newDescription);
  };

  const toggleStar = (index) => {
    if (!isRatingDisabled) {
      const newStarState = starState.map((filled, i) =>
        i <= index ? true : filled
      );
      updateStarState(newStarState);
    }
  };

  const starSelected = useMemo(() => {
    return starState.find((s) => s);
  }, [starState]);

  const cancel = useCallback(() => {
    setStarState(defaultStarState);
    setSubmitClicked(false);
    setIsRatingDisabled(false);
  }, [defaultStarState]);

  const submit = useCallback(() => {
    console.log("submit", starState.filter((s) => s).length, description);
    updateDescription(description);
    setIsTextVisible(false);
    setSubmitClicked(true);
    setIsRatingDisabled(true);
    localStorage.setItem("description", description);
  }, [starState, description]);

  return (
    <>
      <StarStyle>
        <Link to="/Alerts">
          {!starSelected && (
            <StyledTools>
              <FontAwesomeIcon icon={faBell} />
            </StyledTools>
          )}
        </Link>
        <div>
          {starState.map((starFilled, index) => (
            <StyledTools key={index}>
              <FontAwesomeIcon
                onClick={() => toggleStar(index)}
                icon={starFilled ? faStar : faStarRegular}
                className={starFilled ? "filled-star" : ""}
                style={{ pointerEvents: isRatingDisabled ? "none" : "null" }}
              />
            </StyledTools>
          ))}
        </div>
      </StarStyle>

      {starSelected && isTextVisible && !submitClicked && (
        <>
          <StarDetails>
            <TextBox
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </StarDetails>

          <ButtonStyles>
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={submit}>Confirm</Button>
          </ButtonStyles>
        </>
      )}
      {submitClicked && !isTextVisible && (
        <ButtonStyles>
          <Button onClick={cancel}>Cancel</Button>
        </ButtonStyles>
      )}
    </>
  );
}

export default StarBar;
