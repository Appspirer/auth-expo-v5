export type UserInfo = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
};

export const login = async () => {
  // Delay 3s
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Fake token
  const userInfo: UserInfo = {
    accessToken: "access_token",
    refreshToken: "refresh_token",
    user: {
      id: 1,
      email: "user@example.com",
      name: "test user 1",
    },
  };

  // Return token
  return userInfo;
};

export const logout = async () => {
  // Delay 3s
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return;
};
