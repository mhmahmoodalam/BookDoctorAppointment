/**
 *  generic file for all fetch related opertaions
 */

import { getToken } from "./TokenUtil";

const baseUrl = "";
export const getDoctors = (filter = {}) => {
  const queryParams = Object.keys(filter)
    .map((key) => key + "=" + filter[key])
    .join("&");
  return fetch(baseUrl + `/doctors?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting doctors list");
    });
};

export const getSpeciality = () => {
  return fetch(baseUrl + "/doctors/speciality", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting speciality list");
    });
};

export const getFilteredDoctors = (filter = {}) => {
  const queryParams = Object.keys(filter)
    .map((key) => key + "=" + filter[key])
    .join("&");
  return fetch(baseUrl + `/movies?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting movies list");
    });
};

export const getDoctorDetail = (id) => {
  return fetch(baseUrl + `/doctors/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting movies details");
    });
};

export const getUserDetails = (username) => {
  return fetch(baseUrl + `/users/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    }
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting movies show details");
    });
};

export const getDoctorAvailableTimeSlot = (doctorId,date) => {
  return fetch(baseUrl + `/doctors/${doctorId}/timeSlots?date=${date}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    }
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while saving booking details");
    });
};

export const login = (formData) => {
  return fetch(baseUrl + `/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: `Basic ${btoa(
        `${formData.email}:${formData.password}`
      )}`,
    },
  });
};

export const registerAccount = (formData) => {
  return fetch(baseUrl + `/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify(formData),
  });
};
