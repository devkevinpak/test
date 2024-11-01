const device = {
  // aurora: { minWidth: 1800, maxWidth: 2000, minHeight: 656, maxHeight: 740 }, // 1800 x 656
  // ecarx: { minWidth: 2192, maxWidth: 2200, minHeight: 1168, maxHeight: 1372 }, // 2195 x 1170
  // ecarxP: { minWidth: 1024, maxWidth: 1152, minHeight: 1067, maxHeight: 1200 }, // 1152 x 1200 - *0.8888
  // icup1Volvo: { minWidth: 878, maxWidth: 890, minHeight: 1008, maxHeight: 1020 }, // 768 x 882 - *1.143
  // icup1Polstar: { minWidth: 1024, maxWidth: 1040, minHeight: 1052, maxHeight: 1066 }, // 1152 x 1183 - *0.8888
  // icup2Volvo: { minWidth: 1280, maxWidth: 1300, minHeight: 1464, maxHeight: 1487 }, // 1280 x 1464
  // icup2Polstar: { minWidth: 1280, maxWidth: 1300, minHeight: 1488, maxHeight: 1500 } // 1280 x 1488
  // v1_11in: { minWidth: 1152, maxWidth: 1162, minHeight: 847, maxHeight: 857 }, 사이즈가 'v2_11in'와 동일함으로 'v2_11in'이름만 사용
  icup1Volvo: { minWidth: 878, maxWidth: 890, minHeight: 1008, maxHeight: 1020 },
  icup2Volvo: { minWidth: 1280, maxWidth: 1300, minHeight: 1464, maxHeight: 1487 },
  v2_9inP: { minWidth: 768, maxWidth: 778, minHeight: 946, maxHeight: 956 },
  v2_11in: { minWidth: 1152, maxWidth: 1162, minHeight: 847, maxHeight: 857 },
  v2_11inP: { minWidth: 1152, maxWidth: 1162, minHeight: 1244, maxHeight: 1254 },
  v2_145inP1: { minWidth: 1600, maxWidth: 1610, minHeight: 1780, maxHeight: 1790 },
  v2_145inP2: { minWidth: 1600, maxWidth: 1610, minHeight: 2180, maxHeight: 2190 },
  v2_15in: { minWidth: 1544, maxWidth: 1554, minHeight: 896, maxHeight: 906 }
}

export function getModel () {
  return window.applicationFramework ? window.applicationFramework.util.getDeviceModel() : 'dev'
}

export function compareDevice () {
  const deviceWidthSize = screen.width
  const deviceHeightSize = screen.height
  console.log(`%c▶ device screen size :: ${deviceWidthSize} x ${deviceHeightSize}`, 'color: #7de84b')
  // return deviceWidthSize >= deviceName.minWidth && deviceWidthSize < deviceName.maxWidth && deviceHeightSize >= deviceName.minHeight && deviceHeightSize < deviceName.maxHeight
}

// export function getDeviceName () {
//   if (compareDevice(device.v2_9inP)) {
//     return 'v2_9inP'
//   } else if (compareDevice(device.v2_11in)) {
//     return 'v2_11in'
//   } else if (compareDevice(device.v2_11inP)) {
//     return 'v2_11inP'
//   } else if (compareDevice(device.v2_145inP1)) {
//     return 'v2_145inP1'
//   } else if (compareDevice(device.v2_145inP2)) {
//     return 'v2_145inP2'
//   } else if (compareDevice(device.v2_15in)) {
//     return 'v2_15in'
//   } else if (compareDevice(device.icup1Volvo)) {
//     return 'icup1Volvo'
//   } else if (compareDevice(device.icup2Volvo)) {
//     return 'icup2Volvo'
//   } else {
//     return 'v2_11in'
//   }
// }
// export function getScreenType () {
//   const deviceWidthSize = screen.width
//   const deviceHeightSize = screen.height
//   if (deviceWidthSize < deviceHeightSize) {
//     return 'vertical'
//   } else if (deviceWidthSize === deviceHeightSize) {
//     return 'square'
//   } else {
//     return 'horizontal'
//   }
// }
// export function getPageHeightByDevice () {
//   if (compareDevice(device.v1_11in)) {
//     return 'calc(100% - 80px)'
//   } else if (compareDevice(device.v2_9inP)) {
//     return 'calc(100% - 120px)'
//   } else if (compareDevice(device.v2_11in)) {
//     return 'calc(100% - 120px)'
//   } else if (compareDevice(device.v2_11inP)) {
//     return 'calc(100% - 84px)'
//   } else if (compareDevice(device.v2_145inP1)) {
//     return 'calc(100% - 158px)'
//   } else if (compareDevice(device.v2_145inP2)) {
//     return 'calc(100% - 136px)'
//   } else if (compareDevice(device.v2_15in)) {
//     return 'calc(100% - 136px)'
//   } else {
//     return 'calc(100% - 80px)'
//   }
// }

// export function getScaleByDevice () {
//   if (compareDevice(device.v2_9inP)) {
//     return 1
//   } else if (compareDevice(device.v2_11in)) {
//     return 0.888
//   } else if (compareDevice(device.v2_11inP)) {
//     return 1.143
//   } else if (compareDevice(device.v2_145inP1)) {
//     return 0.888
//   } else if (compareDevice(device.v2_145inP2)) {
//     return 1
//   } else if (compareDevice(device.v2_15in)) {
//     return 1
//   } else {
//     return 1
//   }
// }
// 반응형으로 변경하면서 처리방식 변경
// export function getHistoryCountByDevice () {
//   if (compareDevice(device.v2_9inP)) {
//     return 7
//   } else if (compareDevice(device.v2_11in)) {
//     return 6
//   } else if (compareDevice(device.v2_11inP)) {
//     return 7
//   } else if (compareDevice(device.v2_145inP1)) {
//     return 6
//   } else if (compareDevice(device.v2_145inP2)) {
//     return 9
//   } else if (compareDevice(device.v2_15in)) {
//     return 9
//   } else {
//     return 6
//   }
// }
