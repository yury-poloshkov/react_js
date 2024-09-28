import { useState } from "react";
import "./CommentsList.css";

function CommentsList({ comments }) {
    const [commentsList, setCommentsList] = useState([...comments]);

    const deleteComment = (event) => {
        setCommentsList(commentsList.filter((comment) => comment.id != event.target.dataset.keyid));
    };

    return (
        <>
            <ul className="comments__title">Comments:</ul>
            {commentsList.map((comment) => (
                <li className="comments__item" key={comment.id}>
                    <p>{comment.text}</p>
                    <button className="comments__button" onClick={deleteComment} data-keyid={comment.id}>
                        Delete comment {comment.id}
                    </button>
                </li>
            ))}
        </>
    );
}

export default CommentsList;
