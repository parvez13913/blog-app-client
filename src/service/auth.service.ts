import { authKey } from "@/constants/storageKey";
import { instance } from "@/helpers/axios/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await instance({
    url: `${getBaseUrl()}/graphql`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: {
      query: `
        mutation RefreshToken {
          refreshToken {
            token
            userError
          }
        }
      `,
    },
  });
};
