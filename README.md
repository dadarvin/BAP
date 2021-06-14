# Welcome to BAP: Build A PC !

Projek Web BAP (Build A PC) merupakan sebuah website yang menyediakan 
daftar berbagai komponen PC yang dapat membantu para pengunjung
untuk menentukan komponen PC yang ingin dibeli. Selain menampilkan daftar komponen
pengunjung dapat juga menggunakan simulasi perakitan PC untuk memperkiarakan
harga yang akan dikeluarkan ketika ingin merakit sebuah PC.

## Fitur yang disediakan
1. Menampilkan beberapa list Komponen PC seperti CPU, Motherboard, RAM, VGA, Storage, PSU, Casing, dan Fan
2. Dapat mengatur list komponen yang ditampilkan pada tabel
3. Memberikan rekomendasi PC yang dapat diklik untuk melihat detailnya
4. Merakit PC sendiri sesuai komponen pilihan dan menampilkan harganya

## Library yang dibutuhkan</br>
<b>Backend</b>
1. Express js `npm install express`
2. Postgres (pg) `npm install pg`
3. Cors Middleware `npm install cors`
4. script Monitoring server `npm install nodemon` (opsional)

<b>Frontend</b>
1. Reactjs `npm install react`

## Cara Menjalankan Website pada local server
### Memasukkan File database.sql ke postgres
1. Salin seluruh query yang terdapat pada `database.sql`
2. Masukkan seluruh query, fungsi, dan trigger ke dalam psql 

### Mengaktifkan server Frontend dan Backend
3. Gunakan terminal atau powershell dan cd ke folder `./client` kemudian jalankan `npm start`
4. Buka terminal atau powershell kedua dan cd ke folder `./server` kemudian jalankan `nodemon app` atau `node app.js`

### Note
- Website akan dijalankan pada server 3000 dan server pada 3080, Jika port yang tertera tidak available dapat diganti pada file `.env`

</br>


<b>Proyek Sistem Basis Data </br>Kelompok 5A:</b>
Darvin, Frederik DJ, M Ilham MS, Mario Claudius
