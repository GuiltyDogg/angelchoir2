import { ButtonStyles } from "./styles";
import { DivStyled } from "./styles";

// function Button() {
//   return <ButtonStyles>FIND EVENT</ButtonStyles>;
// }

function Button() {
  const handleClick = () => {
    console.log("Takes you to Find Events page");
  };

  return (
    <DivStyled>
      <ButtonStyles onClick={handleClick}>FIND EVENT</ButtonStyles>
    </DivStyled>
  );
}

export default Button;
