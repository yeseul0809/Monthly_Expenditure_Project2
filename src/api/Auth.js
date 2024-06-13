import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const AUTH_API = "https://moneyfulpublicpolicy.co.kr";
export const authApi = axios.create({ baseURL: AUTH_API });

// 토큰 만료시 로그아웃기능
authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response && error.response.status === 401) {
      // 토큰 만료(401) 등 인증 오류 발생하면
      console.log("잘들어옴!!");
      const { logout } = useContext(AuthContext);
      console.log(logout);
      Swal.fire({
        title: "세션 만료",
        text: "로그인 세션이 만료되었습니다. 다시 로그인해주세요.",
        icon: "warning",
        confirmButtonText: "확인",
      }).then(() => {
        logout(); // 로그아웃 처리
      });
    }
    return Promise.reject(error);
  }
);

export const fetchUserInfo = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await authApi.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");
  const response = await authApi.patch(`/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
