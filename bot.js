const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Pong!' + client.ping + 'ms');
  }
  if (message.content === prefix + 'avatarım') {
	message.channel.send(message.author.avatarURL);
  }
  if (message.content === prefix + 'davet') {
	message.channel.send('https://discordapp.com/oauth2/authorize?client_id=566625016913854478&scope=bot&permissions=805829694');
  }

  if (message.content === prefix + 'reboot') {

	  if (message.author.id === "541227790205321328") {
		  message.channel.send('Başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else
		  message.channel.send(':x: Geçersiz kullanıcı adı')
  }


});

client.login(ayarlar.token);
