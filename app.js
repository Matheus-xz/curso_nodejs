import express from 'express';

const servidor = express();
servidor.use(express.json());

servidor.get('/helloword', (req, res) => {

    res.send({
        "mensagem": 'Hello Word!!'
    });
})    

servidor.get('/mensagem/boasvindas', (req,res) => {
    res.send({
        "mensagem": 'Seja bem vindo ao meu site!'
    })
});

servidor.get('/v2/mensagem/boasvindas', (req,res) => {
    res.send({
     "mensagem":'Seja bem vindo a minha API!'
    })
});

servidor.get('/mensagem/ocupado', (req, resp) =>{
    resp.send({
    "mensagem": 'Estou ocupado no momento!'
    })
});

servidor.get('/mensagem/ocupado/recado', (req, resp) => {
    resp.send({
    "mensagem":'Estou ocupado no momento, por favor, deixe sua mensagem após o sinal!'
    });      
})

servidor.get('/calculadora/soma/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;
    resp.send({
        entradas: {
            numero1 : n1,
            numero2 : n2
        },        
        soma : soma
    });
});

servidor.get('/calculadora/subtracao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 - n2;
    resp.send({
        entradas: {
            numero1 : n1,
            numero2 : n2
        },
        soma : soma
    });
});

servidor.get('/calculadora/multiplicacao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let multiplicacao = n1 * n2;
    resp.send({
        entradas: {
            numero1 : n1,
            numero2 : n2
        },        
        multiplicacao : multiplicacao
    });
});

servidor.get('/calculadora/divisao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let divisao = n1 / n2;
    resp.send({
        divisao : divisao
    });
});

servidor.get('/calculadora/somar2', (req, resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;
    resp.send({
        soma : soma
    });
});

servidor.get('/mensagemOla', (req , resp) =>{
    let pessoa = req.query.nome ?? '';
    resp.send({
        "mensagem" : 'ola' + pessoa
    })
})

servidor.post('/media', (req, resp) => {
    let nota1 = req.body.nota1;
    let nota2 = req.body.nota2;
    let nota3 = req.body.nota3;

    let media = (nota1 + nota2 + nota3) / 3;

    resp.send({
        media : media
    });
})

servidor.post('/loja/pedido', (req, resp) => {
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;
    
    if(parcelas > 1){
        let juros = total * 0.05;
        total += juros;
    }

    if(cupom == 'QUERO100'){
        total -= 100;
    }
    
    let valorParcela = total / parcelas;

    resp.send({
        total : total,
        valorParcela : valorParcela
    });
})

servidor.post('/loja/pedido/completo', (req,resp) => {
    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.cupom;

    let total = 0;
    for(let produto of itens){
        total += produto.preco
    }

    if(parcelas > 1){
        let juros = total * 0.05;
        total += juros;
    }

    if (cupom == 'QUERO100'){
        total -= 100;
    }

    let valorParcela = total / parcelas;

    resp.send({
        total : total,
        qtdParcelas : parcelas,
        valorParcela : valorParcela
    });
})



servidor.listen(5001, ()=>
    console.log('Servidor rodando na porta 5001'));
