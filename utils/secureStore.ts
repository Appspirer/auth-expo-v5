import { UserInfo } from "@/api/auth";
import * as SecureStore from "expo-secure-store";

const KEY_USER_INFO = "user_info";

export const getUserInfo = async () => {
  const userInfo = await SecureStore.getItemAsync(KEY_USER_INFO);
  return userInfo;
};

export const setUserInfo = async (userInfo: UserInfo) => {
  await SecureStore.setItemAsync(KEY_USER_INFO, JSON.stringify(userInfo));
};

export const removeUserInfo = async () => {
  await SecureStore.deleteItemAsync(KEY_USER_INFO);
};
