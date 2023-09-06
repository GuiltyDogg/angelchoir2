import React, { useMemo, useState, useCallback } from "react";
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
  const defaultStarState = [false, false, false]

  const [starState, setStarState] = useState(defaultStarState);
  const [description, setDescription] = useState('');

  const toggleStar = (index) => {
    const newStarState = starState.map((filled, i) =>
      i <= index ? true : filled
    );
    setStarState(newStarState);
    onClick(newStarState.filter(Boolean).length);
  };

  const starSelected = useMemo(() => {
    return starState.find(s => s);
  }, [starState]);

  const cancel = useCallback(() => {
    setStarState(defaultStarState)
  }, [
    defaultStarState
  ]);

  const submit = useCallback(() => {
    console.log('submit', starState.filter(s => s).length, description);    
  }, [
    starState,
    description
  ]);

  return (
    <>
      <StarStyle>
      <Link to="/Alerts">
        { !starSelected &&
                  <StyledTools>
                  <FontAwesomeIcon icon={faBell} />
                </StyledTools>
      
        }
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

      {
        starSelected && (
          <>
            <StarDetails>
              <TextBox value={description} onChange={(e) => {
                setDescription(e.target.value)
              }} />
            </StarDetails>
            
            <ButtonStyles>
              <Button onClick={cancel}>Cancel</Button>
              <Button onClick={submit}>Confirm</Button>
            </ButtonStyles>  
          </>
        )
      }
    </>
  );
}

export default StarBar;
