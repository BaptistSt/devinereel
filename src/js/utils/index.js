// Flatten a multidimensional array
// [1, 2, 3, [4, 5, 6]] => [1, 2, 3, 4, 5, 6]
export const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

// Trim 2&0 chars from a year string
// `20152016` => `1516`
export const trimYear = year => {
  return (typeof year === `string`
    ? year.replace(`20`, ``).replace(`20`, ``)
    : console.error(`[trimYear:] Year is not of type String`)
  );
};
