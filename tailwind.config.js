const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
  purge: !dev && ["./src/**/*.svelte"],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.800"),
          a: {
            color: theme("colors.blue.500"),
          },
          h1: {
            color: theme("colors.blue.500"),
          },
          h2: {
            color: theme("colors.blue.400"),
          },
        },
      },
    }),
  },
  plugins: [require("@tailwindcss/typography")],
};
