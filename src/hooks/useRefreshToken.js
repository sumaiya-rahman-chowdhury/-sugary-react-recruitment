import axios from "../api/axios";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { auth, loginUser, logoutUser } = useAuth();
  // console.log(auth.Token,auth?.RefreshToken)
  const refresh = async () => {
    try {
      const response = await axios.post("/Account/RefreshToken", {
        AccessToken: auth?.Token,
        RefreshToken: auth?.RefreshToken,
      });

      loginUser(response.data);
      console.log(response.data.AccessToken);
      return response.data.AccessToken;
    } catch (error) {
      console.error("Failed to refresh token", error);
      logoutUser();
      return null;
    }
  };

  return refresh;
};

export default useRefreshToken;
