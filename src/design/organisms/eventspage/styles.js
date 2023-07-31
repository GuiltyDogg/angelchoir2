// import React, { useState } from "react";
// import styled from "styled-components";
// import colors from "../../subatomics/colors";
// import whitespace from "../../subatomics/whitespace";
// import fonts from "../../subatomics/fonts";
// import borderradius from "../../subatomics/borderradius";

// export const EventTitle = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 50px;
// `;

// const BlurredImage = styled.img`
//   max-width: 94vw;
//   border-radius: ${borderradius.most};
//   margin-bottom: ${whitespace.base};
//   filter: ${(props) => (props.isBlurred ? "blur(4px)" : "none")};
//   cursor: pointer;
// `;

// export const EventDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: ${colors.lightGray};
// `;

// export const EventImage = ({ imageUrl = "/images/sampleflyer.jpg" }) => {
//   const [isBlurred, setIsBlurred] = useState(false);

//   const toggleBlur = () => {
//     setIsBlurred(!isBlurred);
//   };

//   return (
//     <div>
//       <BlurredImage
//         src={(imageUrl = "/images/sampleflyer.jpg")}
//         alt="Event Image"
//         isBlurred={isBlurred}
//         onClick={toggleBlur}
//       />
//     </div>
//   );
// };





// styles.js

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

const EventInfoContainer = styled.div`
  position: absolute;
  width: 94vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: ${(props) => (props.showInfo ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const EventInfo = styled.div`
  text-align: center;
  padding: ${whitespace.small};
`;

export const EventDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGray};
  position: relative; /* NEEDS TO BE SOMEWHERE ELSE */
`;

export const EventImage = ({ imageUrl = "/images/sampleflyer.jpg" }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  const toggleInfo = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <div>
      <BlurredImage
        src={imageUrl}
        alt="Event Image"
        isBlurred={isBlurred}
        onClick={() => {
          toggleBlur();
          toggleInfo();
  
        }}
      />
      <EventInfoContainer showInfo={showInfo}>
        <EventInfo>
          {/* pull event information here */}
          <p>Title: Your Event Title</p>
          <p>Location: Event Location</p>
          <p>Date: Event Date</p>
          <p>Time: Event Time</p>
        </EventInfo>
      </EventInfoContainer>
    </div>
  );
};
