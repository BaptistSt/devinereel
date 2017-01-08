// Use <undefined> for unknown course names in URL

const DEV1 = [
  { name: 20142015, courses: [`FRD`, `CP2`, `BAD`, `MAI`, `MAII`] },
  { name: 20152016, courses: [`FRD`, `CP2`, `BAD`, `MAI`, `MAII`] },
  { name: 20162017, courses: [`FRD1`, `FRD2`, `BAD`, `MAI`, undefined] },
];

const DEV2 = [
  { name: 20142015, courses: [`RMD1`, `CP3`, `RMD2`, `MAIII`, `MAIV`] },
  { name: 20152016, courses: [`RMD1`, `CP3`, `RMD2`, `MAIII`, `MAIV`] },
  { name: 20162017, courses: [`FRD3`, `COD`, `WAD`, `maIII`, undefined] },
];

const DEV3 = [
  { name: 20142015, courses: [`RMD3`, `MAV`] },
  { name: 20152016, courses: [`RMD3`, `MAV`] },
  { name: 20162017, courses: [`EXW`, undefined] },
];

export default [...DEV1, ...DEV2, ...DEV3];
