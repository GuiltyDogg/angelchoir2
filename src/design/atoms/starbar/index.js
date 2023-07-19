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
          <StyledTools className="bell">
            <FontAwesomeIcon icon={faBell} />
          </StyledTools>
        </Link>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </StarStyle>
    </>
  );
}

export default StarBar;
