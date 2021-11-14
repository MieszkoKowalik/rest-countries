import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

	body{
	font-family: 'Nunito Sans', sans-serif;
}
`;
export default GlobalStyle;
