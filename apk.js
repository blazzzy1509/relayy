const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var net = require('net'); 
var mySocket;
var server = net.createServer(function(socket) { 
mySocket = socket;
mySocket.on("connect", onConnect);
mySocket.on("data", onData);
mySocket.on("close", onDisconnect);
 });
  function onConnect() { 
  		client.channels.get('454097608227553297').send('Connected '); 

  	} 
	  function onDisconnect() { 
		client.channels.get('454097608227553297').send('Disconnected '); 

  	}

  	function onData(d)  { 
	   var dd = d.toString();
    const [command1, ...args] = dd.split(" "); 
    const saymsg = args.join(" ");
		client.channels.get('454097608227553297').send(dd + ' ');     
  
 }
        	   
server.timeout = 0;
server.listen(4466, "localhost");

client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels `); 
client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {

var nickk = message.member.displayName;
 var msgg = message.content.toString();
if(message.author.bot) return;

if(message.channel.id == '454097608227553297'){
mySocket.write("<" + nickk + ">" + msgg);
}
if(message.channel.id == '452988162424307713'){

	if(msgg === '!help'){
client.channels.get('452988162424307713').send('your nick is ' + nickk);     
 }
}

});


client.login(config.token);
