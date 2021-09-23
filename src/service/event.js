import axios from "axios";

const backendURL = process.env.VUE_APP_BACKEND_URL;

// イベント一覧取得
export const getEventAll = () => {
  const response = axios.get(`${backendURL}/events`);
  return response;
};
