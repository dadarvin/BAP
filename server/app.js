const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require("./db");
var session = require('express-session');
var path = require('path');
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Client } = require('pg');
const { response } = require('express');
const client = new Client({
    // Lengkapi koneksi dengan database
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "projek_sbd",
});



//connect
client.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Database Connected');
});

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


//create//
app.post('/startRakit', function (req, res) {
    const query = // Gunakan query yang sesuai
        `UPDATE dummy set dummy_val= 1`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(`Data dummy berhasil diubah`);
    });
});

app.post('/login', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    console.log(username);
    console.log(password);
    if (username && password) {
        pool.query('SELECT COUNT(accounts) FROM accounts WHERE username = $1 AND password = $2', [username, password], function (error, results, fields) {
            if (results.rows[0].count == 0) {
                console.log("Login Gagal");
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('http://localhost:3000/admin.html');
                //response.redirect('http://localhost:3000/');
            } else {
                console.log("Login berhasil");
                response.jsonp({ success: true });
            }
            response.end();
        });
    } else {
        console.log("Ga masuk");
        response.send('Please enter Username and Password!');
        response.end();
    }

});

// app.put("/see/ram/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description, speed, modules, price } = req.body;
//         const updateTodo = await pool.query(
//             "UPDATE ram SET name=$1, speed=$2, modules=$3, price=$4  WHERE id_ram = $5",
//             [description, speed, modules, price, id]
//         )
//         res.json("RAM was updated!");
//     } catch (err) {
//         console.error(err.message);
//     }
// });

//read//

// app.get('/login', function (request, response) {
//     response.sendFile(path.join('C:/Users/Dar/Desktop/Projek SBD/Projek_web/client/public' + '/login.html'));
// });

// app.get('/admin', function (request, response) {
//     if (request.session.loggedin) {
//         response.send('Welcome back, ' + request.session.username + '!');
//     } else {
//         response.send('Please login to view this page!');
//     }
//     response.end();
// });

app.get("/see/cpu", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM cpu ORDER by id_cpu");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/case", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM casing ORDER by id_case");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/fan", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM fan ORDER by id_fan");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/gpu", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM gpu ORDER by id_gpu");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/motherboard", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM motherboard ORDER by id_mobo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/storage", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM storage ORDER by id_str");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/psu", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM psu ORDER by id_psu");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/ram", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM ram ORDER by id_ram");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.get("/see/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM $1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/recommend/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT d.id_cpu, d.id_gpu, d.id_mobo, d.id_ram, d.id_case, d.id_str, d.id_psu, d.id_fan FROM data_rekomendasi d INNER JOIN rekomendasi r ON d.fkey = $1 LIMIT 1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/cpu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM cpu WHERE id_cpu=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/gpu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM gpu WHERE id_gpu=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/motherboard/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM motherboard WHERE id_mobo=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/ram/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM ram WHERE id_ram=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/storage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM storage WHERE id_str=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/psu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM psu WHERE id_psu=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/case/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM casing WHERE id_case=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/see/fan/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM fan WHERE id_fan=$1`, [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/price", async (req, res) => {
    try {
        const todo = await pool.query(`SELECT SUM(price) FROM rakitpc`);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//update -- Kerjain disini hum//

app.put("/see/cpu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, core, clock, integrated, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE cpu SET name=$1, core=$2, clock=$3, integrated=$4, price=$5  WHERE id_cpu = $6",
            [description, core, clock, integrated, price, id]
        );
        res.json("CPU was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/gpu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, chip, memory, clock, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE gpu SET name=$1, chip=$2, memory=$3, clock=$4, price=$5  WHERE id_gpu = $6",
            [description, chip, memory, clock, price, id]
        );
        res.json("GPU was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/motherboard/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, chipset, form_factor, ram_slot, brand, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE motherboard SET name=$1, chipset=$2, form_factor=$3, ram_slot=$4, brand=$5, price=$6  WHERE id_mobo = $7",
            [description, chipset, form_factor, ram_slot, brand, price, id]
        );
        res.json("Motherboard was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/ram/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, speed, modules, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE ram SET name=$1, speed=$2, modules=$3, price=$4  WHERE id_ram = $5",
            [description, speed, modules, price, id]
        )
        res.json("RAM was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/storage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, size, tipe, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE storage SET name=$1, size=$2, tipe=$3, price=$4  WHERE id_str = $5",
            [description, size, tipe, price, id]
        );
        res.json("Storage was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/psu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, form_factor, watt, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE psu SET name=$1, form_factor=$2, watt=$3, price=$4  WHERE id_psu = $5",
            [description, form_factor, watt, price, id]
        );
        res.json("PSU was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/case/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, form_factor, brand, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE casing SET name=$1, ff_tipe= $2, brand=$3, price=$4 WHERE id_case = $5",
            [description, form_factor, brand, price, id]
        );

        res.json("Casing was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/fan/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, rpm, price } = req.body;
        const updateTodo = await pool.query(
            "UPDATE fan SET name=$1, rpm=$2, price=$3 WHERE id_fan = $4",
            [description, rpm, price, id]
        );
        res.json("Fan was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/see/rakitpc/:id/:id2", async (req, res) => {
    try {
        const { id, id2 } = req.params;
        const updateTodo = await pool.query(
            "UPDATE rakitpc set price=$1 WHERE id_rakit=$2",
            [id, id2]
        );
        res.json("Rakit was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete//
app.delete("/see/case/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM casing WHERE id_case = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/cpu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM cpu WHERE id_cpu = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/fan/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM fan WHERE id_fan = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/gpu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM gpu WHERE id_gpu = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/motherboard/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM motherboard WHERE id_mobo = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/psu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM psu WHERE id_psu = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/ram/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM ram WHERE id_ram = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/see/storage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM storage WHERE id_str = $1", [
            id
        ]);
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(process.env.PORT, () => console.log('app is running'));
