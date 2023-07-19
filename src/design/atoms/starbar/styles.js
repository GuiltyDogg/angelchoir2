import styled from "styled-components";
import colors from "../../subatomics/colors";

export const StarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 10px;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 30px;
  background-color: ${colors.primaryBrand};

  .bell {
    margin-right: 150px;
    padding: 1px 30px 1px 0px;
  }
`;
