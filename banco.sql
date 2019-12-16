

create table usuario(
	id bigint unsigned auto_increment not null,
    email varchar(45) not null unique,
    senha varchar(20) not null,
    nome varchar(45) not null, 
    idade int(3) not null unsigned,
    bio varchar(255), 
	primary key (id)
    );
    
create table topico(
	id bigint unsigned auto_increment not null,
    titulo varchar(50) not null,
    texto varchar(255) not null,
    dataCriacao date not null,
    finalizado boolean,
    id_usuario bigint unsigned not null,
    primary key (id),
    foreign key (id_usuario) references usuario(id)
    );

create table comentario(
	id bigint unsigned auto_increment not null,
    texto varchar(255) not null,
    dataCriacao datetime not null,
    resposta boolean,
    id_usuario bigint unsigned not null,
    id_topico bigint unsigned not null,
    primary key (id),
    foreign key (id_usuario) references usuario(id),
    foreign key (id_topico) references topico(id)
    );

create table competencia(
	id bigint unsigned auto_increment not null,
    tecnologia varchar(20) not null,
    nivel varchar(20) not null,
	primary key (id)
    );
    
create table tag(
    id bigint unsigned auto_increment not null,
    tecnologia varchar(20) not null,
    primary key (id)
);

create table usuario_competencia(
    id bigint unsigned auto_increment not null,
    id_usuario bigint unsigned not null,
    id_competencia bigint unsigned not null,
    primary key(id),
    foreign key (id_usuario) references usuario(id),
    foreign key (id_competencia) references competencia(id)
);

create table tag_topico(
    id bigint unsigned auto_increment not null,
    id_tag bigint unsigned not null,
    id_topico bigint unsigned not null,
    foreign key (id_tag) references tag(id),
    foreign key (id_topico) references topico(id),
    primary key (id)
);
