const db = require('../db_config.js');

exports.list = (callback) => {
   
   db.Client.find({}, (error, clients) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar os clientes'});
      } else {

         callback(clients);
      }
   });
};


exports.client = (client_name, callback) => {
   
   db.Client.findByClientName(client_name, (error, client) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar o cliente'});
      } else {

         callback(client);
      }
   });
};


exports.save = (client_name, cpf, rg, endereco, divida, callback) => {
   
   new db.Client({

      'client_name': client_name,
      'cpf': cpf,
      'rg': rg,
      'endereco': endereco,
      'divida': divida,
      'created_at': new Date()
   }).save((error, client) => {
      
      if(error){
         
         callback({error:'Não foi possivel salvar o cliente'});
      } else {

         callback(client);
      }
   })
};


exports.update = (id, client_name, cpf, rg, endereco, divida, callback) => {
   
   db.Client.findByClientName(client_name, (error, client)  => {

      if(client_name){
         
         client.client_name = client_name;
      }
      
      if(cpf){
         client.cpf = cpf;
      }

      if(endereco){
         
         client.endereco = endereco;
      }

      if(rg){
         
         client.rg = rg;
      }


      if(divida){
         
         client.divida = divida;
      }

      client.save((error, client) => {
      
         if(error){
         
            callback({error:'Não foi possivel salvar o cliente'});
         } else {

            callback(client);
         }     
      });
   });
};

exports.list_client_name = (client_name, callback) => {
   
   db.Client.find({client_name: client_name}).sort({endereco: 1}).exec((error, client_names) => {
      
      if(error){
      
         callback({error:'Não foi possivel retornar os clientes'});
      } else {
      
         callback(client_names);
      }
   });
};

exports.list = (callback) => {
    
    db.Enterprise.find({}, (error, enterprises) => {
       
       if(error){
          
          callback({error:'Não foi possivel retornar as empresas'});
       } else {
 
          callback(enterprises);
       }
    });
 };
 
 
 exports.enterprise = (enterprise_name, callback) => {
    
    db.Enterprise.findByEnterpriseName(enterprise_name, (error, enterprise) => {
       
       if(error){
          
          callback({error:'Não foi possivel retornar a empresa'});
       } else {
 
          callback(enterprise);
       }
    });
 };
 

 
 exports.save = (enterprise_name, cnpj, ie, endereco, job, callback) => {
    
    new db.Enterprise({
 
       'enterprise_name': enterprise_name,
       'cnpj': cnpj,
       'ie': ie,
       'endereco': endereco,
       'job': job,
       'created_at': new Date()
    }).save((error, enterprise) => {
       
       if(error){
          
          callback({error:'Não foi possivel salvar a empresa'});
       } else {
 
          callback(enterprise);
       }
    })
 };
 
 
 exports.update = (id, enterprise_name, cnpj, ie, endereco, job, callback) => {
    
    db.Enterprise.findByEnterpriseName(enterprise_name, (error, enterprise)  => {
 
       if(enterprise_name){
          
          enterprise.enterprise_name = enterprise_name;
       }
       
       if(cnpj){
          enterprise.cnpj = cnpj;
       }
 
       if(endereco){
          
          enterprise.endereco = endereco;
       }
 
       if(ie){
          
          enterprise.ie = ie;
       }
 
 
       if(job){
          
          enterprise.job = job;
       }
 
       enterprise.save((error, enterprise) => {
       
          if(error){
          
             callback({error:'Não foi possivel salvar a empresa'});
          } else {
 
             callback(enterprise);
          }     
       });
    });
 };
 
 exports.list_enterprise_name = (enterprise_name, callback) => {
    
    db.Enterprise.find({enterprise_name: enterprise_name}).sort({endereco: 1}).exec((error, enterprise_names) => {
       
       if(error){
       
          callback({error:'Não foi possivel retornar as empresas'});
       } else {
       
          callback(enterprise_names);
       }
    });
 };