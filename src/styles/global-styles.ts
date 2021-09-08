import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    html {
        font-size: 10px;
    }
    
    body {
      margin: 0;
    }
      
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    * {
      box-sizing: border-box;
      font-family: Noto Sans KR;
    }
`;

export default GlobalStyle;
