export const isLogin = () => {
    if (localStorage.getItem('authToken')) {
        return true;
    }

    return false;
}

const parseToken = (t) => {
    if (!t) {
      return;
    }
    const base64URL = t.split(".")[1];
    const base64 = base64URL.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
export const isAdminTrue = ()=> {
    
    if (localStorage.getItem('authToken')) {

  const token = localStorage.getItem("authToken");
  const isAdmin = parseToken(token).isAdmin;
  return isAdmin=='true' ? true:false;

    }


}