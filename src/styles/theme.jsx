const colorNames = {
 White: "#FFFFFF",
 Black: "#000000",
 Swamp: "#00141a",
 Cyan: "#00ffff",
 Daintree: "#00222C",
 SherpaBlue: "#003F52",
 SilverChalice: "#a8a8a8",
 FadedBlack: "#00000050"
};

export const theme = {
 breakpoints: {
  xs: "400px",
  s: "650px",
  m: "900px",
  l: "1100px",
  xl: "1400px"
 },

 colors: {
  site: {
   background: colorNames.Swamp,
   text: colorNames.White,
   primaryText: colorNames.Cyan,
   mutedText: colorNames.SilverChalice,
   blurredBackground: colorNames.FadedBlack
  },
  tile: {
   background: colorNames.Daintree,
   hoverBackground: colorNames.SherpaBlue
  }
 }
};
