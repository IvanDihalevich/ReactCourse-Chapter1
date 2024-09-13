import React, { useState } from 'react'
import AddToDoForm from './AddToDoForm.jsx'
import ToDoList from './ToDoList.jsx'
import SearchInput from './SearchInput.jsx'

function ToDoListContainer() {
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
    <>
      <AddToDoForm
        title={title}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <SearchInput value={searchValue} onChange={handleSearchValueChange} />
      <ToDoList toDo={filteredToDo} handleDelete={handleDelete} />
    </>
  )
}

export default ToDoListContainer
