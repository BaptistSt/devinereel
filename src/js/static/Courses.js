const DEV1 = [
  { name: 1415, courses: [`FRD`, `CP2`, `BAD`, `MAI`, `MAII`] },
  { name: 1516, courses: [`FRD`, `CP2`, `BAD`, `MAI`, `MAII`] },
  { name: 1617, courses: [`FRD1`, `FRD2`, `BAD`, `MAI`, undefined] },
];

const DEV2 = [
  { name: 1415, courses: [`RMD1`, `CP3`, `RMD2`, `MAIII`, `MAIV`] },
  { name: 1516, courses: [`RMD1`, `CP3`, `RMD2`, `MAIII`, `MAIV`] },
  { name: 1617, courses: [`FRD3`, `COD`, `WAD`, `maIII`, undefined] },
];

const DEV3 = [
  { name: 1415, courses: [`RMD3`, `MAV`] },
  { name: 1516, courses: [`RMD3`, `MAV`] },
  { name: 1617, courses: [`EXW`, undefined] },
];

export default [`---`, ...DEV1, ...DEV2, ...DEV3];
