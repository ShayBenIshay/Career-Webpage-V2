import "./modal.css";

const Modal = ({ isOpen, onClose, title, backgroundColor, message }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor }}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required>
              {message}
            </textarea>
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
