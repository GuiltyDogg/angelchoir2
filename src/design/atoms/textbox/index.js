import { StyledTextBox } from "./styles";

function TextBox({ placeholder, value, onChange }) {
  return (
    <StyledTextBox
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></StyledTextBox>
  );
}

export default TextBox;
