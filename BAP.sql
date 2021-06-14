-- Pembuatan Tabel Komponen

CREATE TYPE cpu_integrated as enum ('Yes','No');
CREATE TYPE form_factor_mobo as enum('ATX','Mini ITX','Micro ATX');
CREATE TYPE tipe_storage as enum('SSD','HDD');
CREATE TYPE form_factor_psu as enum('ATX','SFX','LPX');


Create table CPU (
id_cpu int PRIMARY KEY, 
name text NOT NULL,
core int,
clock float,
integrated cpu_integrated,
price bigint
 );

CREATE TABLE motherboard(
id_mobo int PRIMARY KEY NOT NULL,
name text NOT NULL,
chipset text NOT NULL,
form_factor form_factor_mobo,
ram_slot int NOT NULL,
brand text,
price bigint
);

CREATE TABLE fan (
id_fan int NOT NULL,
name text NOT NULL,
rpm int,
price bigint
);

CREATE TABLE ram (
id_RAM int NOT NULL, 
name text NOT NULL, 
speed int, 
modules varchar(20), 
price bigint
);

CREATE TABLE casing 
(id_case int NOT NULL, 
name text NOT NULL, 
ff_tipe text[] NOT NULL, 
brand text NOT NULL, 
price bigint
);

Create table Storage (
    
    id_str int NOT NULL, 
    name text NOT NULL, 
    size int NOT NULL, 
    tipe tipe_storage, 
    price bigint
);

Create table PSU  (
    id_PSU int NOT NULL, 
    name text NOT NULL, 
    form_factor form_factor_psu, 
    watt int NOT NULL, 
    price bigint
);

Create table GPU(
    id_gpu int PRIMARY KEY,
    name text NOT NULL,
    chip text NOT NULL,
    memory varchar(10) NOT NULL,
    clock int NOT NULL,
    price bigint
);

-- Pembuatan tabel rekomendasi PC

Create table REKOMENDASI(
    id_rekomendasi int PRIMARY KEY, 
    name text NOT NULL,
    cpu text NOT NULL, 
    gpu text NOT NULL,
    mobo text NOT NULL,
    ram text NOT NULL,
    casing text NOT NULL,
    storage text NOT NULL,
    PSU text NOT NULL,
    fan text NOT NULL,
    fkey int NOT NULL,
    FOREIGN KEY(fkey) REFERENCES data_rekomendasi(fkey)
);

Create table data_rekomendasi(
    fkey int PRIMARY KEY,
    id_cpu int NOT NULL,
    id_gpu int NOT NULL,
    id_mobo int NOT NULL,
    id_ram int NOT NULL,
    id_case int NOT NULL,
    id_str int NOT NULL,
    id_PSU int NOT NULL,
    id_fan int NOT NULL
);

-- Pembuatan tabel akun untuk melakukan Login
CREATE TABLE accounts (
    id int primary key NOT NULL,
    username varchar(20) NOT NULL,
    password varchar(25) NOT NULL,
    email varchar(50) NOT NULL
 );

 CREATE TABLE rakitpc (
     id_rakit int primary key NOT NULL,
     komponen text, 
     price bigint NOT NULL
 );

 INSERT into accounts VALUES
 (1, "Darvin", "sbd123", "dadar@gmail.com"),
 (2, "Fred", "sbd123", "fredj@gmail.com"),
 (3, "Ilhum", "sbd123", "ilhum@gmail.com"),
 (4, "Mario", "sbd123", "marc@gmail.com");

-- Pembuatan Tabel untuk melakukan perakitan PC
 INSERT INTO rakitpc VALUES
 (1, 'Processor', 0),
 (2, 'Motherboard', 0),
 (3, 'RAM', 0),
 (4, 'VGA', 0),
 (5, 'Storage', 0),
 (6, 'PSU', 0),
 (7, 'Casing', 0),
 (8, 'Fan', 0),
 (9, 'Reset', 0);

INSERT INTO REKOMENDASI VALUES(
    1, 'Low Tier', 'AMD Ryzen 5 3600', 'ZOTAC Mini GeForce GTX 1050 TI 4GB', 'MSI B450 Tomahawk MAX', 'Teamgroup T-CREATE Classic 16GB', 
    'Corsair Carbide 275R Airflow Tempered Glass Black', 'Seagate Barracuda 2TB', 'Corsair CX 550W', 'Thermaltake UX100',1),(
    2, 'Mid Tier', 'AMD Ryzen 7 3700X', 'Asus Dual Evo advanced GeForce RTX 2060 6GB', 'MSI B550-A PRO', 'G.Skill TridentZ RGB 16GB', 
    'Corsair 4000D Tempered Glass Black', 'Samsung 860 Evo 1TB', 'Corsair SF 600W', 'Scythe FUMA 2',2),(
    3, 'High Tier', 'Intel Core i9-10900K', 'GeForce RTX 3080 Founder Edition', 'Gigabyte Z490 Vision G', 'Kingston HyperX Fury RGB 32GB',
    'Corsair 465X RGB Tempered Glass Black', 'Samsung 980 Pro 500GB', 'EVGA P2 850W', 'Alphacool Eisbaer Aurora 420',3);

