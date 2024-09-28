import PageTitle from "./components/PageTitle.jsx";
import ToDoListContainer from "./components/ToDoListContainer.jsx";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <PageTitle>My To Do List</PageTitle>
      <ToDoListContainer />
    </div>
  );
}

export default App;
