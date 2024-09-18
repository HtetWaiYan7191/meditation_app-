import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  async saveItem(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  },
  async getItem(key: string) {
    const result = await AsyncStorage.getItem(key);
    return result;
  },
  async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
  },
};

export const StorageKey = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  userID: "userID",
  userPassword: "userPassword",
  keyChain: "keyChain",
};
