import React, { Fragment, useEffect, useState } from "react";
import EditMotherboard from "./EditMotherboard";

const InputMotherboard = () => {
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/motherboard/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_mobo !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/motherboard");
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
            <h2>Motherboard Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>chipset</th>
                        <th>form_factor</th>
                        <th>ram_slot</th>
                        <th>brand</th>
                        <th>price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_mobo}</td>
                            <td>{todo.name}</td>
                            <td>{todo.chipset}</td>
                            <td>{todo.form_factor}</td>
                            <td>{todo.ram_slot} </td>
                            <td>{todo.brand}</td>
                            <td>{todo.price}</td>
                            <td><EditMotherboard todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_mobo)}
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

export default InputMotherboard;