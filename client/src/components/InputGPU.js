import React, { Fragment, useEffect, useState } from "react";
import EditGPU from "./EditGPU";

const InputGPU = () => {
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/gpu/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_gpu !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/gpu");
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
            <h2>GPU Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Chip</th>
                        <th>Memory</th>
                        <th>Clock</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_gpu}</td>
                            <td>{todo.name}</td>
                            <td>{todo.chip}</td>
                            <td>{todo.memory}</td>
                            <td>{todo.clock}</td>
                            <td>{todo.price}</td>
                            <td><EditGPU todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_gpu)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default InputGPU;