INSERT INTO data_rekomendasi VALUES(
    1, 1, 4, 1, 9, 8, 5, 7, 2),(
    2, 2, 10, 10, 3, 1, 1, 6, 3),(
    3, 7, 2, 7, 5, 4, 2, 10, 5);

--Memasukkan data untuk setiap komponen PC

INSERT INTO ram VALUES (
    1, 'Corsair Vengeance LPX 16 GB', 3200, '2 x 8GB', 1679000),(
    2, 'Corsair Vengeance RGB Pro 16GB', 3200, '2 x 8GB’ , 2039000),(
    3, 'G.Skill TridentZ RGB 16GB', 3600, '2 x 8GB', 1849000),(
    4, 'Crucial Ballistix 16GB', 3600, '2 x 8GB', 1740000),(
    5, 'Kingston HyperX Fury RGB 32GB', 2666, '2 x 16GB', 3400000),(
    6, 'Team Elite Plus Black 8GB', 2400, '2 x 4GB', 787000),(
    7, 'G.Skill TridentZ Neo RGB 16GB', 3200, '2 x 8GB', 1916000),(
    8, 'V-Gen Tsunami 16GB', 2666, '2 x 8GB', 1568000),(
    9, 'Teamgroup T-CREATE Classic 16GB', 3200, '2 x 8GB', 1485000),(
    10, 'G.Skill RipjawsV 8GB', 2666, '1 x 8GB', 707000);

INSERT INTO casing VALUES (
1, 'Corsair 4000D Tempered Glass Black', '{"ATX","MATX", "ITX"}', 'Corsair', 1379000),(
2, 'Lian Li LANCOOL 205 MESH BLACK', '{"ATX","MATX","ITX"}', 'Lian Li', 1080000),(
3, 'Corsair 4000X Tempered Glass White', '{"ATX","MATX","ITX"}', 'Corsair', 1850000),(
4, 'Corsair 465X RGB Tempered Glass Black', '{"ATX","MATX","ITX"}', 'Corsair', 2279000),(
5, 'NZXT H510 Elite White', '{"ATX","MATX","ITX"}', 'NZXT', '2450000'),(
6, 'Metallic Gear Neo Qube', '{"ATX","MATX","ITX"}', 'Metallic Gear', 2000000),(
7, 'Cube Gaming Kellva White', '{"MATX","ITX"}', 'Cube Gaming', 410000),(
8, 'Corsair Carbide 275R Airflow Tempered Glass Black', '{"ATX","MATX","ITX"}', 'Corsair', 1229000),(
9, 'MSI MPG Sekira 100R', '{"ATX","MATX","ITX"}', 'MSI', 1194000),(
10, 'PRIME X-[S] Pink - Alumunium Tempered Glass', '{"ATX","MATX","ITX"}', 'Prime', '1200000');

Insert into Storage VALUES (1, 'Samsung 970 Evo', 1000, 'SSD',2169000), 
(2, 'Samsung 860 Evo', 1000, 'SSD',1679000),
(3, 'Samsung 980 Pro', 500, 'SSD',2249000),
(4, 'Crucial MX300', 512, 'SSD',3459000),
(5, 'Seagate Barracuda', 2000, 'HDD',729000),
(6, 'Corsair Force Series GT240', 240, 'SSD',3099000),
(7, 'Crucial MX500', 500, 'SSD',1799000),
(8, 'Toshiba P300', 3000, 'HDD',1819000),
(9, 'Crucial MX300', 512, 'SSD',3459000),
(10, 'Seagate FireCuda 520', 2000, 'SSD',5299000);

Insert Into PSU VALUES (1, 'Corsair RM', 'ATX', 750, 1699000),
(2, 'EVGA BR', 'ATX', 450, 529000),
(3, 'Corsair HX Platinum', 'ATX', 1200, 4199000),
(4, 'Seasonic FOCUS Plus Gold', 'ATX', 750, 1429000),
(5, 'Silverstone SFX', 'SFX', 800, 2999000),
(6, 'Corsair SF', 'SFX', 600, 1829000),
(7, 'Corsair CX', 'ATX', 550, 929000),
(8, 'Seasonic Focus', 'ATX', 750, 2139000),
(9, 'Seasonic FOCUS SGX', 'SFX', 650, 1979000),
(10, 'EVGA P2', 'ATX', 850, 3149000);

