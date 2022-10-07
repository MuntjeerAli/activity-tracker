import Tasks from '../models/taskModel.js';

export const getTask = () => {}

export const getAllTasks = () => {}

export const createTask = (req, res) => {
    console.log(req.body);
    const {name, completed} = req.body;
    const newTask = new Tasks({
        name: name,
        completed: completed
    });
    newTask.save()
    .then(() => res.status(201).json({"success": true, "message": {newTask}}))
    .catch((error) => res.json({"success" : false, "message" : `${err}`}))
}

export const updateTask = () =>{}

export const deleteTask = () => {}