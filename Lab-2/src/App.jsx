import { useState } from 'react'
import './App.css'
import AddToDoForm from './components/AddToDoForm.jsx'
import ToDoList from './components/ToDoList.jsx'

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
      <AddToDoForm
        title={title}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        name="search"
        placeholder="Search tasks"
        style={styles.input}
      />
      <ToDoList toDo={filteredToDo} handleDelete={handleDelete} />
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
  input: {
    padding: '8px',
    marginRight: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flex: 1,
  },
}

export default App
