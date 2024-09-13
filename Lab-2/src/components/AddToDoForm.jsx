function AddToDoForm({ title, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        name="title"
        placeholder="Add a task"
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>
        Add
      </button>
    </form>
  )
}

const styles = {
  form: {
    display: 'flex',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    marginRight: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flex: 1,
  },
  addButton: {
    padding: '8px 16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}

export default AddToDoForm
