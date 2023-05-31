import { StyledInput } from "./styles";

const Input = function ({ placeholder, value, onChange }) {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></StyledInput>
  );
};

export default Input;
