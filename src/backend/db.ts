

/*import {createPool} from 'mysql'
const pool = createPool({
host:'localhost:3306',
user:'cphlaao_Comando_Provincial',
password:'Dttinformatica!!!',
database:'cphlaao_cphl'
});
*/
import {createPool} from 'mysql'
const pool = createPool({
host:'localhost',
user:'root',
password:'',
database:'cphl'
});

pool.getConnection((err)=>{
    if (err) 
        console.log('FALHA NA CONEXÃO')
});

const executequery=(query:any, arraParm:any)=>{
    return new Promise((resolve,reject)=>{
        try { 
            pool.query(query,arraParm,(err,data)=>{
                if(err){
                    console.log(arraParm,'ERRO DE EXECUÇÃO DO SQL',query)
                    reject(err) 
                }
                resolve(data)
            })
        } catch (err) {
            reject(err)
            
        }
    })
};
module.exports =executequery


