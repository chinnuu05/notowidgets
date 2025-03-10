// module.exports = {
//   plugins: {
    
//     "postcss-preset-mantine": {},
//     "postcss-simple-vars": {
//       variables: {
//         "mantine-breakpoint-xs": "36em",
//         "mantine-breakpoint-sm": "48em",
//         "mantine-breakpoint-md": "62em",
//         "mantine-breakpoint-lg": "75em",
//         "mantine-breakpoint-xl": "88em",
//       },
//     },


//     // "postcss-mixins": {},
//     "postcss-nesting": {},
//     "tailwindcss/nesting": {},
//     tailwindcss: {},
//     autoprefixer: {},


//     // "@tailwindcss/postcss": {},
//     // "@tailwindcss/nesting": {},
    
//   },
// };


export default {
  plugins: {
    
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },


    "postcss-nesting": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},


    // "@tailwindcss/postcss": {},
    // "@tailwindcss/nesting": {},
    
  },
};
