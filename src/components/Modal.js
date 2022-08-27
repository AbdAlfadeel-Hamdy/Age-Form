import styles from "./Modal.module.css";

const Modal = ({ message, onClose }) => {
  return (
    <div onClick={onClose} className={styles.modal}>
      <div className={styles.message}>
        <h2>Invalid Input</h2>
        <p>{message}</p>
        <button onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
