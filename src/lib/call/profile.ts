import APIConfig from "../api";

export const getProfile = async (token: string) => {
  return await APIConfig.get("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
