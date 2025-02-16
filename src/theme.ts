import { createTheme, MantineColorsTuple } from "@mantine/core";


const appTheme: MantineColorsTuple = [
  "#fff3e0",
  "#ffe7ca",
  "#ffcd99",
  "#ffb263",
  "#ff9a36",
  "#ff8b18",
  "#ff8405",
  "#e47100",
  "#cc6300",
  "#b15400"
]

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    appTheme

  },
  primaryColor: 'appTheme'
});
