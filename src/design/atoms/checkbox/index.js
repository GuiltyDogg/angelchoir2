import React, { useState, useCallback} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { StyledCheck } from "./styles";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  const clickHandler = useCallback((e) => {
    setChecked(!checked);
  }, [checked]);

  return (
    <StyledCheck onClick={clickHandler}>
      Allow AngelChoir to use location? { checked ? (
        <FontAwesomeIcon icon={faSquareCheck} />
      ) : (
        <FontAwesomeIcon icon={faSquare} />
      )}
    </StyledCheck>
  );
}

export default Checkbox;


