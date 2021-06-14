import React, { Fragment, useEffect, useState } from "react";
import EditRAM from "./EditRAM";

const InputRAM = () => {
    const [todos, setTodos] = useState([]);

    //delete todo function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/ram/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_ram !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/ram");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getHardware();
    }, []);

    console.log(todos);

    return (
        <Fragment>
            <h2>RAM Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Speed</th>
                        <th>Modules</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_ram}</td>
                            <td>{todo.name}</td>
                            <td>{todo.speed}</td>
                            <td>{todo.modules}</td>
                            <td>{todo.price}</td>
                            <td><EditRAM todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_ram)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment >
    );
};

export default InputRAM;