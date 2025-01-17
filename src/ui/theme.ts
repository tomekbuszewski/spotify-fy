import transition from "@services/transitions";

export interface ITheme {
  animations: {
    easing: string;
    long: string;
    veryLong: string;
    med: string;
    short: string;
  };
  colors: {
    [k: string]: string;
    background: string;
    brand: string;
    text: string;
    link: string;
    highlight: string;
  };
  breakpoints: {
    [k: string]: string;
  };
  fonts: {
    sizes: {
      [k: string]: string;
    };
    spacings: {
      [k: string]: string | number;
    };
    faces: {
      [k: string]: string;
    };
  };
}

export const BASE_SIZE = 8;

export const rem = (input: number, base: number = BASE_SIZE): string =>
  `${input / base}rem`;

export const theme: ITheme = {
  animations: {
    easing: "cubic-bezier(.06,.37,.42,.99)",
    long: "500ms",
    veryLong: "750ms",
    med: "300ms",
    short: "150ms",
  },
  colors: {
    background: "#121212",
    brand: "#1DBA54",
    text: "#FFFFFF",
    link: "#B3B3B3",
    highlight: "#282828",
  },
  breakpoints: {
    mobileHorizontal: "@media (min-width: 480px)",
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    desktopLarge: "@media (min-width: 1200px)",
  },
  fonts: {
    sizes: {
      small: rem(12),
    },
    spacings: {
      small: rem(18),
    },
    faces: {
      primary: "Sen, Helvetica, Arial, sans-serif",
      secondary: "Helvetica, Arial, sans-serif",
    },
  },
};

export const withTransition = (
  prop: string | string[],
  time: string = theme.animations.long,
  easing: string = theme.animations.easing,
) => transition(prop, time, easing);
