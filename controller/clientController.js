const db = require('../db_config.js');

exports.list = (callback) => {
	
	db.User.find({}, (error, users) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar os clientes'});
		} else {

			callback(users);
		}
	});
};


exports.user = (id, callback) => {
	
	db.User.findById(id, (error, user) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar o cliente'});
		} else {

			callback(user);
		}
	});
};


exports.save = (client_name, cpf, rg, callback) => {
	
	new db.User({

		'client_name': client_name,
		'cpf': cpf,
		'rg': rg,
		'endereco': endereco,
		'rg': rg,
		'created_at': new Date()
	}).save((error, user) => {
		
		if(error){
			
			callback({error:'Não foi possivel salvar o cliente'});
		} else {

			callback(user);
		}
	})
};


exports.update = (id, client_name, cpf, rg, callback) => {
	
	db.User.findById(id, (error, user)  => {

		if(client_name){
			
			user.client_name = client_name;
		}

		if(cpf){
			
			user.cpf = cpf;
		}

		if(rg){
			
			user.rg = rg;
		}

		user.save((error, user) => {
		
			if(error){
			
				callback({error:'Não foi possivel salvar o cliente'});
			} else {

				callback(user);
			}		
		});
	});
};


exports.delete = (id, callback) => {
	
	db.User.findById(id, (error, user) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar o cliente'});
		} else {

			user.remove((error) => {
				if(!error){
					
					callback({response: 'cliente excluído com sucesso'});
				}
			});
		}
	});	
};

exports.list = (callback) =>{
	
	db.Enterprise.find({}, (error, enterprises) =>{
		
		if(error){
			
			callback({error:'Não foi possivel retornar as empresas'});
		} else {

			callback(enterprises);
		}
	});
};


exports.enterprise = (id, callback) =>{
	
	db.Enterprise.findById(id, (error, enterprise) =>{
		
		if(error){
			
			callback({error:'Não foi possivel retornar a empresa'});
		} else {

			callback(enterprise);
		}
	});
};


exports.save = (fullname, email, password, job, callback) =>{
	
	new db.Enterprise({

		'fullname': fullname,
		'email': email,
		'password': password,
		'job': job,
		'created_at': new Date()
	}).save((error, enterprise) =>{
		
		if(error){
			
			callback({error:'Não foi possivel salvar a empresa'});
		} else {

			callback(enterprise);
		}
	})
};


exports.update = (id, fullname, email, password, job, callback) =>{
	
	db.Enterprise.findById(id, (error, enterprise)  =>{

		if(fullname){
			
			enterprise.fullname = fullname;
		}

		if(email){
			
			enterprise.email = email;
		}

		if(password){
			
			enterprise.password = password;
		}

		if(job){
			enterprise.job = job;
		}

		enterprise.save((error, enterprise) =>{
		
			if(error){
			
				callback({error:'Não foi possivel salvar a empresa'});
			} else {

				callback(enterprise);
			}		
		});
	});
};


exports.delete = (id, callback) =>{
	
	db.Enterprise.findById(id, (error, enterprise) =>{
		
		if(error){
			
			callback({error:'Não foi possivel retornar a empresa'});
		} else {

			enterprise.remove((error) =>{
				if(!error){
					
					callback({response: 'empresa excluída com sucesso'});
				}
			});
		}
	});	
};