import { StyledBar, StyledTools } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { LogoNav } from "../logo/styles";

function ToolBar({ onClick }) {
  return (
    <StyledBar>
      <StyledTools>
        <FontAwesomeIcon icon={faCalendar} />
      </StyledTools>
      <StyledTools>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledTools>
      <LogoNav src="./images/aclogo.png" alt="AngelChoir Logo" />
      <StyledTools>
        <FontAwesomeIcon icon={faBell} />
      </StyledTools>
      <StyledTools>
        <FontAwesomeIcon icon={faUser} />
      </StyledTools>
    </StyledBar>
  );
}

export default ToolBar;
