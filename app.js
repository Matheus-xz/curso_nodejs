import express from 'express';

const servidor = express();
servidor.use(express.json());

servidor.get('/helloword', (req, res) =>
    res.send('Hello World!'));

servidor.get('/mensagem/boasvindas', (req,res) =>
    res.send('Seja bem vindo ao meu site!'));

servidor.get('/v2/mensagem/boasvindas', (req,res) =>
    res.send('Seja bem vindo a minha API!'));

servidor.get('/mensagem/ocupado', (req, resp) =>
    resp.send('Estou ocupado no momento!'));

servidor.get('/mensagem/ocupado/recado', (req, resp) =>
    resp.send('Estou ocupado no momento, por favor, deixe sua mensagem após o sinal!'));

servidor.get('/calculadora/soma/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;
    resp.send('O resultado da soma é ' + soma);
});

servidor.get('/calculadora/subtracao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 - n2;
    resp.send('O resultado da subtração é ' + soma);
});

servidor.get('/calculadora/multiplicacao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 * n2;
    resp.send('O resultado da multipicacao é ' + soma);
});

servidor.get('/calculadora/divisao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 / n2;
    resp.send('O resultado da divisao é ' + soma);
});

servidor.get('/calculadora/somar2', (req, resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;
    resp.send('O resultado da soma é ' + soma);
});

servidor.get('/mensagemOla', (req , resp) =>{
    let pessoa = req.query.nome ?? '';
    resp.send("Olá " + pessoa)
})

servidor.post('/media', (req, resp) => {
    let nota1 = req.body.nota1;
    let nota2 = req.body.nota2;
    let nota3 = req.body.nota3;

    let media = (nota1 + nota2 + nota3) / 3;

    resp.send('A média é ' + media);
})

servidor.listen(5001, ()=>
    console.log('Servidor rodando na porta 5001'));
