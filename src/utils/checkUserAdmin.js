export const checkUserAdmin = () =>
  localStorage.getItem("AUTH_USERNAME") == import.meta.env.VITE_ADMIN_EMAIL && localStorage.getItem("AUTH_TOKEN")
    ? true
    : false
