-- Up
CREATE TABLE usuario(
    usuario_id INTEGER PRIMARY KEY,
    nome TEXT,
    email TEXT
);

CREATE TABLE musico(
    musico_id INTEGER PRIMARY KEY,
    nome TEXT,
    email TEXT,
    preco_hora NUMBER,
    bio TEXT,
    demo_video_url TEXT,
    demo_video_legenda TEXT
);


CREATE TABLE favorito(
    usuario_id REFERENCES musico(usuario_id),
    musico_id REFERENCES musico(musico_id)
);

CREATE TABLE evento(
    evento_id INTEGER PRIMARY KEY,
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

INSERT INTO usuario(nome, email) VALUES('peter parker', 'spider@man');
INSERT INTO usuario(nome, email) VALUES('bruce wayne', 'bat@man');
INSERT INTO usuario(nome, email) VALUES('klark kent', 'super@man');

INSERT INTO musico(nome, email, preco_hora, bio, demo_video_url, demo_video_legenda) VALUES ('bruce dickson', 'iron@maiden.com', 1000, 'Paul Bruce Dickinson é um cantor, radialista, escritor, empresário, palestrante, historiador, mestre cervejeiro e piloto, mais conhecido por seu trabalho como vocalista da banda britânica Iron Maiden.','https://www.youtube.com/embed/nzwV9cW1aaI','tears of the dragon');
INSERT INTO musico(nome, email, preco_hora, bio, demo_video_url, demo_video_legenda) VALUES ('James LaBrie', 'dream@theater.com', 1000, 'Kevin James LaBrie é um cantor e compositor canadense, mais conhecido por ser vocalista da banda de metal progressivo Dream Theater','https://www.youtube.com/embed/34HK44CeSMg','in the name of the god');
INSERT INTO musico(nome, email, preco_hora, bio, demo_video_url, demo_video_legenda) VALUES ('martin garrix', 'martin@garrix.com', 4000, 'Martijn Gerard Garritsen, mais conhecido pelo nome artístico de Martin Garrix, é um produtor, DJ e remixer neerlandês Ele é especialmente conhecido pela canção "Animals", que atingiu o topo de listas musicais em mais de dez países e conta com mais de 1 bilhão de visualizações no YouTube','https://www.youtube.com/embed/06eSsOWcKYA','tomorowland');

INSERT INTO favorito(usuario_id, musico_id) VALUES(1, 2);
INSERT INTO favorito(usuario_id, musico_id) VALUES(1, 3);

INSERT INTO evento(usuario_id, musico_id, data, duracao, preco) VALUES(1, 2, datetime('now','localtime'),1,1000);
INSERT INTO evento(usuario_id, musico_id, data, duracao, preco) VALUES(1, 3, datetime('now','localtime'),2,4000);

INSERT INTO musica(evento_id, autor, musica_nome) VALUES(1, 'dream theater','Endless sacrifice');
INSERT INTO musica(evento_id, autor, musica_nome) VALUES(1, 'dream theater','In the name of god');

-- Down 
DROP TABLE musica;
DROP TABLE evento;
DROP TABLE favorito;
DROP TABLE musico;
DROP TABLE usuario;