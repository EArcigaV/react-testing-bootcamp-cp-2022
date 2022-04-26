import {
  MainContainer,
  HeaderClass,
  ContentClass,
  FooterClass,
} from "./App.styles";

import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
//import DayPicker from "./components/Content/DayPicker/DayPicker";
import Footer from "./components/Footer/Footer";
//import BasicDatePicker from "./basicDatePicker";

function App() {
  return (
    <MainContainer>
      <HeaderClass>
        <Header />
      </HeaderClass>
      <ContentClass>
        <Content />
        {/* <BasicDatePicker /> */}
      </ContentClass>
      <FooterClass>
        <Footer />
      </FooterClass>
    </MainContainer>
  );
}

export default App;
