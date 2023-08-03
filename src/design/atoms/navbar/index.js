import { StyledBar, StyledTools } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { LogoNav } from "../logo/styles";
import { Link } from "react-router-dom";
import { EventTitle } from "../../organisms/eventscroll/styles";

function ToolBar({ onClick }) {
  return (
    <StyledBar>
      <Link to="/Events">
        <StyledTools>
          <LogoNav
            className="logo"
            src="./images/aclogoangle.png"
            alt="AngelChoir Logo"
          />
        </StyledTools>
      </Link>
      <EventTitle>EVENTS</EventTitle>
      <Link to="/">
        <StyledTools>
          <FontAwesomeIcon icon={faUser} />
        </StyledTools>
      </Link>
    </StyledBar>
  );
}

export default ToolBar;
