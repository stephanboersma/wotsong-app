export const calculateExpiresIn = (expires_in) => {
  const d = new Date(Date.now());
  d.setSeconds(d.getSeconds() + expires_in);
  return d;
};
