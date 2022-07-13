import { TOKEN_KEY } from "../../constants";
import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/auth" });

const authenticate = (username, password) => {
  return client.post("/login", { username: username, password: password});
};

const authorize = () => {
  return client.get("/authorize", {}, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`}
  });
};

const register = (user) => {
  return client.post("/register", user);
}

const confirmRegister = (token, code) => {
  return client.post("/register/confirm", { token, code })
}

const checkIfNotRegistered = (email) => {
  return client.post("/check", email);

}
export const authService = {
  authenticate: (username, password) => authenticate(username, password),
  authorize: () => authorize(),
  register: (user) => register(user),
  confirmRegister: (token, code) => confirmRegister(token, code),
  checkIfNotRegistered: (email) => checkIfNotRegistered(email),
};
