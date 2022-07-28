import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 20;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

* {
  box-sizing: border-box;
}

h1 {
  outline: none;
  font-family: Inter;
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.01em;
  text-align: left;
}

::selection {
  background: white;
}

.textWrapperBackground{
  border-radius: 8px;
  background: white;
  padding: 1.6rem 2.4rem;
}

.textWrapperHint {
  border-radius: 8px;
  background: #74C79D;
  padding: 1.6rem 2.4rem;
}

.correctInput {
  border-radius: 8px;
  background: #D7F3DC;
  padding: 1.6rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hide {
color: white;
}

.hint {
color: #51B788;
}

.correct {
  color: #2E6A50;
}

.cursor {
  color: white;
  border-bottom: 2px solid #41916C;
  padding-bottom: 4px;
}

`
export default GlobalStyle
