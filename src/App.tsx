// import './App.css'
import Todo_list from "./components/todo_list";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center text-white bg-black">
      <div>
        <h2 className="text-3xl font-bold text-center p-4">Todo List</h2>
        <div className="w-[350px] ">
          <Todo_list />
        </div>
      </div>
    </div>
  );
}

export default App;
