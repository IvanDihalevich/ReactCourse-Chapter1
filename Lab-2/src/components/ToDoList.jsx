import ToDoItem from './ToDoItem'

function ToDoList({ toDo, handleDelete }) {
  return (
    <ul style={styles.list}>
      {toDo.map(({ id, title }) => (
        <ToDoItem key={id} id={id} title={title} handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
}

export default ToDoList
