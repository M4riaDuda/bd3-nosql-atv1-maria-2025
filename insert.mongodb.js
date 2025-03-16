// Insert de 10 alunos no banco
const database = 'BD3-NoSQL-AtlasMongoDB';
use(database);

db['bd3-nosql-atv1'].insertMany(
    [
        {
            "cod_aluno": 1,
            "nome": "Emily Pinho",
            "cpf": "00000000000",
            "rg": "000000000",
            "tel_aluno":"11977696929",
            "tel_responsavel": "11916756553",
            "email":"emilypinho@gmail.com",
            "data": "2005-08-09"
        },
        {
            "cod_aluno": 2,
            "nome": "Washinton Caetano",
            "cpf": "00000000001",
            "rg": "000000001",
            "tel_aluno":"11932878309",
            "tel_responsavel": "11946598084",
            "email":"ws.caetano@gmail.com",
            "data": "2004-01-20"
        },
        {
            "cod_aluno": 3,
            "nome": "Rogerio Marcondes",
            "cpf": "00000000002",
            "rg": "000000002",
            "tel_aluno":"11935478309",
            "tel_responsavel": "11945848284",
            "email":"rogeriomp@gmail.com",
            "data": "2006-07-22"
        },
        {
            "cod_aluno": 4,
            "nome": "Maria da Graça Soares",
            "cpf": "00000000003",
            "rg": "000000003",
            "tel_aluno":"11932879857",
            "tel_responsavel": "11946965784",
            "email":"mg.soares2@gmail.com",
            "data": "2005-08-17"
        },
        {
            "cod_aluno": 5,
            "nome": "Julia Ribeiro Ferreira",
            "cpf": "00000000004",
            "rg": "000000004",
            "tel_aluno":"11971403367",
            "tel_responsavel": "11992296406",
            "email":"juliaferreira@gmail.com",
            "data": "2004-02-09"
        },
        {
            "cod_aluno": 6,
            "nome": "João Pereira Rocha",
            "cpf": "00000000005",
            "rg": "000000005",
            "tel_aluno":"11993406452",
            "tel_responsavel": "11975819565",
            "email":"joaop.r@gmail.com",
            "data": "2004-09-15"
        },
        {
            "cod_aluno": 7,
            "nome": "Kauan Sousa Azevedo",
            "cpf": "00000000006",
            "rg": "000000006",
            "tel_aluno":"11989292024",
            "tel_responsavel": "11982961010",
            "email":"kauanazevedos@gmail.com",
            "data": "2005-04-29"
        },
        {
            "cod_aluno": 8,
            "nome": "Livia Azevedo Costa",
            "cpf": "00000000007",
            "rg": "000000007",
            "tel_aluno":"11987907015",
            "tel_responsavel": "11988840837",
            "email":"livia.costa@gmail.com",
            "data": "2004-12-09"
        },
        {
            "cod_aluno": 9,
            "nome": "Manuela Ferreira Melo",
            "cpf": "00000000008",
            "rg": "000000008",
            "tel_aluno":"11945774842",
            "tel_responsavel": "11987552245",
            "email":"melomanuela.f@gmail.com",
            "data": "2006-11-27"
        },
        {
            "cod_aluno": 10,
            "nome": "Evelyn Souza Gomes",
            "cpf": "00000000009",
            "rg": "000000009",
            "tel_aluno":"11975938914",
            "tel_responsavel": "11987552245",
            "email":"evelyngomes10@gmail.com",
            "data": "2006-04-03"
        }
    ]
);