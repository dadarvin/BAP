import React, { Fragment, useEffect, useState } from "react";

const Login = () => {
    const [username, setDescription] = useState([]);
    const [password, setDescription2] = useState([]);

    const post = async e => {
        try {
            const body = { username, password };
            const response = await fetch(
                `http://localhost:3080/login`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }

            );
            console.log(response.ok);
            if (response.ok == true) {
                alert("Login berhasil");
            }
        } catch (err) {
            console.error(err.message);
            alert("Login Gagal");
        }

    };


    return (
        <Fragment>
            <button type="button" class="btn btn-outline-warning btn-sm" data-toggle="modal" data-target="#myModal">
                Login
            </button>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Login</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            <div class="form-label-group">
                                <input type="text" name="username" id="inputEmail" class="form-control" placeholder="Username" required
                                    autofocus onChange={e => setDescription(e.target.value)}></input>
                                <label for="inputEmail">Username</label>
                            </div>

                            <div class="form-label-group">
                                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password"
                                    required onChange={e => setDescription2(e.target.value)}></input>
                                <label for="inputPassword">Password</label>
                            </div>
                        </div>


                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success" data-dismiss="modal" onClick={e => post(e)}>Login</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>


                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Login;