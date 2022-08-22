import { get, post } from '.';
export const saveUser = async (user) => {
  return await (await post('me', user, true)).json();
};

export const getCurentUser = async () => {
  return await (await get('me', true)).json();
};
