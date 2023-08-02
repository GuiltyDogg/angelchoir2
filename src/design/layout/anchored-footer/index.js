import { Wrapper, ScrollableWindow, Footer, Header } from "./styles";

function AnchoredFooter({ window, footer, header }) {
  return (
    <Wrapper>
      {!!header && <Header>{header}</Header>}
      {!!window && <ScrollableWindow>{window}</ScrollableWindow>}
      {!!footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
}

export default AnchoredFooter;
