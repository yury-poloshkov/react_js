import { useState } from "react";
import "./ToDoList.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

// function generate(element) {
//     return [0, 1, 2].map((value) =>
//         React.cloneElement(element, {
//             key: value,
//         })
//     );
// }

const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

function ToDoList({ data }) {
    const [toDoList, setToDoList] = useState([...data]);
    // console.log(toDoList);
    // const deleteComment = (event) => {
    //     setCommentsList(commentsList.filter((comment) => +comment.id !== +event.target.dataset.keyid));
    // };
    // return (
    //     <>
    //         <ul className="comments__title">Список дел:</ul>
    //         {commentsList.map((comment) => (
    //             <div className="comments__item">
    //                 <li key={comment.id}>{comment.text}</li>
    //                 <button className="comments__button" onClick={deleteComment} data-keyid={comment.id}>
    //                     Delete comment {comment.id}
    //                 </button>
    //             </div>
    //         ))}
    //     </>
    // );

    const addToDoItem = () => {
        let newItemIndex = 1;
        if (toDoList.length !== 0) newItemIndex = toDoList[toDoList.length - 1].id + 1;
        setToDoList([...toDoList, { id: newItemIndex, text: "New Item to Do" }]);
    };

    const deleteToDoItem = (event) => {
        console.log(event.target);
        setToDoList(toDoList.filter((toDoItem) => +toDoItem.id !== +event.target.dataset.itemid));
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 1200 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div">
                            СПИСОК ДЕЛ:
                            <AddBoxIcon fontSize={"large"} sx={{ width: 75 }} onClick={addToDoItem} />
                        </Typography>
                        <Demo>
                            <List>
                                {toDoList.map((toDoItem) => {
                                    return (
                                        <ListItem
                                            key={toDoItem.id}
                                            secondaryAction={
                                                <IconButton
                                                    edge="end"
                                                    aria-label="delete"
                                                    data-itemid={toDoItem.id}
                                                    onClick={deleteToDoItem}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={toDoItem.text} secondary={"ID: " + toDoItem.id} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default ToDoList;
