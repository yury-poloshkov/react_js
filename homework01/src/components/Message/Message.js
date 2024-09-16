import "./Message.css";

function Message(props) {
    return (
        <div className="Message">
            <h2 className="Message__header">Message recieved:</h2>
            <p className="Message__text">{props.text}</p>
        </div>
    );
}

export default Message;
