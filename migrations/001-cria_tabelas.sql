-- Up
CREATE TABLE usuario(
    usuario_id INTERGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT
);

CREATE TABLE musico(
    musico_id INTERGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    preco_hora NUMBER,
    bio TEXT,
    demo_video_url TEXT,
    demo_video_legenda TEXT,
);


CREATE TABLE favorito(
    usuario_id REFERENCES musico(usuario_id),
    musico_id REFERENCES musico(musico_id)
);

CREATE TABLE evento(
    evento_id INTERGER PRIMARY KEY AUTOINCREMENT,
    usuario_id REFERENCES musico(usuario_id),
    musico_id REFERENCES musico(musico_id),
    data REAL,
    duracao NUMBER,
    preco NUMBER
);

CREATE TABLE musica(
    evento_id REFERENCES evento(evento_id),
    autor TEXT,
    musica_nome TEXT
);

-- Down 
DROP TABLE musica;
DROP TABLE evento;
DROP TABLE favorito;
DROP TABLE musico;
DROP TABLE usuario;