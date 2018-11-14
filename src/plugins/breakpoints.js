const breakpointsPlugin = {
  name: "breakpoints",
  type: "atrule",
  atrule: "media",
  prefixOrSuffix: "suffix",
  modifiers: [
    {
      name: "responsiveSmall",
      indicator: "ns",
      separator: "-",
      condition: "screen and (min-width: 30em)"
    },
    {
      name: "responsiveMedium",
      indicator: "m",
      separator: "-",
      condition: "screen and (min-width: 30em) and (max-width: 60em)"
    },
    {
      name: "responsiveLarge",
      indicator: "l",
      separator: "-",
      condition: "screen and (min-width: 60em)"
    }
  ]
};

export default breakpointsPlugin;
