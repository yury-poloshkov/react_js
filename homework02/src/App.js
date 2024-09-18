import "./App.css";
import CommentsList from "./components/CommentsList/CommentsList";

function App() {
    const data = [
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
    ];
    return (
        <div className="App">
            <CommentsList comments={data} />
        </div>
    );
}

export default App;
