import styles from "./UsersList.module.css";
import User from "./User";
const UsersList = ({ users }) => {
  const renderedUsers = users.map((user) => (
    <User key={Math.random()} username={user.username} age={user.age} />
  ));
  return <div className={styles["users-list"]}>{renderedUsers}</div>;
};

export default UsersList;
