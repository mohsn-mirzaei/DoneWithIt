import * as Updates from "expo-updates";

const settings = {
  dev: {
    apiUrl: "http://192.168.150.22:9000/api",
  },
  staging: {
    apiUrl: "https://donewithit.mohsenmirzaei.ir/api",
  },
  prod: {
    apiUrl: "https://donewithit.mohsenmirzaei.ir/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Updates.channel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
