import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { StyledCheck } from "./styles";

function Checkbox({ checked, setChecked, label, dataTestId }) {
  const clickHandler = useCallback(
    (e) => {
      setChecked(!checked);
    },
    [checked]
  );

  return (
    <StyledCheck data-testid={dataTestId} onClick={clickHandler}>
      {label}{" "}
      {checked ? (
        <FontAwesomeIcon icon={faSquareCheck} />
      ) : (
        <FontAwesomeIcon icon={faSquare} />
      )}
    </StyledCheck>
  );
}

export default Checkbox;
