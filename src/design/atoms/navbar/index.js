import { StyledBar, StyledTools } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { LogoNav } from "../logo/styles";
import { Link } from "react-router-dom";

function ToolBar({ onClick }) {
  return (
    <StyledBar>
      <Link to="/Events">
        <StyledTools>
          <FontAwesomeIcon icon={faCalendar} />
        </StyledTools>
      </Link>

      {/* I think we don't need this/we should move this feature to the events page? */}
      <StyledTools>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledTools>
      <LogoNav src="./images/aclogoangle.png" alt="AngelChoir Logo" />

      <Link to="/Alerts">
        <StyledTools>
          <FontAwesomeIcon icon={faBell} />
        </StyledTools>
      </Link>

      <Link to="/">
        <StyledTools>
          <FontAwesomeIcon icon={faUser} />
        </StyledTools>
      </Link>
    </StyledBar>
  );
}

export default ToolBar;
