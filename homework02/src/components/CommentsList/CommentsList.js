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

export default CommentsList;
