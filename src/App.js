import React, { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";
import UsersList from "./components/UsersList";
function App() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const addUser = (data) => {
    if (typeof data === "string") {
      setErrorMessage(data);
      setError(true);
      return;
    }
    setUsers((prevUsers) => [...prevUsers, data]);
  };

  const closeModal = () => {
    setError(false);
  };
  return (
    <div>
      <Form onAddUser={addUser} />
      {error ? <Modal message={errorMessage} onClose={closeModal} /> : null}
      {users.length === 0 ? null : <UsersList users={users} />}
    </div>
  );
}

export default App;
