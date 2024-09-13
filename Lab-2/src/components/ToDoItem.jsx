function ToDoItem({ id, title, handleDelete }) {
  return (
    <li style={styles.listItem}>
      <span>{title}</span>
      <button onClick={() => handleDelete(id)} style={styles.deleteButton}>
        Delete
      </button>
    </li>
  )
}

const styles = {
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid #ccc',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}

export default ToDoItem
