/**
 * @providesModule react-native-device-info
 */

var { RNDeviceInfo } = require('react-native').NativeModules;

module.exports = {
  getUniqueID: function () {
    return RNDeviceInfo.deviceId;
  },
  getManufacturer: function () {
    return "Apple";
  },
  getModel: function () {
    return RNDeviceInfo.model;
  },
  getSystemName: function () {
    return RNDeviceInfo.systemName;
  },
  getSystemVersion: function () {
    return RNDeviceInfo.systemVersion;
  }
};
