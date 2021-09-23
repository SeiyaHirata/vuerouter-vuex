import axios from "axios";

const backendURL = process.env.VUE_APP_BACKEND_URL;

// イベント一覧取得
export const getEventAll = () => {
  const response = axios.get(`${backendURL}/events`);
  return response;
};

// イベント単体取得
export const getEvent = id => {
  const response = axios.get(`${backendURL}/events/${id}`);
  return response;
};

// イベント新規作成
export const createEvent = data => {
  const response = axios.post(`${backendURL}/events`, data);
  return response;
};

// イベント削除
export const deleteEvent = id => {
  const response = axios.put(`${backendURL}/events/${id}/delete`);
  return response;
};
