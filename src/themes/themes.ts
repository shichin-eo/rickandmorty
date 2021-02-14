interface ThemeI {
  body: string;
  fontColor: string;
  borderColor: string;
}

export const lightTheme: ThemeI = {
  body: "#fff",
  fontColor: "#232188",
  borderColor: "#232188",
};

export const darkTheme: ThemeI = {
  body: "#121212",
  fontColor: "#fff",
  borderColor: "#fff",
};
