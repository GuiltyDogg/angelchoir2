import { Wrapper, ScrollableWindow, Footer } from "./styles";

function AnchoredFooter({
  window,
  footer
}) {
  return (
    <Wrapper>
      <ScrollableWindow>{ window }</ScrollableWindow>
      <Footer>{ footer }</Footer>
    </Wrapper>
  );
};

export default AnchoredFooter;