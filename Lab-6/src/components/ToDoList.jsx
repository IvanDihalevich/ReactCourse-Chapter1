/* eslint-disable react/prop-types */
import ToDoItem from './ToDoItem';

function ToDoList({ toDo, handleDelete, handleEdit }) {
  return (
    <ul className="list">
      {toDo.map(({ id, title }) => (
        <ToDoItem key={id} id={id} title={title} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </ul>
  );
}

export default ToDoList;
