
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import {lightTheme,darkTheme} from "./utils/Theme.js";
import Sidebar from "./components/Sidebar.js";
import NavBar from "./components/Navbar.js";

const Container = styled.div`
  display:flex;
  background : ${({ theme }) => theme.bgLight  } ;
  width:100%;
  height:100vh;
  overflow-x:hidden;
  overflow-y:hidden;

`;

const Frame = styled.div `
    display:flex;
    flex-direction : column;
    flex:3;
`;

function App() {

  const [darkMode, setDarkMode] = useState(false); // True => DarkMOde
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>

          {
            menuOpen && ( 
              <Sidebar
                setMenuOpen = {setMenuOpen}
                setDarkMode = {setDarkMode}
                darkMode = {darkMode}
                menuOpen ={menuOpen}
              />
            )
          }
          
          <Frame>
            <NavBar 
              menuOpen ={menuOpen}
              setMenuOpen = {setMenuOpen}
            />
          </Frame>
          
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;