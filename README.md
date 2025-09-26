CREATE TABLE habitats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo VARCHAR(255) NOT NULL,
    localizacao VARCHAR(255),
    especies_associadas TEXT,
    area DECIMAL(10, 2)
);
depois
ALTER TABLE habitats
ADD COLUMN status VARCHAR(255);
depois
ALTER TABLE habitats
ADD COLUMN scientific_name VARCHAR(255);
depois 
ALTER TABLE habitats
ADD COLUMN threats VARCHAR(255)
depois 
ALTER TABLE habitats
ADD COLUMN image_url VARCHAR(255)
ultimo
INSERT INTO habitats (tipo, localizacao, especies_associadas, area, status, scientific_name, threats, image_url )
VALUES ('Tartaruga-marinha-verde', 'Águas tropicais e subtropicais', 'plastic waste, fishing nets', 100.50, 'Em perigo', 'Chelonia mydas', 'plastic waste, fishing nets', 'https://www.gov.br/icmbio/pt-br/assuntos/centros-de-pesquisa/tartarugas-marinhas-e-biodiversidade-marinha-do-leste/comunicacao/ultimas-noticias/nota-de-esclarecimento-do-centro-tamar-icmbio-sobre-a-nova-classificacao-do-status-de-conservacao-da-tartaruga-verde-chelonia-mydas-no-brasil/064.jpg'
);

 INSERT INTO habitats (tipo, localizacao, especies_associadas, area, status, scientific_name, threats, image_url )
VALUES ('Baleia-azul', 'Oceanos profundos em todo o mundo' , 'ship strikes, climate change', 50.00, 'Em perigo',  'Balaenoptera musculus', 'ship strikes, climate change', 'https://123ecos.com.br/wp-content/uploads/2025/03/Baleia-azul-Balaenoptera-musculus.jpg'
);

INSERT INTO habitats (tipo, localizacao, especies_associadas, area, status, scientific_name, threats, image_url )
VALUES ('Tubarão-baleia', 'Águas tropicais e subtropicais' , 'overfishing,  ship strikes', 70.00, 'Em perigo',  'Rhincodon typus', 'overfishing,  ship strikes',  'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2711493.jpg?w=1600'
);

INSERT INTO habitats (tipo, localizacao, especies_associadas, area, status, scientific_name, threats, image_url )
VALUES ('Água-viva-imortal', 'Águas temperadas e tropicais' , 'pollution, ocean acidification', 20.00, 'Pouco Preocupante',  'Turritopsis dohrnii', 'pollution, ocean acidification', 'https://marsemfim.com.br/wp-content/uploads/2014/03/agua_viva_interna.jpg'
);

INSERT INTO habitats (tipo, localizacao, especies_associadas, area, status, scientific_name, threats, image_url )
VALUES ('Peixe-palhaço', 'Recifes de coral do Indo-Pacífico' , 'Destruição de habitat, Coleta para aquários', 30.00, 'Vulneravel',  'Amphiprioninae', 'Destruição de habitat, Coleta para aquários', 'https://equipamentoparapesca.com.br/wp-content/uploads/2025/07/peixe-palhaaco-1.webp'
);

INSERT INTO habitats (tipo, localizacao, especies_associadas, area, status, scientific_name, threats, image_url )
VALUES ('Atum-azul', 'Oceano Atlântico Norte' , 'Sobrepesca, Pesca ilegal', 40.00, 'Quase Ameaçada',  'Thunnus thynnus', 'Sobrepesca, Pesca ilegal', 'https://marsemfim.com.br/wp-content/uploads/2023/11/atum-azul-copiar.jpg'
);
