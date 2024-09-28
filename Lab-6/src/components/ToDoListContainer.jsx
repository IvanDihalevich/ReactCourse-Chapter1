import { useState, useEffect } from "react";
import AddToDoForm from "./AddToDoForm.jsx";
import ToDoList from "./ToDoList.jsx";
import SearchInput from "./SearchInput.jsx";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

function ToDoListContainer() {
  const { isLoading, data: fetchedToDo, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (fetchedToDo) {
      setToDo(fetchedToDo.slice(0, 10));
    }
  }, [fetchedToDo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    const newToDo = {
      id: Date.now(),
      title: title,
    };
    setToDo([...toDo, newToDo]);
    setTitle("");
  };

  const handleDelete = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredToDo = toDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleEdit = (id, newTitle) => {
    setToDo((prevToDo) =>
      prevToDo.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    );
  };

  if (error) return <p>Error loading data</p>;

  return (
    <Loading isLoading={isLoading}>
      <AddToDoForm
        title={title}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <SearchInput value={searchValue} onChange={handleSearchValueChange} />
      <ToDoList toDo={filteredToDo} handleDelete={handleDelete} handleEdit={handleEdit} />
    </Loading>
  );
}

export default ToDoListContainer;