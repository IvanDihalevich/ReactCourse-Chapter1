import useFetch from "../hooks/useFetch";

function useGetAllToDo() {
  const { isLoading, data: fetchedToDo, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const toDo = fetchedToDo ? fetchedToDo.slice(0, 10) : [];

  return { isLoading, toDo, error };
}

export default useGetAllToDo;
