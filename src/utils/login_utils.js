export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const setUser = (userId, role) => {
  localStorage.setItem("role", role);
  localStorage.setItem("userId", userId);
};

export const getUserId = () => {
  return localStorage.getItem("userId");
};
