export const trimYear = year => {
  typeof year === `string`
    ? year.replace(`20`, ``).replace(`20`, ``)
    : console.error(`[trimYear:] Year is not of type String`);
};
