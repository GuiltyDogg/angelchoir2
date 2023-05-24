import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { StyledCheck } from "./styles";

function Checkbox() {
  return (
    <StyledCheck>
      Allow AngelChoir to use location <FontAwesomeIcon icon={faSquare} />
    </StyledCheck>
  );
}

export default Checkbox;
