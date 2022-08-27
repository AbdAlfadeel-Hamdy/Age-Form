import styles from "./User.module.css";
const User = ({ username, age }) => {
  return (
    <div className={styles.user}>
      <p className={styles.username}>{username}</p>
      <p className={styles.age}>{age} years old</p>
    </div>
  );
};

export default User;
