/**
 *  generic file for token related functionality
 */

const tokenKey = "access-token";
const customerUUIDKey = "UUID";

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
  })
  
};

export const clearToken = () => {
  sessionStorage.removeItem(tokenKey);
  clearCustomerUUID();
};

export const getCustomerUUID = () => {
  return sessionStorage.getItem(customerUUIDKey);
};

export const setCustomerUUID = (uuid) => {
  sessionStorage.setItem(customerUUIDKey, uuid);
};

export const clearCustomerUUID = () => {
  sessionStorage.removeItem(customerUUIDKey);
};
