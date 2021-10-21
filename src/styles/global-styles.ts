import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

    html {
        color: ${(props) => props.theme.gray.default};
    }

    body {
      margin: 0;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyle;
