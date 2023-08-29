import { createContext } from "react";

const Context = createContext({
  isBlurred: null,
  setIsBlurred: null,
  blurredEventId: null,
  setBlurredEventId: null,
});

export default Context;
