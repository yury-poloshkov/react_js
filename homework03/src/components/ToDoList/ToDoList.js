import { useState } from "react";
import "./ToDoList.css";

function ToDoList({ comments }) {
    const [commentsList, setCommentsList] = useState([...comments]);

    console.log(comments);

    const deleteComment = (event) => {
        setCommentsList(commentsList.filter((comment) => +comment.id !== +event.target.dataset.keyid));
    };

    return (
        <>
            <ul className="comments__title">Список дел:</ul>
            {commentsList.map((comment) => (
                <div className="comments__item">
                    <li key={comment.id}>{comment.text}</li>
                    <button className="comments__button" onClick={deleteComment} data-keyid={comment.id}>
                        Delete comment {comment.id}
                    </button>
                </div>
            ))}
        </>
    );
}

export default ToDoList;
