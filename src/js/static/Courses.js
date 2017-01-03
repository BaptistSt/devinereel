const DEV1 = [
  { 1415: `FRD`, 1516: `FRD`, 1617: `FRD1` },
  { 1415: `CP2`, 1516: `CP2`, 1617: `FRD2` },
  { 1415: `BAD`, 1516: `BAD`, 1617: `BAD` },
  { 1415: `MAI`, 1516: `MAI`, 1617: `MAI` },
  { 1415: `MAII`, 1516: `MAII`, 1617: `MAII` },
];

const DEV2 = [
  { 1415: `RMD1`, 1516: `RMD1`, 1617: `FRD3` },
  { 1415: `CP3`, 1516: `CP3`, 1617: `COD` },
  { 1415: `RMD2`, 1516: `RMD2`, 1617: `WAD` },
  { 1415: `MAIII`, 1516: `MAIII`, 1617: `maIII` },
  { 1415: `MAIV`, 1516: `MAIV`, 1617: undefined },
];

const DEV3 = [
  { 1415: `RMD3`, 1516: `RMD3`, 1617: `EXW` },
  { 1415: `MAV`, 1516: `MAV`, 1617: `MAV` },
];

export default [`---`, ...DEV1, ...DEV2, ...DEV3];
