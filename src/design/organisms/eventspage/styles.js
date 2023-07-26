import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const EventTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

const BlurredImage = styled.img`
  max-width: 94vw;
  border-radius: ${borderradius.most};
  margin-bottom: ${whitespace.base};
  filter: ${(props) => (props.isBlurred ? "blur(4px)" : "none")};
  cursor: pointer;
`;

export const EventDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGray};
`;

export const EventImage = ({ imageUrl = "/images/sampleflyer.jpg" }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div>
      <BlurredImage
        src={(imageUrl = "/images/sampleflyer.jpg")}
        alt="Event Image"
        isBlurred={isBlurred}
        onClick={toggleBlur}
      />
    </div>
  );
};
