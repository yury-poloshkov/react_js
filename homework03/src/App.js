import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
    const data = [
        { id: 1, text: "Сначала сделать так" },
        { id: 2, text: "Потом сделать вот эдак" },
        { id: 3, text: "И в заключении откланяться" },
    ];
    return (
        <div className="App">
            <TemperatureConverter />
            <ToDoList data={data} />
        </div>
    );
}

export default App;
