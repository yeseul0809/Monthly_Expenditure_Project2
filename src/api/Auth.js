import axios from "axios";

const AUTH_API = "https://moneyfulpublicpolicy.co.kr";

export const fetchUserInfo = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.get(`${AUTH_API}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
