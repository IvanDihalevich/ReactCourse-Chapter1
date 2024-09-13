function ToDoItem({ id, title, handleDelete }) {
  return (
    <li className="listItem">
      <span>{title}</span>
      <button onClick={() => handleDelete(id)} className="deleteButton">
        Delete
      </button>
    </li>
  )
}

export default ToDoItem
