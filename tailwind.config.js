import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundImage: {
      bg_top_banner: "url('/assets/banner.png')",
    },
  },
};
export const plugins = [];
