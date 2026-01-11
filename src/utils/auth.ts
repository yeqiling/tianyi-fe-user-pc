export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  const expireTime = localStorage.getItem('TOKEN_EXPIRE_TIME');

  if (!token || !expireTime) {
    return false;
  }

  const expireAt = Number(expireTime);
  if (!Number.isFinite(expireAt)) {
    return false;
  }

  return Date.now() < expireAt;
};

export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('userinfo');
  localStorage.removeItem('TOKEN_EXPIRE_TIME');
};
