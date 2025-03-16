const database = 'BD3-NoSQL-AtlasMongoDB';
use(database);

//  Listando os alunos
db['bd3-nosql-atv1'].find();

// Listar um aluno pelo CPF sem o campo de "cod_aluno"
db['bd3-nosql-atv1'].find({"cpf" : "00000000000"}, {"cod_aluno" : 0});

// Listar um aluno pelo CPF sem o campo de "cod_aluno" e sem o campo de código
db['bd3-nosql-atv1'].find({"cpf" : "00000000001"}, {"cod_aluno" : 0, "_id" : 0});