const Discord = require("discord.js");
const client = new Discord.Client();

var net = require('net');
var mySocket;
var server = net.createServer(function(socket) {
mySocket = socket;
mySocket.on("connect", onConnect);
mySocket.on("data", onData);
mySocket.on("close", onDisconnect);
 });
  function onConnect() {
  		client.channels.get('468208451798040586').send('Connected ');

  	}
	  function onDisconnect() {
		client.channels.get('468208451798040586').send('Disconnected ');

  	}

  	function onData(d)  {
	   var dd = d.toString();


		client.channels.get('468208451798040586').send(dd + ' ');

 }

server.timeout = 0;
server.listen(8080, "localhost");

client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels `);
client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {

var nickk = message.member.displayName;
 var msgg = message.content.toString();
if(message.author.bot) return;

if(message.channel.id == '468208451798040586'){
mySocket.write("<" + nickk + ">" + msgg);
}

	if(msgg === '!help'){
//client.channels.get('468208451798040586').send('your nick is ' + nickk);     
 }


});


client.login('NDY4MjEzOTIzNTE1MDcyNTIz.Di15vw.27CD_i2LuPWxW36sa-RG--Ptbbo',);
