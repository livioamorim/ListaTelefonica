var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var id;

var contatos = [
	{nome: "BRUNO HENRIQue", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2}, serial: "Y2115"},
	{nome: "sandra mARIA", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1}, serial: "G7t8w"},
	{nome: "ThIaGo AMORIM", telefone: "9999-4444", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Celular", preco: 1}, serial: "e91h9"},
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.get('/contatos/:serial', function(req, res) {

	var serial = req.params.serial;
	var contato = contatos.filter(function (elemento) {
		return elemento.serial == serial;
	});

	res.json(contato[0]);

});

app.get('/operadoras/:nome', function(req, res) {

	var nome = req.params.nome;
	var operadora = operadoras.filter(function (elemento) {
		return elemento.nome == nome;
	});

	res.json(operadora[0]);

});
