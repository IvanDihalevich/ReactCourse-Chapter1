import { useState } from "react";
import EditToDoItem from "./EditToDoItem";

// eslint-disable-next-line react/prop-types
function ToDoItem({ id, title, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (id, newTitle) => {
    handleEdit(id, newTitle);
    setIsEditing(false);
  };

  return (
    <li className="listItem">
      {isEditing ? (
        <EditToDoItem
          id={id}
          initialTitle={title}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <span>{title}</span>
          <div className="buttonGroup">
            <button onClick={() => handleDelete(id)} className="deleteButton">
              Delete
            </button>
            <button onClick={() => setIsEditing(true)} className="editButton">
              Edit
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
