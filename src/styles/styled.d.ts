import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      500: string;
      700: string;
    };

    gray: {
      default: string;
      sub: string;
      dark: string;
      light: string;
    };

    orange: {
      normal: string;
    };

    border: {
      gray: string;
    };

    device: {
      mobile: string;
      tablet: string;
      laptop: string;
    }
  
  }
}
