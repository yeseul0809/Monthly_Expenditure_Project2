import axios from "axios";

export const AUTH_API = "https://moneyfulpublicpolicy.co.kr";

export const fetchUserInfo = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.get(`${AUTH_API}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.patch(`${AUTH_API}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
