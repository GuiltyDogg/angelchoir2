import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { StarStyle } from "./styles";
import { LogoNav } from "../logo/styles";
import { StyledTools } from "../navbar/styles";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function StarBar({ onClick }) {
  return (
    <>
      <StarStyle>
        <Link to="/Alerts">
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <div>
          <FontAwesomeIcon onClick={onClick} icon={faStar} />
          <FontAwesomeIcon onClick={onClick} icon={faStar} />
          <FontAwesomeIcon onClick={onClick} icon={faStar} />
        </div>
      </StarStyle>
    </>
  );
}

export default StarBar;
