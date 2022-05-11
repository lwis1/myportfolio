import Sidebar from "./Components/Sidebar";
import styled from "styled-components"
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
// import BlogPage from "./Pages/BlogPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
          <div className="line5"></div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          
          <Route path="/resume" element={<ResumePage />} exact />
          {/* <Route path="/blogs" element={<BlogPage />} exact /> */}
          <Route path="/porftolios" element={<PortfolioPage />} exact />
          
          <Route path="/contact" element={<ContactPage />} exact />
        </Routes> 
        
        </MainContentStyled>
    </div>
  );
}
        
    



const MainContentStyled= styled.main`
  position: relative;
  margin-left: 18.1%;
  min-height: 100vh;
  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line1 ,.line5{
      width: 0.5px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 1;
    }
    .line2, .line4{
      width: 0.5px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 1;
      transform: scale(1.2);
    }
    .line3{
      width: 0.5px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 1;
      transform: scale(1.4);
    }
  }
  
  

`

export default App;
