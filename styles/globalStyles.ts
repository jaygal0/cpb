import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 20;
  margin: 0;
  font-family: 'Rubik', sans-serif;
}

#__next {
  position: relative;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

hr {
 margin: 2.4rem 0 2.4rem 2.4rem; 
  color: #19897B;
  width: 5%;
}

`
export default GlobalStyle
