import conn from '../config/conn.js'; 

const tableClientes = /*sql*/ `
    create table if not exists clientes
    cliente_id varchar(60) primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    telefone int not null,
    endereco varchar(255) not null
`