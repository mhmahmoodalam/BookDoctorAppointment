/**
 *  generic file for token related functionality
 */

const tokenKey = "access-token";
const userNameKey = "username";

export const isAuthenticated = () => {
  const token = getToken();
  if (token && token !== "") {
    return true;
  }
  return false;
};

export const getToken = () => {
  return sessionStorage.getItem(tokenKey);
};

export const setToken = (response) => {
  response.json().then(data => {
    sessionStorage.setItem(tokenKey, data.accessToken);
    setUserName(data.emailAddress)
  })
  
};

export const clearToken = () => {
  sessionStorage.removeItem(tokenKey);
  clearUserName();
};

export const getUserName = () => {
  return sessionStorage.getItem(userNameKey);
};

export const setUserName = (username) => {
  sessionStorage.setItem(userNameKey, username);
};

export const clearUserName = () => {
  sessionStorage.removeItem(userNameKey);
};
