import { useSelector } from "react-redux";
import { UserItem } from "./UserItem";

export const UsersList = () => {
  const users = useSelector((state) => state.page.users);
  const auth = useSelector((state) => state.auth);
  const showUsers = (users) => {
    return users.map((user) => {
      return user.id !== auth.id ? <UserItem key={user.id} user={user} /> : null;
    });
  };
  if (users && users.data.length > 0) {
    return showUsers(users.data);
  } else {
    return null;
  }
};
