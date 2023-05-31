import Logo from "../../design/atoms/logo";
import Button from "../../design/atoms/button";
import Avatar from "../../design/atoms/avatar";
import Checkbox from "../../design/atoms/checkbox";
import Textbox from "../../design/atoms/textbox";
import Input from "../../design/atoms/input";
import AnchoredFooter from "../../design/layout/anchored-footer";

function Settings() {
  return (
    <AnchoredFooter
      window={
        <>
          <Logo></Logo>
          <Avatar></Avatar>
          <Input></Input>
          <Textbox></Textbox>
        </>
      }
      footer={
        <>
          <Checkbox></Checkbox>
          <Button></Button>
        </>
      }
    />
  );
}

export default Settings;
