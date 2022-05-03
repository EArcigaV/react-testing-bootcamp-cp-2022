import {
  MainContainer,
  HeaderClass,
  ContentClass,
  FooterClass,
} from "./App.styles";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <MainContainer>
      <HeaderClass>
        <Header />
      </HeaderClass>
      <ContentClass>
        <Content />
      </ContentClass>
      <FooterClass>
        <Footer />
      </FooterClass>
    </MainContainer>
  );
}

export default App;
