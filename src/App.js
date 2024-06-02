import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from ".utils/Theme"

const container = styled.dev`
background : ${({theme})=> theme.bg};
width: 100vh;
height: 100vh;
`;

function App() {
// ________________________________For Theme___________________________________
  //hooks

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkTheme}>
      <container>Podcast</container>
    </ThemeProvider>
  );
}

export default App;
