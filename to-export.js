export const capitalizeString = (str) => str.toUpperCase();
// use export to reuse a code block
const capitalizeFirstString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { capitalizeFirstString };

export const foo = 'foo';
export const bar = 'bar';

// create an export fallback with export defaults
export default function subtract(x, y) {
  return x - y;
}
