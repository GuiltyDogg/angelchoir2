import { ButtonStyles } from "./styles";

function Button({ onClick, disabled, children }) {
  return (
    <ButtonStyles onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
