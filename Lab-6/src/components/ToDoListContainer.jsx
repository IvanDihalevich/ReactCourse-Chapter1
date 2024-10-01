import { useState } from "react";
import AddToDoForm from "./AddToDoForm.jsx";
import ToDoList from "./ToDoList.jsx";
import SearchInput from "./SearchInput.jsx";
import useGetAllToDo from "../hooks/useGetAllToDo";
import Loading from "./Loading";

function ToDoListContainer() {
  const { isLoading, toDo: fetchedToDo, error } = useGetAllToDo();
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    const newToDo = {
      id: Date.now(),
      title: title,
    };
    setToDo((prevToDo) => [...prevToDo, newToDo]);
    setTitle("");
  };

  const handleDelete = (id) => {
    setToDo((prevToDo) => prevToDo.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEdit = (id, newTitle) => {
    setToDo((prevToDo) =>
      prevToDo.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  const filteredToDo = [...fetchedToDo, ...toDo].filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (error) return <p>Error loading data</p>;

  return (
    <Loading isLoading={isLoading}>
      <AddToDoForm
        title={title}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <SearchInput value={searchValue} onChange={handleSearchValueChange} />
      <ToDoList
        toDo={filteredToDo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Loading>
  );
}

export default ToDoListContainer;
