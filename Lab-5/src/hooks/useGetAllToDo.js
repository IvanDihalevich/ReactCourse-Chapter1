import useFetch from "../hooks/useFetch";

function useGetAllToDo() {
  const { isLoading, data: fetchedToDo, error, setData } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const toDo = fetchedToDo ? fetchedToDo.slice(0, 10) : [];

  return { isLoading, toDo, error, setData };

  
}

export default useGetAllToDo;
