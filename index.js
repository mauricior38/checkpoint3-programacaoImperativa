let Aluno = require('./modulos/aluno');
let Curso = require('./modulos/curso');

console.log(`================ Criando aluno pelo metodo construtor ===================`)
let aluno1 = new Aluno('Ricardo', 0, [9,9,9,10])
console.log(aluno1)

console.log(`================ Calculando média de aluno ===================`)
// //Testa da Média
console.log(`Média aluno 01: ` + calculaMedia(aluno1.notas))

console.log(`================ Adicionando falta em aluno ===================`)
// //Teste da Falta
falta(aluno1)
falta(aluno1)
falta(aluno1)
console.log('Depois de chamar metodo falta 3x', aluno1)

console.log(`================ Adicionando estudante a listaDeEstudantes ===================`)
// //Adicionando aluno a lista de estudantes
Curso.adicionaAluno(aluno1);
console.log('A lista de estudantes do curso de matematica', Curso.listaDeEstudantes)

console.log(`================ Retornando resultado de um aluno ===================`)
//Resultado aluno
console.log(Curso.resultadoAluno(aluno1))

console.log(`================ Retornando resultado de todos os alunos ===================`)
//Resultado Verificação array
Curso.verificaAlunos()