import React, { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const addUser = (data) => {
    if (typeof data === "string") {
      setErrorMessage(data);
      setError(true);
    }
  };

  const closeModal = () => {
    setError(false);
  };
  return (
    <div>
      <Form onAddUser={addUser} />
      {error ? <Modal message={errorMessage} onClose={closeModal} /> : null}
    </div>
  );
}

export default App;