INSERT INTO cpu VALUES 
(1, 'AMD Ryzen 5 3600', 6, 3.6, 'No', 2940000),
(2, 'AMD Ryzen 7 3700X', 8, 3.6, 'No', 4326000),
(3, 'AMD Ryzen 9 3900X', 12, 3.8, 'No', 6860000),
(4, 'Intel Core i7-10700K', 8, 3.8, 'Yes', 4629000),
(5, 'AMD Ryzen 9 3900XT', 12, 3.8, 'No', 10962000),
(6, 'Intel Core i9-10850K', 10, 3.6, 'Yes', 6099000),
(7, 'Intel Core i9-10900K', 10, 3.7, 'Yes', 7899000),
(8, 'AMD Ryzen 5 2600X', 6, 3.6, 'No', 3241000),
(9, 'AMD Ryzen 7 3800XT', 8, 3.9, 'No', 5964000),
(10, 'Intel Core i9-11900K', 8, 3.7, 'Yes', 8749000);

INSERT INTO gpu VALUES
(1, 'Asus Strix Gaming', 'GeForce GTX 1080 TI', '11 GB', 1493, 17900000),
(2, 'Nvidia Founders Edition', 'GeForce RTX 3080', '10 GB', 1440, 39999000),
(3, 'EVGA SC Gaming ACX 3.0', 'Geforce GTX 1070', '8 GB', 1594, 7250000),
(4, 'Zotac Mini', 'GeForce GTX 1050 TI', '4 GB', 1303, 2850000),
(5, 'Gigabyte OC', 'GeForce GTX 1660 SUPER', '8 GB', 1530, 11500000),
(6, 'Asus DUAL', 'Geforce GTX 1060', '6 GB', 1809, 5000000),
(7, 'MSI Gaming X', 'Radeon RX 570', '4 GB', 1168, 4250000),
(8, 'Asus ROG Strix', 'Radeon RX 580', '8 GB', 1257, 4980000),
(9, 'MSI GT 1030 LP OC', 'Geforce GT 1030', '2 GB', 1265, 1450000),
(10, 'Asus Dual Evo advanced', 'Geforce RTX 2060', '6 GB', 1725, 12250000);

INSERT INTO motherboard VALUES
(1, 'MSI B450 Tomahawk MAX', 'AM4','ATX', 4, 'MSI', 1695000),
(2, 'Asus ROG STRIX B550-F Gaming', 'AM4','ATX', 4, 'Asus', 4070000),
(3, 'Gigabyte B460M DS3H', 'LGA1200', 'Micro ATX', 4,'Gigabyte', 1232000),
(4, 'Asus Sabertooth Z87', 'LGA1150', 'ATX', 4,'Asus',2350000),
(5, 'Asus PRIME X570-PRO', 'AM4', 'ATX', 8,'Asus', 3500000),
(6, 'Asrock B450M-HDV', 'AM4', 'Micro ATX', 4,'Asrock', 1535000),
(7, 'Gigabyte Z490 Vision G', 'LGA1200', 'ATX', 8,'Gigabyte', 5570000),
(8, 'Asus Maximus VI Gene', 'LG1150', 'Micro ATX', 8, 'Asus', 9979000),
(9, 'Gigabyte X570 AORUS Elite', 'AM4', 'ATX', 8,'Gigabyte', 4095000),
(10, 'MSI B550-A PRO', 'AM4', 'ATX', 4,'MSI', 2398000);

INSERT INTO fan VALUES
(1, 'Cooler Master Hyper 212 EVO', 2000, 420000),
(2, 'Thermaltake UX100', 1800, 280000),
(3, 'Scythe FUMA 2', 1200, 840000),
(4, 'ARCTIC Freezer 7 X', 2000, 329000),
(5, 'Alphacool Eisbaer Aurora 420', 1500, 4102000),
(6, 'Aerocool Cyclon 4', 1800, 973000),
(7, 'MSI CORE FROZR L', 1800, 840000),
(8, 'Phanteks PH-TC12LS_BK', 1800, 350000),
(9, 'Cooler Master Hyper T4', 1800, 574000),
(10, 'Rosewill PB120', 1800, 686000);

-- Fungsi Join untuk menampilkan detail produk rekomendasi 
SELECT d.id_cpu, d.id_gpu, d.id_mobo, d.id_ram, d.id_case, d.id_str, d.id_psu, d.id_fan FROM data_rekomendasi d INNER JOIN rekomendasi r ON r.id_rekomendasi = d.fkey;


-- Membuat tabel dan fungsi trigger untuk Fitur perakitan PC

-- CREATE DUMMY 
CREATE TABLE dummy(dummy_val int);
INSERT INTO dummy VALUES (0);

--FUNCTION UPDATE
CREATE OR REPLACE FUNCTION update_tabel()
RETURNS TRIGGER
language plpgsql
AS
$$
DECLARE
BEGIN
UPDATE rakitpc SET price = 0 WHERE id_rakit > 0;
return new;
end;
$$;

--CREATE TRIGGER
CREATE TRIGGER update
    AFTER UPDATE ON "dummy"
    FOR EACH ROW EXECUTE PROCEDURE update_tabel();