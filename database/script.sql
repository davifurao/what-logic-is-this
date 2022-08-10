create table wlogic;
use wlogic;

create table usuario(
nome_usuario varchar(255) not null,
senha_usuario varchar(255) not null,
id_usuario int auto_increment not null,
constraint id_pk primary key (id_usuario)
);