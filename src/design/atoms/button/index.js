import { ButtonStyles } from "./styles";

function Button() {
  const handleClick = () => {
    console.log("Takes you to Find Events page");
  };

  return <ButtonStyles onClick={handleClick}>FIND EVENT</ButtonStyles>;
}

export default Button;
