import { useState } from "react";

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
import TextField from "@mui/material/TextField";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

function ToDoList({ data }) {
    const [toDoList, setToDoList] = useState([...data]);
    const [newToDoItem, setNewToDoItem] = useState("");
    const [inputBoxNewToDoItem, setInputBoxNewToDoItem] = useState("none");

    const showInputBox = () => {
        setInputBoxNewToDoItem("block");
    };

    const hideInputBox = () => {
        setInputBoxNewToDoItem("none");
        clearNewToDoItem();
    };

    const clearNewToDoItem = () => {
        setNewToDoItem("");
    };

    const inputNewToDoItem = (event) => {
        setNewToDoItem(event.target.value);
        console.log(newToDoItem);
    };

    const addToDoItem = () => {
        if (newToDoItem.trim() > "") {
            let newItemIndex = 1;
            if (toDoList.length !== 0) newItemIndex = toDoList[toDoList.length - 1].id + 1;
            setToDoList([...toDoList, { id: newItemIndex, text: newToDoItem }]);
            clearNewToDoItem();
        }
    };

    const deleteToDoItem = (event) => {
        setToDoList(
            toDoList.filter((toDoItem) => +toDoItem.id !== +event.target.parentElement.parentElement.dataset.itemid)
        );
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 1200 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div">
                            СПИСОК ДЕЛ:
                            <AddBoxIcon fontSize={"large"} sx={{ width: 75 }} onClick={showInputBox} />
                        </Typography>
                        <Box sx={{ display: inputBoxNewToDoItem }}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Новая задача"
                                variant="outlined"
                                value={newToDoItem}
                                onChange={inputNewToDoItem}
                            />
                            <ButtonGroup variant="contained" aria-label="Basic button group">
                                <Button onClick={addToDoItem}>Сохранить</Button>
                                <Button onClick={clearNewToDoItem}>Очистить</Button>
                                <Button onClick={hideInputBox}>Скрыть</Button>
                            </ButtonGroup>
                        </Box>
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
