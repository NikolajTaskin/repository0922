export function loginFromToken() {
  let token = localStorage.getItem('token');

  if (token) {
    return true;
  }

  return false;
}

export function login() {

}
