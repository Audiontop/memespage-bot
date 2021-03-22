const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = 't!';

bot.on("message", function(message) {
    if(message.content === "t!meme"){
    var change = Math.floor(Math.random() * 3)

    if(change == 1) {
        message.channel.send("Wenn OlivenÖl aus Oliven gemacht wird woraus wird dann BabyÖl gemacht Oh, mein Gott!")
    }
    if(change == 0) {
        message.channel.send("")
    }}
});

bot.on('message', function(message){
    if(message.content === 't!f'){


        message.channel.send("für fortnäit :fist::fist::french_bread::croissant:")
    }
});

bot.on('message', message => {
	if (message.content === 't!ping') {
		message.channel.send('Pong!');
	}
});

bot.on('message', function(message){
    if(message.content === 't!joke'){


        message.channel.send('I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane\n“Debugging” is like being the detective in a crime drama where you are also the murderer\nThe best thing about a Boolean is that even if you are wrong, you are only off by a bit.\nA programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.\nIf you listen to a UNIX shell, can you hear the\nWhy do Java programmers have to wear glasses? Because they don’t C#.\n  What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.\nWhen Apple employees die, does their life HTML5 in front of their eyes?\nWithout requirements or design, programming is the art of adding bugs to an empty text file.\nBefore software can be reusable it first has to be usable.\nThe best method for accelerating a computer is the one that boosts it by 9.8 \n.I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.\nThere are two ways to write error-free programs; only the third one works.')
    }
});

bot.on('message', function(message){
    if(message.content.startsWith('t!avatar')){

        let user = message.mentions.users.first() || message.author
        let embed = new Discord.MessageEmbed() 
    .setImage(user.displayAvatarURL())
    
    message.channel.send(embed)  
    }
});

bot.on('message', function(message){
    if(message.content === 'hey'){


        message.channel.send('Hey!')
    }
});


bot.on('message', function(message){
    if(message.content === 'Hey'){


        message.channel.send('Hey!')
    }
});

bot.on('message', function(message){
    if(message.content.startsWith('t!Avatar')){

        let user = message.mentions.users.first() || message.author
        let embed = new Discord.MessageEmbed() 
    .setImage(user.displayAvatarURL())
    
    message.channel.send(embed)  
    }
});

bot.on('message', function(message){
    if(message.content === 'Was geht?'){


        message.channel.send("Nichts bei dir")
    }
});


bot.on('message', function(message){
    if(message.content === 'was geht'){


        message.channel.send("Nichts bei dir")
    }
});


bot.on('message', function(message){
    if(message.content === 'Was geht'){


        message.channel.send("Nichts bei dir")
    }
});


bot.on('message', function(message){
    if(message.content === 'hallo'){


        message.channel.send("Hallo züruck!")
    }
});

bot.on('message', function(message){
    if(message.content === 'Hallo'){


        message.channel.send("Hallo züruck!")
    }
});

bot.on('message', function(message){
    if (message.content === "t!clear") {
         if(!message.member.hasPermission("MANAGE_MESSAGES")){
             message.channel.send("Du hast keine berechtigung für Diesen Command!")
         }
         message.delete()
         message.channel.bulkDelete(10).then(() => {
            message.channel.send('Habe die Nachrichten Gelöscht!').then(msg => msg.delete(100));
            return;
         })
    }
})

bot.on('message', function(message){
    if(message.content === 't!help'){

        message.channel.send('du brachst hilfe mit den commands dan pass mal auf!\nmit t!ping kannst du sehen ob ich Aktiv oder Inaktiv bin!\n mit t!flip kannst du was Spielen\nund t!Avatar kannst du von dir oder von anderen leuten Sein Profilbild sehen!\nmit t!f kriegt man eine nachricht für fortnäit :fist::fist::french_bread::croissant:')
    }

});

bot.on("message", function(message) {
    if(message.content === "t!flip"){
    var change = Math.floor(Math.random() * 2)

    if(change == 1) {
        message.channel.send("Deine Münze zeigt Kopf")
    }
    if(change == 0) {
        message.channel.send("Deine Münze zeigt Zahl")
    }}
})


var version = '1.5.0';

bot.on('ready', () => {
    console.log('Der Bot ist nun EinsatzBereit')

    bot.user.setActivity('t!help', { type: 'PLAYING'}).catch(console.error)
})

bot.login(process.env.token)