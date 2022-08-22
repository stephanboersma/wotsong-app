import { auth } from '../firebase';
export const BASE_URL = String(process.env.REACT_APP_BASE_URL);

const getHeaders = async (with_token) => {
  var headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (with_token) {
    const token = await auth.currentUser.getIdToken();
    console.log('Token', token);
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }
  return headers;
};

export const post = async (endpoint, payload, with_token = false) => {
  console.log(`[POST] ${BASE_URL}/${endpoint}`, payload);

  const options = {
    method: 'POST',
    headers: await getHeaders(with_token),
    body: JSON.stringify(payload),
  };
  return await fetch(`${BASE_URL}/${endpoint}`, options);
};

export const get = async (endpoint, with_token = false) => {
  console.log(`[GET] ${BASE_URL}/${endpoint}`);
  const options = {
    method: 'GET',
    headers: await getHeaders(with_token),
  };
  return await fetch(`${BASE_URL}/${endpoint}`, options);
};
