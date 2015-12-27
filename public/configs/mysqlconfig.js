var mysql=require('mysql');
var client=mysql.createConnection({
	host:'182.92.107.93',
	port:'3306',
	user:'bin',
	password:'11111111',
	database:'sea'
});
query(client);

function query(client){   
     client.query(   
         'select * from product,user',  
         function(err,res,fields){   
             console.log(res);   
            // client.end();   
         }   
     );   
};  