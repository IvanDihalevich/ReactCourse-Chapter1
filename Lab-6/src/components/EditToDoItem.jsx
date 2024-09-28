import { useState } from "react";
import SaveButton from "./SaveButton";

// eslint-disable-next-line react/prop-types
const EditToDoItem = ({ id, initialTitle, onSave, onCancel }) => {
  const [newTitle, setNewTitle] = useState(initialTitle);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (newTitle.trim() === "") {
      setError("Title is required.");
      return;
    }
    onSave(id, newTitle);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className={error ? "input error" : "input"}
        style={{ flex: 1, marginRight: '10px' }} 
      />
      {error && <p className="error-message">{error}</p>}
      <div className="buttonGroup">
        <SaveButton onClick={handleSave} label="Save" />
        <button onClick={onCancel} className="editButton">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditToDoItem;
