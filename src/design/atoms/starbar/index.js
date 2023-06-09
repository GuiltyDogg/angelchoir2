import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { StarStyle } from "./styles";

function StarBar({ onClick }) {
  return (
    <>
      <StarStyle>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </StarStyle>
    </>
  );
}

export default StarBar;
