const colors = {
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
};

const space = ['0.5rem', '1rem', '2rem', '4rem', '8rem'];
const breakpoints = ['40rem', '52rem', '64rem', '80rem'];
const fontSizes = ['.75rem', '.875rem', '1rem', '1.25rem', '1.5rem', '2rem'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  breakpoints,
  colors,
  space,
  fontSizes,
};
