const app = require('./app_config.js');

const clientController = require('./controller/clientController.js');

const validator = require('validator');

const productCollections = require('./collections/clientsCollections.js');

app.get('/', (req, res) => {
	
	res.end('Servidor ON!');
});

app.get('/clients', (req, res) => {
	
	clientController.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/clients/:id', (req, res) => {
	
	let id = validator.trim(validator.escape(req.param('id')));

	clientController.client(id, (resp) => {
		
		res.json(resp);
	});
});

app.post('/clients', (req, res) => {

	let client_name = validator.trim(validator.escape(req.param('client_name')));
	let cpf = validator.trim(validator.escape(req.param('cpf')));
	let rg = validator.trim(validator.escape(req.param('rg')));

	clientController.save(client_name, cpf, rg, (resp) => {
		
		res.json(resp);
	});
});

app.put('/clients', (req, res) => {

	let id = req.param('id');
	let client_name = req.param('client_name');
	let cpf = req.param('cpf');
	let rg = req.param('rg');

	clientController.update(id, client_name, cpf, rg, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/clients/:id', (req, res) => {
	
	let id = req.param('id');

	clientController.delete(id, (resp) => {
		
		res.json(resp);
	});
});

app.get('/enterprises', (req, res) => {
	
	enterpriseController.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/enterprises/:id', (req, res) => {
	
	let id = validator.trim(validator.escape(req.param('id')));

	enterpriseController.enterprise(id, (resp) => {
		
		res.json(resp);
	});
});

app.post('/enterprises', (req, res) => {

	let enterprise_name = validator.trim(validator.escape(req.param('enterprise_name')));
	let cnpj = validator.trim(validator.escape(req.param('cnpj')));
	let ie = validator.trim(validator.escape(req.param('ie')));
    let endereco = validator.trim(validator.escape(req.param('endereco')));
    
	enterpriseController.save(enterprise_name, cnpj, ie, endereco, (resp) => {
		
		res.json(resp);
	});
});

app.put('/enterprises', (req, res) => {

	let id = req.param('id');
	let enterprise_name = req.param('enterprise_name');
	let cnpj = req.param('cnpj');
	let ie = req.param('ie');
    let endereco = req.param('endereco');

	enterpriseController.update(id, enterprise_name, cnpj, ie, endereco, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/enterprises/:id', (req, res) => {
	
	let id = req.param('id');

	enterpriseController.delete(id, (resp) => {
		
		res.json(resp);
	});
});