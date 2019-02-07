const SteamUser = require('steam-user');
const request = require('request');
const Item = require('./classes/item.js');
const Database = require('./classes/db.js');

let db = new Database();

/* REFRESH ALL DB ITEM
Item.getAllItems().then(res => { 
	if(res.success === true){
		res.items.forEach(function(obj) {
			try {
  				sqlrequest = `INSERT INTO item (market_name, market_hash_name, border_color, image) VALUES ("${obj.market_name}", "${obj.market_hash_name}", "${obj.name_color}", "https:${obj.icon_url}");`;
  				db.query(sqlrequest).then( result => console.log(result));
			}catch(error){
  				console.error(error);
			}
		});
		
	}else{
		console.log(res.message);
	}
});
*/

let client = new SteamUser();
client.logOn({	
	"accountName": "",
	"password": ""
});

//db.query('SELECT * FROM `item`').then(response => console.log(response));

/*client.on('loggedOn', function(details, parental){
	console.log('Client : loggedOn !')    

});*/

client.on('webSession', function(sessionID, cookies) {
	console.log("Client : Got web session");
	//console.log(sessionID)
	//console.log(cookies)

	/* */
	//Set the cookie instead of setting into heade
});


