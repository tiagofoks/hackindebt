const db_string = 'mongodb://127.0.0.1/debit';

const mongoose = require('mongoose').connect(db_string);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once ('open', function(){
	
	let clientSchema = mongoose.Schema({
		
		client_name: String,
		cpf: String,
		rg: String,
		endereco: String,
		dividas: Number,
		created_at: Date
	});

	exports.Client = mongoose.model('Client', clientSchema);

	let enterpriseSchema = mongoose.Schema({
		
		enterprise_name: String,
		cnpj: String,
		ie: String,
		endereco: String,
		created_at: Date
	});

	exports.Enterprise = mongoose.model('Enterprise', enterpriseSchema);
});