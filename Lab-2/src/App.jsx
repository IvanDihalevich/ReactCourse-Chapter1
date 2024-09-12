import { useState } from 'react'
import './App.css'

function App() {
  const [toDo, setToDo] = useState([])
  const [title, setTitle] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') return
    const newToDo = {
      id: Date.now(),
      title: title,
    }
    setToDo([...toDo, newToDo])
    setTitle('')
  }

  const handleDelete = (id) => {
    setToDo(toDo.filter((item) => item.id !== id))
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredToDo = toDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My List</h1>
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

      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        name="search"
        placeholder="Search tasks"
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredToDo.map(({ id, title }) => (
          <li key={id} style={styles.listItem}>
            <span>{title}</span>
            <button
              onClick={() => handleDelete(id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
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
  list: {
    listStyleType: 'none',
    padding: 0,
  },
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

export default App
