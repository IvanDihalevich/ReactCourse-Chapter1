import ToDoItem from './ToDoItem'

function ToDoList({ toDo, handleDelete }) {
  return (
    <ul className="list">
      {toDo.map(({ id, title }) => (
        <ToDoItem key={id} id={id} title={title} handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

export default ToDoList
