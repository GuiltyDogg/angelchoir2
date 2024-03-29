import { useState } from "react";
import Logo from "../../design/atoms/logo";
import Button from "../../design/atoms/button";
import Avatar from "../../design/atoms/avatar";
import Checkbox from "../../design/atoms/checkbox";
import TextBox from "../../design/atoms/textbox";
import Input from "../../design/atoms/input";
import AnchoredFooter from "../../design/layout/anchored-footer";
import { useCallback } from "react";
import { Link } from "react-router-dom";

function Settings() {
  const selectedImage = localStorage.getItem("AngelChoir::selectedImage");

  const [userName, setUserName] = useState(
    localStorage.getItem("AngelChoir::userName") || ""
  );

  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("AngelChoir::userInfo") || ""
  );

  const [checked, setChecked] = useState(
    localStorage.getItem("AngelChoir::checked") === "true" || false
  );

  const findEvents = useCallback(
    (e) => {
      localStorage.setItem("AngelChoir::userName", userName);
      localStorage.setItem("AngelChoir::userInfo", userInfo);

      localStorage.setItem("AngelChoir::checked", checked);
    },
    [userName, userInfo, selectedImage, checked]
  );
  return (
    <AnchoredFooter
      window={
        <>
          <Logo></Logo>
          <Avatar></Avatar>
          <Input
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              console.log(e.target.value);
              setUserName(e.target.value);
            }}
          ></Input>
          <TextBox
            textarea={"resize:none"}
            placeholder="Additonal User Info (Optional)"
            value={userInfo}
            onChange={(e) => {
              console.log(e.target.value);
              setUserInfo(e.target.value);
            }}
          ></TextBox>
        </>
      }
      footer={
        <>
          <Checkbox
            classname="checkbox"
            checked={checked}
            setChecked={setChecked}
            label="Allow AngelChoir to use location?"
            dataTestId="location-checkbox"
          ></Checkbox>
          <Link to="/Events">
            <Button
              onClick={findEvents}
              disabled={!userName || !checked || !(selectedImage || userInfo)}
            >
              Find Event
            </Button>
          </Link>
        </>
      }
    />
  );
}

export default Settings;
