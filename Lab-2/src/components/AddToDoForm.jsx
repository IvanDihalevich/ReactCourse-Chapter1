function AddToDoForm({ title, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        name="title"
        placeholder="Add a task"
        className="input"
      />
      <button type="submit" className="addButton">
        Add
      </button>
    </form>
  )
}

export default AddToDoForm
