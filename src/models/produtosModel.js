import conn from '../config/conn.js';

const tableProdutos = /*sql*/ `
    create table if not exists produtos(
    produto_id varchar(60) primary key,
    nome varchar(255) not null,
    descricao varchar(150) not null,
    preco varchar(60) not null,
    estoque int not null
    )
`
conn.query(tableProdutos, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Tabela de produtos criada com sucesso");
  });