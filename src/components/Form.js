import { useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
const Form = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    let data;
    if (username.trim().length === 0) {
      data = "Please enter a valid name and age.";
      onAddUser(data);
      return;
    }
    if (+age <= 0) {
      data = "Please enter a valid age (>0).";
      onAddUser(data);
      return;
    }
    onAddUser({ username, age });
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameHandler} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={ageHandler} />
      </div>
      <Button />
    </form>
  );
};

export default Form;
