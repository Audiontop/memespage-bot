const Discord = require("discord.js");
const bot = new Discord.Client();
const got = require('got');
const PREFIX = 't!';

bot.on('message', message => {
    if (message.content === "?meme"){
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }
})

bot.on("message", message => {
    if(message.content === ('t!userinfo')){
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
})



bot.on("message", message => {
    if(message.content === ('t!server')){
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
}
);

bot.on('message', function(message){
    if(message.content === 'Sheesh'){


        message.channel.send("sheeeeeeesh")
    }
});

bot.on("message", message => {
    if(message.content.startsWith('t!ping')){
        message.channel.send('Pong! Dein Ping ist:'+bot.ws.ping+"ms");
    }
})

bot.on('message', function(message){
    if(message.content === 'sheesh'){


        message.channel.send("sheeeeeeesh")
    }
});

bot.on("message", function(message) {
    if(message.content === "t!meme"){
    var change = Math.floor(Math.random() * 5)

    if(change == 1) {
        message.channel.send("Wenn OlivenÖl aus Oliven gemacht wird woraus wird dann BabyÖl gemacht Oh, mein Gott!")
    }
    if(change == 2) {
        message.channel.send("Was ist Rot und schlecht für die Zähne Ein Ziegelstein.")
    }
    if(change == 3) {
        message.channel.send("Habe ich gesagt Mülltonne öffne dich , oder warum redest du mit mir")
    }
    if(change == 4) {
        message.channel.send("14 jähriger auf Partys, wenn man denen Apfelschorle gibt und sagt es wäre Bier")
    }
    if(change == 5) {
        message.channel.send("Natürlich Spreche ich mit mir Selbst. Manchmal brauche ich eine Kompetente Beratung...")
    }}
});

bot.on('message', function(message){
    if(message.content === 't!f'){


        message.channel.send("für fortnäit :fist::fist::french_bread::croissant:")
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