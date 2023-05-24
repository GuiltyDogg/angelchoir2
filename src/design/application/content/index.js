import { ApplicationContentStyles } from "./styles";

const ApplicationContent = function({ children }) {
  return (
    <ApplicationContentStyles>
      { children }
    </ApplicationContentStyles>
  );
}

export default ApplicationContent;