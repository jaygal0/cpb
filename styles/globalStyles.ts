import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 20;
  margin: 0;
  font-family: 'Rubik', sans-serif;
}

* {
  box-sizing: border-box;
}

h1 {
  padding: 0;
  margin: 0;
}

.hover:hover {
  cursor: pointer;
}

`
export default GlobalStyle
